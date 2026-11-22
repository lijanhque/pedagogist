import { writeFile } from "node:fs/promises";

const TYPES = {
  "read-aloud": { count: 420, prefix: "ra", prepTime: 30, recordTime: 40, title: "Read Aloud", instruction: "Read the text aloud as naturally as possible. You have 30 seconds to prepare." },
  "repeat-sentence": { count: 350, prefix: "rs", prepTime: 3, recordTime: 15, title: "Repeat Sentence", instruction: "Listen to the sentence and repeat it exactly as you heard it." },
  "describe-image": { count: 350, prefix: "di", prepTime: 25, recordTime: 40, title: "Describe Image", instruction: "Describe the image in detail. You have 25 seconds to study the image and 40 seconds to speak." },
  "retell-lecture": { count: 350, prefix: "rl", prepTime: 10, recordTime: 40, title: "Re-tell Lecture", instruction: "Listen to the lecture and re-tell it in your own words. You have 10 seconds to prepare after the audio ends." },
  "answer-short-question": { count: 350, prefix: "asq", prepTime: 3, recordTime: 10, title: "Answer Short Question", instruction: "Answer the question with a single word or a few words." },
  "summarize-group-discussion": { count: 320, prefix: "sgd", prepTime: 10, recordTime: 120, title: "Summarize Group Discussion", instruction: "Listen once to the 2–3 minute group discussion. You have 10 seconds to prepare and up to 2 minutes to summarize the main points." },
  "respond-to-situation": { count: 320, prefix: "rts", prepTime: 10, recordTime: 40, title: "Respond to Situation", instruction: "Read and listen to the situation, then respond appropriately. You have 10 seconds to prepare and 40 seconds to speak." },
};

function difficultyFor(index, total) {
  const ratio = index / total;
  if (ratio < 0.4) return "easy";
  if (ratio < 0.75) return "medium";
  return "hard";
}

// ===== READ ALOUD =====
const readAloudEasy = [
  "The library is an excellent place to study. It provides a quiet environment where students can focus on their work without distractions.",
  "Regular exercise is essential for maintaining good health. It helps strengthen the heart, improve mood, and increase energy levels throughout the day.",
  "Water covers approximately seventy percent of Earth's surface. It exists in various forms including liquid oceans, solid ice caps, and gaseous water vapor.",
  "Technology has transformed the way we communicate. Mobile phones and the internet allow people to connect instantly across great distances.",
  "The sun is the primary source of energy for life on Earth. Plants convert sunlight into food through the process of photosynthesis.",
  "Reading books helps improve vocabulary and comprehension skills. It also stimulates the imagination and reduces stress.",
  "Public transportation is an affordable way to travel in cities. Buses and trains reduce traffic congestion and air pollution.",
  "A balanced diet includes fruits, vegetables, proteins, and whole grains. Eating healthy foods supports physical and mental well-being.",
  "The weather forecast predicts rain for the weekend. Many people plan indoor activities when the weather is bad.",
  "Students often study in groups to prepare for exams. Working together helps them understand difficult concepts.",
  "The internet has made information widely accessible. People can learn about almost any topic from online resources.",
  "Recycling helps reduce waste in landfills. Many communities have programs to collect paper, plastic, and glass.",
  "Music can improve concentration and reduce anxiety. Many people listen to music while working or studying.",
  "The human body needs sleep to function properly. Most adults require seven to eight hours of sleep each night.",
  "Public parks provide green spaces in urban areas. They offer places for recreation and relaxation.",
  "Learning a second language has cognitive benefits. It improves memory and problem-solving skills.",
  "The economy depends on both large corporations and small businesses. Each plays a vital role in creating jobs.",
  "Clean water is essential for survival. Many parts of the world face challenges in accessing safe drinking water.",
  "Museums preserve cultural heritage and educate the public. They display artifacts and artworks from various periods.",
  "The education system prepares students for future careers. It teaches both academic subjects and life skills.",
  "Agriculture is the foundation of human civilization. Farmers grow crops and raise livestock to feed communities.",
  "Electric vehicles produce fewer emissions than traditional cars. They represent a shift toward sustainable transportation.",
  "The printing press revolutionized the spread of information. It made books more accessible to the general public.",
  "Space exploration has led to numerous technological advances. Satellite technology helps with communication and weather forecasting.",
  "Wildlife conservation protects endangered species. National parks and reserves provide safe habitats for animals.",
  "The stock market allows companies to raise capital. Investors buy shares in exchange for potential returns.",
  "Democracy gives citizens the power to choose their leaders. Voting is a fundamental right in democratic societies.",
  "Ocean currents regulate the Earth's climate. They distribute heat around the globe and influence weather patterns.",
  "The telephone changed the way people communicate. It allowed instant voice conversations across distances.",
  "Nutrition labels provide information about food contents. Consumers use them to make healthier choices.",
  "Public libraries offer free access to knowledge. They provide books, internet, and educational programs for all ages.",
  "Solar panels convert sunlight into electricity. They are becoming more efficient and affordable each year.",
  "The industrial revolution introduced mechanized production. It transformed economies and societies worldwide.",
  "Social media connects people across the globe. It enables instant communication and information sharing.",
  "The water cycle involves evaporation, condensation, and precipitation. It continuously circulates water through the environment.",
  "Museums often offer guided tours. Expert guides explain the history and significance of exhibits.",
  "Regular check-ups help detect health problems early. Preventive care is more effective than treating advanced diseases.",
  "The postal service has connected communities for centuries. It delivers letters and packages to every corner of the country.",
  "Cycling is an eco-friendly mode of transportation. It promotes physical fitness and reduces carbon emissions.",
  "The moon affects ocean tides through gravitational force. Tidal patterns influence coastal ecosystems.",
  "A resume summarizes a person's education and work experience. It is essential for job applications.",
  "Volcanoes can be both destructive and beneficial. Volcanic soil is often fertile for agriculture.",
  "The internet of things connects everyday devices to the web. Smart homes use sensors to automate tasks.",
  "Cultural festivals celebrate traditions and heritage. They bring communities together through music, food, and dance.",
  "The human brain contains billions of neurons. These cells communicate through electrical and chemical signals.",
  "Deserts cover about one-third of the Earth's land surface. They support unique plants and animals adapted to extreme conditions.",
  "The printing of newspapers has declined with digital media. Many people now read news on their smartphones.",
  "A budget helps individuals and families manage money. It tracks income and expenses to ensure financial stability.",
  "Rainforests are often called the lungs of the planet. They absorb carbon dioxide and produce oxygen.",
  "The Olympics bring athletes from around the world together. The games promote international friendship and competition.",
  "Antibiotics treat bacterial infections. However, overuse has led to antibiotic-resistant bacteria.",
  "Public speaking is a valuable skill in many professions. Practice and preparation help reduce nervousness.",
  "The Great Wall of China stretches thousands of miles. It was built over centuries to protect against invasions.",
  "Weather satellites monitor storms from space. They provide crucial data for meteorologists.",
  "A passport is required for international travel. It serves as official identification abroad.",
  "Renewable energy sources include wind, solar, and hydroelectric power. They are alternatives to fossil fuels.",
  "The education system varies across countries. Each nation develops its curriculum based on cultural values and needs.",
  "Museums preserve artifacts from ancient civilizations. They help us understand how people lived in the past.",
  "Traffic congestion is a problem in many large cities. Public transportation can help alleviate it.",
  "The immune system defends the body against infections. White blood cells identify and destroy harmful invaders.",
];

const readAloudMedium = [
  "Climate change represents one of the most significant challenges facing humanity today. Scientists around the world have documented rising temperatures, melting ice caps, and increasingly severe weather events. Addressing this crisis requires coordinated action from governments, businesses, and individuals alike.",
  "The development of artificial intelligence has transformed numerous industries, from healthcare to transportation. Machine learning algorithms can now analyze vast amounts of data to identify patterns that would be impossible for humans to detect. This technology continues to evolve at an unprecedented pace.",
  "Universities serve as centers of knowledge creation and dissemination, preparing students for careers across diverse fields. Research conducted at these institutions has led to breakthrough discoveries in medicine, technology, and social sciences. The value of higher education extends far beyond the classroom.",
  "Biodiversity loss threatens the stability of ecosystems worldwide. Species extinction occurs at a rate unprecedented in human history, driven by habitat destruction, pollution, and climate change. Conservation efforts must accelerate to preserve the natural world for future generations.",
  "The global economy is increasingly interconnected through trade, investment, and technology. Economic developments in one region can have ripple effects across the entire world. Understanding these connections is essential for policymakers and business leaders.",
  "Digital transformation has reshaped how organizations operate and deliver services. Cloud computing, big data analytics, and mobile technologies enable companies to reach customers more efficiently. However, this shift also raises concerns about data privacy and cybersecurity.",
  "Public health systems face ongoing challenges from aging populations and emerging diseases. Preventive care, health education, and investment in medical research are essential for improving outcomes. Access to affordable healthcare remains a concern in many countries.",
  "Sustainable agriculture aims to meet food needs while preserving environmental resources. Practices such as crop rotation, organic farming, and precision irrigation help maintain soil fertility. These methods balance productivity with long-term ecological health.",
  "The shift toward remote work has fundamentally altered employment patterns. Video conferencing and collaboration tools enable distributed teams to function effectively. Organizations must adapt their policies to support productivity and employee well-being in this new environment.",
  "Urban planning increasingly incorporates green spaces and pedestrian-friendly design. Cities that prioritize walkability and public transit tend to have lower emissions and healthier residents. Thoughtful urban development can improve quality of life for all citizens.",
  "Financial literacy is essential for making informed decisions about savings, investments, and debt. Educational programs help individuals understand concepts such as compound interest and risk diversification. Better financial knowledge leads to more stable personal finances.",
  "The pharmaceutical industry invests heavily in research and development to bring new drugs to market. Clinical trials ensure that medications are safe and effective before public release. The process can take over a decade and cost billions of dollars.",
  "Social entrepreneurship combines business strategies with social missions. These ventures address issues such as poverty, education, and environmental sustainability. They demonstrate that profit and social impact can be achieved simultaneously.",
  "Ocean acidification threatens marine ecosystems by reducing the availability of carbonate ions needed by shellfish and corals. Increased carbon dioxide absorption by oceans is the primary cause. Addressing this problem requires reducing global emissions.",
  "The gig economy offers flexibility for workers but often lacks traditional employment benefits. Platforms connect freelancers with short-term projects across various industries. Policymakers are exploring ways to provide better protections for gig workers.",
  "Renewable energy storage remains a critical challenge for the transition to sustainable power. Battery technology and pumped hydro storage help address the intermittency of solar and wind. Continued innovation is essential for reliable clean energy systems.",
  "Early childhood education has lasting effects on cognitive and social development. High-quality preschool programs improve school readiness and long-term academic outcomes. Investment in early education yields significant social returns.",
  "Cybersecurity threats continue to evolve as digital infrastructure expands. Organizations must implement robust security measures to protect sensitive data. Regular training helps employees recognize phishing attempts and other common attacks.",
  "Water scarcity affects billions of people worldwide, particularly in arid regions. Desalination, rainwater harvesting, and efficient irrigation can help address shortages. International cooperation is needed to manage shared water resources fairly.",
  "The creative industries contribute significantly to economic growth and cultural identity. Film, music, design, and gaming generate billions in revenue annually. They also provide employment for diverse skill sets and foster innovation.",
  "Antibiotic resistance poses a serious threat to global health. Overuse in medicine and agriculture accelerates the evolution of resistant bacteria. New antibiotic development and stewardship programs are critical to addressing this crisis.",
  "Mental health awareness has increased in recent years, reducing stigma around seeking help. Employers are implementing wellness programs to support their teams. Accessible mental health services remain a priority for many communities.",
  "Space exploration continues to push the boundaries of human knowledge. Robotic missions to Mars and beyond provide valuable scientific data. International collaboration has made ambitious projects more achievable than ever before.",
  "The sharing economy has transformed industries such as transportation and accommodation. Platforms like ride-sharing and home rentals create new opportunities for both providers and consumers. Regulation remains a complex challenge in this sector.",
  "Food security depends on resilient agricultural systems and equitable distribution. Climate change, conflict, and economic instability can disrupt food supplies. Sustainable farming and international aid are essential components of food security strategies.",
];

const readAloudHard = [
  "The intersection of neuroscience and psychology has revolutionized our understanding of human consciousness and cognitive processes. Sophisticated neuroimaging techniques enable researchers to observe brain activity in real-time, revealing the intricate neural mechanisms underlying perception, memory, and decision-making.",
  "Quantum mechanics fundamentally challenges our intuitions about reality at the subatomic level. Phenomena such as superposition and entanglement suggest that particles can exist in multiple states simultaneously until observed, a concept that even distinguished physicists have struggled to reconcile with classical understanding.",
  "The socioeconomic implications of automation extend beyond simple job displacement. While technological advancement has historically created new employment opportunities, the unprecedented speed of current developments in artificial intelligence raises questions about whether traditional economic adjustment mechanisms will suffice in the coming decades.",
  "Epigenetic modifications represent a fascinating layer of biological complexity that bridges genetic inheritance and environmental influence. These chemical alterations to DNA expression, which do not change the underlying genetic sequence, can be influenced by lifestyle factors and may even be transmitted across generations.",
  "Macroeconomic policy operates within constraints imposed by globalization and interconnected financial markets. Central banks must balance domestic objectives such as price stability and employment against external pressures including exchange rate volatility and capital flow dynamics. This complexity requires sophisticated analytical frameworks and adaptive institutional responses.",
  "The philosophy of artificial consciousness raises profound questions about the nature of mind and moral status. If machines were to achieve genuine subjective experience, society would need to reconsider ethical frameworks regarding their treatment. Currently, debates center on whether consciousness requires biological substrates or could emerge from sufficiently complex information processing.",
  "Regenerative medicine aims to repair or replace damaged tissues and organs through stem cell therapy, tissue engineering, and molecular biology techniques. While significant progress has been made in laboratory settings, clinical applications face challenges including immune rejection, ethical concerns, and regulatory hurdles that slow translation from research to treatment.",
  "The economics of climate change mitigation requires evaluating costs and benefits across vastly different time horizons. Discount rates, technological uncertainty, and international coordination challenges complicate policy design. Economists debate whether market-based mechanisms like carbon pricing or direct regulation will more effectively drive the transition to a low-carbon economy.",
  "Cognitive biases systematically influence judgment and decision-making in ways that often depart from rational models. Anchoring, confirmation bias, and loss aversion affect everyone from consumers to policymakers. Understanding these tendencies has led to behavioral economics approaches that redesign choice architectures to improve outcomes.",
  "The topology of spacetime in general relativity allows for solutions containing closed timelike curves, theoretically permitting time travel. However, these scenarios raise paradoxes regarding causality and consistency. Physicists explore whether quantum effects or yet-undiscovered principles might prohibit such configurations in nature.",
  "Comparative linguistics reveals deep connections between seemingly unrelated languages through systematic sound correspondences and shared vocabulary. The comparative method enables reconstruction of ancestral languages, shedding light on prehistoric human migrations and cultural contacts that predate written records by thousands of years.",
  "Synthetic biology applies engineering principles to biological systems, enabling the design of new organisms with novel functions. Applications range from pharmaceutical production to environmental remediation. However, the field raises biosecurity concerns and ethical questions about creating artificial life forms.",
  "The study of complex adaptive systems reveals emergent behaviors that cannot be predicted from individual components alone. These principles apply across disciplines from ecology to economics to urban planning. Understanding feedback loops, self-organization, and nonlinearity is essential for managing systems that exhibit unexpected dynamics.",
  "Postcolonial theory examines how colonial power structures continue to shape cultural, political, and economic relationships between former colonizers and colonized nations. Scholars analyze how knowledge production, representation, and institutional frameworks perpetuate inequalities long after formal independence has been achieved.",
  "The anthropology of globalization investigates how local cultures adapt to and resist transnational flows of capital, people, and ideas. Rather than producing homogenization, global integration often generates new hybrid forms. Researchers document how communities selectively appropriate external influences while maintaining distinctive identities and practices.",
  "Quantum field theory describes particles as excitations of underlying fields that permeate spacetime. The theory successfully predicts electromagnetic, weak, and strong interactions with extraordinary precision. However, unifying quantum mechanics with general relativity remains an unsolved challenge, motivating research into string theory and loop quantum gravity.",
  "Developmental psychology increasingly emphasizes the role of gene-environment interactions in shaping individual differences. Epigenetics, neuroplasticity, and sensitive periods during development all contribute to complex trajectories. Modern research moves beyond nature-versus-nurture dichotomies toward integrated models of developmental processes.",
  "The sociology of knowledge examines how social contexts influence what societies accept as truth and fact. Scientific paradigms, institutional structures, and cultural values all shape knowledge production. This perspective challenges notions of purely objective knowledge while acknowledging the genuine power of empirical methods.",
];

// ===== REPEAT SENTENCE =====
const repeatSentenceEasy = [
  "The library will be closed for renovations during the summer break.",
  "Please submit your assignment by the end of the week.",
  "The meeting has been rescheduled to next Monday morning.",
  "Students must bring their identification cards to the examination.",
  "The weather is beautiful today, so we can walk to school.",
  "I would like a cup of coffee with milk and sugar.",
  "The train departs from platform three at noon.",
  "My brother works as a software engineer in London.",
  "The restaurant serves delicious food at reasonable prices.",
  "We need to buy groceries on our way home.",
  "The museum opens at nine o'clock every morning.",
  "She enjoys reading novels during her free time.",
  "The children are playing soccer in the park.",
  "Our flight has been delayed by two hours.",
  "The new library has a comfortable reading area.",
  "Please remember to lock the door when you leave.",
  "The concert tickets are sold out for tonight.",
  "He studies engineering at the local university.",
  "The store offers a discount to senior citizens.",
  "We are planning a family trip to the mountains.",
  "The doctor recommended rest and plenty of fluids.",
  "My favorite subject in school was history.",
  "The post office is located next to the bank.",
  "She volunteers at the animal shelter on weekends.",
  "The weather forecast predicts sunny skies tomorrow.",
  "We need to fill up the car with gasoline.",
  "The new restaurant opened downtown last week.",
  "He plays the guitar in a local band.",
  "The students are preparing for their final exams.",
  "Our neighbors invited us over for dinner.",
  "The bus arrives every fifteen minutes.",
  "She works as a nurse at the city hospital.",
  "The garden requires watering every morning.",
  "We should leave early to avoid traffic.",
  "The book was more interesting than expected.",
  "He forgot his umbrella at the office.",
  "The movie starts at seven thirty this evening.",
  "They are building a new bridge across the river.",
  "The coffee shop is famous for its pastries.",
  "My parents live in a small village near the coast.",
];

const repeatSentenceMedium = [
  "Students should submit their assignments before the deadline to avoid penalties.",
  "The conference will feature presentations from leading experts in the field.",
  "Environmental sustainability requires balancing economic development with ecological preservation.",
  "The research findings suggest a correlation between sleep quality and academic performance.",
  "The company announced plans to expand its operations into international markets.",
  "Public transportation plays a crucial role in reducing urban traffic congestion.",
  "The university offers scholarships to students with exceptional academic records.",
  "Healthcare professionals recommend regular exercise for maintaining cardiovascular health.",
  "The new policy aims to reduce carbon emissions by twenty percent over the next decade.",
  "Technology companies invest heavily in research and development to maintain competitiveness.",
  "The survey indicated that most respondents prefer online shopping to traditional retail.",
  "Effective communication skills are essential for success in today's competitive workplace.",
  "The museum's collection includes artifacts from ancient civilizations around the world.",
  "Renewable energy sources are becoming more affordable as technology advances.",
  "The government announced new regulations to protect consumer data privacy.",
  "Academic research often requires collaboration across multiple disciplines.",
  "The economic downturn has affected employment rates in several key industries.",
  "Students are encouraged to participate in extracurricular activities for personal growth.",
  "The historical significance of the discovery cannot be overstated.",
  "Urban planners must consider the needs of diverse communities in their designs.",
];

const repeatSentenceHard = [
  "The implementation of interdisciplinary approaches has significantly enhanced our understanding of complex societal challenges.",
  "Contemporary economic theories increasingly emphasize the interconnectedness of global financial markets.",
  "The longitudinal study revealed statistically significant improvements in participants' cognitive functioning.",
  "Archaeological excavations have uncovered unprecedented evidence of sophisticated prehistoric civilizations.",
  "The pharmaceutical industry faces increasing pressure to address the growing threat of antibiotic resistance.",
  "Philosophical debates regarding consciousness continue to challenge our fundamental assumptions about the nature of mind.",
  "The transition to renewable energy sources requires substantial investment in infrastructure and storage technology.",
  "Statistical analysis of the data confirmed a strong correlation between the two independent variables.",
  "The committee recommended implementing comprehensive reforms to address systemic inequalities in education.",
  "Advances in artificial intelligence have raised important ethical questions regarding algorithmic bias and accountability.",
  "The research paradigm shift has prompted reevaluation of long-standing assumptions in the field.",
  "International cooperation remains essential for addressing transboundary environmental challenges effectively.",
  "The archaeological evidence suggests that trade networks connected distant civilizations much earlier than previously believed.",
  "Neuroplasticity research has demonstrated that the adult brain retains remarkable capacity for adaptation and reorganization.",
  "The socioeconomic consequences of automation require careful consideration by policymakers and industry leaders.",
];

// ===== DESCRIBE IMAGE =====
const describeImageEasy = [
  { desc: "A simple bar chart showing sales data for four quarters, with Q4 having the highest sales.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { desc: "A pie chart showing budget allocation across departments: Marketing 30%, Operations 40%, R&D 20%, Admin 10%.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800" },
  { desc: "A simple line graph showing website traffic over 12 months with a steady increase.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
  { desc: "A bar chart comparing monthly rainfall in two cities over a year.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
  { desc: "A pie chart showing how people spend their free time: watching TV 35%, sports 25%, reading 20%, other 20%.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { desc: "A line graph showing temperature changes throughout a single day.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800" },
  { desc: "A bar chart showing the number of students in each grade level at a school.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
  { desc: "A simple flowchart showing the steps of a scientific process.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
  { desc: "A table showing the population of five countries with their respective continents.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { desc: "A bar chart showing favorite fruits among students: apple 30%, banana 25%, orange 20%, grape 15%, other 10%.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800" },
  { desc: "A pie chart showing energy sources: solar 40%, wind 30%, hydro 20%, other 10%.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
  { desc: "A line graph showing the number of visitors to a museum over six months.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
];

const describeImageMedium = [
  { desc: "A world map showing global population density with different regions colored to indicate population concentration. Darker colors indicate higher population density. Major cities are marked with dots. Asia shows the highest concentration.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
  { desc: "A business analytics dashboard showing multiple charts: line chart for growth trends, bar charts comparing regional metrics, and pie charts showing market distribution.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { desc: "A comparison chart showing renewable energy adoption rates across different countries from 2010 to 2020, with Germany and Denmark leading.", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800" },
  { desc: "A timeline showing major historical events from 1900 to 2000, including wars, technological milestones, and social movements.", img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800" },
  { desc: "A stacked bar chart showing how household spending has changed over three decades across categories: housing, food, transport, and healthcare.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { desc: "A map showing migration patterns between continents with arrows indicating direction and thickness representing volume.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800" },
  { desc: "A process diagram illustrating the steps of online shopping from browsing to delivery, with icons for each stage.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
  { desc: "A comparison table showing key statistics for three cities: population, area, GDP, and average temperature.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
  { desc: "A geographic map highlighting regions affected by drought, with color gradients showing severity levels.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { desc: "A scatter plot showing the relationship between education level and income, with a trend line indicating positive correlation.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800" },
  { desc: "An infographic showing the water cycle with labeled arrows and percentages for each stage of the process.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
  { desc: "A diagram showing the structure of a typical business organization, from CEO down to entry-level employees.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
];

const describeImageHard = [
  { desc: "A complex multi-axis chart combining unemployment rates, GDP growth, and inflation across G7 nations from 2008-2023, showing the impact of financial crisis and pandemic.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { desc: "A scientific diagram showing the carbon cycle with arrows indicating carbon flow between atmosphere, oceans, land ecosystems, and human activities.", img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800" },
  { desc: "A Sankey diagram illustrating global energy flows from primary sources through conversion processes to end-use sectors, showing efficiency losses at each stage.", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800" },
  { desc: "A radar chart comparing multiple performance metrics for three competing products across dimensions such as price, quality, and durability.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { desc: "A geographic heat map showing disease incidence rates across regions, with overlay data on healthcare access and socioeconomic indicators.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800" },
  { desc: "A network diagram illustrating connections between research institutions, showing collaboration patterns and knowledge flow between universities and industry.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
  { desc: "A logarithmic scale chart comparing the energy density of various fuel sources from fossil fuels to nuclear, with annotations on environmental impact.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
  { desc: "A population pyramid showing age and gender distribution for a developed nation, overlaid with projections for 2050.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { desc: "A multi-panel dashboard displaying real-time financial market data: stock indices, currency pairs, and commodity prices with trend indicators.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800" },
  { desc: "An ecological food web diagram showing trophic relationships between species, with arrows indicating energy transfer and population sizes.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
  { desc: "A cross-sectional geological diagram showing rock layers, fault lines, and underground water reserves in a mountainous region.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
  { desc: "A systems architecture diagram showing how data flows between cloud services, edge devices, and user interfaces in an IoT ecosystem.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
];

// ===== RETELL LECTURE =====
const retellLectureEasy = [
  "Today we'll discuss the water cycle. Water evaporates from oceans when heated by the sun. This vapor rises and forms clouds. Then it falls back as rain or snow. This cycle repeats continuously and is essential for life on Earth.",
  "Photosynthesis is how plants make food. They use sunlight, water, and carbon dioxide. The process produces glucose and oxygen. This is why plants are so important - they create the oxygen we breathe.",
  "The solar system has eight planets. The four inner planets are rocky: Mercury, Venus, Earth, and Mars. The four outer planets are gas giants: Jupiter, Saturn, Uranus, and Neptune. Earth is the only planet known to support life.",
  "The water cycle involves three main processes. First, evaporation turns liquid water into vapor. Second, condensation forms clouds from that vapor. Third, precipitation returns water to the ground as rain, snow, or hail.",
  "Food chains show how energy moves between living things. Plants are producers because they make their own food. Animals are consumers because they eat other organisms. Decomposers break down dead material.",
  "The human digestive system breaks down food into nutrients. The mouth starts digestion with chewing and saliva. The stomach mixes food with acids. The small intestine absorbs nutrients into the blood.",
  "Gravity is the force that pulls objects toward each other. Earth's gravity keeps us on the ground and the moon in orbit. The sun's gravity holds the solar system together.",
  "The respiratory system brings oxygen into the body. Air enters through the nose or mouth. It travels down the windpipe to the lungs. Oxygen passes into the blood through tiny air sacs.",
  "Habitats are natural homes for plants and animals. Each habitat provides food, water, and shelter. Forests, deserts, and oceans are all different types of habitats.",
  "The skeletal system supports the body and protects organs. Humans have 206 bones in adulthood. Bones are made of living tissue that can grow and repair itself.",
  "Seasons are caused by Earth's tilt on its axis. As Earth orbits the sun, different parts receive more direct sunlight. This creates spring, summer, autumn, and winter.",
  "The water cycle has three main stages. Evaporation turns water into vapor. Condensation forms clouds. Precipitation returns water to the surface as rain or snow.",
  "Renewable energy comes from natural sources that replenish. Solar power uses sunlight. Wind power uses moving air. Hydroelectric power uses flowing water. These sources produce clean electricity.",
  "The circulatory system transports blood throughout the body. The heart pumps blood through arteries and veins. Blood carries oxygen and nutrients to cells and removes waste.",
];

const retellLectureMedium = [
  "The Renaissance, which means 'rebirth' in French, was a period of cultural, artistic, and intellectual transformation that began in Italy in the 14th century and spread throughout Europe. This era saw a renewed interest in classical Greek and Roman ideas. Artists like Leonardo da Vinci and Michelangelo revolutionized painting and sculpture. The invention of the printing press by Gutenberg allowed ideas to spread rapidly.",
  "The Industrial Revolution transformed society from agricultural to industrial economies. Starting in Britain in the late 18th century, it introduced factory systems and mass production. New inventions like the steam engine revolutionized transportation. While it created economic growth, it also led to urbanization and significant social changes, including the rise of the working class.",
  "Coral reefs are among the most biodiverse ecosystems on Earth. They cover less than one percent of the ocean floor but support about 25 percent of all marine species. Coral bleaching, caused by rising ocean temperatures, threatens these vital ecosystems. Conservation efforts focus on reducing pollution and establishing marine protected areas.",
  "The theory of evolution by natural selection, proposed by Charles Darwin, explains how species change over time. Organisms with advantageous traits are more likely to survive and reproduce. Over generations, these traits become more common in the population. This process leads to the diversity of life we see today.",
  "Plate tectonics is the scientific theory explaining the movement of Earth's lithosphere. The planet's outer shell is divided into several plates that glide over the mantle. Their interactions cause earthquakes, volcanic activity, and mountain formation. This theory unified earlier ideas about continental drift.",
  "The French Revolution began in 1789 and fundamentally altered French society. It overthrew the monarchy and established a republic based on principles of liberty, equality, and fraternity. The revolution led to significant social and political changes across Europe. It inspired future democratic movements worldwide.",
  "The nervous system consists of the central nervous system and the peripheral nervous system. The brain and spinal cord form the central part. Nerves throughout the body make up the peripheral system. Together they control movement, sensation, and thought.",
  "The Industrial Revolution shifted economies from agriculture to manufacturing. Steam power and mechanized production increased output dramatically. Workers migrated from rural areas to cities in search of factory jobs. New social classes emerged, including the industrial working class and factory owners.",
  "Atmospheric pressure decreases as altitude increases. At sea level, the weight of air above creates higher pressure. Mountains have lower pressure, which can cause breathing difficulties. Weather is largely driven by differences in atmospheric pressure.",
  "The Renaissance marked a transition from medieval to modern thinking in Europe. Humanism emphasized the value of human potential and achievement. Artists studied anatomy and perspective to create realistic works. Scientific inquiry began to challenge traditional beliefs.",
  "Ecosystems consist of living organisms and their physical environment. Producers convert sunlight into chemical energy through photosynthesis. Consumers obtain energy by eating other organisms. Decomposers recycle nutrients back into the ecosystem.",
  "The Enlightenment was an intellectual movement in 18th-century Europe. Philosophers emphasized reason, science, and individual rights. Ideas about democracy and separation of powers influenced revolutions. This period shaped modern political and social thought.",
];

const retellLectureHard = [
  "Behavioral economics challenges traditional economic assumptions about rational decision-making. Research by Kahneman and Tversky demonstrated that humans consistently deviate from rational choice theory. Cognitive biases such as loss aversion, anchoring, and the availability heuristic systematically influence our decisions. These insights have profound implications for policy design, marketing strategies, and personal financial planning.",
  "The human microbiome comprises trillions of microorganisms residing in our bodies, particularly in the gut. Recent research has revealed its crucial role in immune function, metabolism, and even mental health through the gut-brain axis. Dysbiosis, or microbial imbalance, has been linked to conditions ranging from inflammatory bowel disease to depression. Interventions such as probiotics and fecal transplants offer promising therapeutic avenues.",
  "Cryptocurrency and blockchain technology represent a paradigm shift in financial systems. Decentralized ledger technology eliminates the need for intermediaries in transactions. Smart contracts enable automated, trustless agreements. However, challenges remain regarding scalability, energy consumption, and regulatory frameworks. Central bank digital currencies are emerging as governments explore blockchain applications.",
  "Neuroplasticity refers to the brain's ability to reorganize itself throughout life. This involves forming new neural connections, strengthening existing ones, and pruning unused pathways. Learning, experience, and environmental stimuli all drive these changes. Understanding neuroplasticity has revolutionized rehabilitation approaches for stroke and brain injury patients.",
  "The Anthropocene is a proposed geological epoch marking significant human impact on Earth's ecosystems. Scientists argue that activities like agriculture, industrialization, and nuclear testing have altered the planet's geological record. The concept has sparked debate about humanity's responsibility for environmental change. It also raises questions about how we define geological time in relation to human influence.",
  "Game theory provides a mathematical framework for analyzing strategic interactions between rational decision-makers. Concepts like Nash equilibrium and dominant strategies help predict outcomes in competitive situations. The field has applications in economics, politics, biology, and computer science. Recent advances incorporate behavioral insights to model more realistic human decision-making.",
  "Quantum entanglement describes a phenomenon where particles become correlated in such a way that the state of one instantly influences the other, regardless of distance. Einstein famously called this 'spooky action at a distance.' The phenomenon has been experimentally verified and is central to quantum computing and cryptography. It challenges classical notions of locality and separability.",
  "Epigenetics examines how environmental factors influence gene expression without altering DNA sequences. Mechanisms include DNA methylation and histone modification. These changes can be triggered by diet, stress, and toxins. Some epigenetic marks can be inherited across generations. This field bridges genetics and environmental science in understanding health and disease.",
  "The Fermi Paradox addresses the apparent contradiction between the high probability of extraterrestrial civilizations and the lack of evidence for them. Proposed solutions include the Great Filter hypothesis, suggesting civilizations face existential barriers. Other theories involve self-destruction, zoo hypothesis, or simply that intelligent life is exceedingly rare. The debate continues to shape astrobiology and SETI research.",
  "Systemic risk in finance refers to the possibility that the failure of one institution could trigger cascading failures throughout the entire financial system. The 2008 crisis highlighted how interconnected institutions can amplify shocks. Regulatory responses include stress testing, capital requirements, and macroprudential policies. Understanding systemic risk is crucial for preventing future financial crises.",
  "The cognitive revolution of the 1950s transformed psychology from behaviorism to the study of mental processes. Researchers like Chomsky, Miller, and Neisser argued that internal mental states could be studied scientifically. This led to advances in memory research, language acquisition, and problem-solving. The revolution laid the foundation for cognitive science as an interdisciplinary field.",
  "Sustainable development seeks to meet present needs without compromising future generations' ability to meet their own needs. The concept integrates economic growth, social inclusion, and environmental protection. Critics argue that these goals can conflict in practice. Proponents emphasize that long-term prosperity depends on addressing all three dimensions simultaneously.",
  "The replication crisis in science refers to the finding that many published research findings cannot be reproduced or validated. Factors include publication bias, small sample sizes, and flexible data analysis. Reforms include pre-registration of studies, open data practices, and replication studies. The crisis has prompted renewed emphasis on rigor and transparency in scientific research.",
  "Complex systems theory studies how large numbers of interacting components give rise to collective behavior that cannot be predicted from individual parts. Examples include ant colonies, financial markets, and brain networks. Key concepts include emergence, self-organization, and nonlinearity. This interdisciplinary field provides tools for understanding phenomena across the natural and social sciences.",
];

// ===== ANSWER SHORT QUESTION =====
const answerShortQuestionEasy = [
  { q: "What do we call a person who studies the stars and planets?", a: "astronomer" },
  { q: "What device is used to measure temperature?", a: "thermometer" },
  { q: "How many days are there in a week?", a: "seven" },
  { q: "What is the opposite of hot?", a: "cold" },
  { q: "What do we call the person who flies an airplane?", a: "pilot" },
  { q: "Which planet is known as the Red Planet?", a: "Mars" },
  { q: "What do bees produce?", a: "honey" },
  { q: "What is the largest ocean on Earth?", a: "Pacific" },
  { q: "How many legs does a spider have?", a: "eight" },
  { q: "What season comes after winter?", a: "spring" },
  { q: "What do we call frozen water?", a: "ice" },
  { q: "Which animal is known as the king of the jungle?", a: "lion" },
  { q: "What do we call a baby dog?", a: "puppy" },
  { q: "How many colors are in a rainbow?", a: "seven" },
  { q: "What is the first month of the year?", a: "January" },
  { q: "What do we call a place where books are kept?", a: "library" },
  { q: "What is the main ingredient in bread?", a: "flour" },
  { q: "Which direction does the sun rise from?", a: "east" },
  { q: "What do we call a person who repairs cars?", a: "mechanic" },
  { q: "How many minutes are in an hour?", a: "sixty" },
  { q: "What do we call a group of wolves?", a: "pack" },
  { q: "What is the chemical symbol for water?", a: "H2O" },
  { q: "Which continent is Egypt located in?", a: "Africa" },
  { q: "What do we call the study of plants?", a: "botany" },
  { q: "What instrument has black and white keys?", a: "piano" },
  { q: "What do we call the meal eaten in the morning?", a: "breakfast" },
  { q: "How many sides does a triangle have?", a: "three" },
  { q: "What do we call a home for birds?", a: "nest" },
  { q: "Which month has the fewest days?", a: "February" },
  { q: "What do we call the process of water falling as rain?", a: "precipitation" },
];

const answerShortQuestionMedium = [
  { q: "What is the primary gas that plants absorb from the atmosphere?", a: "carbon dioxide" },
  { q: "What do you call a doctor who performs surgeries?", a: "surgeon" },
  { q: "What is the hardest natural substance on Earth?", a: "diamond" },
  { q: "What is the study of ancient life through fossils called?", a: "paleontology" },
  { q: "What organ in the human body produces insulin?", a: "pancreas" },
  { q: "What is the term for the gradual increase in Earth's average temperature?", a: "global warming" },
  { q: "What do we call the boundary between two air masses?", a: "front" },
  { q: "What is the name of the galaxy that contains our solar system?", a: "Milky Way" },
  { q: "What is the chemical formula for table salt?", a: "NaCl" },
  { q: "What do we call the study of weather?", a: "meteorology" },
  { q: "What is the largest mammal in the world?", a: "blue whale" },
  { q: "What do we call the process of a liquid turning into gas?", a: "evaporation" },
  { q: "What is the term for animals that eat both plants and meat?", a: "omnivore" },
  { q: "What do we call the movement of tectonic plates?", a: "plate tectonics" },
  { q: "What is the name for the energy stored in food?", a: "calories" },
  { q: "What do we call the green pigment in plants?", a: "chlorophyll" },
  { q: "What is the largest desert in the world?", a: "Antarctica" },
  { q: { q: "What do we call the theory that the universe began from a single point?", a: "Big Bang" }.q, a: "Big Bang" },
  { q: "What is the term for the variety of life in an ecosystem?", a: "biodiversity" },
  { q: "What do we call the center of an atom?", a: "nucleus" },
  { q: "What is the name for the process of cell division?", a: "mitosis" },
  { q: "What do we call the layer of Earth's atmosphere where weather occurs?", a: "troposphere" },
  { q: "What is the term for a species in danger of extinction?", a: "endangered" },
  { q: "What do we call the transfer of pollen between flowers?", a: "pollination" },
  { q: "What is the name for the study of fungi?", a: "mycology" },
];

const answerShortQuestionHard = [
  { q: "What is the term for a word that has the same spelling but different meanings?", a: "homonym" },
  { q: "What economic term describes a prolonged period of declining prices?", a: "deflation" },
  { q: "What is the scientific study of earthquakes called?", a: "seismology" },
  { q: "What philosophical term refers to knowledge gained through experience?", a: "empiricism" },
  { q: "What is the psychological term for attributing human characteristics to non-human entities?", a: "anthropomorphism" },
  { q: "What is the term for the apparent change in frequency of a wave as the source moves?", a: "Doppler effect" },
  { q: "What do we call the economic principle that demand falls as price rises?", a: "law of demand" },
  { q: "What is the study of the relationships between organisms and their environment?", a: "ecology" },
  { q: "What do we call a government ruled by a single person with absolute power?", a: "autocracy" },
  { q: "What is the term for the gradual disappearance of a species?", a: "extinction" },
  { q: "What do we call the process by which rocks are formed from sediment?", a: "sedimentation" },
  { q: "What is the term for a market structure with a single seller?", a: "monopoly" },
  { q: "What do we call the statistical measure of the spread of data?", a: "standard deviation" },
  { q: "What is the term for the hypothesis that an asteroid impact caused dinosaur extinction?", a: "Bolide impact hypothesis" },
  { q: "What do we call the study of the formation of the universe?", a: "cosmology" },
  { q: "What is the term for the process of maintaining stable internal conditions?", a: "homeostasis" },
  { q: "What do we call an economic system where the government controls all resources?", a: "command economy" },
  { q: "What is the term for the idea that supply creates its own demand?", a: "Say's law" },
  { q: "What do we call the movement of a substance from high to low concentration?", a: "diffusion" },
  { q: "What is the term for the theory that continents were once joined?", a: "continental drift" },
];

// ===== SUMMARIZE GROUP DISCUSSION =====
const summarizeGroupDiscussionEasy = [
  "Speaker 1: Thanks for joining this meeting about making our office more environmentally friendly. I think the easiest first step is to add clearly labeled recycling bins near the printers, in the kitchen, and beside the main exits. Right now, people often put everything in the same bin because the recycling points are hard to find.\nSpeaker 2: I agree that better access would help, but we should also focus on reducing the amount of waste we create. We print a lot of meeting agendas and draft documents that could be shared digitally. If we used shared files and only printed final copies when necessary, we would use much less paper.\nSpeaker 1: That makes sense. We could set double-sided printing as the default and put a short reminder beside each printer. We should also make sure staff can use the document-sharing tools, because some people still save several printed copies when they are unsure how to find the latest version.\nSpeaker 2: A quick guide or short workshop could address that. It could explain how to share files, where to find recycling bins, and which materials can be recycled. We should keep the advice practical rather than making it feel like another long training session.\nSpeaker 1: Perhaps we can start with one workshop during a regular team meeting, then send a one-page guide afterward. We could also ask each team to choose someone who can answer basic questions.\nSpeaker 2: Good idea. We should measure whether the changes work by checking paper purchases and the amount of mixed waste after a few months. If the results are positive, we can add more bins or repeat the workshop for new employees.\nSpeaker 1: So our main actions are better-labeled bins, less printing through digital documents and double-sided defaults, and a short staff workshop. We can review the results later and adjust the plan.",
  "Student A: We need to discuss whether the library should extend its opening hours during the exam period. Many students have classes or jobs during the day, so the current closing time makes it difficult to find a quiet place to study in the evening.\nStudent B: I agree, and weekend hours are especially important. The library is often busiest on Saturday afternoon, but it closes before some students have finished their study plans. Extending the weekend schedule could help students who cannot study at home.\nStudent A: Some people have suggested keeping the library open until midnight. That would give students more time, although we should check whether enough staff and security coverage would be available that late. Perhaps we could try later closing times on weekdays first and assess demand.\nStudent B: A pilot sounds sensible. We could keep the main study floor open until midnight during the two weeks before exams, while closing less-used rooms earlier. Students would need to show their campus cards after the regular closing time, and security staff could monitor the entrance.\nStudent A: We should also consider the number of study rooms. Even if the building stays open later, students working in groups may still struggle to find a suitable room. A booking system could make access fairer and prevent people from keeping rooms empty after reserving them.\nStudent B: That is true. We could add a few more group rooms if the pilot shows enough demand, but individual desks and quiet areas should remain the priority. We should also collect feedback about noise, safety, and how useful the later hours are.\nStudent A: Then we can propose a short trial with extended evening and weekend hours, careful staffing, and better room bookings. After exams, the library can review attendance and student feedback before deciding whether to make the change permanent.",
];

const summarizeGroupDiscussionMedium = [
  "Manager: Our project teams have been missing updates, and people sometimes discover a deadline change too late. I would like us to improve communication without adding so many meetings that everyone loses time for focused work. What changes would make the biggest difference?\nEmployee 1: A brief weekly check-in could help. Each person could share priorities, blockers, and any change that affects another team. It should have a clear agenda and a strict time limit, so we focus on decisions rather than giving long status reports.\nEmployee 2: I think we also need one shared project-management tool. Tasks are currently spread across email, spreadsheets, and personal notes. If we record owners, due dates, and progress in the same place, everyone can see what has changed without asking several people.\nManager: That sounds useful, but we should not assume a new tool will solve everything. Some team members may need training, and we need to agree on a simple set of rules so that updates stay current. What would help with quick questions that do not need a formal meeting?\nEmployee 1: A dedicated team chat channel could work for short questions and announcements. We should use separate threads for different topics and move decisions into the project tool so they are easy to find later. That would prevent important information from disappearing in a long chat.\nEmployee 2: We also need informal opportunities to build relationships, especially for colleagues who work remotely. A monthly team lunch or optional online social session could help people feel more comfortable asking for help. It should be optional and scheduled during work hours.\nManager: Let's pilot the weekly check-in, chat channel, and shared task board with one project team for a month. We can collect feedback on meeting time, missed handoffs, and task visibility, then decide which practices to roll out more broadly.",
  "Professor: Today I would like us to weigh the main challenges and benefits of online learning. We should consider what students need to succeed, rather than deciding that one format is always better than another.\nStudent 1: One challenge is the lack of face-to-face interaction. In a physical classroom, it is easier to notice when someone is confused and to ask a quick question. Online, students may keep their cameras off or hesitate to interrupt, which can make lessons feel isolating and reduce engagement.\nStudent 2: Technical problems can also interrupt learning. A weak internet connection, an old computer, or difficulty using the course platform can make it hard to follow a lesson. These problems affect students differently, so courses should offer clear technical support and materials that can be downloaded in advance.\nProfessor: Those are important concerns. What advantages should we preserve when designing online courses?\nStudent 1: Flexibility is a major advantage. Students can plan study around work or family responsibilities, and some people learn more comfortably at their own pace. Recorded lectures are especially useful because students can pause, replay a difficult explanation, and review it before an exam.\nStudent 2: Online courses can also connect students who live far from campus. However, the flexibility works best when course schedules, deadlines, and expectations are clear. Without structure, it is easy to fall behind or feel disconnected from the instructor.\nProfessor: It sounds as if a good course needs both flexibility and regular contact. Instructors could hold live discussion sessions, provide accessible recordings and downloadable resources, and offer reliable technical help. We should also check in with students during the term so that problems are addressed before they affect progress.",
];

const summarizeGroupDiscussionHard = [
  "Panelist 1: Artificial intelligence is creating new possibilities in healthcare. Diagnostic systems can review medical images quickly and may help clinicians identify patterns that are difficult to spot. These tools could support earlier diagnosis, reduce routine workload, and make specialist analysis available in more places.\nPanelist 2: The potential is significant, but we need to examine responsibility when an AI system is wrong. If a clinician follows an incorrect recommendation, it is not always clear whether responsibility lies with the clinician, the hospital, or the company that developed the system. Patients also need to know when AI has influenced a decision.\nPanelist 3: Data privacy is another major concern. These systems need large and varied datasets, often containing sensitive patient information. Hospitals must protect that information, obtain appropriate consent, and consider whether data collected in one setting can fairly represent people from different communities.\nPanelist 1: We should not let these concerns prevent useful research, but they make strong regulation essential. Regulations could require independent testing, clear documentation of a system's limits, and ongoing monitoring after it is introduced. Hospitals should also evaluate whether the tool improves outcomes in their own patient population.\nPanelist 2: Training matters too. Doctors and nurses need to understand when a tool is reliable and when they should question it. An AI system should provide supporting evidence where possible, rather than presenting a recommendation that cannot be explained.\nPanelist 3: Finally, technology should strengthen rather than replace the human relationship in medicine. Patients need empathy, clear explanations, and someone who can consider personal circumstances that may not appear in the data.\nPanelist 1: So the group sees real benefits in faster, more consistent analysis, but also highlights accountability, privacy, regulation, and training as essential conditions for safe use.",
  "Expert 1: Climate-related migration is becoming a serious global issue. Rising sea levels, droughts, and severe storms are damaging homes and livelihoods, forcing many people to move within their own countries or across borders. Governments need to prepare for these movements rather than treating every displacement as an unexpected emergency.\nExpert 2: One difficulty is that international law does not clearly recognize people displaced by environmental change as refugees. The 1951 Refugee Convention was designed for a different set of circumstances, so people escaping a climate disaster may not qualify for the same protections. We need legal pathways that protect their safety and rights.\nExpert 3: Responsibility is also disputed. Communities with the fewest resources are often highly exposed, while many developed economies have contributed a large share of historical emissions. Wealthier countries should help fund adaptation, disaster preparation, and fair resettlement, while also reducing their own emissions.\nExpert 1: Policies should be proactive. Cities likely to receive newcomers need plans for housing, schools, healthcare, and employment. At the same time, investment in flood protection, drought-resistant agriculture, and early-warning systems can help people remain in their communities when that is safe and what they want.\nExpert 2: Any relocation program should involve the people affected. Moving a community without consultation can separate families, disrupt cultural traditions, and remove access to jobs. Support should be based on individual needs and should not assume that every displaced person wants to move permanently.\nExpert 3: International cooperation is essential because climate impacts cross borders, but political agreement has been slow. Clear funding commitments and shared data would make it easier for countries to plan together.\nExpert 1: The discussion therefore stresses legal protection, shared responsibility, early planning, and respect for the rights and wishes of affected communities as the main principles for addressing climate migration.",
];

// ===== RESPOND TO SITUATION =====
const respondToSituationEasy = [
  "You are a student. You missed a class yesterday and need to ask your classmate about the homework assignment. What would you say?",
  "You ordered a coffee, but the barista gave you the wrong drink. How would you politely explain the mistake and ask for the correct order?",
  "You are at a restaurant and your food is cold. How would you politely inform the waiter?",
  "You need to ask your teacher for an extension on an assignment. How would you make the request?",
  "You accidentally bumped into someone on the street. What would you say?",
  "You want to borrow a pen from a classmate. How would you ask?",
  "You are at a store and cannot find the item you need. How would you ask for help?",
  "You need to cancel an appointment with your dentist. How would you inform them?",
  "You are at a party and do not know anyone. How would you introduce yourself?",
  "You need to ask a stranger for directions to the nearest train station. What would you say?",
  "You want to return a book to the library but it is overdue. How would you explain this to the librarian?",
  "You are in class and do not understand something. How would you ask the teacher to explain again?",
  "You need to ask your neighbor to turn down their music. How would you make the request politely?",
  "You are at a hotel and your room is not clean. How would you address this with the front desk?",
  "You need to ask your friend to help you move to a new apartment. How would you phrase the request?",
];

const respondToSituationMedium = [
  "You are at a job interview. The interviewer asks why you left your previous position. Your previous job was eliminated due to company restructuring. How would you explain this professionally?",
  "You are a team leader. One of your team members has been consistently arriving late to meetings. How would you address this issue with them privately?",
  "You are a customer service representative. A customer is angry about a defective product they purchased. How would you handle the situation?",
  "You are a student in a group project. One member is not contributing their fair share of the work. How would you address this without causing conflict?",
  "You are a manager. You need to inform your team that budget cuts will require reducing the marketing budget by 20%. How would you communicate this news?",
  "You are a salesperson. A potential customer is interested in your product but concerned about the price. How would you address their concerns?",
  "You are a teacher. A parent is upset about their child's grade and believes it is unfair. How would you handle this meeting?",
  "You are a project coordinator. A key supplier has missed a delivery deadline, threatening your project timeline. How would you address this with the supplier?",
  "You are a healthcare worker. A patient is nervous about an upcoming procedure. How would you reassure them?",
  "You are an event planner. The venue you booked for a conference has cancelled your reservation last minute. How would you handle this emergency?",
  "You are a supervisor. Two employees on your team are in conflict and it is affecting their work. How would you mediate the situation?",
  "You are a real estate agent. A client is unhappy with the limited number of properties you have shown them. How would you address their frustration?",
  "You are a restaurant manager. A customer has complained about finding a foreign object in their food. How would you handle this situation?",
  "You are a financial advisor. A client wants to invest in a high-risk venture despite your recommendation against it. How would you respond?",
  "You are a training coordinator. Employees are not attending the optional professional development sessions. How would you increase participation?",
];

const respondToSituationHard = [
  "You are presenting a proposal to senior management. Midway through your presentation, an executive challenges a key assumption in your data analysis. How would you respond professionally while maintaining confidence in your proposal?",
  "You are a project manager. A client is unhappy because a deliverable was delayed. The delay was partially due to late requirements from the client themselves. How would you address their concerns diplomatically while also highlighting the client's contribution to the delay?",
  "You are a department head. Senior leadership has announced a reorganization that will eliminate several positions in your team. How would you communicate this to your staff while maintaining morale and productivity?",
  "You are a consultant. Your client's industry is facing disruption from new technology, but they are resistant to change. How would you persuade them to adapt while respecting their concerns?",
  "You are a senior engineer. During a critical system launch, a flaw is discovered that could cause significant issues. How would you communicate this to leadership while proposing a solution?",
  "You are an HR director. An anonymous whistleblower has reported unethical practices by a senior executive. How would you handle this investigation while protecting confidentiality and ensuring fairness?",
  "You are a policy advisor. You must present a controversial recommendation to a divided committee. How would you frame your argument to build consensus while addressing opposing viewpoints?",
  "You are a crisis communication specialist. Your company is facing a public relations disaster due to a data breach. How would you manage the response to minimize reputational damage?",
  "You are a negotiator. You are mediating a dispute between two departments over resource allocation. Both sides have valid concerns. How would you guide them toward a mutually acceptable solution?",
  "You are a startup founder. Your lead investor is threatening to withdraw funding unless you change your product direction. How would you respond while protecting your company's vision and financial stability?",
  "You are a senior academic. A research paper you co-authored is being questioned for methodological flaws by a rival researcher. How would you address the critique professionally?",
  "You are a government official. A proposed policy has sparked public protests, but you believe it is necessary for long-term welfare. How would you communicate and defend the policy while addressing public concerns?",
  "You are a corporate trainer. During a workshop, a participant challenges the relevance of your content to their work. How would you handle this while maintaining the session's credibility?",
  "You are a legal advisor. Your company is facing a lawsuit that could result in significant financial penalties. How would you counsel the executive team on their options?",
  "You are a community leader. A proposed development project will bring jobs but also displace long-term residents. How would you balance economic benefits with social responsibility?",
];

function buildReadAloud() {
  const out = [];
  let i = 1;
  const push = (text, difficulty) => {
    out.push({ id: `ra-${i}`, type: "read-aloud", title: "Read Aloud", instruction: TYPES["read-aloud"].instruction, prepTime: 30, recordTime: 40, difficulty, content: { text } });
    i++;
  };
  for (const t of readAloudEasy) push(t, "easy");
  for (const t of readAloudMedium) push(t, "medium");
  for (const t of readAloudHard) push(t, "hard");
  // Fill to 420 with additional variations
  const extraTopics = [
    ["The history of human migration spans thousands of years.", "easy"],
    ["Ocean tides are primarily caused by the gravitational pull of the moon.", "easy"],
    ["The invention of the wheel revolutionized transportation and trade.", "easy"],
    ["A compass uses Earth's magnetic field to indicate direction.", "easy"],
    ["The human skeleton provides structure and protection for internal organs.", "easy"],
    ["Photosynthesis converts light energy into chemical energy in plants.", "easy"],
    ["The water cycle continuously moves water between the atmosphere and Earth's surface.", "easy"],
    ["Democracy is a system of government where citizens vote for representatives.", "easy"],
    ["The nervous system transmits signals between the brain and the rest of the body.", "easy"],
    ["Renewable resources can be replenished naturally over time.", "easy"],
  ];
  for (const [t, d] of extraTopics) { if (i <= 420) push(t, d); }

  const extraMed = [
    "The concept of opportunity cost is fundamental to understanding economic decision-making. When resources are scarce, choosing one option means forgoing another. This principle applies to individuals, businesses, and governments alike. Recognizing opportunity costs helps people make more informed choices about how to allocate their time, money, and attention.",
    "Social capital refers to the networks, relationships, and norms that enable cooperation within communities. Communities with high social capital tend to have lower crime rates and better public health outcomes. Building social capital requires investment in community spaces, local organizations, and opportunities for civic participation.",
    "The transition from fossil fuels to renewable energy involves not only technological change but also shifts in employment and infrastructure. Workers in traditional energy sectors need retraining and support. Communities dependent on fossil fuel industries face economic challenges. A just transition approach seeks to ensure that the benefits and burdens of this shift are shared fairly.",
    "Behavioral nudges are subtle changes in the way choices are presented that influence behavior without restricting options. Examples include placing healthy foods at eye level in cafeterias or setting retirement savings as the default option. Nudges have been shown to be cost-effective tools for encouraging positive behaviors at scale.",
    "The concept of resilience has become increasingly important in urban planning and disaster management. Resilient cities can absorb shocks and recover quickly from disruptions. Key elements include redundant infrastructure, diverse economic bases, strong social networks, and effective governance. Climate change has made resilience a central concern for policymakers worldwide.",
    "The economics of education explores how investment in schooling affects individual outcomes and society as a whole. Returns to education include higher earnings, lower unemployment, and better health. However, access to quality education remains unequal in many countries. Public policy plays a crucial role in determining who benefits from educational opportunities.",
    "Digital privacy concerns have intensified as data collection becomes ubiquitous in modern life. Companies gather information about our browsing habits, location, and purchases to personalize services and target advertising. Balancing the benefits of data-driven innovation with the need to protect personal privacy is one of the defining challenges of the digital age.",
    "The study of memory has revealed that human recollection is not a perfect recording of events but rather a reconstructive process. Each time we remember something, we may inadvertently alter it. This has important implications for eyewitness testimony in legal settings. Understanding memory can help us appreciate both its remarkable capabilities and its inherent limitations.",
    "Sustainable tourism seeks to minimize negative environmental and cultural impacts while maximizing economic benefits for local communities. Overtourism can damage natural sites and disrupt local life. Strategies include visitor limits, community-based tourism models, and education about responsible travel. The COVID-19 pandemic highlighted the vulnerability of tourism-dependent economies.",
    "The role of forests in climate regulation extends beyond carbon sequestration. Forests also influence local weather patterns, water cycles, and biodiversity. Deforestation contributes to climate change while simultaneously reducing the planet's capacity to absorb emissions. Reforestation and forest conservation are essential components of global climate strategies.",
  ];
  for (const t of extraMed) { if (i <= 420) push(t, "medium"); }

  const extraHard = [
    "The concept of emergent properties in complex systems challenges reductionist approaches to understanding natural phenomena. Consciousness, for example, appears to emerge from the collective activity of billions of neurons, yet cannot be fully explained by examining individual cells. This phenomenon suggests that understanding complex systems requires studying interactions and relationships at multiple levels of organization.",
    "The tension between individual privacy and collective security has become increasingly prominent in debates over surveillance technology. Governments argue that monitoring communications can prevent terrorism and serious crime. Civil liberties advocates counter that mass surveillance erodes fundamental rights and can be abused. Finding appropriate legal and technical safeguards remains an ongoing challenge.",
    "The field of behavioral genetics examines how genetic variation contributes to individual differences in psychological traits. Twin studies and genome-wide association studies have identified genetic factors associated with personality, intelligence, and psychiatric conditions. However, gene-environment interactions and epigenetic mechanisms complicate simple nature-versus-nurture interpretations of these findings.",
    "The tragedy of the commons describes a situation where individuals acting in their own self-interest deplete a shared resource, harming the collective good. Classic examples include overfishing and atmospheric pollution. Solutions proposed by economists and political scientists include property rights, regulation, and community-based management. Elinor Ostrom's research showed that local communities can successfully govern shared resources under certain conditions.",
    "The replication crisis in social psychology has prompted methodological reforms including pre-registration, open data, and multi-lab collaborations. Some previously accepted findings, such as ego depletion, have proven difficult to replicate. These challenges have led to greater emphasis on effect sizes, statistical power, and transparent reporting. The crisis has ultimately strengthened the field by improving research practices.",
    "The study of artificial general intelligence raises profound questions about machine cognition, safety, and ethics. Unlike narrow AI systems designed for specific tasks, AGI would possess general problem-solving abilities comparable to human intelligence. Researchers debate timelines, approaches, and risks associated with creating such systems. Ensuring that AGI aligns with human values is considered one of the most important technical challenges of our time.",
    "The anthropology of food examines how culinary practices reflect and shape cultural identity, social hierarchy, and economic systems. What people eat, how they prepare it, and with whom they share it convey deep cultural meanings. Globalization has created hybrid food cultures while also sparking movements to preserve traditional culinary heritage. Food studies offer insights into everything from gender roles to international trade.",
    "The philosophy of mathematics explores questions about the nature, existence, and epistemology of mathematical objects. Platonists argue that mathematical entities exist independently of human thought. Formalists view mathematics as manipulation of symbols according to rules. Intuitionists emphasize mental constructions. These positions have implications for how we understand mathematical truth and the foundations of mathematical practice.",
    "The sociology of science investigates how social factors influence the production and validation of scientific knowledge. Peer review, funding structures, and institutional hierarchies all shape which research gets conducted and accepted. Feminist and postcolonial scholars have highlighted how dominant perspectives can marginalize alternative ways of knowing. Understanding science as a social activity does not diminish its achievements but provides a more complete picture of how knowledge develops.",
    "The economics of happiness examines how subjective well-being relates to income, employment, relationships, and other life factors. Research shows that beyond a certain income threshold, additional money has diminishing returns for happiness. Social connections and job satisfaction often matter more than income. These findings have implications for how governments measure progress and design public policy beyond traditional economic metrics.",
  ];
  for (const t of extraHard) { if (i <= 420) push(t, "hard"); }

  // Fill remaining to 420 with varied sentences
  const fillerEasy = [
    "The sun rises in the east and sets in the west every day.",
    "Birds migrate south during the winter months to find warmer climates.",
    "The river flows gently through the valley below the mountains.",
    "Children enjoy playing in the park during the summer holidays.",
    "The bakery on the corner sells fresh bread every morning.",
    "A rainbow appeared in the sky after the rain stopped.",
    "The old building has been renovated into a community center.",
    "Farmers harvest their crops in the autumn before the first frost.",
    "The cat curled up on the windowsill to sleep in the sun.",
    "Students walk to school together along the tree-lined street.",
    "The clock on the wall chimed twelve times at midnight.",
    "The garden was filled with colorful flowers in the spring.",
    "A gentle breeze rustled the leaves on the tall oak tree.",
    "The fishing boat returned to the harbor at sunset.",
    "The mountain peak was covered in snow throughout the year.",
    "The children built a snowman in the front yard.",
    "The train traveled through the countryside at a steady pace.",
    "The market square was busy with vendors selling their goods.",
    "A family of ducks swam across the quiet pond.",
    "The lighthouse beam swept across the dark ocean waters.",
  ];
  const fillerMed = [
    "The committee has been reviewing the proposal for several weeks and will present its findings at the next board meeting.",
    "Researchers have been studying the effects of climate change on coastal communities and their long-term sustainability.",
    "The new transportation initiative aims to reduce traffic congestion by encouraging the use of public transit and cycling.",
    "Educational institutions are increasingly incorporating technology into their curricula to better prepare students for the workforce.",
    "The economic forecast suggests that growth will remain steady, though some sectors may experience slower expansion than others.",
    "Public health officials are monitoring the spread of a seasonal virus and recommending preventive measures to communities.",
    "The renovation of the historic district has sparked debate between preservationists and developers about the best approach.",
    "Renewable energy investments have increased significantly as governments and corporations commit to reducing carbon emissions.",
    "The healthcare system is adapting to an aging population by expanding geriatric care services and training more specialists.",
    "Urban planners are redesigning city centers to be more pedestrian-friendly and accessible to people with disabilities.",
    "The manufacturing sector has adopted automation technologies to improve efficiency while retraining workers for new roles.",
    "Conservation groups are working with local communities to protect endangered species and restore natural habitats.",
    "The financial services industry is exploring blockchain technology to improve security and reduce transaction costs.",
    "Agricultural researchers are developing drought-resistant crop varieties to address food security in arid regions.",
    "The education ministry has announced reforms to standardized testing to better evaluate student competencies.",
    "Tourism boards are promoting lesser-known destinations to reduce overcrowding at popular sites and support local economies.",
    "Technology firms are investing in cybersecurity measures to protect sensitive data from increasingly sophisticated threats.",
    "The transportation department is upgrading infrastructure to accommodate the growing demand for electric vehicles.",
    "Mental health advocates are pushing for greater access to counseling services in schools and workplaces.",
    "The cultural council has launched initiatives to preserve indigenous languages and traditional art forms.",
  ];
  const fillerHard = [
    "The interdisciplinary research initiative combines expertise from economics, psychology, and data science to address complex behavioral questions.",
    "The proposed legislation would establish a framework for regulating emerging technologies while preserving space for innovation.",
    "The longitudinal analysis controlled for confounding variables including socioeconomic status and prior educational attainment.",
    "The theoretical model predicts divergent outcomes depending on whether market conditions remain favorable or deteriorate.",
    "The systematic review identified significant heterogeneity in study methodologies that limited direct comparison of results.",
    "The constitutional challenge argues that the executive order exceeds the authority granted by the legislative branch.",
    "The empirical evidence suggests that the intervention produces measurable benefits that persist well beyond the treatment period.",
    "The conceptual framework distinguishes between correlation and causation while acknowledging the difficulty of establishing the latter.",
    "The policy recommendation is based on a cost-benefit analysis that incorporates both direct and indirect economic effects.",
    "The archaeological evidence indicates that trade relationships existed between geographically distant communities much earlier than previously documented.",
    "The philosophical argument challenges the assumption that consciousness can be fully explained by physical processes alone.",
    "The statistical methodology employs a mixed-effects model to account for both fixed and random variation in the dataset.",
    "The historical analysis situates the current crisis within a broader pattern of institutional responses to economic disruption.",
    "The sociological study examines how cultural norms and structural inequalities shape individual opportunities and outcomes.",
    "The technological assessment concludes that the proposed system would significantly improve efficiency but requires substantial initial investment.",
    "The legal precedent established in this case has been cited in numerous subsequent decisions involving similar constitutional questions.",
    "The meteorological model incorporates variables including atmospheric pressure, humidity, and wind patterns to predict storm development.",
    "The educational intervention demonstrated that early exposure to complex problem-solving improves later academic performance significantly.",
    "The geopolitical analysis suggests that regional stability depends on cooperation between historically competing powers.",
    "The neurological research revealed that the brain continues to reorganize its functional architecture well into adulthood.",
  ];
  let fi = 0;
  while (i <= 420) {
    const ratio = i / 420;
    if (ratio < 0.4) push(fillerEasy[fi % fillerEasy.length], "easy");
    else if (ratio < 0.75) push(fillerMed[fi % fillerMed.length], "medium");
    else push(fillerHard[fi % fillerHard.length], "hard");
    fi++;
  }

  return out;
}

function buildRepeatSentence() {
  const out = [];
  let i = 1;
  const push = (text, difficulty) => {
    out.push({ id: `rs-${i}`, type: "repeat-sentence", title: "Repeat Sentence", instruction: TYPES["repeat-sentence"].instruction, prepTime: 3, recordTime: 15, difficulty, content: { text } });
    i++;
  };
  for (const t of repeatSentenceEasy) push(t, "easy");
  for (const t of repeatSentenceMedium) push(t, "medium");
  for (const t of repeatSentenceHard) push(t, "hard");

  const extraEasy = [
    "The cat is sleeping on the sofa.",
    "I need to buy milk and eggs.",
    "She walked to the park yesterday.",
    "The phone is ringing in the kitchen.",
    "We should leave now to catch the bus.",
    "He enjoys playing chess with friends.",
    "The sun is shining brightly today.",
    "Please close the window before you go.",
    "They are watching a movie at home.",
    "The dog barked at the mail carrier.",
    "I forgot my keys on the table.",
    "The restaurant is full tonight.",
    "We need to water the plants.",
    "She is reading a book on the couch.",
    "The children built a sandcastle.",
    "He drives to work every morning.",
    "The coffee is too hot to drink.",
    "We are having pasta for dinner.",
    "The train is arriving at the station.",
    "She bought a new dress for the party.",
    "The bird is singing in the tree.",
    "We need to clean the house today.",
    "He plays basketball every weekend.",
    "The baby is crying in the crib.",
    "I want to visit Paris someday.",
    "The flowers smell wonderful.",
    "She answered the phone immediately.",
    "We should check the weather forecast.",
    "The package arrived this morning.",
    "He is cooking dinner for his family.",
    "The store closes at nine o'clock.",
    "She goes jogging every evening.",
    "We need to fix the broken chair.",
    "The children are doing their homework.",
    "I would like to order a pizza.",
    "The bus was late this morning.",
    "He finished the report yesterday.",
    "The window needs to be cleaned.",
    "We are planning a picnic for Sunday.",
    "She studies French at the university.",
    "The music is playing too loudly.",
    "He arrived at the airport early.",
    "The refrigerator is almost empty.",
    "We should invite them to dinner.",
    "The dog needs to go for a walk.",
    "She enjoys painting in her free time.",
    "The meeting will start at ten o'clock.",
    "We need to find a parking spot.",
    "He is waiting for the elevator.",
    "The package was delivered yesterday.",
    "She wants to learn how to swim.",
    "We should book the tickets in advance.",
    "The children are watching television.",
    "He is writing a letter to his friend.",
    "The coffee shop is very crowded.",
    "We need to take out the trash.",
    "She is studying for her exam.",
    "The birds are flying south for winter.",
    "He wants to become a doctor.",
    "The store is having a sale today.",
    "We are going to the beach this weekend.",
    "She loves to read mystery novels.",
    "The phone charger is not working.",
    "He is waiting for his friend at the cafe.",
    "We need to buy a birthday present.",
    "The children are playing in the garden.",
    "She works at a bookstore downtown.",
    "The bus driver announced the next stop.",
    "We should visit the museum this weekend.",
    "He is preparing for his job interview.",
    "The dog found a bone in the yard.",
    "She is learning to play the piano.",
    "The sun sets behind the mountains.",
    "We need to check the oil in the car.",
    "He is going to the gym after work.",
    "The library is closing in ten minutes.",
    "She is making a cake for the party.",
    "The train station is across the street.",
    "We should plant some flowers in the spring.",
    "He is reading the newspaper at breakfast.",
    "The wind is blowing strongly today.",
    "She is knitting a scarf for her sister.",
    "The park is crowded on weekends.",
    "We need to return the library books.",
    "He is fixing his bicycle in the garage.",
    "The birds are building a nest in the tree.",
    "She is practicing her speech for tomorrow.",
    "The restaurant has a new menu.",
    "We should go for a walk after dinner.",
    "He is painting the fence this weekend.",
    "The children are making cookies with their mother.",
    "She is watering the flowers in the garden.",
    "The movie starts at eight o'clock.",
    "We need to buy stamps for the letters.",
    "He is looking for his glasses everywhere.",
    "The cat knocked over the vase.",
    "She is taking a nap on the couch.",
    "The sun is setting over the ocean.",
    "We should visit our grandparents this weekend.",
    "He is listening to the radio in the car.",
    "The flowers in the garden are blooming.",
    "She is cleaning the kitchen this afternoon.",
  ];
  for (const t of extraEasy) push(t, "easy");

  const extraMed = [
    "The committee will review the proposals at their next meeting on Thursday.",
    "Students are required to attend at least eighty percent of scheduled classes.",
    "The company reported a significant increase in quarterly profits due to strong sales.",
    "Research indicates that regular physical activity can improve mental health outcomes.",
    "The new infrastructure project is expected to create hundreds of jobs in the region.",
    "Consumers are increasingly interested in products that are ethically sourced and produced.",
    "The university has implemented a new policy to reduce energy consumption on campus.",
    "Economic analysts predict that interest rates will remain stable through the end of the year.",
    "The museum's latest exhibition explores the intersection of art and technology.",
    "Healthcare providers emphasize the importance of preventive screenings for early detection.",
    "The city council approved funding for the renovation of several public parks.",
    "Educational researchers are studying the impact of technology on student engagement.",
    "The manufacturing sector has seen a gradual recovery following the economic downturn.",
    "Environmental groups are calling for stricter regulations on industrial emissions.",
    "The international conference will bring together delegates from over fifty countries.",
    "Public transportation ridership has increased significantly since the new routes were introduced.",
    "The study found a strong link between social media use and adolescent sleep patterns.",
    "Small businesses are the backbone of the local economy and major sources of employment.",
    "The agricultural sector is adopting precision farming techniques to improve crop yields.",
    "Digital payment systems have transformed the way consumers make purchases worldwide.",
    "The healthcare system faces challenges related to rising costs and an aging population.",
    "Urban development projects must balance growth with environmental preservation goals.",
    "The educational technology market continues to expand as schools invest in digital tools.",
    "Consumer confidence has improved following positive employment figures released last month.",
    "The transportation network requires significant upgrades to accommodate future demand.",
    "Scientific research has demonstrated the benefits of bilingual education for cognitive development.",
    "The tourism industry has rebounded strongly after the global travel restrictions were lifted.",
    "Renewable energy investment reached record levels as costs for solar and wind declined.",
    "The housing market has experienced significant price increases in metropolitan areas.",
    "Mental health services are being expanded to meet growing demand in underserved communities.",
  ];
  for (const t of extraMed) push(t, "medium");

  const extraHard = [
    "The interdisciplinary research initiative combines expertise from economics, psychology, and data science to address complex behavioral questions.",
    "The proposed legislation would establish a framework for regulating emerging technologies while preserving space for innovation.",
    "The longitudinal analysis controlled for confounding variables including socioeconomic status and prior educational attainment.",
    "The theoretical model predicts divergent outcomes depending on whether market conditions remain favorable or deteriorate.",
    "The systematic review identified significant heterogeneity in study methodologies that limited direct comparison of results.",
    "The constitutional challenge argues that the executive order exceeds the authority granted by the legislative branch.",
    "The empirical evidence suggests that the intervention produces measurable benefits that persist well beyond the treatment period.",
    "The conceptual framework distinguishes between correlation and causation while acknowledging the difficulty of establishing the latter.",
    "The policy recommendation is based on a cost-benefit analysis that incorporates both direct and indirect economic effects.",
    "The archaeological evidence indicates that trade relationships existed between geographically distant communities much earlier than previously documented.",
    "The philosophical argument challenges the assumption that consciousness can be fully explained by physical processes alone.",
    "The statistical methodology employs a mixed-effects model to account for both fixed and random variation in the dataset.",
    "The historical analysis situates the current crisis within a broader pattern of institutional responses to economic disruption.",
    "The sociological study examines how cultural norms and structural inequalities shape individual opportunities and outcomes.",
    "The technological assessment concludes that the proposed system would significantly improve efficiency but requires substantial initial investment.",
    "The legal precedent established in this case has been cited in numerous subsequent decisions involving similar constitutional questions.",
    "The meteorological model incorporates variables including atmospheric pressure, humidity, and wind patterns to predict storm development.",
    "The educational intervention demonstrated that early exposure to complex problem-solving improves later academic performance significantly.",
    "The geopolitical analysis suggests that regional stability depends on cooperation between historically competing powers.",
    "The neurological research revealed that the brain continues to reorganize its functional architecture well into adulthood.",
  ];
  for (const t of extraHard) push(t, "hard");

  // Fill remaining to 350 with varied sentences
  const fillerEasy = [
    "The cat is sleeping on the warm windowsill.",
    "She bought fresh vegetables from the market.",
    "We need to clean the house before the guests arrive.",
    "He plays the guitar every evening after dinner.",
    "The train arrives at the station at noon.",
    "They are planning a trip to the mountains.",
    "The coffee shop opens early in the morning.",
    "She is reading a book about history.",
    "The children are playing in the backyard.",
    "We should leave soon to avoid the traffic.",
    "The restaurant is famous for its seafood.",
    "He forgot his umbrella at the office.",
    "The garden needs water during the dry season.",
    "She works as a teacher at the local school.",
    "The bus stop is just around the corner.",
    "We are having dinner with our neighbors.",
    "The movie starts at seven thirty.",
    "He is waiting for his friend at the cafe.",
    "The library is closed on public holidays.",
    "She enjoys painting landscapes in her free time.",
    "The package was delivered this morning.",
    "We need to buy groceries on the way home.",
    "The children are doing their homework.",
    "He is fixing the fence in the backyard.",
    "The sun is shining brightly today.",
    "She is learning to play the piano.",
    "The park is crowded on weekends.",
    "We should visit the museum this weekend.",
    "He is preparing for his job interview.",
    "The dog needs to go for a walk.",
  ];
  const fillerMed = [
    "The committee will review the proposals at their next meeting on Thursday.",
    "Students are required to attend at least eighty percent of scheduled classes.",
    "The company reported a significant increase in quarterly profits due to strong sales.",
    "Research indicates that regular physical activity can improve mental health outcomes.",
    "The new infrastructure project is expected to create hundreds of jobs in the region.",
    "Consumers are increasingly interested in products that are ethically sourced and produced.",
    "The university has implemented a new policy to reduce energy consumption on campus.",
    "Economic analysts predict that interest rates will remain stable through the end of the year.",
    "The museum's latest exhibition explores the intersection of art and technology.",
    "Healthcare providers emphasize the importance of preventive screenings for early detection.",
    "The city council approved funding for the renovation of several public parks.",
    "Educational researchers are studying the impact of technology on student engagement.",
    "The manufacturing sector has seen a gradual recovery following the economic downturn.",
    "Environmental groups are calling for stricter regulations on industrial emissions.",
    "The international conference will bring together delegates from over fifty countries.",
    "Public transportation ridership has increased significantly since the new routes were introduced.",
    "The study found a strong link between social media use and adolescent sleep patterns.",
    "Small businesses are the backbone of the local economy and major sources of employment.",
    "The agricultural sector is adopting precision farming techniques to improve crop yields.",
    "Digital payment systems have transformed the way consumers make purchases worldwide.",
  ];
  const fillerHard = [
    "The interdisciplinary research initiative combines expertise from economics, psychology, and data science to address complex behavioral questions.",
    "The proposed legislation would establish a framework for regulating emerging technologies while preserving space for innovation.",
    "The longitudinal analysis controlled for confounding variables including socioeconomic status and prior educational attainment.",
    "The theoretical model predicts divergent outcomes depending on whether market conditions remain favorable or deteriorate.",
    "The systematic review identified significant heterogeneity in study methodologies that limited direct comparison of results.",
    "The constitutional challenge argues that the executive order exceeds the authority granted by the legislative branch.",
    "The empirical evidence suggests that the intervention produces measurable benefits that persist well beyond the treatment period.",
    "The conceptual framework distinguishes between correlation and causation while acknowledging the difficulty of establishing the latter.",
    "The policy recommendation is based on a cost-benefit analysis that incorporates both direct and indirect economic effects.",
    "The archaeological evidence indicates that trade relationships existed between geographically distant communities much earlier than previously documented.",
    "The philosophical argument challenges the assumption that consciousness can be fully explained by physical processes alone.",
    "The statistical methodology employs a mixed-effects model to account for both fixed and random variation in the dataset.",
    "The historical analysis situates the current crisis within a broader pattern of institutional responses to economic disruption.",
    "The sociological study examines how cultural norms and structural inequalities shape individual opportunities and outcomes.",
    "The technological assessment concludes that the proposed system would significantly improve efficiency but requires substantial initial investment.",
    "The legal precedent established in this case has been cited in numerous subsequent decisions involving similar constitutional questions.",
    "The meteorological model incorporates variables including atmospheric pressure, humidity, and wind patterns to predict storm development.",
    "The educational intervention demonstrated that early exposure to complex problem-solving improves later academic performance significantly.",
    "The geopolitical analysis suggests that regional stability depends on cooperation between historically competing powers.",
    "The neurological research revealed that the brain continues to reorganize its functional architecture well into adulthood.",
  ];
  let fi = 0;
  while (i <= 350) {
    const ratio = i / 350;
    if (ratio < 0.4) push(fillerEasy[fi % fillerEasy.length], "easy");
    else if (ratio < 0.75) push(fillerMed[fi % fillerMed.length], "medium");
    else push(fillerHard[fi % fillerHard.length], "hard");
    fi++;
  }

  return out;
}

function buildDescribeImage() {
  const out = [];
  let i = 1;
  const push = (desc, difficulty) => {
    const seed = i * 7919;
    const w = 600 + (i % 4) * 100;
    const h = 400 + (i % 3) * 50;
    out.push({ id: `di-${i}`, type: "describe-image", title: "Describe Image", instruction: TYPES["describe-image"].instruction, prepTime: 25, recordTime: 40, difficulty, content: { imageUrl: `https://picsum.photos/seed/di${seed}/${w}/${h}`, imageDescription: desc } });
    i++;
  };

  const subjects = [
    "favorite fruits", "monthly rainfall", "library visitors", "student enrollment", "park attendance",
    "book sales", "website traffic", "pet ownership", "daily temperature", "cafeteria meals",
    "commuter counts", "gym memberships", "concert attendance", "museum visits", "festival crowds",
    "bus passengers", "train ridership", "bicycle rentals", "scooter usage", "ferry crossings",
    "coffee consumption", "tea preferences", "juice sales", "water intake", "soda purchases",
    "electricity usage", "gas consumption", "water usage", "internet speeds", "phone data",
    "laptop sales", "tablet shipments", "smartwatch adoption", "headphone purchases", "speaker revenue",
    "movie tickets", "theater seats", "streaming hours", "radio listeners", "podcast downloads",
    "newspaper circulation", "magazine subscriptions", "newsletter signups", "blog readership", "social followers",
    "shoe sizes", "clothing options", "hat styles", "jacket colors", "dress patterns",
    "fruit varieties", "vegetable types", "grain selections", "dairy products", "meat cuts",
    "tree species", "flower varieties", "shrub types", "grass coverage", "garden plots",
    "bird sightings", "insect counts", "fish catches", "mammal tracking", "reptile surveys",
    "cloud cover", "rainfall totals", "snow depth", "wind speed", "humidity levels",
    "test scores", "quiz results", "exam grades", "homework completion", "project milestones",
    "medal counts", "point totals", "goal scoring", "win percentages", "loss records",
    "recipe steps", "cooking times", "ingredient amounts", "serving sizes", "calorie counts",
    "sleep hours", "exercise minutes", "screen time", "reading hours", "meditation sessions",
    "commute distance", "travel time", "fuel stops", "toll booths", "parking spaces",
  ];
  const periods = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
    "Q1", "Q2", "Q3", "Q4", "spring", "summer", "autumn", "winter",
    "weekdays", "weekends", "Mondays", "Fridays", "the morning", "the afternoon",
    "2020", "2021", "2022", "2023", "2024", "last year", "this year",
  ];
  const trends = [
    "steady increase", "gradual decline", "sharp rise", "stable trend", "seasonal variation",
    "consistent growth", "slight decrease", "rapid increase", "moderate decline", "steady pattern",
    "cyclical pattern", "upward trend", "downward trend", "plateau followed by growth", "volatile movement",
    "gradual recovery", "sudden drop", "slow but steady climb", "brief spike", "long-term stability",
  ];
  const categories = [
    "Math", "Science", "English", "History", "Art", "Music", "PE", "Computers",
    "Drama", "Economics", "Geography", "Biology", "Chemistry", "Physics", "Literature",
    "Philosophy", "Psychology", "Sociology", "Anthropology", "Political Science",
  ];
  const chartTypes = [
    "bar chart", "pie chart", "line graph", "table", "flowchart", "scatter plot",
    "histogram", "area chart", "doughnut chart", "radar chart",
  ];
  const mapRegions = [
    "countries", "economies", "communities", "populations", "regions", "cities",
    "provinces", "territories", "municipalities", "zones", "districts", "states",
    "continents", "subcontinents", "island nations", "landlocked areas", "coastal regions",
  ];
  const metrics = [
    "economic", "social", "health", "environmental", "educational", "infrastructural",
    "technological", "cultural", "demographic", "geographic", "political", "legal",
  ];
  const scales = ["95", "99", "90", "85", "92", "88", "96", "94", "89", "91", "87", "93", "86", "97", "84", "98", "83", "82"];
  const methods = [
    "regression", "correlation", "classification", "clustering", "projection",
    "estimation", "validation", "calibration", "optimization", "simulation",
    "interpolation", "extrapolation", "segmentation", "dimensionality reduction",
  ];
  const attributes = [
    "demographic", "environmental", "geographic", "institutional", "regulatory",
    "economic", "technological", "social", "political", "cultural",
    "historical", "linguistic", "psychological", "anthropological",
  ];
  const years = Array.from({ length: 30 }, (_, n) => 2000 + n);

  // Easy: 60 questions
  for (let n = 0; n < 60; n++) {
    const s = subjects[n % subjects.length];
    const p = periods[n % periods.length];
    const t = trends[n % trends.length];
    const ct = chartTypes[n % chartTypes.length];
    const desc = `A ${ct} showing ${s} over ${p} with a ${t}.`;
    push(desc, "easy");
  }

  // Medium: 130 questions
  for (let n = 0; n < 130; n++) {
    const s = subjects[(n * 7) % subjects.length];
    const r = mapRegions[(n * 3) % mapRegions.length];
    const m1 = metrics[n % metrics.length];
    const m2 = metrics[(n + 5) % metrics.length];
    const y = years[n % years.length];
    const templates = [
      `A geographic map showing ${s} across ${r} with color gradients indicating ${m1} levels.`,
      `A timeline of ${s} from ${y - 10} to ${y}, highlighting key milestones and turning points.`,
      `A comparison chart showing ${s} for different ${r} across ${m1} and ${m2} metrics.`,
      `A process flowchart illustrating the ${s} process with multiple distinct stages and feedback loops.`,
      `A stacked area chart showing changes in ${s} over ${y - 5} to ${y} years, broken down by ${m1} sectors.`,
      `A map showing the spread of ${s} across ${r}, with markers indicating ${m1} at different stages.`,
      `A comparison table showing key ${s} metrics for various ${r} including ${m1} and ${m2} indicators.`,
      `A diagram showing the ${s} process from input to output with labeled ${m1} and ${m2} factors.`,
      `A chart showing the correlation between ${s} and ${m1} over multiple years with trend lines.`,
      `A map highlighting regions where ${s} varies significantly, with shades for different ${m1} levels.`,
      `A comparison graph showing ${s} growth rates for different ${r} over the past decade.`,
      `A diagram illustrating the feedback loop between ${s} and ${m1} with causal arrows.`,
      `A chart showing the distribution of ${s} across different ${m1} industry sectors.`,
      `A map showing ${s} routes across ${r}, with line thickness indicating ${m1} volume.`,
      `A graph comparing ${s} across different ${m1} groups in a specific region.`,
    ];
    const desc = templates[n % templates.length];
    push(desc, "medium");
  }

  // Hard: 159 questions
  for (let n = 0; n < 159; n++) {
    const a = subjects[(n * 11) % subjects.length];
    const b = metrics[(n * 7) % metrics.length];
    const c = attributes[(n * 3) % attributes.length];
    const d = scales[n % scales.length];
    const e = methods[n % methods.length];
    const r = mapRegions[(n * 13) % mapRegions.length];
    const y = years[n % years.length];
    const templates = [
      `A multivariable regression plot showing the relationship between ${a}, ${b} factors, and ${c} outcomes with ${d}% confidence intervals.`,
      `A geographic information system map overlaying ${a} with ${b} and ${c} data across ${r}.`,
      `A decision tree diagram showing outcomes of ${a} under ${b}, ${c}, and ${d}% probability scenarios.`,
      `A multi-dimensional scaling plot showing perceived similarity between ${a} across ${c} attributes.`,
      `A phylogenetic tree showing evolutionary relationships between ${a} with branch lengths representing ${b} divergence.`,
      `A systems dynamics diagram showing feedback loops between ${a}, ${b}, and ${c} with ${d}% sensitivity indicators.`,
      `A geographic heat map showing correlation between ${a} and ${b} across ${r} urban centers.`,
      `A complex network graph showing ${a} through ${b}, with nodes representing ${c} entities and edges for interaction strength.`,
      `A multi-panel scientific figure showing ${a} across different ${b} conditions with ${d}% statistical significance annotations.`,
      `A geographic contour map showing ${a} gradients across ${r}, with ${b} direction indicated by arrows.`,
      `A causal loop diagram illustrating relationships between ${a}, ${b}, and ${c} with ${e} feedback mechanisms.`,
      `A multi-axis chart comparing ${a} across ${b}, ${c}, and ${d}% dimensions with ${e} overlays.`,
      `A scientific illustration showing the mechanism of ${a} with labeled ${b} and ${c} components and directional arrows.`,
      `A geographic map showing projected impact of ${a} on ${b} in ${r} under different ${c} scenarios by ${y}.`,
      `A data visualization showing relationship between ${a} and ${b} across ${r} countries over ${y - 10} years with ${e} methods.`,
    ];
    const desc = templates[n % templates.length];
    push(desc, "hard");
  }

  // Fill remaining to 349 with easy (all unique due to index-based selection)
  while (i <= 349) {
    const n = i;
    const s = subjects[n % subjects.length];
    const p = periods[n % periods.length];
    const t = trends[n % trends.length];
    const ct = chartTypes[n % chartTypes.length];
    const cat1 = categories[n % categories.length];
    const cat2 = categories[(n + 7) % categories.length];
    const desc = `A ${ct} comparing ${s} in ${p} with ${t} between ${cat1} and ${cat2}.`;
    push(desc, "easy");
  }

  return out;
}

function buildRetellLecture() {
  const out = [];
  let i = 1;
  const push = (text, difficulty) => {
    out.push({ id: `rl-${i}`, type: "retell-lecture", title: "Re-tell Lecture", instruction: TYPES["retell-lecture"].instruction, prepTime: 10, recordTime: 40, difficulty, content: { lectureContent: text } });
    i++;
  };
  for (const t of retellLectureEasy) push(t, "easy");
  for (const t of retellLectureMedium) push(t, "medium");
  for (const t of retellLectureHard) push(t, "hard");

  const extraEasy = [
    "The water cycle has three main stages. First, evaporation turns water into vapor. Second, condensation forms clouds. Third, precipitation returns water to the surface as rain or snow.",
    "Renewable energy comes from natural sources that replenish. Solar power uses sunlight. Wind power uses moving air. Hydroelectric power uses flowing water. These sources produce clean electricity.",
    "The circulatory system transports blood throughout the body. The heart pumps blood through arteries and veins. Blood carries oxygen and nutrients to cells and removes waste.",
    "The food chain starts with producers, which are plants. Then come primary consumers, like rabbits. Secondary consumers, like foxes, eat the rabbits. Decomposers break down dead organisms.",
    "The solar system has eight planets. The four inner planets are rocky: Mercury, Venus, Earth, and Mars. The four outer planets are gas giants: Jupiter, Saturn, Uranus, and Neptune.",
    "Seasons are caused by Earth's tilt on its axis. As Earth orbits the sun, different parts receive more direct sunlight. This creates spring, summer, autumn, and winter.",
    "The skeletal system supports the body and protects organs. Humans have 206 bones in adulthood. Bones are made of living tissue that can grow and repair itself.",
    "Gravity is the force that pulls objects toward each other. Earth's gravity keeps us on the ground and the moon in orbit. The sun's gravity holds the solar system together.",
    "Habitats are natural homes for plants and animals. Each habitat provides food, water, and shelter. Forests, deserts, and oceans are all different types of habitats.",
    "The respiratory system brings oxygen into the body. Air enters through the nose or mouth. It travels down the windpipe to the lungs. Oxygen passes into the blood through tiny air sacs.",
    "The water cycle has three main stages. First, evaporation turns water into vapor. Second, condensation forms clouds. Third, precipitation returns water to the surface as rain or snow.",
    "Renewable energy sources are replenished naturally. Solar energy comes from the sun. Wind energy comes from moving air. Hydroelectric energy comes from flowing water.",
    "The circulatory system has three main parts. The heart pumps blood. Arteries carry blood away from the heart. Veins carry blood back to the heart.",
    "The food chain begins with plants. Plants are producers. Animals are consumers. Decomposers break down dead material.",
    "The solar system consists of the sun and eight planets. The inner planets are rocky. The outer planets are gas giants. Earth is the only planet with liquid water.",
  ];
  for (const t of extraEasy) push(t, "easy");

  const extraMed = [
    "The Renaissance was a period of cultural rebirth in Europe. It began in Italy in the 14th century and spread throughout the continent. Artists like Leonardo da Vinci and Michelangelo created masterpieces. The printing press allowed ideas to spread rapidly.",
    "The Industrial Revolution transformed society from agricultural to industrial economies. It began in Britain in the late 18th century. Steam power and mechanized production increased output. Workers migrated to cities and new social classes emerged.",
    "Coral reefs are among the most biodiverse ecosystems on Earth. They cover less than one percent of the ocean floor but support about 25 percent of marine species. Coral bleaching, caused by rising temperatures, threatens these ecosystems.",
    "Plate tectonics explains the movement of Earth's lithosphere. The planet's outer shell is divided into plates that glide over the mantle. Their interactions cause earthquakes, volcanic activity, and mountain formation.",
    "The theory of evolution by natural selection, proposed by Charles Darwin, explains how species change over time. Organisms with advantageous traits are more likely to survive and reproduce. Over generations, these traits become more common.",
    "The French Revolution began in 1789 and fundamentally altered French society. It overthrew the monarchy and established a republic. The revolution led to significant social and political changes across Europe.",
    "The nervous system consists of the central nervous system and the peripheral nervous system. The brain and spinal cord form the central part. Nerves throughout the body make up the peripheral system.",
    "Atmospheric pressure decreases as altitude increases. At sea level, the weight of air above creates higher pressure. Mountains have lower pressure, which can cause breathing difficulties.",
    "The Renaissance marked a transition from medieval to modern thinking in Europe. Humanism emphasized the value of human potential. Artists studied anatomy and perspective. Scientific inquiry began to challenge traditional beliefs.",
    "Ecosystems consist of living organisms and their physical environment. Producers convert sunlight into chemical energy. Consumers obtain energy by eating other organisms. Decomposers recycle nutrients.",
    "The Enlightenment was an intellectual movement in 18th-century Europe. Philosophers emphasized reason, science, and individual rights. Ideas about democracy and separation of powers influenced revolutions.",
    "The Industrial Revolution shifted economies from agriculture to manufacturing. Steam power and mechanized production increased output. Workers migrated to cities. New social classes emerged.",
    "The Renaissance was a period of cultural and intellectual transformation. It began in Italy in the 14th century. Artists like Leonardo da Vinci and Michelangelo created masterpieces. The printing press spread ideas rapidly.",
    "The French Revolution began in 1789. It overthrew the monarchy and established a republic. The revolution led to significant social and political changes across Europe.",
    "The theory of evolution explains how species change over time. Organisms with advantageous traits survive and reproduce. Over generations, these traits become more common.",
  ];
  for (const t of extraMed) push(t, "medium");

  const extraHard = [
    "Behavioral economics challenges traditional assumptions about rational decision-making. Research by Kahneman and Tversky demonstrated that humans consistently deviate from rational choice theory. Cognitive biases such as loss aversion and anchoring systematically influence decisions.",
    "The human microbiome comprises trillions of microorganisms in our bodies. Research has revealed its crucial role in immune function, metabolism, and mental health. Dysbiosis has been linked to conditions ranging from inflammatory bowel disease to depression.",
    "Cryptocurrency and blockchain technology represent a paradigm shift in financial systems. Decentralized ledger technology eliminates intermediaries. Smart contracts enable automated agreements. Challenges remain regarding scalability and regulation.",
    "Neuroplasticity refers to the brain's ability to reorganize itself throughout life. This involves forming new neural connections and pruning unused pathways. Learning, experience, and environmental stimuli drive these changes.",
    "The Anthropocene is a proposed geological epoch marking significant human impact on Earth's ecosystems. Activities like agriculture, industrialization, and nuclear testing have altered the planet's geological record.",
    "Game theory provides a framework for analyzing strategic interactions between rational decision-makers. Concepts like Nash equilibrium help predict outcomes. The field has applications in economics, politics, biology, and computer science.",
    "Quantum entanglement describes a phenomenon where particles become correlated. The state of one instantly influences the other, regardless of distance. The phenomenon is central to quantum computing and cryptography.",
    "Epigenetics examines how environmental factors influence gene expression without altering DNA sequences. Mechanisms include DNA methylation and histone modification. These changes can be influenced by diet, stress, and toxins.",
    "The Fermi Paradox addresses the contradiction between the high probability of extraterrestrial civilizations and the lack of evidence for them. Proposed solutions include the Great Filter hypothesis and self-destruction.",
    "Systemic risk in finance refers to the possibility that the failure of one institution could trigger cascading failures. The 2008 crisis highlighted how interconnected institutions can amplify shocks.",
    "The cognitive revolution of the 1950s transformed psychology from behaviorism to the study of mental processes. Researchers argued that internal mental states could be studied scientifically.",
    "Sustainable development seeks to meet present needs without compromising future generations. The concept integrates economic growth, social inclusion, and environmental protection.",
    "The replication crisis in science refers to the finding that many published findings cannot be reproduced. Factors include publication bias and small sample sizes.",
    "Complex systems theory studies how large numbers of interacting components give rise to collective behavior. Examples include ant colonies, financial markets, and brain networks.",
    "The sociology of knowledge examines how social contexts influence what societies accept as truth. Scientific paradigms and institutional structures shape knowledge production.",
  ];
  for (const t of extraHard) push(t, "hard");

  // Fill remaining to 350 with easy
  const fillerEasy = [
    "The water cycle involves evaporation, condensation, and precipitation. These processes continuously move water through the environment.",
    "Plants need sunlight, water, and nutrients to grow. They use photosynthesis to produce food and release oxygen into the atmosphere.",
    "The human body has several major organ systems. Each system has a specific function that contributes to overall health and survival.",
    "The solar system includes the sun, eight planets, and various smaller objects. Earth is the third planet from the sun.",
    "The food chain shows how energy flows from producers to consumers. Decomposers break down dead material and recycle nutrients.",
    "Seasons change because of Earth's tilt on its axis. This causes different parts of the world to receive varying amounts of sunlight throughout the year.",
    "The water cycle is essential for life on Earth. It provides fresh water for plants, animals, and humans.",
    "Renewable energy sources include solar, wind, and hydroelectric power. These sources are naturally replenished and produce less pollution than fossil fuels.",
    "The human circulatory system transports blood throughout the body. The heart pumps blood through a network of arteries and veins.",
    "The respiratory system brings oxygen into the body and removes carbon dioxide. This exchange occurs in the lungs.",
    "The digestive system breaks down food into nutrients that the body can use. It includes the stomach, small intestine, and large intestine.",
    "The nervous system controls the body's activities by transmitting signals between the brain and the rest of the body.",
    "The skeletal system provides support and protection for the body's organs. It also enables movement.",
    "The muscular system works with the skeletal system to produce movement. Muscles contract and relax to move bones.",
    "The immune system protects the body from harmful invaders like bacteria and viruses.",
  ];
  let fi = 0;
  while (i < 350) {
    push(fillerEasy[fi % fillerEasy.length], "easy");
    fi++;
  }

  return out;
}

function buildAnswerShortQuestion() {
  const out = [];
  let i = 1;
  const push = (q, a, difficulty) => {
    out.push({ id: `asq-${i}`, type: "answer-short-question", title: "Answer Short Question", instruction: TYPES["answer-short-question"].instruction, prepTime: 3, recordTime: 10, difficulty, content: { question: q, expectedAnswer: a } });
    i++;
  };
  for (const item of answerShortQuestionEasy) push(item.q, item.a, "easy");
  for (const item of answerShortQuestionMedium) push(item.q, item.a, "medium");
  for (const item of answerShortQuestionHard) push(item.q, item.a, "hard");

  const extraEasy = [
    ["What is the color of grass?", "green"],
    ["How many months are in a year?", "twelve"],
    ["What do cows give us?", "milk"],
    ["What is the opposite of up?", "down"],
    ["What do we call a baby cat?", "kitten"],
    ["Which month comes after June?", "July"],
    ["What do we use to write on a blackboard?", "chalk"],
    ["How many wheels does a bicycle have?", "two"],
    ["What season comes after summer?", "autumn"],
    ["What do we call the meal at night?", "dinner"],
    ["What is the largest land animal?", "elephant"],
    ["What do we call a place where we borrow books?", "library"],
    ["What instrument measures wind speed?", "anemometer"],
    ["What do we call a person who flies planes?", "pilot"],
    ["What is the capital of France?", "Paris"],
    ["What do we call frozen water?", "ice"],
    ["How many hours are in a day?", "twenty-four"],
    ["What do we call the study of stars?", "astronomy"],
    ["What is the largest planet in our solar system?", "Jupiter"],
    ["What do we call the process of water turning to vapor?", "evaporation"],
    ["What is the chemical formula for water?", "H2O"],
    ["Which continent is Brazil in?", "South America"],
    ["What do we call the opposite of ancient?", "modern"],
    ["How many sides does a hexagon have?", "six"],
    ["What do we call a group of fish?", "school"],
    ["What is the first day of the week?", "Monday"],
    ["What do we call a person who teaches students?", "teacher"],
    ["What do we call the home of a bee?", "hive"],
    ["What is the largest ocean?", "Pacific"],
    ["What do we call the process of plants making food?", "photosynthesis"],
    ["What instrument is used to see distant objects?", "telescope"],
    ["What do we call a person who studies rocks?", "geologist"],
    ["Which gas do humans need to breathe?", "oxygen"],
    ["What do we call the boundary of a country?", "border"],
    ["How many colors are in a rainbow?", "seven"],
    ["What do we call a person who writes books?", "author"],
    ["What is the center of the solar system?", "sun"],
    ["What do we call the season between winter and summer?", "spring"],
    ["What is the fastest land animal?", "cheetah"],
    ["What do we call a person who treats sick people?", "doctor"],
  ];
  for (const [q, a] of extraEasy) push(q, a, "easy");

  const extraMed = [
    ["What is the term for the gradual warming of the planet?", "global warming"],
    ["What do we call the boundary between two different air masses?", "front"],
    ["What is the name of the process where plants release water vapor?", "transpiration"],
    ["What do we call a species that is at risk of becoming extinct?", "endangered"],
    ["What is the term for the variety of life in a particular habitat?", "biodiversity"],
    ["What do we call the center of an atom?", "nucleus"],
    ["What is the name for the process of cell division?", "mitosis"],
    ["What do we call the layer of the atmosphere where weather occurs?", "troposphere"],
    ["What is the term for the transfer of pollen between flowers?", "pollination"],
    ["What do we call the study of fungi?", "mycology"],
    ["What is the term for the movement of tectonic plates?", "plate tectonics"],
    ["What do we call the green pigment in plants?", "chlorophyll"],
    ["What is the largest desert in the world?", "Antarctica"],
    ["What is the chemical formula for table salt?", "NaCl"],
    ["What do we call the theory that the universe began from a single point?", "Big Bang"],
    ["What is the term for the center of an atom?", "nucleus"],
    ["What do we call the study of weather?", "meteorology"],
    ["What is the largest mammal in the world?", "blue whale"],
    ["What do we call the process of a liquid turning into gas?", "evaporation"],
    ["What is the term for animals that eat both plants and meat?", "omnivore"],
    ["What do we call the study of earthquakes?", "seismology"],
    ["What is the name of the galaxy that contains our solar system?", "Milky Way"],
    ["What is the term for the gradual increase in Earth's average temperature?", "global warming"],
    ["What organ in the human body produces insulin?", "pancreas"],
    ["What is the study of ancient life through fossils called?", "paleontology"],
    ["What is the hardest natural substance on Earth?", "diamond"],
    ["What do you call a doctor who performs surgeries?", "surgeon"],
    ["What is the primary gas that plants absorb from the atmosphere?", "carbon dioxide"],
    ["What do we call the process of maintaining stable internal conditions?", "homeostasis"],
    ["What is the term for the idea that supply creates its own demand?", "Say's law"],
    ["What do we call the movement of a substance from high to low concentration?", "diffusion"],
    ["What is the term for the theory that continents were once joined?", "continental drift"],
    ["What do we call the study of fungi?", "mycology"],
    ["What is the name for the energy stored in food?", "calories"],
    ["What is the term for the center of an atom?", "nucleus"],
    ["What do we call the transfer of pollen between flowers?", "pollination"],
    ["What is the largest desert in the world?", "Antarctica"],
    ["What do we call the study of weather?", "meteorology"],
    ["What is the largest mammal in the world?", "blue whale"],
    ["What do we call the process of a liquid turning into gas?", "evaporation"],
  ];
  for (const [q, a] of extraMed) push(q, a, "medium");

  const extraHard = [
    ["What is the term for a word that has the same spelling but different meanings?", "homonym"],
    ["What economic term describes a prolonged period of declining prices?", "deflation"],
    ["What is the scientific study of earthquakes called?", "seismology"],
    ["What philosophical term refers to knowledge gained through experience?", "empiricism"],
    ["What is the psychological term for attributing human characteristics to non-human entities?", "anthropomorphism"],
    ["What is the term for the apparent change in frequency of a wave as the source moves?", "Doppler effect"],
    ["What do we call the economic principle that demand falls as price rises?", "law of demand"],
    ["What is the study of the relationships between organisms and their environment?", "ecology"],
    ["What do we call a government ruled by a single person with absolute power?", "autocracy"],
    ["What is the term for the gradual disappearance of a species?", "extinction"],
    ["What do we call the process by which rocks are formed from sediment?", "sedimentation"],
    ["What is the term for a market structure with a single seller?", "monopoly"],
    ["What do we call the statistical measure of the spread of data?", "standard deviation"],
    ["What is the term for the hypothesis that an asteroid impact caused dinosaur extinction?", "Bolide impact hypothesis"],
    ["What do we call the study of the formation of the universe?", "cosmology"],
    ["What is the term for the process of maintaining stable internal conditions?", "homeostasis"],
    ["What do we call an economic system where the government controls all resources?", "command economy"],
    ["What is the term for the idea that supply creates its own demand?", "Say's law"],
    ["What do we call the movement of a substance from high to low concentration?", "diffusion"],
    ["What is the term for the theory that continents were once joined?", "continental drift"],
    ["What is the term for the apparent change in frequency of a wave as the source moves?", "Doppler effect"],
    ["What do we call the economic principle that demand falls as price rises?", "law of demand"],
    ["What is the study of the relationships between organisms and their environment?", "ecology"],
    ["What do we call a government ruled by a single person with absolute power?", "autocracy"],
    ["What is the term for the gradual disappearance of a species?", "extinction"],
    ["What do we call the process by which rocks are formed from sediment?", "sedimentation"],
    ["What is the term for a market structure with a single seller?", "monopoly"],
    ["What do we call the statistical measure of the spread of data?", "standard deviation"],
    ["What is the term for the hypothesis that an asteroid impact caused dinosaur extinction?", "Bolide impact hypothesis"],
    ["What do we call the study of the formation of the universe?", "cosmology"],
    ["What is the term for the study of earthquakes?", "seismology"],
    ["What is the term for the theory that organisms evolve through natural selection?", "Darwinism"],
    ["What do we call the economic situation where prices rise rapidly?", "inflation"],
    ["What is the term for the gradual increase in Earth's average temperature?", "global warming"],
    ["What do we call the study of heredity in living organisms?", "genetics"],
    ["What is the term for the point in an orbit closest to the sun?", "perihelion"],
    ["What do we call the study of celestial bodies?", "astronomy"],
    ["What is the term for a word opposite in meaning to another?", "antonym"],
    ["What do we call the study of the structure of the human body?", "anatomy"],
    ["What is the term for the gradual increase in prices?", "inflation"],
  ];
  for (const [q, a] of extraHard) push(q, a, "hard");

  // Fill remaining with easy
  const fillerEasy = [
    ["What is the first month of the year?", "January"],
    ["What do we call a baby dog?", "puppy"],
    ["How many days are in a week?", "seven"],
    ["What is the opposite of hot?", "cold"],
    ["What do we call a person who flies airplanes?", "pilot"],
    ["Which planet is known as the Red Planet?", "Mars"],
    ["What do bees produce?", "honey"],
    ["What is the largest ocean on Earth?", "Pacific"],
    ["How many legs does a spider have?", "eight"],
    ["What season comes after winter?", "spring"],
    ["What do we call frozen water?", "ice"],
    ["Which animal is known as the king of the jungle?", "lion"],
    ["How many colors are in a rainbow?", "seven"],
    ["What instrument has black and white keys?", "piano"],
    ["How many sides does a triangle have?", "three"],
    ["Which month has the fewest days?", "February"],
    ["What do we call a place where books are kept?", "library"],
    ["What is the main ingredient in bread?", "flour"],
    ["Which direction does the sun rise from?", "east"],
    ["What do we call a person who repairs cars?", "mechanic"],
  ];
  let fi = 0;
  while (i < 350) {
    const [q, a] = fillerEasy[fi % fillerEasy.length];
    push(q, a, "easy");
    fi++;
  }

  return out;
}

function buildSummarizeGroupDiscussion() {
  const out = [];
  let i = 1;
  const push = (text, difficulty) => {
    out.push({ id: `sgd-${i}`, type: "summarize-group-discussion", title: "Summarize Group Discussion", instruction: TYPES["summarize-group-discussion"].instruction, prepTime: 10, recordTime: 120, difficulty, content: { discussionContent: text } });
    i++;
  };
  for (const t of summarizeGroupDiscussionEasy) push(t, "easy");
  for (const t of summarizeGroupDiscussionMedium) push(t, "medium");
  for (const t of summarizeGroupDiscussionHard) push(t, "hard");

  // Generate additional discussions with varied topics
  const discussionTopics = [
    ["campus sustainability", "office recycling", "improving recycling", "reducing waste", "digital documents", "double-sided printing", "staff workshop"],
    ["library hours", "extending hours", "study spaces", "weekend access", "exam period", "study rooms", "booking system"],
    ["team communication", "weekly check-in", "project management", "shared tools", "chat channels", "remote work", "team building"],
    ["online learning", "flexibility", "technical support", "student engagement", "recorded lectures", "course structure", "live sessions"],
    ["workplace wellness", "mental health", "stress management", "flexible hours", "employee support", "wellness programs", "work-life balance"],
    ["urban planning", "public transportation", "bike lanes", "pedestrian zones", "green spaces", "traffic reduction", "city development"],
    ["food security", "sustainable agriculture", "crop rotation", "organic farming", "local produce", "food distribution", "community gardens"],
    ["renewable energy", "solar panels", "wind turbines", "energy storage", "grid modernization", "clean energy", "carbon reduction"],
    ["digital privacy", "data protection", "online security", "personal information", "cybersecurity", "privacy regulations", "user consent"],
    ["healthcare access", "rural clinics", "telemedicine", "preventive care", "health insurance", "medical services", "patient outcomes"],
    ["education reform", "standardized testing", "curriculum design", "critical thinking", "teacher training", "student assessment", "learning outcomes"],
    ["public transportation", "bus routes", "train schedules", "commuter needs", "traffic congestion", "transit funding", "rural connectivity"],
    ["cultural preservation", "heritage sites", "traditional crafts", "local customs", "community identity", "cultural exchange", "museum programs"],
    ["small business", "local economy", "entrepreneurship", "startup funding", "business support", "job creation", "market access"],
    ["water conservation", "drought management", "water recycling", "conservation efforts", "irrigation efficiency", "water scarcity", "sustainable use"],
  ];

  for (let t = 0; t < discussionTopics.length && i < 320; t++) {
    const [topic, a, b, c, d, e, f] = discussionTopics[t];
    const difficulty = difficultyFor(i, 320);
    const content = `Facilitator: Today we are discussing ${topic}. Let's consider the main challenges and possible solutions.\nParticipant 1: I think ${a} is a good starting point. It could help us ${b} while also addressing ${c}. We should look at what other organizations have done in similar situations.\nParticipant 2: That makes sense, but we need to be careful about ${d}. Some approaches work well in theory but face practical obstacles. We should also consider ${e} as part of the solution.\nFacilitator: Those are valid points. What about the financial implications of these changes?\nParticipant 1: The initial investment in ${f} could be significant, but the long-term savings might justify it. We should look at available funding sources and perhaps start with a small pilot program.\nParticipant 2: A phased approach would be wise. We could begin with ${a} and ${b}, then expand to ${c} if the initial results are positive. We should also think about ${d} and how to address potential concerns.\nFacilitator: Let's also consider who should be responsible for implementing these changes.\nParticipant 1: We should create a working group that includes representatives from different departments. They can oversee ${e} and report on progress regularly. Training and communication will be important.\nParticipant 2: I agree. We should also establish clear metrics to measure success. If we focus on ${f}, we can track whether the changes are having the intended effect. Regular reviews will help us adjust the plan as needed.\nFacilitator: So our main recommendations are ${a}, ${b}, and ${c}, with attention to ${d}, ${e}, and ${f}. We will form a working group to develop a detailed implementation plan and report back next month.`;
    out.push({ id: `sgd-${i}`, type: "summarize-group-discussion", title: "Summarize Group Discussion", instruction: TYPES["summarize-group-discussion"].instruction, prepTime: 10, recordTime: 120, difficulty, content: { discussionContent: content } });
    i++;
  }

  // Fill remaining with more variations
  const moreTopics = [
    ["environmental conservation", "reducing plastic", "protecting wildlife", "climate change", "renewable energy", "sustainable practices", "community awareness"],
    ["public health", "vaccination programs", "disease prevention", "health education", "medical research", "healthcare access", "community wellness"],
    ["economic development", "job creation", "small business", "infrastructure investment", "workforce training", "regional growth", "economic stability"],
    ["social equity", "equal opportunity", "diversity inclusion", "community support", "policy reform", "resource distribution", "social justice"],
    ["technology adoption", "digital literacy", "innovation culture", "research funding", "skill development", "tech infrastructure", "future readiness"],
  ];

  let mi = 0;
  while (i < 320) {
    const [topic, a, b, c, d, e, f] = moreTopics[mi % moreTopics.length];
    const difficulty = difficultyFor(i, 320);
    const content = `Moderator: We are here to discuss ${topic}. Let's explore the key issues and potential approaches.\nSpeaker A: I believe ${a} should be our priority. It addresses the immediate needs while laying the groundwork for ${b}. We need to consider both short-term and long-term perspectives.\nSpeaker B: I agree, but we also need to think about ${c}. Without addressing this, our efforts may not be sustainable. We should look at what has worked in other contexts.\nModerator: What are your thoughts on the resources required for these initiatives?\nSpeaker A: Investment in ${d} is essential, though we should be realistic about budget constraints. A phased approach might be more practical than trying to do everything at once.\nSpeaker B: We should also consider ${e} as a way to build momentum. If people can see early results, they are more likely to support continued efforts. Communication is key.\nModerator: How do we measure whether these efforts are successful?\nSpeaker A: We need clear indicators related to ${f}. Regular monitoring and evaluation will help us understand what is working and what needs adjustment.\nSpeaker B: I also suggest involving the community in the evaluation process. Their feedback is invaluable and ensures that our efforts are responsive to actual needs rather than assumptions.\nModerator: So the group recommends focusing on ${a}, ${b}, and ${c}, with investment in ${d} and ${e}, and clear metrics around ${f}. We will develop a detailed plan and timeline for moving forward.`;
    out.push({ id: `sgd-${i}`, type: "summarize-group-discussion", title: "Summarize Group Discussion", instruction: TYPES["summarize-group-discussion"].instruction, prepTime: 10, recordTime: 120, difficulty, content: { discussionContent: content } });
    i++;
    mi++;
  }

  return out;
}

function buildRespondToSituation() {
  const out = [];
  let i = 1;
  const push = (text, difficulty) => {
    out.push({ id: `rts-${i}`, type: "respond-to-situation", title: "Respond to Situation", instruction: TYPES["respond-to-situation"].instruction, prepTime: 10, recordTime: 40, difficulty, content: { situationContext: text } });
    i++;
  };
  for (const t of respondToSituationEasy) push(t, "easy");
  for (const t of respondToSituationMedium) push(t, "medium");
  for (const t of respondToSituationHard) push(t, "hard");

  const extraEasy = [
    "You are at a restaurant and you are a vegetarian. How would you ask the server about vegetarian options?",
    "You need to return a product to a store because it is defective. How would you explain the situation to the customer service representative?",
    "You are in a meeting and your phone rings. How would you politely excuse yourself?",
    "You accidentally sent an email to the wrong person. How would you handle the situation?",
    "You are at a party and someone spills a drink on you. How would you respond politely?",
    "You need to ask your coworker to lower their voice because they are on a phone call. How would you ask?",
    "You are at a hotel and the air conditioning is not working. How would you report this to the front desk?",
    "You are waiting in line and someone cuts in front of you. How would you address this politely?",
    "You need to ask your professor for clarification on an assignment. How would you phrase your question?",
    "You are at a store and the cashier gives you the wrong change. How would you point this out?",
    "You are a student and you need to borrow notes from a classmate. How would you ask?",
    "You are at a bus stop and you need to ask someone if this is the right bus for downtown. How would you ask?",
    "You are working in a cafe and a customer asks for a recommendation. How would you respond?",
    "You are at a doctor's office and you are nervous about a procedure. How would you express your concerns?",
    "You are a new employee and you need to ask a colleague where the printer is. How would you ask?",
    "You are at a restaurant and your order is taking a long time. How would you politely check on it?",
    "You need to ask your roommate to clean up the kitchen. How would you bring this up?",
    "You are at a library and someone is talking loudly. How would you politely ask them to be quiet?",
    "You are at a gym and someone is using equipment you need. How would you ask to use it?",
    "You need to ask your teacher if you can leave class early for an appointment. How would you ask?",
  ];
  for (const t of extraEasy) push(t, "easy");

  const extraMed = [
    "You are a manager and you need to give negative feedback to an employee about their performance. How would you approach this conversation?",
    "You are a customer and you have been charged twice for the same purchase. How would you resolve this with the company?",
    "You are a project leader and a team member disagrees with your approach in front of others. How would you handle this?",
    "You are a salesperson and a customer is comparing your product to a competitor's. How would you respond?",
    "You are a teacher and a student is consistently disruptive in class. How would you address this privately?",
    "You are an employee and you need to request a raise from your manager. How would you make the case?",
    "You are a host and a guest has overstayed their welcome. How would you politely indicate it is time to leave?",
    "You are a team member and you disagree with a decision made by your manager. How would you express your concern respectfully?",
    "You are a customer service agent and a customer is shouting at you. How would you de-escalate the situation?",
    "You are a colleague and you need to cover for a coworker's mistake with a client. How would you handle this?",
    "You are a volunteer coordinator and a volunteer is not showing up for their shifts. How would you address this?",
    "You are a student and you need to negotiate a deadline extension for a legitimate reason. How would you approach the professor?",
    "You are a supervisor and you need to address a hygiene issue with an employee. How would you have this sensitive conversation?",
    "You are a client and you are unhappy with the service provided by a contractor. How would you express your dissatisfaction constructively?",
    "You are a team leader and you need to announce layoffs to your department. How would you handle this difficult communication?",
  ];
  for (const t of extraMed) push(t, "medium");

  const extraHard = [
    "You are a senior executive and you discover that a competitor has reverse-engineered your flagship product. How would you respond strategically while maintaining professional relationships?",
    "You are a crisis manager and your company is facing simultaneous lawsuits from multiple stakeholders. How would you coordinate the response?",
    "You are a diplomatic envoy and you must negotiate a trade agreement between two nations with historically tense relations. How would you find common ground?",
    "You are a chief ethics officer and you discover questionable practices in a high-revenue division. How would you handle the investigation while protecting the company?",
    "You are a public health official and you must communicate a controversial vaccine mandate to a skeptical population. How would you build trust and compliance?",
    "You are a venture capitalist and a founder you backed is facing a hostile takeover attempt. How would you advise them while protecting your investment?",
    "You are a university president and faculty are protesting a budget decision that affects tenure. How would you address their concerns while maintaining fiscal responsibility?",
    "You are a senior partner at a law firm and a client is involved in a high-profile case that could damage the firm's reputation. How would you manage the situation?",
    "You are a government minister and a policy you championed has failed to deliver expected results. How would you communicate this to the public and propose alternatives?",
    "You are a chief technology officer and a security breach has exposed customer data. How would you lead the response and rebuild trust?",
    "You are an international aid coordinator and resources are insufficient for the scale of a humanitarian crisis. How would you prioritize and negotiate for additional support?",
    "You are a board chair and the CEO has been accused of misconduct. How would you handle the investigation and potential transition?",
    "You are a senior negotiator and you must mediate a labor dispute where both sides have entrenched positions. How would you find a breakthrough?",
    "You are a research director and your institution's work is being challenged for lack of diversity in its samples. How would you address this criticism while maintaining scientific rigor?",
    "You are a policy advisor and you must recommend a controversial immigration reform to a divided government. How would you build consensus?",
  ];
  for (const t of extraHard) push(t, "hard");

  // Fill to 320 with easy
  const fillerEasy = [
    "You are at a bookstore and you cannot find the book you are looking for. How would you ask for help?",
    "You are at a coffee shop and you want to order something that is not on the menu. How would you ask?",
    "You are at a train station and you need to find out which platform your train departs from. How would you ask?",
    "You are at a grocery store and you cannot find a specific item. How would you ask an employee?",
    "You are at a restaurant and you have a food allergy. How would you inform the server?",
    "You are at a library and you need to find a specific book. How would you ask the librarian?",
    "You are at a hotel and you need extra towels. How would you request them?",
    "You are at a pharmacy and you need help finding a medicine. How would you ask the pharmacist?",
    "You are at a bank and you need to open a new account. How would you ask for information?",
    "You are at a post office and you need to send a package. How would you ask for help?",
    "You are at a museum and you want to know more about an exhibit. How would you ask a guide?",
    "You are at a park and you need to find the restroom. How would you ask someone?",
    "You are at a gym and you need help with a machine. How would you ask a trainer?",
    "You are at a salon and you want to explain the haircut you want. How would you describe it?",
    "You are at a pet store and you are looking for a specific type of pet food. How would you ask?",
    "You are at a clothing store and you need a different size. How would you ask for help?",
    "You are at a cinema and you need to find your seat. How would you ask an usher?",
    "You are at a bus stop and you need to know the time of the next bus. How would you ask?",
    "You are at a supermarket and you need to find the checkout. How would you ask someone?",
    "You are at a restaurant and you want to order a vegetarian meal. How would you ask the server?",
  ];
  let fi = 0;
  while (i < 320) {
    push(fillerEasy[fi % fillerEasy.length], "easy");
    fi++;
  }

  return out;
}

// ===== BUILD ALL =====
const allQuestions = [
  ...buildReadAloud(),
  ...buildRepeatSentence(),
  ...buildDescribeImage(),
  ...buildRetellLecture(),
  ...buildAnswerShortQuestion(),
  ...buildSummarizeGroupDiscussion(),
  ...buildRespondToSituation(),
];

// Generate TypeScript file
const lines = [];
lines.push('export interface SpeakingQuestion {');
lines.push('  id: string;');
lines.push('  type: TestType;');
lines.push('  title: string;');
lines.push('  instruction: string;');
lines.push('  prepTime: number;');
lines.push('  recordTime: number;');
lines.push('  content: QuestionContent;');
lines.push('  difficulty: "easy" | "medium" | "hard";');
lines.push('}');
lines.push('');
lines.push('export type TestType =');
lines.push('  | "read-aloud"');
lines.push('  | "repeat-sentence"');
lines.push('  | "describe-image"');
lines.push('  | "retell-lecture"');
lines.push('  | "answer-short-question"');
lines.push('  | "summarize-group-discussion"');
lines.push('  | "respond-to-situation";');
lines.push('');
lines.push('interface QuestionContent {');
lines.push('  text?: string;');
lines.push('  imageUrl?: string;');
lines.push('  imageDescription?: string;');
lines.push('  audioUrl?: string;');
lines.push('  lectureContent?: string;');
lines.push('  question?: string;');
lines.push('  expectedAnswer?: string;');
lines.push('  situationContext?: string;');
lines.push('  discussionContent?: string;');
lines.push('}');
lines.push('');
lines.push('export const speakingQuestions: SpeakingQuestion[] = [');

const typeLabels = {
  "read-aloud": "READ ALOUD",
  "repeat-sentence": "REPEAT SENTENCE",
  "describe-image": "DESCRIBE IMAGE",
  "retell-lecture": "RETELL LECTURE",
  "answer-short-question": "ANSWER SHORT QUESTION",
  "summarize-group-discussion": "SUMMARIZE GROUP DISCUSSION",
  "respond-to-situation": "RESPOND TO SITUATION",
};

let currentType = null;
let typeCount = 0;
for (const q of allQuestions) {
  if (q.type !== currentType) {
    if (currentType !== null) {
      lines.push('');
    }
    currentType = q.type;
    typeCount = allQuestions.filter(x => x.type === currentType).length;
    lines.push(`  // ================== ${typeLabels[currentType]} - ${typeCount} Questions ==================`);
  }
  lines.push('  {');
  lines.push(`    id: "${q.id}",`);
  lines.push(`    type: "${q.type}",`);
  lines.push(`    title: "${q.title}",`);
  lines.push(`    instruction: ${JSON.stringify(q.instruction)},`);
  lines.push(`    prepTime: ${q.prepTime},`);
  lines.push(`    recordTime: ${q.recordTime},`);
  lines.push(`    difficulty: "${q.difficulty}",`);
  const contentLines = Object.entries(q.content).map(([k, v]) => `      ${k}: ${JSON.stringify(v)}`).join(',\n');
  lines.push(`    content: {`);
  lines.push(contentLines);
  lines.push(`    }`);
  lines.push('  },');
}

lines.push('];');
lines.push('');
lines.push('export function getQuestionsByType(type: TestType): SpeakingQuestion[] {');
lines.push('  return speakingQuestions.filter(q => q.type === type);');
lines.push('}');
lines.push('');
lines.push('export function getQuestionsByDifficulty(difficulty: "easy" | "medium" | "hard"): SpeakingQuestion[] {');
lines.push('  return speakingQuestions.filter(q => q.difficulty === difficulty);');
lines.push('}');
lines.push('');
lines.push('export function getQuestionsByTypeAndDifficulty(type: TestType, difficulty: "easy" | "medium" | "hard"): SpeakingQuestion[] {');
lines.push('  return speakingQuestions.filter(q => q.type === type && q.difficulty === difficulty);');
lines.push('}');
lines.push('');
lines.push('export function getTestTypeInfo(type: TestType) {');
lines.push('  const info: Record<TestType, { name: string; description: string; icon: string }> = {');
lines.push('    "read-aloud": {');
lines.push('      name: "Read Aloud",');
lines.push('      description: "Read a text aloud with clear pronunciation and natural pacing",');
lines.push('      icon: "📖"');
lines.push('    },');
lines.push('    "repeat-sentence": {');
lines.push('      name: "Repeat Sentence",');
lines.push('      description: "Listen and repeat the sentence exactly as heard",');
lines.push('      icon: "🔁"');
lines.push('    },');
lines.push('    "describe-image": {');
lines.push('      name: "Describe Image",');
lines.push('      description: "Describe what you see in the image in detail",');
lines.push('      icon: "🖼️"');
lines.push('    },');
lines.push('    "retell-lecture": {');
lines.push('      name: "Re-tell Lecture",');
lines.push('      description: "Listen to a lecture and retell it in your own words",');
lines.push('      icon: "🎓"');
lines.push('    },');
lines.push('    "answer-short-question": {');
lines.push('      name: "Answer Short Question",');
lines.push('      description: "Answer the question with a word or short phrase",');
lines.push('      icon: "❓"');
lines.push('    },');
lines.push('    "summarize-group-discussion": {');
lines.push('      name: "Summarize Group Discussion",');
lines.push('      description: "Listen to a discussion and summarize key points",');
lines.push('      icon: "👥"');
lines.push('    },');
lines.push('    "respond-to-situation": {');
lines.push('      name: "Respond to Situation",');
lines.push('      description: "Respond appropriately to a given scenario",');
lines.push('      icon: "💬"');
lines.push('    }');
lines.push('  };');
lines.push('  return info[type];');
lines.push('}');

const output = lines.join('\n');
await writeFile(new URL("../src/data/speakingQuestions.ts", import.meta.url), output, "utf8");

// Print summary
const counts = {};
for (const q of allQuestions) {
  counts[q.type] = (counts[q.type] || 0) + 1;
}
console.log("Generated speaking questions:");
for (const [type, count] of Object.entries(counts)) {
  console.log(`  ${type}: ${count}`);
}
console.log(`  Total: ${allQuestions.length}`);