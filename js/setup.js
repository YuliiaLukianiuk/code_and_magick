'use strict';
(function() {

var setupWizardForm = document.querySelector('.setup-wizard-form');
var coatChange = setupWizardForm.querySelector('.wizard-coat');
var eyesChange = setupWizardForm.querySelector('.wizard-eyes');
var fireballChange = setupWizardForm.querySelector('.setup-fireball-wrap');

var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var userNameInput = document.querySelector('.setup-user-name');
  
//валидация формы
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
window.setup = {
      // Изменение цвета плаща при клике
  onWizardCoatClick:  function () {
    coatChange.style.fill = window.utils.getRandomArrElement(WIZARD_COAT);
  },
      // Изменение цвета глаз при клике
  onWizardEyesClick: function () {
    eyesChange.style.fill = window.utils.getRandomArrElement(WIZARD_EYES);
},
        // Изменение цвета фаербола при клике
  onFireballClick: function () {
    fireballChange.style.backgroundColor = window.utils.getRandomArrElement(WIZARD_FIREBALL);
  },
        // Перемещение артефакта
  onShopElementDragstart: function (dragstartEvt) {
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
  }
};
})();
    