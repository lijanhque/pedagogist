import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

const configUrl = new URL("../src/data/practiceQuestionBank.json", import.meta.url);
const distribution = JSON.parse(await readFile(configUrl, "utf8"));
const sections = ["speaking", "writing", "reading", "listening"];
const difficultyLevels = ["easy", "medium", "hard"];
const letters = ["a", "b", "c", "d", "e"];

const topics = [
  {
    name: "campus shuttle access",
    benefit: "shorter waits between the science buildings and the main library",
    limitation: "the observation period included only weekday travel",
    recommendation: "compare weekday and weekend routes before changing the timetable",
    metric: "average waiting time",
    unit: "minutes",
  },
  {
    name: "library study spaces",
    benefit: "more students found a quiet desk during peak hours",
    limitation: "the survey did not include students who study off campus",
    recommendation: "extend the room survey to include off-campus learners",
    metric: "occupied study desks",
    unit: "percent",
  },
  {
    name: "community garden workshops",
    benefit: "participants reported greater confidence with seasonal planting",
    limitation: "weather reduced attendance during two scheduled sessions",
    recommendation: "offer a make-up session when outdoor activities are cancelled",
    metric: "workshop attendance",
    unit: "people",
  },
  {
    name: "digital archive access",
    benefit: "researchers located historical documents in fewer searches",
    limitation: "some older records were not available in a searchable format",
    recommendation: "digitize the remaining records before expanding the archive",
    metric: "successful searches",
    unit: "percent",
  },
  {
    name: "bicycle parking capacity",
    benefit: "riders spent less time looking for a secure space",
    limitation: "the team counted bicycles at only three entrances",
    recommendation: "measure demand at every entrance before installing new racks",
    metric: "spaces used",
    unit: "percent",
  },
  {
    name: "peer tutoring appointments",
    benefit: "students received feedback earlier in the assignment cycle",
    limitation: "appointments were concentrated in two academic departments",
    recommendation: "recruit tutors from a wider range of departments",
    metric: "appointments completed",
    unit: "percent",
  },
  {
    name: "campus water refill stations",
    benefit: "students reported fewer purchases of single-use bottles",
    limitation: "the project did not track use during holiday periods",
    recommendation: "collect another term of usage data before adding stations",
    metric: "daily refills",
    unit: "hundreds",
  },
  {
    name: "evening language classes",
    benefit: "working students could attend without missing daytime lectures",
    limitation: "the pilot offered classes at only one proficiency level",
    recommendation: "test additional proficiency groups in the next term",
    metric: "weekly attendance",
    unit: "students",
  },
  {
    name: "accessible lecture materials",
    benefit: "students reviewed course concepts in formats that suited their needs",
    limitation: "some materials were uploaded after the related lecture",
    recommendation: "set a publication deadline for every course resource",
    metric: "materials available on time",
    unit: "percent",
  },
  {
    name: "urban tree monitoring",
    benefit: "volunteers identified young trees that needed additional water",
    limitation: "the sample covered one neighborhood and one growing season",
    recommendation: "repeat the measurements across several neighborhoods",
    metric: "trees in healthy condition",
    unit: "percent",
  },
  {
    name: "museum audio guides",
    benefit: "visitors spent longer exploring the archaeology collection",
    limitation: "the study did not compare different guide languages",
    recommendation: "offer a multilingual trial and compare visitor feedback",
    metric: "collection visits",
    unit: "percent",
  },
  {
    name: "student meal planning",
    benefit: "participants wasted less food at the end of each week",
    limitation: "meal records were self-reported rather than independently weighed",
    recommendation: "combine diaries with direct measurement in a follow-up",
    metric: "food discarded",
    unit: "kilograms",
  },
  {
    name: "renewable energy lessons",
    benefit: "learners could explain how storage supports variable generation",
    limitation: "the assessment measured knowledge immediately after the lesson",
    recommendation: "check whether students retain the concepts later in the year",
    metric: "assessment scores",
    unit: "points",
  },
  {
    name: "coastal habitat surveys",
    benefit: "field teams recorded more consistent observations across sites",
    limitation: "rough conditions prevented visits to two shoreline locations",
    recommendation: "schedule repeat visits to sites missed during poor weather",
    metric: "survey records completed",
    unit: "percent",
  },
  {
    name: "research equipment loans",
    benefit: "laboratories shared specialist tools instead of buying duplicates",
    limitation: "loan records did not include informal equipment exchanges",
    recommendation: "use one shared booking system for all equipment loans",
    metric: "completed bookings",
    unit: "per month",
  },
  {
    name: "public transport information",
    benefit: "new visitors found the correct campus stop more easily",
    limitation: "the review focused on people who already used a smartphone",
    recommendation: "test printed directions with visitors who do not use the app",
    metric: "successful arrivals",
    unit: "percent",
  },
];

const institutions = [
  "Northbridge College",
  "Westhaven University",
  "Riverside Institute",
  "Cedar Grove University",
  "Eastfield College",
  "Harbourview Institute",
  "Mapleford University",
  "Kingswell College",
];
const locations = [
  "Alder Bay",
  "Brookmere",
  "Clearwater",
  "Dunwich",
  "Elmstead",
  "Fairhaven",
  "Glenford",
  "Hillcrest",
];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const objects = ["a course outline", "a notebook", "their student card", "a printed map", "a draft report"];
const methods = ["a short survey", "a booking log", "a field observation", "a weekly interview", "a usage record"];
const limitations = [
  "the project covered one academic term",
  "participation was voluntary",
  "the sample came from a single location",
  "the team could not observe every session",
];
const recommendations = [
  "repeat the study with a larger group",
  "compare results across two academic terms",
  "include a second location in the next trial",
  "publish the findings before extending the program",
];

function stableUuid(value) {
  const bytes = createHash("sha1").update(value).digest().subarray(0, 16);
  bytes[6] = (bytes[6] & 0x0f) | 0x50;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = bytes.toString("hex");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function study(seed) {
  const topic = topics[seed % topics.length];
  const institution = institutions[Math.floor(seed / 3) % institutions.length];
  const location = locations[Math.floor(seed / 5) % locations.length];
  const year = 2018 + (seed % 8);
  const participants = 84 + (seed % 917);
  const baseline = 24 + ((seed * 7) % 38);
  const change = 6 + ((seed * 11) % 29);
  const finalValue = baseline + change;
  const method = methods[Math.floor(seed / 7) % methods.length];
  const limitation = limitations[Math.floor(seed / 11) % limitations.length];
  const recommendation = recommendations[Math.floor(seed / 13) % recommendations.length];
  const passage = `In ${year}, a fictional research team at ${institution} examined ${topic.name} in ${location}. The team used ${method} and collected responses from ${participants} participants. The recorded ${topic.metric.toLowerCase()} changed from ${baseline} to ${finalValue} ${topic.unit}; participants also noted ${topic.benefit}. The researchers cautioned that ${limitation}, and recommended that future teams ${recommendation}.`;
  const finding = `the recorded ${topic.metric.toLowerCase()} changed from ${baseline} to ${finalValue} ${topic.unit}`;
  return { topic, institution, location, year, participants, baseline, finalValue, method, limitation, recommendation, passage, finding };
}

function optionsWithAnswers(correctTexts, distractorTexts, seed) {
  const correct = [...new Set(correctTexts)];
  const distractors = [...new Set(distractorTexts)].filter((text) => !correct.includes(text));
  const choices = [
    ...correct.map((text) => ({ text, correct: true })),
    ...distractors.map((text) => ({ text, correct: false })),
  ].slice(0, 5);

  if (choices.length < Math.max(4, correct.length + 1)) {
    throw new Error(`Not enough unique answer choices for generated question ${seed}`);
  }

  const offset = seed % choices.length;
  const rotated = [...choices.slice(offset), ...choices.slice(0, offset)];
  const options = rotated.map((choice, index) => ({ id: letters[index], text: choice.text }));
  const correctAnswers = rotated.flatMap((choice, index) => choice.correct ? [letters[index]] : []);
  return { options, correctAnswers };
}

function choicesForBlank(correctAnswer, alternatives) {
  const choices = [correctAnswer];
  for (const alternative of alternatives) {
    if (!choices.includes(alternative)) choices.push(alternative);
    if (choices.length === 3) break;
  }
  if (choices.length !== 3) throw new Error(`Not enough unique blank options for "${correctAnswer}"`);
  return choices;
}

function svgDataUrl(seed, topic) {
  const bars = [0, 1, 2].map((index) => 18 + ((seed * (index + 3) + index * 17) % 63));
  const colors = ["#2563eb", "#16a34a", "#f59e0b"];
  const labels = ["Term 1", "Term 2", "Term 3"];
  const rects = bars.map((value, index) => {
    const height = value * 2;
    const x = 70 + index * 105;
    const y = 210 - height;
    return `<rect x="${x}" y="${y}" width="54" height="${height}" rx="5" fill="${colors[index]}"/><text x="${x + 27}" y="232" text-anchor="middle" font-size="12" fill="#334155">${labels[index]}</text><text x="${x + 27}" y="${y - 7}" text-anchor="middle" font-size="12" fill="#0f172a">${value}</text>`;
  }).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="430" height="270" viewBox="0 0 430 270" role="img" aria-label="Original bar chart for ${topic.name}"><rect width="100%" height="100%" rx="14" fill="#f8fafc"/><text x="215" y="28" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" font-weight="700" fill="#0f172a">${topic.name}</text><line x1="48" y1="210" x2="390" y2="210" stroke="#64748b"/><line x1="48" y1="48" x2="48" y2="210" stroke="#64748b"/>${rects}<text x="215" y="258" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" fill="#475569">Recorded activity (index)</text></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

function makeReadingQuestion(type, seed) {
  const data = study(seed);
  const distractors = topics
    .filter((_, index) => index !== seed % topics.length)
    .slice((seed + 1) % (topics.length - 4), (seed + 1) % (topics.length - 4) + 4)
    .map((topic) => topic.recommendation);

  if (type === "mc-single") {
    const answerSet = optionsWithAnswers([data.recommendation], distractors, seed);
    return {
      title: `Reading: ${data.topic.name}`,
      instruction: "Read the passage and choose the best answer.",
      timeLimit: 150,
      content: {
        passage: data.passage,
        question: `What did the research team recommend about ${data.topic.name}?`,
        ...answerSet,
      },
    };
  }

  if (type === "mc-multiple") {
    const answerSet = optionsWithAnswers(
      [data.finding, data.topic.benefit],
      [data.recommendation, data.limitation, ...distractors],
      seed,
    );
    return {
      title: `Reading: ${data.topic.name}`,
      instruction: "Read the passage and select all statements supported by it.",
      timeLimit: 180,
      content: {
        passage: data.passage,
        question: "Which two statements are supported by the passage?",
        ...answerSet,
      },
    };
  }

  if (type === "reorder-paragraphs") {
    const ordered = [
      { id: "p1", text: `In ${data.year}, a fictional team at ${data.institution} began examining ${data.topic.name} in ${data.location}.` },
      { id: "p2", text: `The researchers used ${data.method} and gathered responses from ${data.participants} participants.` },
      { id: "p3", text: `Their records showed that ${data.finding}; participants also noted ${data.topic.benefit}.` },
      { id: "p4", text: `Because ${data.limitation}, the team advised future researchers to ${data.recommendation}.` },
    ];
    const offset = seed % ordered.length;
    const paragraphs = [...ordered.slice(offset), ...ordered.slice(0, offset)];
    return {
      title: `Reading: ${data.topic.name}`,
      instruction: "Arrange the paragraphs to form a coherent report.",
      timeLimit: 180,
      content: { paragraphs, correctOrder: ordered.map(({ id }) => id) },
    };
  }

  const passage = `At ${data.institution}, the ${data.topic.name} review used [BLANK1] to collect information. The team reported that ${data.finding}, then advised future researchers to [BLANK2].`;
  const blanks = [
    {
      id: "b1",
      position: 1,
      correctAnswer: data.method,
      options: choicesForBlank(data.method, methods),
    },
    {
      id: "b2",
      position: 2,
      correctAnswer: data.recommendation,
      options: choicesForBlank(data.recommendation, recommendations),
    },
  ];
  return {
    title: `Reading: ${data.topic.name}`,
    instruction: "Complete each blank with the word or phrase that best fits the passage.",
    timeLimit: 180,
    content: { passage, blanks },
  };
}

function makeListeningQuestion(type, seed) {
  const data = study(seed);
  const distractors = topics
    .filter((_, index) => index !== seed % topics.length)
    .slice((seed + 2) % (topics.length - 4), (seed + 2) % (topics.length - 4) + 4)
    .map((topic) => topic.recommendation);
  const audioText = `Today I am reporting on ${data.topic.name} at ${data.institution}. The team used ${data.method} with ${data.participants} participants. The records showed that ${data.finding}, and participants noted ${data.topic.benefit}. The main limitation was that ${data.limitation}. The team recommends that future researchers ${data.recommendation}.`;

  if (type === "highlight-correct-summary") {
    const summary = `A fictional study of ${data.topic.name} used ${data.method} and recorded a change from ${data.baseline} to ${data.finalValue} ${data.topic.unit}. Participants reported ${data.topic.benefit}; because ${data.limitation}, the team recommended that researchers ${data.recommendation}.`;
    const answerSet = optionsWithAnswers(
      [summary],
      [
        `The project studied a different subject and concluded that ${distractors[0]}.`,
        `The team found no measurable change and recommended that researchers ${distractors[1]}.`,
        `The report focused on a national survey and advised that ${distractors[2]}.`,
      ],
      seed,
    );
    return {
      title: `Listening: ${data.topic.name}`,
      instruction: "Listen to the recording and select the most accurate summary.",
      timeLimit: 180,
      audioPlayLimit: 1,
      content: { audioText, ...answerSet },
    };
  }

  if (type === "mc-single-listening") {
    const answerSet = optionsWithAnswers([data.recommendation], distractors, seed);
    return {
      title: `Listening: ${data.topic.name}`,
      instruction: "Listen to the recording and choose the best answer.",
      timeLimit: 150,
      audioPlayLimit: 1,
      content: {
        audioText,
        question: "What does the team recommend?",
        ...answerSet,
      },
    };
  }

  if (type === "mc-multiple-listening") {
    const answerSet = optionsWithAnswers(
      [data.finding, data.topic.benefit],
      [data.limitation, data.recommendation, ...distractors],
      seed,
    );
    return {
      title: `Listening: ${data.topic.name}`,
      instruction: "Listen to the recording and select all supported statements.",
      timeLimit: 180,
      audioPlayLimit: 1,
      content: {
        audioText,
        question: "Which two points does the speaker report?",
        ...answerSet,
      },
    };
  }

  if (type === "fill-blanks-listening") {
    const words = [data.method.split(" ")[1], String(data.participants), String(data.finalValue)];
    const transcript = audioText
      .replace(data.method.split(" ")[1], "[BLANK1]")
      .replace(String(data.participants), "[BLANK2]")
      .replace(String(data.finalValue), "[BLANK3]");
    return {
      title: `Listening: ${data.topic.name}`,
      instruction: "Listen to the recording and type the missing words.",
      timeLimit: 180,
      audioPlayLimit: 1,
      content: {
        audioText,
        transcript,
        blanks: words.map((correctAnswer, index) => ({
          id: `b${index + 1}`,
          position: index + 1,
          correctAnswer,
        })),
      },
    };
  }

  if (type === "highlight-incorrect-words") {
    const words = audioText.split(/\s+/);
    const positions = [4, 13, 23].filter((position) => position < words.length);
    const incorrectWords = positions.map((position, index) => {
      const correct = words[position];
      const incorrect = ["carefully", "briefly", "annually"][index];
      words[position] = incorrect;
      return { position, incorrect, correct };
    });
    return {
      title: `Listening: ${data.topic.name}`,
      instruction: "Listen to the recording and select the words that differ from the transcript.",
      timeLimit: 180,
      audioPlayLimit: 1,
      content: { audioText, transcript: words.join(" "), incorrectWords },
    };
  }

  if (type === "write-from-dictation") {
    const dictationText = `The ${data.topic.name} report included ${data.participants} participants and recommended a second academic term.`;
    return {
      title: `Listening: ${data.topic.name}`,
      instruction: "Listen once and type the sentence you hear.",
      timeLimit: 120,
      audioPlayLimit: 1,
      content: { audioText: dictationText, dictationText },
    };
  }

  if (type === "select-missing-word") {
    const missingWord = `term${seed}`;
    const sentence = `The research team plans to repeat the campus survey next ${missingWord}`;
    const answerSet = optionsWithAnswers(
      [missingWord],
      [`semester${seed}`, `month${seed}`, `year${seed}`],
      seed,
    );
    return {
      title: `Listening: ${data.topic.name}`,
      instruction: "Listen to the recording and select the missing word.",
      timeLimit: 120,
      audioPlayLimit: 1,
      content: { audioText: sentence, missingWord, question: "Which word completes the recording?", ...answerSet },
    };
  }

  return {
    title: `Listening: ${data.topic.name}`,
    instruction: "Listen to the recording and summarize its main points.",
    timeLimit: 600,
    audioPlayLimit: 1,
    content: { audioText },
  };
}

function makeSpeakingQuestion(type, seed) {
  const data = study(seed);
  const topic = data.topic;

  if (type === "read-aloud") {
    return {
      title: `Speaking: ${topic.name}`,
      instruction: "Read the text aloud clearly and at a natural pace.",
      prepTime: 30,
      recordTime: 40,
      content: {
        text: `At ${data.institution}, students took part in a ${data.year} review of ${topic.name}. The team used ${data.method} and recorded ${data.finding}. Participants also described ${topic.benefit}. The report notes that ${data.limitation}, so the next stage should ${data.recommendation}.`,
      },
    };
  }
  if (type === "repeat-sentence") {
    return {
      title: `Speaking: Repeat a campus announcement`,
      instruction: "Listen to the sentence and repeat it exactly as you heard it.",
      prepTime: 3,
      recordTime: 15,
      content: {
        text: `The ${topic.name} briefing at ${data.institution} begins at ${8 + (seed % 10)} on ${days[seed % days.length]}, so please bring ${objects[seed % objects.length]}.`,
      },
    };
  }
  if (type === "describe-image") {
    return {
      title: `Speaking: ${topic.name}`,
      instruction: "Describe the chart, highlighting its main features and comparisons.",
      prepTime: 25,
      recordTime: 40,
      imageUrl: svgDataUrl(seed, topic),
      content: {
        imageDescription: `An original bar chart compares three terms of recorded activity for ${topic.name}. The values are ${18 + ((seed * 3) % 63)}, ${18 + ((seed * 4 + 17) % 63)}, and ${18 + ((seed * 5 + 34) % 63)} index points.`,
      },
    };
  }
  if (type === "retell-lecture") {
    return {
      title: `Speaking: ${topic.name}`,
      instruction: "Listen to the lecture and retell its main points in your own words.",
      prepTime: 10,
      recordTime: 40,
      content: {
        lectureContent: `This lecture considers ${topic.name}. A fictional team at ${data.institution} used ${data.method} with ${data.participants} participants in ${data.year}. Their records showed ${data.finding}; participants also noted ${topic.benefit}. The speaker cautions that ${data.limitation} and concludes that future teams should ${data.recommendation}.`,
      },
    };
  }
  if (type === "answer-short-question") {
    return {
      title: `Speaking: ${topic.name}`,
      instruction: "Listen to the question and answer briefly.",
      prepTime: 3,
      recordTime: 15,
      content: {
        question: `After the ${data.year} review of ${topic.name} with ${data.participants} participants at ${data.institution}, what should the team do next?`,
        expectedAnswer: data.recommendation,
      },
    };
  }
  if (type === "summarize-group-discussion") {
    const transcript = [
      { speaker: "Maya", text: `Thanks everyone. We are discussing the recent review of ${topic.name} at ${data.institution}, which asked whether the current campus approach should continue or change.` },
      { speaker: "Leo", text: `The team used ${data.method} and heard from ${data.participants} participants. The records showed ${data.finding}, so there is a measurable pattern worth understanding.` },
      { speaker: "Nina", text: `That result is encouraging, especially because participants said ${topic.benefit}. It suggests the approach may help, although it does not prove every group has the same experience.` },
      { speaker: "Omar", text: `I agree, but the report also says ${data.limitation}. We should be cautious about applying one sample's result to the whole campus or another term.` },
      { speaker: "Maya", text: `Before expanding anything, I would like to know whether the change is consistent across different times and locations. A comparison could show where support is most useful.` },
      { speaker: "Leo", text: `The team recommends that future researchers ${data.recommendation}. This is practical because it responds to the evidence without assuming the pilot answered every question.` },
      { speaker: "Nina", text: `We should also explain the findings clearly to students. If they understand what was measured, they can offer more focused feedback during the next stage.` },
      { speaker: "Omar", text: `A follow-up could record the same measure, ${topic.metric.toLowerCase()}, and gather comments about ${topic.benefit}. That would connect the numbers with participants' experience.` },
      { speaker: "Maya", text: `We may need to schedule the next review across a full academic cycle. That would help distinguish lasting improvement from a short-term change in demand.` },
      { speaker: "Leo", text: `The resource question matters too. Any expansion should wait until the team estimates staff time, access requirements, and the cost of collecting reliable information.` },
      { speaker: "Nina", text: `So our shared position is to keep the current service in place while gathering broader evidence. That balances positive feedback with the limits of the first review.` },
      { speaker: "Omar", text: `Agreed. We should repeat the measurement, include participants from another term, and then use the results to decide whether a wider change is justified.` },
    ];
    return {
      title: `Speaking: ${topic.name}`,
      instruction: "Listen to the discussion and summarize the main points and the group's conclusion.",
      prepTime: 10,
      recordTime: 120,
      discussionTranscript: transcript,
      content: {
        discussionContent: transcript.map(({ speaker, text }) => `${speaker}: ${text}`).join("\n"),
      },
    };
  }
  return {
    title: `Speaking: ${topic.name}`,
    instruction: "Listen to the situation, prepare briefly, and give an appropriate spoken response.",
    prepTime: 10,
    recordTime: 40,
    content: {
      situationContext: `You are a student at ${data.institution}. The coordinator of a campus project on ${topic.name} asks for your view. The project found that ${data.finding}, but ${data.limitation}. Respond to the coordinator by acknowledging the findings and suggesting a practical next step.`,
    },
  };
}

function makeWritingQuestion(type, seed) {
  const data = study(seed);
  if (type === "summarize-written-text") {
    return {
      title: `Writing: ${data.topic.name}`,
      instruction: "Read the passage and summarize its main idea in one sentence (5–75 words).",
      timeLimit: 600,
      minWords: 5,
      maxWords: 75,
      content: {
        sourceText: `${data.passage} The review was designed to inform planning rather than to establish a universal result. The researchers state that additional evidence from another term would help determine whether the pattern continues.`,
      },
    };
  }
  if (type === "write-essay") {
    return {
      title: `Writing: ${data.topic.name}`,
      instruction: "Write an essay that addresses the prompt and supports your position with reasons and examples.",
      timeLimit: 1200,
      minWords: 200,
      maxWords: 300,
      content: {
        essayPrompt: `A fictional ${data.year} review at ${data.institution} involved ${data.participants} participants and examined ${data.topic.name}. Should the institution expand the related program now, or collect more evidence first? Present your position and support it with reasons and examples.`,
      },
    };
  }
  if (type === "summarize-written-text-core") {
    return {
      title: `Writing: ${data.topic.name}`,
      instruction: "Read the passage and summarize its main idea in one sentence (5–75 words).",
      timeLimit: 600,
      minWords: 5,
      maxWords: 75,
      content: {
        sourceText: `${data.institution} reviewed ${data.topic.name} after receiving comments from ${data.participants} participants. The review found that ${data.finding}. Participants also valued ${data.topic.benefit}, although ${data.limitation}. The committee plans to ${data.recommendation} before making a broader decision.`,
      },
    };
  }
  return {
    title: `Writing: ${data.topic.name}`,
    instruction: "Write an email that responds to the situation and completes each requested task.",
    timeLimit: 600,
    minWords: 50,
    maxWords: 120,
    content: {
      emailContext: `You are a student at ${data.institution}. Write to the campus coordinator about the ${data.year} review of ${data.topic.name}, which included ${data.participants} participants. The report found that ${data.finding}, but ${data.limitation}.`,
      emailTasks: [
        "Summarize the finding that matters most to you.",
        `Explain whether the institution should ${data.recommendation}.`,
        "Ask one relevant question about the next stage of the project.",
      ],
    },
  };
}

function makeQuestion(section, entry, typeOrdinal, index) {
  const seed = typeOrdinal * 1000 + index;
  const generated = section === "speaking"
    ? makeSpeakingQuestion(entry.type, seed)
    : section === "writing"
      ? makeWritingQuestion(entry.type, seed)
      : section === "reading"
        ? makeReadingQuestion(entry.type, seed)
        : makeListeningQuestion(entry.type, seed);
  const { content, ...metadata } = generated;
  const question = {
    id: stableUuid(`${section}:${entry.type}:${index}`),
    section,
    type: entry.type,
    title: metadata.title,
    instruction: metadata.instruction,
    difficulty: difficultyLevels[index % difficultyLevels.length],
    content: {
      ...content,
      ...(metadata.imageUrl ? { imageUrl: metadata.imageUrl } : {}),
    },
  };

  if (section === "speaking") {
    return { ...question, prepTime: metadata.prepTime, recordTime: metadata.recordTime };
  }
  if (section === "writing") {
    return {
      ...question,
      timeLimit: metadata.timeLimit,
      minWords: metadata.minWords,
      maxWords: metadata.maxWords,
    };
  }
  if (section === "reading") {
    return { ...question, timeLimit: metadata.timeLimit };
  }
  return {
    ...question,
    timeLimit: metadata.timeLimit,
    audioPlayLimit: metadata.audioPlayLimit,
  };
}

function validateQuestions(questions) {
  const ids = new Set();
  const contents = new Map();
  const counts = Object.fromEntries(sections.map((section) => [section, 0]));
  const typeCounts = new Map();

  for (const question of questions) {
    if (ids.has(question.id)) throw new Error(`Duplicate generated question id: ${question.id}`);
    ids.add(question.id);

    const contentKey = JSON.stringify(question.content);
    const previous = contents.get(contentKey);
    if (previous) {
      throw new Error(`Duplicate generated question content in ${question.section}/${question.type}: ${previous.id} and ${question.id}`);
    }
    contents.set(contentKey, question);

    if (!question.title || !question.instruction || !Object.keys(question.content).length) {
      throw new Error(`Missing required question content: ${question.id}`);
    }
    if (!difficultyLevels.includes(question.difficulty)) {
      throw new Error(`Invalid difficulty on generated question: ${question.id}`);
    }
    if (question.section === "listening" && typeof question.content.audioText !== "string") {
      throw new Error(`Listening question is missing TTS source text: ${question.id}`);
    }
    if (question.type === "describe-image" && !question.content.imageUrl?.startsWith("data:image/svg+xml;base64,")) {
      throw new Error(`Describe Image question is missing its original chart: ${question.id}`);
    }
    if (question.type === "summarize-group-discussion") {
      const wordCount = question.content.discussionContent?.trim().split(/\s+/).length ?? 0;
      if (wordCount < 260 || wordCount > 420) {
        throw new Error(`Group discussion audio script is outside the 2-3 minute target: ${question.id} (${wordCount} words)`);
      }
    }
    if (question.section === "speaking" && (typeof question.prepTime !== "number" || typeof question.recordTime !== "number")) {
      throw new Error(`Speaking question is missing preparation or response timing: ${question.id}`);
    }
    if (question.section === "writing" && (typeof question.minWords !== "number" || typeof question.maxWords !== "number")) {
      throw new Error(`Writing question is missing word limits: ${question.id}`);
    }
    const objectiveTypes = [
      "mc-single",
      "mc-multiple",
      "mc-single-listening",
      "mc-multiple-listening",
      "highlight-correct-summary",
      "select-missing-word",
    ];
    if (objectiveTypes.includes(question.type)) {
      if (!Array.isArray(question.content.correctAnswers) || !Array.isArray(question.content.options)) {
        throw new Error(`Objective question is missing options or an answer key: ${question.id}`);
      }
      if (new Set(question.content.options.map((option) => option.text)).size !== question.content.options.length) {
        throw new Error(`Objective question has duplicate option text: ${question.id}`);
      }
      const optionIds = new Set(question.content.options.map((option) => option.id));
      if (!question.content.correctAnswers.length || question.content.correctAnswers.some((answer) => !optionIds.has(answer))) {
        throw new Error(`Objective question has an answer key that does not match an option: ${question.id}`);
      }
    }
    if (question.type === "reorder-paragraphs") {
      const paragraphIds = question.content.paragraphs?.map((paragraph) => paragraph.id) ?? [];
      const correctOrder = question.content.correctOrder ?? [];
      if (paragraphIds.length < 2 || correctOrder.length !== paragraphIds.length || new Set(correctOrder).size !== paragraphIds.length || paragraphIds.some((id) => !correctOrder.includes(id))) {
        throw new Error(`Reorder question has an invalid paragraph order: ${question.id}`);
      }
    }
    if (["fill-blanks-drag", "fill-blanks-dropdown"].includes(question.type)) {
      const blanks = question.content.blanks ?? [];
      if (blanks.length < 1 || blanks.some((blank, index) =>
        !question.content.passage?.includes(`[BLANK${index + 1}]`)
        || !blank.options?.includes(blank.correctAnswer)
        || new Set(blank.options).size !== blank.options.length
      )) {
        throw new Error(`Reading fill-in-the-blank question is incomplete: ${question.id}`);
      }
    }
    if (question.type === "fill-blanks-listening") {
      const blanks = question.content.blanks ?? [];
      if (!question.content.transcript || blanks.length < 1 || blanks.some((_, index) => !question.content.transcript.includes(`[BLANK${index + 1}]`))) {
        throw new Error(`Listening fill-in-the-blank question is incomplete: ${question.id}`);
      }
    }
    if (question.type === "highlight-incorrect-words") {
      const audioWords = question.content.audioText.split(/\s+/);
      const transcriptWords = question.content.transcript?.split(/\s+/) ?? [];
      if (transcriptWords.length !== audioWords.length || !question.content.incorrectWords?.length || question.content.incorrectWords.some(({ position, incorrect, correct }) =>
        audioWords[position] !== correct || transcriptWords[position] !== incorrect
      )) {
        throw new Error(`Highlight-incorrect-words answer positions are invalid: ${question.id}`);
      }
    }
    counts[question.section]++;
    const key = `${question.section}:${question.type}`;
    typeCounts.set(key, (typeCounts.get(key) ?? 0) + 1);
  }

  for (const section of sections) {
    const expectedGenerated = distribution[section].reduce((sum, item) => sum + item.count, 0);
    const expectedBuiltIn = distribution[section].reduce((sum, item) => sum + item.builtInCount, 0);
    const expected = expectedGenerated + expectedBuiltIn;
    if (expected !== 1250) {
      throw new Error(`${section} distribution adds up to ${expected}; expected 1,250`);
    }
    if (counts[section] !== expectedGenerated) {
      throw new Error(`${section} generated ${counts[section]} questions; expected ${expectedGenerated}`);
    }
    const allocations = distribution[section].map((item) => item.count + item.builtInCount);
    if (Math.max(...allocations) - Math.min(...allocations) > 1) {
      throw new Error(`${section} total questions are not evenly distributed across types`);
    }
    for (const entry of distribution[section]) {
      const actual = typeCounts.get(`${section}:${entry.type}`) ?? 0;
      if (actual !== entry.count) {
        throw new Error(`${section}/${entry.type} has ${actual} questions; expected ${entry.count}`);
      }
    }
  }
  const generatedTotal = distribution[sections[0]].reduce((sum, item) => sum + item.count, 0)
    + sections.slice(1).reduce(
      (sectionSum, section) => sectionSum + distribution[section].reduce((sum, item) => sum + item.count, 0),
      0,
    );
  const builtInTotal = sections.reduce(
    (sectionSum, section) => sectionSum + distribution[section].reduce((sum, item) => sum + item.builtInCount, 0),
    0,
  );
  if (questions.length !== generatedTotal || generatedTotal + builtInTotal !== 5000) {
    throw new Error(`Generated ${questions.length} additions and expected ${generatedTotal}; total bank must be exactly 5,000`);
  }
}

const questions = [];
let typeOrdinal = 0;
for (const section of sections) {
  for (const entry of distribution[section]) {
    for (let index = 0; index < entry.count; index++) {
      questions.push(makeQuestion(section, entry, typeOrdinal, index));
    }
    typeOrdinal++;
  }
}

validateQuestions(questions);

for (const section of sections) {
  const sectionQuestions = questions
    .filter((question) => question.section === section)
    .map((question) => {
      const storedQuestion = { ...question };
      delete storedQuestion.section;
      return storedQuestion;
    });
  const exportName = `generated${section[0].toUpperCase()}${section.slice(1)}Questions`;
  const output = `import type { ${section[0].toUpperCase()}${section.slice(1)}Question } from "./${section}Questions";\n\nexport const ${exportName}: ${section[0].toUpperCase()}${section.slice(1)}Question[] = ${JSON.stringify(sectionQuestions, null, 2)};\n`;
  const outputUrl = new URL(`../src/data/${exportName}.ts`, import.meta.url);
  await writeFile(outputUrl, output);
}

console.log(`Generated ${questions.length} built-in additions. Combined with existing questions, each section has exactly 1,250.`);
