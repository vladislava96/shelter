const cardsArry = [
      {
        "name": "Jennifer",
        "img": "../img/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Sophia",
        "img": "../img/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Woody",
        "img": "../img/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
      },
      {
        "name": "Scarlett",
        "img": "../img/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Katrine",
        "img": "../img/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Timmy",
        "img": "../img/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
      },
      {
        "name": "Freddie",
        "img": "../img/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Charly",
        "img": "../img/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
      }
    ];

//Сортируем массив
cardsArry.sort(() => Math.random() - 0.5);

class Slider {
  constructor(element, cardsArry) {
    this.cardsArry = cardsArry;
    this.sliderHidden = element.querySelector('.slaider__scroll');
    this.sliderCards = element.querySelector('.slaider__cards');
    this.slideRight = element.querySelector('.slaider__right');
    this.slideLeft = element.querySelector('.slaider__left');

    this.offsetDelta = 360;

    this.onWindowResize();
  
    this.sliderHidden.style.transition = 'all 1s ease';

     //Берем объекты из массива и добавляем их в слайд, а потом в новый массив
    this.isAnimated = false;
    this.currentIndex = 1;
    this.elements = [];
    for (const slideData of cardsArry) {
      const slideElement = this.createSlide(slideData);
      this.sliderHidden.appendChild(slideElement);
      this.elements.push(slideElement);
    };

    this.slideRight.addEventListener('click', () => this.onSlideRightClick());
    this.slideLeft.addEventListener('click', () => this.onSlideLeftClick());
    window.addEventListener('resize', () => this.onWindowResize())
  }


  /** 
   * Создаем карточки и помещаем их в готовый стиль карты
  */
  createSlide(slideData) {
      const img = document.createElement('img');
      img.setAttribute('src', slideData.img);
      img.setAttribute('alt', 'Pet photo');

      const p = document.createElement('p');
      p.classList.add('pet-name');
      p.textContent = slideData.name;

      const b = document.createElement('button');
      b.textContent = 'Learn more';

      b.addEventListener('click', () => createModal(slideData));

      const card = document.createElement('div');
      card.classList = 'card';
      card.appendChild(img);
      card.appendChild(p);
      card.appendChild(b);

      return card;
  }

  updateOffset() {
    const offset = this.currentIndex * this.offsetDelta;
    this.sliderHidden.style.left = -offset + "px";
  }
  
  /** 
   * Подключаем к правой кнопке слайд
  */
  onSlideRightClick() {
    console.log('right!');
    if (this.isAnimated) {
      return;
    }

    this.isAnimated = true;
    this.currentIndex ++;
    this.updateOffset();
    setTimeout(() => {
      this.sliderHidden.style.transition = '';
      const element = this.elements.shift();
      this.elements.push(element);
      this.sliderHidden.removeChild(element);
      this.sliderHidden.appendChild(element);
      
      this.currentIndex --;
      this.updateOffset();
      setTimeout(() => {
        this.sliderHidden.style.transition = 'all 1s ease';
        this.isAnimated = false;
      }, 100)
    }, 1100);  
  }

 /** 
   * Подключаем к правой кнопке слайд
  */
  onSlideLeftClick() {
    console.log('left!');
    if (this.isAnimated) {
      return;
    }

    this.isAnimated = true;
    this.currentIndex --;
    this.updateOffset();

    setTimeout(() => {
      this.sliderHidden.style.transition = '';
      const element = this.elements.pop();
      this.elements.unshift(element);
      this.sliderHidden.removeChild(element);
      this.sliderHidden.insertBefore(element, this.sliderHidden.firstChild);
      
      this.currentIndex ++;
      this.updateOffset();
      setTimeout(() => {
        this.sliderHidden.style.transition = 'all 1s ease';
        this.isAnimated = false;
      }, 100)
    }, 1100);  
  }

  onWindowResize() {
    if (window.screen.width < 690) {
      this.offsetDelta = 270;
    } else if (window.screen.width < 1100) {
      this.offsetDelta = 310;
    } else {
      this.offsetDelta = 360;
    }

    this.updateOffset();
  }
}

//Создаем слайдер
const slider = new Slider(
  document.querySelector('.slaider'),
  cardsArry
)