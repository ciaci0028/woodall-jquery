$(document).ready(onReady);

function onReady () {
    console.log('we are ready');

    $('.red').first().text('I am a humble box');

    $('.box').css({
        color: 'purple',
        'font-size': '28px'
    })

    // Select my plantList element
    $('#plantList').append(`<li>Bamboo</li>`);

    $('body').append(`
        <h1>
            My awesome new jQuery app
        </h1>

        <h5>
            Welcome
        </h5>
        
        <p>
            Let me tell you...
        </p>
    `)

    let plants = [
        'Monstera',
        'Roses',
        'Cactus',
    ]

    for (let plant of plants) {
        $('#plantList').append(`
            <li>${plant}</li>
        `)
    }
}