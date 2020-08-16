
(function($){
    //$('.carousel').carousel();
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true
        //autoWidth: true
        //nav: true
    });
})(jQuery);

showMainMenu();

function showMainMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mainMenu = document.querySelector('#main-menu-nav');
    let show = false;
    
    hamburgerBtn.addEventListener('click', (e) => {
        if(!show) {
            mainMenu.style.display = 'block';
            show = true;
        } else {
            mainMenu.style.display = 'none';
            show = false;
        }
    });

}

