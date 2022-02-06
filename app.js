const WordDatabase = require('./data/WordDatabase');

// Init Value.
const randomIndicator = Math.floor(Math.random() * WordDatabase.length);
const WordQuiz = WordDatabase[1];
const UserAnswer = "spell"

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

const answerValid = UserAnswerArray.length === WordQuizArray.length;
const answerTooShort = UserAnswerArray.length < WordQuizArray.length;
const answerTooLong = UserAnswerArray.length > WordQuizArray.length;


if (answerValid) {
    if (checkWordInDatabase) {
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
        console.log("Your answer isn't in the word list, Please try again.");
    }
} else if (answerTooLong) {
    console.log("Your answer is too long, Please try again.");
} else if (answerTooShort) {
    console.log("Your answer is too short, Please try again.");
}

let output = () => {
    if (GreenZone.length === WordQuizArray.length) {
        console.log("\nYou Win !!");
    }
}

output();