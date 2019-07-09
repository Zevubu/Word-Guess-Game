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
};
let edith = {
    title:"Edith Massey",
    dateOrAge:"Born: May 28, 1918. Died: October 24, 1984",
};
// alert(devine.title)

// list of objects
let currentObject = [devine, femaleTrouble, edith,];

// connect to corasponding div
let StartElement = document.getElementById("start");
let winElement = document.getElementById("wins");
let wordElement = document.getElementById("current-word");
let guessNumElement = document.getElementById("num-of-guess");
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
let numOfGeuss = 12;
let guessCount = 0; 
let correctGuesses;
let lettersGuessed = [];

// choose random object
function initialize(){
    gameStart = true;
    lettersGuessed = [];
    correctGuesses = 0;
    chosenObject = currentObject [Math.floor(Math.random() * currentObject. length)];
    currentWord = chosenObject.title;       // choose title from chosen object = current word.
} 








function clearWordAndGuesses() {
	numOfGeuss. = 12;
	guessCount = 0;
	lettersGuessed = [];
};
// main function what do do with each key stroke.
function playGame (letter) {
    let letter = letter.toLowerCase();


}

// display letter if in word.


// checks for win. 

// restarts game with new word.






let dashes = "";
for(let i = 0; i < currentWord.length; i++){
    dashes.push("_");
    let newDash = document.createElement("p");
    newDash.textContent = (dashes[i]);
    wordElement.appendChild(newDash);
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

