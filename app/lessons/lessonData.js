// Data used to generate lessons.

const lessonData = [
  {
    lessonId: 1,
    title: "Lesson 1",
    style: 1,
    words: ["bathroom", "where"],
    supportWords: ["is"],
    reviewWords: [],
    phrases: [1],
    prompts: [],
  },
  {
    lessonId: 2,
    title: "Lesson 2",
    style: 2,
    words: ["hello", "how_are_you"],
    supportWords: [],
    reviewWords: ["where", "bathroom"],
    phrases: [3, 2],
    prompts: [],
  },
  {
    lessonId: 3,
    title: "Lesson 3",
    style: 3,
    words: ["good"],
    supportWords: ["and", "you"],
    reviewWords: ["hello", "how_are_you"],
    phrases: [4],
    prompts: [1],
  },
  {
    lessonId: 4,
    title: "Lesson 4",
    style: 3,
    words: ["goodbye", "see_you_later"],
    supportWords: [],
    reviewWords: ["good", "hello", "where"],
    phrases: [],
    prompts: [2],
  },
  {
    lessonId: 5,
    title: "Lesson 5",
    style: 3,
    words: ["excuse_me", "please", "thank_you"],
    supportWords: [],
    reviewWords: ["good", "goodbye", "hello"],
    phrases: [5],
    prompts: [],
  },
  {
    lessonId: 6,
    title: "Lesson 6",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 7,
    title: "Lesson 7",
    style: 2,
    words: ["menu", "check"],
    supportWords: [],
    reviewWords: ["please"],
    phrases: [6, 7],
    prompts: [],
  },
  {
    lessonId: 8,
    title: "Lesson 8",
    style: 6,
    words: ["water", "coffee"],
    supportWords: [],
    reviewWords: ["excuse_me", "bathroom"],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 9,
    title: "Lesson 9",
    style: 5,
    words: ["I_need"],
    supportWords: [],
    reviewWords: ["menu", "water"],
    phrases: [8, 9],
    prompts: [],
  },
  {
    lessonId: 10,
    title: "Lesson 10",
    style: 2,
    words: ["recommend", "what"],
    supportWords: [],
    reviewWords: ["you"],
    phrases: [10],
    prompts: [],
  },
  {
    lessonId: 11,
    title: "Lesson 11",
    style: 6,
    words: ["cheers", "bon_appetit"],
    supportWords: [],
    reviewWords: ["menu", "check"],
    phrases: [11],
    prompts: [],
  },
  {
    lessonId: 12,
    title: "Lesson 12",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 13,
    title: "Lesson 13",
    style: 2,
    words: ["how_much"],
    supportWords: [],
    reviewWords: ["one", "two", "three"],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 14,
    title: "Lesson 14",
    style: 8,
    words: ["five", "ten", "fifty"],
    supportWords: ["this"],
    reviewWords: ["how_much"],
    phrases: [12],
    prompts: [],
  },
  {
    lessonId: 15,
    title: "Lesson 15",
    style: 2,
    words: ["cost", "twenty"],
    supportWords: [],
    reviewWords: ["how_much", "ten", "fifty"],
    phrases: [13],
    prompts: [],
  },
  {
    lessonId: 16,
    title: "Lesson 16",
    style: 7,
    words: ["free"],
    supportWords: [],
    reviewWords: ["how_much", "this", "cost", "excuse_me", "please"],
    phrases: [14],
    prompts: [],
  },
  {
    lessonId: 17,
    title: "Lesson 17",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 18,
    title: "Lesson 18",
    style: 2,
    words: ["open", "closed"],
    supportWords: [],
    reviewWords: ["bathroom", "where"],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 19,
    title: "Lesson 19",
    style: 6,
    words: ["yes", "no"],
    supportWords: [],
    reviewWords: ["open", "closed"],
    phrases: [15, 16],
    prompts: [],
  },
  {
    lessonId: 20,
    title: "Lesson 20",
    style: 8,
    words: ["one", "two", "three"],
    supportWords: [],
    reviewWords: ["yes", "no"],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 21,
    title: "Lesson 21",
    style: 2,
    words: ["time"],
    supportWords: ["are_you"],
    reviewWords: ["what"],
    phrases: [17],
    prompts: [],
  },
  {
    lessonId: 22,
    title: "Lesson 22",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 23,
    title: "Lesson 23",
    style: 6,
    words: ["entrance", "exit"],
    supportWords: [],
    reviewWords: ["where", "is"],
    phrases: [18, 19],
    prompts: [],
  },
  {
    lessonId: 24,
    title: "Lesson 24",
    style: 2,
    words: ["bus", "station"],
    supportWords: [],
    reviewWords: ["where", "excuse_me"],
    phrases: [20],
    prompts: [],
  },
  {
    lessonId: 25,
    title: "Lesson 25",
    style: 5,
    words: ["taxi"],
    supportWords: [],
    reviewWords: ["I_need"],
    phrases: [21],
    prompts: [],
  },
  {
    lessonId: 26,
    title: "Lesson 26",
    style: 3,
    words: ["downtown"],
    supportWords: [],
    reviewWords: ["bus", "station"],
    phrases: [22],
    prompts: [],
  },
  {
    lessonId: 27,
    title: "Lesson 27",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 28,
    title: "Lesson 28",
    style: 2,
    words: ["chicken", "cheese"],
    supportWords: [],
    reviewWords: ["with", "without"],
    phrases: [23, 24],
    prompts: [],
  },
  {
    lessonId: 29,
    title: "Lesson 29",
    style: 4,
    words: ["large", "small"],
    supportWords: [],
    reviewWords: ["chicken", "cheese", "one", "two"],
    phrases: [25, 26],
    prompts: [],
  },
  {
    lessonId: 30,
    title: "Lesson 30",
    style: 6,
    words: ["drinks", "food"],
    supportWords: [],
    reviewWords: ["large", "water", "three"],
    phrases: [27],
    prompts: [],
  },
  {
    lessonId: 31,
    title: "Lesson 31",
    style: 8,
    words: ["beer", "wine"],
    supportWords: [],
    reviewWords: ["please"],
    phrases: [28],
    prompts: [],
  },
  {
    lessonId: 32,
    title: "Lesson 32",
    style: 6,
    words: ["beef", "fish"],
    supportWords: [],
    reviewWords: [],
    phrases: [29],
    prompts: [],
  },
  {
    lessonId: 33,
    title: "Lesson 33",
    style: 7,
    words: ["pork"],
    supportWords: [],
    reviewWords: ["cheese"],
    phrases: [30, 31],
    prompts: [],
  },
  {
    lessonId: 34,
    title: "Lesson 34",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 35,
    title: "Lesson 35",
    style: 2,
    words: ["speak", "english"],
    supportWords: [],
    reviewWords: ["you"],
    phrases: [32],
    prompts: [],
  },
  {
    lessonId: 36,
    title: "Lesson 36",
    style: 2,
    words: ["youre_welcome"],
    supportWords: [],
    reviewWords: ["thank_you", "yes"],
    phrases: [33],
    prompts: [],
  },
  {
    lessonId: 38,
    title: "Lesson 38",
    style: 2,
    words: ["I_understand", "spanish"],
    supportWords: [],
    reviewWords: ["speak", "hello"],
    phrases: [34, 35],
    prompts: [],
  },
  {
    lessonId: 39,
    title: "Lesson 39",
    style: 8,
    words: ["good_morning", "good_afternoon"],
    supportWords: [],
    reviewWords: ["how_are_you"],
    phrases: [36, 37],
    prompts: [],
  },
  {
    lessonId: 40,
    title: "Lesson 40",
    style: 8,
    words: ["good_night"],
    supportWords: [],
    reviewWords: ["goodbye", "and"],
    phrases: [38],
    prompts: [],
  },
  {
    lessonId: 41,
    title: "Lesson 41",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 42,
    title: "Lesson 42",
    style: 2,
    words: ["change", "receipt"],
    supportWords: [],
    reviewWords: ["please", "how_much"],
    phrases: [39, 40],
    prompts: [],
  },
  {
    lessonId: 43,
    title: "Lesson 43",
    style: 4,
    words: ["all", "for"],
    supportWords: [],
    reviewWords: ["cost", "one", "two", "three"],
    phrases: [41, 42],
    prompts: [],
  },
  {
    lessonId: 44,
    title: "Lesson 44",
    style: 5,
    words: ["four", "six"],
    supportWords: [],
    reviewWords: ["fifty", "ten", "five"],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 45,
    title: "Lesson 45",
    style: 5,
    words: ["seven", "eight", "nine"],
    supportWords: [],
    reviewWords: ["four", "five", "six"],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 46,
    title: "Lesson 46",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 47,
    title: "Lesson 47",
    style: 2,
    words: ["time"],
    supportWords: ["is_it"],
    reviewWords: ["what", "one", "two", "three"],
    phrases: [43],
    prompts: [],
  },
  {
    lessonId: 48,
    title: "Lesson 48",
    style: 8,
    words: ["eleven", "twelve"],
    supportWords: [],
    reviewWords: ["time", "what", "four", "five", "six"],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 49,
    title: "Lesson 49",
    style: 6,
    words: ["half", "thirty"],
    supportWords: [],
    reviewWords: ["open", "closed"],
    phrases: [44],
    prompts: [],
  },
  {
    lessonId: 50,
    title: "Lesson 50",
    style: 4,
    words: ["fifteen", "forty_five"],
    supportWords: [],
    reviewWords: ["seven", "eight", "nine", "ten"],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 51,
    title: "Lesson 51",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 52,
    title: "Lesson 52",
    style: 2,
    words: ["time"],
    supportWords: [],
    reviewWords: ["how_much"],
    phrases: [45],
    prompts: [],
  },
  {
    lessonId: 53,
    title: "Lesson 53",
    style: 3,
    words: ["train", "ticket"],
    supportWords: [],
    reviewWords: ["two", "entrance", "station"],
    phrases: [46, 47],
    prompts: [],
  },
  {
    lessonId: 54,
    title: "Lesson 54",
    style: 7,
    words: ["next"],
    supportWords: [],
    reviewWords: ["what", "time", "exit"],
    phrases: [48],
    prompts: [],
  },
  {
    lessonId: 55,
    title: "Lesson 55",
    style: 8,
    words: ["minute", "hour"],
    supportWords: [],
    reviewWords: ["twenty"],
    phrases: [49],
    prompts: [],
  },
  {
    lessonId: 56,
    title: "Lesson 56",
    style: 3,
    words: ["lets_go", "here"],
    supportWords: [],
    reviewWords: ["train"],
    phrases: [50],
    prompts: [],
  },
  {
    lessonId: 57,
    title: "Lesson 57",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 58,
    title: "Lesson 58",
    style: 3,
    words: ["with", "without"],
    supportWords: [],
    reviewWords: ["cheese", "chicken"],
    phrases: [51, 52],
    prompts: [],
  },
  {
    lessonId: 59,
    title: "Lesson 59",
    style: 2,
    words: ["a_little", "spicy"],
    supportWords: [],
    reviewWords: [],
    phrases: [53],
    prompts: [],
  },
  {
    lessonId: 60,
    title: "Lesson 60",
    style: 5,
    words: ["meat"],
    supportWords: [],
    reviewWords: ["yes", "please"],
    phrases: [54, 55],
    prompts: [],
  },
  {
    lessonId: 61,
    title: "Lesson 61",
    style: 6,
    words: ["hot", "cold"],
    supportWords: [],
    reviewWords: ["large", "beef"],
    phrases: [56],
    prompts: [],
  },
  {
    lessonId: 62,
    title: "Lesson 62",
    style: 6,
    words: ["eggs", "beans"],
    supportWords: [],
    reviewWords: ["pork", "and"],
    phrases: [57],
    prompts: [],
  },
  {
    lessonId: 63,
    title: "Lesson 63",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 64,
    title: "Lesson 64",
    style: 8,
    words: ["very"],
    supportWords: [],
    reviewWords: ["good", "how_are_you"],
    phrases: [58],
    prompts: [],
  },
  {
    lessonId: 65,
    title: "Lesson 65",
    style: 8,
    words: ["excuse_me2"],
    supportWords: [],
    reviewWords: ["hello", "goodbye"],
    phrases: [59],
    prompts: [],
  },
  {
    lessonId: 66,
    title: "Lesson 66",
    style: 5,
    words: ["sorry"],
    supportWords: [],
    reviewWords: ["I_understand", "a_little", "spanish"],
    phrases: [60, 61],
    prompts: [],
  },
  {
    lessonId: 67,
    title: "Lesson 67",
    style: 2,
    words: ["name", "my"],
    supportWords: [],
    reviewWords: ["is"],
    phrases: [62],
    prompts: [],
  },
  {
    lessonId: 68,
    title: "Lesson 68",
    style: 5,
    words: ["toilet_paper"],
    supportWords: ["is_there"],
    reviewWords: ["bathroom", "where", "I_need"],
    phrases: [63, 64],
    prompts: [],
  },
  {
    lessonId: 69,
    title: "Lesson 69",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 70,
    title: "Lesson 70",
    style: 2,
    words: ["reservation"],
    supportWords: [],
    reviewWords: ["for", "one", "two", "three"],
    phrases: [65],
    prompts: [],
  },
  {
    lessonId: 71,
    title: "Lesson 71",
    style: 6,
    words: ["bread", "salt"],
    supportWords: [],
    reviewWords: ["with", "please"],
    phrases: [67],
    prompts: [],
  },
  {
    lessonId: 72,
    title: "Lesson 72",
    style: 6,
    words: ["mushrooms"],
    supportWords: [],
    reviewWords: ["without", "bread", "salt"],
    phrases: [68],
    prompts: [],
  },
  {
    lessonId: 73,
    title: "Lesson 73",
    style: 5,
    words: ["milk", "sugar"],
    supportWords: [],
    reviewWords: ["coffee", "water"],
    phrases: [69],
    prompts: [],
  },
  {
    lessonId: 74,
    title: "Lesson 74",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 75,
    title: "Lesson 75",
    style: 6,
    words: ["left", "right"],
    supportWords: [],
    reviewWords: ["entrance", "exit"],
    phrases: [70, 71],
    prompts: [],
  },
  {
    lessonId: 76,
    title: "Lesson 76",
    style: 8,
    words: ["first", "second"],
    supportWords: [],
    reviewWords: ["left", "right"],
    phrases: [72, 73],
    prompts: [],
  },
  {
    lessonId: 77,
    title: "Lesson 77",
    style: 2,
    words: ["street"],
    supportWords: [],
    reviewWords: ["first", "second"],
    phrases: [74, 75],
    prompts: [],
  },
  {
    lessonId: 78,
    title: "Lesson 78",
    style: 2,
    words: ["return"],
    supportWords: [],
    reviewWords: ["bus", "what", "time"],
    phrases: [76],
    prompts: [],
  },
  {
    lessonId: 79,
    title: "Lesson 79",
    style: 5,
    words: ["day", "night"],
    supportWords: [],
    reviewWords: ["all", "trains"],
    phrases: [77],
    prompts: [],
  },
  {
    lessonId: 80,
    title: "Lesson 80",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: ["entrance", "exit"],
    phrases: [],
    prompts: [],
  },
  {
    lessonId: 81,
    title: "Lesson 81",
    style: 2,
    words: ["market"],
    supportWords: [],
    reviewWords: ["where", "is"],
    phrases: [78],
    prompts: [],
  },
  {
    lessonId: 82,
    title: "Lesson 82",
    style: 2,
    words: ["pharmacy"],
    supportWords: [],
    reviewWords: ["I need"],
    phrases: [79],
    prompts: [],
  },
  {
    lessonId: 83,
    title: "Lesson 83",
    style: 7,
    words: ["bakery"],
    supportWords: [],
    reviewWords: ["bread", "with", "cheese"],
    phrases: [80],
    prompts: [],
  },
  {
    lessonId: 84,
    title: "Lesson 84",
    style: 2,
    words: ["airport", "hotel"],
    supportWords: ["where_to"],
    reviewWords: ["street", "left", "right"],
    phrases: [81],
    prompts: [],
  },
  {
    lessonId: 85,
    title: "Lesson 85",
    style: 10,
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    prompts: [],
  },
];

export default lessonData;
