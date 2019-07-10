
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// console.log(alphabet.indexOf)
// Objects to pull from
let devine = {
    title: "Devine",
    dateOrAge: "Born: October 19, 1945. Died: March 7, 1988",
    hint: "The Filthiest person who ever lived!",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "filler",
    sound: "filler",
};
let femaleTrouble = {
    title: "Female Trouble",
    dateOrAge: "October 4, 1974",
    hint: "The Filthiest person who ever lived!",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "filler",
    sound: "filler",
};
let edith = {
    title:"Edith Massey",
    dateOrAge:"Born: May 28, 1918. Died: October 24, 1984",
    hint: "The Filthiest person who ever lived!",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "filler",
    sound: "filler",
};
// alert(devine.title)

// list of objects
let currentObject = [devine, femaleTrouble, edith,];

// connect to corasponding div
let StartElement = document.getElementById("start");
let winElement = document.getElementById("wins");
let wordElement = document.getElementById("current-word");
let guessNumElement = document.getElementById("num-of-guess");
let guessLeftElement = document.getElementById("guesses-left");
let letterGuessedElement = document.getElementById("letters-guessed");
    
let gameStart = false;
let chosenObject;
let currentWord;
let currentWordArr = [];
let wordAsDashes;
let dashesArray =[];
let guessesLeft;
let lettersGuessed;
let numWins = 0;
let numLosses =0;
let guessCount = 0; 
let correctGuesses;

// choose random object
// function initialize(){
    gameStart = true;
    lettersGuessed = [];
    correctGuesses = 0;
    chosenObject = currentObject [Math.floor(Math.random() * currentObject. length)];
    // console.log(chosenObject);
    currentWord = chosenObject.title;       // choose title from chosen object = current word.
    // console.log(currentWord);
    wordAsDashes = makeIntoDashes(currentWord);
    // console.log(wordAsDashes);
    currentWordArr = currentWord.split('');
    // console.log(currentWordArr);
    guessesLeft = 12;
    dashesArray = wordAsDashes.split('');
    wordElement.textContent = wordAsDashes;
    letterGuessedElement.textContent = "--";
    guessLeftElement.textContent = guessesLeft;

// }


function makeIntoDashes(word) {
    let dashes = "";
    for(i = 0; i < word.length; i++){
        if (word[i] === " "){
        dashes += ("\xa0");
        }
        else{
            dashes +=("_ ");
        };
    };
    dashes +="";
    return dashes;
}



// main function what do do with each key stroke.
function playGame (letter) {
    letter = letter.toLowerCase();

    if(alphabet.indexOf(letter) > -1){
        if (currentWordArr.indexOf(letter) > -1){
            correctGuesses++;
            displayLetter(letter);
            // console.log("yes!")
        }
        else{
            if(lettersGuessed.indexOf(letter) > -1){
                return;
            }
            else{
                guessesLeft--;
                guessLeftElement.textContent = guessesLeft;
                lettersGuessed.push(letter);
                letterGuessedElement.textContent =lettersGuessed;
            };

        };
         
    };




};

// display letter if in word.

function displayLetter(letter) {

};


// checks for win. 
    function checkForWin() {
        if (dashesArray.indexOf("_") === -1){

        };
    };

// starts/restart game with new word. maintaining score.
document.onkeyup = function (event) {
    if(!gameStart) {
        initialize();
        gameStart = true;

    }
    else {
        playGame(event.key);

    };

};











 



// document.onkeyup = function(event) {
//     let letter = event.key.toLowerCase();

//     for (let i= 0; i < currentWord.length; i++){
//         if (letter === currentWord.toLowerCase[i]){

//             console.log (letter);
//         }
//         else{
//             console.log (`not ${letter}`)
//         }
     
//     }

    


// }

// const log = document.getElementById("currentWord");
// let keycapture = document.addEventListener('keypress', logKey);
// logKey = document.onkeypress;

// //  this part is about turn word into equal number of - . and posibly turning them back when coinsiding letter is typed.
// for( let i= 0; i <= currentWord.length; 1++){

//     if ()
    
// }
// }

// const wordAcknowledged = () => {

// }

// currentWordIndex = 0;

// // if 

// const currentWordlist = () =>{
//     if(currentWordIndex <= currentWord.length -1){
//         document.querySelector("#currentWord"). innerHTML = word[currentWordIndex];
//     }
// }

// console.log(currentWordList);

