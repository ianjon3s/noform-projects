/** @format */

const translateX = 'translateX--';
const translateY = 'translateY--';
const rotate = 'rotate--';
const flip = 'flip--'

$('#toggle').click(function(e) {
  document.getElementById('toggle').innerText = 'again';
  $('.row > div').each(function(i) {
    this.className = '';
    
    let translationX = Math.floor(Math.random() * 11);
    $(this).addClass(translateX + translationX);
    
    let translationY = Math.floor(Math.random() * 11);
    $(this).addClass(translateY + translationY);
    
    let flipping = Math.floor(Math.random() * 2);
    $(this).addClass(flip + flipping);

    let rotation = Math.floor(Math.random() * 10);
    $(this).addClass(rotate + rotation);
  });
});
