
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
    objectImage: "assets/images/devine.jpg",
    sound: "assets/sounds/Devine-Dawn Davenport - Cha Cha Heels for Christmas.MP3",
};
let polyester = {
    title: "Polyester",
    dateOrAge: "1981",
    hint: "The one movie I haven't seen. So I don't have a hint for you.",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/polyester.jpg",
    sound: "assets/sounds/polyester.mp3",
};
let pinkFlamingos = {
    title: "Pink Flamingos",
    dateOrAge: "1972",
    hint: "The fithiest movie about the filthiest people!",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/pink.jpg",
    sound: "assets/sounds/Mondo Trasho.MP3",
};
let mary = {
    title: "Mary Vivian Pearce",
    dateOrAge: "Born:November 9, 1947",
    hint: "From the scandalous getting into all kinds of wondefully filthy things, to the debutant looking for a thrill she has you covered!",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/Mary.jpg",
    sound: "assets/sounds/Mondo Trasho.MP3",
};
let cookie = {
    title: "Cookie Mueller",
    dateOrAge: "Born: March 2, 1949. Died: November 10, 1989",
    hint: "You want a shiv and an 8ball to keep in you weave? She's the one to ask. ",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/cookie.jpg",
    sound: "assets/sounds/Mondo Trasho.MP3",
};
let susan = {
    title: "Susan Walsh",
    dateOrAge: "Born: March 30, 1948. Died: February 6, 2009",
    hint: "Only the most eite filth here! She'll cut ya, rob ya and look good doing it.",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage:"assets/images/Susan.jpg" ,
    sound: "assets/sounds/Mondo Trasho.MP3",
};
let david = {
    title: "David Lochary",
    dateOrAge: "Born: August 21, 1944. Died: July 29, 1977",
    hint: "Personal fashion icon. He truely had the best facial hair! (Didn't help? Don't really care.)",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/david.jpg",
    sound: "assets/sounds/david.MP3",
};
let minkStole = {
    title: "Mink Stole",
    dateOrAge: "How dare you! But if you must know, she was born in the late 1940s ",
    hint: "Quite posibly the most distinguished highbrow filth around.",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/mink.gif",
    sound: "assets/sounds/mink-stole-as-Connie-Marble.MP3",
};

let desperateLiving = {
    title: "Desperate Living",
    dateOrAge: "1977",
    hint: "Mortvilles just so lovely this time of year.(also it's a movie title)",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/desperate.jpg",
    sound: "assets/sounds/Mondo Trasho.MP3",
};

let femaleTrouble = {
    title: "Female Trouble",
    dateOrAge: "1974",
    hint: "She's got lots of problems!(also it's a movie title)",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/femaletrouble.jpg",
    sound: "assets/sounds/femaletrouble.mp3",
};
let edith = {
    title:"Edith Massey",
    dateOrAge:"Born: May 28, 1918. Died: October 24, 1984",
    hint: "The Filthiest person who ever lived!",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/edith.jpg",
    sound: "assets/sounds/edith-as-Aunt-Ida.MP3",
};
// alert(devine.title)

// list of objects
let currentObject = [devine, cookie, susan, david, mary, polyester, minkStole, desperateLiving, pinkFlamingos, femaleTrouble, edith,];
// console.log(currentObject.length);


// connect to corasponding div
let StartElement = document.getElementById("start");
let winElement = document.getElementById("wins");
let wordElement = document.getElementById("current-word");
let guessLeftElement = document.getElementById("guesses-left");
let letterGuessedElement = document.getElementById("letters-guessed");
let FailureElement = document.getElementById("failures");
let imgElement = document.getElementById("game-img");
let guessWordElement = document.getElementById("guess-word-type");
let hardModeElement = document.getElementById("hard-mode");
var musicElement = document.getElementById("music"); 




let gameStart = false;
let chosenObject;
let currentWord;
let wordsUsed = [];
let wordArray = [];
let lowerWord;
let currentWordArr = [];
let wordAsDashes;
let dashesArray =[];
let guessesLeft;
let lettersGuessed;
let numWins = 0;
let numLosses =0;
let guessCount = 0; 
let correctGuesses;
StartElement.textContent = ("Hit any key to start.");
FailureElement.textContent = numLosses;

// let hintElement = document.getElementById("hint-button");
// let hintText = documnet.getElementById("add-hint");
// hintElement.addEventListener('click', updateButton)
// function updateButton(){
        
        // hintText.textContent = chosenObject.title;


//     };

// choose random object
function initialize(){
    gameStart = true;
    musicElement.play();
    StartElement.textContent = ("");
    guessWordElement.textContent = ("Think you got what it takes, to be the filthiest person alive? Guess the word!?");
    
    lettersGuessed = [];
    correctGuesses = 0;
    

    chosenObject = currentObject [Math.floor(Math.random() * currentObject. length)];
    console.log(chosenObject);
    currentWord = chosenObject.title;       // choose title from chosen object = current word.
    // console.log(currentWord);
    if(wordsUsed.indexOf(currentWord) > -1){
        initialize();
    }
    wordArray = currentWord.split('');
    // console.log(wordArray);
    lowerWord = currentWord.toLowerCase();
    // console.log(lowerWord);
    wordAsDashes = makeIntoDashes(currentWord);
    // console.log(wordAsDashes);
    currentWordArr = lowerWord.split('');
    // console.log(currentWordArr);
    guessesLeft = 12;
    dashesArray = wordAsDashes.split('');
    wordElement.textContent = wordAsDashes;
    letterGuessedElement.textContent = "--";
    guessLeftElement.textContent = guessesLeft;
    if(numWins === currentObject.length){
        guessWordElement.textContent = ("Would you look at you self so proud and sweaty! You won the damn game! Hope it doesn't go to your head! ")
    }

}




function makeIntoDashes(word) {
    let dashes = "";
    for(i = 0; i < word.length; i++){
        if (word[i] === " "){
        dashes += ("\xa0\xa0");
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
                letterGuessedElement.textContent = lettersGuessed;
                if(guessesLeft === 0){
                    alert("Failure is an art form and you're well on you way to mastering it.");
                    alert (`I believe the answer you where looking for was ${currentWord} .`)
                    numLosses++;
                    FailureElement.textContent = numLosses;
                    initialize();
                }
            };

        };
         
    };




};

// display letter if in word.

function displayLetter(letter) {
    for (i = 0; i < currentWord.length; i++){
        if(dashesArray[i] === "  "){
            dashesArray[i] = ("  ");

        }
        else if(letter === currentWordArr[i]){
            dashesArray[i * 2] = wordArray[i];
            // console.log(dashesArray);
            
        };
    };
    wordElement.textContent = dashesArray.join("");
    checkForWin();

};


// checks for win. 
    function checkForWin() {
        if (dashesArray.indexOf("_") === -1){
            numWins++;
            winElement.textContent = (numWins);
            wordsUsed.push(currentWord);
            imgElement.src = chosenObject.objectImage;
            musicElement.src = chosenObject.sound;
            alert("You really know your smut! You perve!")
            alert(`You where right the answer was ${currentWord}`);
            initialize();
            

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

