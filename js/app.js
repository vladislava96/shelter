const sliderHidden = document.querySelector('.slaider__scroll');
const sliderCards = document.querySelector('.slaider__cards');
const slideRight = document.querySelector('.slaider__right');
const slideLeft = document.querySelector('.slaider__left');
const body = document.querySelector('body');


let offset = 0; //Смещение от левого края

sliderHidden.style.transition = 'all 1s ease';
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

//Создаем карточки и помещаем их в готовый стиль карты
function createSlide(slideData) {
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

//Берем объекты из массива и добавляем их в слайд, а потом в новый массив
let isAnimated = false;
let currentIndex = 1;
const elements = [];
for (const slideData of cardsArry) {
  const slideElement = createSlide(slideData);
  sliderHidden.appendChild(slideElement);
  elements.push(slideElement);
};


//Подключаем к правой кнопке слайд
slideRight.addEventListener('click', function () {
  if (isAnimated) {
    return;
  }

  isAnimated = true;
  currentIndex ++;
  offset = currentIndex * 360;
  sliderHidden.style.left = -offset + "px";

  setTimeout(function () {
    sliderHidden.style.transition = '';
    const element = elements.shift();
    elements.push(element);
    sliderHidden.removeChild(element);
    sliderHidden.appendChild(element);
    
    currentIndex --;
    offset = currentIndex * 360;
    sliderHidden.style.left = -offset + "px";
    setTimeout(function () {
      sliderHidden.style.transition = 'all 1s ease';
      isAnimated = false;
    }, 100)
  }, 1100);  
});


//Подключаем к левой кнопке слайд
slideLeft.addEventListener('click', function () {
  if (isAnimated) {
    return;
  }

  isAnimated = true;
  currentIndex --;
  offset = currentIndex * 360;
  sliderHidden.style.left = -offset + "px";

  setTimeout(function () {
    sliderHidden.style.transition = '';
    const element = elements.pop();
    elements.unshift(element);
    sliderHidden.removeChild(element);
    sliderHidden.insertBefore(element, sliderHidden.firstChild);
    
    currentIndex ++;
    offset = currentIndex * 360;
    sliderHidden.style.left = -offset + "px";
    setTimeout(function () {
      sliderHidden.style.transition = 'all 1s ease';
      isAnimated = false;
    }, 100)
  }, 1100);  
});


//Создаем модальное окно
function createModal(slideData) {
  
  const h3 = document.createElement('h3');
  h3.textContent = slideData.name;

  const h4 = document.createElement('h4');
  h4.textContent = slideData.type + " - " + slideData.breed;
  
  const h5 = document.createElement('h5');
  h5.textContent = slideData.description;

  const ul = document.createElement('ul');
  ul.innerHTML = `<li><b>Age:</b> ${slideData.age}</li><li><b>Inoculations:</b> ${slideData.inoculations}</li><li><b>Diseases:</b> n${slideData.diseases}</li><li><b>Parasites:</b> ${slideData.parasites}</li>`;
  ul.classList.add('modal__content__list');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal__content');
  modalContent.appendChild(h3);
  modalContent.appendChild(h4);
  modalContent.appendChild(h5);
  modalContent.appendChild(ul);
  
  const img = document.createElement('img');
  img.setAttribute('src', slideData.img);
  img.setAttribute('alt', 'Pet photo');
  
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.appendChild(img);
  modal.appendChild(modalContent);

  const btn = document.createElement('button');
  btn.classList.add('modal__close');
  btn.innerHTML = '<object type="image/svg+xml" data="../svg/Vector.svg"></object>'

  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal-window');
  setTimeout(() => modalWindow.classList.add('modal-window_show'), 100)
  
  modalWindow.appendChild(modal);
  modalWindow.appendChild(btn);

  //body.appendChild(modalWindow);
  
  const blackOut = document.createElement('div');
  blackOut.classList.add('blackout');
  blackOut.appendChild(modalWindow);
  body.appendChild(blackOut);

  body.style.overflow = 'hidden';

  //полностью очищаем память
  btn.addEventListener('click', function onBtnClick() {
    modalWindow.classList.remove('modal-window_show');
    setTimeout(() => {
      body.removeChild(blackOut);
      btn.removeEventListener('click', onBtnClick);
      body.style.overflow = 'visible';
    }, 1100)
  })
}


/*
  const cardsNext = [];

 for(let i = 0; i < cardsFirst.length; i++) {
    for(let j = 0; j < cardsArry.length; j++) {
        if (cardsArry[i] !== cardsFirst[j]) {
            cardsArry[i].push(cardsNext)
        }
    }
  } */

  // slideRight.addEventListener('click', function () {
//   offset = offset + 360;
//   sliderHidden.style.left = -offset + "px";
// });

// slideLeft.addEventListener('click', function () {
//   offset = offset - 360;
//   sliderHidden.style.left = -offset + "px";
// });