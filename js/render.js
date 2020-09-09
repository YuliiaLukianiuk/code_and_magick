'use strict';
(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  window.renderWizard = function (wizard) {
  
  var element = similarWizardTemplate.cloneNode(true);
  var wizardElement = element.querySelector('.wizard');
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

      element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };
  //   // Module3-task1
  var setupSimilarWizards = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(window.renderWizard(data[i]));
    }

    setupSimilarWizards.classList.remove('hidden');
  };


// Функция, открывающая окно с похожими волшебниками
window.showSimilarWizards = function () {
  setupSimilarWizards.classList.remove('hidden');
}

})();


