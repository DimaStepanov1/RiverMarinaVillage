$(function() {
    $('.top').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#top').offset().top }, 1500);
        e.preventDefault();
    });
});
var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    },
    speed: 2000,
});

$("#1").click(function() {
    $("#2").fadeIn(1000).removeClass("hidden");
    $("#4").fadeOut(0).addClass("hidden");
    $("#6").fadeOut(0).addClass("hidden");
    $("#8").fadeOut(0).addClass("hidden");
    $("#10").fadeOut(0).addClass("hidden");
    $("#12").fadeOut(0).addClass("hidden");
});
$("#3").click(function() {
    $("#2").fadeOut(0).addClass("hidden");
    $("#4").fadeIn(1000).removeClass("hidden");
    $("#6").fadeOut(0).addClass("hidden");
    $("#8").fadeOut(0).addClass("hidden");
    $("#10").fadeOut(0).addClass("hidden");
    $("#12").fadeOut(0).addClass("hidden");
});
$("#5").click(function() {
    $("#2").fadeOut(0).addClass("hidden");
    $("#4").fadeOut(0).addClass("hidden");
    $("#6").fadeIn(1000).removeClass("hidden");
    $("#8").fadeOut(0).addClass("hidden");
    $("#10").fadeOut(0).addClass("hidden");
    $("#12").fadeOut(0).addClass("hidden");
});
$("#7").click(function() {
    $("#2").fadeOut(0).addClass("hidden");
    $("#4").fadeOut(0).addClass("hidden");
    $("#6").fadeOut(0).addClass("hidden");
    $("#8").fadeIn(1000).removeClass("hidden");
    $("#10").fadeOut(0).addClass("hidden");
    $("#12").fadeOut(0).addClass("hidden");
});
$("#9").click(function() {
    $("#2").fadeOut(0).addClass("hidden");
    $("#4").fadeOut(0).addClass("hidden");
    $("#6").fadeOut(0).addClass("hidden");
    $("#8").fadeOut(0).addClass("hidden");
    $("#10").fadeIn(1000).removeClass("hidden");
    $("#12").fadeOut(0).addClass("hidden");
});
$("#11").click(function() {
    $("#2").fadeOut(0).addClass("hidden");
    $("#4").fadeOut(0).addClass("hidden");
    $("#6").fadeOut(0).addClass("hidden");
    $("#8").fadeOut(0).addClass("hidden");
    $("#10").fadeOut(0).addClass("hidden");
    $("#12").fadeIn(1000).removeClass("hidden").delay(2000);
});



$("#one").click(function() {
    $("#two").fadeIn(1000).removeClass("hidden");
    $("#four").fadeOut(0).addClass("hidden");
    $("#six").fadeOut(0).addClass("hidden");
    $("#eight").fadeOut(0).addClass("hidden");
    $("#ten").fadeOut(0).addClass("hidden");
    $("#twelve").fadeOut(0).addClass("hidden");
});
$("#three").click(function() {
    $("#two").fadeOut(0).addClass("hidden");
    $("#four").fadeIn(1000).removeClass("hidden");
    $("#six").fadeOut(0).addClass("hidden");
    $("#eight").fadeOut(0).addClass("hidden");
    $("#ten").fadeOut(0).addClass("hidden");
    $("#twelve").fadeOut(0).addClass("hidden");
});
$("#five").click(function() {
    $("#two").fadeOut(0).addClass("hidden");
    $("#four").fadeOut(0).addClass("hidden");
    $("#six").fadeIn(1000).removeClass("hidden");
    $("#eight").fadeOut(0).addClass("hidden");
    $("#ten").fadeOut(0).addClass("hidden");
    $("#twelve").fadeOut(0).addClass("hidden");
});
$("#seven").click(function() {
    $("#two").fadeOut(0).addClass("hidden");
    $("#four").fadeOut(0).addClass("hidden");
    $("#six").fadeOut(0).addClass("hidden");
    $("#eight").fadeIn(1000).removeClass("hidden");
    $("#ten").fadeOut(0).addClass("hidden");
    $("#twelve").fadeOut(0).addClass("hidden");
});
$("#nine").click(function() {
    $("#two").fadeOut(0).addClass("hidden");
    $("#four").fadeOut(0).addClass("hidden");
    $("#six").fadeOut(0).addClass("hidden");
    $("#eight").fadeOut(0).addClass("hidden");
    $("#ten").fadeIn(1000).removeClass("hidden");
    $("#twelve").fadeOut(0).addClass("hidden");
});
$("#eleven").click(function() {
    $("#two").fadeOut(0).addClass("hidden");
    $("#four").fadeOut(0).addClass("hidden");
    $("#six").fadeOut(0).addClass("hidden");
    $("#eight").fadeOut(0).addClass("hidden");
    $("#ten").fadeOut(0).addClass("hidden");
    $("#twelve").fadeIn(1000).removeClass("hidden");
});