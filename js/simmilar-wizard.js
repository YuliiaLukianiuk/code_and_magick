'use strict';
(function() {
  var similarListElement = document.querySelector('.setup-similar-list');
  
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector(".setup-similar-item");
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SERNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_COUNT = 4;

  var generateWizards = function (wizardsCount) {
    var wizardsArray = [];
    for (var i = 0; i < wizardsCount; i++) {
      wizardsArray[i] = {
        name: window.utils.getRandomArrElement(WIZARD_NAMES) + ' ' + window.utils.getRandomArrElement(WIZARD_SERNAME),
        coatColor: window.utils.getRandomArrElement(WIZARD_COAT),
        eyesColor: window.utils.getRandomArrElement(WIZARD_EYES)
      };
    }
    return wizardsArray;
  };
  
  var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  
  var userDialog = document.querySelector('.setup');
  var setupWizardForm = document.querySelector('.setup-wizard-form');
  var coatChange = document.querySelector('.wizard-coat');
  var eyesChange = document.querySelector('.wizard-eyes');
  var fireballChange = document.querySelector('.setup-fireball-wrap');
  
  var renderWizard  = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };
  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return fragment;
  };
  
  var wizards = generateWizards(WIZARDS_COUNT);
  similarListElement.append(renderWizards(wizards));
  
  // Показываем Список похожих персонажей
  document.querySelector('.setup-similar').classList.remove('hidden');
  
})();
