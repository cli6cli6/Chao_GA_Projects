function click(id) { 
    $('#red,#yellow,#green').removeClass('active');
    $(id).addClass('active');
}

$('#red_button').click(function(){click('#red')});
$('#yellow_button').click(function(){click('#yellow')});
$('#green_button').click(function(){click('#green')});


// AWESOME!