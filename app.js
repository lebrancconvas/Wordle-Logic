const WordDatabase = require('./data/WordDatabase');

// Init Value.
const randomIndicator = Math.floor(Math.random() * WordDatabase.length);
const WordQuiz = WordDatabase[0];
const UserAnswer = "Muck"

// Convert to Upper for easy to manage.
const WordDatabaseUpper = WordDatabase.map(x => x.toUpperCase());
const WordQuizUpper = WordQuiz.toUpperCase();
const UserAnswerUpper = UserAnswer.toUpperCase();

const checkWordInDatabase = WordDatabaseUpper.includes(UserAnswerUpper);

const WordQuizArray = WordQuizUpper.split('');
const UserAnswerArray = UserAnswerUpper.split('');

let checkWordInQuiz;

let GreenZone = [];
let YellowZone = [];
let BlackZone = [];

let checkLength = WordQuizArray.length === UserAnswerArray.length;

if (checkLength) {
    for (let i = 0; i < UserAnswerArray.length; i++) {
        if (WordQuizArray.includes(UserAnswerArray[i])) {
            if (WordQuizArray[i] === UserAnswerArray[i]) {
                GreenZone.push(UserAnswerArray[i]);
            } else {
                YellowZone.push(UserAnswerArray[i]);
            }
        } else {
            BlackZone.push(UserAnswerArray[i]);
        }
    }
    console.log(`Green Zone: ${GreenZone}\nYellow Zone: ${YellowZone}\nBlack Zone: ${BlackZone}`);

} else {
    console.log("Answer again.")
}