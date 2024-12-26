$('.top').hide();
$('.bottom').hide();

$('#button1').click(function(){
    $('.top').slideToggle()
});

$('ul').hide();
$('#button2').click(function(){
    $('#1').slideToggle();
});

$('#button3').click(function(){
    $('#2').slideToggle();
});

$('#button4').click(function(){
    $('#3').slideToggle();
});

$('#button5').click(function(){
    $('#4').slideToggle();
});
$('.sub-head').click(function(){
    $('#4_1').slideToggle();
});
$('.sub-head2').click(function(){
    $('#button5-sub2').slideToggle();
});
$('#button6').click(function(){
    $('#5').slideToggle();
});
$('#button7').click(function(){
    $('.bottom').slideToggle()
});
