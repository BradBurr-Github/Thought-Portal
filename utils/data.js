const usernamesEmailAddresses = [
  { username: 'emilyharper', email: 'emily.harper@gmail.com'},
  { username: 'noahwatson', email: 'noah.watson@gmail.com'},
  { username: 'oliviacarter', email: 'olivia.carter@gmail.com'},
  { username: 'liamanderson', email: 'liam.anderson@gmail.com'},
  { username: 'avamiller', email: 'ava.miller@gmail.com'},
  { username: 'masonparker', email: 'mason.parker@gmail.com'},
  { username: 'sophiabennett', email: 'sophia.bennett@gmail.com'},
  { username: 'lucasdavis', email: 'lucas.davis@gmail.com'},
  { username: 'miabrooks', email: 'mia.brooks@gmail.com'},
  { username: 'elijahgriffin', email: 'elijah.griffin@gmail.com'},
  { username: 'isabellafoster', email: 'isabella.foster@gmail.com'},
  { username: 'benjaminreed', email: 'benjamin.reed@gmail.com'},
  { username: 'ameliajenkins', email: 'amelia.jenkins@gmail.com'},
  { username: 'jamesthompson', email: 'james.thompson@gmail.com'},
  { username: 'charlottecooper', email: 'charlotte.cooper@gmail.com'},
  { username: 'ethanscott', email: 'ethan.scott@gmail.com'},
  { username: 'evelynmitchell', email: 'evelyn.mitchell@gmail.com'},
  { username: 'alexandermorgan', email: 'alexander.morgan@gmail.com'},
  { username: 'abigailpeterson', email: 'abigail.peterson@gmail.com'},          
  { username: 'danielreynolds', email: 'daniel.reynolds@gmail.com'},
  { username: 'harpersanders', email: 'harper.sanders@gmail.com'},
  { username: 'samuelclark', email: 'samuel.clark@gmail.com'},
  { username: 'lilyhenderson', email: 'lily.henderson@gmail.com'},
  { username: 'jacksonwright', email: 'jackson.wright@gmail.com'},
  { username: 'ariaevans', email: 'aria.evans@gmail.com'},
  { username: 'matthewadams', email: 'matthew.adams@gmail.com'},
  { username: 'gracemorris', email: 'grace.morris@gmail.com'},
  { username: 'henrytorres', email: 'henry.torres@gmail.com'},
  { username: 'scarlettturner', email: 'scarlett.turner@gmail.com'},            
  { username: 'wyattgonzalez', email: 'wyatt.gonzalez@gmail.com'},
  { username: 'ellaward', email: 'ella.ward@gmail.com'},
  { username: 'josephhayes', email: 'joseph.hayes@gmail.com'},
  { username: 'chloebryant', email: 'chloe.bryant@gmail.com'},
  { username: 'davidfisher', email: 'david.fisher@gmail.com'},
  { username: 'rileybutler', email: 'riley.butler@gmail.com'},
  { username: 'lukepatterson', email: 'luke.patterson@gmail.com'},
  { username: 'zoeymartinez', email: 'zoey.martinez@gmail.com'},
  { username: 'carternelson', email: 'carter.nelson@gmail.com'},
  { username: 'hannahphillips', email: 'hannah.phillips@gmail.com'},
  { username: 'owenrichardson', email: 'owen.richardson@gmail.com'},
  { username: 'scarlettcollins', email: 'scarlett.collins@gmail.com'},
  { username: 'calebrogers', email: 'caleb.rogers@gmail.com'},
  { username: 'noraflores', email: 'nora.flores@gmail.com'},
  { username: 'sebastianperry', email: 'sebastian.perry@gmail.com'},
  { username: 'madisonjenkins', email: 'madison.jenkins@gmail.com'},
  { username: 'dylanbell', email: 'dylan.bell@gmail.com'},
  { username: 'averyjames', email: 'avery.james@gmail.com,'},
  { username: 'levibailey', email: 'levi.bailey@gmail.com'},
  { username: 'penelopegreen', email: 'penelope.green@gmail.com'},
  { username: 'isaacwood', email: 'isaac.wood@gmail.com'},
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

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username and email
const getRandomUsernameAndEmail = () => {
  const arrayLength = usernamesEmailAddresses.length;
  const index = Math.floor(Math.random() * arrayLength);
  return usernamesEmailAddresses[index];
}

// Function to get a random thought
const getRandomThought = () => {
  return getRandomArrItem(thoughts);
};


// // Function to generate random thoughts that we can add to the database. Includes thought reactions.
// const getRandomThoughts = () => {
//   let results = [];
//   let thoughtsCount = Math.floor(Math.random() * 3) + 1;
//   for (let i = 0; i < thoughtsCount; i++) {
//     let temp = getRandomArrItem(thoughts)
//     results.push({
      
      
//       thoughtText: temp,
//       //reactions: [...getRandomReactions()],
//     });
//   }
//   //console.log(results);
//   return results;
// };

// Create the reactions that will be added to each thought
const getRandomReactions = () => {
  let results = [];
  let usernameEmail = [];
  const thoughtCount = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < thoughtCount; i++) {
    usernameEmail = getRandomUsernameAndEmail();
    results.push({
      reaction: getRandomArrItem(reactions),
      username: usernameEmail.username,
    });
  }
  return results;
};

function getRandomTimeOfDay() {
  // Generate a random number of minutes in a day (0 to 1439)
  const totalMinutesInDay = 24 * 60; // 1440 minutes in a day
  const randomMinutes = Math.floor(Math.random() * totalMinutesInDay);
  // Convert random minutes to hours and minutes
  const hours = Math.floor(randomMinutes / 60);
  const minutes = randomMinutes % 60;
  // Create a new Date object for the random time
  const randomDate = new Date();
  randomDate.setHours(hours, minutes, 0, 0); // Set hours, minutes, seconds, and milliseconds
  return randomDate.toTimeString().slice(0, 5); // Returns time in HH:MM format
}

// Get random Date over the past 30 days
function getRandomDateInPast30Days() {
  const now = new Date();
  // Calculate the date and time 30 days ago
  const pastDate = new Date();
  pastDate.setDate(now.getDate() - 30);
  // Get the time in milliseconds for both dates
  const nowTime = now.getTime();
  const pastDateTime = pastDate.getTime();
  // Generate a random number of milliseconds between the two timestamps
  const randomTime = Math.floor(Math.random() * (nowTime - pastDateTime + 1)) + pastDateTime;
  // Create a new Date object from the random milliseconds
  const randomDate = new Date(randomTime);
  return randomDate;
}

// Export the functions for use in seed.js
module.exports = { getRandomUsernameAndEmail, getRandomThought, getRandomDateInPast30Days };
