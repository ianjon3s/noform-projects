/** @format */

var prefix = 'grid_shape--';
var rotate = 'grid_rotate--';

$('#grid-toggle').click(function(e) {
  document.getElementById('grid-toggle').innerText = 'again';
  $('.p-generator__grid > div').each(function(i) {
    this.className = '';
    var random = Math.floor(Math.random() * 14);
    $(this).addClass(prefix + random);
    var rotation = Math.floor(Math.random() * 4);
    $(this).addClass(rotate + rotation);
  });
});
