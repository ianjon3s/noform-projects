/** @format */

const translateX = 'translateX--';
const translateY = 'translateY--';
const rotate = 'rotate--';
const flipX = 'flipX--';
const flipY = 'flipY--'

$('#toggle').click(function(e) {
  document.getElementById('toggle').innerText = 'again';
  $('.row > div').each(function(i) {
    this.className = '';
    
    let translationX = Math.floor(Math.random() * 11);
    $(this).addClass(translateX + translationX);
    
    let translationY = Math.floor(Math.random() * 11);
    $(this).addClass(translateY + translationY);
    
    let flippingX = Math.floor(Math.random() * 2);
    $(this).addClass(flipX + flippingX);

    let flippingY = Math.floor(Math.random() * 2);
    $(this).addClass(flipY + flippingY);

    let rotation = Math.floor(Math.random() * 10);
    $(this).addClass(rotate + rotation);
  });
});
