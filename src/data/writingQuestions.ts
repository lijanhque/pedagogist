export interface WritingQuestion {
  id: string;
  type: WritingTestType;
  title: string;
  instruction: string;
  timeLimit: number;
  minWords: number;
  maxWords: number;
  content: WritingQuestionContent;
  difficulty: "easy" | "medium" | "hard";
}

export type WritingTestType =
  | "summarize-written-text"
  | "write-essay"
  | "summarize-written-text-core"
  | "write-email";

interface WritingQuestionContent {
  sourceText?: string;
  essayPrompt?: string;
  emailContext?: string;
  emailTasks?: string[];
}

export const writingQuestions: WritingQuestion[] = [
  // urban transport — access and equality
  {
    id: "swt-1",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Public transport systems influence how residents reach work, education, and essential services. Reliable buses, trains, and cycling routes can reduce congestion and household travel costs. However, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. long-term transport planning should combine accessibility, affordability, and environmental goals Policies should identify underserved groups and remove practical barriers."
    }
  },
  // urban transport — economic effects
  {
    id: "swt-2",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Public transport systems influence how residents reach work, education, and essential services. Reliable buses, trains, and cycling routes can reduce congestion and household travel costs. However, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. long-term transport planning should combine accessibility, affordability, and environmental goals Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // urban transport — technology and innovation
  {
    id: "swt-3",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Public transport systems influence how residents reach work, education, and essential services. Reliable buses, trains, and cycling routes can reduce congestion and household travel costs. However, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. long-term transport planning should combine accessibility, affordability, and environmental goals Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // urban transport — environmental impact
  {
    id: "swt-4",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Public transport systems influence how residents reach work, education, and essential services. Reliable buses, trains, and cycling routes can reduce congestion and household travel costs. However, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. long-term transport planning should combine accessibility, affordability, and environmental goals Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // urban transport — community participation
  {
    id: "swt-5",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Public transport systems influence how residents reach work, education, and essential services. Reliable buses, trains, and cycling routes can reduce congestion and household travel costs. However, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. long-term transport planning should combine accessibility, affordability, and environmental goals Meaningful consultation should occur before decisions are finalised."
    }
  },
  // urban transport — education and skills
  {
    id: "swt-6",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Public transport systems influence how residents reach work, education, and essential services. Reliable buses, trains, and cycling routes can reduce congestion and household travel costs. However, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. long-term transport planning should combine accessibility, affordability, and environmental goals Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // urban transport — governance and accountability
  {
    id: "swt-7",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Public transport systems influence how residents reach work, education, and essential services. Reliable buses, trains, and cycling routes can reduce congestion and household travel costs. However, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. long-term transport planning should combine accessibility, affordability, and environmental goals Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // urban transport — future resilience
  {
    id: "swt-8",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Public transport systems influence how residents reach work, education, and essential services. Reliable buses, trains, and cycling routes can reduce congestion and household travel costs. However, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. long-term transport planning should combine accessibility, affordability, and environmental goals Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // urban transport — ethical considerations
  {
    id: "swt-9",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Public transport systems influence how residents reach work, education, and essential services. Reliable buses, trains, and cycling routes can reduce congestion and household travel costs. However, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. long-term transport planning should combine accessibility, affordability, and environmental goals Ethical standards should be considered from the beginning of implementation."
    }
  },
  // urban transport — measurement and evidence
  {
    id: "swt-10",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Public transport systems influence how residents reach work, education, and essential services. Reliable buses, trains, and cycling routes can reduce congestion and household travel costs. However, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. long-term transport planning should combine accessibility, affordability, and environmental goals Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // public health — access and equality
  {
    id: "swt-11",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Preventive health programmes help communities identify risks before serious illness develops. screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. However, misinformation, staff shortages, and unequal access can limit their effectiveness. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. health authorities need sustained investment and clear communication Policies should identify underserved groups and remove practical barriers."
    }
  },
  // public health — economic effects
  {
    id: "swt-12",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Preventive health programmes help communities identify risks before serious illness develops. screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. However, misinformation, staff shortages, and unequal access can limit their effectiveness. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. health authorities need sustained investment and clear communication Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // public health — technology and innovation
  {
    id: "swt-13",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Preventive health programmes help communities identify risks before serious illness develops. screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. However, misinformation, staff shortages, and unequal access can limit their effectiveness. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. health authorities need sustained investment and clear communication Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // public health — environmental impact
  {
    id: "swt-14",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Preventive health programmes help communities identify risks before serious illness develops. screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. However, misinformation, staff shortages, and unequal access can limit their effectiveness. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. health authorities need sustained investment and clear communication Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // public health — community participation
  {
    id: "swt-15",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Preventive health programmes help communities identify risks before serious illness develops. screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. However, misinformation, staff shortages, and unequal access can limit their effectiveness. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. health authorities need sustained investment and clear communication Meaningful consultation should occur before decisions are finalised."
    }
  },
  // public health — education and skills
  {
    id: "swt-16",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Preventive health programmes help communities identify risks before serious illness develops. screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. However, misinformation, staff shortages, and unequal access can limit their effectiveness. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. health authorities need sustained investment and clear communication Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // public health — governance and accountability
  {
    id: "swt-17",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Preventive health programmes help communities identify risks before serious illness develops. screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. However, misinformation, staff shortages, and unequal access can limit their effectiveness. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. health authorities need sustained investment and clear communication Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // public health — future resilience
  {
    id: "swt-18",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Preventive health programmes help communities identify risks before serious illness develops. screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. However, misinformation, staff shortages, and unequal access can limit their effectiveness. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. health authorities need sustained investment and clear communication Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // public health — ethical considerations
  {
    id: "swt-19",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Preventive health programmes help communities identify risks before serious illness develops. screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. However, misinformation, staff shortages, and unequal access can limit their effectiveness. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. health authorities need sustained investment and clear communication Ethical standards should be considered from the beginning of implementation."
    }
  },
  // public health — measurement and evidence
  {
    id: "swt-20",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Preventive health programmes help communities identify risks before serious illness develops. screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. However, misinformation, staff shortages, and unequal access can limit their effectiveness. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. health authorities need sustained investment and clear communication Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // digital education — access and equality
  {
    id: "swt-21",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Digital learning tools have expanded access to lessons, resources, and remote instruction. recorded classes and interactive platforms allow learners to study at different times and review difficult material. However, unequal internet access, distraction, and limited teacher training can widen existing gaps. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. effective programmes should combine technology with guidance, feedback, and inclusive access Policies should identify underserved groups and remove practical barriers."
    }
  },
  // digital education — economic effects
  {
    id: "swt-22",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Digital learning tools have expanded access to lessons, resources, and remote instruction. recorded classes and interactive platforms allow learners to study at different times and review difficult material. However, unequal internet access, distraction, and limited teacher training can widen existing gaps. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. effective programmes should combine technology with guidance, feedback, and inclusive access Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // digital education — technology and innovation
  {
    id: "swt-23",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Digital learning tools have expanded access to lessons, resources, and remote instruction. recorded classes and interactive platforms allow learners to study at different times and review difficult material. However, unequal internet access, distraction, and limited teacher training can widen existing gaps. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. effective programmes should combine technology with guidance, feedback, and inclusive access Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // digital education — environmental impact
  {
    id: "swt-24",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Digital learning tools have expanded access to lessons, resources, and remote instruction. recorded classes and interactive platforms allow learners to study at different times and review difficult material. However, unequal internet access, distraction, and limited teacher training can widen existing gaps. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. effective programmes should combine technology with guidance, feedback, and inclusive access Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // digital education — community participation
  {
    id: "swt-25",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Digital learning tools have expanded access to lessons, resources, and remote instruction. recorded classes and interactive platforms allow learners to study at different times and review difficult material. However, unequal internet access, distraction, and limited teacher training can widen existing gaps. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. effective programmes should combine technology with guidance, feedback, and inclusive access Meaningful consultation should occur before decisions are finalised."
    }
  },
  // digital education — education and skills
  {
    id: "swt-26",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Digital learning tools have expanded access to lessons, resources, and remote instruction. recorded classes and interactive platforms allow learners to study at different times and review difficult material. However, unequal internet access, distraction, and limited teacher training can widen existing gaps. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. effective programmes should combine technology with guidance, feedback, and inclusive access Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // digital education — governance and accountability
  {
    id: "swt-27",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Digital learning tools have expanded access to lessons, resources, and remote instruction. recorded classes and interactive platforms allow learners to study at different times and review difficult material. However, unequal internet access, distraction, and limited teacher training can widen existing gaps. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. effective programmes should combine technology with guidance, feedback, and inclusive access Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // digital education — future resilience
  {
    id: "swt-28",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Digital learning tools have expanded access to lessons, resources, and remote instruction. recorded classes and interactive platforms allow learners to study at different times and review difficult material. However, unequal internet access, distraction, and limited teacher training can widen existing gaps. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. effective programmes should combine technology with guidance, feedback, and inclusive access Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // digital education — ethical considerations
  {
    id: "swt-29",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Digital learning tools have expanded access to lessons, resources, and remote instruction. recorded classes and interactive platforms allow learners to study at different times and review difficult material. However, unequal internet access, distraction, and limited teacher training can widen existing gaps. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. effective programmes should combine technology with guidance, feedback, and inclusive access Ethical standards should be considered from the beginning of implementation."
    }
  },
  // digital education — measurement and evidence
  {
    id: "swt-30",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Digital learning tools have expanded access to lessons, resources, and remote instruction. recorded classes and interactive platforms allow learners to study at different times and review difficult material. However, unequal internet access, distraction, and limited teacher training can widen existing gaps. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. effective programmes should combine technology with guidance, feedback, and inclusive access Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // biodiversity — access and equality
  {
    id: "swt-31",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. protected habitats and connected green corridors help species survive environmental change. However, habitat loss, pollution, and invasive species place increasing pressure on local populations. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. conservation requires coordinated action by governments, businesses, and communities Policies should identify underserved groups and remove practical barriers."
    }
  },
  // biodiversity — economic effects
  {
    id: "swt-32",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. protected habitats and connected green corridors help species survive environmental change. However, habitat loss, pollution, and invasive species place increasing pressure on local populations. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. conservation requires coordinated action by governments, businesses, and communities Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // biodiversity — technology and innovation
  {
    id: "swt-33",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. protected habitats and connected green corridors help species survive environmental change. However, habitat loss, pollution, and invasive species place increasing pressure on local populations. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. conservation requires coordinated action by governments, businesses, and communities Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // biodiversity — environmental impact
  {
    id: "swt-34",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. protected habitats and connected green corridors help species survive environmental change. However, habitat loss, pollution, and invasive species place increasing pressure on local populations. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. conservation requires coordinated action by governments, businesses, and communities Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // biodiversity — community participation
  {
    id: "swt-35",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. protected habitats and connected green corridors help species survive environmental change. However, habitat loss, pollution, and invasive species place increasing pressure on local populations. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. conservation requires coordinated action by governments, businesses, and communities Meaningful consultation should occur before decisions are finalised."
    }
  },
  // biodiversity — education and skills
  {
    id: "swt-36",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. protected habitats and connected green corridors help species survive environmental change. However, habitat loss, pollution, and invasive species place increasing pressure on local populations. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. conservation requires coordinated action by governments, businesses, and communities Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // biodiversity — governance and accountability
  {
    id: "swt-37",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. protected habitats and connected green corridors help species survive environmental change. However, habitat loss, pollution, and invasive species place increasing pressure on local populations. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. conservation requires coordinated action by governments, businesses, and communities Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // biodiversity — future resilience
  {
    id: "swt-38",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. protected habitats and connected green corridors help species survive environmental change. However, habitat loss, pollution, and invasive species place increasing pressure on local populations. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. conservation requires coordinated action by governments, businesses, and communities Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // biodiversity — ethical considerations
  {
    id: "swt-39",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. protected habitats and connected green corridors help species survive environmental change. However, habitat loss, pollution, and invasive species place increasing pressure on local populations. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. conservation requires coordinated action by governments, businesses, and communities Ethical standards should be considered from the beginning of implementation."
    }
  },
  // biodiversity — measurement and evidence
  {
    id: "swt-40",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. protected habitats and connected green corridors help species survive environmental change. However, habitat loss, pollution, and invasive species place increasing pressure on local populations. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. conservation requires coordinated action by governments, businesses, and communities Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // renewable energy — access and equality
  {
    id: "swt-41",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Renewable energy is becoming an important part of modern electricity systems. solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. However, storage costs, grid capacity, and inconsistent generation remain practical challenges. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. a successful transition depends on infrastructure, research, and fair policy Policies should identify underserved groups and remove practical barriers."
    }
  },
  // renewable energy — economic effects
  {
    id: "swt-42",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Renewable energy is becoming an important part of modern electricity systems. solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. However, storage costs, grid capacity, and inconsistent generation remain practical challenges. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. a successful transition depends on infrastructure, research, and fair policy Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // renewable energy — technology and innovation
  {
    id: "swt-43",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Renewable energy is becoming an important part of modern electricity systems. solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. However, storage costs, grid capacity, and inconsistent generation remain practical challenges. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. a successful transition depends on infrastructure, research, and fair policy Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // renewable energy — environmental impact
  {
    id: "swt-44",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Renewable energy is becoming an important part of modern electricity systems. solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. However, storage costs, grid capacity, and inconsistent generation remain practical challenges. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. a successful transition depends on infrastructure, research, and fair policy Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // renewable energy — community participation
  {
    id: "swt-45",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Renewable energy is becoming an important part of modern electricity systems. solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. However, storage costs, grid capacity, and inconsistent generation remain practical challenges. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. a successful transition depends on infrastructure, research, and fair policy Meaningful consultation should occur before decisions are finalised."
    }
  },
  // renewable energy — education and skills
  {
    id: "swt-46",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Renewable energy is becoming an important part of modern electricity systems. solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. However, storage costs, grid capacity, and inconsistent generation remain practical challenges. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. a successful transition depends on infrastructure, research, and fair policy Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // renewable energy — governance and accountability
  {
    id: "swt-47",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Renewable energy is becoming an important part of modern electricity systems. solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. However, storage costs, grid capacity, and inconsistent generation remain practical challenges. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. a successful transition depends on infrastructure, research, and fair policy Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // renewable energy — future resilience
  {
    id: "swt-48",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Renewable energy is becoming an important part of modern electricity systems. solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. However, storage costs, grid capacity, and inconsistent generation remain practical challenges. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. a successful transition depends on infrastructure, research, and fair policy Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // renewable energy — ethical considerations
  {
    id: "swt-49",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Renewable energy is becoming an important part of modern electricity systems. solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. However, storage costs, grid capacity, and inconsistent generation remain practical challenges. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. a successful transition depends on infrastructure, research, and fair policy Ethical standards should be considered from the beginning of implementation."
    }
  },
  // renewable energy — measurement and evidence
  {
    id: "swt-50",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Renewable energy is becoming an important part of modern electricity systems. solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. However, storage costs, grid capacity, and inconsistent generation remain practical challenges. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. a successful transition depends on infrastructure, research, and fair policy Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // workplace flexibility — access and equality
  {
    id: "swt-51",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Flexible work arrangements have changed how organisations manage time and collaboration. remote and hybrid options can reduce commuting and give employees greater control over their schedules. However, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. employers should establish clear expectations while protecting communication and well-being Policies should identify underserved groups and remove practical barriers."
    }
  },
  // workplace flexibility — economic effects
  {
    id: "swt-52",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Flexible work arrangements have changed how organisations manage time and collaboration. remote and hybrid options can reduce commuting and give employees greater control over their schedules. However, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. employers should establish clear expectations while protecting communication and well-being Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // workplace flexibility — technology and innovation
  {
    id: "swt-53",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Flexible work arrangements have changed how organisations manage time and collaboration. remote and hybrid options can reduce commuting and give employees greater control over their schedules. However, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. employers should establish clear expectations while protecting communication and well-being Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // workplace flexibility — environmental impact
  {
    id: "swt-54",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Flexible work arrangements have changed how organisations manage time and collaboration. remote and hybrid options can reduce commuting and give employees greater control over their schedules. However, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. employers should establish clear expectations while protecting communication and well-being Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // workplace flexibility — community participation
  {
    id: "swt-55",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Flexible work arrangements have changed how organisations manage time and collaboration. remote and hybrid options can reduce commuting and give employees greater control over their schedules. However, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. employers should establish clear expectations while protecting communication and well-being Meaningful consultation should occur before decisions are finalised."
    }
  },
  // workplace flexibility — education and skills
  {
    id: "swt-56",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Flexible work arrangements have changed how organisations manage time and collaboration. remote and hybrid options can reduce commuting and give employees greater control over their schedules. However, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. employers should establish clear expectations while protecting communication and well-being Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // workplace flexibility — governance and accountability
  {
    id: "swt-57",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Flexible work arrangements have changed how organisations manage time and collaboration. remote and hybrid options can reduce commuting and give employees greater control over their schedules. However, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. employers should establish clear expectations while protecting communication and well-being Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // workplace flexibility — future resilience
  {
    id: "swt-58",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Flexible work arrangements have changed how organisations manage time and collaboration. remote and hybrid options can reduce commuting and give employees greater control over their schedules. However, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. employers should establish clear expectations while protecting communication and well-being Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // workplace flexibility — ethical considerations
  {
    id: "swt-59",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Flexible work arrangements have changed how organisations manage time and collaboration. remote and hybrid options can reduce commuting and give employees greater control over their schedules. However, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. employers should establish clear expectations while protecting communication and well-being Ethical standards should be considered from the beginning of implementation."
    }
  },
  // workplace flexibility — measurement and evidence
  {
    id: "swt-60",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Flexible work arrangements have changed how organisations manage time and collaboration. remote and hybrid options can reduce commuting and give employees greater control over their schedules. However, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. employers should establish clear expectations while protecting communication and well-being Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // financial literacy — access and equality
  {
    id: "swt-61",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Financial literacy helps people make informed decisions about saving, borrowing, and spending. basic knowledge of interest, budgeting, and risk can prevent costly mistakes. However, complex financial products and limited access to trustworthy advice create barriers. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. schools and community organisations can make practical financial education widely available Policies should identify underserved groups and remove practical barriers."
    }
  },
  // financial literacy — economic effects
  {
    id: "swt-62",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Financial literacy helps people make informed decisions about saving, borrowing, and spending. basic knowledge of interest, budgeting, and risk can prevent costly mistakes. However, complex financial products and limited access to trustworthy advice create barriers. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. schools and community organisations can make practical financial education widely available Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // financial literacy — technology and innovation
  {
    id: "swt-63",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Financial literacy helps people make informed decisions about saving, borrowing, and spending. basic knowledge of interest, budgeting, and risk can prevent costly mistakes. However, complex financial products and limited access to trustworthy advice create barriers. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. schools and community organisations can make practical financial education widely available Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // financial literacy — environmental impact
  {
    id: "swt-64",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Financial literacy helps people make informed decisions about saving, borrowing, and spending. basic knowledge of interest, budgeting, and risk can prevent costly mistakes. However, complex financial products and limited access to trustworthy advice create barriers. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. schools and community organisations can make practical financial education widely available Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // financial literacy — community participation
  {
    id: "swt-65",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Financial literacy helps people make informed decisions about saving, borrowing, and spending. basic knowledge of interest, budgeting, and risk can prevent costly mistakes. However, complex financial products and limited access to trustworthy advice create barriers. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. schools and community organisations can make practical financial education widely available Meaningful consultation should occur before decisions are finalised."
    }
  },
  // financial literacy — education and skills
  {
    id: "swt-66",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Financial literacy helps people make informed decisions about saving, borrowing, and spending. basic knowledge of interest, budgeting, and risk can prevent costly mistakes. However, complex financial products and limited access to trustworthy advice create barriers. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. schools and community organisations can make practical financial education widely available Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // financial literacy — governance and accountability
  {
    id: "swt-67",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Financial literacy helps people make informed decisions about saving, borrowing, and spending. basic knowledge of interest, budgeting, and risk can prevent costly mistakes. However, complex financial products and limited access to trustworthy advice create barriers. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. schools and community organisations can make practical financial education widely available Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // financial literacy — future resilience
  {
    id: "swt-68",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Financial literacy helps people make informed decisions about saving, borrowing, and spending. basic knowledge of interest, budgeting, and risk can prevent costly mistakes. However, complex financial products and limited access to trustworthy advice create barriers. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. schools and community organisations can make practical financial education widely available Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // financial literacy — ethical considerations
  {
    id: "swt-69",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Financial literacy helps people make informed decisions about saving, borrowing, and spending. basic knowledge of interest, budgeting, and risk can prevent costly mistakes. However, complex financial products and limited access to trustworthy advice create barriers. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. schools and community organisations can make practical financial education widely available Ethical standards should be considered from the beginning of implementation."
    }
  },
  // financial literacy — measurement and evidence
  {
    id: "swt-70",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Financial literacy helps people make informed decisions about saving, borrowing, and spending. basic knowledge of interest, budgeting, and risk can prevent costly mistakes. However, complex financial products and limited access to trustworthy advice create barriers. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. schools and community organisations can make practical financial education widely available Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // food security — access and equality
  {
    id: "swt-71",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Food security depends on reliable access to sufficient, safe, and nutritious food. improved storage, diverse crops, and efficient distribution can reduce shortages and waste. However, climate pressures, conflict, and unequal purchasing power threaten stable access. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. long-term solutions must strengthen local production and resilient supply chains Policies should identify underserved groups and remove practical barriers."
    }
  },
  // food security — economic effects
  {
    id: "swt-72",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Food security depends on reliable access to sufficient, safe, and nutritious food. improved storage, diverse crops, and efficient distribution can reduce shortages and waste. However, climate pressures, conflict, and unequal purchasing power threaten stable access. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. long-term solutions must strengthen local production and resilient supply chains Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // food security — technology and innovation
  {
    id: "swt-73",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Food security depends on reliable access to sufficient, safe, and nutritious food. improved storage, diverse crops, and efficient distribution can reduce shortages and waste. However, climate pressures, conflict, and unequal purchasing power threaten stable access. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. long-term solutions must strengthen local production and resilient supply chains Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // food security — environmental impact
  {
    id: "swt-74",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Food security depends on reliable access to sufficient, safe, and nutritious food. improved storage, diverse crops, and efficient distribution can reduce shortages and waste. However, climate pressures, conflict, and unequal purchasing power threaten stable access. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. long-term solutions must strengthen local production and resilient supply chains Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // food security — community participation
  {
    id: "swt-75",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Food security depends on reliable access to sufficient, safe, and nutritious food. improved storage, diverse crops, and efficient distribution can reduce shortages and waste. However, climate pressures, conflict, and unequal purchasing power threaten stable access. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. long-term solutions must strengthen local production and resilient supply chains Meaningful consultation should occur before decisions are finalised."
    }
  },
  // food security — education and skills
  {
    id: "swt-76",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Food security depends on reliable access to sufficient, safe, and nutritious food. improved storage, diverse crops, and efficient distribution can reduce shortages and waste. However, climate pressures, conflict, and unequal purchasing power threaten stable access. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. long-term solutions must strengthen local production and resilient supply chains Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // food security — governance and accountability
  {
    id: "swt-77",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Food security depends on reliable access to sufficient, safe, and nutritious food. improved storage, diverse crops, and efficient distribution can reduce shortages and waste. However, climate pressures, conflict, and unequal purchasing power threaten stable access. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. long-term solutions must strengthen local production and resilient supply chains Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // food security — future resilience
  {
    id: "swt-78",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Food security depends on reliable access to sufficient, safe, and nutritious food. improved storage, diverse crops, and efficient distribution can reduce shortages and waste. However, climate pressures, conflict, and unequal purchasing power threaten stable access. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. long-term solutions must strengthen local production and resilient supply chains Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // food security — ethical considerations
  {
    id: "swt-79",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Food security depends on reliable access to sufficient, safe, and nutritious food. improved storage, diverse crops, and efficient distribution can reduce shortages and waste. However, climate pressures, conflict, and unequal purchasing power threaten stable access. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. long-term solutions must strengthen local production and resilient supply chains Ethical standards should be considered from the beginning of implementation."
    }
  },
  // food security — measurement and evidence
  {
    id: "swt-80",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Food security depends on reliable access to sufficient, safe, and nutritious food. improved storage, diverse crops, and efficient distribution can reduce shortages and waste. However, climate pressures, conflict, and unequal purchasing power threaten stable access. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. long-term solutions must strengthen local production and resilient supply chains Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // urban green space — access and equality
  {
    id: "swt-81",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Parks and urban trees provide environmental and social benefits in crowded cities. vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. However, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. city planning should treat accessible nature as essential public infrastructure Policies should identify underserved groups and remove practical barriers."
    }
  },
  // urban green space — economic effects
  {
    id: "swt-82",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Parks and urban trees provide environmental and social benefits in crowded cities. vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. However, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. city planning should treat accessible nature as essential public infrastructure Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // urban green space — technology and innovation
  {
    id: "swt-83",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Parks and urban trees provide environmental and social benefits in crowded cities. vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. However, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. city planning should treat accessible nature as essential public infrastructure Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // urban green space — environmental impact
  {
    id: "swt-84",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Parks and urban trees provide environmental and social benefits in crowded cities. vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. However, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. city planning should treat accessible nature as essential public infrastructure Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // urban green space — community participation
  {
    id: "swt-85",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Parks and urban trees provide environmental and social benefits in crowded cities. vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. However, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. city planning should treat accessible nature as essential public infrastructure Meaningful consultation should occur before decisions are finalised."
    }
  },
  // urban green space — education and skills
  {
    id: "swt-86",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Parks and urban trees provide environmental and social benefits in crowded cities. vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. However, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. city planning should treat accessible nature as essential public infrastructure Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // urban green space — governance and accountability
  {
    id: "swt-87",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Parks and urban trees provide environmental and social benefits in crowded cities. vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. However, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. city planning should treat accessible nature as essential public infrastructure Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // urban green space — future resilience
  {
    id: "swt-88",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Parks and urban trees provide environmental and social benefits in crowded cities. vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. However, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. city planning should treat accessible nature as essential public infrastructure Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // urban green space — ethical considerations
  {
    id: "swt-89",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Parks and urban trees provide environmental and social benefits in crowded cities. vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. However, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. city planning should treat accessible nature as essential public infrastructure Ethical standards should be considered from the beginning of implementation."
    }
  },
  // urban green space — measurement and evidence
  {
    id: "swt-90",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Parks and urban trees provide environmental and social benefits in crowded cities. vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. However, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. city planning should treat accessible nature as essential public infrastructure Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // artificial intelligence — access and equality
  {
    id: "swt-91",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Artificial intelligence is increasingly used to support decisions and automate routine tasks. well-designed systems can process information quickly and help professionals identify patterns. However, biased data, unclear accountability, and limited transparency can undermine public trust. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. responsible adoption requires oversight, testing, and opportunities for human review Policies should identify underserved groups and remove practical barriers."
    }
  },
  // artificial intelligence — economic effects
  {
    id: "swt-92",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Artificial intelligence is increasingly used to support decisions and automate routine tasks. well-designed systems can process information quickly and help professionals identify patterns. However, biased data, unclear accountability, and limited transparency can undermine public trust. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. responsible adoption requires oversight, testing, and opportunities for human review Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // artificial intelligence — technology and innovation
  {
    id: "swt-93",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Artificial intelligence is increasingly used to support decisions and automate routine tasks. well-designed systems can process information quickly and help professionals identify patterns. However, biased data, unclear accountability, and limited transparency can undermine public trust. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. responsible adoption requires oversight, testing, and opportunities for human review Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // artificial intelligence — environmental impact
  {
    id: "swt-94",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Artificial intelligence is increasingly used to support decisions and automate routine tasks. well-designed systems can process information quickly and help professionals identify patterns. However, biased data, unclear accountability, and limited transparency can undermine public trust. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. responsible adoption requires oversight, testing, and opportunities for human review Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // artificial intelligence — community participation
  {
    id: "swt-95",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Artificial intelligence is increasingly used to support decisions and automate routine tasks. well-designed systems can process information quickly and help professionals identify patterns. However, biased data, unclear accountability, and limited transparency can undermine public trust. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. responsible adoption requires oversight, testing, and opportunities for human review Meaningful consultation should occur before decisions are finalised."
    }
  },
  // artificial intelligence — education and skills
  {
    id: "swt-96",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Artificial intelligence is increasingly used to support decisions and automate routine tasks. well-designed systems can process information quickly and help professionals identify patterns. However, biased data, unclear accountability, and limited transparency can undermine public trust. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. responsible adoption requires oversight, testing, and opportunities for human review Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // artificial intelligence — governance and accountability
  {
    id: "swt-97",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Artificial intelligence is increasingly used to support decisions and automate routine tasks. well-designed systems can process information quickly and help professionals identify patterns. However, biased data, unclear accountability, and limited transparency can undermine public trust. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. responsible adoption requires oversight, testing, and opportunities for human review Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // artificial intelligence — future resilience
  {
    id: "swt-98",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Artificial intelligence is increasingly used to support decisions and automate routine tasks. well-designed systems can process information quickly and help professionals identify patterns. However, biased data, unclear accountability, and limited transparency can undermine public trust. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. responsible adoption requires oversight, testing, and opportunities for human review Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // artificial intelligence — ethical considerations
  {
    id: "swt-99",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Artificial intelligence is increasingly used to support decisions and automate routine tasks. well-designed systems can process information quickly and help professionals identify patterns. However, biased data, unclear accountability, and limited transparency can undermine public trust. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. responsible adoption requires oversight, testing, and opportunities for human review Ethical standards should be considered from the beginning of implementation."
    }
  },
  // artificial intelligence — measurement and evidence
  {
    id: "swt-100",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "Artificial intelligence is increasingly used to support decisions and automate routine tasks. well-designed systems can process information quickly and help professionals identify patterns. However, biased data, unclear accountability, and limited transparency can undermine public trust. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. responsible adoption requires oversight, testing, and opportunities for human review Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // water conservation — access and equality
  {
    id: "swt-101",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Freshwater resources face pressure from growing demand and changing weather patterns. efficient irrigation, leak detection, and household conservation can reduce unnecessary use. However, ageing infrastructure and competing demands make fair distribution difficult. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. water management should combine investment with public participation and long-term planning Policies should identify underserved groups and remove practical barriers."
    }
  },
  // water conservation — economic effects
  {
    id: "swt-102",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Freshwater resources face pressure from growing demand and changing weather patterns. efficient irrigation, leak detection, and household conservation can reduce unnecessary use. However, ageing infrastructure and competing demands make fair distribution difficult. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. water management should combine investment with public participation and long-term planning Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // water conservation — technology and innovation
  {
    id: "swt-103",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Freshwater resources face pressure from growing demand and changing weather patterns. efficient irrigation, leak detection, and household conservation can reduce unnecessary use. However, ageing infrastructure and competing demands make fair distribution difficult. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. water management should combine investment with public participation and long-term planning Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // water conservation — environmental impact
  {
    id: "swt-104",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Freshwater resources face pressure from growing demand and changing weather patterns. efficient irrigation, leak detection, and household conservation can reduce unnecessary use. However, ageing infrastructure and competing demands make fair distribution difficult. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. water management should combine investment with public participation and long-term planning Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // water conservation — community participation
  {
    id: "swt-105",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Freshwater resources face pressure from growing demand and changing weather patterns. efficient irrigation, leak detection, and household conservation can reduce unnecessary use. However, ageing infrastructure and competing demands make fair distribution difficult. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. water management should combine investment with public participation and long-term planning Meaningful consultation should occur before decisions are finalised."
    }
  },
  // water conservation — education and skills
  {
    id: "swt-106",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Freshwater resources face pressure from growing demand and changing weather patterns. efficient irrigation, leak detection, and household conservation can reduce unnecessary use. However, ageing infrastructure and competing demands make fair distribution difficult. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. water management should combine investment with public participation and long-term planning Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // water conservation — governance and accountability
  {
    id: "swt-107",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Freshwater resources face pressure from growing demand and changing weather patterns. efficient irrigation, leak detection, and household conservation can reduce unnecessary use. However, ageing infrastructure and competing demands make fair distribution difficult. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. water management should combine investment with public participation and long-term planning Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // water conservation — future resilience
  {
    id: "swt-108",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Freshwater resources face pressure from growing demand and changing weather patterns. efficient irrigation, leak detection, and household conservation can reduce unnecessary use. However, ageing infrastructure and competing demands make fair distribution difficult. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. water management should combine investment with public participation and long-term planning Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // water conservation — ethical considerations
  {
    id: "swt-109",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Freshwater resources face pressure from growing demand and changing weather patterns. efficient irrigation, leak detection, and household conservation can reduce unnecessary use. However, ageing infrastructure and competing demands make fair distribution difficult. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. water management should combine investment with public participation and long-term planning Ethical standards should be considered from the beginning of implementation."
    }
  },
  // water conservation — measurement and evidence
  {
    id: "swt-110",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Freshwater resources face pressure from growing demand and changing weather patterns. efficient irrigation, leak detection, and household conservation can reduce unnecessary use. However, ageing infrastructure and competing demands make fair distribution difficult. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. water management should combine investment with public participation and long-term planning Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // cultural heritage — access and equality
  {
    id: "swt-111",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Cultural heritage connects communities with shared histories, skills, and traditions. museums, historic sites, and oral archives can preserve knowledge for future generations. However, commercial development, conflict, and declining traditional practices threaten this inheritance. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. preservation works best when local communities help decide what and how to protect Policies should identify underserved groups and remove practical barriers."
    }
  },
  // cultural heritage — economic effects
  {
    id: "swt-112",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Cultural heritage connects communities with shared histories, skills, and traditions. museums, historic sites, and oral archives can preserve knowledge for future generations. However, commercial development, conflict, and declining traditional practices threaten this inheritance. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. preservation works best when local communities help decide what and how to protect Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // cultural heritage — technology and innovation
  {
    id: "swt-113",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Cultural heritage connects communities with shared histories, skills, and traditions. museums, historic sites, and oral archives can preserve knowledge for future generations. However, commercial development, conflict, and declining traditional practices threaten this inheritance. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. preservation works best when local communities help decide what and how to protect Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // cultural heritage — environmental impact
  {
    id: "swt-114",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Cultural heritage connects communities with shared histories, skills, and traditions. museums, historic sites, and oral archives can preserve knowledge for future generations. However, commercial development, conflict, and declining traditional practices threaten this inheritance. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. preservation works best when local communities help decide what and how to protect Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // cultural heritage — community participation
  {
    id: "swt-115",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Cultural heritage connects communities with shared histories, skills, and traditions. museums, historic sites, and oral archives can preserve knowledge for future generations. However, commercial development, conflict, and declining traditional practices threaten this inheritance. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. preservation works best when local communities help decide what and how to protect Meaningful consultation should occur before decisions are finalised."
    }
  },
  // cultural heritage — education and skills
  {
    id: "swt-116",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Cultural heritage connects communities with shared histories, skills, and traditions. museums, historic sites, and oral archives can preserve knowledge for future generations. However, commercial development, conflict, and declining traditional practices threaten this inheritance. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. preservation works best when local communities help decide what and how to protect Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // cultural heritage — governance and accountability
  {
    id: "swt-117",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Cultural heritage connects communities with shared histories, skills, and traditions. museums, historic sites, and oral archives can preserve knowledge for future generations. However, commercial development, conflict, and declining traditional practices threaten this inheritance. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. preservation works best when local communities help decide what and how to protect Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // cultural heritage — future resilience
  {
    id: "swt-118",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Cultural heritage connects communities with shared histories, skills, and traditions. museums, historic sites, and oral archives can preserve knowledge for future generations. However, commercial development, conflict, and declining traditional practices threaten this inheritance. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. preservation works best when local communities help decide what and how to protect Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // cultural heritage — ethical considerations
  {
    id: "swt-119",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Cultural heritage connects communities with shared histories, skills, and traditions. museums, historic sites, and oral archives can preserve knowledge for future generations. However, commercial development, conflict, and declining traditional practices threaten this inheritance. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. preservation works best when local communities help decide what and how to protect Ethical standards should be considered from the beginning of implementation."
    }
  },
  // cultural heritage — measurement and evidence
  {
    id: "swt-120",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Cultural heritage connects communities with shared histories, skills, and traditions. museums, historic sites, and oral archives can preserve knowledge for future generations. However, commercial development, conflict, and declining traditional practices threaten this inheritance. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. preservation works best when local communities help decide what and how to protect Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // scientific research — access and equality
  {
    id: "swt-121",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Scientific research expands knowledge and provides evidence for solving practical problems. collaboration across institutions can accelerate discoveries and improve the use of public resources. However, short funding cycles, limited data access, and pressure to publish may weaken research quality. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. transparent methods and sustained support are essential for reliable progress Policies should identify underserved groups and remove practical barriers."
    }
  },
  // scientific research — economic effects
  {
    id: "swt-122",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Scientific research expands knowledge and provides evidence for solving practical problems. collaboration across institutions can accelerate discoveries and improve the use of public resources. However, short funding cycles, limited data access, and pressure to publish may weaken research quality. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. transparent methods and sustained support are essential for reliable progress Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // scientific research — technology and innovation
  {
    id: "swt-123",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Scientific research expands knowledge and provides evidence for solving practical problems. collaboration across institutions can accelerate discoveries and improve the use of public resources. However, short funding cycles, limited data access, and pressure to publish may weaken research quality. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. transparent methods and sustained support are essential for reliable progress Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // scientific research — environmental impact
  {
    id: "swt-124",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Scientific research expands knowledge and provides evidence for solving practical problems. collaboration across institutions can accelerate discoveries and improve the use of public resources. However, short funding cycles, limited data access, and pressure to publish may weaken research quality. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. transparent methods and sustained support are essential for reliable progress Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // scientific research — community participation
  {
    id: "swt-125",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Scientific research expands knowledge and provides evidence for solving practical problems. collaboration across institutions can accelerate discoveries and improve the use of public resources. However, short funding cycles, limited data access, and pressure to publish may weaken research quality. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. transparent methods and sustained support are essential for reliable progress Meaningful consultation should occur before decisions are finalised."
    }
  },
  // scientific research — education and skills
  {
    id: "swt-126",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Scientific research expands knowledge and provides evidence for solving practical problems. collaboration across institutions can accelerate discoveries and improve the use of public resources. However, short funding cycles, limited data access, and pressure to publish may weaken research quality. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. transparent methods and sustained support are essential for reliable progress Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // scientific research — governance and accountability
  {
    id: "swt-127",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Scientific research expands knowledge and provides evidence for solving practical problems. collaboration across institutions can accelerate discoveries and improve the use of public resources. However, short funding cycles, limited data access, and pressure to publish may weaken research quality. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. transparent methods and sustained support are essential for reliable progress Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // scientific research — future resilience
  {
    id: "swt-128",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Scientific research expands knowledge and provides evidence for solving practical problems. collaboration across institutions can accelerate discoveries and improve the use of public resources. However, short funding cycles, limited data access, and pressure to publish may weaken research quality. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. transparent methods and sustained support are essential for reliable progress Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // scientific research — ethical considerations
  {
    id: "swt-129",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Scientific research expands knowledge and provides evidence for solving practical problems. collaboration across institutions can accelerate discoveries and improve the use of public resources. However, short funding cycles, limited data access, and pressure to publish may weaken research quality. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. transparent methods and sustained support are essential for reliable progress Ethical standards should be considered from the beginning of implementation."
    }
  },
  // scientific research — measurement and evidence
  {
    id: "swt-130",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Scientific research expands knowledge and provides evidence for solving practical problems. collaboration across institutions can accelerate discoveries and improve the use of public resources. However, short funding cycles, limited data access, and pressure to publish may weaken research quality. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. transparent methods and sustained support are essential for reliable progress Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // ocean pollution — access and equality
  {
    id: "swt-131",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. reducing plastic waste and improving wastewater treatment can limit damage. However, pollution travels across borders, making monitoring and enforcement difficult. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. international cooperation and changes in production are both necessary Policies should identify underserved groups and remove practical barriers."
    }
  },
  // ocean pollution — economic effects
  {
    id: "swt-132",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. reducing plastic waste and improving wastewater treatment can limit damage. However, pollution travels across borders, making monitoring and enforcement difficult. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. international cooperation and changes in production are both necessary Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // ocean pollution — technology and innovation
  {
    id: "swt-133",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. reducing plastic waste and improving wastewater treatment can limit damage. However, pollution travels across borders, making monitoring and enforcement difficult. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. international cooperation and changes in production are both necessary Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // ocean pollution — environmental impact
  {
    id: "swt-134",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. reducing plastic waste and improving wastewater treatment can limit damage. However, pollution travels across borders, making monitoring and enforcement difficult. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. international cooperation and changes in production are both necessary Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // ocean pollution — community participation
  {
    id: "swt-135",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. reducing plastic waste and improving wastewater treatment can limit damage. However, pollution travels across borders, making monitoring and enforcement difficult. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. international cooperation and changes in production are both necessary Meaningful consultation should occur before decisions are finalised."
    }
  },
  // ocean pollution — education and skills
  {
    id: "swt-136",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. reducing plastic waste and improving wastewater treatment can limit damage. However, pollution travels across borders, making monitoring and enforcement difficult. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. international cooperation and changes in production are both necessary Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // ocean pollution — governance and accountability
  {
    id: "swt-137",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. reducing plastic waste and improving wastewater treatment can limit damage. However, pollution travels across borders, making monitoring and enforcement difficult. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. international cooperation and changes in production are both necessary Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // ocean pollution — future resilience
  {
    id: "swt-138",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. reducing plastic waste and improving wastewater treatment can limit damage. However, pollution travels across borders, making monitoring and enforcement difficult. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. international cooperation and changes in production are both necessary Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // ocean pollution — ethical considerations
  {
    id: "swt-139",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. reducing plastic waste and improving wastewater treatment can limit damage. However, pollution travels across borders, making monitoring and enforcement difficult. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. international cooperation and changes in production are both necessary Ethical standards should be considered from the beginning of implementation."
    }
  },
  // ocean pollution — measurement and evidence
  {
    id: "swt-140",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. reducing plastic waste and improving wastewater treatment can limit damage. However, pollution travels across borders, making monitoring and enforcement difficult. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. international cooperation and changes in production are both necessary Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // aging populations — access and equality
  {
    id: "swt-141",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Population ageing is reshaping healthcare, housing, and labour markets. accessible services and opportunities for older adults to remain active can benefit society. However, pension pressures, care shortages, and age discrimination require careful responses. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. public policy should support dignity, independence, and intergenerational cooperation Policies should identify underserved groups and remove practical barriers."
    }
  },
  // aging populations — economic effects
  {
    id: "swt-142",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Population ageing is reshaping healthcare, housing, and labour markets. accessible services and opportunities for older adults to remain active can benefit society. However, pension pressures, care shortages, and age discrimination require careful responses. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. public policy should support dignity, independence, and intergenerational cooperation Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // aging populations — technology and innovation
  {
    id: "swt-143",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Population ageing is reshaping healthcare, housing, and labour markets. accessible services and opportunities for older adults to remain active can benefit society. However, pension pressures, care shortages, and age discrimination require careful responses. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. public policy should support dignity, independence, and intergenerational cooperation Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // aging populations — environmental impact
  {
    id: "swt-144",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Population ageing is reshaping healthcare, housing, and labour markets. accessible services and opportunities for older adults to remain active can benefit society. However, pension pressures, care shortages, and age discrimination require careful responses. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. public policy should support dignity, independence, and intergenerational cooperation Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // aging populations — community participation
  {
    id: "swt-145",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Population ageing is reshaping healthcare, housing, and labour markets. accessible services and opportunities for older adults to remain active can benefit society. However, pension pressures, care shortages, and age discrimination require careful responses. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. public policy should support dignity, independence, and intergenerational cooperation Meaningful consultation should occur before decisions are finalised."
    }
  },
  // aging populations — education and skills
  {
    id: "swt-146",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Population ageing is reshaping healthcare, housing, and labour markets. accessible services and opportunities for older adults to remain active can benefit society. However, pension pressures, care shortages, and age discrimination require careful responses. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. public policy should support dignity, independence, and intergenerational cooperation Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // aging populations — governance and accountability
  {
    id: "swt-147",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Population ageing is reshaping healthcare, housing, and labour markets. accessible services and opportunities for older adults to remain active can benefit society. However, pension pressures, care shortages, and age discrimination require careful responses. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. public policy should support dignity, independence, and intergenerational cooperation Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // aging populations — future resilience
  {
    id: "swt-148",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Population ageing is reshaping healthcare, housing, and labour markets. accessible services and opportunities for older adults to remain active can benefit society. However, pension pressures, care shortages, and age discrimination require careful responses. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. public policy should support dignity, independence, and intergenerational cooperation Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // aging populations — ethical considerations
  {
    id: "swt-149",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Population ageing is reshaping healthcare, housing, and labour markets. accessible services and opportunities for older adults to remain active can benefit society. However, pension pressures, care shortages, and age discrimination require careful responses. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. public policy should support dignity, independence, and intergenerational cooperation Ethical standards should be considered from the beginning of implementation."
    }
  },
  // aging populations — measurement and evidence
  {
    id: "swt-150",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Population ageing is reshaping healthcare, housing, and labour markets. accessible services and opportunities for older adults to remain active can benefit society. However, pension pressures, care shortages, and age discrimination require careful responses. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. public policy should support dignity, independence, and intergenerational cooperation Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // public libraries — access and equality
  {
    id: "swt-151",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Public libraries provide learning resources and shared spaces beyond traditional book lending. digital access, workshops, and quiet study areas can support residents of different ages. However, budget constraints and changing user needs challenge library services. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. libraries can remain relevant by combining trusted resources with responsive community programmes Policies should identify underserved groups and remove practical barriers."
    }
  },
  // public libraries — economic effects
  {
    id: "swt-152",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Public libraries provide learning resources and shared spaces beyond traditional book lending. digital access, workshops, and quiet study areas can support residents of different ages. However, budget constraints and changing user needs challenge library services. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. libraries can remain relevant by combining trusted resources with responsive community programmes Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // public libraries — technology and innovation
  {
    id: "swt-153",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Public libraries provide learning resources and shared spaces beyond traditional book lending. digital access, workshops, and quiet study areas can support residents of different ages. However, budget constraints and changing user needs challenge library services. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. libraries can remain relevant by combining trusted resources with responsive community programmes Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // public libraries — environmental impact
  {
    id: "swt-154",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Public libraries provide learning resources and shared spaces beyond traditional book lending. digital access, workshops, and quiet study areas can support residents of different ages. However, budget constraints and changing user needs challenge library services. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. libraries can remain relevant by combining trusted resources with responsive community programmes Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // public libraries — community participation
  {
    id: "swt-155",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Public libraries provide learning resources and shared spaces beyond traditional book lending. digital access, workshops, and quiet study areas can support residents of different ages. However, budget constraints and changing user needs challenge library services. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. libraries can remain relevant by combining trusted resources with responsive community programmes Meaningful consultation should occur before decisions are finalised."
    }
  },
  // public libraries — education and skills
  {
    id: "swt-156",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Public libraries provide learning resources and shared spaces beyond traditional book lending. digital access, workshops, and quiet study areas can support residents of different ages. However, budget constraints and changing user needs challenge library services. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. libraries can remain relevant by combining trusted resources with responsive community programmes Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // public libraries — governance and accountability
  {
    id: "swt-157",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Public libraries provide learning resources and shared spaces beyond traditional book lending. digital access, workshops, and quiet study areas can support residents of different ages. However, budget constraints and changing user needs challenge library services. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. libraries can remain relevant by combining trusted resources with responsive community programmes Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // public libraries — future resilience
  {
    id: "swt-158",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Public libraries provide learning resources and shared spaces beyond traditional book lending. digital access, workshops, and quiet study areas can support residents of different ages. However, budget constraints and changing user needs challenge library services. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. libraries can remain relevant by combining trusted resources with responsive community programmes Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // public libraries — ethical considerations
  {
    id: "swt-159",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Public libraries provide learning resources and shared spaces beyond traditional book lending. digital access, workshops, and quiet study areas can support residents of different ages. However, budget constraints and changing user needs challenge library services. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. libraries can remain relevant by combining trusted resources with responsive community programmes Ethical standards should be considered from the beginning of implementation."
    }
  },
  // public libraries — measurement and evidence
  {
    id: "swt-160",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Public libraries provide learning resources and shared spaces beyond traditional book lending. digital access, workshops, and quiet study areas can support residents of different ages. However, budget constraints and changing user needs challenge library services. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. libraries can remain relevant by combining trusted resources with responsive community programmes Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // small businesses — access and equality
  {
    id: "swt-161",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Small businesses contribute to employment, innovation, and the character of local communities. digital tools and local networks can help smaller firms reach customers and improve efficiency. However, limited finance, complex regulations, and competition from large firms can restrict growth. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. support programmes should improve access to skills, markets, and responsible finance Policies should identify underserved groups and remove practical barriers."
    }
  },
  // small businesses — economic effects
  {
    id: "swt-162",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Small businesses contribute to employment, innovation, and the character of local communities. digital tools and local networks can help smaller firms reach customers and improve efficiency. However, limited finance, complex regulations, and competition from large firms can restrict growth. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. support programmes should improve access to skills, markets, and responsible finance Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // small businesses — technology and innovation
  {
    id: "swt-163",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Small businesses contribute to employment, innovation, and the character of local communities. digital tools and local networks can help smaller firms reach customers and improve efficiency. However, limited finance, complex regulations, and competition from large firms can restrict growth. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. support programmes should improve access to skills, markets, and responsible finance Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // small businesses — environmental impact
  {
    id: "swt-164",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Small businesses contribute to employment, innovation, and the character of local communities. digital tools and local networks can help smaller firms reach customers and improve efficiency. However, limited finance, complex regulations, and competition from large firms can restrict growth. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. support programmes should improve access to skills, markets, and responsible finance Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // small businesses — community participation
  {
    id: "swt-165",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Small businesses contribute to employment, innovation, and the character of local communities. digital tools and local networks can help smaller firms reach customers and improve efficiency. However, limited finance, complex regulations, and competition from large firms can restrict growth. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. support programmes should improve access to skills, markets, and responsible finance Meaningful consultation should occur before decisions are finalised."
    }
  },
  // small businesses — education and skills
  {
    id: "swt-166",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Small businesses contribute to employment, innovation, and the character of local communities. digital tools and local networks can help smaller firms reach customers and improve efficiency. However, limited finance, complex regulations, and competition from large firms can restrict growth. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. support programmes should improve access to skills, markets, and responsible finance Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // small businesses — governance and accountability
  {
    id: "swt-167",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Small businesses contribute to employment, innovation, and the character of local communities. digital tools and local networks can help smaller firms reach customers and improve efficiency. However, limited finance, complex regulations, and competition from large firms can restrict growth. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. support programmes should improve access to skills, markets, and responsible finance Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // small businesses — future resilience
  {
    id: "swt-168",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Small businesses contribute to employment, innovation, and the character of local communities. digital tools and local networks can help smaller firms reach customers and improve efficiency. However, limited finance, complex regulations, and competition from large firms can restrict growth. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. support programmes should improve access to skills, markets, and responsible finance Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // small businesses — ethical considerations
  {
    id: "swt-169",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Small businesses contribute to employment, innovation, and the character of local communities. digital tools and local networks can help smaller firms reach customers and improve efficiency. However, limited finance, complex regulations, and competition from large firms can restrict growth. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. support programmes should improve access to skills, markets, and responsible finance Ethical standards should be considered from the beginning of implementation."
    }
  },
  // small businesses — measurement and evidence
  {
    id: "swt-170",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Small businesses contribute to employment, innovation, and the character of local communities. digital tools and local networks can help smaller firms reach customers and improve efficiency. However, limited finance, complex regulations, and competition from large firms can restrict growth. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. support programmes should improve access to skills, markets, and responsible finance Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // disaster preparedness — access and equality
  {
    id: "swt-171",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Disaster preparedness reduces the human and economic costs of emergencies. early warnings, evacuation plans, and resilient buildings help communities respond quickly. However, low public awareness and uneven infrastructure leave some groups especially vulnerable. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. preparedness must be practised regularly and designed around local risks Policies should identify underserved groups and remove practical barriers."
    }
  },
  // disaster preparedness — economic effects
  {
    id: "swt-172",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Disaster preparedness reduces the human and economic costs of emergencies. early warnings, evacuation plans, and resilient buildings help communities respond quickly. However, low public awareness and uneven infrastructure leave some groups especially vulnerable. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. preparedness must be practised regularly and designed around local risks Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // disaster preparedness — technology and innovation
  {
    id: "swt-173",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Disaster preparedness reduces the human and economic costs of emergencies. early warnings, evacuation plans, and resilient buildings help communities respond quickly. However, low public awareness and uneven infrastructure leave some groups especially vulnerable. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. preparedness must be practised regularly and designed around local risks Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // disaster preparedness — environmental impact
  {
    id: "swt-174",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Disaster preparedness reduces the human and economic costs of emergencies. early warnings, evacuation plans, and resilient buildings help communities respond quickly. However, low public awareness and uneven infrastructure leave some groups especially vulnerable. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. preparedness must be practised regularly and designed around local risks Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // disaster preparedness — community participation
  {
    id: "swt-175",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Disaster preparedness reduces the human and economic costs of emergencies. early warnings, evacuation plans, and resilient buildings help communities respond quickly. However, low public awareness and uneven infrastructure leave some groups especially vulnerable. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. preparedness must be practised regularly and designed around local risks Meaningful consultation should occur before decisions are finalised."
    }
  },
  // disaster preparedness — education and skills
  {
    id: "swt-176",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Disaster preparedness reduces the human and economic costs of emergencies. early warnings, evacuation plans, and resilient buildings help communities respond quickly. However, low public awareness and uneven infrastructure leave some groups especially vulnerable. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. preparedness must be practised regularly and designed around local risks Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // disaster preparedness — governance and accountability
  {
    id: "swt-177",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Disaster preparedness reduces the human and economic costs of emergencies. early warnings, evacuation plans, and resilient buildings help communities respond quickly. However, low public awareness and uneven infrastructure leave some groups especially vulnerable. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. preparedness must be practised regularly and designed around local risks Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // disaster preparedness — future resilience
  {
    id: "swt-178",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Disaster preparedness reduces the human and economic costs of emergencies. early warnings, evacuation plans, and resilient buildings help communities respond quickly. However, low public awareness and uneven infrastructure leave some groups especially vulnerable. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. preparedness must be practised regularly and designed around local risks Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // disaster preparedness — ethical considerations
  {
    id: "swt-179",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Disaster preparedness reduces the human and economic costs of emergencies. early warnings, evacuation plans, and resilient buildings help communities respond quickly. However, low public awareness and uneven infrastructure leave some groups especially vulnerable. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. preparedness must be practised regularly and designed around local risks Ethical standards should be considered from the beginning of implementation."
    }
  },
  // disaster preparedness — measurement and evidence
  {
    id: "swt-180",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Disaster preparedness reduces the human and economic costs of emergencies. early warnings, evacuation plans, and resilient buildings help communities respond quickly. However, low public awareness and uneven infrastructure leave some groups especially vulnerable. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. preparedness must be practised regularly and designed around local risks Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // space exploration — access and equality
  {
    id: "swt-181",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Space exploration generates scientific knowledge and technologies with applications on Earth. satellite services improve communication, navigation, and environmental monitoring. However, high costs and competing public priorities raise questions about investment. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. transparent goals and international cooperation can strengthen its wider value Policies should identify underserved groups and remove practical barriers."
    }
  },
  // space exploration — economic effects
  {
    id: "swt-182",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Space exploration generates scientific knowledge and technologies with applications on Earth. satellite services improve communication, navigation, and environmental monitoring. However, high costs and competing public priorities raise questions about investment. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. transparent goals and international cooperation can strengthen its wider value Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // space exploration — technology and innovation
  {
    id: "swt-183",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Space exploration generates scientific knowledge and technologies with applications on Earth. satellite services improve communication, navigation, and environmental monitoring. However, high costs and competing public priorities raise questions about investment. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. transparent goals and international cooperation can strengthen its wider value Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // space exploration — environmental impact
  {
    id: "swt-184",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Space exploration generates scientific knowledge and technologies with applications on Earth. satellite services improve communication, navigation, and environmental monitoring. However, high costs and competing public priorities raise questions about investment. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. transparent goals and international cooperation can strengthen its wider value Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // space exploration — community participation
  {
    id: "swt-185",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Space exploration generates scientific knowledge and technologies with applications on Earth. satellite services improve communication, navigation, and environmental monitoring. However, high costs and competing public priorities raise questions about investment. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. transparent goals and international cooperation can strengthen its wider value Meaningful consultation should occur before decisions are finalised."
    }
  },
  // space exploration — education and skills
  {
    id: "swt-186",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Space exploration generates scientific knowledge and technologies with applications on Earth. satellite services improve communication, navigation, and environmental monitoring. However, high costs and competing public priorities raise questions about investment. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. transparent goals and international cooperation can strengthen its wider value Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // space exploration — governance and accountability
  {
    id: "swt-187",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Space exploration generates scientific knowledge and technologies with applications on Earth. satellite services improve communication, navigation, and environmental monitoring. However, high costs and competing public priorities raise questions about investment. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. transparent goals and international cooperation can strengthen its wider value Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // space exploration — future resilience
  {
    id: "swt-188",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Space exploration generates scientific knowledge and technologies with applications on Earth. satellite services improve communication, navigation, and environmental monitoring. However, high costs and competing public priorities raise questions about investment. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. transparent goals and international cooperation can strengthen its wider value Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // space exploration — ethical considerations
  {
    id: "swt-189",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Space exploration generates scientific knowledge and technologies with applications on Earth. satellite services improve communication, navigation, and environmental monitoring. However, high costs and competing public priorities raise questions about investment. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. transparent goals and international cooperation can strengthen its wider value Ethical standards should be considered from the beginning of implementation."
    }
  },
  // space exploration — measurement and evidence
  {
    id: "swt-190",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Space exploration generates scientific knowledge and technologies with applications on Earth. satellite services improve communication, navigation, and environmental monitoring. However, high costs and competing public priorities raise questions about investment. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. transparent goals and international cooperation can strengthen its wider value Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // mental well-being — access and equality
  {
    id: "swt-191",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Mental well-being is influenced by social connection, working conditions, and access to support. early assistance and supportive environments can help people manage stress. However, stigma and shortages of trained professionals often discourage people from seeking help. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. communities should make reliable support accessible and treat well-being as a shared concern Policies should identify underserved groups and remove practical barriers."
    }
  },
  // mental well-being — economic effects
  {
    id: "swt-192",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Mental well-being is influenced by social connection, working conditions, and access to support. early assistance and supportive environments can help people manage stress. However, stigma and shortages of trained professionals often discourage people from seeking help. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. communities should make reliable support accessible and treat well-being as a shared concern Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // mental well-being — technology and innovation
  {
    id: "swt-193",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Mental well-being is influenced by social connection, working conditions, and access to support. early assistance and supportive environments can help people manage stress. However, stigma and shortages of trained professionals often discourage people from seeking help. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. communities should make reliable support accessible and treat well-being as a shared concern Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // mental well-being — environmental impact
  {
    id: "swt-194",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Mental well-being is influenced by social connection, working conditions, and access to support. early assistance and supportive environments can help people manage stress. However, stigma and shortages of trained professionals often discourage people from seeking help. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. communities should make reliable support accessible and treat well-being as a shared concern Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // mental well-being — community participation
  {
    id: "swt-195",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Mental well-being is influenced by social connection, working conditions, and access to support. early assistance and supportive environments can help people manage stress. However, stigma and shortages of trained professionals often discourage people from seeking help. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. communities should make reliable support accessible and treat well-being as a shared concern Meaningful consultation should occur before decisions are finalised."
    }
  },
  // mental well-being — education and skills
  {
    id: "swt-196",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Mental well-being is influenced by social connection, working conditions, and access to support. early assistance and supportive environments can help people manage stress. However, stigma and shortages of trained professionals often discourage people from seeking help. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. communities should make reliable support accessible and treat well-being as a shared concern Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // mental well-being — governance and accountability
  {
    id: "swt-197",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Mental well-being is influenced by social connection, working conditions, and access to support. early assistance and supportive environments can help people manage stress. However, stigma and shortages of trained professionals often discourage people from seeking help. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. communities should make reliable support accessible and treat well-being as a shared concern Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // mental well-being — future resilience
  {
    id: "swt-198",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Mental well-being is influenced by social connection, working conditions, and access to support. early assistance and supportive environments can help people manage stress. However, stigma and shortages of trained professionals often discourage people from seeking help. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. communities should make reliable support accessible and treat well-being as a shared concern Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // mental well-being — ethical considerations
  {
    id: "swt-199",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Mental well-being is influenced by social connection, working conditions, and access to support. early assistance and supportive environments can help people manage stress. However, stigma and shortages of trained professionals often discourage people from seeking help. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. communities should make reliable support accessible and treat well-being as a shared concern Ethical standards should be considered from the beginning of implementation."
    }
  },
  // mental well-being — measurement and evidence
  {
    id: "swt-200",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "Mental well-being is influenced by social connection, working conditions, and access to support. early assistance and supportive environments can help people manage stress. However, stigma and shortages of trained professionals often discourage people from seeking help. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. communities should make reliable support accessible and treat well-being as a shared concern Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // ethical consumption — access and equality
  {
    id: "swt-201",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Consumer choices influence how products are made, transported, and discarded. repair, reuse, and informed purchasing can reduce environmental and social costs. However, labels may be confusing and sustainable options can be less affordable. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. business transparency and consumer education can make responsible choices easier Policies should identify underserved groups and remove practical barriers."
    }
  },
  // ethical consumption — economic effects
  {
    id: "swt-202",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Consumer choices influence how products are made, transported, and discarded. repair, reuse, and informed purchasing can reduce environmental and social costs. However, labels may be confusing and sustainable options can be less affordable. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. business transparency and consumer education can make responsible choices easier Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // ethical consumption — technology and innovation
  {
    id: "swt-203",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Consumer choices influence how products are made, transported, and discarded. repair, reuse, and informed purchasing can reduce environmental and social costs. However, labels may be confusing and sustainable options can be less affordable. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. business transparency and consumer education can make responsible choices easier Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // ethical consumption — environmental impact
  {
    id: "swt-204",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Consumer choices influence how products are made, transported, and discarded. repair, reuse, and informed purchasing can reduce environmental and social costs. However, labels may be confusing and sustainable options can be less affordable. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. business transparency and consumer education can make responsible choices easier Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // ethical consumption — community participation
  {
    id: "swt-205",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Consumer choices influence how products are made, transported, and discarded. repair, reuse, and informed purchasing can reduce environmental and social costs. However, labels may be confusing and sustainable options can be less affordable. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. business transparency and consumer education can make responsible choices easier Meaningful consultation should occur before decisions are finalised."
    }
  },
  // ethical consumption — education and skills
  {
    id: "swt-206",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Consumer choices influence how products are made, transported, and discarded. repair, reuse, and informed purchasing can reduce environmental and social costs. However, labels may be confusing and sustainable options can be less affordable. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. business transparency and consumer education can make responsible choices easier Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // ethical consumption — governance and accountability
  {
    id: "swt-207",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Consumer choices influence how products are made, transported, and discarded. repair, reuse, and informed purchasing can reduce environmental and social costs. However, labels may be confusing and sustainable options can be less affordable. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. business transparency and consumer education can make responsible choices easier Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // ethical consumption — future resilience
  {
    id: "swt-208",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Consumer choices influence how products are made, transported, and discarded. repair, reuse, and informed purchasing can reduce environmental and social costs. However, labels may be confusing and sustainable options can be less affordable. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. business transparency and consumer education can make responsible choices easier Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // ethical consumption — ethical considerations
  {
    id: "swt-209",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Consumer choices influence how products are made, transported, and discarded. repair, reuse, and informed purchasing can reduce environmental and social costs. However, labels may be confusing and sustainable options can be less affordable. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. business transparency and consumer education can make responsible choices easier Ethical standards should be considered from the beginning of implementation."
    }
  },
  // ethical consumption — measurement and evidence
  {
    id: "swt-210",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Consumer choices influence how products are made, transported, and discarded. repair, reuse, and informed purchasing can reduce environmental and social costs. However, labels may be confusing and sustainable options can be less affordable. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. business transparency and consumer education can make responsible choices easier Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // language learning — access and equality
  {
    id: "swt-211",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Learning another language can improve communication and broaden cultural understanding. regular practice and meaningful interaction help learners develop confidence. However, limited exposure and fear of making mistakes can slow progress. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. schools can support learning through conversation, media, and realistic goals Policies should identify underserved groups and remove practical barriers."
    }
  },
  // language learning — economic effects
  {
    id: "swt-212",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Learning another language can improve communication and broaden cultural understanding. regular practice and meaningful interaction help learners develop confidence. However, limited exposure and fear of making mistakes can slow progress. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. schools can support learning through conversation, media, and realistic goals Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // language learning — technology and innovation
  {
    id: "swt-213",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Learning another language can improve communication and broaden cultural understanding. regular practice and meaningful interaction help learners develop confidence. However, limited exposure and fear of making mistakes can slow progress. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. schools can support learning through conversation, media, and realistic goals Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // language learning — environmental impact
  {
    id: "swt-214",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Learning another language can improve communication and broaden cultural understanding. regular practice and meaningful interaction help learners develop confidence. However, limited exposure and fear of making mistakes can slow progress. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. schools can support learning through conversation, media, and realistic goals Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // language learning — community participation
  {
    id: "swt-215",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Learning another language can improve communication and broaden cultural understanding. regular practice and meaningful interaction help learners develop confidence. However, limited exposure and fear of making mistakes can slow progress. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. schools can support learning through conversation, media, and realistic goals Meaningful consultation should occur before decisions are finalised."
    }
  },
  // language learning — education and skills
  {
    id: "swt-216",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Learning another language can improve communication and broaden cultural understanding. regular practice and meaningful interaction help learners develop confidence. However, limited exposure and fear of making mistakes can slow progress. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. schools can support learning through conversation, media, and realistic goals Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // language learning — governance and accountability
  {
    id: "swt-217",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Learning another language can improve communication and broaden cultural understanding. regular practice and meaningful interaction help learners develop confidence. However, limited exposure and fear of making mistakes can slow progress. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. schools can support learning through conversation, media, and realistic goals Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // language learning — future resilience
  {
    id: "swt-218",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Learning another language can improve communication and broaden cultural understanding. regular practice and meaningful interaction help learners develop confidence. However, limited exposure and fear of making mistakes can slow progress. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. schools can support learning through conversation, media, and realistic goals Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // language learning — ethical considerations
  {
    id: "swt-219",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Learning another language can improve communication and broaden cultural understanding. regular practice and meaningful interaction help learners develop confidence. However, limited exposure and fear of making mistakes can slow progress. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. schools can support learning through conversation, media, and realistic goals Ethical standards should be considered from the beginning of implementation."
    }
  },
  // language learning — measurement and evidence
  {
    id: "swt-220",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Learning another language can improve communication and broaden cultural understanding. regular practice and meaningful interaction help learners develop confidence. However, limited exposure and fear of making mistakes can slow progress. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. schools can support learning through conversation, media, and realistic goals Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // agricultural technology — access and equality
  {
    id: "swt-221",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Agricultural technology is changing how farmers monitor crops and manage resources. sensors, improved seeds, and precision irrigation can raise productivity. However, equipment costs and uneven digital access may exclude smaller farms. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. innovation should be adapted to local conditions and supported by training Policies should identify underserved groups and remove practical barriers."
    }
  },
  // agricultural technology — economic effects
  {
    id: "swt-222",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Agricultural technology is changing how farmers monitor crops and manage resources. sensors, improved seeds, and precision irrigation can raise productivity. However, equipment costs and uneven digital access may exclude smaller farms. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. innovation should be adapted to local conditions and supported by training Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // agricultural technology — technology and innovation
  {
    id: "swt-223",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Agricultural technology is changing how farmers monitor crops and manage resources. sensors, improved seeds, and precision irrigation can raise productivity. However, equipment costs and uneven digital access may exclude smaller farms. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. innovation should be adapted to local conditions and supported by training Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // agricultural technology — environmental impact
  {
    id: "swt-224",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Agricultural technology is changing how farmers monitor crops and manage resources. sensors, improved seeds, and precision irrigation can raise productivity. However, equipment costs and uneven digital access may exclude smaller farms. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. innovation should be adapted to local conditions and supported by training Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // agricultural technology — community participation
  {
    id: "swt-225",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Agricultural technology is changing how farmers monitor crops and manage resources. sensors, improved seeds, and precision irrigation can raise productivity. However, equipment costs and uneven digital access may exclude smaller farms. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. innovation should be adapted to local conditions and supported by training Meaningful consultation should occur before decisions are finalised."
    }
  },
  // agricultural technology — education and skills
  {
    id: "swt-226",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Agricultural technology is changing how farmers monitor crops and manage resources. sensors, improved seeds, and precision irrigation can raise productivity. However, equipment costs and uneven digital access may exclude smaller farms. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. innovation should be adapted to local conditions and supported by training Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // agricultural technology — governance and accountability
  {
    id: "swt-227",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Agricultural technology is changing how farmers monitor crops and manage resources. sensors, improved seeds, and precision irrigation can raise productivity. However, equipment costs and uneven digital access may exclude smaller farms. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. innovation should be adapted to local conditions and supported by training Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // agricultural technology — future resilience
  {
    id: "swt-228",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Agricultural technology is changing how farmers monitor crops and manage resources. sensors, improved seeds, and precision irrigation can raise productivity. However, equipment costs and uneven digital access may exclude smaller farms. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. innovation should be adapted to local conditions and supported by training Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // agricultural technology — ethical considerations
  {
    id: "swt-229",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Agricultural technology is changing how farmers monitor crops and manage resources. sensors, improved seeds, and precision irrigation can raise productivity. However, equipment costs and uneven digital access may exclude smaller farms. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. innovation should be adapted to local conditions and supported by training Ethical standards should be considered from the beginning of implementation."
    }
  },
  // agricultural technology — measurement and evidence
  {
    id: "swt-230",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Agricultural technology is changing how farmers monitor crops and manage resources. sensors, improved seeds, and precision irrigation can raise productivity. However, equipment costs and uneven digital access may exclude smaller farms. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. innovation should be adapted to local conditions and supported by training Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // public transport safety — access and equality
  {
    id: "swt-231",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Transport safety depends on vehicle standards, road design, and responsible behaviour. well-maintained infrastructure and clear information can prevent accidents. However, weak enforcement and unsafe pedestrian routes remain common problems. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. a coordinated approach can protect passengers, cyclists, and pedestrians Policies should identify underserved groups and remove practical barriers."
    }
  },
  // public transport safety — economic effects
  {
    id: "swt-232",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Transport safety depends on vehicle standards, road design, and responsible behaviour. well-maintained infrastructure and clear information can prevent accidents. However, weak enforcement and unsafe pedestrian routes remain common problems. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. a coordinated approach can protect passengers, cyclists, and pedestrians Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // public transport safety — technology and innovation
  {
    id: "swt-233",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Transport safety depends on vehicle standards, road design, and responsible behaviour. well-maintained infrastructure and clear information can prevent accidents. However, weak enforcement and unsafe pedestrian routes remain common problems. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. a coordinated approach can protect passengers, cyclists, and pedestrians Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // public transport safety — environmental impact
  {
    id: "swt-234",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Transport safety depends on vehicle standards, road design, and responsible behaviour. well-maintained infrastructure and clear information can prevent accidents. However, weak enforcement and unsafe pedestrian routes remain common problems. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. a coordinated approach can protect passengers, cyclists, and pedestrians Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // public transport safety — community participation
  {
    id: "swt-235",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Transport safety depends on vehicle standards, road design, and responsible behaviour. well-maintained infrastructure and clear information can prevent accidents. However, weak enforcement and unsafe pedestrian routes remain common problems. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. a coordinated approach can protect passengers, cyclists, and pedestrians Meaningful consultation should occur before decisions are finalised."
    }
  },
  // public transport safety — education and skills
  {
    id: "swt-236",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Transport safety depends on vehicle standards, road design, and responsible behaviour. well-maintained infrastructure and clear information can prevent accidents. However, weak enforcement and unsafe pedestrian routes remain common problems. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. a coordinated approach can protect passengers, cyclists, and pedestrians Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // public transport safety — governance and accountability
  {
    id: "swt-237",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Transport safety depends on vehicle standards, road design, and responsible behaviour. well-maintained infrastructure and clear information can prevent accidents. However, weak enforcement and unsafe pedestrian routes remain common problems. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. a coordinated approach can protect passengers, cyclists, and pedestrians Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // public transport safety — future resilience
  {
    id: "swt-238",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Transport safety depends on vehicle standards, road design, and responsible behaviour. well-maintained infrastructure and clear information can prevent accidents. However, weak enforcement and unsafe pedestrian routes remain common problems. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. a coordinated approach can protect passengers, cyclists, and pedestrians Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // public transport safety — ethical considerations
  {
    id: "swt-239",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Transport safety depends on vehicle standards, road design, and responsible behaviour. well-maintained infrastructure and clear information can prevent accidents. However, weak enforcement and unsafe pedestrian routes remain common problems. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. a coordinated approach can protect passengers, cyclists, and pedestrians Ethical standards should be considered from the beginning of implementation."
    }
  },
  // public transport safety — measurement and evidence
  {
    id: "swt-240",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Transport safety depends on vehicle standards, road design, and responsible behaviour. well-maintained infrastructure and clear information can prevent accidents. However, weak enforcement and unsafe pedestrian routes remain common problems. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. a coordinated approach can protect passengers, cyclists, and pedestrians Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // online privacy — access and equality
  {
    id: "swt-241",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Digital services collect information that can improve convenience but also create privacy risks. clear consent and secure data practices can help users understand how information is used. However, complex policies and large-scale data sharing make meaningful control difficult. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. organisations should minimise collection and explain their responsibilities Policies should identify underserved groups and remove practical barriers."
    }
  },
  // online privacy — economic effects
  {
    id: "swt-242",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Digital services collect information that can improve convenience but also create privacy risks. clear consent and secure data practices can help users understand how information is used. However, complex policies and large-scale data sharing make meaningful control difficult. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. organisations should minimise collection and explain their responsibilities Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // online privacy — technology and innovation
  {
    id: "swt-243",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Digital services collect information that can improve convenience but also create privacy risks. clear consent and secure data practices can help users understand how information is used. However, complex policies and large-scale data sharing make meaningful control difficult. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. organisations should minimise collection and explain their responsibilities Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // online privacy — environmental impact
  {
    id: "swt-244",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Digital services collect information that can improve convenience but also create privacy risks. clear consent and secure data practices can help users understand how information is used. However, complex policies and large-scale data sharing make meaningful control difficult. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. organisations should minimise collection and explain their responsibilities Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // online privacy — community participation
  {
    id: "swt-245",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Digital services collect information that can improve convenience but also create privacy risks. clear consent and secure data practices can help users understand how information is used. However, complex policies and large-scale data sharing make meaningful control difficult. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. organisations should minimise collection and explain their responsibilities Meaningful consultation should occur before decisions are finalised."
    }
  },
  // online privacy — education and skills
  {
    id: "swt-246",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Digital services collect information that can improve convenience but also create privacy risks. clear consent and secure data practices can help users understand how information is used. However, complex policies and large-scale data sharing make meaningful control difficult. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. organisations should minimise collection and explain their responsibilities Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // online privacy — governance and accountability
  {
    id: "swt-247",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Digital services collect information that can improve convenience but also create privacy risks. clear consent and secure data practices can help users understand how information is used. However, complex policies and large-scale data sharing make meaningful control difficult. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. organisations should minimise collection and explain their responsibilities Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // online privacy — future resilience
  {
    id: "swt-248",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Digital services collect information that can improve convenience but also create privacy risks. clear consent and secure data practices can help users understand how information is used. However, complex policies and large-scale data sharing make meaningful control difficult. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. organisations should minimise collection and explain their responsibilities Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // online privacy — ethical considerations
  {
    id: "swt-249",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Digital services collect information that can improve convenience but also create privacy risks. clear consent and secure data practices can help users understand how information is used. However, complex policies and large-scale data sharing make meaningful control difficult. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. organisations should minimise collection and explain their responsibilities Ethical standards should be considered from the beginning of implementation."
    }
  },
  // online privacy — measurement and evidence
  {
    id: "swt-250",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Digital services collect information that can improve convenience but also create privacy risks. clear consent and secure data practices can help users understand how information is used. However, complex policies and large-scale data sharing make meaningful control difficult. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. organisations should minimise collection and explain their responsibilities Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // volunteering — access and equality
  {
    id: "swt-251",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Volunteering strengthens communities while giving participants opportunities to learn and connect. well-organised projects can address local needs and build practical skills. However, short-term commitments and poor coordination may reduce their impact. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. lasting programmes need clear roles, training, and respect for volunteers Policies should identify underserved groups and remove practical barriers."
    }
  },
  // volunteering — economic effects
  {
    id: "swt-252",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Volunteering strengthens communities while giving participants opportunities to learn and connect. well-organised projects can address local needs and build practical skills. However, short-term commitments and poor coordination may reduce their impact. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. lasting programmes need clear roles, training, and respect for volunteers Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // volunteering — technology and innovation
  {
    id: "swt-253",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Volunteering strengthens communities while giving participants opportunities to learn and connect. well-organised projects can address local needs and build practical skills. However, short-term commitments and poor coordination may reduce their impact. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. lasting programmes need clear roles, training, and respect for volunteers Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // volunteering — environmental impact
  {
    id: "swt-254",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Volunteering strengthens communities while giving participants opportunities to learn and connect. well-organised projects can address local needs and build practical skills. However, short-term commitments and poor coordination may reduce their impact. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. lasting programmes need clear roles, training, and respect for volunteers Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // volunteering — community participation
  {
    id: "swt-255",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Volunteering strengthens communities while giving participants opportunities to learn and connect. well-organised projects can address local needs and build practical skills. However, short-term commitments and poor coordination may reduce their impact. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. lasting programmes need clear roles, training, and respect for volunteers Meaningful consultation should occur before decisions are finalised."
    }
  },
  // volunteering — education and skills
  {
    id: "swt-256",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Volunteering strengthens communities while giving participants opportunities to learn and connect. well-organised projects can address local needs and build practical skills. However, short-term commitments and poor coordination may reduce their impact. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. lasting programmes need clear roles, training, and respect for volunteers Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // volunteering — governance and accountability
  {
    id: "swt-257",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Volunteering strengthens communities while giving participants opportunities to learn and connect. well-organised projects can address local needs and build practical skills. However, short-term commitments and poor coordination may reduce their impact. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. lasting programmes need clear roles, training, and respect for volunteers Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // volunteering — future resilience
  {
    id: "swt-258",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Volunteering strengthens communities while giving participants opportunities to learn and connect. well-organised projects can address local needs and build practical skills. However, short-term commitments and poor coordination may reduce their impact. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. lasting programmes need clear roles, training, and respect for volunteers Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // volunteering — ethical considerations
  {
    id: "swt-259",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Volunteering strengthens communities while giving participants opportunities to learn and connect. well-organised projects can address local needs and build practical skills. However, short-term commitments and poor coordination may reduce their impact. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. lasting programmes need clear roles, training, and respect for volunteers Ethical standards should be considered from the beginning of implementation."
    }
  },
  // volunteering — measurement and evidence
  {
    id: "swt-260",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Volunteering strengthens communities while giving participants opportunities to learn and connect. well-organised projects can address local needs and build practical skills. However, short-term commitments and poor coordination may reduce their impact. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. lasting programmes need clear roles, training, and respect for volunteers Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // museum learning — access and equality
  {
    id: "swt-261",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Museums can make complex subjects accessible through objects, stories, and interactive displays. school partnerships and digital collections can extend learning beyond gallery visits. However, entry costs, distance, and limited accessibility can exclude some audiences. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. inclusive design and community collaboration can broaden participation Policies should identify underserved groups and remove practical barriers."
    }
  },
  // museum learning — economic effects
  {
    id: "swt-262",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Museums can make complex subjects accessible through objects, stories, and interactive displays. school partnerships and digital collections can extend learning beyond gallery visits. However, entry costs, distance, and limited accessibility can exclude some audiences. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. inclusive design and community collaboration can broaden participation Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // museum learning — technology and innovation
  {
    id: "swt-263",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Museums can make complex subjects accessible through objects, stories, and interactive displays. school partnerships and digital collections can extend learning beyond gallery visits. However, entry costs, distance, and limited accessibility can exclude some audiences. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. inclusive design and community collaboration can broaden participation Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // museum learning — environmental impact
  {
    id: "swt-264",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Museums can make complex subjects accessible through objects, stories, and interactive displays. school partnerships and digital collections can extend learning beyond gallery visits. However, entry costs, distance, and limited accessibility can exclude some audiences. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. inclusive design and community collaboration can broaden participation Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // museum learning — community participation
  {
    id: "swt-265",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Museums can make complex subjects accessible through objects, stories, and interactive displays. school partnerships and digital collections can extend learning beyond gallery visits. However, entry costs, distance, and limited accessibility can exclude some audiences. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. inclusive design and community collaboration can broaden participation Meaningful consultation should occur before decisions are finalised."
    }
  },
  // museum learning — education and skills
  {
    id: "swt-266",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Museums can make complex subjects accessible through objects, stories, and interactive displays. school partnerships and digital collections can extend learning beyond gallery visits. However, entry costs, distance, and limited accessibility can exclude some audiences. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. inclusive design and community collaboration can broaden participation Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // museum learning — governance and accountability
  {
    id: "swt-267",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Museums can make complex subjects accessible through objects, stories, and interactive displays. school partnerships and digital collections can extend learning beyond gallery visits. However, entry costs, distance, and limited accessibility can exclude some audiences. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. inclusive design and community collaboration can broaden participation Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // museum learning — future resilience
  {
    id: "swt-268",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Museums can make complex subjects accessible through objects, stories, and interactive displays. school partnerships and digital collections can extend learning beyond gallery visits. However, entry costs, distance, and limited accessibility can exclude some audiences. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. inclusive design and community collaboration can broaden participation Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // museum learning — ethical considerations
  {
    id: "swt-269",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Museums can make complex subjects accessible through objects, stories, and interactive displays. school partnerships and digital collections can extend learning beyond gallery visits. However, entry costs, distance, and limited accessibility can exclude some audiences. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. inclusive design and community collaboration can broaden participation Ethical standards should be considered from the beginning of implementation."
    }
  },
  // museum learning — measurement and evidence
  {
    id: "swt-270",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Museums can make complex subjects accessible through objects, stories, and interactive displays. school partnerships and digital collections can extend learning beyond gallery visits. However, entry costs, distance, and limited accessibility can exclude some audiences. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. inclusive design and community collaboration can broaden participation Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // circular economy — access and equality
  {
    id: "swt-271",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "A circular economy aims to keep materials in use for as long as possible. repair, reuse, and product redesign can reduce waste and dependence on raw materials. However, existing supply chains and consumer habits are often built around disposable products. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. business incentives and public policy must support a gradual system-wide change Policies should identify underserved groups and remove practical barriers."
    }
  },
  // circular economy — economic effects
  {
    id: "swt-272",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "A circular economy aims to keep materials in use for as long as possible. repair, reuse, and product redesign can reduce waste and dependence on raw materials. However, existing supply chains and consumer habits are often built around disposable products. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. business incentives and public policy must support a gradual system-wide change Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // circular economy — technology and innovation
  {
    id: "swt-273",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "A circular economy aims to keep materials in use for as long as possible. repair, reuse, and product redesign can reduce waste and dependence on raw materials. However, existing supply chains and consumer habits are often built around disposable products. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. business incentives and public policy must support a gradual system-wide change Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // circular economy — environmental impact
  {
    id: "swt-274",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "A circular economy aims to keep materials in use for as long as possible. repair, reuse, and product redesign can reduce waste and dependence on raw materials. However, existing supply chains and consumer habits are often built around disposable products. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. business incentives and public policy must support a gradual system-wide change Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // circular economy — community participation
  {
    id: "swt-275",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "A circular economy aims to keep materials in use for as long as possible. repair, reuse, and product redesign can reduce waste and dependence on raw materials. However, existing supply chains and consumer habits are often built around disposable products. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. business incentives and public policy must support a gradual system-wide change Meaningful consultation should occur before decisions are finalised."
    }
  },
  // circular economy — education and skills
  {
    id: "swt-276",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "A circular economy aims to keep materials in use for as long as possible. repair, reuse, and product redesign can reduce waste and dependence on raw materials. However, existing supply chains and consumer habits are often built around disposable products. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. business incentives and public policy must support a gradual system-wide change Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // circular economy — governance and accountability
  {
    id: "swt-277",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "A circular economy aims to keep materials in use for as long as possible. repair, reuse, and product redesign can reduce waste and dependence on raw materials. However, existing supply chains and consumer habits are often built around disposable products. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. business incentives and public policy must support a gradual system-wide change Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // circular economy — future resilience
  {
    id: "swt-278",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "A circular economy aims to keep materials in use for as long as possible. repair, reuse, and product redesign can reduce waste and dependence on raw materials. However, existing supply chains and consumer habits are often built around disposable products. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. business incentives and public policy must support a gradual system-wide change Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // circular economy — ethical considerations
  {
    id: "swt-279",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "A circular economy aims to keep materials in use for as long as possible. repair, reuse, and product redesign can reduce waste and dependence on raw materials. However, existing supply chains and consumer habits are often built around disposable products. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. business incentives and public policy must support a gradual system-wide change Ethical standards should be considered from the beginning of implementation."
    }
  },
  // circular economy — measurement and evidence
  {
    id: "swt-280",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "A circular economy aims to keep materials in use for as long as possible. repair, reuse, and product redesign can reduce waste and dependence on raw materials. However, existing supply chains and consumer habits are often built around disposable products. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. business incentives and public policy must support a gradual system-wide change Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // workplace diversity — access and equality
  {
    id: "swt-281",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Workplace diversity can bring different experiences and perspectives into decision-making. inclusive teams may understand customers better and identify a wider range of solutions. However, unfair recruitment practices and weak management can prevent genuine participation. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. organisations should measure inclusion and make accountability part of leadership Policies should identify underserved groups and remove practical barriers."
    }
  },
  // workplace diversity — economic effects
  {
    id: "swt-282",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Workplace diversity can bring different experiences and perspectives into decision-making. inclusive teams may understand customers better and identify a wider range of solutions. However, unfair recruitment practices and weak management can prevent genuine participation. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. organisations should measure inclusion and make accountability part of leadership Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // workplace diversity — technology and innovation
  {
    id: "swt-283",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Workplace diversity can bring different experiences and perspectives into decision-making. inclusive teams may understand customers better and identify a wider range of solutions. However, unfair recruitment practices and weak management can prevent genuine participation. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. organisations should measure inclusion and make accountability part of leadership Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // workplace diversity — environmental impact
  {
    id: "swt-284",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Workplace diversity can bring different experiences and perspectives into decision-making. inclusive teams may understand customers better and identify a wider range of solutions. However, unfair recruitment practices and weak management can prevent genuine participation. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. organisations should measure inclusion and make accountability part of leadership Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // workplace diversity — community participation
  {
    id: "swt-285",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Workplace diversity can bring different experiences and perspectives into decision-making. inclusive teams may understand customers better and identify a wider range of solutions. However, unfair recruitment practices and weak management can prevent genuine participation. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. organisations should measure inclusion and make accountability part of leadership Meaningful consultation should occur before decisions are finalised."
    }
  },
  // workplace diversity — education and skills
  {
    id: "swt-286",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Workplace diversity can bring different experiences and perspectives into decision-making. inclusive teams may understand customers better and identify a wider range of solutions. However, unfair recruitment practices and weak management can prevent genuine participation. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. organisations should measure inclusion and make accountability part of leadership Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // workplace diversity — governance and accountability
  {
    id: "swt-287",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Workplace diversity can bring different experiences and perspectives into decision-making. inclusive teams may understand customers better and identify a wider range of solutions. However, unfair recruitment practices and weak management can prevent genuine participation. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. organisations should measure inclusion and make accountability part of leadership Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // workplace diversity — future resilience
  {
    id: "swt-288",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Workplace diversity can bring different experiences and perspectives into decision-making. inclusive teams may understand customers better and identify a wider range of solutions. However, unfair recruitment practices and weak management can prevent genuine participation. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. organisations should measure inclusion and make accountability part of leadership Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // workplace diversity — ethical considerations
  {
    id: "swt-289",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Workplace diversity can bring different experiences and perspectives into decision-making. inclusive teams may understand customers better and identify a wider range of solutions. However, unfair recruitment practices and weak management can prevent genuine participation. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. organisations should measure inclusion and make accountability part of leadership Ethical standards should be considered from the beginning of implementation."
    }
  },
  // workplace diversity — measurement and evidence
  {
    id: "swt-290",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Workplace diversity can bring different experiences and perspectives into decision-making. inclusive teams may understand customers better and identify a wider range of solutions. However, unfair recruitment practices and weak management can prevent genuine participation. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. organisations should measure inclusion and make accountability part of leadership Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // tourism management — access and equality
  {
    id: "swt-291",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Tourism can support local employment while placing pressure on destinations. responsible planning can protect natural and cultural attractions while sharing economic benefits. However, crowding, seasonal work, and environmental damage can reduce residents' quality of life. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. destinations need visitor strategies shaped by local communities Policies should identify underserved groups and remove practical barriers."
    }
  },
  // tourism management — economic effects
  {
    id: "swt-292",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Tourism can support local employment while placing pressure on destinations. responsible planning can protect natural and cultural attractions while sharing economic benefits. However, crowding, seasonal work, and environmental damage can reduce residents' quality of life. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. destinations need visitor strategies shaped by local communities Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // tourism management — technology and innovation
  {
    id: "swt-293",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Tourism can support local employment while placing pressure on destinations. responsible planning can protect natural and cultural attractions while sharing economic benefits. However, crowding, seasonal work, and environmental damage can reduce residents' quality of life. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. destinations need visitor strategies shaped by local communities Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // tourism management — environmental impact
  {
    id: "swt-294",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Tourism can support local employment while placing pressure on destinations. responsible planning can protect natural and cultural attractions while sharing economic benefits. However, crowding, seasonal work, and environmental damage can reduce residents' quality of life. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. destinations need visitor strategies shaped by local communities Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // tourism management — community participation
  {
    id: "swt-295",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Tourism can support local employment while placing pressure on destinations. responsible planning can protect natural and cultural attractions while sharing economic benefits. However, crowding, seasonal work, and environmental damage can reduce residents' quality of life. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. destinations need visitor strategies shaped by local communities Meaningful consultation should occur before decisions are finalised."
    }
  },
  // tourism management — education and skills
  {
    id: "swt-296",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Tourism can support local employment while placing pressure on destinations. responsible planning can protect natural and cultural attractions while sharing economic benefits. However, crowding, seasonal work, and environmental damage can reduce residents' quality of life. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. destinations need visitor strategies shaped by local communities Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // tourism management — governance and accountability
  {
    id: "swt-297",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Tourism can support local employment while placing pressure on destinations. responsible planning can protect natural and cultural attractions while sharing economic benefits. However, crowding, seasonal work, and environmental damage can reduce residents' quality of life. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. destinations need visitor strategies shaped by local communities Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // tourism management — future resilience
  {
    id: "swt-298",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Tourism can support local employment while placing pressure on destinations. responsible planning can protect natural and cultural attractions while sharing economic benefits. However, crowding, seasonal work, and environmental damage can reduce residents' quality of life. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. destinations need visitor strategies shaped by local communities Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // tourism management — ethical considerations
  {
    id: "swt-299",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Tourism can support local employment while placing pressure on destinations. responsible planning can protect natural and cultural attractions while sharing economic benefits. However, crowding, seasonal work, and environmental damage can reduce residents' quality of life. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. destinations need visitor strategies shaped by local communities Ethical standards should be considered from the beginning of implementation."
    }
  },
  // tourism management — measurement and evidence
  {
    id: "swt-300",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Tourism can support local employment while placing pressure on destinations. responsible planning can protect natural and cultural attractions while sharing economic benefits. However, crowding, seasonal work, and environmental damage can reduce residents' quality of life. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. destinations need visitor strategies shaped by local communities Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // scientific communication — access and equality
  {
    id: "swt-301",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Scientific communication connects researchers with policymakers and the public. clear explanations can help people understand evidence and make informed choices. However, technical language and sensational reporting may distort complex findings. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. institutions should reward accuracy, openness, and accessible communication Policies should identify underserved groups and remove practical barriers."
    }
  },
  // scientific communication — economic effects
  {
    id: "swt-302",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Scientific communication connects researchers with policymakers and the public. clear explanations can help people understand evidence and make informed choices. However, technical language and sensational reporting may distort complex findings. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. institutions should reward accuracy, openness, and accessible communication Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // scientific communication — technology and innovation
  {
    id: "swt-303",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Scientific communication connects researchers with policymakers and the public. clear explanations can help people understand evidence and make informed choices. However, technical language and sensational reporting may distort complex findings. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. institutions should reward accuracy, openness, and accessible communication Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // scientific communication — environmental impact
  {
    id: "swt-304",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Scientific communication connects researchers with policymakers and the public. clear explanations can help people understand evidence and make informed choices. However, technical language and sensational reporting may distort complex findings. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. institutions should reward accuracy, openness, and accessible communication Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // scientific communication — community participation
  {
    id: "swt-305",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Scientific communication connects researchers with policymakers and the public. clear explanations can help people understand evidence and make informed choices. However, technical language and sensational reporting may distort complex findings. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. institutions should reward accuracy, openness, and accessible communication Meaningful consultation should occur before decisions are finalised."
    }
  },
  // scientific communication — education and skills
  {
    id: "swt-306",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Scientific communication connects researchers with policymakers and the public. clear explanations can help people understand evidence and make informed choices. However, technical language and sensational reporting may distort complex findings. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. institutions should reward accuracy, openness, and accessible communication Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // scientific communication — governance and accountability
  {
    id: "swt-307",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Scientific communication connects researchers with policymakers and the public. clear explanations can help people understand evidence and make informed choices. However, technical language and sensational reporting may distort complex findings. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. institutions should reward accuracy, openness, and accessible communication Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // scientific communication — future resilience
  {
    id: "swt-308",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Scientific communication connects researchers with policymakers and the public. clear explanations can help people understand evidence and make informed choices. However, technical language and sensational reporting may distort complex findings. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. institutions should reward accuracy, openness, and accessible communication Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // scientific communication — ethical considerations
  {
    id: "swt-309",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Scientific communication connects researchers with policymakers and the public. clear explanations can help people understand evidence and make informed choices. However, technical language and sensational reporting may distort complex findings. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. institutions should reward accuracy, openness, and accessible communication Ethical standards should be considered from the beginning of implementation."
    }
  },
  // scientific communication — measurement and evidence
  {
    id: "swt-310",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Scientific communication connects researchers with policymakers and the public. clear explanations can help people understand evidence and make informed choices. However, technical language and sensational reporting may distort complex findings. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. institutions should reward accuracy, openness, and accessible communication Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // accessible design — access and equality
  {
    id: "swt-311",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Accessible design enables people with different abilities to use buildings, services, and technology. inclusive features often make products and public spaces easier for everyone to use. However, late consultation and limited budgets can lead to costly barriers. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. designers should involve users early and test solutions in real settings Policies should identify underserved groups and remove practical barriers."
    }
  },
  // accessible design — economic effects
  {
    id: "swt-312",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Accessible design enables people with different abilities to use buildings, services, and technology. inclusive features often make products and public spaces easier for everyone to use. However, late consultation and limited budgets can lead to costly barriers. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. designers should involve users early and test solutions in real settings Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // accessible design — technology and innovation
  {
    id: "swt-313",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Accessible design enables people with different abilities to use buildings, services, and technology. inclusive features often make products and public spaces easier for everyone to use. However, late consultation and limited budgets can lead to costly barriers. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. designers should involve users early and test solutions in real settings Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // accessible design — environmental impact
  {
    id: "swt-314",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Accessible design enables people with different abilities to use buildings, services, and technology. inclusive features often make products and public spaces easier for everyone to use. However, late consultation and limited budgets can lead to costly barriers. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. designers should involve users early and test solutions in real settings Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // accessible design — community participation
  {
    id: "swt-315",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Accessible design enables people with different abilities to use buildings, services, and technology. inclusive features often make products and public spaces easier for everyone to use. However, late consultation and limited budgets can lead to costly barriers. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. designers should involve users early and test solutions in real settings Meaningful consultation should occur before decisions are finalised."
    }
  },
  // accessible design — education and skills
  {
    id: "swt-316",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Accessible design enables people with different abilities to use buildings, services, and technology. inclusive features often make products and public spaces easier for everyone to use. However, late consultation and limited budgets can lead to costly barriers. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. designers should involve users early and test solutions in real settings Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // accessible design — governance and accountability
  {
    id: "swt-317",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Accessible design enables people with different abilities to use buildings, services, and technology. inclusive features often make products and public spaces easier for everyone to use. However, late consultation and limited budgets can lead to costly barriers. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. designers should involve users early and test solutions in real settings Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // accessible design — future resilience
  {
    id: "swt-318",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Accessible design enables people with different abilities to use buildings, services, and technology. inclusive features often make products and public spaces easier for everyone to use. However, late consultation and limited budgets can lead to costly barriers. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. designers should involve users early and test solutions in real settings Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // accessible design — ethical considerations
  {
    id: "swt-319",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Accessible design enables people with different abilities to use buildings, services, and technology. inclusive features often make products and public spaces easier for everyone to use. However, late consultation and limited budgets can lead to costly barriers. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. designers should involve users early and test solutions in real settings Ethical standards should be considered from the beginning of implementation."
    }
  },
  // accessible design — measurement and evidence
  {
    id: "swt-320",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Accessible design enables people with different abilities to use buildings, services, and technology. inclusive features often make products and public spaces easier for everyone to use. However, late consultation and limited budgets can lead to costly barriers. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. designers should involve users early and test solutions in real settings Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // regional development — access and equality
  {
    id: "swt-321",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Regional development aims to create opportunities beyond major economic centres. investment in transport, education, and digital infrastructure can support local employment. However, poor coordination and uneven funding may deepen regional inequalities. The issue also involves access and equality, because access is not distributed evenly, so the benefits may be concentrated among people who already have resources. strategies should build on local strengths and include measurable community goals Policies should identify underserved groups and remove practical barriers."
    }
  },
  // regional development — economic effects
  {
    id: "swt-322",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Regional development aims to create opportunities beyond major economic centres. investment in transport, education, and digital infrastructure can support local employment. However, poor coordination and uneven funding may deepen regional inequalities. The issue also involves economic effects, because the economic effects extend beyond immediate costs to productivity, employment, and public spending. strategies should build on local strengths and include measurable community goals Decision-makers should assess both short-term expenditure and long-term value."
    }
  },
  // regional development — technology and innovation
  {
    id: "swt-323",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Regional development aims to create opportunities beyond major economic centres. investment in transport, education, and digital infrastructure can support local employment. However, poor coordination and uneven funding may deepen regional inequalities. The issue also involves technology and innovation, because new technology can improve efficiency, although its value depends on appropriate design and user skills. strategies should build on local strengths and include measurable community goals Innovation should be evaluated through evidence rather than novelty alone."
    }
  },
  // regional development — environmental impact
  {
    id: "swt-324",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Regional development aims to create opportunities beyond major economic centres. investment in transport, education, and digital infrastructure can support local employment. However, poor coordination and uneven funding may deepen regional inequalities. The issue also involves environmental impact, because environmental consequences may emerge gradually and cross regional boundaries. strategies should build on local strengths and include measurable community goals Planning should account for cumulative effects and measurable environmental targets."
    }
  },
  // regional development — community participation
  {
    id: "swt-325",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Regional development aims to create opportunities beyond major economic centres. investment in transport, education, and digital infrastructure can support local employment. However, poor coordination and uneven funding may deepen regional inequalities. The issue also involves community participation, because local knowledge can reveal needs that centralised planning overlooks. strategies should build on local strengths and include measurable community goals Meaningful consultation should occur before decisions are finalised."
    }
  },
  // regional development — education and skills
  {
    id: "swt-326",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Regional development aims to create opportunities beyond major economic centres. investment in transport, education, and digital infrastructure can support local employment. However, poor coordination and uneven funding may deepen regional inequalities. The issue also involves education and skills, because training helps people adapt, but programmes must remain relevant as circumstances change. strategies should build on local strengths and include measurable community goals Continuous learning should be supported by accessible, practical instruction."
    }
  },
  // regional development — governance and accountability
  {
    id: "swt-327",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Regional development aims to create opportunities beyond major economic centres. investment in transport, education, and digital infrastructure can support local employment. However, poor coordination and uneven funding may deepen regional inequalities. The issue also involves governance and accountability, because clear responsibilities are needed when several organisations influence the same outcome. strategies should build on local strengths and include measurable community goals Transparent reporting and independent evaluation can strengthen public confidence."
    }
  },
  // regional development — future resilience
  {
    id: "swt-328",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Regional development aims to create opportunities beyond major economic centres. investment in transport, education, and digital infrastructure can support local employment. However, poor coordination and uneven funding may deepen regional inequalities. The issue also involves future resilience, because current choices can determine how well communities respond to future disruption. strategies should build on local strengths and include measurable community goals Flexible systems and regular review are more reliable than one-time solutions."
    }
  },
  // regional development — ethical considerations
  {
    id: "swt-329",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Regional development aims to create opportunities beyond major economic centres. investment in transport, education, and digital infrastructure can support local employment. However, poor coordination and uneven funding may deepen regional inequalities. The issue also involves ethical considerations, because efficiency alone cannot resolve questions of fairness, privacy, or responsibility. strategies should build on local strengths and include measurable community goals Ethical standards should be considered from the beginning of implementation."
    }
  },
  // regional development — measurement and evidence
  {
    id: "swt-330",
    type: "summarize-written-text",
    title: "Summarize Written Text",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "Regional development aims to create opportunities beyond major economic centres. investment in transport, education, and digital infrastructure can support local employment. However, poor coordination and uneven funding may deepen regional inequalities. The issue also involves measurement and evidence, because reliable data helps distinguish genuine improvement from assumptions or temporary changes. strategies should build on local strengths and include measurable community goals Consistent indicators and open evaluation should guide future adjustments."
    }
  },
  // urban transport
  {
    id: "we-1",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people believe that urban transport should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // urban transport
  {
    id: "we-2",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent do you agree or disagree that urban transport has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // urban transport
  {
    id: "we-3",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Many communities are changing because of urban transport. Explain the main benefits and disadvantages of this development."
    }
  },
  // urban transport
  {
    id: "we-4",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving urban transport: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // urban transport
  {
    id: "we-5",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some argue that investment in urban transport is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // urban transport
  {
    id: "we-6",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Is it better to address challenges related to urban transport through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // urban transport
  {
    id: "we-7",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding urban transport outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // urban transport
  {
    id: "we-8",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about urban transport. Do you agree or disagree? Use relevant examples."
    }
  },
  // urban transport
  {
    id: "we-9",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "How might urban transport change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // urban transport
  {
    id: "we-10",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about urban transport affect the wider community?"
    }
  },
  // public health
  {
    id: "we-11",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people believe that public health should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // public health
  {
    id: "we-12",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent do you agree or disagree that public health has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // public health
  {
    id: "we-13",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Many communities are changing because of public health. Explain the main benefits and disadvantages of this development."
    }
  },
  // public health
  {
    id: "we-14",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving public health: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // public health
  {
    id: "we-15",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some argue that investment in public health is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // public health
  {
    id: "we-16",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Is it better to address challenges related to public health through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // public health
  {
    id: "we-17",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding public health outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // public health
  {
    id: "we-18",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about public health. Do you agree or disagree? Use relevant examples."
    }
  },
  // public health
  {
    id: "we-19",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "How might public health change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // public health
  {
    id: "we-20",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about public health affect the wider community?"
    }
  },
  // digital education
  {
    id: "we-21",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people believe that digital education should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // digital education
  {
    id: "we-22",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent do you agree or disagree that digital education has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // digital education
  {
    id: "we-23",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Many communities are changing because of digital education. Explain the main benefits and disadvantages of this development."
    }
  },
  // digital education
  {
    id: "we-24",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving digital education: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // digital education
  {
    id: "we-25",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some argue that investment in digital education is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // digital education
  {
    id: "we-26",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Is it better to address challenges related to digital education through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // digital education
  {
    id: "we-27",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding digital education outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // digital education
  {
    id: "we-28",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about digital education. Do you agree or disagree? Use relevant examples."
    }
  },
  // digital education
  {
    id: "we-29",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "How might digital education change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // digital education
  {
    id: "we-30",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about digital education affect the wider community?"
    }
  },
  // biodiversity
  {
    id: "we-31",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people believe that biodiversity should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // biodiversity
  {
    id: "we-32",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent do you agree or disagree that biodiversity has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // biodiversity
  {
    id: "we-33",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Many communities are changing because of biodiversity. Explain the main benefits and disadvantages of this development."
    }
  },
  // biodiversity
  {
    id: "we-34",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving biodiversity: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // biodiversity
  {
    id: "we-35",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some argue that investment in biodiversity is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // biodiversity
  {
    id: "we-36",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Is it better to address challenges related to biodiversity through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // biodiversity
  {
    id: "we-37",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding biodiversity outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // biodiversity
  {
    id: "we-38",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about biodiversity. Do you agree or disagree? Use relevant examples."
    }
  },
  // biodiversity
  {
    id: "we-39",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "How might biodiversity change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // biodiversity
  {
    id: "we-40",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about biodiversity affect the wider community?"
    }
  },
  // renewable energy
  {
    id: "we-41",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people believe that renewable energy should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // renewable energy
  {
    id: "we-42",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent do you agree or disagree that renewable energy has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // renewable energy
  {
    id: "we-43",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Many communities are changing because of renewable energy. Explain the main benefits and disadvantages of this development."
    }
  },
  // renewable energy
  {
    id: "we-44",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving renewable energy: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // renewable energy
  {
    id: "we-45",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some argue that investment in renewable energy is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // renewable energy
  {
    id: "we-46",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Is it better to address challenges related to renewable energy through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // renewable energy
  {
    id: "we-47",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding renewable energy outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // renewable energy
  {
    id: "we-48",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about renewable energy. Do you agree or disagree? Use relevant examples."
    }
  },
  // renewable energy
  {
    id: "we-49",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "How might renewable energy change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // renewable energy
  {
    id: "we-50",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about renewable energy affect the wider community?"
    }
  },
  // workplace flexibility
  {
    id: "we-51",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people believe that workplace flexibility should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // workplace flexibility
  {
    id: "we-52",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent do you agree or disagree that workplace flexibility has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // workplace flexibility
  {
    id: "we-53",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Many communities are changing because of workplace flexibility. Explain the main benefits and disadvantages of this development."
    }
  },
  // workplace flexibility
  {
    id: "we-54",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving workplace flexibility: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // workplace flexibility
  {
    id: "we-55",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some argue that investment in workplace flexibility is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // workplace flexibility
  {
    id: "we-56",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Is it better to address challenges related to workplace flexibility through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // workplace flexibility
  {
    id: "we-57",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding workplace flexibility outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // workplace flexibility
  {
    id: "we-58",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about workplace flexibility. Do you agree or disagree? Use relevant examples."
    }
  },
  // workplace flexibility
  {
    id: "we-59",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "How might workplace flexibility change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // workplace flexibility
  {
    id: "we-60",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about workplace flexibility affect the wider community?"
    }
  },
  // financial literacy
  {
    id: "we-61",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people believe that financial literacy should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // financial literacy
  {
    id: "we-62",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent do you agree or disagree that financial literacy has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // financial literacy
  {
    id: "we-63",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Many communities are changing because of financial literacy. Explain the main benefits and disadvantages of this development."
    }
  },
  // financial literacy
  {
    id: "we-64",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving financial literacy: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // financial literacy
  {
    id: "we-65",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some argue that investment in financial literacy is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // financial literacy
  {
    id: "we-66",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Is it better to address challenges related to financial literacy through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // financial literacy
  {
    id: "we-67",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding financial literacy outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // financial literacy
  {
    id: "we-68",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about financial literacy. Do you agree or disagree? Use relevant examples."
    }
  },
  // financial literacy
  {
    id: "we-69",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "How might financial literacy change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // financial literacy
  {
    id: "we-70",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about financial literacy affect the wider community?"
    }
  },
  // food security
  {
    id: "we-71",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people believe that food security should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // food security
  {
    id: "we-72",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent do you agree or disagree that food security has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // food security
  {
    id: "we-73",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Many communities are changing because of food security. Explain the main benefits and disadvantages of this development."
    }
  },
  // food security
  {
    id: "we-74",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving food security: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // food security
  {
    id: "we-75",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some argue that investment in food security is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // food security
  {
    id: "we-76",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Is it better to address challenges related to food security through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // food security
  {
    id: "we-77",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding food security outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // food security
  {
    id: "we-78",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about food security. Do you agree or disagree? Use relevant examples."
    }
  },
  // food security
  {
    id: "we-79",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "How might food security change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // food security
  {
    id: "we-80",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about food security affect the wider community?"
    }
  },
  // urban green space
  {
    id: "we-81",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people believe that urban green space should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // urban green space
  {
    id: "we-82",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent do you agree or disagree that urban green space has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // urban green space
  {
    id: "we-83",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Many communities are changing because of urban green space. Explain the main benefits and disadvantages of this development."
    }
  },
  // urban green space
  {
    id: "we-84",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving urban green space: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // urban green space
  {
    id: "we-85",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some argue that investment in urban green space is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // urban green space
  {
    id: "we-86",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Is it better to address challenges related to urban green space through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // urban green space
  {
    id: "we-87",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding urban green space outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // urban green space
  {
    id: "we-88",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about urban green space. Do you agree or disagree? Use relevant examples."
    }
  },
  // urban green space
  {
    id: "we-89",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "How might urban green space change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // urban green space
  {
    id: "we-90",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about urban green space affect the wider community?"
    }
  },
  // artificial intelligence
  {
    id: "we-91",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people believe that artificial intelligence should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // artificial intelligence
  {
    id: "we-92",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent do you agree or disagree that artificial intelligence has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // artificial intelligence
  {
    id: "we-93",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Many communities are changing because of artificial intelligence. Explain the main benefits and disadvantages of this development."
    }
  },
  // artificial intelligence
  {
    id: "we-94",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving artificial intelligence: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // artificial intelligence
  {
    id: "we-95",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some argue that investment in artificial intelligence is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // artificial intelligence
  {
    id: "we-96",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Is it better to address challenges related to artificial intelligence through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // artificial intelligence
  {
    id: "we-97",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding artificial intelligence outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // artificial intelligence
  {
    id: "we-98",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about artificial intelligence. Do you agree or disagree? Use relevant examples."
    }
  },
  // artificial intelligence
  {
    id: "we-99",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "How might artificial intelligence change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // artificial intelligence
  {
    id: "we-100",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "easy",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about artificial intelligence affect the wider community?"
    }
  },
  // water conservation
  {
    id: "we-101",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people believe that water conservation should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // water conservation
  {
    id: "we-102",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent do you agree or disagree that water conservation has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // water conservation
  {
    id: "we-103",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Many communities are changing because of water conservation. Explain the main benefits and disadvantages of this development."
    }
  },
  // water conservation
  {
    id: "we-104",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving water conservation: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // water conservation
  {
    id: "we-105",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some argue that investment in water conservation is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // water conservation
  {
    id: "we-106",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Is it better to address challenges related to water conservation through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // water conservation
  {
    id: "we-107",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding water conservation outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // water conservation
  {
    id: "we-108",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about water conservation. Do you agree or disagree? Use relevant examples."
    }
  },
  // water conservation
  {
    id: "we-109",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "How might water conservation change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // water conservation
  {
    id: "we-110",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about water conservation affect the wider community?"
    }
  },
  // cultural heritage
  {
    id: "we-111",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people believe that cultural heritage should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // cultural heritage
  {
    id: "we-112",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent do you agree or disagree that cultural heritage has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // cultural heritage
  {
    id: "we-113",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Many communities are changing because of cultural heritage. Explain the main benefits and disadvantages of this development."
    }
  },
  // cultural heritage
  {
    id: "we-114",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving cultural heritage: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // cultural heritage
  {
    id: "we-115",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some argue that investment in cultural heritage is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // cultural heritage
  {
    id: "we-116",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Is it better to address challenges related to cultural heritage through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // cultural heritage
  {
    id: "we-117",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding cultural heritage outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // cultural heritage
  {
    id: "we-118",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about cultural heritage. Do you agree or disagree? Use relevant examples."
    }
  },
  // cultural heritage
  {
    id: "we-119",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "How might cultural heritage change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // cultural heritage
  {
    id: "we-120",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about cultural heritage affect the wider community?"
    }
  },
  // scientific research
  {
    id: "we-121",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people believe that scientific research should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // scientific research
  {
    id: "we-122",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent do you agree or disagree that scientific research has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // scientific research
  {
    id: "we-123",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Many communities are changing because of scientific research. Explain the main benefits and disadvantages of this development."
    }
  },
  // scientific research
  {
    id: "we-124",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving scientific research: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // scientific research
  {
    id: "we-125",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some argue that investment in scientific research is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // scientific research
  {
    id: "we-126",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Is it better to address challenges related to scientific research through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // scientific research
  {
    id: "we-127",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding scientific research outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // scientific research
  {
    id: "we-128",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about scientific research. Do you agree or disagree? Use relevant examples."
    }
  },
  // scientific research
  {
    id: "we-129",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "How might scientific research change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // scientific research
  {
    id: "we-130",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about scientific research affect the wider community?"
    }
  },
  // ocean pollution
  {
    id: "we-131",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people believe that ocean pollution should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // ocean pollution
  {
    id: "we-132",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent do you agree or disagree that ocean pollution has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // ocean pollution
  {
    id: "we-133",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Many communities are changing because of ocean pollution. Explain the main benefits and disadvantages of this development."
    }
  },
  // ocean pollution
  {
    id: "we-134",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving ocean pollution: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // ocean pollution
  {
    id: "we-135",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some argue that investment in ocean pollution is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // ocean pollution
  {
    id: "we-136",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Is it better to address challenges related to ocean pollution through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // ocean pollution
  {
    id: "we-137",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding ocean pollution outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // ocean pollution
  {
    id: "we-138",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about ocean pollution. Do you agree or disagree? Use relevant examples."
    }
  },
  // ocean pollution
  {
    id: "we-139",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "How might ocean pollution change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // ocean pollution
  {
    id: "we-140",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about ocean pollution affect the wider community?"
    }
  },
  // aging populations
  {
    id: "we-141",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people believe that aging populations should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // aging populations
  {
    id: "we-142",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent do you agree or disagree that aging populations has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // aging populations
  {
    id: "we-143",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Many communities are changing because of aging populations. Explain the main benefits and disadvantages of this development."
    }
  },
  // aging populations
  {
    id: "we-144",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving aging populations: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // aging populations
  {
    id: "we-145",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some argue that investment in aging populations is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // aging populations
  {
    id: "we-146",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Is it better to address challenges related to aging populations through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // aging populations
  {
    id: "we-147",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding aging populations outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // aging populations
  {
    id: "we-148",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about aging populations. Do you agree or disagree? Use relevant examples."
    }
  },
  // aging populations
  {
    id: "we-149",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "How might aging populations change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // aging populations
  {
    id: "we-150",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about aging populations affect the wider community?"
    }
  },
  // public libraries
  {
    id: "we-151",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people believe that public libraries should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // public libraries
  {
    id: "we-152",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent do you agree or disagree that public libraries has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // public libraries
  {
    id: "we-153",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Many communities are changing because of public libraries. Explain the main benefits and disadvantages of this development."
    }
  },
  // public libraries
  {
    id: "we-154",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving public libraries: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // public libraries
  {
    id: "we-155",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some argue that investment in public libraries is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // public libraries
  {
    id: "we-156",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Is it better to address challenges related to public libraries through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // public libraries
  {
    id: "we-157",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding public libraries outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // public libraries
  {
    id: "we-158",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about public libraries. Do you agree or disagree? Use relevant examples."
    }
  },
  // public libraries
  {
    id: "we-159",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "How might public libraries change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // public libraries
  {
    id: "we-160",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about public libraries affect the wider community?"
    }
  },
  // small businesses
  {
    id: "we-161",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people believe that small businesses should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // small businesses
  {
    id: "we-162",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent do you agree or disagree that small businesses has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // small businesses
  {
    id: "we-163",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Many communities are changing because of small businesses. Explain the main benefits and disadvantages of this development."
    }
  },
  // small businesses
  {
    id: "we-164",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving small businesses: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // small businesses
  {
    id: "we-165",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some argue that investment in small businesses is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // small businesses
  {
    id: "we-166",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Is it better to address challenges related to small businesses through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // small businesses
  {
    id: "we-167",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding small businesses outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // small businesses
  {
    id: "we-168",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about small businesses. Do you agree or disagree? Use relevant examples."
    }
  },
  // small businesses
  {
    id: "we-169",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "How might small businesses change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // small businesses
  {
    id: "we-170",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about small businesses affect the wider community?"
    }
  },
  // disaster preparedness
  {
    id: "we-171",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people believe that disaster preparedness should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // disaster preparedness
  {
    id: "we-172",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent do you agree or disagree that disaster preparedness has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // disaster preparedness
  {
    id: "we-173",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Many communities are changing because of disaster preparedness. Explain the main benefits and disadvantages of this development."
    }
  },
  // disaster preparedness
  {
    id: "we-174",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving disaster preparedness: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // disaster preparedness
  {
    id: "we-175",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some argue that investment in disaster preparedness is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // disaster preparedness
  {
    id: "we-176",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Is it better to address challenges related to disaster preparedness through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // disaster preparedness
  {
    id: "we-177",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding disaster preparedness outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // disaster preparedness
  {
    id: "we-178",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about disaster preparedness. Do you agree or disagree? Use relevant examples."
    }
  },
  // disaster preparedness
  {
    id: "we-179",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "How might disaster preparedness change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // disaster preparedness
  {
    id: "we-180",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about disaster preparedness affect the wider community?"
    }
  },
  // space exploration
  {
    id: "we-181",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people believe that space exploration should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // space exploration
  {
    id: "we-182",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent do you agree or disagree that space exploration has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // space exploration
  {
    id: "we-183",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Many communities are changing because of space exploration. Explain the main benefits and disadvantages of this development."
    }
  },
  // space exploration
  {
    id: "we-184",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving space exploration: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // space exploration
  {
    id: "we-185",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some argue that investment in space exploration is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // space exploration
  {
    id: "we-186",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Is it better to address challenges related to space exploration through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // space exploration
  {
    id: "we-187",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding space exploration outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // space exploration
  {
    id: "we-188",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about space exploration. Do you agree or disagree? Use relevant examples."
    }
  },
  // space exploration
  {
    id: "we-189",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "How might space exploration change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // space exploration
  {
    id: "we-190",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about space exploration affect the wider community?"
    }
  },
  // mental well-being
  {
    id: "we-191",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people believe that mental well-being should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // mental well-being
  {
    id: "we-192",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent do you agree or disagree that mental well-being has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // mental well-being
  {
    id: "we-193",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Many communities are changing because of mental well-being. Explain the main benefits and disadvantages of this development."
    }
  },
  // mental well-being
  {
    id: "we-194",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving mental well-being: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // mental well-being
  {
    id: "we-195",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some argue that investment in mental well-being is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // mental well-being
  {
    id: "we-196",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Is it better to address challenges related to mental well-being through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // mental well-being
  {
    id: "we-197",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding mental well-being outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // mental well-being
  {
    id: "we-198",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about mental well-being. Do you agree or disagree? Use relevant examples."
    }
  },
  // mental well-being
  {
    id: "we-199",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "How might mental well-being change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // mental well-being
  {
    id: "we-200",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "medium",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about mental well-being affect the wider community?"
    }
  },
  // ethical consumption
  {
    id: "we-201",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that ethical consumption should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // ethical consumption
  {
    id: "we-202",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that ethical consumption has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // ethical consumption
  {
    id: "we-203",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of ethical consumption. Explain the main benefits and disadvantages of this development."
    }
  },
  // ethical consumption
  {
    id: "we-204",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving ethical consumption: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // ethical consumption
  {
    id: "we-205",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in ethical consumption is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // ethical consumption
  {
    id: "we-206",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to ethical consumption through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // ethical consumption
  {
    id: "we-207",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding ethical consumption outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // ethical consumption
  {
    id: "we-208",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about ethical consumption. Do you agree or disagree? Use relevant examples."
    }
  },
  // ethical consumption
  {
    id: "we-209",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might ethical consumption change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // ethical consumption
  {
    id: "we-210",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about ethical consumption affect the wider community?"
    }
  },
  // language learning
  {
    id: "we-211",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that language learning should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // language learning
  {
    id: "we-212",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that language learning has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // language learning
  {
    id: "we-213",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of language learning. Explain the main benefits and disadvantages of this development."
    }
  },
  // language learning
  {
    id: "we-214",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving language learning: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // language learning
  {
    id: "we-215",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in language learning is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // language learning
  {
    id: "we-216",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to language learning through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // language learning
  {
    id: "we-217",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding language learning outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // language learning
  {
    id: "we-218",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about language learning. Do you agree or disagree? Use relevant examples."
    }
  },
  // language learning
  {
    id: "we-219",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might language learning change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // language learning
  {
    id: "we-220",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about language learning affect the wider community?"
    }
  },
  // agricultural technology
  {
    id: "we-221",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that agricultural technology should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // agricultural technology
  {
    id: "we-222",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that agricultural technology has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // agricultural technology
  {
    id: "we-223",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of agricultural technology. Explain the main benefits and disadvantages of this development."
    }
  },
  // agricultural technology
  {
    id: "we-224",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving agricultural technology: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // agricultural technology
  {
    id: "we-225",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in agricultural technology is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // agricultural technology
  {
    id: "we-226",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to agricultural technology through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // agricultural technology
  {
    id: "we-227",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding agricultural technology outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // agricultural technology
  {
    id: "we-228",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about agricultural technology. Do you agree or disagree? Use relevant examples."
    }
  },
  // agricultural technology
  {
    id: "we-229",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might agricultural technology change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // agricultural technology
  {
    id: "we-230",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about agricultural technology affect the wider community?"
    }
  },
  // public transport safety
  {
    id: "we-231",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that public transport safety should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // public transport safety
  {
    id: "we-232",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that public transport safety has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // public transport safety
  {
    id: "we-233",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of public transport safety. Explain the main benefits and disadvantages of this development."
    }
  },
  // public transport safety
  {
    id: "we-234",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving public transport safety: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // public transport safety
  {
    id: "we-235",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in public transport safety is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // public transport safety
  {
    id: "we-236",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to public transport safety through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // public transport safety
  {
    id: "we-237",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding public transport safety outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // public transport safety
  {
    id: "we-238",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about public transport safety. Do you agree or disagree? Use relevant examples."
    }
  },
  // public transport safety
  {
    id: "we-239",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might public transport safety change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // public transport safety
  {
    id: "we-240",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about public transport safety affect the wider community?"
    }
  },
  // online privacy
  {
    id: "we-241",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that online privacy should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // online privacy
  {
    id: "we-242",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that online privacy has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // online privacy
  {
    id: "we-243",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of online privacy. Explain the main benefits and disadvantages of this development."
    }
  },
  // online privacy
  {
    id: "we-244",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving online privacy: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // online privacy
  {
    id: "we-245",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in online privacy is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // online privacy
  {
    id: "we-246",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to online privacy through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // online privacy
  {
    id: "we-247",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding online privacy outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // online privacy
  {
    id: "we-248",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about online privacy. Do you agree or disagree? Use relevant examples."
    }
  },
  // online privacy
  {
    id: "we-249",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might online privacy change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // online privacy
  {
    id: "we-250",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about online privacy affect the wider community?"
    }
  },
  // volunteering
  {
    id: "we-251",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that volunteering should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // volunteering
  {
    id: "we-252",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that volunteering has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // volunteering
  {
    id: "we-253",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of volunteering. Explain the main benefits and disadvantages of this development."
    }
  },
  // volunteering
  {
    id: "we-254",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving volunteering: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // volunteering
  {
    id: "we-255",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in volunteering is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // volunteering
  {
    id: "we-256",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to volunteering through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // volunteering
  {
    id: "we-257",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding volunteering outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // volunteering
  {
    id: "we-258",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about volunteering. Do you agree or disagree? Use relevant examples."
    }
  },
  // volunteering
  {
    id: "we-259",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might volunteering change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // volunteering
  {
    id: "we-260",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about volunteering affect the wider community?"
    }
  },
  // museum learning
  {
    id: "we-261",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that museum learning should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // museum learning
  {
    id: "we-262",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that museum learning has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // museum learning
  {
    id: "we-263",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of museum learning. Explain the main benefits and disadvantages of this development."
    }
  },
  // museum learning
  {
    id: "we-264",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving museum learning: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // museum learning
  {
    id: "we-265",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in museum learning is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // museum learning
  {
    id: "we-266",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to museum learning through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // museum learning
  {
    id: "we-267",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding museum learning outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // museum learning
  {
    id: "we-268",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about museum learning. Do you agree or disagree? Use relevant examples."
    }
  },
  // museum learning
  {
    id: "we-269",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might museum learning change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // museum learning
  {
    id: "we-270",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about museum learning affect the wider community?"
    }
  },
  // circular economy
  {
    id: "we-271",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that circular economy should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // circular economy
  {
    id: "we-272",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that circular economy has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // circular economy
  {
    id: "we-273",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of circular economy. Explain the main benefits and disadvantages of this development."
    }
  },
  // circular economy
  {
    id: "we-274",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving circular economy: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // circular economy
  {
    id: "we-275",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in circular economy is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // circular economy
  {
    id: "we-276",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to circular economy through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // circular economy
  {
    id: "we-277",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding circular economy outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // circular economy
  {
    id: "we-278",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about circular economy. Do you agree or disagree? Use relevant examples."
    }
  },
  // circular economy
  {
    id: "we-279",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might circular economy change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // circular economy
  {
    id: "we-280",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about circular economy affect the wider community?"
    }
  },
  // workplace diversity
  {
    id: "we-281",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that workplace diversity should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // workplace diversity
  {
    id: "we-282",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that workplace diversity has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // workplace diversity
  {
    id: "we-283",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of workplace diversity. Explain the main benefits and disadvantages of this development."
    }
  },
  // workplace diversity
  {
    id: "we-284",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving workplace diversity: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // workplace diversity
  {
    id: "we-285",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in workplace diversity is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // workplace diversity
  {
    id: "we-286",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to workplace diversity through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // workplace diversity
  {
    id: "we-287",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding workplace diversity outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // workplace diversity
  {
    id: "we-288",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about workplace diversity. Do you agree or disagree? Use relevant examples."
    }
  },
  // workplace diversity
  {
    id: "we-289",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might workplace diversity change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // workplace diversity
  {
    id: "we-290",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about workplace diversity affect the wider community?"
    }
  },
  // tourism management
  {
    id: "we-291",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that tourism management should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // tourism management
  {
    id: "we-292",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that tourism management has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // tourism management
  {
    id: "we-293",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of tourism management. Explain the main benefits and disadvantages of this development."
    }
  },
  // tourism management
  {
    id: "we-294",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving tourism management: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // tourism management
  {
    id: "we-295",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in tourism management is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // tourism management
  {
    id: "we-296",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to tourism management through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // tourism management
  {
    id: "we-297",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding tourism management outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // tourism management
  {
    id: "we-298",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about tourism management. Do you agree or disagree? Use relevant examples."
    }
  },
  // tourism management
  {
    id: "we-299",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might tourism management change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // tourism management
  {
    id: "we-300",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about tourism management affect the wider community?"
    }
  },
  // scientific communication
  {
    id: "we-301",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that scientific communication should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // scientific communication
  {
    id: "we-302",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that scientific communication has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // scientific communication
  {
    id: "we-303",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of scientific communication. Explain the main benefits and disadvantages of this development."
    }
  },
  // scientific communication
  {
    id: "we-304",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving scientific communication: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // scientific communication
  {
    id: "we-305",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in scientific communication is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // scientific communication
  {
    id: "we-306",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to scientific communication through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // scientific communication
  {
    id: "we-307",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding scientific communication outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // scientific communication
  {
    id: "we-308",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about scientific communication. Do you agree or disagree? Use relevant examples."
    }
  },
  // scientific communication
  {
    id: "we-309",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might scientific communication change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // scientific communication
  {
    id: "we-310",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about scientific communication affect the wider community?"
    }
  },
  // accessible design
  {
    id: "we-311",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that accessible design should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // accessible design
  {
    id: "we-312",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that accessible design has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // accessible design
  {
    id: "we-313",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of accessible design. Explain the main benefits and disadvantages of this development."
    }
  },
  // accessible design
  {
    id: "we-314",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving accessible design: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // accessible design
  {
    id: "we-315",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in accessible design is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // accessible design
  {
    id: "we-316",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to accessible design through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // accessible design
  {
    id: "we-317",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding accessible design outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // accessible design
  {
    id: "we-318",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about accessible design. Do you agree or disagree? Use relevant examples."
    }
  },
  // accessible design
  {
    id: "we-319",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might accessible design change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // accessible design
  {
    id: "we-320",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about accessible design affect the wider community?"
    }
  },
  // regional development
  {
    id: "we-321",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people believe that regional development should receive greater attention from governments, while others consider different priorities more urgent. Discuss both views and give your opinion."
    }
  },
  // regional development
  {
    id: "we-322",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent do you agree or disagree that regional development has a positive effect on modern society? Support your position with reasons and examples."
    }
  },
  // regional development
  {
    id: "we-323",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Many communities are changing because of regional development. Explain the main benefits and disadvantages of this development."
    }
  },
  // regional development
  {
    id: "we-324",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Who should take the greatest responsibility for improving regional development: individuals, businesses, or governments? Give reasons for your answer."
    }
  },
  // regional development
  {
    id: "we-325",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some argue that investment in regional development is essential for future generations, whereas others question its cost. Evaluate both perspectives and state your view."
    }
  },
  // regional development
  {
    id: "we-326",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Is it better to address challenges related to regional development through strict regulation or through education and voluntary action? Explain your reasoning."
    }
  },
  // regional development
  {
    id: "we-327",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Discuss whether the advantages of expanding regional development outweigh the possible social, economic, and environmental disadvantages."
    }
  },
  // regional development
  {
    id: "we-328",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "Some people think schools and universities should teach more about regional development. Do you agree or disagree? Use relevant examples."
    }
  },
  // regional development
  {
    id: "we-329",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "How might regional development change over the next twenty years, and what should society do to prepare for these changes?"
    }
  },
  // regional development
  {
    id: "we-330",
    type: "write-essay",
    title: "Write Essay",
    instruction: "Write an essay of 200-300 words on the given topic.",
    timeLimit: 1200,
    minWords: 200,
    maxWords: 300,
    difficulty: "hard",
    content: {
      essayPrompt: "To what extent should personal freedom be limited when decisions about regional development affect the wider community?"
    }
  },
  // urban transport — access and equality
  {
    id: "swtc-1",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban transport, public transport systems influence how residents reach work, education, and essential services. For example, reliable buses, trains, and cycling routes can reduce congestion and household travel costs. Nevertheless, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. An effective response should recognise access and equality and ensure that long-term transport planning should combine accessibility, affordability, and environmental goals."
    }
  },
  // urban transport — economic effects
  {
    id: "swtc-2",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban transport, public transport systems influence how residents reach work, education, and essential services. For example, reliable buses, trains, and cycling routes can reduce congestion and household travel costs. Nevertheless, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. An effective response should recognise economic effects and ensure that long-term transport planning should combine accessibility, affordability, and environmental goals."
    }
  },
  // urban transport — technology and innovation
  {
    id: "swtc-3",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban transport, public transport systems influence how residents reach work, education, and essential services. For example, reliable buses, trains, and cycling routes can reduce congestion and household travel costs. Nevertheless, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. An effective response should recognise technology and innovation and ensure that long-term transport planning should combine accessibility, affordability, and environmental goals."
    }
  },
  // urban transport — environmental impact
  {
    id: "swtc-4",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban transport, public transport systems influence how residents reach work, education, and essential services. For example, reliable buses, trains, and cycling routes can reduce congestion and household travel costs. Nevertheless, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. An effective response should recognise environmental impact and ensure that long-term transport planning should combine accessibility, affordability, and environmental goals."
    }
  },
  // urban transport — community participation
  {
    id: "swtc-5",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban transport, public transport systems influence how residents reach work, education, and essential services. For example, reliable buses, trains, and cycling routes can reduce congestion and household travel costs. Nevertheless, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. An effective response should recognise community participation and ensure that long-term transport planning should combine accessibility, affordability, and environmental goals."
    }
  },
  // urban transport — education and skills
  {
    id: "swtc-6",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban transport, public transport systems influence how residents reach work, education, and essential services. For example, reliable buses, trains, and cycling routes can reduce congestion and household travel costs. Nevertheless, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. An effective response should recognise education and skills and ensure that long-term transport planning should combine accessibility, affordability, and environmental goals."
    }
  },
  // urban transport — governance and accountability
  {
    id: "swtc-7",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban transport, public transport systems influence how residents reach work, education, and essential services. For example, reliable buses, trains, and cycling routes can reduce congestion and household travel costs. Nevertheless, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. An effective response should recognise governance and accountability and ensure that long-term transport planning should combine accessibility, affordability, and environmental goals."
    }
  },
  // urban transport — future resilience
  {
    id: "swtc-8",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban transport, public transport systems influence how residents reach work, education, and essential services. For example, reliable buses, trains, and cycling routes can reduce congestion and household travel costs. Nevertheless, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. An effective response should recognise future resilience and ensure that long-term transport planning should combine accessibility, affordability, and environmental goals."
    }
  },
  // urban transport — ethical considerations
  {
    id: "swtc-9",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban transport, public transport systems influence how residents reach work, education, and essential services. For example, reliable buses, trains, and cycling routes can reduce congestion and household travel costs. Nevertheless, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. An effective response should recognise ethical considerations and ensure that long-term transport planning should combine accessibility, affordability, and environmental goals."
    }
  },
  // urban transport — measurement and evidence
  {
    id: "swtc-10",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban transport, public transport systems influence how residents reach work, education, and essential services. For example, reliable buses, trains, and cycling routes can reduce congestion and household travel costs. Nevertheless, poor planning, limited funding, and unequal coverage often prevent communities from benefiting equally. An effective response should recognise measurement and evidence and ensure that long-term transport planning should combine accessibility, affordability, and environmental goals."
    }
  },
  // public health — access and equality
  {
    id: "swtc-11",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of public health, preventive health programmes help communities identify risks before serious illness develops. For example, screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. Nevertheless, misinformation, staff shortages, and unequal access can limit their effectiveness. An effective response should recognise access and equality and ensure that health authorities need sustained investment and clear communication."
    }
  },
  // public health — economic effects
  {
    id: "swtc-12",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of public health, preventive health programmes help communities identify risks before serious illness develops. For example, screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. Nevertheless, misinformation, staff shortages, and unequal access can limit their effectiveness. An effective response should recognise economic effects and ensure that health authorities need sustained investment and clear communication."
    }
  },
  // public health — technology and innovation
  {
    id: "swtc-13",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of public health, preventive health programmes help communities identify risks before serious illness develops. For example, screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. Nevertheless, misinformation, staff shortages, and unequal access can limit their effectiveness. An effective response should recognise technology and innovation and ensure that health authorities need sustained investment and clear communication."
    }
  },
  // public health — environmental impact
  {
    id: "swtc-14",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of public health, preventive health programmes help communities identify risks before serious illness develops. For example, screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. Nevertheless, misinformation, staff shortages, and unequal access can limit their effectiveness. An effective response should recognise environmental impact and ensure that health authorities need sustained investment and clear communication."
    }
  },
  // public health — community participation
  {
    id: "swtc-15",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of public health, preventive health programmes help communities identify risks before serious illness develops. For example, screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. Nevertheless, misinformation, staff shortages, and unequal access can limit their effectiveness. An effective response should recognise community participation and ensure that health authorities need sustained investment and clear communication."
    }
  },
  // public health — education and skills
  {
    id: "swtc-16",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of public health, preventive health programmes help communities identify risks before serious illness develops. For example, screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. Nevertheless, misinformation, staff shortages, and unequal access can limit their effectiveness. An effective response should recognise education and skills and ensure that health authorities need sustained investment and clear communication."
    }
  },
  // public health — governance and accountability
  {
    id: "swtc-17",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of public health, preventive health programmes help communities identify risks before serious illness develops. For example, screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. Nevertheless, misinformation, staff shortages, and unequal access can limit their effectiveness. An effective response should recognise governance and accountability and ensure that health authorities need sustained investment and clear communication."
    }
  },
  // public health — future resilience
  {
    id: "swtc-18",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of public health, preventive health programmes help communities identify risks before serious illness develops. For example, screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. Nevertheless, misinformation, staff shortages, and unequal access can limit their effectiveness. An effective response should recognise future resilience and ensure that health authorities need sustained investment and clear communication."
    }
  },
  // public health — ethical considerations
  {
    id: "swtc-19",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of public health, preventive health programmes help communities identify risks before serious illness develops. For example, screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. Nevertheless, misinformation, staff shortages, and unequal access can limit their effectiveness. An effective response should recognise ethical considerations and ensure that health authorities need sustained investment and clear communication."
    }
  },
  // public health — measurement and evidence
  {
    id: "swtc-20",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of public health, preventive health programmes help communities identify risks before serious illness develops. For example, screening, education, and accessible local clinics can improve outcomes and reduce pressure on hospitals. Nevertheless, misinformation, staff shortages, and unequal access can limit their effectiveness. An effective response should recognise measurement and evidence and ensure that health authorities need sustained investment and clear communication."
    }
  },
  // digital education — access and equality
  {
    id: "swtc-21",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of digital education, digital learning tools have expanded access to lessons, resources, and remote instruction. For example, recorded classes and interactive platforms allow learners to study at different times and review difficult material. Nevertheless, unequal internet access, distraction, and limited teacher training can widen existing gaps. An effective response should recognise access and equality and ensure that effective programmes should combine technology with guidance, feedback, and inclusive access."
    }
  },
  // digital education — economic effects
  {
    id: "swtc-22",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of digital education, digital learning tools have expanded access to lessons, resources, and remote instruction. For example, recorded classes and interactive platforms allow learners to study at different times and review difficult material. Nevertheless, unequal internet access, distraction, and limited teacher training can widen existing gaps. An effective response should recognise economic effects and ensure that effective programmes should combine technology with guidance, feedback, and inclusive access."
    }
  },
  // digital education — technology and innovation
  {
    id: "swtc-23",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of digital education, digital learning tools have expanded access to lessons, resources, and remote instruction. For example, recorded classes and interactive platforms allow learners to study at different times and review difficult material. Nevertheless, unequal internet access, distraction, and limited teacher training can widen existing gaps. An effective response should recognise technology and innovation and ensure that effective programmes should combine technology with guidance, feedback, and inclusive access."
    }
  },
  // digital education — environmental impact
  {
    id: "swtc-24",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of digital education, digital learning tools have expanded access to lessons, resources, and remote instruction. For example, recorded classes and interactive platforms allow learners to study at different times and review difficult material. Nevertheless, unequal internet access, distraction, and limited teacher training can widen existing gaps. An effective response should recognise environmental impact and ensure that effective programmes should combine technology with guidance, feedback, and inclusive access."
    }
  },
  // digital education — community participation
  {
    id: "swtc-25",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of digital education, digital learning tools have expanded access to lessons, resources, and remote instruction. For example, recorded classes and interactive platforms allow learners to study at different times and review difficult material. Nevertheless, unequal internet access, distraction, and limited teacher training can widen existing gaps. An effective response should recognise community participation and ensure that effective programmes should combine technology with guidance, feedback, and inclusive access."
    }
  },
  // digital education — education and skills
  {
    id: "swtc-26",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of digital education, digital learning tools have expanded access to lessons, resources, and remote instruction. For example, recorded classes and interactive platforms allow learners to study at different times and review difficult material. Nevertheless, unequal internet access, distraction, and limited teacher training can widen existing gaps. An effective response should recognise education and skills and ensure that effective programmes should combine technology with guidance, feedback, and inclusive access."
    }
  },
  // digital education — governance and accountability
  {
    id: "swtc-27",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of digital education, digital learning tools have expanded access to lessons, resources, and remote instruction. For example, recorded classes and interactive platforms allow learners to study at different times and review difficult material. Nevertheless, unequal internet access, distraction, and limited teacher training can widen existing gaps. An effective response should recognise governance and accountability and ensure that effective programmes should combine technology with guidance, feedback, and inclusive access."
    }
  },
  // digital education — future resilience
  {
    id: "swtc-28",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of digital education, digital learning tools have expanded access to lessons, resources, and remote instruction. For example, recorded classes and interactive platforms allow learners to study at different times and review difficult material. Nevertheless, unequal internet access, distraction, and limited teacher training can widen existing gaps. An effective response should recognise future resilience and ensure that effective programmes should combine technology with guidance, feedback, and inclusive access."
    }
  },
  // digital education — ethical considerations
  {
    id: "swtc-29",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of digital education, digital learning tools have expanded access to lessons, resources, and remote instruction. For example, recorded classes and interactive platforms allow learners to study at different times and review difficult material. Nevertheless, unequal internet access, distraction, and limited teacher training can widen existing gaps. An effective response should recognise ethical considerations and ensure that effective programmes should combine technology with guidance, feedback, and inclusive access."
    }
  },
  // digital education — measurement and evidence
  {
    id: "swtc-30",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of digital education, digital learning tools have expanded access to lessons, resources, and remote instruction. For example, recorded classes and interactive platforms allow learners to study at different times and review difficult material. Nevertheless, unequal internet access, distraction, and limited teacher training can widen existing gaps. An effective response should recognise measurement and evidence and ensure that effective programmes should combine technology with guidance, feedback, and inclusive access."
    }
  },
  // biodiversity — access and equality
  {
    id: "swtc-31",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of biodiversity, biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. For example, protected habitats and connected green corridors help species survive environmental change. Nevertheless, habitat loss, pollution, and invasive species place increasing pressure on local populations. An effective response should recognise access and equality and ensure that conservation requires coordinated action by governments, businesses, and communities."
    }
  },
  // biodiversity — economic effects
  {
    id: "swtc-32",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of biodiversity, biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. For example, protected habitats and connected green corridors help species survive environmental change. Nevertheless, habitat loss, pollution, and invasive species place increasing pressure on local populations. An effective response should recognise economic effects and ensure that conservation requires coordinated action by governments, businesses, and communities."
    }
  },
  // biodiversity — technology and innovation
  {
    id: "swtc-33",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of biodiversity, biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. For example, protected habitats and connected green corridors help species survive environmental change. Nevertheless, habitat loss, pollution, and invasive species place increasing pressure on local populations. An effective response should recognise technology and innovation and ensure that conservation requires coordinated action by governments, businesses, and communities."
    }
  },
  // biodiversity — environmental impact
  {
    id: "swtc-34",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of biodiversity, biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. For example, protected habitats and connected green corridors help species survive environmental change. Nevertheless, habitat loss, pollution, and invasive species place increasing pressure on local populations. An effective response should recognise environmental impact and ensure that conservation requires coordinated action by governments, businesses, and communities."
    }
  },
  // biodiversity — community participation
  {
    id: "swtc-35",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of biodiversity, biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. For example, protected habitats and connected green corridors help species survive environmental change. Nevertheless, habitat loss, pollution, and invasive species place increasing pressure on local populations. An effective response should recognise community participation and ensure that conservation requires coordinated action by governments, businesses, and communities."
    }
  },
  // biodiversity — education and skills
  {
    id: "swtc-36",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of biodiversity, biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. For example, protected habitats and connected green corridors help species survive environmental change. Nevertheless, habitat loss, pollution, and invasive species place increasing pressure on local populations. An effective response should recognise education and skills and ensure that conservation requires coordinated action by governments, businesses, and communities."
    }
  },
  // biodiversity — governance and accountability
  {
    id: "swtc-37",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of biodiversity, biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. For example, protected habitats and connected green corridors help species survive environmental change. Nevertheless, habitat loss, pollution, and invasive species place increasing pressure on local populations. An effective response should recognise governance and accountability and ensure that conservation requires coordinated action by governments, businesses, and communities."
    }
  },
  // biodiversity — future resilience
  {
    id: "swtc-38",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of biodiversity, biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. For example, protected habitats and connected green corridors help species survive environmental change. Nevertheless, habitat loss, pollution, and invasive species place increasing pressure on local populations. An effective response should recognise future resilience and ensure that conservation requires coordinated action by governments, businesses, and communities."
    }
  },
  // biodiversity — ethical considerations
  {
    id: "swtc-39",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of biodiversity, biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. For example, protected habitats and connected green corridors help species survive environmental change. Nevertheless, habitat loss, pollution, and invasive species place increasing pressure on local populations. An effective response should recognise ethical considerations and ensure that conservation requires coordinated action by governments, businesses, and communities."
    }
  },
  // biodiversity — measurement and evidence
  {
    id: "swtc-40",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of biodiversity, biodiversity supports stable ecosystems through pollination, soil health, and balanced food webs. For example, protected habitats and connected green corridors help species survive environmental change. Nevertheless, habitat loss, pollution, and invasive species place increasing pressure on local populations. An effective response should recognise measurement and evidence and ensure that conservation requires coordinated action by governments, businesses, and communities."
    }
  },
  // renewable energy — access and equality
  {
    id: "swtc-41",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of renewable energy, renewable energy is becoming an important part of modern electricity systems. For example, solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. Nevertheless, storage costs, grid capacity, and inconsistent generation remain practical challenges. An effective response should recognise access and equality and ensure that a successful transition depends on infrastructure, research, and fair policy."
    }
  },
  // renewable energy — economic effects
  {
    id: "swtc-42",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of renewable energy, renewable energy is becoming an important part of modern electricity systems. For example, solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. Nevertheless, storage costs, grid capacity, and inconsistent generation remain practical challenges. An effective response should recognise economic effects and ensure that a successful transition depends on infrastructure, research, and fair policy."
    }
  },
  // renewable energy — technology and innovation
  {
    id: "swtc-43",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of renewable energy, renewable energy is becoming an important part of modern electricity systems. For example, solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. Nevertheless, storage costs, grid capacity, and inconsistent generation remain practical challenges. An effective response should recognise technology and innovation and ensure that a successful transition depends on infrastructure, research, and fair policy."
    }
  },
  // renewable energy — environmental impact
  {
    id: "swtc-44",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of renewable energy, renewable energy is becoming an important part of modern electricity systems. For example, solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. Nevertheless, storage costs, grid capacity, and inconsistent generation remain practical challenges. An effective response should recognise environmental impact and ensure that a successful transition depends on infrastructure, research, and fair policy."
    }
  },
  // renewable energy — community participation
  {
    id: "swtc-45",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of renewable energy, renewable energy is becoming an important part of modern electricity systems. For example, solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. Nevertheless, storage costs, grid capacity, and inconsistent generation remain practical challenges. An effective response should recognise community participation and ensure that a successful transition depends on infrastructure, research, and fair policy."
    }
  },
  // renewable energy — education and skills
  {
    id: "swtc-46",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of renewable energy, renewable energy is becoming an important part of modern electricity systems. For example, solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. Nevertheless, storage costs, grid capacity, and inconsistent generation remain practical challenges. An effective response should recognise education and skills and ensure that a successful transition depends on infrastructure, research, and fair policy."
    }
  },
  // renewable energy — governance and accountability
  {
    id: "swtc-47",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of renewable energy, renewable energy is becoming an important part of modern electricity systems. For example, solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. Nevertheless, storage costs, grid capacity, and inconsistent generation remain practical challenges. An effective response should recognise governance and accountability and ensure that a successful transition depends on infrastructure, research, and fair policy."
    }
  },
  // renewable energy — future resilience
  {
    id: "swtc-48",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of renewable energy, renewable energy is becoming an important part of modern electricity systems. For example, solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. Nevertheless, storage costs, grid capacity, and inconsistent generation remain practical challenges. An effective response should recognise future resilience and ensure that a successful transition depends on infrastructure, research, and fair policy."
    }
  },
  // renewable energy — ethical considerations
  {
    id: "swtc-49",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of renewable energy, renewable energy is becoming an important part of modern electricity systems. For example, solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. Nevertheless, storage costs, grid capacity, and inconsistent generation remain practical challenges. An effective response should recognise ethical considerations and ensure that a successful transition depends on infrastructure, research, and fair policy."
    }
  },
  // renewable energy — measurement and evidence
  {
    id: "swtc-50",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of renewable energy, renewable energy is becoming an important part of modern electricity systems. For example, solar, wind, and other low-carbon sources can reduce emissions and diversify energy supplies. Nevertheless, storage costs, grid capacity, and inconsistent generation remain practical challenges. An effective response should recognise measurement and evidence and ensure that a successful transition depends on infrastructure, research, and fair policy."
    }
  },
  // workplace flexibility — access and equality
  {
    id: "swtc-51",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of workplace flexibility, flexible work arrangements have changed how organisations manage time and collaboration. For example, remote and hybrid options can reduce commuting and give employees greater control over their schedules. Nevertheless, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. An effective response should recognise access and equality and ensure that employers should establish clear expectations while protecting communication and well-being."
    }
  },
  // workplace flexibility — economic effects
  {
    id: "swtc-52",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of workplace flexibility, flexible work arrangements have changed how organisations manage time and collaboration. For example, remote and hybrid options can reduce commuting and give employees greater control over their schedules. Nevertheless, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. An effective response should recognise economic effects and ensure that employers should establish clear expectations while protecting communication and well-being."
    }
  },
  // workplace flexibility — technology and innovation
  {
    id: "swtc-53",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of workplace flexibility, flexible work arrangements have changed how organisations manage time and collaboration. For example, remote and hybrid options can reduce commuting and give employees greater control over their schedules. Nevertheless, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. An effective response should recognise technology and innovation and ensure that employers should establish clear expectations while protecting communication and well-being."
    }
  },
  // workplace flexibility — environmental impact
  {
    id: "swtc-54",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of workplace flexibility, flexible work arrangements have changed how organisations manage time and collaboration. For example, remote and hybrid options can reduce commuting and give employees greater control over their schedules. Nevertheless, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. An effective response should recognise environmental impact and ensure that employers should establish clear expectations while protecting communication and well-being."
    }
  },
  // workplace flexibility — community participation
  {
    id: "swtc-55",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of workplace flexibility, flexible work arrangements have changed how organisations manage time and collaboration. For example, remote and hybrid options can reduce commuting and give employees greater control over their schedules. Nevertheless, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. An effective response should recognise community participation and ensure that employers should establish clear expectations while protecting communication and well-being."
    }
  },
  // workplace flexibility — education and skills
  {
    id: "swtc-56",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of workplace flexibility, flexible work arrangements have changed how organisations manage time and collaboration. For example, remote and hybrid options can reduce commuting and give employees greater control over their schedules. Nevertheless, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. An effective response should recognise education and skills and ensure that employers should establish clear expectations while protecting communication and well-being."
    }
  },
  // workplace flexibility — governance and accountability
  {
    id: "swtc-57",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of workplace flexibility, flexible work arrangements have changed how organisations manage time and collaboration. For example, remote and hybrid options can reduce commuting and give employees greater control over their schedules. Nevertheless, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. An effective response should recognise governance and accountability and ensure that employers should establish clear expectations while protecting communication and well-being."
    }
  },
  // workplace flexibility — future resilience
  {
    id: "swtc-58",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of workplace flexibility, flexible work arrangements have changed how organisations manage time and collaboration. For example, remote and hybrid options can reduce commuting and give employees greater control over their schedules. Nevertheless, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. An effective response should recognise future resilience and ensure that employers should establish clear expectations while protecting communication and well-being."
    }
  },
  // workplace flexibility — ethical considerations
  {
    id: "swtc-59",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of workplace flexibility, flexible work arrangements have changed how organisations manage time and collaboration. For example, remote and hybrid options can reduce commuting and give employees greater control over their schedules. Nevertheless, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. An effective response should recognise ethical considerations and ensure that employers should establish clear expectations while protecting communication and well-being."
    }
  },
  // workplace flexibility — measurement and evidence
  {
    id: "swtc-60",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of workplace flexibility, flexible work arrangements have changed how organisations manage time and collaboration. For example, remote and hybrid options can reduce commuting and give employees greater control over their schedules. Nevertheless, isolation, blurred boundaries, and unequal access to suitable workspaces may affect performance. An effective response should recognise measurement and evidence and ensure that employers should establish clear expectations while protecting communication and well-being."
    }
  },
  // financial literacy — access and equality
  {
    id: "swtc-61",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of financial literacy, financial literacy helps people make informed decisions about saving, borrowing, and spending. For example, basic knowledge of interest, budgeting, and risk can prevent costly mistakes. Nevertheless, complex financial products and limited access to trustworthy advice create barriers. An effective response should recognise access and equality and ensure that schools and community organisations can make practical financial education widely available."
    }
  },
  // financial literacy — economic effects
  {
    id: "swtc-62",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of financial literacy, financial literacy helps people make informed decisions about saving, borrowing, and spending. For example, basic knowledge of interest, budgeting, and risk can prevent costly mistakes. Nevertheless, complex financial products and limited access to trustworthy advice create barriers. An effective response should recognise economic effects and ensure that schools and community organisations can make practical financial education widely available."
    }
  },
  // financial literacy — technology and innovation
  {
    id: "swtc-63",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of financial literacy, financial literacy helps people make informed decisions about saving, borrowing, and spending. For example, basic knowledge of interest, budgeting, and risk can prevent costly mistakes. Nevertheless, complex financial products and limited access to trustworthy advice create barriers. An effective response should recognise technology and innovation and ensure that schools and community organisations can make practical financial education widely available."
    }
  },
  // financial literacy — environmental impact
  {
    id: "swtc-64",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of financial literacy, financial literacy helps people make informed decisions about saving, borrowing, and spending. For example, basic knowledge of interest, budgeting, and risk can prevent costly mistakes. Nevertheless, complex financial products and limited access to trustworthy advice create barriers. An effective response should recognise environmental impact and ensure that schools and community organisations can make practical financial education widely available."
    }
  },
  // financial literacy — community participation
  {
    id: "swtc-65",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of financial literacy, financial literacy helps people make informed decisions about saving, borrowing, and spending. For example, basic knowledge of interest, budgeting, and risk can prevent costly mistakes. Nevertheless, complex financial products and limited access to trustworthy advice create barriers. An effective response should recognise community participation and ensure that schools and community organisations can make practical financial education widely available."
    }
  },
  // financial literacy — education and skills
  {
    id: "swtc-66",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of financial literacy, financial literacy helps people make informed decisions about saving, borrowing, and spending. For example, basic knowledge of interest, budgeting, and risk can prevent costly mistakes. Nevertheless, complex financial products and limited access to trustworthy advice create barriers. An effective response should recognise education and skills and ensure that schools and community organisations can make practical financial education widely available."
    }
  },
  // financial literacy — governance and accountability
  {
    id: "swtc-67",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of financial literacy, financial literacy helps people make informed decisions about saving, borrowing, and spending. For example, basic knowledge of interest, budgeting, and risk can prevent costly mistakes. Nevertheless, complex financial products and limited access to trustworthy advice create barriers. An effective response should recognise governance and accountability and ensure that schools and community organisations can make practical financial education widely available."
    }
  },
  // financial literacy — future resilience
  {
    id: "swtc-68",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of financial literacy, financial literacy helps people make informed decisions about saving, borrowing, and spending. For example, basic knowledge of interest, budgeting, and risk can prevent costly mistakes. Nevertheless, complex financial products and limited access to trustworthy advice create barriers. An effective response should recognise future resilience and ensure that schools and community organisations can make practical financial education widely available."
    }
  },
  // financial literacy — ethical considerations
  {
    id: "swtc-69",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of financial literacy, financial literacy helps people make informed decisions about saving, borrowing, and spending. For example, basic knowledge of interest, budgeting, and risk can prevent costly mistakes. Nevertheless, complex financial products and limited access to trustworthy advice create barriers. An effective response should recognise ethical considerations and ensure that schools and community organisations can make practical financial education widely available."
    }
  },
  // financial literacy — measurement and evidence
  {
    id: "swtc-70",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of financial literacy, financial literacy helps people make informed decisions about saving, borrowing, and spending. For example, basic knowledge of interest, budgeting, and risk can prevent costly mistakes. Nevertheless, complex financial products and limited access to trustworthy advice create barriers. An effective response should recognise measurement and evidence and ensure that schools and community organisations can make practical financial education widely available."
    }
  },
  // food security — access and equality
  {
    id: "swtc-71",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of food security, food security depends on reliable access to sufficient, safe, and nutritious food. For example, improved storage, diverse crops, and efficient distribution can reduce shortages and waste. Nevertheless, climate pressures, conflict, and unequal purchasing power threaten stable access. An effective response should recognise access and equality and ensure that long-term solutions must strengthen local production and resilient supply chains."
    }
  },
  // food security — economic effects
  {
    id: "swtc-72",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of food security, food security depends on reliable access to sufficient, safe, and nutritious food. For example, improved storage, diverse crops, and efficient distribution can reduce shortages and waste. Nevertheless, climate pressures, conflict, and unequal purchasing power threaten stable access. An effective response should recognise economic effects and ensure that long-term solutions must strengthen local production and resilient supply chains."
    }
  },
  // food security — technology and innovation
  {
    id: "swtc-73",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of food security, food security depends on reliable access to sufficient, safe, and nutritious food. For example, improved storage, diverse crops, and efficient distribution can reduce shortages and waste. Nevertheless, climate pressures, conflict, and unequal purchasing power threaten stable access. An effective response should recognise technology and innovation and ensure that long-term solutions must strengthen local production and resilient supply chains."
    }
  },
  // food security — environmental impact
  {
    id: "swtc-74",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of food security, food security depends on reliable access to sufficient, safe, and nutritious food. For example, improved storage, diverse crops, and efficient distribution can reduce shortages and waste. Nevertheless, climate pressures, conflict, and unequal purchasing power threaten stable access. An effective response should recognise environmental impact and ensure that long-term solutions must strengthen local production and resilient supply chains."
    }
  },
  // food security — community participation
  {
    id: "swtc-75",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of food security, food security depends on reliable access to sufficient, safe, and nutritious food. For example, improved storage, diverse crops, and efficient distribution can reduce shortages and waste. Nevertheless, climate pressures, conflict, and unequal purchasing power threaten stable access. An effective response should recognise community participation and ensure that long-term solutions must strengthen local production and resilient supply chains."
    }
  },
  // food security — education and skills
  {
    id: "swtc-76",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of food security, food security depends on reliable access to sufficient, safe, and nutritious food. For example, improved storage, diverse crops, and efficient distribution can reduce shortages and waste. Nevertheless, climate pressures, conflict, and unequal purchasing power threaten stable access. An effective response should recognise education and skills and ensure that long-term solutions must strengthen local production and resilient supply chains."
    }
  },
  // food security — governance and accountability
  {
    id: "swtc-77",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of food security, food security depends on reliable access to sufficient, safe, and nutritious food. For example, improved storage, diverse crops, and efficient distribution can reduce shortages and waste. Nevertheless, climate pressures, conflict, and unequal purchasing power threaten stable access. An effective response should recognise governance and accountability and ensure that long-term solutions must strengthen local production and resilient supply chains."
    }
  },
  // food security — future resilience
  {
    id: "swtc-78",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of food security, food security depends on reliable access to sufficient, safe, and nutritious food. For example, improved storage, diverse crops, and efficient distribution can reduce shortages and waste. Nevertheless, climate pressures, conflict, and unequal purchasing power threaten stable access. An effective response should recognise future resilience and ensure that long-term solutions must strengthen local production and resilient supply chains."
    }
  },
  // food security — ethical considerations
  {
    id: "swtc-79",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of food security, food security depends on reliable access to sufficient, safe, and nutritious food. For example, improved storage, diverse crops, and efficient distribution can reduce shortages and waste. Nevertheless, climate pressures, conflict, and unequal purchasing power threaten stable access. An effective response should recognise ethical considerations and ensure that long-term solutions must strengthen local production and resilient supply chains."
    }
  },
  // food security — measurement and evidence
  {
    id: "swtc-80",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of food security, food security depends on reliable access to sufficient, safe, and nutritious food. For example, improved storage, diverse crops, and efficient distribution can reduce shortages and waste. Nevertheless, climate pressures, conflict, and unequal purchasing power threaten stable access. An effective response should recognise measurement and evidence and ensure that long-term solutions must strengthen local production and resilient supply chains."
    }
  },
  // urban green space — access and equality
  {
    id: "swtc-81",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban green space, parks and urban trees provide environmental and social benefits in crowded cities. For example, vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. Nevertheless, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. An effective response should recognise access and equality and ensure that city planning should treat accessible nature as essential public infrastructure."
    }
  },
  // urban green space — economic effects
  {
    id: "swtc-82",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban green space, parks and urban trees provide environmental and social benefits in crowded cities. For example, vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. Nevertheless, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. An effective response should recognise economic effects and ensure that city planning should treat accessible nature as essential public infrastructure."
    }
  },
  // urban green space — technology and innovation
  {
    id: "swtc-83",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban green space, parks and urban trees provide environmental and social benefits in crowded cities. For example, vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. Nevertheless, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. An effective response should recognise technology and innovation and ensure that city planning should treat accessible nature as essential public infrastructure."
    }
  },
  // urban green space — environmental impact
  {
    id: "swtc-84",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban green space, parks and urban trees provide environmental and social benefits in crowded cities. For example, vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. Nevertheless, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. An effective response should recognise environmental impact and ensure that city planning should treat accessible nature as essential public infrastructure."
    }
  },
  // urban green space — community participation
  {
    id: "swtc-85",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban green space, parks and urban trees provide environmental and social benefits in crowded cities. For example, vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. Nevertheless, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. An effective response should recognise community participation and ensure that city planning should treat accessible nature as essential public infrastructure."
    }
  },
  // urban green space — education and skills
  {
    id: "swtc-86",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban green space, parks and urban trees provide environmental and social benefits in crowded cities. For example, vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. Nevertheless, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. An effective response should recognise education and skills and ensure that city planning should treat accessible nature as essential public infrastructure."
    }
  },
  // urban green space — governance and accountability
  {
    id: "swtc-87",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban green space, parks and urban trees provide environmental and social benefits in crowded cities. For example, vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. Nevertheless, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. An effective response should recognise governance and accountability and ensure that city planning should treat accessible nature as essential public infrastructure."
    }
  },
  // urban green space — future resilience
  {
    id: "swtc-88",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban green space, parks and urban trees provide environmental and social benefits in crowded cities. For example, vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. Nevertheless, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. An effective response should recognise future resilience and ensure that city planning should treat accessible nature as essential public infrastructure."
    }
  },
  // urban green space — ethical considerations
  {
    id: "swtc-89",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban green space, parks and urban trees provide environmental and social benefits in crowded cities. For example, vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. Nevertheless, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. An effective response should recognise ethical considerations and ensure that city planning should treat accessible nature as essential public infrastructure."
    }
  },
  // urban green space — measurement and evidence
  {
    id: "swtc-90",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of urban green space, parks and urban trees provide environmental and social benefits in crowded cities. For example, vegetation can cool neighbourhoods, absorb rainwater, and create places for recreation. Nevertheless, land costs and unequal investment often leave disadvantaged districts with fewer green spaces. An effective response should recognise measurement and evidence and ensure that city planning should treat accessible nature as essential public infrastructure."
    }
  },
  // artificial intelligence — access and equality
  {
    id: "swtc-91",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of artificial intelligence, artificial intelligence is increasingly used to support decisions and automate routine tasks. For example, well-designed systems can process information quickly and help professionals identify patterns. Nevertheless, biased data, unclear accountability, and limited transparency can undermine public trust. An effective response should recognise access and equality and ensure that responsible adoption requires oversight, testing, and opportunities for human review."
    }
  },
  // artificial intelligence — economic effects
  {
    id: "swtc-92",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of artificial intelligence, artificial intelligence is increasingly used to support decisions and automate routine tasks. For example, well-designed systems can process information quickly and help professionals identify patterns. Nevertheless, biased data, unclear accountability, and limited transparency can undermine public trust. An effective response should recognise economic effects and ensure that responsible adoption requires oversight, testing, and opportunities for human review."
    }
  },
  // artificial intelligence — technology and innovation
  {
    id: "swtc-93",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of artificial intelligence, artificial intelligence is increasingly used to support decisions and automate routine tasks. For example, well-designed systems can process information quickly and help professionals identify patterns. Nevertheless, biased data, unclear accountability, and limited transparency can undermine public trust. An effective response should recognise technology and innovation and ensure that responsible adoption requires oversight, testing, and opportunities for human review."
    }
  },
  // artificial intelligence — environmental impact
  {
    id: "swtc-94",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of artificial intelligence, artificial intelligence is increasingly used to support decisions and automate routine tasks. For example, well-designed systems can process information quickly and help professionals identify patterns. Nevertheless, biased data, unclear accountability, and limited transparency can undermine public trust. An effective response should recognise environmental impact and ensure that responsible adoption requires oversight, testing, and opportunities for human review."
    }
  },
  // artificial intelligence — community participation
  {
    id: "swtc-95",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of artificial intelligence, artificial intelligence is increasingly used to support decisions and automate routine tasks. For example, well-designed systems can process information quickly and help professionals identify patterns. Nevertheless, biased data, unclear accountability, and limited transparency can undermine public trust. An effective response should recognise community participation and ensure that responsible adoption requires oversight, testing, and opportunities for human review."
    }
  },
  // artificial intelligence — education and skills
  {
    id: "swtc-96",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of artificial intelligence, artificial intelligence is increasingly used to support decisions and automate routine tasks. For example, well-designed systems can process information quickly and help professionals identify patterns. Nevertheless, biased data, unclear accountability, and limited transparency can undermine public trust. An effective response should recognise education and skills and ensure that responsible adoption requires oversight, testing, and opportunities for human review."
    }
  },
  // artificial intelligence — governance and accountability
  {
    id: "swtc-97",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of artificial intelligence, artificial intelligence is increasingly used to support decisions and automate routine tasks. For example, well-designed systems can process information quickly and help professionals identify patterns. Nevertheless, biased data, unclear accountability, and limited transparency can undermine public trust. An effective response should recognise governance and accountability and ensure that responsible adoption requires oversight, testing, and opportunities for human review."
    }
  },
  // artificial intelligence — future resilience
  {
    id: "swtc-98",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of artificial intelligence, artificial intelligence is increasingly used to support decisions and automate routine tasks. For example, well-designed systems can process information quickly and help professionals identify patterns. Nevertheless, biased data, unclear accountability, and limited transparency can undermine public trust. An effective response should recognise future resilience and ensure that responsible adoption requires oversight, testing, and opportunities for human review."
    }
  },
  // artificial intelligence — ethical considerations
  {
    id: "swtc-99",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of artificial intelligence, artificial intelligence is increasingly used to support decisions and automate routine tasks. For example, well-designed systems can process information quickly and help professionals identify patterns. Nevertheless, biased data, unclear accountability, and limited transparency can undermine public trust. An effective response should recognise ethical considerations and ensure that responsible adoption requires oversight, testing, and opportunities for human review."
    }
  },
  // artificial intelligence — measurement and evidence
  {
    id: "swtc-100",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "easy",
    content: {
      sourceText: "In discussions of artificial intelligence, artificial intelligence is increasingly used to support decisions and automate routine tasks. For example, well-designed systems can process information quickly and help professionals identify patterns. Nevertheless, biased data, unclear accountability, and limited transparency can undermine public trust. An effective response should recognise measurement and evidence and ensure that responsible adoption requires oversight, testing, and opportunities for human review."
    }
  },
  // water conservation — access and equality
  {
    id: "swtc-101",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of water conservation, freshwater resources face pressure from growing demand and changing weather patterns. For example, efficient irrigation, leak detection, and household conservation can reduce unnecessary use. Nevertheless, ageing infrastructure and competing demands make fair distribution difficult. An effective response should recognise access and equality and ensure that water management should combine investment with public participation and long-term planning."
    }
  },
  // water conservation — economic effects
  {
    id: "swtc-102",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of water conservation, freshwater resources face pressure from growing demand and changing weather patterns. For example, efficient irrigation, leak detection, and household conservation can reduce unnecessary use. Nevertheless, ageing infrastructure and competing demands make fair distribution difficult. An effective response should recognise economic effects and ensure that water management should combine investment with public participation and long-term planning."
    }
  },
  // water conservation — technology and innovation
  {
    id: "swtc-103",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of water conservation, freshwater resources face pressure from growing demand and changing weather patterns. For example, efficient irrigation, leak detection, and household conservation can reduce unnecessary use. Nevertheless, ageing infrastructure and competing demands make fair distribution difficult. An effective response should recognise technology and innovation and ensure that water management should combine investment with public participation and long-term planning."
    }
  },
  // water conservation — environmental impact
  {
    id: "swtc-104",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of water conservation, freshwater resources face pressure from growing demand and changing weather patterns. For example, efficient irrigation, leak detection, and household conservation can reduce unnecessary use. Nevertheless, ageing infrastructure and competing demands make fair distribution difficult. An effective response should recognise environmental impact and ensure that water management should combine investment with public participation and long-term planning."
    }
  },
  // water conservation — community participation
  {
    id: "swtc-105",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of water conservation, freshwater resources face pressure from growing demand and changing weather patterns. For example, efficient irrigation, leak detection, and household conservation can reduce unnecessary use. Nevertheless, ageing infrastructure and competing demands make fair distribution difficult. An effective response should recognise community participation and ensure that water management should combine investment with public participation and long-term planning."
    }
  },
  // water conservation — education and skills
  {
    id: "swtc-106",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of water conservation, freshwater resources face pressure from growing demand and changing weather patterns. For example, efficient irrigation, leak detection, and household conservation can reduce unnecessary use. Nevertheless, ageing infrastructure and competing demands make fair distribution difficult. An effective response should recognise education and skills and ensure that water management should combine investment with public participation and long-term planning."
    }
  },
  // water conservation — governance and accountability
  {
    id: "swtc-107",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of water conservation, freshwater resources face pressure from growing demand and changing weather patterns. For example, efficient irrigation, leak detection, and household conservation can reduce unnecessary use. Nevertheless, ageing infrastructure and competing demands make fair distribution difficult. An effective response should recognise governance and accountability and ensure that water management should combine investment with public participation and long-term planning."
    }
  },
  // water conservation — future resilience
  {
    id: "swtc-108",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of water conservation, freshwater resources face pressure from growing demand and changing weather patterns. For example, efficient irrigation, leak detection, and household conservation can reduce unnecessary use. Nevertheless, ageing infrastructure and competing demands make fair distribution difficult. An effective response should recognise future resilience and ensure that water management should combine investment with public participation and long-term planning."
    }
  },
  // water conservation — ethical considerations
  {
    id: "swtc-109",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of water conservation, freshwater resources face pressure from growing demand and changing weather patterns. For example, efficient irrigation, leak detection, and household conservation can reduce unnecessary use. Nevertheless, ageing infrastructure and competing demands make fair distribution difficult. An effective response should recognise ethical considerations and ensure that water management should combine investment with public participation and long-term planning."
    }
  },
  // water conservation — measurement and evidence
  {
    id: "swtc-110",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of water conservation, freshwater resources face pressure from growing demand and changing weather patterns. For example, efficient irrigation, leak detection, and household conservation can reduce unnecessary use. Nevertheless, ageing infrastructure and competing demands make fair distribution difficult. An effective response should recognise measurement and evidence and ensure that water management should combine investment with public participation and long-term planning."
    }
  },
  // cultural heritage — access and equality
  {
    id: "swtc-111",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of cultural heritage, cultural heritage connects communities with shared histories, skills, and traditions. For example, museums, historic sites, and oral archives can preserve knowledge for future generations. Nevertheless, commercial development, conflict, and declining traditional practices threaten this inheritance. An effective response should recognise access and equality and ensure that preservation works best when local communities help decide what and how to protect."
    }
  },
  // cultural heritage — economic effects
  {
    id: "swtc-112",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of cultural heritage, cultural heritage connects communities with shared histories, skills, and traditions. For example, museums, historic sites, and oral archives can preserve knowledge for future generations. Nevertheless, commercial development, conflict, and declining traditional practices threaten this inheritance. An effective response should recognise economic effects and ensure that preservation works best when local communities help decide what and how to protect."
    }
  },
  // cultural heritage — technology and innovation
  {
    id: "swtc-113",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of cultural heritage, cultural heritage connects communities with shared histories, skills, and traditions. For example, museums, historic sites, and oral archives can preserve knowledge for future generations. Nevertheless, commercial development, conflict, and declining traditional practices threaten this inheritance. An effective response should recognise technology and innovation and ensure that preservation works best when local communities help decide what and how to protect."
    }
  },
  // cultural heritage — environmental impact
  {
    id: "swtc-114",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of cultural heritage, cultural heritage connects communities with shared histories, skills, and traditions. For example, museums, historic sites, and oral archives can preserve knowledge for future generations. Nevertheless, commercial development, conflict, and declining traditional practices threaten this inheritance. An effective response should recognise environmental impact and ensure that preservation works best when local communities help decide what and how to protect."
    }
  },
  // cultural heritage — community participation
  {
    id: "swtc-115",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of cultural heritage, cultural heritage connects communities with shared histories, skills, and traditions. For example, museums, historic sites, and oral archives can preserve knowledge for future generations. Nevertheless, commercial development, conflict, and declining traditional practices threaten this inheritance. An effective response should recognise community participation and ensure that preservation works best when local communities help decide what and how to protect."
    }
  },
  // cultural heritage — education and skills
  {
    id: "swtc-116",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of cultural heritage, cultural heritage connects communities with shared histories, skills, and traditions. For example, museums, historic sites, and oral archives can preserve knowledge for future generations. Nevertheless, commercial development, conflict, and declining traditional practices threaten this inheritance. An effective response should recognise education and skills and ensure that preservation works best when local communities help decide what and how to protect."
    }
  },
  // cultural heritage — governance and accountability
  {
    id: "swtc-117",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of cultural heritage, cultural heritage connects communities with shared histories, skills, and traditions. For example, museums, historic sites, and oral archives can preserve knowledge for future generations. Nevertheless, commercial development, conflict, and declining traditional practices threaten this inheritance. An effective response should recognise governance and accountability and ensure that preservation works best when local communities help decide what and how to protect."
    }
  },
  // cultural heritage — future resilience
  {
    id: "swtc-118",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of cultural heritage, cultural heritage connects communities with shared histories, skills, and traditions. For example, museums, historic sites, and oral archives can preserve knowledge for future generations. Nevertheless, commercial development, conflict, and declining traditional practices threaten this inheritance. An effective response should recognise future resilience and ensure that preservation works best when local communities help decide what and how to protect."
    }
  },
  // cultural heritage — ethical considerations
  {
    id: "swtc-119",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of cultural heritage, cultural heritage connects communities with shared histories, skills, and traditions. For example, museums, historic sites, and oral archives can preserve knowledge for future generations. Nevertheless, commercial development, conflict, and declining traditional practices threaten this inheritance. An effective response should recognise ethical considerations and ensure that preservation works best when local communities help decide what and how to protect."
    }
  },
  // cultural heritage — measurement and evidence
  {
    id: "swtc-120",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of cultural heritage, cultural heritage connects communities with shared histories, skills, and traditions. For example, museums, historic sites, and oral archives can preserve knowledge for future generations. Nevertheless, commercial development, conflict, and declining traditional practices threaten this inheritance. An effective response should recognise measurement and evidence and ensure that preservation works best when local communities help decide what and how to protect."
    }
  },
  // scientific research — access and equality
  {
    id: "swtc-121",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of scientific research, scientific research expands knowledge and provides evidence for solving practical problems. For example, collaboration across institutions can accelerate discoveries and improve the use of public resources. Nevertheless, short funding cycles, limited data access, and pressure to publish may weaken research quality. An effective response should recognise access and equality and ensure that transparent methods and sustained support are essential for reliable progress."
    }
  },
  // scientific research — economic effects
  {
    id: "swtc-122",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of scientific research, scientific research expands knowledge and provides evidence for solving practical problems. For example, collaboration across institutions can accelerate discoveries and improve the use of public resources. Nevertheless, short funding cycles, limited data access, and pressure to publish may weaken research quality. An effective response should recognise economic effects and ensure that transparent methods and sustained support are essential for reliable progress."
    }
  },
  // scientific research — technology and innovation
  {
    id: "swtc-123",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of scientific research, scientific research expands knowledge and provides evidence for solving practical problems. For example, collaboration across institutions can accelerate discoveries and improve the use of public resources. Nevertheless, short funding cycles, limited data access, and pressure to publish may weaken research quality. An effective response should recognise technology and innovation and ensure that transparent methods and sustained support are essential for reliable progress."
    }
  },
  // scientific research — environmental impact
  {
    id: "swtc-124",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of scientific research, scientific research expands knowledge and provides evidence for solving practical problems. For example, collaboration across institutions can accelerate discoveries and improve the use of public resources. Nevertheless, short funding cycles, limited data access, and pressure to publish may weaken research quality. An effective response should recognise environmental impact and ensure that transparent methods and sustained support are essential for reliable progress."
    }
  },
  // scientific research — community participation
  {
    id: "swtc-125",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of scientific research, scientific research expands knowledge and provides evidence for solving practical problems. For example, collaboration across institutions can accelerate discoveries and improve the use of public resources. Nevertheless, short funding cycles, limited data access, and pressure to publish may weaken research quality. An effective response should recognise community participation and ensure that transparent methods and sustained support are essential for reliable progress."
    }
  },
  // scientific research — education and skills
  {
    id: "swtc-126",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of scientific research, scientific research expands knowledge and provides evidence for solving practical problems. For example, collaboration across institutions can accelerate discoveries and improve the use of public resources. Nevertheless, short funding cycles, limited data access, and pressure to publish may weaken research quality. An effective response should recognise education and skills and ensure that transparent methods and sustained support are essential for reliable progress."
    }
  },
  // scientific research — governance and accountability
  {
    id: "swtc-127",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of scientific research, scientific research expands knowledge and provides evidence for solving practical problems. For example, collaboration across institutions can accelerate discoveries and improve the use of public resources. Nevertheless, short funding cycles, limited data access, and pressure to publish may weaken research quality. An effective response should recognise governance and accountability and ensure that transparent methods and sustained support are essential for reliable progress."
    }
  },
  // scientific research — future resilience
  {
    id: "swtc-128",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of scientific research, scientific research expands knowledge and provides evidence for solving practical problems. For example, collaboration across institutions can accelerate discoveries and improve the use of public resources. Nevertheless, short funding cycles, limited data access, and pressure to publish may weaken research quality. An effective response should recognise future resilience and ensure that transparent methods and sustained support are essential for reliable progress."
    }
  },
  // scientific research — ethical considerations
  {
    id: "swtc-129",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of scientific research, scientific research expands knowledge and provides evidence for solving practical problems. For example, collaboration across institutions can accelerate discoveries and improve the use of public resources. Nevertheless, short funding cycles, limited data access, and pressure to publish may weaken research quality. An effective response should recognise ethical considerations and ensure that transparent methods and sustained support are essential for reliable progress."
    }
  },
  // scientific research — measurement and evidence
  {
    id: "swtc-130",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of scientific research, scientific research expands knowledge and provides evidence for solving practical problems. For example, collaboration across institutions can accelerate discoveries and improve the use of public resources. Nevertheless, short funding cycles, limited data access, and pressure to publish may weaken research quality. An effective response should recognise measurement and evidence and ensure that transparent methods and sustained support are essential for reliable progress."
    }
  },
  // ocean pollution — access and equality
  {
    id: "swtc-131",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of ocean pollution, marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. For example, reducing plastic waste and improving wastewater treatment can limit damage. Nevertheless, pollution travels across borders, making monitoring and enforcement difficult. An effective response should recognise access and equality and ensure that international cooperation and changes in production are both necessary."
    }
  },
  // ocean pollution — economic effects
  {
    id: "swtc-132",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of ocean pollution, marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. For example, reducing plastic waste and improving wastewater treatment can limit damage. Nevertheless, pollution travels across borders, making monitoring and enforcement difficult. An effective response should recognise economic effects and ensure that international cooperation and changes in production are both necessary."
    }
  },
  // ocean pollution — technology and innovation
  {
    id: "swtc-133",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of ocean pollution, marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. For example, reducing plastic waste and improving wastewater treatment can limit damage. Nevertheless, pollution travels across borders, making monitoring and enforcement difficult. An effective response should recognise technology and innovation and ensure that international cooperation and changes in production are both necessary."
    }
  },
  // ocean pollution — environmental impact
  {
    id: "swtc-134",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of ocean pollution, marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. For example, reducing plastic waste and improving wastewater treatment can limit damage. Nevertheless, pollution travels across borders, making monitoring and enforcement difficult. An effective response should recognise environmental impact and ensure that international cooperation and changes in production are both necessary."
    }
  },
  // ocean pollution — community participation
  {
    id: "swtc-135",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of ocean pollution, marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. For example, reducing plastic waste and improving wastewater treatment can limit damage. Nevertheless, pollution travels across borders, making monitoring and enforcement difficult. An effective response should recognise community participation and ensure that international cooperation and changes in production are both necessary."
    }
  },
  // ocean pollution — education and skills
  {
    id: "swtc-136",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of ocean pollution, marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. For example, reducing plastic waste and improving wastewater treatment can limit damage. Nevertheless, pollution travels across borders, making monitoring and enforcement difficult. An effective response should recognise education and skills and ensure that international cooperation and changes in production are both necessary."
    }
  },
  // ocean pollution — governance and accountability
  {
    id: "swtc-137",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of ocean pollution, marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. For example, reducing plastic waste and improving wastewater treatment can limit damage. Nevertheless, pollution travels across borders, making monitoring and enforcement difficult. An effective response should recognise governance and accountability and ensure that international cooperation and changes in production are both necessary."
    }
  },
  // ocean pollution — future resilience
  {
    id: "swtc-138",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of ocean pollution, marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. For example, reducing plastic waste and improving wastewater treatment can limit damage. Nevertheless, pollution travels across borders, making monitoring and enforcement difficult. An effective response should recognise future resilience and ensure that international cooperation and changes in production are both necessary."
    }
  },
  // ocean pollution — ethical considerations
  {
    id: "swtc-139",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of ocean pollution, marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. For example, reducing plastic waste and improving wastewater treatment can limit damage. Nevertheless, pollution travels across borders, making monitoring and enforcement difficult. An effective response should recognise ethical considerations and ensure that international cooperation and changes in production are both necessary."
    }
  },
  // ocean pollution — measurement and evidence
  {
    id: "swtc-140",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of ocean pollution, marine pollution affects wildlife, coastal economies, and the health of ocean ecosystems. For example, reducing plastic waste and improving wastewater treatment can limit damage. Nevertheless, pollution travels across borders, making monitoring and enforcement difficult. An effective response should recognise measurement and evidence and ensure that international cooperation and changes in production are both necessary."
    }
  },
  // aging populations — access and equality
  {
    id: "swtc-141",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of aging populations, population ageing is reshaping healthcare, housing, and labour markets. For example, accessible services and opportunities for older adults to remain active can benefit society. Nevertheless, pension pressures, care shortages, and age discrimination require careful responses. An effective response should recognise access and equality and ensure that public policy should support dignity, independence, and intergenerational cooperation."
    }
  },
  // aging populations — economic effects
  {
    id: "swtc-142",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of aging populations, population ageing is reshaping healthcare, housing, and labour markets. For example, accessible services and opportunities for older adults to remain active can benefit society. Nevertheless, pension pressures, care shortages, and age discrimination require careful responses. An effective response should recognise economic effects and ensure that public policy should support dignity, independence, and intergenerational cooperation."
    }
  },
  // aging populations — technology and innovation
  {
    id: "swtc-143",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of aging populations, population ageing is reshaping healthcare, housing, and labour markets. For example, accessible services and opportunities for older adults to remain active can benefit society. Nevertheless, pension pressures, care shortages, and age discrimination require careful responses. An effective response should recognise technology and innovation and ensure that public policy should support dignity, independence, and intergenerational cooperation."
    }
  },
  // aging populations — environmental impact
  {
    id: "swtc-144",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of aging populations, population ageing is reshaping healthcare, housing, and labour markets. For example, accessible services and opportunities for older adults to remain active can benefit society. Nevertheless, pension pressures, care shortages, and age discrimination require careful responses. An effective response should recognise environmental impact and ensure that public policy should support dignity, independence, and intergenerational cooperation."
    }
  },
  // aging populations — community participation
  {
    id: "swtc-145",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of aging populations, population ageing is reshaping healthcare, housing, and labour markets. For example, accessible services and opportunities for older adults to remain active can benefit society. Nevertheless, pension pressures, care shortages, and age discrimination require careful responses. An effective response should recognise community participation and ensure that public policy should support dignity, independence, and intergenerational cooperation."
    }
  },
  // aging populations — education and skills
  {
    id: "swtc-146",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of aging populations, population ageing is reshaping healthcare, housing, and labour markets. For example, accessible services and opportunities for older adults to remain active can benefit society. Nevertheless, pension pressures, care shortages, and age discrimination require careful responses. An effective response should recognise education and skills and ensure that public policy should support dignity, independence, and intergenerational cooperation."
    }
  },
  // aging populations — governance and accountability
  {
    id: "swtc-147",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of aging populations, population ageing is reshaping healthcare, housing, and labour markets. For example, accessible services and opportunities for older adults to remain active can benefit society. Nevertheless, pension pressures, care shortages, and age discrimination require careful responses. An effective response should recognise governance and accountability and ensure that public policy should support dignity, independence, and intergenerational cooperation."
    }
  },
  // aging populations — future resilience
  {
    id: "swtc-148",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of aging populations, population ageing is reshaping healthcare, housing, and labour markets. For example, accessible services and opportunities for older adults to remain active can benefit society. Nevertheless, pension pressures, care shortages, and age discrimination require careful responses. An effective response should recognise future resilience and ensure that public policy should support dignity, independence, and intergenerational cooperation."
    }
  },
  // aging populations — ethical considerations
  {
    id: "swtc-149",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of aging populations, population ageing is reshaping healthcare, housing, and labour markets. For example, accessible services and opportunities for older adults to remain active can benefit society. Nevertheless, pension pressures, care shortages, and age discrimination require careful responses. An effective response should recognise ethical considerations and ensure that public policy should support dignity, independence, and intergenerational cooperation."
    }
  },
  // aging populations — measurement and evidence
  {
    id: "swtc-150",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of aging populations, population ageing is reshaping healthcare, housing, and labour markets. For example, accessible services and opportunities for older adults to remain active can benefit society. Nevertheless, pension pressures, care shortages, and age discrimination require careful responses. An effective response should recognise measurement and evidence and ensure that public policy should support dignity, independence, and intergenerational cooperation."
    }
  },
  // public libraries — access and equality
  {
    id: "swtc-151",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of public libraries, public libraries provide learning resources and shared spaces beyond traditional book lending. For example, digital access, workshops, and quiet study areas can support residents of different ages. Nevertheless, budget constraints and changing user needs challenge library services. An effective response should recognise access and equality and ensure that libraries can remain relevant by combining trusted resources with responsive community programmes."
    }
  },
  // public libraries — economic effects
  {
    id: "swtc-152",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of public libraries, public libraries provide learning resources and shared spaces beyond traditional book lending. For example, digital access, workshops, and quiet study areas can support residents of different ages. Nevertheless, budget constraints and changing user needs challenge library services. An effective response should recognise economic effects and ensure that libraries can remain relevant by combining trusted resources with responsive community programmes."
    }
  },
  // public libraries — technology and innovation
  {
    id: "swtc-153",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of public libraries, public libraries provide learning resources and shared spaces beyond traditional book lending. For example, digital access, workshops, and quiet study areas can support residents of different ages. Nevertheless, budget constraints and changing user needs challenge library services. An effective response should recognise technology and innovation and ensure that libraries can remain relevant by combining trusted resources with responsive community programmes."
    }
  },
  // public libraries — environmental impact
  {
    id: "swtc-154",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of public libraries, public libraries provide learning resources and shared spaces beyond traditional book lending. For example, digital access, workshops, and quiet study areas can support residents of different ages. Nevertheless, budget constraints and changing user needs challenge library services. An effective response should recognise environmental impact and ensure that libraries can remain relevant by combining trusted resources with responsive community programmes."
    }
  },
  // public libraries — community participation
  {
    id: "swtc-155",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of public libraries, public libraries provide learning resources and shared spaces beyond traditional book lending. For example, digital access, workshops, and quiet study areas can support residents of different ages. Nevertheless, budget constraints and changing user needs challenge library services. An effective response should recognise community participation and ensure that libraries can remain relevant by combining trusted resources with responsive community programmes."
    }
  },
  // public libraries — education and skills
  {
    id: "swtc-156",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of public libraries, public libraries provide learning resources and shared spaces beyond traditional book lending. For example, digital access, workshops, and quiet study areas can support residents of different ages. Nevertheless, budget constraints and changing user needs challenge library services. An effective response should recognise education and skills and ensure that libraries can remain relevant by combining trusted resources with responsive community programmes."
    }
  },
  // public libraries — governance and accountability
  {
    id: "swtc-157",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of public libraries, public libraries provide learning resources and shared spaces beyond traditional book lending. For example, digital access, workshops, and quiet study areas can support residents of different ages. Nevertheless, budget constraints and changing user needs challenge library services. An effective response should recognise governance and accountability and ensure that libraries can remain relevant by combining trusted resources with responsive community programmes."
    }
  },
  // public libraries — future resilience
  {
    id: "swtc-158",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of public libraries, public libraries provide learning resources and shared spaces beyond traditional book lending. For example, digital access, workshops, and quiet study areas can support residents of different ages. Nevertheless, budget constraints and changing user needs challenge library services. An effective response should recognise future resilience and ensure that libraries can remain relevant by combining trusted resources with responsive community programmes."
    }
  },
  // public libraries — ethical considerations
  {
    id: "swtc-159",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of public libraries, public libraries provide learning resources and shared spaces beyond traditional book lending. For example, digital access, workshops, and quiet study areas can support residents of different ages. Nevertheless, budget constraints and changing user needs challenge library services. An effective response should recognise ethical considerations and ensure that libraries can remain relevant by combining trusted resources with responsive community programmes."
    }
  },
  // public libraries — measurement and evidence
  {
    id: "swtc-160",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of public libraries, public libraries provide learning resources and shared spaces beyond traditional book lending. For example, digital access, workshops, and quiet study areas can support residents of different ages. Nevertheless, budget constraints and changing user needs challenge library services. An effective response should recognise measurement and evidence and ensure that libraries can remain relevant by combining trusted resources with responsive community programmes."
    }
  },
  // small businesses — access and equality
  {
    id: "swtc-161",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of small businesses, small businesses contribute to employment, innovation, and the character of local communities. For example, digital tools and local networks can help smaller firms reach customers and improve efficiency. Nevertheless, limited finance, complex regulations, and competition from large firms can restrict growth. An effective response should recognise access and equality and ensure that support programmes should improve access to skills, markets, and responsible finance."
    }
  },
  // small businesses — economic effects
  {
    id: "swtc-162",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of small businesses, small businesses contribute to employment, innovation, and the character of local communities. For example, digital tools and local networks can help smaller firms reach customers and improve efficiency. Nevertheless, limited finance, complex regulations, and competition from large firms can restrict growth. An effective response should recognise economic effects and ensure that support programmes should improve access to skills, markets, and responsible finance."
    }
  },
  // small businesses — technology and innovation
  {
    id: "swtc-163",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of small businesses, small businesses contribute to employment, innovation, and the character of local communities. For example, digital tools and local networks can help smaller firms reach customers and improve efficiency. Nevertheless, limited finance, complex regulations, and competition from large firms can restrict growth. An effective response should recognise technology and innovation and ensure that support programmes should improve access to skills, markets, and responsible finance."
    }
  },
  // small businesses — environmental impact
  {
    id: "swtc-164",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of small businesses, small businesses contribute to employment, innovation, and the character of local communities. For example, digital tools and local networks can help smaller firms reach customers and improve efficiency. Nevertheless, limited finance, complex regulations, and competition from large firms can restrict growth. An effective response should recognise environmental impact and ensure that support programmes should improve access to skills, markets, and responsible finance."
    }
  },
  // small businesses — community participation
  {
    id: "swtc-165",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of small businesses, small businesses contribute to employment, innovation, and the character of local communities. For example, digital tools and local networks can help smaller firms reach customers and improve efficiency. Nevertheless, limited finance, complex regulations, and competition from large firms can restrict growth. An effective response should recognise community participation and ensure that support programmes should improve access to skills, markets, and responsible finance."
    }
  },
  // small businesses — education and skills
  {
    id: "swtc-166",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of small businesses, small businesses contribute to employment, innovation, and the character of local communities. For example, digital tools and local networks can help smaller firms reach customers and improve efficiency. Nevertheless, limited finance, complex regulations, and competition from large firms can restrict growth. An effective response should recognise education and skills and ensure that support programmes should improve access to skills, markets, and responsible finance."
    }
  },
  // small businesses — governance and accountability
  {
    id: "swtc-167",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of small businesses, small businesses contribute to employment, innovation, and the character of local communities. For example, digital tools and local networks can help smaller firms reach customers and improve efficiency. Nevertheless, limited finance, complex regulations, and competition from large firms can restrict growth. An effective response should recognise governance and accountability and ensure that support programmes should improve access to skills, markets, and responsible finance."
    }
  },
  // small businesses — future resilience
  {
    id: "swtc-168",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of small businesses, small businesses contribute to employment, innovation, and the character of local communities. For example, digital tools and local networks can help smaller firms reach customers and improve efficiency. Nevertheless, limited finance, complex regulations, and competition from large firms can restrict growth. An effective response should recognise future resilience and ensure that support programmes should improve access to skills, markets, and responsible finance."
    }
  },
  // small businesses — ethical considerations
  {
    id: "swtc-169",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of small businesses, small businesses contribute to employment, innovation, and the character of local communities. For example, digital tools and local networks can help smaller firms reach customers and improve efficiency. Nevertheless, limited finance, complex regulations, and competition from large firms can restrict growth. An effective response should recognise ethical considerations and ensure that support programmes should improve access to skills, markets, and responsible finance."
    }
  },
  // small businesses — measurement and evidence
  {
    id: "swtc-170",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of small businesses, small businesses contribute to employment, innovation, and the character of local communities. For example, digital tools and local networks can help smaller firms reach customers and improve efficiency. Nevertheless, limited finance, complex regulations, and competition from large firms can restrict growth. An effective response should recognise measurement and evidence and ensure that support programmes should improve access to skills, markets, and responsible finance."
    }
  },
  // disaster preparedness — access and equality
  {
    id: "swtc-171",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of disaster preparedness, disaster preparedness reduces the human and economic costs of emergencies. For example, early warnings, evacuation plans, and resilient buildings help communities respond quickly. Nevertheless, low public awareness and uneven infrastructure leave some groups especially vulnerable. An effective response should recognise access and equality and ensure that preparedness must be practised regularly and designed around local risks."
    }
  },
  // disaster preparedness — economic effects
  {
    id: "swtc-172",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of disaster preparedness, disaster preparedness reduces the human and economic costs of emergencies. For example, early warnings, evacuation plans, and resilient buildings help communities respond quickly. Nevertheless, low public awareness and uneven infrastructure leave some groups especially vulnerable. An effective response should recognise economic effects and ensure that preparedness must be practised regularly and designed around local risks."
    }
  },
  // disaster preparedness — technology and innovation
  {
    id: "swtc-173",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of disaster preparedness, disaster preparedness reduces the human and economic costs of emergencies. For example, early warnings, evacuation plans, and resilient buildings help communities respond quickly. Nevertheless, low public awareness and uneven infrastructure leave some groups especially vulnerable. An effective response should recognise technology and innovation and ensure that preparedness must be practised regularly and designed around local risks."
    }
  },
  // disaster preparedness — environmental impact
  {
    id: "swtc-174",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of disaster preparedness, disaster preparedness reduces the human and economic costs of emergencies. For example, early warnings, evacuation plans, and resilient buildings help communities respond quickly. Nevertheless, low public awareness and uneven infrastructure leave some groups especially vulnerable. An effective response should recognise environmental impact and ensure that preparedness must be practised regularly and designed around local risks."
    }
  },
  // disaster preparedness — community participation
  {
    id: "swtc-175",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of disaster preparedness, disaster preparedness reduces the human and economic costs of emergencies. For example, early warnings, evacuation plans, and resilient buildings help communities respond quickly. Nevertheless, low public awareness and uneven infrastructure leave some groups especially vulnerable. An effective response should recognise community participation and ensure that preparedness must be practised regularly and designed around local risks."
    }
  },
  // disaster preparedness — education and skills
  {
    id: "swtc-176",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of disaster preparedness, disaster preparedness reduces the human and economic costs of emergencies. For example, early warnings, evacuation plans, and resilient buildings help communities respond quickly. Nevertheless, low public awareness and uneven infrastructure leave some groups especially vulnerable. An effective response should recognise education and skills and ensure that preparedness must be practised regularly and designed around local risks."
    }
  },
  // disaster preparedness — governance and accountability
  {
    id: "swtc-177",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of disaster preparedness, disaster preparedness reduces the human and economic costs of emergencies. For example, early warnings, evacuation plans, and resilient buildings help communities respond quickly. Nevertheless, low public awareness and uneven infrastructure leave some groups especially vulnerable. An effective response should recognise governance and accountability and ensure that preparedness must be practised regularly and designed around local risks."
    }
  },
  // disaster preparedness — future resilience
  {
    id: "swtc-178",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of disaster preparedness, disaster preparedness reduces the human and economic costs of emergencies. For example, early warnings, evacuation plans, and resilient buildings help communities respond quickly. Nevertheless, low public awareness and uneven infrastructure leave some groups especially vulnerable. An effective response should recognise future resilience and ensure that preparedness must be practised regularly and designed around local risks."
    }
  },
  // disaster preparedness — ethical considerations
  {
    id: "swtc-179",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of disaster preparedness, disaster preparedness reduces the human and economic costs of emergencies. For example, early warnings, evacuation plans, and resilient buildings help communities respond quickly. Nevertheless, low public awareness and uneven infrastructure leave some groups especially vulnerable. An effective response should recognise ethical considerations and ensure that preparedness must be practised regularly and designed around local risks."
    }
  },
  // disaster preparedness — measurement and evidence
  {
    id: "swtc-180",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of disaster preparedness, disaster preparedness reduces the human and economic costs of emergencies. For example, early warnings, evacuation plans, and resilient buildings help communities respond quickly. Nevertheless, low public awareness and uneven infrastructure leave some groups especially vulnerable. An effective response should recognise measurement and evidence and ensure that preparedness must be practised regularly and designed around local risks."
    }
  },
  // space exploration — access and equality
  {
    id: "swtc-181",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of space exploration, space exploration generates scientific knowledge and technologies with applications on Earth. For example, satellite services improve communication, navigation, and environmental monitoring. Nevertheless, high costs and competing public priorities raise questions about investment. An effective response should recognise access and equality and ensure that transparent goals and international cooperation can strengthen its wider value."
    }
  },
  // space exploration — economic effects
  {
    id: "swtc-182",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of space exploration, space exploration generates scientific knowledge and technologies with applications on Earth. For example, satellite services improve communication, navigation, and environmental monitoring. Nevertheless, high costs and competing public priorities raise questions about investment. An effective response should recognise economic effects and ensure that transparent goals and international cooperation can strengthen its wider value."
    }
  },
  // space exploration — technology and innovation
  {
    id: "swtc-183",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of space exploration, space exploration generates scientific knowledge and technologies with applications on Earth. For example, satellite services improve communication, navigation, and environmental monitoring. Nevertheless, high costs and competing public priorities raise questions about investment. An effective response should recognise technology and innovation and ensure that transparent goals and international cooperation can strengthen its wider value."
    }
  },
  // space exploration — environmental impact
  {
    id: "swtc-184",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of space exploration, space exploration generates scientific knowledge and technologies with applications on Earth. For example, satellite services improve communication, navigation, and environmental monitoring. Nevertheless, high costs and competing public priorities raise questions about investment. An effective response should recognise environmental impact and ensure that transparent goals and international cooperation can strengthen its wider value."
    }
  },
  // space exploration — community participation
  {
    id: "swtc-185",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of space exploration, space exploration generates scientific knowledge and technologies with applications on Earth. For example, satellite services improve communication, navigation, and environmental monitoring. Nevertheless, high costs and competing public priorities raise questions about investment. An effective response should recognise community participation and ensure that transparent goals and international cooperation can strengthen its wider value."
    }
  },
  // space exploration — education and skills
  {
    id: "swtc-186",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of space exploration, space exploration generates scientific knowledge and technologies with applications on Earth. For example, satellite services improve communication, navigation, and environmental monitoring. Nevertheless, high costs and competing public priorities raise questions about investment. An effective response should recognise education and skills and ensure that transparent goals and international cooperation can strengthen its wider value."
    }
  },
  // space exploration — governance and accountability
  {
    id: "swtc-187",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of space exploration, space exploration generates scientific knowledge and technologies with applications on Earth. For example, satellite services improve communication, navigation, and environmental monitoring. Nevertheless, high costs and competing public priorities raise questions about investment. An effective response should recognise governance and accountability and ensure that transparent goals and international cooperation can strengthen its wider value."
    }
  },
  // space exploration — future resilience
  {
    id: "swtc-188",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of space exploration, space exploration generates scientific knowledge and technologies with applications on Earth. For example, satellite services improve communication, navigation, and environmental monitoring. Nevertheless, high costs and competing public priorities raise questions about investment. An effective response should recognise future resilience and ensure that transparent goals and international cooperation can strengthen its wider value."
    }
  },
  // space exploration — ethical considerations
  {
    id: "swtc-189",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of space exploration, space exploration generates scientific knowledge and technologies with applications on Earth. For example, satellite services improve communication, navigation, and environmental monitoring. Nevertheless, high costs and competing public priorities raise questions about investment. An effective response should recognise ethical considerations and ensure that transparent goals and international cooperation can strengthen its wider value."
    }
  },
  // space exploration — measurement and evidence
  {
    id: "swtc-190",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of space exploration, space exploration generates scientific knowledge and technologies with applications on Earth. For example, satellite services improve communication, navigation, and environmental monitoring. Nevertheless, high costs and competing public priorities raise questions about investment. An effective response should recognise measurement and evidence and ensure that transparent goals and international cooperation can strengthen its wider value."
    }
  },
  // mental well-being — access and equality
  {
    id: "swtc-191",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of mental well-being, mental well-being is influenced by social connection, working conditions, and access to support. For example, early assistance and supportive environments can help people manage stress. Nevertheless, stigma and shortages of trained professionals often discourage people from seeking help. An effective response should recognise access and equality and ensure that communities should make reliable support accessible and treat well-being as a shared concern."
    }
  },
  // mental well-being — economic effects
  {
    id: "swtc-192",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of mental well-being, mental well-being is influenced by social connection, working conditions, and access to support. For example, early assistance and supportive environments can help people manage stress. Nevertheless, stigma and shortages of trained professionals often discourage people from seeking help. An effective response should recognise economic effects and ensure that communities should make reliable support accessible and treat well-being as a shared concern."
    }
  },
  // mental well-being — technology and innovation
  {
    id: "swtc-193",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of mental well-being, mental well-being is influenced by social connection, working conditions, and access to support. For example, early assistance and supportive environments can help people manage stress. Nevertheless, stigma and shortages of trained professionals often discourage people from seeking help. An effective response should recognise technology and innovation and ensure that communities should make reliable support accessible and treat well-being as a shared concern."
    }
  },
  // mental well-being — environmental impact
  {
    id: "swtc-194",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of mental well-being, mental well-being is influenced by social connection, working conditions, and access to support. For example, early assistance and supportive environments can help people manage stress. Nevertheless, stigma and shortages of trained professionals often discourage people from seeking help. An effective response should recognise environmental impact and ensure that communities should make reliable support accessible and treat well-being as a shared concern."
    }
  },
  // mental well-being — community participation
  {
    id: "swtc-195",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of mental well-being, mental well-being is influenced by social connection, working conditions, and access to support. For example, early assistance and supportive environments can help people manage stress. Nevertheless, stigma and shortages of trained professionals often discourage people from seeking help. An effective response should recognise community participation and ensure that communities should make reliable support accessible and treat well-being as a shared concern."
    }
  },
  // mental well-being — education and skills
  {
    id: "swtc-196",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of mental well-being, mental well-being is influenced by social connection, working conditions, and access to support. For example, early assistance and supportive environments can help people manage stress. Nevertheless, stigma and shortages of trained professionals often discourage people from seeking help. An effective response should recognise education and skills and ensure that communities should make reliable support accessible and treat well-being as a shared concern."
    }
  },
  // mental well-being — governance and accountability
  {
    id: "swtc-197",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of mental well-being, mental well-being is influenced by social connection, working conditions, and access to support. For example, early assistance and supportive environments can help people manage stress. Nevertheless, stigma and shortages of trained professionals often discourage people from seeking help. An effective response should recognise governance and accountability and ensure that communities should make reliable support accessible and treat well-being as a shared concern."
    }
  },
  // mental well-being — future resilience
  {
    id: "swtc-198",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of mental well-being, mental well-being is influenced by social connection, working conditions, and access to support. For example, early assistance and supportive environments can help people manage stress. Nevertheless, stigma and shortages of trained professionals often discourage people from seeking help. An effective response should recognise future resilience and ensure that communities should make reliable support accessible and treat well-being as a shared concern."
    }
  },
  // mental well-being — ethical considerations
  {
    id: "swtc-199",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of mental well-being, mental well-being is influenced by social connection, working conditions, and access to support. For example, early assistance and supportive environments can help people manage stress. Nevertheless, stigma and shortages of trained professionals often discourage people from seeking help. An effective response should recognise ethical considerations and ensure that communities should make reliable support accessible and treat well-being as a shared concern."
    }
  },
  // mental well-being — measurement and evidence
  {
    id: "swtc-200",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "medium",
    content: {
      sourceText: "In discussions of mental well-being, mental well-being is influenced by social connection, working conditions, and access to support. For example, early assistance and supportive environments can help people manage stress. Nevertheless, stigma and shortages of trained professionals often discourage people from seeking help. An effective response should recognise measurement and evidence and ensure that communities should make reliable support accessible and treat well-being as a shared concern."
    }
  },
  // ethical consumption — access and equality
  {
    id: "swtc-201",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of ethical consumption, consumer choices influence how products are made, transported, and discarded. For example, repair, reuse, and informed purchasing can reduce environmental and social costs. Nevertheless, labels may be confusing and sustainable options can be less affordable. An effective response should recognise access and equality and ensure that business transparency and consumer education can make responsible choices easier."
    }
  },
  // ethical consumption — economic effects
  {
    id: "swtc-202",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of ethical consumption, consumer choices influence how products are made, transported, and discarded. For example, repair, reuse, and informed purchasing can reduce environmental and social costs. Nevertheless, labels may be confusing and sustainable options can be less affordable. An effective response should recognise economic effects and ensure that business transparency and consumer education can make responsible choices easier."
    }
  },
  // ethical consumption — technology and innovation
  {
    id: "swtc-203",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of ethical consumption, consumer choices influence how products are made, transported, and discarded. For example, repair, reuse, and informed purchasing can reduce environmental and social costs. Nevertheless, labels may be confusing and sustainable options can be less affordable. An effective response should recognise technology and innovation and ensure that business transparency and consumer education can make responsible choices easier."
    }
  },
  // ethical consumption — environmental impact
  {
    id: "swtc-204",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of ethical consumption, consumer choices influence how products are made, transported, and discarded. For example, repair, reuse, and informed purchasing can reduce environmental and social costs. Nevertheless, labels may be confusing and sustainable options can be less affordable. An effective response should recognise environmental impact and ensure that business transparency and consumer education can make responsible choices easier."
    }
  },
  // ethical consumption — community participation
  {
    id: "swtc-205",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of ethical consumption, consumer choices influence how products are made, transported, and discarded. For example, repair, reuse, and informed purchasing can reduce environmental and social costs. Nevertheless, labels may be confusing and sustainable options can be less affordable. An effective response should recognise community participation and ensure that business transparency and consumer education can make responsible choices easier."
    }
  },
  // ethical consumption — education and skills
  {
    id: "swtc-206",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of ethical consumption, consumer choices influence how products are made, transported, and discarded. For example, repair, reuse, and informed purchasing can reduce environmental and social costs. Nevertheless, labels may be confusing and sustainable options can be less affordable. An effective response should recognise education and skills and ensure that business transparency and consumer education can make responsible choices easier."
    }
  },
  // ethical consumption — governance and accountability
  {
    id: "swtc-207",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of ethical consumption, consumer choices influence how products are made, transported, and discarded. For example, repair, reuse, and informed purchasing can reduce environmental and social costs. Nevertheless, labels may be confusing and sustainable options can be less affordable. An effective response should recognise governance and accountability and ensure that business transparency and consumer education can make responsible choices easier."
    }
  },
  // ethical consumption — future resilience
  {
    id: "swtc-208",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of ethical consumption, consumer choices influence how products are made, transported, and discarded. For example, repair, reuse, and informed purchasing can reduce environmental and social costs. Nevertheless, labels may be confusing and sustainable options can be less affordable. An effective response should recognise future resilience and ensure that business transparency and consumer education can make responsible choices easier."
    }
  },
  // ethical consumption — ethical considerations
  {
    id: "swtc-209",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of ethical consumption, consumer choices influence how products are made, transported, and discarded. For example, repair, reuse, and informed purchasing can reduce environmental and social costs. Nevertheless, labels may be confusing and sustainable options can be less affordable. An effective response should recognise ethical considerations and ensure that business transparency and consumer education can make responsible choices easier."
    }
  },
  // ethical consumption — measurement and evidence
  {
    id: "swtc-210",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of ethical consumption, consumer choices influence how products are made, transported, and discarded. For example, repair, reuse, and informed purchasing can reduce environmental and social costs. Nevertheless, labels may be confusing and sustainable options can be less affordable. An effective response should recognise measurement and evidence and ensure that business transparency and consumer education can make responsible choices easier."
    }
  },
  // language learning — access and equality
  {
    id: "swtc-211",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of language learning, learning another language can improve communication and broaden cultural understanding. For example, regular practice and meaningful interaction help learners develop confidence. Nevertheless, limited exposure and fear of making mistakes can slow progress. An effective response should recognise access and equality and ensure that schools can support learning through conversation, media, and realistic goals."
    }
  },
  // language learning — economic effects
  {
    id: "swtc-212",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of language learning, learning another language can improve communication and broaden cultural understanding. For example, regular practice and meaningful interaction help learners develop confidence. Nevertheless, limited exposure and fear of making mistakes can slow progress. An effective response should recognise economic effects and ensure that schools can support learning through conversation, media, and realistic goals."
    }
  },
  // language learning — technology and innovation
  {
    id: "swtc-213",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of language learning, learning another language can improve communication and broaden cultural understanding. For example, regular practice and meaningful interaction help learners develop confidence. Nevertheless, limited exposure and fear of making mistakes can slow progress. An effective response should recognise technology and innovation and ensure that schools can support learning through conversation, media, and realistic goals."
    }
  },
  // language learning — environmental impact
  {
    id: "swtc-214",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of language learning, learning another language can improve communication and broaden cultural understanding. For example, regular practice and meaningful interaction help learners develop confidence. Nevertheless, limited exposure and fear of making mistakes can slow progress. An effective response should recognise environmental impact and ensure that schools can support learning through conversation, media, and realistic goals."
    }
  },
  // language learning — community participation
  {
    id: "swtc-215",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of language learning, learning another language can improve communication and broaden cultural understanding. For example, regular practice and meaningful interaction help learners develop confidence. Nevertheless, limited exposure and fear of making mistakes can slow progress. An effective response should recognise community participation and ensure that schools can support learning through conversation, media, and realistic goals."
    }
  },
  // language learning — education and skills
  {
    id: "swtc-216",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of language learning, learning another language can improve communication and broaden cultural understanding. For example, regular practice and meaningful interaction help learners develop confidence. Nevertheless, limited exposure and fear of making mistakes can slow progress. An effective response should recognise education and skills and ensure that schools can support learning through conversation, media, and realistic goals."
    }
  },
  // language learning — governance and accountability
  {
    id: "swtc-217",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of language learning, learning another language can improve communication and broaden cultural understanding. For example, regular practice and meaningful interaction help learners develop confidence. Nevertheless, limited exposure and fear of making mistakes can slow progress. An effective response should recognise governance and accountability and ensure that schools can support learning through conversation, media, and realistic goals."
    }
  },
  // language learning — future resilience
  {
    id: "swtc-218",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of language learning, learning another language can improve communication and broaden cultural understanding. For example, regular practice and meaningful interaction help learners develop confidence. Nevertheless, limited exposure and fear of making mistakes can slow progress. An effective response should recognise future resilience and ensure that schools can support learning through conversation, media, and realistic goals."
    }
  },
  // language learning — ethical considerations
  {
    id: "swtc-219",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of language learning, learning another language can improve communication and broaden cultural understanding. For example, regular practice and meaningful interaction help learners develop confidence. Nevertheless, limited exposure and fear of making mistakes can slow progress. An effective response should recognise ethical considerations and ensure that schools can support learning through conversation, media, and realistic goals."
    }
  },
  // language learning — measurement and evidence
  {
    id: "swtc-220",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of language learning, learning another language can improve communication and broaden cultural understanding. For example, regular practice and meaningful interaction help learners develop confidence. Nevertheless, limited exposure and fear of making mistakes can slow progress. An effective response should recognise measurement and evidence and ensure that schools can support learning through conversation, media, and realistic goals."
    }
  },
  // agricultural technology — access and equality
  {
    id: "swtc-221",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of agricultural technology, agricultural technology is changing how farmers monitor crops and manage resources. For example, sensors, improved seeds, and precision irrigation can raise productivity. Nevertheless, equipment costs and uneven digital access may exclude smaller farms. An effective response should recognise access and equality and ensure that innovation should be adapted to local conditions and supported by training."
    }
  },
  // agricultural technology — economic effects
  {
    id: "swtc-222",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of agricultural technology, agricultural technology is changing how farmers monitor crops and manage resources. For example, sensors, improved seeds, and precision irrigation can raise productivity. Nevertheless, equipment costs and uneven digital access may exclude smaller farms. An effective response should recognise economic effects and ensure that innovation should be adapted to local conditions and supported by training."
    }
  },
  // agricultural technology — technology and innovation
  {
    id: "swtc-223",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of agricultural technology, agricultural technology is changing how farmers monitor crops and manage resources. For example, sensors, improved seeds, and precision irrigation can raise productivity. Nevertheless, equipment costs and uneven digital access may exclude smaller farms. An effective response should recognise technology and innovation and ensure that innovation should be adapted to local conditions and supported by training."
    }
  },
  // agricultural technology — environmental impact
  {
    id: "swtc-224",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of agricultural technology, agricultural technology is changing how farmers monitor crops and manage resources. For example, sensors, improved seeds, and precision irrigation can raise productivity. Nevertheless, equipment costs and uneven digital access may exclude smaller farms. An effective response should recognise environmental impact and ensure that innovation should be adapted to local conditions and supported by training."
    }
  },
  // agricultural technology — community participation
  {
    id: "swtc-225",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of agricultural technology, agricultural technology is changing how farmers monitor crops and manage resources. For example, sensors, improved seeds, and precision irrigation can raise productivity. Nevertheless, equipment costs and uneven digital access may exclude smaller farms. An effective response should recognise community participation and ensure that innovation should be adapted to local conditions and supported by training."
    }
  },
  // agricultural technology — education and skills
  {
    id: "swtc-226",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of agricultural technology, agricultural technology is changing how farmers monitor crops and manage resources. For example, sensors, improved seeds, and precision irrigation can raise productivity. Nevertheless, equipment costs and uneven digital access may exclude smaller farms. An effective response should recognise education and skills and ensure that innovation should be adapted to local conditions and supported by training."
    }
  },
  // agricultural technology — governance and accountability
  {
    id: "swtc-227",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of agricultural technology, agricultural technology is changing how farmers monitor crops and manage resources. For example, sensors, improved seeds, and precision irrigation can raise productivity. Nevertheless, equipment costs and uneven digital access may exclude smaller farms. An effective response should recognise governance and accountability and ensure that innovation should be adapted to local conditions and supported by training."
    }
  },
  // agricultural technology — future resilience
  {
    id: "swtc-228",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of agricultural technology, agricultural technology is changing how farmers monitor crops and manage resources. For example, sensors, improved seeds, and precision irrigation can raise productivity. Nevertheless, equipment costs and uneven digital access may exclude smaller farms. An effective response should recognise future resilience and ensure that innovation should be adapted to local conditions and supported by training."
    }
  },
  // agricultural technology — ethical considerations
  {
    id: "swtc-229",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of agricultural technology, agricultural technology is changing how farmers monitor crops and manage resources. For example, sensors, improved seeds, and precision irrigation can raise productivity. Nevertheless, equipment costs and uneven digital access may exclude smaller farms. An effective response should recognise ethical considerations and ensure that innovation should be adapted to local conditions and supported by training."
    }
  },
  // agricultural technology — measurement and evidence
  {
    id: "swtc-230",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of agricultural technology, agricultural technology is changing how farmers monitor crops and manage resources. For example, sensors, improved seeds, and precision irrigation can raise productivity. Nevertheless, equipment costs and uneven digital access may exclude smaller farms. An effective response should recognise measurement and evidence and ensure that innovation should be adapted to local conditions and supported by training."
    }
  },
  // public transport safety — access and equality
  {
    id: "swtc-231",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of public transport safety, transport safety depends on vehicle standards, road design, and responsible behaviour. For example, well-maintained infrastructure and clear information can prevent accidents. Nevertheless, weak enforcement and unsafe pedestrian routes remain common problems. An effective response should recognise access and equality and ensure that a coordinated approach can protect passengers, cyclists, and pedestrians."
    }
  },
  // public transport safety — economic effects
  {
    id: "swtc-232",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of public transport safety, transport safety depends on vehicle standards, road design, and responsible behaviour. For example, well-maintained infrastructure and clear information can prevent accidents. Nevertheless, weak enforcement and unsafe pedestrian routes remain common problems. An effective response should recognise economic effects and ensure that a coordinated approach can protect passengers, cyclists, and pedestrians."
    }
  },
  // public transport safety — technology and innovation
  {
    id: "swtc-233",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of public transport safety, transport safety depends on vehicle standards, road design, and responsible behaviour. For example, well-maintained infrastructure and clear information can prevent accidents. Nevertheless, weak enforcement and unsafe pedestrian routes remain common problems. An effective response should recognise technology and innovation and ensure that a coordinated approach can protect passengers, cyclists, and pedestrians."
    }
  },
  // public transport safety — environmental impact
  {
    id: "swtc-234",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of public transport safety, transport safety depends on vehicle standards, road design, and responsible behaviour. For example, well-maintained infrastructure and clear information can prevent accidents. Nevertheless, weak enforcement and unsafe pedestrian routes remain common problems. An effective response should recognise environmental impact and ensure that a coordinated approach can protect passengers, cyclists, and pedestrians."
    }
  },
  // public transport safety — community participation
  {
    id: "swtc-235",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of public transport safety, transport safety depends on vehicle standards, road design, and responsible behaviour. For example, well-maintained infrastructure and clear information can prevent accidents. Nevertheless, weak enforcement and unsafe pedestrian routes remain common problems. An effective response should recognise community participation and ensure that a coordinated approach can protect passengers, cyclists, and pedestrians."
    }
  },
  // public transport safety — education and skills
  {
    id: "swtc-236",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of public transport safety, transport safety depends on vehicle standards, road design, and responsible behaviour. For example, well-maintained infrastructure and clear information can prevent accidents. Nevertheless, weak enforcement and unsafe pedestrian routes remain common problems. An effective response should recognise education and skills and ensure that a coordinated approach can protect passengers, cyclists, and pedestrians."
    }
  },
  // public transport safety — governance and accountability
  {
    id: "swtc-237",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of public transport safety, transport safety depends on vehicle standards, road design, and responsible behaviour. For example, well-maintained infrastructure and clear information can prevent accidents. Nevertheless, weak enforcement and unsafe pedestrian routes remain common problems. An effective response should recognise governance and accountability and ensure that a coordinated approach can protect passengers, cyclists, and pedestrians."
    }
  },
  // public transport safety — future resilience
  {
    id: "swtc-238",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of public transport safety, transport safety depends on vehicle standards, road design, and responsible behaviour. For example, well-maintained infrastructure and clear information can prevent accidents. Nevertheless, weak enforcement and unsafe pedestrian routes remain common problems. An effective response should recognise future resilience and ensure that a coordinated approach can protect passengers, cyclists, and pedestrians."
    }
  },
  // public transport safety — ethical considerations
  {
    id: "swtc-239",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of public transport safety, transport safety depends on vehicle standards, road design, and responsible behaviour. For example, well-maintained infrastructure and clear information can prevent accidents. Nevertheless, weak enforcement and unsafe pedestrian routes remain common problems. An effective response should recognise ethical considerations and ensure that a coordinated approach can protect passengers, cyclists, and pedestrians."
    }
  },
  // public transport safety — measurement and evidence
  {
    id: "swtc-240",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of public transport safety, transport safety depends on vehicle standards, road design, and responsible behaviour. For example, well-maintained infrastructure and clear information can prevent accidents. Nevertheless, weak enforcement and unsafe pedestrian routes remain common problems. An effective response should recognise measurement and evidence and ensure that a coordinated approach can protect passengers, cyclists, and pedestrians."
    }
  },
  // online privacy — access and equality
  {
    id: "swtc-241",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of online privacy, digital services collect information that can improve convenience but also create privacy risks. For example, clear consent and secure data practices can help users understand how information is used. Nevertheless, complex policies and large-scale data sharing make meaningful control difficult. An effective response should recognise access and equality and ensure that organisations should minimise collection and explain their responsibilities."
    }
  },
  // online privacy — economic effects
  {
    id: "swtc-242",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of online privacy, digital services collect information that can improve convenience but also create privacy risks. For example, clear consent and secure data practices can help users understand how information is used. Nevertheless, complex policies and large-scale data sharing make meaningful control difficult. An effective response should recognise economic effects and ensure that organisations should minimise collection and explain their responsibilities."
    }
  },
  // online privacy — technology and innovation
  {
    id: "swtc-243",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of online privacy, digital services collect information that can improve convenience but also create privacy risks. For example, clear consent and secure data practices can help users understand how information is used. Nevertheless, complex policies and large-scale data sharing make meaningful control difficult. An effective response should recognise technology and innovation and ensure that organisations should minimise collection and explain their responsibilities."
    }
  },
  // online privacy — environmental impact
  {
    id: "swtc-244",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of online privacy, digital services collect information that can improve convenience but also create privacy risks. For example, clear consent and secure data practices can help users understand how information is used. Nevertheless, complex policies and large-scale data sharing make meaningful control difficult. An effective response should recognise environmental impact and ensure that organisations should minimise collection and explain their responsibilities."
    }
  },
  // online privacy — community participation
  {
    id: "swtc-245",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of online privacy, digital services collect information that can improve convenience but also create privacy risks. For example, clear consent and secure data practices can help users understand how information is used. Nevertheless, complex policies and large-scale data sharing make meaningful control difficult. An effective response should recognise community participation and ensure that organisations should minimise collection and explain their responsibilities."
    }
  },
  // online privacy — education and skills
  {
    id: "swtc-246",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of online privacy, digital services collect information that can improve convenience but also create privacy risks. For example, clear consent and secure data practices can help users understand how information is used. Nevertheless, complex policies and large-scale data sharing make meaningful control difficult. An effective response should recognise education and skills and ensure that organisations should minimise collection and explain their responsibilities."
    }
  },
  // online privacy — governance and accountability
  {
    id: "swtc-247",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of online privacy, digital services collect information that can improve convenience but also create privacy risks. For example, clear consent and secure data practices can help users understand how information is used. Nevertheless, complex policies and large-scale data sharing make meaningful control difficult. An effective response should recognise governance and accountability and ensure that organisations should minimise collection and explain their responsibilities."
    }
  },
  // online privacy — future resilience
  {
    id: "swtc-248",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of online privacy, digital services collect information that can improve convenience but also create privacy risks. For example, clear consent and secure data practices can help users understand how information is used. Nevertheless, complex policies and large-scale data sharing make meaningful control difficult. An effective response should recognise future resilience and ensure that organisations should minimise collection and explain their responsibilities."
    }
  },
  // online privacy — ethical considerations
  {
    id: "swtc-249",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of online privacy, digital services collect information that can improve convenience but also create privacy risks. For example, clear consent and secure data practices can help users understand how information is used. Nevertheless, complex policies and large-scale data sharing make meaningful control difficult. An effective response should recognise ethical considerations and ensure that organisations should minimise collection and explain their responsibilities."
    }
  },
  // online privacy — measurement and evidence
  {
    id: "swtc-250",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of online privacy, digital services collect information that can improve convenience but also create privacy risks. For example, clear consent and secure data practices can help users understand how information is used. Nevertheless, complex policies and large-scale data sharing make meaningful control difficult. An effective response should recognise measurement and evidence and ensure that organisations should minimise collection and explain their responsibilities."
    }
  },
  // volunteering — access and equality
  {
    id: "swtc-251",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of volunteering, volunteering strengthens communities while giving participants opportunities to learn and connect. For example, well-organised projects can address local needs and build practical skills. Nevertheless, short-term commitments and poor coordination may reduce their impact. An effective response should recognise access and equality and ensure that lasting programmes need clear roles, training, and respect for volunteers."
    }
  },
  // volunteering — economic effects
  {
    id: "swtc-252",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of volunteering, volunteering strengthens communities while giving participants opportunities to learn and connect. For example, well-organised projects can address local needs and build practical skills. Nevertheless, short-term commitments and poor coordination may reduce their impact. An effective response should recognise economic effects and ensure that lasting programmes need clear roles, training, and respect for volunteers."
    }
  },
  // volunteering — technology and innovation
  {
    id: "swtc-253",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of volunteering, volunteering strengthens communities while giving participants opportunities to learn and connect. For example, well-organised projects can address local needs and build practical skills. Nevertheless, short-term commitments and poor coordination may reduce their impact. An effective response should recognise technology and innovation and ensure that lasting programmes need clear roles, training, and respect for volunteers."
    }
  },
  // volunteering — environmental impact
  {
    id: "swtc-254",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of volunteering, volunteering strengthens communities while giving participants opportunities to learn and connect. For example, well-organised projects can address local needs and build practical skills. Nevertheless, short-term commitments and poor coordination may reduce their impact. An effective response should recognise environmental impact and ensure that lasting programmes need clear roles, training, and respect for volunteers."
    }
  },
  // volunteering — community participation
  {
    id: "swtc-255",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of volunteering, volunteering strengthens communities while giving participants opportunities to learn and connect. For example, well-organised projects can address local needs and build practical skills. Nevertheless, short-term commitments and poor coordination may reduce their impact. An effective response should recognise community participation and ensure that lasting programmes need clear roles, training, and respect for volunteers."
    }
  },
  // volunteering — education and skills
  {
    id: "swtc-256",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of volunteering, volunteering strengthens communities while giving participants opportunities to learn and connect. For example, well-organised projects can address local needs and build practical skills. Nevertheless, short-term commitments and poor coordination may reduce their impact. An effective response should recognise education and skills and ensure that lasting programmes need clear roles, training, and respect for volunteers."
    }
  },
  // volunteering — governance and accountability
  {
    id: "swtc-257",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of volunteering, volunteering strengthens communities while giving participants opportunities to learn and connect. For example, well-organised projects can address local needs and build practical skills. Nevertheless, short-term commitments and poor coordination may reduce their impact. An effective response should recognise governance and accountability and ensure that lasting programmes need clear roles, training, and respect for volunteers."
    }
  },
  // volunteering — future resilience
  {
    id: "swtc-258",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of volunteering, volunteering strengthens communities while giving participants opportunities to learn and connect. For example, well-organised projects can address local needs and build practical skills. Nevertheless, short-term commitments and poor coordination may reduce their impact. An effective response should recognise future resilience and ensure that lasting programmes need clear roles, training, and respect for volunteers."
    }
  },
  // volunteering — ethical considerations
  {
    id: "swtc-259",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of volunteering, volunteering strengthens communities while giving participants opportunities to learn and connect. For example, well-organised projects can address local needs and build practical skills. Nevertheless, short-term commitments and poor coordination may reduce their impact. An effective response should recognise ethical considerations and ensure that lasting programmes need clear roles, training, and respect for volunteers."
    }
  },
  // volunteering — measurement and evidence
  {
    id: "swtc-260",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of volunteering, volunteering strengthens communities while giving participants opportunities to learn and connect. For example, well-organised projects can address local needs and build practical skills. Nevertheless, short-term commitments and poor coordination may reduce their impact. An effective response should recognise measurement and evidence and ensure that lasting programmes need clear roles, training, and respect for volunteers."
    }
  },
  // museum learning — access and equality
  {
    id: "swtc-261",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of museum learning, museums can make complex subjects accessible through objects, stories, and interactive displays. For example, school partnerships and digital collections can extend learning beyond gallery visits. Nevertheless, entry costs, distance, and limited accessibility can exclude some audiences. An effective response should recognise access and equality and ensure that inclusive design and community collaboration can broaden participation."
    }
  },
  // museum learning — economic effects
  {
    id: "swtc-262",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of museum learning, museums can make complex subjects accessible through objects, stories, and interactive displays. For example, school partnerships and digital collections can extend learning beyond gallery visits. Nevertheless, entry costs, distance, and limited accessibility can exclude some audiences. An effective response should recognise economic effects and ensure that inclusive design and community collaboration can broaden participation."
    }
  },
  // museum learning — technology and innovation
  {
    id: "swtc-263",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of museum learning, museums can make complex subjects accessible through objects, stories, and interactive displays. For example, school partnerships and digital collections can extend learning beyond gallery visits. Nevertheless, entry costs, distance, and limited accessibility can exclude some audiences. An effective response should recognise technology and innovation and ensure that inclusive design and community collaboration can broaden participation."
    }
  },
  // museum learning — environmental impact
  {
    id: "swtc-264",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of museum learning, museums can make complex subjects accessible through objects, stories, and interactive displays. For example, school partnerships and digital collections can extend learning beyond gallery visits. Nevertheless, entry costs, distance, and limited accessibility can exclude some audiences. An effective response should recognise environmental impact and ensure that inclusive design and community collaboration can broaden participation."
    }
  },
  // museum learning — community participation
  {
    id: "swtc-265",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of museum learning, museums can make complex subjects accessible through objects, stories, and interactive displays. For example, school partnerships and digital collections can extend learning beyond gallery visits. Nevertheless, entry costs, distance, and limited accessibility can exclude some audiences. An effective response should recognise community participation and ensure that inclusive design and community collaboration can broaden participation."
    }
  },
  // museum learning — education and skills
  {
    id: "swtc-266",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of museum learning, museums can make complex subjects accessible through objects, stories, and interactive displays. For example, school partnerships and digital collections can extend learning beyond gallery visits. Nevertheless, entry costs, distance, and limited accessibility can exclude some audiences. An effective response should recognise education and skills and ensure that inclusive design and community collaboration can broaden participation."
    }
  },
  // museum learning — governance and accountability
  {
    id: "swtc-267",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of museum learning, museums can make complex subjects accessible through objects, stories, and interactive displays. For example, school partnerships and digital collections can extend learning beyond gallery visits. Nevertheless, entry costs, distance, and limited accessibility can exclude some audiences. An effective response should recognise governance and accountability and ensure that inclusive design and community collaboration can broaden participation."
    }
  },
  // museum learning — future resilience
  {
    id: "swtc-268",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of museum learning, museums can make complex subjects accessible through objects, stories, and interactive displays. For example, school partnerships and digital collections can extend learning beyond gallery visits. Nevertheless, entry costs, distance, and limited accessibility can exclude some audiences. An effective response should recognise future resilience and ensure that inclusive design and community collaboration can broaden participation."
    }
  },
  // museum learning — ethical considerations
  {
    id: "swtc-269",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of museum learning, museums can make complex subjects accessible through objects, stories, and interactive displays. For example, school partnerships and digital collections can extend learning beyond gallery visits. Nevertheless, entry costs, distance, and limited accessibility can exclude some audiences. An effective response should recognise ethical considerations and ensure that inclusive design and community collaboration can broaden participation."
    }
  },
  // museum learning — measurement and evidence
  {
    id: "swtc-270",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of museum learning, museums can make complex subjects accessible through objects, stories, and interactive displays. For example, school partnerships and digital collections can extend learning beyond gallery visits. Nevertheless, entry costs, distance, and limited accessibility can exclude some audiences. An effective response should recognise measurement and evidence and ensure that inclusive design and community collaboration can broaden participation."
    }
  },
  // circular economy — access and equality
  {
    id: "swtc-271",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of circular economy, a circular economy aims to keep materials in use for as long as possible. For example, repair, reuse, and product redesign can reduce waste and dependence on raw materials. Nevertheless, existing supply chains and consumer habits are often built around disposable products. An effective response should recognise access and equality and ensure that business incentives and public policy must support a gradual system-wide change."
    }
  },
  // circular economy — economic effects
  {
    id: "swtc-272",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of circular economy, a circular economy aims to keep materials in use for as long as possible. For example, repair, reuse, and product redesign can reduce waste and dependence on raw materials. Nevertheless, existing supply chains and consumer habits are often built around disposable products. An effective response should recognise economic effects and ensure that business incentives and public policy must support a gradual system-wide change."
    }
  },
  // circular economy — technology and innovation
  {
    id: "swtc-273",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of circular economy, a circular economy aims to keep materials in use for as long as possible. For example, repair, reuse, and product redesign can reduce waste and dependence on raw materials. Nevertheless, existing supply chains and consumer habits are often built around disposable products. An effective response should recognise technology and innovation and ensure that business incentives and public policy must support a gradual system-wide change."
    }
  },
  // circular economy — environmental impact
  {
    id: "swtc-274",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of circular economy, a circular economy aims to keep materials in use for as long as possible. For example, repair, reuse, and product redesign can reduce waste and dependence on raw materials. Nevertheless, existing supply chains and consumer habits are often built around disposable products. An effective response should recognise environmental impact and ensure that business incentives and public policy must support a gradual system-wide change."
    }
  },
  // circular economy — community participation
  {
    id: "swtc-275",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of circular economy, a circular economy aims to keep materials in use for as long as possible. For example, repair, reuse, and product redesign can reduce waste and dependence on raw materials. Nevertheless, existing supply chains and consumer habits are often built around disposable products. An effective response should recognise community participation and ensure that business incentives and public policy must support a gradual system-wide change."
    }
  },
  // circular economy — education and skills
  {
    id: "swtc-276",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of circular economy, a circular economy aims to keep materials in use for as long as possible. For example, repair, reuse, and product redesign can reduce waste and dependence on raw materials. Nevertheless, existing supply chains and consumer habits are often built around disposable products. An effective response should recognise education and skills and ensure that business incentives and public policy must support a gradual system-wide change."
    }
  },
  // circular economy — governance and accountability
  {
    id: "swtc-277",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of circular economy, a circular economy aims to keep materials in use for as long as possible. For example, repair, reuse, and product redesign can reduce waste and dependence on raw materials. Nevertheless, existing supply chains and consumer habits are often built around disposable products. An effective response should recognise governance and accountability and ensure that business incentives and public policy must support a gradual system-wide change."
    }
  },
  // circular economy — future resilience
  {
    id: "swtc-278",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of circular economy, a circular economy aims to keep materials in use for as long as possible. For example, repair, reuse, and product redesign can reduce waste and dependence on raw materials. Nevertheless, existing supply chains and consumer habits are often built around disposable products. An effective response should recognise future resilience and ensure that business incentives and public policy must support a gradual system-wide change."
    }
  },
  // circular economy — ethical considerations
  {
    id: "swtc-279",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of circular economy, a circular economy aims to keep materials in use for as long as possible. For example, repair, reuse, and product redesign can reduce waste and dependence on raw materials. Nevertheless, existing supply chains and consumer habits are often built around disposable products. An effective response should recognise ethical considerations and ensure that business incentives and public policy must support a gradual system-wide change."
    }
  },
  // circular economy — measurement and evidence
  {
    id: "swtc-280",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of circular economy, a circular economy aims to keep materials in use for as long as possible. For example, repair, reuse, and product redesign can reduce waste and dependence on raw materials. Nevertheless, existing supply chains and consumer habits are often built around disposable products. An effective response should recognise measurement and evidence and ensure that business incentives and public policy must support a gradual system-wide change."
    }
  },
  // workplace diversity — access and equality
  {
    id: "swtc-281",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of workplace diversity, workplace diversity can bring different experiences and perspectives into decision-making. For example, inclusive teams may understand customers better and identify a wider range of solutions. Nevertheless, unfair recruitment practices and weak management can prevent genuine participation. An effective response should recognise access and equality and ensure that organisations should measure inclusion and make accountability part of leadership."
    }
  },
  // workplace diversity — economic effects
  {
    id: "swtc-282",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of workplace diversity, workplace diversity can bring different experiences and perspectives into decision-making. For example, inclusive teams may understand customers better and identify a wider range of solutions. Nevertheless, unfair recruitment practices and weak management can prevent genuine participation. An effective response should recognise economic effects and ensure that organisations should measure inclusion and make accountability part of leadership."
    }
  },
  // workplace diversity — technology and innovation
  {
    id: "swtc-283",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of workplace diversity, workplace diversity can bring different experiences and perspectives into decision-making. For example, inclusive teams may understand customers better and identify a wider range of solutions. Nevertheless, unfair recruitment practices and weak management can prevent genuine participation. An effective response should recognise technology and innovation and ensure that organisations should measure inclusion and make accountability part of leadership."
    }
  },
  // workplace diversity — environmental impact
  {
    id: "swtc-284",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of workplace diversity, workplace diversity can bring different experiences and perspectives into decision-making. For example, inclusive teams may understand customers better and identify a wider range of solutions. Nevertheless, unfair recruitment practices and weak management can prevent genuine participation. An effective response should recognise environmental impact and ensure that organisations should measure inclusion and make accountability part of leadership."
    }
  },
  // workplace diversity — community participation
  {
    id: "swtc-285",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of workplace diversity, workplace diversity can bring different experiences and perspectives into decision-making. For example, inclusive teams may understand customers better and identify a wider range of solutions. Nevertheless, unfair recruitment practices and weak management can prevent genuine participation. An effective response should recognise community participation and ensure that organisations should measure inclusion and make accountability part of leadership."
    }
  },
  // workplace diversity — education and skills
  {
    id: "swtc-286",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of workplace diversity, workplace diversity can bring different experiences and perspectives into decision-making. For example, inclusive teams may understand customers better and identify a wider range of solutions. Nevertheless, unfair recruitment practices and weak management can prevent genuine participation. An effective response should recognise education and skills and ensure that organisations should measure inclusion and make accountability part of leadership."
    }
  },
  // workplace diversity — governance and accountability
  {
    id: "swtc-287",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of workplace diversity, workplace diversity can bring different experiences and perspectives into decision-making. For example, inclusive teams may understand customers better and identify a wider range of solutions. Nevertheless, unfair recruitment practices and weak management can prevent genuine participation. An effective response should recognise governance and accountability and ensure that organisations should measure inclusion and make accountability part of leadership."
    }
  },
  // workplace diversity — future resilience
  {
    id: "swtc-288",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of workplace diversity, workplace diversity can bring different experiences and perspectives into decision-making. For example, inclusive teams may understand customers better and identify a wider range of solutions. Nevertheless, unfair recruitment practices and weak management can prevent genuine participation. An effective response should recognise future resilience and ensure that organisations should measure inclusion and make accountability part of leadership."
    }
  },
  // workplace diversity — ethical considerations
  {
    id: "swtc-289",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of workplace diversity, workplace diversity can bring different experiences and perspectives into decision-making. For example, inclusive teams may understand customers better and identify a wider range of solutions. Nevertheless, unfair recruitment practices and weak management can prevent genuine participation. An effective response should recognise ethical considerations and ensure that organisations should measure inclusion and make accountability part of leadership."
    }
  },
  // workplace diversity — measurement and evidence
  {
    id: "swtc-290",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of workplace diversity, workplace diversity can bring different experiences and perspectives into decision-making. For example, inclusive teams may understand customers better and identify a wider range of solutions. Nevertheless, unfair recruitment practices and weak management can prevent genuine participation. An effective response should recognise measurement and evidence and ensure that organisations should measure inclusion and make accountability part of leadership."
    }
  },
  // tourism management — access and equality
  {
    id: "swtc-291",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of tourism management, tourism can support local employment while placing pressure on destinations. For example, responsible planning can protect natural and cultural attractions while sharing economic benefits. Nevertheless, crowding, seasonal work, and environmental damage can reduce residents' quality of life. An effective response should recognise access and equality and ensure that destinations need visitor strategies shaped by local communities."
    }
  },
  // tourism management — economic effects
  {
    id: "swtc-292",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of tourism management, tourism can support local employment while placing pressure on destinations. For example, responsible planning can protect natural and cultural attractions while sharing economic benefits. Nevertheless, crowding, seasonal work, and environmental damage can reduce residents' quality of life. An effective response should recognise economic effects and ensure that destinations need visitor strategies shaped by local communities."
    }
  },
  // tourism management — technology and innovation
  {
    id: "swtc-293",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of tourism management, tourism can support local employment while placing pressure on destinations. For example, responsible planning can protect natural and cultural attractions while sharing economic benefits. Nevertheless, crowding, seasonal work, and environmental damage can reduce residents' quality of life. An effective response should recognise technology and innovation and ensure that destinations need visitor strategies shaped by local communities."
    }
  },
  // tourism management — environmental impact
  {
    id: "swtc-294",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of tourism management, tourism can support local employment while placing pressure on destinations. For example, responsible planning can protect natural and cultural attractions while sharing economic benefits. Nevertheless, crowding, seasonal work, and environmental damage can reduce residents' quality of life. An effective response should recognise environmental impact and ensure that destinations need visitor strategies shaped by local communities."
    }
  },
  // tourism management — community participation
  {
    id: "swtc-295",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of tourism management, tourism can support local employment while placing pressure on destinations. For example, responsible planning can protect natural and cultural attractions while sharing economic benefits. Nevertheless, crowding, seasonal work, and environmental damage can reduce residents' quality of life. An effective response should recognise community participation and ensure that destinations need visitor strategies shaped by local communities."
    }
  },
  // tourism management — education and skills
  {
    id: "swtc-296",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of tourism management, tourism can support local employment while placing pressure on destinations. For example, responsible planning can protect natural and cultural attractions while sharing economic benefits. Nevertheless, crowding, seasonal work, and environmental damage can reduce residents' quality of life. An effective response should recognise education and skills and ensure that destinations need visitor strategies shaped by local communities."
    }
  },
  // tourism management — governance and accountability
  {
    id: "swtc-297",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of tourism management, tourism can support local employment while placing pressure on destinations. For example, responsible planning can protect natural and cultural attractions while sharing economic benefits. Nevertheless, crowding, seasonal work, and environmental damage can reduce residents' quality of life. An effective response should recognise governance and accountability and ensure that destinations need visitor strategies shaped by local communities."
    }
  },
  // tourism management — future resilience
  {
    id: "swtc-298",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of tourism management, tourism can support local employment while placing pressure on destinations. For example, responsible planning can protect natural and cultural attractions while sharing economic benefits. Nevertheless, crowding, seasonal work, and environmental damage can reduce residents' quality of life. An effective response should recognise future resilience and ensure that destinations need visitor strategies shaped by local communities."
    }
  },
  // tourism management — ethical considerations
  {
    id: "swtc-299",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of tourism management, tourism can support local employment while placing pressure on destinations. For example, responsible planning can protect natural and cultural attractions while sharing economic benefits. Nevertheless, crowding, seasonal work, and environmental damage can reduce residents' quality of life. An effective response should recognise ethical considerations and ensure that destinations need visitor strategies shaped by local communities."
    }
  },
  // tourism management — measurement and evidence
  {
    id: "swtc-300",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of tourism management, tourism can support local employment while placing pressure on destinations. For example, responsible planning can protect natural and cultural attractions while sharing economic benefits. Nevertheless, crowding, seasonal work, and environmental damage can reduce residents' quality of life. An effective response should recognise measurement and evidence and ensure that destinations need visitor strategies shaped by local communities."
    }
  },
  // scientific communication — access and equality
  {
    id: "swtc-301",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of scientific communication, scientific communication connects researchers with policymakers and the public. For example, clear explanations can help people understand evidence and make informed choices. Nevertheless, technical language and sensational reporting may distort complex findings. An effective response should recognise access and equality and ensure that institutions should reward accuracy, openness, and accessible communication."
    }
  },
  // scientific communication — economic effects
  {
    id: "swtc-302",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of scientific communication, scientific communication connects researchers with policymakers and the public. For example, clear explanations can help people understand evidence and make informed choices. Nevertheless, technical language and sensational reporting may distort complex findings. An effective response should recognise economic effects and ensure that institutions should reward accuracy, openness, and accessible communication."
    }
  },
  // scientific communication — technology and innovation
  {
    id: "swtc-303",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of scientific communication, scientific communication connects researchers with policymakers and the public. For example, clear explanations can help people understand evidence and make informed choices. Nevertheless, technical language and sensational reporting may distort complex findings. An effective response should recognise technology and innovation and ensure that institutions should reward accuracy, openness, and accessible communication."
    }
  },
  // scientific communication — environmental impact
  {
    id: "swtc-304",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of scientific communication, scientific communication connects researchers with policymakers and the public. For example, clear explanations can help people understand evidence and make informed choices. Nevertheless, technical language and sensational reporting may distort complex findings. An effective response should recognise environmental impact and ensure that institutions should reward accuracy, openness, and accessible communication."
    }
  },
  // scientific communication — community participation
  {
    id: "swtc-305",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of scientific communication, scientific communication connects researchers with policymakers and the public. For example, clear explanations can help people understand evidence and make informed choices. Nevertheless, technical language and sensational reporting may distort complex findings. An effective response should recognise community participation and ensure that institutions should reward accuracy, openness, and accessible communication."
    }
  },
  // scientific communication — education and skills
  {
    id: "swtc-306",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of scientific communication, scientific communication connects researchers with policymakers and the public. For example, clear explanations can help people understand evidence and make informed choices. Nevertheless, technical language and sensational reporting may distort complex findings. An effective response should recognise education and skills and ensure that institutions should reward accuracy, openness, and accessible communication."
    }
  },
  // scientific communication — governance and accountability
  {
    id: "swtc-307",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of scientific communication, scientific communication connects researchers with policymakers and the public. For example, clear explanations can help people understand evidence and make informed choices. Nevertheless, technical language and sensational reporting may distort complex findings. An effective response should recognise governance and accountability and ensure that institutions should reward accuracy, openness, and accessible communication."
    }
  },
  // scientific communication — future resilience
  {
    id: "swtc-308",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of scientific communication, scientific communication connects researchers with policymakers and the public. For example, clear explanations can help people understand evidence and make informed choices. Nevertheless, technical language and sensational reporting may distort complex findings. An effective response should recognise future resilience and ensure that institutions should reward accuracy, openness, and accessible communication."
    }
  },
  // scientific communication — ethical considerations
  {
    id: "swtc-309",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of scientific communication, scientific communication connects researchers with policymakers and the public. For example, clear explanations can help people understand evidence and make informed choices. Nevertheless, technical language and sensational reporting may distort complex findings. An effective response should recognise ethical considerations and ensure that institutions should reward accuracy, openness, and accessible communication."
    }
  },
  // scientific communication — measurement and evidence
  {
    id: "swtc-310",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of scientific communication, scientific communication connects researchers with policymakers and the public. For example, clear explanations can help people understand evidence and make informed choices. Nevertheless, technical language and sensational reporting may distort complex findings. An effective response should recognise measurement and evidence and ensure that institutions should reward accuracy, openness, and accessible communication."
    }
  },
  // accessible design — access and equality
  {
    id: "swtc-311",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of accessible design, accessible design enables people with different abilities to use buildings, services, and technology. For example, inclusive features often make products and public spaces easier for everyone to use. Nevertheless, late consultation and limited budgets can lead to costly barriers. An effective response should recognise access and equality and ensure that designers should involve users early and test solutions in real settings."
    }
  },
  // accessible design — economic effects
  {
    id: "swtc-312",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of accessible design, accessible design enables people with different abilities to use buildings, services, and technology. For example, inclusive features often make products and public spaces easier for everyone to use. Nevertheless, late consultation and limited budgets can lead to costly barriers. An effective response should recognise economic effects and ensure that designers should involve users early and test solutions in real settings."
    }
  },
  // accessible design — technology and innovation
  {
    id: "swtc-313",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of accessible design, accessible design enables people with different abilities to use buildings, services, and technology. For example, inclusive features often make products and public spaces easier for everyone to use. Nevertheless, late consultation and limited budgets can lead to costly barriers. An effective response should recognise technology and innovation and ensure that designers should involve users early and test solutions in real settings."
    }
  },
  // accessible design — environmental impact
  {
    id: "swtc-314",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of accessible design, accessible design enables people with different abilities to use buildings, services, and technology. For example, inclusive features often make products and public spaces easier for everyone to use. Nevertheless, late consultation and limited budgets can lead to costly barriers. An effective response should recognise environmental impact and ensure that designers should involve users early and test solutions in real settings."
    }
  },
  // accessible design — community participation
  {
    id: "swtc-315",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of accessible design, accessible design enables people with different abilities to use buildings, services, and technology. For example, inclusive features often make products and public spaces easier for everyone to use. Nevertheless, late consultation and limited budgets can lead to costly barriers. An effective response should recognise community participation and ensure that designers should involve users early and test solutions in real settings."
    }
  },
  // accessible design — education and skills
  {
    id: "swtc-316",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of accessible design, accessible design enables people with different abilities to use buildings, services, and technology. For example, inclusive features often make products and public spaces easier for everyone to use. Nevertheless, late consultation and limited budgets can lead to costly barriers. An effective response should recognise education and skills and ensure that designers should involve users early and test solutions in real settings."
    }
  },
  // accessible design — governance and accountability
  {
    id: "swtc-317",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of accessible design, accessible design enables people with different abilities to use buildings, services, and technology. For example, inclusive features often make products and public spaces easier for everyone to use. Nevertheless, late consultation and limited budgets can lead to costly barriers. An effective response should recognise governance and accountability and ensure that designers should involve users early and test solutions in real settings."
    }
  },
  // accessible design — future resilience
  {
    id: "swtc-318",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of accessible design, accessible design enables people with different abilities to use buildings, services, and technology. For example, inclusive features often make products and public spaces easier for everyone to use. Nevertheless, late consultation and limited budgets can lead to costly barriers. An effective response should recognise future resilience and ensure that designers should involve users early and test solutions in real settings."
    }
  },
  // accessible design — ethical considerations
  {
    id: "swtc-319",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of accessible design, accessible design enables people with different abilities to use buildings, services, and technology. For example, inclusive features often make products and public spaces easier for everyone to use. Nevertheless, late consultation and limited budgets can lead to costly barriers. An effective response should recognise ethical considerations and ensure that designers should involve users early and test solutions in real settings."
    }
  },
  // accessible design — measurement and evidence
  {
    id: "swtc-320",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of accessible design, accessible design enables people with different abilities to use buildings, services, and technology. For example, inclusive features often make products and public spaces easier for everyone to use. Nevertheless, late consultation and limited budgets can lead to costly barriers. An effective response should recognise measurement and evidence and ensure that designers should involve users early and test solutions in real settings."
    }
  },
  // regional development — access and equality
  {
    id: "swtc-321",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of regional development, regional development aims to create opportunities beyond major economic centres. For example, investment in transport, education, and digital infrastructure can support local employment. Nevertheless, poor coordination and uneven funding may deepen regional inequalities. An effective response should recognise access and equality and ensure that strategies should build on local strengths and include measurable community goals."
    }
  },
  // regional development — economic effects
  {
    id: "swtc-322",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of regional development, regional development aims to create opportunities beyond major economic centres. For example, investment in transport, education, and digital infrastructure can support local employment. Nevertheless, poor coordination and uneven funding may deepen regional inequalities. An effective response should recognise economic effects and ensure that strategies should build on local strengths and include measurable community goals."
    }
  },
  // regional development — technology and innovation
  {
    id: "swtc-323",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of regional development, regional development aims to create opportunities beyond major economic centres. For example, investment in transport, education, and digital infrastructure can support local employment. Nevertheless, poor coordination and uneven funding may deepen regional inequalities. An effective response should recognise technology and innovation and ensure that strategies should build on local strengths and include measurable community goals."
    }
  },
  // regional development — environmental impact
  {
    id: "swtc-324",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of regional development, regional development aims to create opportunities beyond major economic centres. For example, investment in transport, education, and digital infrastructure can support local employment. Nevertheless, poor coordination and uneven funding may deepen regional inequalities. An effective response should recognise environmental impact and ensure that strategies should build on local strengths and include measurable community goals."
    }
  },
  // regional development — community participation
  {
    id: "swtc-325",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of regional development, regional development aims to create opportunities beyond major economic centres. For example, investment in transport, education, and digital infrastructure can support local employment. Nevertheless, poor coordination and uneven funding may deepen regional inequalities. An effective response should recognise community participation and ensure that strategies should build on local strengths and include measurable community goals."
    }
  },
  // regional development — education and skills
  {
    id: "swtc-326",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of regional development, regional development aims to create opportunities beyond major economic centres. For example, investment in transport, education, and digital infrastructure can support local employment. Nevertheless, poor coordination and uneven funding may deepen regional inequalities. An effective response should recognise education and skills and ensure that strategies should build on local strengths and include measurable community goals."
    }
  },
  // regional development — governance and accountability
  {
    id: "swtc-327",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of regional development, regional development aims to create opportunities beyond major economic centres. For example, investment in transport, education, and digital infrastructure can support local employment. Nevertheless, poor coordination and uneven funding may deepen regional inequalities. An effective response should recognise governance and accountability and ensure that strategies should build on local strengths and include measurable community goals."
    }
  },
  // regional development — future resilience
  {
    id: "swtc-328",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of regional development, regional development aims to create opportunities beyond major economic centres. For example, investment in transport, education, and digital infrastructure can support local employment. Nevertheless, poor coordination and uneven funding may deepen regional inequalities. An effective response should recognise future resilience and ensure that strategies should build on local strengths and include measurable community goals."
    }
  },
  // regional development — ethical considerations
  {
    id: "swtc-329",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of regional development, regional development aims to create opportunities beyond major economic centres. For example, investment in transport, education, and digital infrastructure can support local employment. Nevertheless, poor coordination and uneven funding may deepen regional inequalities. An effective response should recognise ethical considerations and ensure that strategies should build on local strengths and include measurable community goals."
    }
  },
  // regional development — measurement and evidence
  {
    id: "swtc-330",
    type: "summarize-written-text-core",
    title: "Summarize Written Text (Core)",
    instruction: "Read the passage and summarize it in ONE sentence (5-75 words).",
    timeLimit: 600,
    minWords: 5,
    maxWords: 75,
    difficulty: "hard",
    content: {
      sourceText: "In discussions of regional development, regional development aims to create opportunities beyond major economic centres. For example, investment in transport, education, and digital infrastructure can support local employment. Nevertheless, poor coordination and uneven funding may deepen regional inequalities. An effective response should recognise measurement and evidence and ensure that strategies should build on local strengths and include measurable community goals."
    }
  },
  // urban transport
  {
    id: "wem-1",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a resident who has noticed a problem related to urban transport in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // urban transport
  {
    id: "wem-2",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You recently attended a workshop about urban transport. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // urban transport
  {
    id: "wem-3",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your workplace is considering a new policy about urban transport. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // urban transport
  {
    id: "wem-4",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a student completing a project on urban transport. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // urban transport
  {
    id: "wem-5",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with urban transport. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // urban transport
  {
    id: "wem-6",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your community group plans an event focused on urban transport. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // urban transport
  {
    id: "wem-7",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You have found a useful resource about urban transport. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // urban transport
  {
    id: "wem-8",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A recent change has affected your plans involving urban transport. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // urban transport
  {
    id: "wem-9",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You volunteered for a project related to urban transport and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // urban transport
  {
    id: "wem-10",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are preparing a short report about urban transport. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // public health
  {
    id: "wem-11",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a resident who has noticed a problem related to public health in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // public health
  {
    id: "wem-12",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You recently attended a workshop about public health. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // public health
  {
    id: "wem-13",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your workplace is considering a new policy about public health. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // public health
  {
    id: "wem-14",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a student completing a project on public health. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // public health
  {
    id: "wem-15",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with public health. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // public health
  {
    id: "wem-16",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your community group plans an event focused on public health. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // public health
  {
    id: "wem-17",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You have found a useful resource about public health. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // public health
  {
    id: "wem-18",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A recent change has affected your plans involving public health. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // public health
  {
    id: "wem-19",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You volunteered for a project related to public health and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // public health
  {
    id: "wem-20",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are preparing a short report about public health. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // digital education
  {
    id: "wem-21",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a resident who has noticed a problem related to digital education in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // digital education
  {
    id: "wem-22",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You recently attended a workshop about digital education. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // digital education
  {
    id: "wem-23",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your workplace is considering a new policy about digital education. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // digital education
  {
    id: "wem-24",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a student completing a project on digital education. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // digital education
  {
    id: "wem-25",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with digital education. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // digital education
  {
    id: "wem-26",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your community group plans an event focused on digital education. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // digital education
  {
    id: "wem-27",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You have found a useful resource about digital education. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // digital education
  {
    id: "wem-28",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A recent change has affected your plans involving digital education. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // digital education
  {
    id: "wem-29",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You volunteered for a project related to digital education and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // digital education
  {
    id: "wem-30",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are preparing a short report about digital education. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // biodiversity
  {
    id: "wem-31",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a resident who has noticed a problem related to biodiversity in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // biodiversity
  {
    id: "wem-32",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You recently attended a workshop about biodiversity. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // biodiversity
  {
    id: "wem-33",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your workplace is considering a new policy about biodiversity. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // biodiversity
  {
    id: "wem-34",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a student completing a project on biodiversity. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // biodiversity
  {
    id: "wem-35",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with biodiversity. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // biodiversity
  {
    id: "wem-36",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your community group plans an event focused on biodiversity. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // biodiversity
  {
    id: "wem-37",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You have found a useful resource about biodiversity. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // biodiversity
  {
    id: "wem-38",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A recent change has affected your plans involving biodiversity. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // biodiversity
  {
    id: "wem-39",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You volunteered for a project related to biodiversity and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // biodiversity
  {
    id: "wem-40",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are preparing a short report about biodiversity. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // renewable energy
  {
    id: "wem-41",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a resident who has noticed a problem related to renewable energy in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // renewable energy
  {
    id: "wem-42",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You recently attended a workshop about renewable energy. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // renewable energy
  {
    id: "wem-43",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your workplace is considering a new policy about renewable energy. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // renewable energy
  {
    id: "wem-44",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a student completing a project on renewable energy. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // renewable energy
  {
    id: "wem-45",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with renewable energy. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // renewable energy
  {
    id: "wem-46",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your community group plans an event focused on renewable energy. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // renewable energy
  {
    id: "wem-47",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You have found a useful resource about renewable energy. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // renewable energy
  {
    id: "wem-48",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A recent change has affected your plans involving renewable energy. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // renewable energy
  {
    id: "wem-49",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You volunteered for a project related to renewable energy and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // renewable energy
  {
    id: "wem-50",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are preparing a short report about renewable energy. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // workplace flexibility
  {
    id: "wem-51",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a resident who has noticed a problem related to workplace flexibility in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // workplace flexibility
  {
    id: "wem-52",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You recently attended a workshop about workplace flexibility. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // workplace flexibility
  {
    id: "wem-53",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your workplace is considering a new policy about workplace flexibility. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // workplace flexibility
  {
    id: "wem-54",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a student completing a project on workplace flexibility. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // workplace flexibility
  {
    id: "wem-55",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with workplace flexibility. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // workplace flexibility
  {
    id: "wem-56",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your community group plans an event focused on workplace flexibility. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // workplace flexibility
  {
    id: "wem-57",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You have found a useful resource about workplace flexibility. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // workplace flexibility
  {
    id: "wem-58",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A recent change has affected your plans involving workplace flexibility. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // workplace flexibility
  {
    id: "wem-59",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You volunteered for a project related to workplace flexibility and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // workplace flexibility
  {
    id: "wem-60",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are preparing a short report about workplace flexibility. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // financial literacy
  {
    id: "wem-61",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a resident who has noticed a problem related to financial literacy in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // financial literacy
  {
    id: "wem-62",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You recently attended a workshop about financial literacy. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // financial literacy
  {
    id: "wem-63",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your workplace is considering a new policy about financial literacy. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // financial literacy
  {
    id: "wem-64",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a student completing a project on financial literacy. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // financial literacy
  {
    id: "wem-65",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with financial literacy. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // financial literacy
  {
    id: "wem-66",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your community group plans an event focused on financial literacy. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // financial literacy
  {
    id: "wem-67",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You have found a useful resource about financial literacy. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // financial literacy
  {
    id: "wem-68",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A recent change has affected your plans involving financial literacy. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // financial literacy
  {
    id: "wem-69",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You volunteered for a project related to financial literacy and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // financial literacy
  {
    id: "wem-70",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are preparing a short report about financial literacy. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // food security
  {
    id: "wem-71",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a resident who has noticed a problem related to food security in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // food security
  {
    id: "wem-72",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You recently attended a workshop about food security. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // food security
  {
    id: "wem-73",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your workplace is considering a new policy about food security. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // food security
  {
    id: "wem-74",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a student completing a project on food security. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // food security
  {
    id: "wem-75",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with food security. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // food security
  {
    id: "wem-76",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your community group plans an event focused on food security. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // food security
  {
    id: "wem-77",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You have found a useful resource about food security. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // food security
  {
    id: "wem-78",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A recent change has affected your plans involving food security. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // food security
  {
    id: "wem-79",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You volunteered for a project related to food security and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // food security
  {
    id: "wem-80",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are preparing a short report about food security. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // urban green space
  {
    id: "wem-81",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a resident who has noticed a problem related to urban green space in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // urban green space
  {
    id: "wem-82",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You recently attended a workshop about urban green space. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // urban green space
  {
    id: "wem-83",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your workplace is considering a new policy about urban green space. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // urban green space
  {
    id: "wem-84",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a student completing a project on urban green space. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // urban green space
  {
    id: "wem-85",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with urban green space. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // urban green space
  {
    id: "wem-86",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your community group plans an event focused on urban green space. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // urban green space
  {
    id: "wem-87",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You have found a useful resource about urban green space. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // urban green space
  {
    id: "wem-88",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A recent change has affected your plans involving urban green space. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // urban green space
  {
    id: "wem-89",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You volunteered for a project related to urban green space and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // urban green space
  {
    id: "wem-90",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are preparing a short report about urban green space. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // artificial intelligence
  {
    id: "wem-91",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a resident who has noticed a problem related to artificial intelligence in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // artificial intelligence
  {
    id: "wem-92",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You recently attended a workshop about artificial intelligence. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // artificial intelligence
  {
    id: "wem-93",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your workplace is considering a new policy about artificial intelligence. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // artificial intelligence
  {
    id: "wem-94",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are a student completing a project on artificial intelligence. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // artificial intelligence
  {
    id: "wem-95",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with artificial intelligence. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // artificial intelligence
  {
    id: "wem-96",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "Your community group plans an event focused on artificial intelligence. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // artificial intelligence
  {
    id: "wem-97",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You have found a useful resource about artificial intelligence. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // artificial intelligence
  {
    id: "wem-98",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "A recent change has affected your plans involving artificial intelligence. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // artificial intelligence
  {
    id: "wem-99",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You volunteered for a project related to artificial intelligence and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // artificial intelligence
  {
    id: "wem-100",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "easy",
    content: {
      emailContext: "You are preparing a short report about artificial intelligence. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // water conservation
  {
    id: "wem-101",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a resident who has noticed a problem related to water conservation in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // water conservation
  {
    id: "wem-102",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You recently attended a workshop about water conservation. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // water conservation
  {
    id: "wem-103",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your workplace is considering a new policy about water conservation. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // water conservation
  {
    id: "wem-104",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a student completing a project on water conservation. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // water conservation
  {
    id: "wem-105",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with water conservation. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // water conservation
  {
    id: "wem-106",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your community group plans an event focused on water conservation. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // water conservation
  {
    id: "wem-107",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You have found a useful resource about water conservation. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // water conservation
  {
    id: "wem-108",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A recent change has affected your plans involving water conservation. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // water conservation
  {
    id: "wem-109",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You volunteered for a project related to water conservation and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // water conservation
  {
    id: "wem-110",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are preparing a short report about water conservation. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // cultural heritage
  {
    id: "wem-111",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a resident who has noticed a problem related to cultural heritage in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // cultural heritage
  {
    id: "wem-112",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You recently attended a workshop about cultural heritage. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // cultural heritage
  {
    id: "wem-113",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your workplace is considering a new policy about cultural heritage. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // cultural heritage
  {
    id: "wem-114",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a student completing a project on cultural heritage. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // cultural heritage
  {
    id: "wem-115",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with cultural heritage. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // cultural heritage
  {
    id: "wem-116",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your community group plans an event focused on cultural heritage. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // cultural heritage
  {
    id: "wem-117",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You have found a useful resource about cultural heritage. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // cultural heritage
  {
    id: "wem-118",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A recent change has affected your plans involving cultural heritage. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // cultural heritage
  {
    id: "wem-119",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You volunteered for a project related to cultural heritage and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // cultural heritage
  {
    id: "wem-120",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are preparing a short report about cultural heritage. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // scientific research
  {
    id: "wem-121",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a resident who has noticed a problem related to scientific research in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // scientific research
  {
    id: "wem-122",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You recently attended a workshop about scientific research. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // scientific research
  {
    id: "wem-123",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your workplace is considering a new policy about scientific research. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // scientific research
  {
    id: "wem-124",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a student completing a project on scientific research. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // scientific research
  {
    id: "wem-125",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with scientific research. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // scientific research
  {
    id: "wem-126",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your community group plans an event focused on scientific research. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // scientific research
  {
    id: "wem-127",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You have found a useful resource about scientific research. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // scientific research
  {
    id: "wem-128",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A recent change has affected your plans involving scientific research. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // scientific research
  {
    id: "wem-129",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You volunteered for a project related to scientific research and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // scientific research
  {
    id: "wem-130",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are preparing a short report about scientific research. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // ocean pollution
  {
    id: "wem-131",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a resident who has noticed a problem related to ocean pollution in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // ocean pollution
  {
    id: "wem-132",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You recently attended a workshop about ocean pollution. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // ocean pollution
  {
    id: "wem-133",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your workplace is considering a new policy about ocean pollution. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // ocean pollution
  {
    id: "wem-134",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a student completing a project on ocean pollution. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // ocean pollution
  {
    id: "wem-135",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with ocean pollution. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // ocean pollution
  {
    id: "wem-136",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your community group plans an event focused on ocean pollution. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // ocean pollution
  {
    id: "wem-137",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You have found a useful resource about ocean pollution. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // ocean pollution
  {
    id: "wem-138",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A recent change has affected your plans involving ocean pollution. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // ocean pollution
  {
    id: "wem-139",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You volunteered for a project related to ocean pollution and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // ocean pollution
  {
    id: "wem-140",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are preparing a short report about ocean pollution. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // aging populations
  {
    id: "wem-141",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a resident who has noticed a problem related to aging populations in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // aging populations
  {
    id: "wem-142",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You recently attended a workshop about aging populations. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // aging populations
  {
    id: "wem-143",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your workplace is considering a new policy about aging populations. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // aging populations
  {
    id: "wem-144",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a student completing a project on aging populations. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // aging populations
  {
    id: "wem-145",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with aging populations. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // aging populations
  {
    id: "wem-146",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your community group plans an event focused on aging populations. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // aging populations
  {
    id: "wem-147",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You have found a useful resource about aging populations. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // aging populations
  {
    id: "wem-148",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A recent change has affected your plans involving aging populations. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // aging populations
  {
    id: "wem-149",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You volunteered for a project related to aging populations and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // aging populations
  {
    id: "wem-150",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are preparing a short report about aging populations. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // public libraries
  {
    id: "wem-151",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a resident who has noticed a problem related to public libraries in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // public libraries
  {
    id: "wem-152",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You recently attended a workshop about public libraries. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // public libraries
  {
    id: "wem-153",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your workplace is considering a new policy about public libraries. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // public libraries
  {
    id: "wem-154",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a student completing a project on public libraries. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // public libraries
  {
    id: "wem-155",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with public libraries. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // public libraries
  {
    id: "wem-156",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your community group plans an event focused on public libraries. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // public libraries
  {
    id: "wem-157",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You have found a useful resource about public libraries. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // public libraries
  {
    id: "wem-158",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A recent change has affected your plans involving public libraries. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // public libraries
  {
    id: "wem-159",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You volunteered for a project related to public libraries and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // public libraries
  {
    id: "wem-160",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are preparing a short report about public libraries. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // small businesses
  {
    id: "wem-161",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a resident who has noticed a problem related to small businesses in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // small businesses
  {
    id: "wem-162",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You recently attended a workshop about small businesses. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // small businesses
  {
    id: "wem-163",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your workplace is considering a new policy about small businesses. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // small businesses
  {
    id: "wem-164",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a student completing a project on small businesses. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // small businesses
  {
    id: "wem-165",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with small businesses. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // small businesses
  {
    id: "wem-166",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your community group plans an event focused on small businesses. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // small businesses
  {
    id: "wem-167",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You have found a useful resource about small businesses. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // small businesses
  {
    id: "wem-168",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A recent change has affected your plans involving small businesses. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // small businesses
  {
    id: "wem-169",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You volunteered for a project related to small businesses and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // small businesses
  {
    id: "wem-170",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are preparing a short report about small businesses. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // disaster preparedness
  {
    id: "wem-171",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a resident who has noticed a problem related to disaster preparedness in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // disaster preparedness
  {
    id: "wem-172",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You recently attended a workshop about disaster preparedness. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // disaster preparedness
  {
    id: "wem-173",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your workplace is considering a new policy about disaster preparedness. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // disaster preparedness
  {
    id: "wem-174",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a student completing a project on disaster preparedness. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // disaster preparedness
  {
    id: "wem-175",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with disaster preparedness. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // disaster preparedness
  {
    id: "wem-176",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your community group plans an event focused on disaster preparedness. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // disaster preparedness
  {
    id: "wem-177",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You have found a useful resource about disaster preparedness. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // disaster preparedness
  {
    id: "wem-178",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A recent change has affected your plans involving disaster preparedness. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // disaster preparedness
  {
    id: "wem-179",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You volunteered for a project related to disaster preparedness and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // disaster preparedness
  {
    id: "wem-180",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are preparing a short report about disaster preparedness. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // space exploration
  {
    id: "wem-181",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a resident who has noticed a problem related to space exploration in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // space exploration
  {
    id: "wem-182",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You recently attended a workshop about space exploration. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // space exploration
  {
    id: "wem-183",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your workplace is considering a new policy about space exploration. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // space exploration
  {
    id: "wem-184",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a student completing a project on space exploration. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // space exploration
  {
    id: "wem-185",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with space exploration. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // space exploration
  {
    id: "wem-186",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your community group plans an event focused on space exploration. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // space exploration
  {
    id: "wem-187",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You have found a useful resource about space exploration. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // space exploration
  {
    id: "wem-188",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A recent change has affected your plans involving space exploration. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // space exploration
  {
    id: "wem-189",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You volunteered for a project related to space exploration and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // space exploration
  {
    id: "wem-190",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are preparing a short report about space exploration. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // mental well-being
  {
    id: "wem-191",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a resident who has noticed a problem related to mental well-being in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // mental well-being
  {
    id: "wem-192",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You recently attended a workshop about mental well-being. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // mental well-being
  {
    id: "wem-193",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your workplace is considering a new policy about mental well-being. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // mental well-being
  {
    id: "wem-194",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are a student completing a project on mental well-being. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // mental well-being
  {
    id: "wem-195",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with mental well-being. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // mental well-being
  {
    id: "wem-196",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "Your community group plans an event focused on mental well-being. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // mental well-being
  {
    id: "wem-197",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You have found a useful resource about mental well-being. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // mental well-being
  {
    id: "wem-198",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "A recent change has affected your plans involving mental well-being. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // mental well-being
  {
    id: "wem-199",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You volunteered for a project related to mental well-being and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // mental well-being
  {
    id: "wem-200",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "medium",
    content: {
      emailContext: "You are preparing a short report about mental well-being. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // ethical consumption
  {
    id: "wem-201",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to ethical consumption in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // ethical consumption
  {
    id: "wem-202",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about ethical consumption. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // ethical consumption
  {
    id: "wem-203",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about ethical consumption. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // ethical consumption
  {
    id: "wem-204",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on ethical consumption. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // ethical consumption
  {
    id: "wem-205",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with ethical consumption. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // ethical consumption
  {
    id: "wem-206",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on ethical consumption. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // ethical consumption
  {
    id: "wem-207",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about ethical consumption. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // ethical consumption
  {
    id: "wem-208",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving ethical consumption. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // ethical consumption
  {
    id: "wem-209",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to ethical consumption and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // ethical consumption
  {
    id: "wem-210",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about ethical consumption. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // language learning
  {
    id: "wem-211",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to language learning in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // language learning
  {
    id: "wem-212",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about language learning. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // language learning
  {
    id: "wem-213",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about language learning. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // language learning
  {
    id: "wem-214",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on language learning. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // language learning
  {
    id: "wem-215",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with language learning. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // language learning
  {
    id: "wem-216",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on language learning. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // language learning
  {
    id: "wem-217",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about language learning. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // language learning
  {
    id: "wem-218",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving language learning. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // language learning
  {
    id: "wem-219",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to language learning and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // language learning
  {
    id: "wem-220",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about language learning. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // agricultural technology
  {
    id: "wem-221",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to agricultural technology in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // agricultural technology
  {
    id: "wem-222",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about agricultural technology. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // agricultural technology
  {
    id: "wem-223",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about agricultural technology. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // agricultural technology
  {
    id: "wem-224",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on agricultural technology. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // agricultural technology
  {
    id: "wem-225",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with agricultural technology. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // agricultural technology
  {
    id: "wem-226",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on agricultural technology. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // agricultural technology
  {
    id: "wem-227",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about agricultural technology. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // agricultural technology
  {
    id: "wem-228",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving agricultural technology. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // agricultural technology
  {
    id: "wem-229",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to agricultural technology and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // agricultural technology
  {
    id: "wem-230",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about agricultural technology. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // public transport safety
  {
    id: "wem-231",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to public transport safety in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // public transport safety
  {
    id: "wem-232",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about public transport safety. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // public transport safety
  {
    id: "wem-233",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about public transport safety. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // public transport safety
  {
    id: "wem-234",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on public transport safety. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // public transport safety
  {
    id: "wem-235",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with public transport safety. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // public transport safety
  {
    id: "wem-236",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on public transport safety. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // public transport safety
  {
    id: "wem-237",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about public transport safety. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // public transport safety
  {
    id: "wem-238",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving public transport safety. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // public transport safety
  {
    id: "wem-239",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to public transport safety and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // public transport safety
  {
    id: "wem-240",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about public transport safety. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // online privacy
  {
    id: "wem-241",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to online privacy in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // online privacy
  {
    id: "wem-242",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about online privacy. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // online privacy
  {
    id: "wem-243",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about online privacy. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // online privacy
  {
    id: "wem-244",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on online privacy. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // online privacy
  {
    id: "wem-245",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with online privacy. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // online privacy
  {
    id: "wem-246",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on online privacy. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // online privacy
  {
    id: "wem-247",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about online privacy. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // online privacy
  {
    id: "wem-248",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving online privacy. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // online privacy
  {
    id: "wem-249",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to online privacy and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // online privacy
  {
    id: "wem-250",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about online privacy. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // volunteering
  {
    id: "wem-251",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to volunteering in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // volunteering
  {
    id: "wem-252",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about volunteering. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // volunteering
  {
    id: "wem-253",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about volunteering. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // volunteering
  {
    id: "wem-254",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on volunteering. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // volunteering
  {
    id: "wem-255",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with volunteering. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // volunteering
  {
    id: "wem-256",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on volunteering. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // volunteering
  {
    id: "wem-257",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about volunteering. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // volunteering
  {
    id: "wem-258",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving volunteering. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // volunteering
  {
    id: "wem-259",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to volunteering and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // volunteering
  {
    id: "wem-260",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about volunteering. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // museum learning
  {
    id: "wem-261",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to museum learning in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // museum learning
  {
    id: "wem-262",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about museum learning. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // museum learning
  {
    id: "wem-263",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about museum learning. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // museum learning
  {
    id: "wem-264",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on museum learning. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // museum learning
  {
    id: "wem-265",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with museum learning. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // museum learning
  {
    id: "wem-266",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on museum learning. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // museum learning
  {
    id: "wem-267",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about museum learning. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // museum learning
  {
    id: "wem-268",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving museum learning. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // museum learning
  {
    id: "wem-269",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to museum learning and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // museum learning
  {
    id: "wem-270",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about museum learning. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // circular economy
  {
    id: "wem-271",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to circular economy in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // circular economy
  {
    id: "wem-272",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about circular economy. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // circular economy
  {
    id: "wem-273",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about circular economy. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // circular economy
  {
    id: "wem-274",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on circular economy. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // circular economy
  {
    id: "wem-275",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with circular economy. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // circular economy
  {
    id: "wem-276",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on circular economy. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // circular economy
  {
    id: "wem-277",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about circular economy. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // circular economy
  {
    id: "wem-278",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving circular economy. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // circular economy
  {
    id: "wem-279",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to circular economy and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // circular economy
  {
    id: "wem-280",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about circular economy. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // workplace diversity
  {
    id: "wem-281",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to workplace diversity in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // workplace diversity
  {
    id: "wem-282",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about workplace diversity. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // workplace diversity
  {
    id: "wem-283",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about workplace diversity. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // workplace diversity
  {
    id: "wem-284",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on workplace diversity. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // workplace diversity
  {
    id: "wem-285",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with workplace diversity. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // workplace diversity
  {
    id: "wem-286",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on workplace diversity. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // workplace diversity
  {
    id: "wem-287",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about workplace diversity. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // workplace diversity
  {
    id: "wem-288",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving workplace diversity. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // workplace diversity
  {
    id: "wem-289",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to workplace diversity and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // workplace diversity
  {
    id: "wem-290",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about workplace diversity. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // tourism management
  {
    id: "wem-291",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to tourism management in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // tourism management
  {
    id: "wem-292",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about tourism management. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // tourism management
  {
    id: "wem-293",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about tourism management. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // tourism management
  {
    id: "wem-294",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on tourism management. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // tourism management
  {
    id: "wem-295",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with tourism management. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // tourism management
  {
    id: "wem-296",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on tourism management. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // tourism management
  {
    id: "wem-297",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about tourism management. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // tourism management
  {
    id: "wem-298",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving tourism management. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // tourism management
  {
    id: "wem-299",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to tourism management and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // tourism management
  {
    id: "wem-300",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about tourism management. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // scientific communication
  {
    id: "wem-301",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to scientific communication in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // scientific communication
  {
    id: "wem-302",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about scientific communication. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // scientific communication
  {
    id: "wem-303",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about scientific communication. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // scientific communication
  {
    id: "wem-304",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on scientific communication. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // scientific communication
  {
    id: "wem-305",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with scientific communication. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // scientific communication
  {
    id: "wem-306",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on scientific communication. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // scientific communication
  {
    id: "wem-307",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about scientific communication. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // scientific communication
  {
    id: "wem-308",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving scientific communication. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // scientific communication
  {
    id: "wem-309",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to scientific communication and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // scientific communication
  {
    id: "wem-310",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about scientific communication. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // accessible design
  {
    id: "wem-311",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to accessible design in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // accessible design
  {
    id: "wem-312",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about accessible design. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // accessible design
  {
    id: "wem-313",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about accessible design. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // accessible design
  {
    id: "wem-314",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on accessible design. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // accessible design
  {
    id: "wem-315",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with accessible design. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // accessible design
  {
    id: "wem-316",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on accessible design. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // accessible design
  {
    id: "wem-317",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about accessible design. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // accessible design
  {
    id: "wem-318",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving accessible design. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // accessible design
  {
    id: "wem-319",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to accessible design and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // accessible design
  {
    id: "wem-320",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about accessible design. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
  // regional development
  {
    id: "wem-321",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a resident who has noticed a problem related to regional development in your neighbourhood. Write to the local council to request action.",
      emailTasks: [
        "Describe the problem and where it occurs",
        "Explain how it affects residents",
        "Suggest a practical solution",
        "Ask when the issue can be reviewed"
      ]
    }
  },
  // regional development
  {
    id: "wem-322",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You recently attended a workshop about regional development. Write to the organiser with feedback.",
      emailTasks: [
        "Mention what you found useful",
        "Describe one area that could be improved",
        "Suggest a topic for a future session"
      ]
    }
  },
  // regional development
  {
    id: "wem-323",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your workplace is considering a new policy about regional development. Write to your manager with your recommendations.",
      emailTasks: [
        "Explain your understanding of the proposed change",
        "Describe likely benefits and concerns",
        "Recommend steps for a smooth introduction"
      ]
    }
  },
  // regional development
  {
    id: "wem-324",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are a student completing a project on regional development. Write to your instructor to request guidance.",
      emailTasks: [
        "Briefly explain your project focus",
        "Identify the difficulty you are facing",
        "Ask for specific advice or a meeting"
      ]
    }
  },
  // regional development
  {
    id: "wem-325",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A service provider has not delivered an agreed service connected with regional development. Write a formal complaint.",
      emailTasks: [
        "State what service was expected and when",
        "Explain what went wrong",
        "Describe the effect of the problem",
        "Request a clear resolution"
      ]
    }
  },
  // regional development
  {
    id: "wem-326",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "Your community group plans an event focused on regional development. Invite a local organisation to participate.",
      emailTasks: [
        "Introduce the purpose of the event",
        "Explain why the organisation's involvement would help",
        "Provide proposed date and arrangements",
        "Ask whether they can take part"
      ]
    }
  },
  // regional development
  {
    id: "wem-327",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You have found a useful resource about regional development. Write to a colleague recommending it.",
      emailTasks: [
        "Identify the resource and its main focus",
        "Explain how it could help their work",
        "Suggest how they might use it"
      ]
    }
  },
  // regional development
  {
    id: "wem-328",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "A recent change has affected your plans involving regional development. Write to the relevant office to ask for information.",
      emailTasks: [
        "Explain the change and your situation",
        "Ask what options are available",
        "Request details about deadlines or required documents"
      ]
    }
  },
  // regional development
  {
    id: "wem-329",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You volunteered for a project related to regional development and want to continue helping. Write to the coordinator.",
      emailTasks: [
        "Summarise your previous contribution",
        "Explain what role you would like to take",
        "Ask about upcoming opportunities"
      ]
    }
  },
  // regional development
  {
    id: "wem-330",
    type: "write-email",
    title: "Write Email",
    instruction: "Write an email of 50-120 words based on the given context.",
    timeLimit: 540,
    minWords: 50,
    maxWords: 120,
    difficulty: "hard",
    content: {
      emailContext: "You are preparing a short report about regional development. Write to an expert asking for an interview.",
      emailTasks: [
        "Introduce yourself and the purpose of the report",
        "Explain why their experience is relevant",
        "Suggest possible interview times",
        "Ask whether they are available"
      ]
    }
  },
];

export function getWritingQuestionsByType(type: WritingTestType): WritingQuestion[] {
  return writingQuestions.filter(q => q.type === type);
}

export function getWritingQuestionsByDifficulty(difficulty: "easy" | "medium" | "hard"): WritingQuestion[] {
  return writingQuestions.filter(q => q.difficulty === difficulty);
}

export function getWritingTestTypeInfo(type: WritingTestType) {
  const info: Record<WritingTestType, { name: string; description: string; icon: string }> = {
    "summarize-written-text": { name: "Summarize Written Text", description: "Summarize a passage in one sentence (5-75 words)", icon: "📋" },
    "write-essay": { name: "Write Essay", description: "Write an essay of 200-300 words on a given topic", icon: "✍️" },
    "summarize-written-text-core": { name: "Summarize Written Text (Core)", description: "Summarize a passage in one sentence for PTE Core", icon: "📄" },
    "write-email": { name: "Write Email", description: "Write a professional email (50-120 words)", icon: "📧" }
  };
  return info[type];
}
