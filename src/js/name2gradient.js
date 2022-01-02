function hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function intToARGB(i) {
    var hex = ((i>>24)&0xFF).toString(16) +
            ((i>>16)&0xFF).toString(16) +
            ((i>>8)&0xFF).toString(16) +
            (i&0xFF).toString(16);
    hex += '000000';
    return hex.substring(0, 6);
}

String.prototype.toHexColour = function() {
    return intToARGB(hashCode(this));
}

window.onload = function() {

    var stringInput1 = document.getElementById('first-name');
    var stringInput2 = document.getElementById('last-name');

    var changeInput = function (event) {
        
        var colour1 = stringInput1.value.toHexColour();
        var colour2 = stringInput2.value.toHexColour();
        document.getElementById('first-string').innerHTML = '#'+colour1;
        document.getElementById('last-string').innerHTML = '#'+colour2;

        $('.p-n2g__string').css({
            'display' : 'block'
        });

        $('#colour-box').css({
            'background' : 'linear-gradient(to right, #' + colour1 + ', #' + colour2 + ')'
        });
    };

    window.addEventListener('input', changeInput, false);

};
