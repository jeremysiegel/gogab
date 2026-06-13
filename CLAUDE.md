# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

GoGab (package/repo name `tripty`) is a React Native + Expo (SDK 48) mobile app for learning travel phrases in foreign languages. Despite the `tsconfig.json`, source is plain JavaScript (`.js`). Bundle id / package: `com.evolutus.gogab`.

## Commands

```bash
yarn start          # expo start --dev-client (Metro dev server; needs a dev build installed)
yarn android        # expo run:android (native build + run)
yarn ios            # expo run:ios
yarn web            # expo start --web
```

Builds are done with EAS (`eas build --profile <development|preview|preview2|production>`, see `eas.json`). There is **no test runner, linter, or formatter** configured — do not assume `yarn test`/`yarn lint` exist.

## Architecture

### Navigation (entry: `App.js`)
`App.js` restores the cached user and gates on auth: `user ? <LessonNavigator /> : <AuthNavigator />`. Global app state lives in **two React Contexts**, not a store:
- `app/navigation/authContext.js` — `country`, `selectedCountries`, `user` (+ setters). `country` is the active target language (e.g. `"it"`, `"es"`), defaulting to `"it"`. This drives which dictionary/phrase data is loaded everywhere.
- `app/navigation/lessonContext.js` — current `lessonData`, `lesson`, `section`, `level` while a lesson is in progress.

Navigator nesting: `LessonNavigator` (native-stack) wraps `AppNavigator` (bottom tabs: Learn / My World Map / Settings) plus one stack screen **per exercise type**. Each exercise `screenType` string (`newWord`, `pickImage`, `multipleChoice`, `matching`, `sentenceBuilder`, `prompt`, `tip`, `end`) maps to both a `Stack.Screen` name and a screen in `app/screens/exerciseScreens/`.

### The data pipeline (the core of the app)
Lessons are **generated at runtime**, not stored as finished objects. The flow:

1. `app/lessons/lessonData.js` — array of lessons: each has `phrases`, `prompts`, `reviewWords`, and a `style` id.
2. `app/api/generateLessonData.js` — `generateLessonData(lessonId, sectionLessons, country)` expands a lesson into an ordered map of exercises by applying the exercise `sequence` from `app/api/lessonStyles.js` (keyed by `styleId`) to the lesson's words/phrases. Called from `SectionScreen`.
3. `app/api/getExerciseData.js` — `getExerciseData({ exerciseId, lessonData, country, ... })` produces the fully-resolved props for a single exercise screen (the learn-word array, translations, shuffled multiple-choice/matching `selections`, pronunciation help text, etc.). This is the most complex file; read it before touching exercise rendering.

### Dictionaries & phrases (per-language data)
Word/phrase content lives in `app/lessons/` as plain JS object literals, **split by language and merged at lookup time**:
- `app/api/getDictionary.js` — `getDictionary(country)` merges `dictionary-common.js` (shared fields, e.g. `rank`) with the language file (`dictionary-it.js`, `dictionary-es.js`, `dictionary-ceb.js`, `dictionary-lao.js`). A word only appears if it exists in **both** common and the language file. Dictionary keys are English snake_case (`how_are_you`); values carry `translation`, `pronunciation`, `wordIdNum`, and a `require()`d `audio` asset.
- `app/api/getPhrase.js` — `getPhrase(phraseId, country)` looks up phrases (ids prefixed with `P`) from `phraseDictionary-en.js` / `-it.js` / `-es.js`. Note the misspelled filename `phraseDisctionary-es.js` and that `getPhrase`'s `switch` currently falls back to the Spanish dictionary for unhandled languages.

When adding a language: add `dictionary-<lang>.js`, register it in `getDictionary.js`, add audio under `app/assets/audio/<lang>/`, and (for phrases) a phrase dictionary + a case in `getPhrase.js`.

### Utilities (`app/utility/`)
Small pure helpers compose the pipeline: `stripArray` (removes punctuation/underscores), `translate` (English keys → target-language words via a dictionary), `punctuate`, `shuffle`, `getElementFromId` (finds an object in an array by a key field — used pervasively since lesson/phrase data are arrays). 

- `cache.js` — thin AsyncStorage wrapper; **all keys are prefixed with `"cached"`** and values wrapped as `{ value, timestamp }`. Use `cache.store`/`cache.get` rather than AsyncStorage directly. Persisted keys include `user`, `country`, `worldMapCountries`.
- `logger.js` — no-op logging shim exposing `start`/`logBug`/`identify`/`logEvent` (logs to console in `__DEV__`). Bugsnag and Mixpanel were removed; the API is kept so the ~7 call sites don't change. `logger.start()` runs once in `App.js`.

### Styling
`app/config/` holds `colors.js`, `fonts.js`, `styles.js`, `constants.js`. UI uses NativeBase (`NativeBaseProvider` in `App.js`) and `@rneui/themed`. Fonts load via `hooks/useFonts.js` while the splash screen is held.

## Conventions & gotchas
- Data files use plain `export default {...}` / `export default [...]`. They previously used the bare-assignment form (`export default dictionary = {...}`), which created an implicit global and throws `property "X" doesn't exist` under SDK 55's strict-mode Hermes — don't reintroduce it. Consumers always use the default import.
- The same English word/phrase key threads through lessonData → generateLessonData → getExerciseData → dictionary lookup. A typo or a key missing from `dictionary-common.js` silently drops the word (see the `&&` guard in `getDictionary.js`).
- Errors in the data path are generally swallowed with `try/catch` + `console.log`; expect missing-data bugs to surface as empty screens, not crashes.
