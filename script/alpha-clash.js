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



function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player-pressed', playerPressed)

    // get the expected on pressed
const currentAlphabetElement = document.getElementById('current-alphabet')
const currentAlphabet = currentAlphabetElement.innerText;
const expecteAlphabet = currentAlphabet.toLocaleLowerCase();
console.log(playerPressed , currentAlphabet)

if(playerPressed === expecteAlphabet){
    console.log('you get a point')
}
else{
    console.log('you missed')
}

}




document.addEventListener('keyup',handleKeyboardKeyUpEvent)

function continueGame(){
    // step-1: generate a random alphabet 
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet)

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