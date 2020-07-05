/*
    Creare uno slider di immagini
    Lo slider prevederà due frecce (icone) che permettono di mostrare le immagini, arrivati all’ultima o prima immagine dobbiamo ripartire dal lato opposto. ￼
    In oltre per scorrere le immagini utilizziamo anche le frecce sinistra e destra della tastiera.
*/


$(document).ready(function () {
    $('.next').click(function () {
        nextPhoto();
    });

    $('.prev').click(function () {
        prevPhoto();
    });

    $(document).keydown(function () {
        var key = event.keyCode;
        console.log(key);
        if (key == '39') {
            nextPhoto();
        } else if (key == '37') {
            prevPhoto();
        }
    });

    // BONUS
    $('.nav .fa-circle').click(function () {
        // console.log($(this));
        var circle = $('.nav .fa-circle');
        var img = $('.slider-wrapper img');

        $(circle).removeClass('active');
        $(this).addClass('active');

        var trovato = false;

        for (var i = 0; i < circle.length && !trovato; i++) {
            if ($(circle[i]).hasClass('active')) {
                $(img).removeClass('active');
                $(img[i]).addClass('active');
                trovato = true;
            }
        }
    });
});


// FUNCTIONS
function nextPhoto() {
    var img = $('img.active');
    if ($(img).hasClass('last')) {
        $(img).removeClass('active');
        $('img.first').addClass('active');
        $('.nav > .active').removeClass('active');
        $('.nav > .first').addClass('active');
    } else {
        $(img).removeClass('active').next().addClass('active');
        $('.nav > .active').removeClass('active').next().addClass('active');
    }
}

function prevPhoto() {
    var img = $('img.active');
    if ($(img).hasClass('first')) {
        $(img).removeClass('active');
        $('img.last').addClass('active');
        $('.nav > .active').removeClass('active');
        $('.nav > .last').addClass('active');
    } else {
        $(img).removeClass('active').prev().addClass('active');
        $('.nav > .active').removeClass('active').prev().addClass('active');
    }
}
