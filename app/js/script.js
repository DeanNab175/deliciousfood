
$(function(){
    console.log("test");
    //$('.carousel').carousel();
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: false,
        loop: false,
        nav: true
    });
});

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

