$(document).ready(function() {
        $('#myTitle').hide();
    });
        
    $("#arrow_down").click(function() {
        $('html,body').animate({
        scrollTop: $("#proj_1").offset().top},
        'slow');
    });
        
    $("#myTitle").click(function() {
        $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
    }); 