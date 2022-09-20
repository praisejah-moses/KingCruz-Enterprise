window.addEventListener("scroll", function(){
    $('.navbar').addClass('light');
    $('.brand').addClass('lightHeader');
    let scroll = this.scrollY;
    if(scroll === 0){
        $('.navbar').removeClass('light');
        $('.brand').removeClass('lightHeader');
    }
})