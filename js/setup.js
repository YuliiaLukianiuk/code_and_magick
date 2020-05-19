'use strict';

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var similarListElement = document.querySelector('.setup-similar-list');
var userNameInput = document.querySelector('.setup-user-name');
var coatChange = document.querySelector('.wizard-coat');
var eyesChange = document.querySelector('.wizard-eyes');
var fireballChange = document.querySelector('.setup-fireball-wrap');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector(".setup-similar-item");
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SERNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var getRandomArrElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

setupOpen.addEventListener('click', function() {
  userDialog.classList.remove('hidden');
});
setupClose.addEventListener('click', function() {
  userDialog.classList.add('hidden');
});

var onPopupEscPress = function(evt) {
  if (evt.keyCode=== ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  userDialog.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode=== ENTER_KEYCODE) {
    openPopup();
  }
});
setupClose.addEventListener('click', function() {
  closePopup();
});
setupClose.addEventListener('keydown', function(evt) {
  if(evt.keyCode=== ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  }else {
    //cброс поля, если значение стало корректно
    userNameInput.setCustomValidity('');
  }
  });

  coatChange.addEventListener('click', function(evt) {
    coatChange.style.fill = getRandomArrElement(WIZARD_COAT);
  });

  eyesChange.addEventListener('click', function() {
    eyesChange.style.fill = getRandomArrElement(WIZARD_EYES);
  });

  fireballChange.addEventListener('click', function() {
    fireballChange.style.backgroundColor = getRandomArrElement(WIZARD_FIREBALL);
  });

var wizards = [
  {
    name:WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SERNAME[Math.floor(Math.random() * WIZARD_SERNAME.length)],
    coatColor: WIZARD_COAT[Math.floor(Math.random() * WIZARD_COAT.length)],
    eyesColor: WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)]
  },
  {
    name:WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SERNAME[Math.floor(Math.random() * WIZARD_SERNAME.length)],
    coatColor: WIZARD_COAT[Math.floor(Math.random() * WIZARD_COAT.length)],
    eyesColor: WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)]
  },
  {
    name:WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SERNAME[Math.floor(Math.random() * WIZARD_SERNAME.length)],
    coatColor: WIZARD_COAT[Math.floor(Math.random() * WIZARD_COAT.length)],
    eyesColor: WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)]
  },
  {
    name:WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SERNAME[Math.floor(Math.random() * WIZARD_SERNAME.length)],
    coatColor: WIZARD_COAT[Math.floor(Math.random() * WIZARD_COAT.length)],
    eyesColor: WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)]
  }
];
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}
var fragment = document.createDocumentFragment();    //пустой фрагмент
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);   //вставляет элемент на страницу
userDialog.querySelector('.setup-similar').classList.remove('hidden');
