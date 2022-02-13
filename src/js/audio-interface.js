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
LabelArray[0] = 'parse';
LabelArray[1] = 'length';
LabelArray[2] = 'rate';
LabelArray[3] = 'strength';
LabelArray[4] = 'intensity';
LabelArray[5] = 'decay';
LabelArray[6] = 'blend';
LabelArray[7] = 'gain';
LabelArray[8] = 'boost';
LabelArray[9] = 'tone';
LabelArray[10] = 'cut';
LabelArray[11] = 'squash';
LabelArray[12] = 'enhance';
LabelArray[13] = 'treble';
LabelArray[14] = 'bass';
LabelArray[15] = 'middle';
LabelArray[16] = 'presence';
LabelArray[17] = 'distort';
LabelArray[18] = 'merge';
LabelArray[19] = 'speed';
LabelArray[20] = 'push';
LabelArray[21] = 'pull';
LabelArray[22] = 'mirror';
LabelArray[23] = 'reverse';
LabelArray[24] = 'flatten';
LabelArray[25] = 'sharpen';
LabelArray[26] = 'crush';
LabelArray[27] = 'decist';
LabelArray[28] = 'persist';
LabelArray[29] = 'advance';
LabelArray[30] = 'retreat';
LabelArray[31] = 'stretch';
LabelArray[32] = 'fiddle';
LabelArray[33] = 'skew';
LabelArray[34] = 'rotate';
LabelArray[35] = 'volume';
LabelArray[36] = 'attack';
LabelArray[37] = 'morph';
LabelArray[38] = 'lift';
LabelArray[39] = 'expand';
LabelArray[40] = 'delay';
LabelArray[41] = 'compress';
LabelArray[42] = 'limit';
LabelArray[43] = 'spread';
LabelArray[44] = 'envelope';
LabelArray[45] = 'velocity';
LabelArray[46] = 'noise';
LabelArray[47] = 'drift';
LabelArray[48] = 'inflate';
LabelArray[49] = 'inflame';
LabelArray[50] = 'randomise';
LabelArray[51] = 'repeat';
LabelArray[52] = 'frequency';
LabelArray[53] = 'dry/wet';
LabelArray[54] = 'mix';
LabelArray[55] = 'fade';
LabelArray[56] = 'calibrate';
LabelArray[57] = 'tune';
LabelArray[58] = 'transpose';
LabelArray[59] = 'width';
LabelArray[60] = 'distance';
LabelArray[61] = 'sensitivity';
LabelArray[62] = 'range';
LabelArray[63] = 'drive';
LabelArray[64] = 'feedback';
LabelArray[65] = 'tempo';
LabelArray[66] = 'output';
LabelArray[67] = 'gate';
LabelArray[68] = 'time';
LabelArray[69] = 'sync';
LabelArray[70] = 'mode';
LabelArray[71] = 'saturate';
LabelArray[72] = 'high pass';
LabelArray[73] = 'low pass';
LabelArray[74] = 'brightness';
LabelArray[75] = 'pan';
LabelArray[76] = 'position';
LabelArray[77] = 'release';
LabelArray[78] = 'reverb';
LabelArray[79] = 'echo';

// Create number for knob rotation
var rotateArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var rotateShuffled = shuffle(rotateArr);

// Create numbers to dictate control type
var controlArr = [1, 2, 3, 4, 5, 6];
var controlShuffled = shuffle(controlArr);

$('.audio-control').each(function(i) {
    
    var innerLabel = $(this).find(".label");
    var innerDial = $(this).find(".knob");
    var control = $(this);
    
    function getRandomLabel() {
        var num = Math.floor( Math.random() * 80);
        var label = LabelArray[num];
        innerLabel.html(label);
    }
    getRandomLabel()

    innerDial.addClass( 'rotate--' + rotateShuffled[i] );
    control.addClass( 'control--' + controlShuffled[i] );
});
