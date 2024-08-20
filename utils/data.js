const usernamesEmailAddresses = [
  { username: 'EmilyHarper', email: 'emilyharper@gmail.com'},
  { username: 'NoahWatson', email: 'emilyharper@gmail.com'},
  { username: 'OliviaCarter', email: 'emilyharper@gmail.com'},
  { username: 'LiamAnderson', email: 'emilyharper@gmail.com'},
  { username: 'AvaMiller', email: 'emilyharper@gmail.com'},
  { username: 'MasonParker', email: 'emilyharper@gmail.com'},
  { username: 'SophiaBennett', email: 'emilyharper@gmail.com'},
  { username: 'LucasDavis', email: 'emilyharper@gmail.com'},
  { username: 'MiaBrooks', email: 'emilyharper@gmail.com'},
  { username: 'ElijahGriffin', email: 'emilyharper@gmail.com'},
  { username: 'IsabellaFoster', email: 'emilyharper@gmail.com'},
  { username: 'BenjaminReed', email: 'emilyharper@gmail.com'},
  { username: 'AmeliaJenkins', email: 'emilyharper@gmail.com'},
  { username: 'JamesThompson', email: 'emilyharper@gmail.com'},
  { username: 'CharlotteCooper', email: 'emilyharper@gmail.com'},
  { username: 'EthanScott', email: 'emilyharper@gmail.com'},
  { username: 'EvelynMitchell', email: 'emilyharper@gmail.com'},
  { username: 'AlexanderMorgan', email: 'emilyharper@gmail.com'},
  { username: 'AbigailPeterson', email: 'emilyharper@gmail.com'},
  { username: 'DanielReynolds', email: 'emilyharper@gmail.com'},
  { username: 'HarperSanders', email: 'emilyharper@gmail.com'},
  { username: 'SamuelClark', email: 'emilyharper@gmail.com'},
  { username: 'LilyHenderson', email: 'emilyharper@gmail.com'},
  { username: 'JacksonWright', email: 'emilyharper@gmail.com'},
  { username: 'AriaEvans', email: 'emilyharper@gmail.com'},
  { username: 'MatthewAdams', email: 'emilyharper@gmail.com'},
  { username: 'GraceMorris', email: 'emilyharper@gmail.com'},
  { username: 'HenryTorres', email: 'emilyharper@gmail.com'},
  { username: 'ScarlettTurner', email: 'emilyharper@gmail.com'},
  { username: 'WyattGonzalez', email: 'emilyharper@gmail.com'},
  { username: 'EllaWard', email: 'emilyharper@gmail.com'},
  { username: 'JosephHayes', email: 'emilyharper@gmail.com'},
  { username: 'ChloeBryant', email: 'emilyharper@gmail.com'},
  { username: 'DavidFisher', email: 'emilyharper@gmail.com'},
  { username: 'RileyButler', email: 'emilyharper@gmail.com'},
  { username: 'LukePatterson', email: 'emilyharper@gmail.com'},
  { username: 'ZoeyMartinez', email: 'emilyharper@gmail.com'},
  { username: 'CarterNelson', email: 'emilyharper@gmail.com'},
  { username: 'HannahPhillips', email: 'emilyharper@gmail.com'},
  { username: 'OwenRichardson', email: 'emilyharper@gmail.com'},
  { username: 'ScarlettCollins', email: 'emilyharper@gmail.com'},
  { username: 'CalebRogers', email: 'emilyharper@gmail.com'},
  { username: 'NoraFlores', email: 'emilyharper@gmail.com'},
  { username: 'SebastianPerry', email: 'emilyharper@gmail.com'},
  { username: 'MadisonJenkins', email: 'emilyharper@gmail.com'},
  { username: 'DylanBell', email: 'emilyharper@gmail.com'},
  { username: 'AveryJames', email: 'emilyharper@gmail.com'},
  { username: 'LeviBailey', email: 'emilyharper@gmail.com'},
  { username: 'PenelopeGreen', email: 'emilyharper@gmail.com'},
  { username: 'IsaacWood', email: 'emilyharper@gmail.com'},
];

const thoughts = [
  "I think reading books is one of the best ways to expand your perspective.",
  "Social media does more harm than good when it comes to mental health.",
  "Nature is the ultimate source of inspiration, more so than any work of art.",
  "Fast food chains should be held more accountable for contributing to unhealthy diets.",
  "School systems focus too much on testing and not enough on real-world skills.",
  "Technology is advancing faster than our ability to ethically regulate it.",
  "Cats are the superior pets; they’re independent yet affectionate.",
  "Climate change is the most pressing issue facing humanity, and we’re not doing enough.",
  "Work-life balance is more important than career success.",
  "Minimalism is overrated; personal expression through belongings matters.",
  "Everyone should travel at least once in their life to truly understand different cultures.",
  "Video games can be just as enriching as books or movies, depending on the content.",
  "People should prioritize spending time with loved ones over chasing material success.",
  "Remote work should become a permanent option for most industries.",
  "Coffee culture has gotten out of control; it's just a drink, not a personality.",
  "Art education should be taken as seriously as STEM subjects in schools.",
  "Automation is inevitable, but we should focus on making sure people aren’t left behind.",
  "Organic food is often overpriced and doesn’t always offer significant health benefits.",
  "Public transportation should be free in major cities to reduce traffic and pollution.",
  "Everyone should learn basic coding—it’s a language of the future.",
  "Childhood is the most important time for nurturing creativity, yet schools often stifle it.",
  "Self-care isn’t selfish; it’s necessary for a healthy life.",
  "Democracy, while flawed, is still the best system of government we have.",
  "Streaming services have revolutionized entertainment for the better, but they’ve killed the joy of browsing in stores.",
  "The future of education should be more individualized, catering to different learning styles.",
  "Eating meat is unethical in the modern world, given the availability of alternatives.",
  "The concept of owning land is outdated; no one can truly own the Earth.",
  "Cooking at home is one of the most underrated life skills people should cultivate.",
  "Success should be measured by personal happiness, not wealth or status.",
  "Online anonymity should be regulated to reduce harmful behavior.",
  "Traditional 9-to-5 work schedules are outdated and should be restructured for flexibility.",
  "Books will always be more immersive than movies because they engage the imagination.",
  "Universities should reduce tuition fees drastically; education should be accessible to everyone.",
  "Public libraries are one of the most valuable institutions in any community.",
  "True creativity often emerges from boredom, not constant stimulation.",
  "Fast fashion is an environmental disaster, and we should all consume clothing more mindfully.",
  "Happiness doesn’t come from having more stuff; it comes from meaningful connections.",
  "School uniforms suppress individuality and don’t solve behavioral issues.",
  "The media should focus more on solutions than problems to inspire positive action.",
  "Introverts are often undervalued in a society that praises extroversion.",
  "Our obsession with celebrity culture is distracting us from real issues.",
  "Virtual reality will change the way we interact with the world, and that’s not entirely a good thing.",
  "High school curriculums should require basic financial literacy as a graduation requirement.",
  "We underestimate how much sleep impacts every aspect of our lives.",
  "The pursuit of perfection is often more harmful than beneficial.",
  "The world would be a better place if everyone practiced a little more kindness and empathy.",
  "The future of cities should be focused on green spaces and sustainability.",
  "Most conspiracy theories are dangerous distractions from actual societal problems.",
  "Music should be a universal part of education; it enriches the soul and improves learning.",
  "Mental health days should be normalized in all workplaces, just like sick days.",
];

const reactions = [
  "I wonder how the universe really began.",
  "I can't believe she remembered my birthday!",
  "You're right, that solution would definitely work.",
  "I don't think that plan is going to solve the problem.",
  "I'm not sure if I buy what he's saying; it sounds too good to be true.",
  "If I take this new job, how will it impact my future?",
  "I can't wait to finally go on that vacation!",
  "Why does this equation suddenly not make sense?",
  "Thank goodness that meeting is over; now I can relax.",
  "What if I’m not good enough for this role?",
  "I have a feeling that tomorrow will be a better day.",
  "No matter what I do, things just never seem to go right.",
  "I really miss the way things used to be.",
  "I can’t stop smiling; this is the happiest I've been in a long time.",
  "How could he betray my trust like that?",
  "I expected more from that experience; it just wasn’t what I hoped for.",
  "Maybe this will be the opportunity that finally changes everything.",
  "What if everything falls apart after this decision?",
  "I can't shake the feeling that something bad is going to happen.",
  "No matter what, I am going to finish this project.",
  "That joke was so ridiculous, but I can’t stop laughing!",
  "I can't believe I said that in front of everyone; I feel so awkward now.",
  "The view from this mountain is absolutely breathtaking.",
  "I’m so thankful that you were there for me when I needed help.",
  "Honestly, I don’t really care what happens next.",
  "Why does this keep happening? I’m so tired of trying!",
  "After hearing her story, I feel like I can accomplish anything.",
  "I know I have what it takes to succeed in this challenge.",
  "I shouldn’t have spoken to her like that; it wasn’t fair.",
  "I can't believe anyone would treat another person so horribly.",
  "I worked hard for this, and I’m proud of what I’ve achieved.",
  "If only I had taken that chance when I had the opportunity.",
  "I really feel for him; that must be so difficult to go through.",
  "I miss those carefree summer days from when we were kids.",
  "I understand exactly how she feels; I’ve been through something similar.",
  "I can’t believe what I just heard; that was completely unexpected.",
  "It’s over, and everything turned out okay. I can finally breathe easy.",
  "I wish I could be as successful as she is.",
  "He’s so talented; I truly admire his dedication and hard work.",
  "She’s struggling right now; I just want to help her through this.",
  "I’m not sure if this is the right move; maybe I should think it over.",
  "I guess there's nothing I can do about it now; I’ll just accept it.",
  "Everything is going smoothly, and I feel at peace with where I am.",
  "I’m not sure I can trust him after what happened last time.",
  "I really hope things turn out well in the end.",
  "It's amazing how nature creates such beautiful patterns.",
  "Something doesn’t feel right about this situation; I need to be careful.",
  "I’m so ready to get started on this new adventure!",
  "Sitting by the lake at sunset brings me such a deep sense of calm.",
  "I didn’t do anything wrong; why are you blaming me?",
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random applications that we can add to the database. Includes application tags.
const getRandomApplications = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(appDescriptions),
      buildSuccess: Math.random() < 0.5,
      tags: [...getApplicationTags(3)],
    });
  }
  return results;
};

// Create the tags that will be added to each application
const getApplicationTags = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleTags);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      tagBody: getRandomArrItem(possibleTags),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomApplications };
