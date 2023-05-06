import cache from "./cache";
export default async function getCompletedLessons(
  country,
  setCompletedLessons
) {
  let cachedCompletedLessons = await cache.get("completedLessons");
  if (!cachedCompletedLessons) {
    cachedCompletedLessons = {};
  }
  if (!cachedCompletedLessons.hasOwnProperty(country)) {
    cachedCompletedLessons = { [country]: [] };
  }
  setCompletedLessons(cachedCompletedLessons);
}
