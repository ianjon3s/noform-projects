/** @format */

const translateX = 'm-translateX--';
const translateY = 'm-translateY--';
const rotate = 'm-rotate--';
const flipX = 'm-flipX--';
const flipY = 'm-flipY--';

$('#toggle').click(function(e) {
  document.getElementById('toggle').innerText = 'again';
  $('.p-molnar__wrap > div').each(function(i) {
    this.className = '';
    
    let translationX = Math.floor(Math.random() * 11);
    $(this).addClass(translateX + translationX);
    
    let translationY = Math.floor(Math.random() * 11);
    $(this).addClass(translateY + translationY);
    
    let flippingX = Math.floor(Math.random() * 2);
    $(this).addClass(flipX + flippingX);

    let flippingY = Math.floor(Math.random() * 2);
    $(this).addClass(flipY + flippingY);

    let rotation = Math.floor(Math.random() * 30);
    $(this).addClass(rotate + rotation);
  });
});
