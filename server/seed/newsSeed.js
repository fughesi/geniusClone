const dbConnect = require("../config/dbConnect");
const seeder = require("../config/dbSeed");
const News = require("../models/newsModel");
const { v4 } = require("uuid");

dbConnect;

const news = [
  new News({
    id: v4(),
    title: "Thundercat & Tame Impala Join Forces For New Song “No More Lies”",
    snippet: "It’s Thundercat’s first collaboration with Tame Impala and first new song in more than three years.",
    article: `Thundercat and Tame Impala have long been on similar wavelengths, so it makes sense they’ve finally teamed up for a song. Released earlier today, “No More Lies” is a funky psych-rock delight about an utterly doomed relationship. Crashing into a “world of pain,” as Thundercat sings at one point, has never sounded so fun. “I’ve wanted to work with Kevin since the very first Tame Impala album,” Thundercat said in a press release, shouting out Tame Impala multi-instrumentalist mastermind Kevin Parker. “I feel that I knew that us working together would be special. I’ve been excited about this song for a long time and hope to create more with Kevin in the future.” \n Parker and Thundercat (real name Stephen Bruner) share writing and production credit on the track, which features plenty of Thundercat’s signature squishy bass sounds. Thundercat handles the first verse and sets up a story of two people who seemingly aren’t ready to commit to each other. \n Also in the first verse, Thundercat introduces a car metaphor that he continues into the second verse, where he shoulders the blame for this couple’s troubles. (Let’s hope “I’m just kind of ass” enters the vernacular.) \n  On the chorus, Parker—presumably voicing the same character—gears up for a period of solitude, though Thundercat (lyrics marked with italics) opens up the possibility of a reconciliation. \n In the third verse, Thundercat is finally ready to cut bait on this thing. It’s not going to be easy, but like he says a few lines earlier, you can’t “look back to move forward.” \n The song ends with Thundercat talking to his soon-to-be ex, trying to explain himself as best he can. He does his best to not sound like a callous flake, but even he would admit he does a lousy job. Maybe it’s a West Coast thing.`,
    author: "644a88b5849a447b4d2c56da",
    date: Date.now().toString(),
    photo: "http://localhost:5200/images/cheetaRun.jpg",
    photoAlt: "deer chasing a cheetah",
    categories: ["News"],
    referencedArtists: ["THUNDERCAT", "TAME IMPALA"],
    referencedSongs: ["NO MORE LIES"],
    isPublished: true,
  }),
  new News({
    id: v4(),
    title: `SEVENTEEN Fight For Themselves On New Song \"F*ck My Life"`,
    snippet: `The song comes off the K-pop group’s latest EP ‘FML.’`,
    article: `K-pop group SEVENTEEN return today with their new EP, FML, the follow-up to 2022’s Dream. One of the project’s six tracks, “F*ck My Life”—as well as its English translation—has already made its way into the Top 10 on the Genius Top Songs chart. \n Comprising 13 members, SEVENTEEN handled most of the writing and producing on FML themselves. Member Woozi took the lead on production, while bandmates S.Coups, Hoshi, Wonwoo, Mingyu, Vernon and Dino, took part in either writing the lyrics or composing the music. \n “F*ck My Life” may get its title from a pessimistic English phrase, but SEVENTEEN actually see the song as having a positive message about not giving up during even the most difficult of times. “We hope that people picture ‘myself stronger’ and leap forward, even if they’re beaten down and exhausted at the moment,” group member The 8 said. \n On the first verse, according to Genius’ English translation, group member Mingyu describes feeling lost and hopeless. He thinks he’s all alone in those feelings. \n Things get worse on the pre-chorus, where Wonwoo almost gives in and lets the world tear him down. Luckily, the desire to find his way back to himself is still there. \n On the chorus, that desire grows stronger and SEVENTEEN resolve to fight through the pain and re-find themselves. \n Jun is tired of doing nothing to change his lonely situation on the second verse. \n FML may have just arrived today, but the EP is already a massive hit. Ahead of its release, the group set the record for most pre-orders of a K-pop album ever globally, amassing over 4.64 million pre-orders. \n You can read all the lyrics to “F*ck My Life”—and its English translation—on Genius now.`,
    author: "644a88b5849a447b4d2c56da",
    date: Date.now().toString(),
    photo: "http://localhost:5200/images/fml.jpg",
    photoAlt: "cover of FML album",
    categories: ["News"],
    referencedArtists: ["SEVENTEEN (세븐틴)"],
    referencedSongs: ["F*CK MY LIFE"],
    isPublished: true,
  }),
  new News({
    id: v4(),
    title: `this is testing BS`,
    snippet: `delete this shit`,
    article: `Don't you dare keep this on the mother fuckng database or I'll pee in your cereal`,
    author: "644de1e5256d5e2d5bc462de",
    date: Date.now().toString(),
    photo: "http://localhost:5200/images/monkey.jpg",
    photoAlt: "a mother fucking monkey",
    categories: ["News"],
    referencedArtists: ["SEVENTEEN (세븐틴)"],
    referencedSongs: ["F*CK MY LIFE"],
    isPublished: true,
  }),
];

seeder(news);
