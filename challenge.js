$(document).ready(onReady);

function onReady () {
    $('#kitty').on('click', spinKitty )

    let kitty = $('#kitty');
    let silly = $('.silly')
    function spinKitty() {
        // Spin the kitty upside down
        kitty.css(
            {'transform': 'rotate(' + 180 + 'deg)'}
        );
        // Transform text above
        silly.text('Kitty why you so silly?');
    }
}