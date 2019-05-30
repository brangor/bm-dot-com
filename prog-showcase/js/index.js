$('.carousel-banners-desktop').carousel();
$('.carousel-featuresets-desktop').carousel();
$('.carousel-stories-desktop').carousel();
$('.carousel-footers-desktop').carousel();

$('.carousel-banners-mobile').carousel();
$('.carousel-featuresets-mobile').carousel();
$('.carousel-stories-mobile').carousel();
$('.carousel-footers-mobile').carousel();

$(".carousel-control-prev").click(function(){
    $(".carousel-banners-mobile").carousel("prev");
});