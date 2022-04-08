const burgerButton = document.getElementById('open');
const bodyB = document.querySelector('body');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.add('active-burger');

    const burgerMenu = document.createElement('div');
    burgerMenu.classList = 'burger-menu';
    
    const headerContent = document.createElement('header');
    headerContent.classList = 'header-content';

    const headerContentLogo = document.createElement('header');
    headerContentLogo.classList = 'header-content__logo';
    headerContentLogo.innerHTML = '<h1>Cozy House</h1><div class="header-content__subtitle">Shelter for pets in Boston</div'

    burgerMenu.appendChild(headerContent)

    const burgerCloseButton = document.createElement('div');
    burgerCloseButton.classList.add('burger');
    burgerCloseButton.classList.add('active-burger');
    burgerCloseButton.innerHTML = '<div class="burger__line"></div><div class="burger__line"></div><div class="burger__line"></div>';
    
    headerContent.appendChild(headerContentLogo)
    headerContent.appendChild(burgerCloseButton)

    const listNav = document.createElement('nav');
    listNav.innerHTML = '<ul class="burger-menu__list"><li><a href="index.html">About the shelter</a></li><li class="active"><a href="our-pets.html">Our pets</a></li><li><a href="index.html#help">Help the shelter</a></li><li><a href="#footer">Contacts</a></li></ul>'

    burgerMenu.appendChild(listNav)

    setTimeout(() => burgerMenu.classList.add('burger-menu_show'), 50)
    bodyB.appendChild(burgerMenu);

    const blackoutBurger = document.createElement('div');
    blackoutBurger.classList = 'blackout-burger';
    blackoutBurger.appendChild(burgerMenu);
    bodyB.appendChild(blackoutBurger);

    bodyB.style.overflow = 'hidden';

    const liAll = document.querySelectorAll('li');
    for(li of liAll) {
        li.addEventListener('click', function BtnClick() {
            burgerMenu.classList.remove('burger-menu_show');
            burgerCloseButton.classList.remove('active-burger');
            burgerButton.classList.remove('active-burger');
            bodyB.style.overflow = 'auto';
            setTimeout(() => {
                bodyB.removeChild(blackoutBurger);
                burgerCloseButton.removeEventListener('click', BtnClick);
            }, 1000) 
        }) 
    }


    burgerCloseButton.addEventListener('click', function BtnClick() {
        burgerMenu.classList.remove('burger-menu_show');
        burgerCloseButton.classList.remove('active-burger');
        burgerButton.classList.remove('active-burger');
        bodyB.style.overflow = 'auto';
        setTimeout(() => {
            bodyB.removeChild(blackoutBurger);
            burgerCloseButton.removeEventListener('click', BtnClick);
        }, 1000) 
    })
    

    let left = window.screen.width;
    burgerMenu.style.left = `${left}px`;

    window.addEventListener('resize', () => {
        left = window.screen.width;
        burgerMenu.style.left = `${left}px`;
    })
})
