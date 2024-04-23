var offset = $("nav").offset().top;

window.addEventListener("scroll", function(){
    if (window.scrollY > offset) {
        $("nav").addClass("sticky");
    }
    else {
        $("nav").removeClass("sticky");
    }
})