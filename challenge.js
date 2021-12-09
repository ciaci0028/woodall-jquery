$(document).ready(onReady);

function onReady () {
    $('#kitty').on('click', spinKitty )

    let kitty = $('#kitty');
    function spinKitty() {
        $(kitty).css(
            {'transform': 'rotate(' + 90 + 'deg)'}
        );
        $(kitty).append('<p>Kitty why you so silly?<p>');
    }
}