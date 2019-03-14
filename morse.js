var morsecode = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
} // we know this is an object

var firstWord = "hello world";
var secondWord = "we love javascript";

var firstWordSplit = firstWord.split(""); // split into array of characters
var secondWordSplit = secondWord.split("");

var userInput = (prompt('What word do you want to encode into morse code?')).toLowerCase(); //account for people typing in caps
var userInputSplit = userInput.split("");

var encodedFirstMessage = []; //array to join morse code into 1 line later
var encodedSecondMessage = [];
var encodedUserMessage = [];

//have to use for in loops to loop through array
// first word
for (var alphabet in morsecode) {
  for (var i = 0; i < firstWordSplit.length; i++) {
    if (firstWordSplit[i] === alphabet) {
        console.log((morsecode[alphabet]));
        encodedFirstMessage.push(morsecode[alphabet]) //push into array so it show as 1 line
    }
  }
}

//second word
for (var alphabet in morsecode) {
  for (var i = 0; i < secondWordSplit.length; i++) {
    if (secondWordSplit[i] === alphabet) {
        console.log((morsecode[alphabet]));
        encodedSecondMessage.push(morsecode[alphabet])
    }
  }
} //how to account for spaces in messages?X

//user word
for (var alphabet in morsecode) {
  for (var i = 0; i < userInputSplit.length; i++) {
    if (userInputSplit[i] === alphabet) {
        console.log((morsecode[alphabet]));
        encodedUserMessage.push(morsecode[alphabet])
    }
  }
}

console.log(encodedFirstMessage);
console.log(encodedSecondMessage);
alert(encodedUserMessage);

//BONUS SECTION
var mysteryOne = "... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .";
var mysteryOneSplit = mysteryOne.split();
console.log(mysteryOneSplit);