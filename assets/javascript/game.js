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
    title: "Female Trouble"
    dateOrAge: "October 4, 1974"
}

let edith = {
    title:"Edith Massey"
    dateOrAge:"Born: May 28, 1918. Died: October 24, 1984"
}
// alert(devine.title)

let currentWord = [
    devine.title,
    femaleTrouble.title,
    edith.title,
];

chosenWord = currentWord [Math.floor(Math.random() * currentWord. length)];
word = chosenWord[Math.floor(math.random() * chosenWord.length)];
word = word.replace("-");

currentWordIndex = 0;

// if 

const currentWordlist = () =>{
    if(currentWordIndex <= currentWord.length -1){
        document.querySelector("#currentWord"). innerHTML = word[currentWordIndex];
    }
}

// console.log(currentWordList);

