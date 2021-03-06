'use stricr';
(function() {
  var KEYCODE = {
    ENTER: 13,
    ESC: 27
  };
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');   // кнопка открытия окна
  var userDialogClose = userDialog.querySelector('.setup-close'); // кнопка закрытия окна
  var userInputName = userDialog.querySelector('.setup-user-name');
  var shopElement = document.querySelector('.setup-artifacts-shop');

// Валидация формы
userInputName.addEventListener('invalid', function (evt) {
  var message;
  if (userInputName.validity.tooShort) {
    message = 'Имя должно состоять минимум из 2-х символов';
  } else if (userInputName.validity.tooLong) {
    message = 'Имя не должно превышать 25-ти символов';
  } else if (userInputName.validity.valueMissing) {
    message = 'Введите имя персонажа';   
  } else {
    message = '';
  }
  userInputName.setCustomValidity(message);
});
    
// Валидация инпута для edge
userInputName.addEventListener('input', function (evt) {
  var message;
  var target = evt.target;

  target.value.length < 2 ? message = 'Имя должно состоять минимум из 2-х символов' : message = '';
  target.setCustomValidity(message);
});

// Закрываем окно с настройками персонажа по клику на кнопку Enter
userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE.ENTER) {
  closeSettingsWizard();
  }
});

// Закрываем окно с настройками персонажа по клику на крестик
userDialogClose.addEventListener('click', function () {
  closeSettingsWizard();
});


// Открываем окно с настройками персонажа по клику на иконку
userDialogOpen.addEventListener('click', function () {
  openSettingsWizard();
  window.showSimilarWizards();
});
// Открываем окно с настройками персонажа по клику на кнопку Enter
userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE.ENTER) {
    openSettingsWizard();
    window.showSimilarWizards();
  }
});

// Закрываем окно с настройками персонажа по клику на клавишу ESC
function onUserDialogEscPress(evt) {
  if (evt.keyCode === KEYCODE.ESC) {
    closeSettingsWizard();
  }
}
// Функция, открывающая окно с похожими волшебниками и создающая функцию для закрытия окна с клавиатуры
function openSettingsWizard() {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onUserDialogEscPress);
  shopElement.addEventListener('dragstart', onShopElementDragstart);

}

// Функция, закрывающая окно с похожими волшебниками и удаляющую функцию для закрытия окна с клавиатуры
function closeSettingsWizard() {
  if (document.activeElement !== userInputName) {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onUserDialogEscPress);
    shopElement.removeEventListener('dragstart', onShopElementDragstart);

  }
}

//  Перемещение артефакта
var onShopElementDragstart = function (dragstartEvt) {
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  if (dragstartEvt.target.tagName.toLowerCase() === 'img') {
    draggedItem = dragstartEvt.target;
    dragstartEvt.dataTransfer.setData('text/plain', dragstartEvt.target.alt);
    artifactsElement.style.outline = '2px dashed red';
  }

  artifactsElement.addEventListener('dragstart', function () {
    artifactsElement.style.outline = '2px dashed red';
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
    artifactsElement.style.outline = '';
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = 'green';
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
  });

  document.addEventListener('dragend', function (evt) {
    evt.preventDefault();
    artifactsElement.style.outline = '';
  });
};
})();
