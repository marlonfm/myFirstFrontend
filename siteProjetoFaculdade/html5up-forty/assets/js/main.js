var $w = jQuery.noConflict();

// animação nas palavras

$w(function() {
    $w('.n-empresa').animate({
        'font-size': 17,
        'margin-top': 80
    }, 1500);
});

$w(function() {
    $w(document).bind('scroll', function() {
        if ($w(this).scrollTop() > 150) {
            $w('.content1').slideDown('slow');
            $w('.content2').slideDown('slow');
        }
    });
});

$w(function() {
    $w(document).bind('scroll', function() {
        if ($w(this).scrollTop() > 500) {
            $w('.content3').slideDown('slow');
            $w('.content4').slideDown('slow');
        }
    });
});

// formularios

$w(function() {
    $w('#form').bind('submit', function(p) {
        p.preventDefault();
        var inp2 = $w('#name').val();
        var inp = $w('#email').val();
        var inp3 = $w('#message').val();
        alert('nome: ' + inp2 + " email: " + inp + " mensagem: " + inp3);
        $w('#name').val('');
    });
});

$w(function() {
    $w('#message').bind('keyup', function(e) {
        if (e.keyCode == 13) {
            var chat = $w(this).val();
            console.log(chat);
            $w(this).val('');
        }
    });
});

$w(function() {
    $w('#name').bind('select', function() {
        alert('selecionou a palavra 2 vezes!');
    });
});



//aumentar fonte ao scrollar

$w(function() {
    $w(document).bind('scroll', function() {
        if ($w(this).scrollTop() > 800) {
            $w('.content5').animate({
                'font-size': 25
            }, 1500);
        }
    });
});