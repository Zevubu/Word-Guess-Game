# Word-Guess-Game
The filthiest game alive! A John Waters themed word guessing game.

Well that was quite an adventure I started by writing it out. and making specific areas for each function I had in mind. I got seriously stuck multiple times but I've done it. I would go into more detail but I'm running short on time. I made it mobile responsive for the most part. 
a few notes I attempted to check the console for more info on individual. I intended to make hint and hard mode buttons but I was struggling to put them in my code without making it crash. I was able to do it with the play and pause buttons. so I would like to go back and give it another shot later.
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="assets/css/resets.css">
    <link href="https://fonts.googleapis.com/css?family=Monoton|Notable|Pacifico|Special+Elite|Yantramanav&display=swap" rel="stylesheet">
    <title>The Filthies word game ever!</title>
</head>
<body>
    <header>
        <section id="head-flex">
            <section id="header content">
                <section id="hg">
                    <p >HangMan</p>              
                </section>
                <section id="jw-name">
                        <p>John Waters Dreamland </p>
                        <p>Edition!</p>
                </section>
                <section id="flex-head-text">
                    <section id="filth-text">
                        <p >The filthiest game alive!</p>
                    </section>
                </section>
                <section id="x-rated">
                    <p >This game has been rated (X) for lude language, and bad taste!</p>
                </section>     
            </section>
        </section>
        <br>
    </header>
    <section id="content-flex">
        <section id="the-game">
            <section id="top-flexbox">
                <article id="geuss-start-text">
                    <p id="start"></p>
                    <h3 id="guess-word-type"></h3>
                    <p id="current-word"></p>
                </article>
                <hr>
            </section>
            <section id="mid-flexbox">
                <article id="img-style">
                        <div >
                            <img id="game-img" src="assets/images/john_waters.jpg" alt="Slide show" >
                        </div>
                </article>
                <section id="guess-info">
                    <article>
                        <h3>Guesses Left:</h3>
                        <p id="guesses-left"></p>
                    </article>
                    <article>
                        <h3>You've already tried:</h3>
                        <p id="letters-guessed"></p>
                    </article>
                </section> 
            </section>
            <section id="bottum-flex">
                <article>
                    <h3>Score:</h1>
                    <p id="wins"></p>
                </article>
                <article>
                    <h3>Failures:</h3>
                    <p id="failures"></p>
                </article>        
            </section id="button flex">
        </section>
        <!-- <section>
            <section>
            <button id="hard-mode">Harder Darling!</button>
            </section>
            <br>
            <form>
                <input type="button" id="hint-button" value="Hint">
            </form>
            <p id="add-hint"></p>
        </section> -->
    </section>
    <footer id="foot-flex">
        <section id="audio-flex">
            <audio id="music">
                    <source src="assets/sounds/Johnwaters.mp3" type="audio/mpeg">
            </audio>
            <p>Hear what they have to say, or to get them to shut the hell up!</p>
            <section id="audio-btn-flex">
                <button id="play" onclick="playAudio()" type="button">Play</button>
                <button id="pause" onclick="pauseAudio()" type="button">Pause</button> 
            </section>
            <script>
                var x = document.getElementById("music");  
                function playAudio() { 
                    x.play(); 
                }  
                function pauseAudio() { 
                    x.pause(); 
                } 
            </script>
        </section>
        <section id="about-flex">
            <p>This website was made by Zev Hoffman.</p> 
            <p>It is a fanpage!</p>
        </section>  
    </footer>
</body>
<script type="text/javascript" src="assets/javascript/game.js"></script>
</html>





<!-- 
<!-- 

everything after this is notes and snippets of code I was trying to work with. left un edited.
I just learned a new thing .split ! it's awesome!

I just figured out how to add a space to my dashes! very proud of this one! 

It's almost working! this is so exciting!

I want to include Devine singing walk like a man https://www.youtube.com/watch?v=pFiqO0Qpa_g

<!-- <iframe width="1280" height="532" src="https://www.youtube.com/embed/jlNnzoOiFq8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 -->
<!-- 
supposed to build dashes.
// let dashes = [];
// for(let i = 0; i < currentWord.length; i++){
//     dashes.push("_");
//     let newDash = document.createElement("p");
//     newDash.textContent = ("hello");
//     wordElement.appendChild(newDash);
// };



// 
document.onkeyup = function(event) {
//     let letter = event.key.toLowerCase();
//     for (let i= 0; i < currentWord.length; i++){
//         if (letter === currentWord.toLowerCase){

//             console.log (letter);
//         }
//         else{
//             console.log (`not ${letter}`)
//         }
     
//     }


// let dashes = [];
// let makeDash = document.createElement("p");
// makeDash.setAttribute("class", "text-input-area");
// wordElement.append(makeDash)
// let newDash = document.getElementsByClassName("text-input-area");
// for(let i = 0; i < currentWord.length; i++){
//     dashes.push("_");
    
//     newDash.textContent = dashes[i];
//     makeDash.append(newDash);
// };



    


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
 --> --> -->
