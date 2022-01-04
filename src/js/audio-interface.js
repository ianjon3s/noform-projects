// Generate random string



function makeid(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
console.log(makeid(20));


// Get random word
const nameplate = document.getElementById("nameplate")
fetch('https://random-word-api.herokuapp.com/word?number=1&swear=0')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => nameplate.innerHTML = data);
  

// Generate random hex
const getRanHex = size => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    for (let n = 0; n < size; n++) {
        result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
}
console.log(getRanHex(6));
const interface = document.getElementById("interface");
$(interface).css({'background': "#" + getRanHex(6)});



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

LabelArray = new Array();
LabelArray[0] = 'Parse';
LabelArray[1] = 'Length';
LabelArray[2] = 'Rate';
LabelArray[3] = 'Strength';
LabelArray[4] = 'Intensity';
LabelArray[5] = 'Decay';
LabelArray[6] = 'Blend';
LabelArray[7] = 'Gain';
LabelArray[8] = 'Boost';
LabelArray[9] = 'Tone';
LabelArray[10] = 'Cut';
LabelArray[11] = 'Squash';
LabelArray[12] = 'Enhance';
LabelArray[13] = 'Treble';
LabelArray[14] = 'Bass';
LabelArray[15] = 'Middle';
LabelArray[16] = 'Presence';
LabelArray[17] = 'Distort';
LabelArray[18] = 'Merge';
LabelArray[19] = 'Speed';
LabelArray[20] = 'Push';
LabelArray[21] = 'Pull';
LabelArray[22] = 'Mirror';
LabelArray[23] = 'Reverse';
LabelArray[24] = 'Flatten';
LabelArray[25] = 'Sharpen';
LabelArray[26] = 'Crush';
LabelArray[27] = 'Decist';
LabelArray[28] = 'Persist';
LabelArray[29] = 'Advance';
LabelArray[30] = 'Retreat';
LabelArray[31] = 'Stretch';
LabelArray[32] = 'Fiddle';
LabelArray[33] = 'Skew';
LabelArray[34] = 'Rotate';
LabelArray[35] = 'Volume';
LabelArray[36] = 'Attack';
LabelArray[37] = 'Morph';
LabelArray[38] = 'Lift';
LabelArray[39] = 'Expand';
LabelArray[40] = 'Delay';
LabelArray[41] = 'Compress';
LabelArray[42] = 'Limit';

// Create number for control rotation
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var shuffled = shuffle(arr);

$('.audio-control').each(function(i) {
    
    var innerLabel = $(this).find(".label");
    var innerDial = $(this).find(".knob");
    
    function getRandomLabel() {
        var num = Math.floor( Math.random() * 43);
        var label = LabelArray[num];
        innerLabel.html(label);
    }
    getRandomLabel()

    innerDial.addClass( 'rotate--' + shuffled[i] );
});
