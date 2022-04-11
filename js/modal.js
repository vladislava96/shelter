const body = document.querySelector('body');

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
  btn.innerHTML = '<img src="../svg/Vector.svg">'

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
