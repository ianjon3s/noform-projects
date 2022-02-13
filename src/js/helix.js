
const $body = $('body');
const $toggle = $('#animation-toggle');
const $helix = $('#helix');
const $arm = $('.arm');

// Start / pause animation
$toggle.click(function () {
    $body.toggleClass('state--animation-playing state--animation-paused');
    if ($body.hasClass('state--animation-paused')) {
        $toggle.html("play animation");
    } else {
        $toggle.html("pause animation");
    }
});

// Assign a random speed to each arm on page load
const $prefix = 'u-spin--speed-'
$arm.each(function () {
    let $random = Math.floor(Math.random() * 10);
    $(this).addClass($prefix + $random);
});

// Animation type selected from radio buttons
$('input:radio').click(function () {
    $($helix).attr('data-animation-type',this.value);
});
