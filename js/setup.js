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
    // Изменение цвета плаща при клике
    window.setup = {
      onWizardCoatClick :  function () {
        coatChange.style.fill = window.utils.getRandomArrElement(WIZARD_COAT);
      },
      onWizardEyesClick: function () {
    eyesChange.style.fill = window.utils.getRandomArrElement(WIZARD_EYES);
},
onFireballClick: function () {
    fireballChange.style.backgroundColor = window.utils.getRandomArrElement(WIZARD_FIREBALL);
    }
  };
})();
