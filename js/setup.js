(function () {
  // Module3-task1
  var DATA_WIZARDS = {
    COUNT: 4,
    NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLOR: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };
  
  var userDialog = document.querySelector('.setup');
  var coatColor;
  var eyesColor;
  var wizards = [];
  var setupSimilarWizards = document.querySelector('.setup-similar');
  var similarListElement = userDialog.querySelector('.setup-similar-list');


  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank +=2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank +=1;
    }
    return rank;
  };

  var updateWizards = function () {
    window.render(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right); 
      }
      return rankDiff;
    }));
  }
    window.wizard.onCoatChange = function (color) {
      coatColor = color;
      window.debounce(updateWizards);
    }

    window.wizard.onEyesChange = function (color) {
      eyesColor = color;
      window.debounce(updateWizards);
    }
  
  var changeCoatColor = userDialog.querySelector('.wizard-coat');
        changeCoatColor.addEventListener('click', function (evt) {
        var newColor = getNextCoatColor();
        this.style.fill = newColor;
        coatColor = newColor;
        updateWizards();
  });
  var changeEyesColor = userDialog.querySelector('.wizard-eyes');
      changeEyesColor.addEventListener('click', function (evt) {
        var newColor = getNextEyeColor(); 
        this.style.fill = newColor;
        eyesColor = newColor;
        updateWizards();
 });
  var changeFireballColor = userDialog.querySelector('.setup-fireball-wrap');
      changeFireballColor.addEventListener('click', function (evt) {
      changeFireballColor.style.background = getNextFireballColor();
 });
  
  
//   // Module4-task1
  var getNextCoatColor = window.utils.getIterator(DATA_WIZARDS.COAT_COLOR);
  var getNextEyeColor = window.utils.getIterator(DATA_WIZARDS.EYES_COLOR);
  var getNextFireballColor = window.utils.getIterator(DATA_WIZARDS.FIREBALL_COLOR);
  
  changeCoatColor.addEventListener('click', function (evt) {
    changeCoatColor.style.fill = getNextCoatColor();
  });
  
  changeEyesColor.addEventListener('click', function (evt) {
    changeEyesColor.style.fill = getNextEyeColor();
  });
  
  changeFireballColor.addEventListener('click', function (evt) {
    changeFireballColor.style.background = getNextFireballColor();
  });

  // Module3-task1
  // Функция, открывающая окно с похожими волшебниками
  window.showSimilarWizards = function () {
    setupSimilarWizards.classList.remove('hidden');
  }
  
  renderWizards();
  
  // Клонируем шаблон волшебника
  function renderWizards() {
    var similarWizards = generateWizards();
    var fragment = document.createDocumentFragment();
  
    for (var i = 0; i < similarWizards.length; i++) {
      fragment.appendChild(window.renderWizard(similarWizards[i]));
    }
    similarListElement.appendChild(fragment);
  }
  
  // Функция, возвращающаая массив объектов магов
  function generateWizards() {
    var shuffleWizardNames = window.utils.shuffleArray(DATA_WIZARDS.NAMES);
    var shuffleWizardSurnames = window.utils.shuffleArray(DATA_WIZARDS.SURNAMES);
  
    for (var i = 0; i < DATA_WIZARDS.COUNT; i++) {
      wizards.push({
        names: shuffleWizardNames[i],
        surnames: shuffleWizardSurnames[i],
        coatColor: window.utils.getRandomArrElement(DATA_WIZARDS.COAT_COLOR),
        eyesColor: window.utils.getRandomArrElement(DATA_WIZARDS.EYES_COLOR)
      });
    }
    return wizards;
  }

  var successHandler = function (data) {
      wizards = data;
      updateWizards();
};

var errorHandler = function (errorMessage) {
var node = document.createElement('div');
    node.style = 'z-index: 100; margin:0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
  
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
var URL = 'https://javascript.pages.academy/code-and-magick/data';
  
  window.load(URL, successHandler, errorHandler);
  })();
  











// 'use strict';
// (function() {

// var setupWizardForm = document.querySelector('.setup-wizard-form');
// var coatChange = setupWizardForm.querySelector('.wizard-coat');
// var eyesChange = setupWizardForm.querySelector('.wizard-eyes');
// var fireballChange = setupWizardForm.querySelector('.setup-fireball-wrap');
// var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
// var WIZARD_COAT = [
//   'rgb(146, 100, 161)',
//   'rgb(215, 210, 55)',
//   'rgb(241, 43, 107)',
//   'rgb(101, 137, 164)',
//   'rgb(0, 0, 0)',
//   'rgb(215, 210, 55)',
//   'rgb(56, 159, 117)',
//   'rgb(241, 43, 107)'];
// var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
// var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
// var userNameInput = document.querySelector('.setup-user-name');
  
// //валидация формы
// userNameInput.addEventListener('invalid', function (evt) {
//   if (userNameInput.validity.tooShort) {
//     userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
//   } else if (userNameInput.validity.tooLong) {
//     userNameInput.setCustomValidity('Имя не должно должно превышать 25-ти символов');
//   } else if (userNameInput.validity.valueMissing) {
//     userNameInput.setCustomValidity('Обязательное поле');
//   }else {
//     //cброс поля, если значение стало корректно
//     userNameInput.setCustomValidity('');
//   }
// });

// var similarListElement = document.querySelector('.setup-similar-list');
// // var userDialog = document.querySelector('.setup');
// // var form = userDialog.querySelector('.setup-wizard-form');
// // form.addEventListener('submit', function (evt) {
// //   window.upload(new FormData(form), function (response) {
// //     userDialog.classList.add('hidden');
// //   })
// // });
// var successHandler = function (wizards) {
// var fragment = document.createDocumentFragment();
// for (var i = 0; i < 4; i++) {
//   fragment.appendChild(window.render(wizards[i]));
// }
// similarListElement.appendChild(fragment);
// window.userDialog.querySelector('.setup-similar').classList.remove('hidden');
// };
// var errorHandler = function (errorMessage) {
// var node = document.createElement('div');
// node.style = 'z-index: 100; margin:0 auto; text-align: center; background-color: red;';
// node.style.position = 'absolute';
// node.style.left = 0;
// node.style.right = 0;
// node.style.fontSize = '30px';

// node.textContent = errorMessage;
// document.body.insertAdjacentElement('afterbegin', node);
// };
// window.load(successHandler, errorHandler);



// window.setup = {
//       // Изменение цвета плаща при клике
//   onWizardCoatClick:  function () {
//     coatChange.style.fill = window.utils.getRandomArrElement(WIZARD_COAT);
//   },
//       // Изменение цвета глаз при клике
//   onWizardEyesClick: function () {
//     eyesChange.style.fill = window.utils.getRandomArrElement(WIZARD_EYES);
// },
//         // Изменение цвета фаербола при клике
//   onFireballClick: function () {
//     fireballChange.style.backgroundColor = window.utils.getRandomArrElement(WIZARD_FIREBALL);
//   },

// onNameClick: function () {
//   window.utils.getRandomArrElement(WIZARD_NAMES) +   window.utils.getRandomArrElement(WIZARD_SURNAMES)

// },

  
// };
// })();
    