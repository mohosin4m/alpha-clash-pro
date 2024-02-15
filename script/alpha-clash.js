// function play(){
//     // step-1:hide the home screen.to hide the screen add the class hidden to the home section
//  const homeSection = document.getElementById('home-screen')
//  homeSection.classList.add('hidden')
// //  console.log(homeScreen.classList)


//     // show the playground
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
//     // console.log(playgroundSection.classList)
// }


// function handleKeyboardButtonPress(){
//     console.log('button pressed')
// }

// document.addEventListener('keyup',handleKeyboardButtonPress )



// function handleKeyboardKeyUpEvent(event){
//     const playerPressed = event.key;
//     console.log('player-pressed', playerPressed)

//     // get the expected on pressed
// const currentAlphabetElement = document.getElementById('current-alphabet')
// const currentAlphabet = currentAlphabetElement.innerText;
// const expecteAlphabet = currentAlphabet.toLocaleLowerCase();
// console.log(playerPressed , currentAlphabet)

// // check match or not
// if(playerPressed === expecteAlphabet){
//     console.log('you get a point')
// }
// else{
//     console.log('you missed')
// }

// }





function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    // key player is expected
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expecteAlphabet = currentAlphabet.toLowerCase()

    // check right or not keypress
    if(playerPressed === expecteAlphabet){
        console.log('You get a point')
        console.log('You have pressed correctly', expecteAlphabet);

        
        const currentScore = getTextElementValueById('current-score')
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore)



        // ----------------------------------------------------------
        // update score
        //1. get the current score
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore)

        // // 2.increase the score by 1
        const newScore = currentScore + 1;

        // // 3.show the update score
        // currentScoreElement.innerText = newScore 
        // start new round
        removeBackgroundColorById(expecteAlphabet)
        continueGame()
    }

    else{
        console.log('dhurrr mia righty key press koren')

        const currentLife = getTextElementValueById('current-life')
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife)




        // -------------------------------------------------------
        // step:1 get the current life number
        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText)

        // // step:2 reduce the life count
        // const newLife = currentLife - 1;
        // // step:3 display the life update count
        // currentLifeElement.innerText = newLife;
    }
}



document.addEventListener('keyup',handleKeyboardKeyUpEvent)

function continueGame(){
    // step-1: generate a random alphabet 
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet)

    // set randomly genareted alphabted on the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet

    // set background color
    setBackgroundColorById(alphabet)
}   


function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}