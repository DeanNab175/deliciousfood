
(function($){
    //$('.carousel').carousel();
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        smartSpeed: 1500
        //autoWidth: true
        //nav: true
    });
})(jQuery);

toggleMainMenu();

function toggleMainMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mainMenu = document.querySelector('#main-menu-nav');
    const animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    let show = false;
    let effect = 'animate__zoomIn';
    
    hamburgerBtn.addEventListener('click', () => {
        if(!show) {
            mainMenu.style.display = 'block';
            mainMenu.classList.add(effect);

            // On animation END state remove the class
            mainMenu.addEventListener(animationEndEvent, () => {
                mainMenu.classList.remove(effect);
            });
            
            show = true;
            
        } else {
            mainMenu.style.display = 'none';

            if( mainMenu.classList.contains(effect) ) {
                mainMenu.classList.remove(effect);
            }

            show = false;
        }
    });

}


