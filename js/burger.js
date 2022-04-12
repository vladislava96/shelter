class Burger {
    constructor() {
        this.bodyB = document.querySelector('body')
        this.burgerMenu = document.querySelector('.burger-menu')
        this.burgerOpenButton = document.getElementById('open')
        this.burgerCloseButton = document.getElementById('close')
        this.blackoutBurger = document.querySelector('.blackout-burger')

        this.onWindowResize();

        const liAll = document.querySelectorAll('li');
        for(const li of liAll) {
            li.addEventListener('click', () => this.onMenuItemClick()) 
        }

        this.burgerOpenButton.addEventListener('click', () => this.onBurgerOpenButtonClick())
        this.burgerCloseButton.addEventListener('click', () => this.onBurgerCloseButtonClick())
        window.addEventListener('resize', () => this.onWindowResize())
    }

    onMenuItemClick() {
        this.burgerMenu.classList.remove('burger-menu_show');
        this.burgerCloseButton.classList.remove('active-burger');
        this.burgerOpenButton.classList.remove('active-burger');
        this.bodyB.style.overflow = 'auto';
    }

    onBurgerOpenButtonClick() {
        this.bodyB.style.overflow = 'hidden';
        this.burgerOpenButton.classList.add('active-burger')
        this.burgerCloseButton.classList.add('active-burger');
        this.blackoutBurger.classList.add('blackout-burger_show');
        this.burgerMenu.classList.remove('burger-menu_hidden');

        setTimeout(() => {
            this.burgerMenu.classList.add('burger-menu_show');
        }, 50);
    }

    onBurgerCloseButtonClick() {
        this.burgerMenu.classList.remove('burger-menu_show');
        this.burgerCloseButton.classList.remove('active-burger');
        this.burgerOpenButton.classList.remove('active-burger');
        this.bodyB.style.overflow = 'auto';

        setTimeout(() => {
            this.blackoutBurger.classList.remove('blackout-burger_show');
        }, 1000) 
    }

    onWindowResize() {
        this.left = window.screen.width;
        this.burgerMenu.style.left = `${this.left}px`;
    }
}

const burger = new Burger();
