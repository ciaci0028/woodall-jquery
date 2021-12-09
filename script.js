$(document).ready(onReady);

function onReady () {
    console.log('we are ready');

    $('.red').first().text('I am a humble box');

    $('.box').css({
        color: 'purple',
        'font-size': '28px'
    })

    // Button click adds plant
    $( '#button' ).on('click', addButton);

    $( document ).on('click', '.deleteBtn', deletePlant);

    function addButton() {
        let newPlant = $('#plantNameInput').val();
        $('#plantList').append(`
            <li>   
                ${newPlant}
                <button class="deleteBtn">
                    Delete
                </button>
            </li>
        `);
    }

    function deletePlant () {
        $('.deleteBtn').parent().remove();        
    }

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
    `);

/*     // Getter
    let h5Text = $('h5').text();
    console.log( h5Text );

    // Setter
    let messedUpText = h5Text.split("").reverse().join("");
    console.log( messedUpText );
    $('h5').text( messedUpText );

    let newPlant = $('#plantNameInput').val();
    console.log ( $('#plantNameInput').val() );
    $('#plantNameInput').append(`
        <li>
            ${newPlant}
            <button class="deleteBtn">
                Delete
            </button>
        </li>

    `); */


    let plants = [
        'Monstera',
        'Roses',
        'Cactus',
    ];

    for (let plant of plants) {
        $('#plantList').append(`
            <li>
                ${plant}
            </li>
        `)
    };




}