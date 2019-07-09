let wins = 0;
let numOfGeuss = 12; 

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
}

let edith = {
    title:"Edith Massey",
    dateOrAge:"Born: May 28, 1918. Died: October 24, 1984",
}
// alert(devine.title)

let gameStart = document.getElementById("start");
let winElement = document.getElementById("wins");
let wordElement = document.getElementById("currentWord");
let guessNumElement = document.getElementById("numOfGuess");
let letterGuessedElement = document.getElementById("lettersGuessed");

let currentObject = [
    devine,
    femaleTrouble,
    edith,
];
chosenObject = currentObject [Math.floor(Math.random() * currentObject. length)];

// console.log(chosenObject);


currentWord = chosenObject.title;


console.log(currentWord);


let dashes = [];
for(let i = 0; i < currentWord.length; i++){
    dashes.push("_");
    let newDash = document.createElement("p");
    newDash.textContent = dashes[i];
    wordElement.append(newDash);
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

