'use strict';

(function () {
  
  // window.wizard = {
  //   onEyesChange: function (color) {
  //     return color;
  //   },
  //   onCoatChange: function (color) {
  //     return color;
  //   }
  // };

  var coatColor;
  var eyesColor;
  var wizards = [];

  var DATA_WIZARD = {
    COUNT: 4,
    wizardCoatColors : [
      'rgb(146, 100, 161)',
      'rgb(215, 210, 55)',
      'rgb(241, 43, 107)',
      'rgb(101, 137, 164)',
      'rgb(0, 0, 0)',
      'rgb(215, 210, 55)',
      'rgb(56, 159, 117)',
      'rgb(241, 43, 107)'
    ],
  
    wizardEyesColors: [
      'red',
      'orange',
      'yellow',
      'green',
      'lightblue',
      'blue',
      'purple'
    ],
    fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };
  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.utils.getRandomArrElement(DATA_WIZARD.wizardCoatColors);
    this.style.fill = newColor;
    coatColor = newColor;
    updateWizards();
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.utils.getRandomArrElement(DATA_WIZARD.wizardEyesColors);
    this.style.fill = newColor;
    eyesColor = newColor;
    updateWizards();
  });
    // window.wizard = wizard;
    var getNextFireballColor = window.utils.getIterator(DATA_WIZARD.fireballColors);
    var changeFireballColor = userDialog.querySelector('.setup-fireball-wrap');
      changeFireballColor.addEventListener('click', function (evt) {
      changeFireballColor.style.background = getNextFireballColor();
 });

    var updateWizards = function () {
      var sameCoatAndEyesWizards = wizards.filter(function (it) {
        return it.colorCoat === coatColor && it.colorEyes === eyesColor;
      });
    
      var sameCoatWizards = wizards.filter(function(it) {
        return it.colorCoat === coatColor;
      });
    
      var sameEyesWizards = wizards.filter(function(it) {
        return it.colorEyes === eyesColor;
      });
    
    var filteredWizards = sameCoatAndEyesWizards;
    filteredWizards = filteredWizards.concat(sameCoatWizards);
    filteredWizards = filteredWizards.concat(sameEyesWizards);
    filteredWizards = filteredWizards.concat(wizards);
    
    var uniqueWizards = filteredWizards.filter(function (it, i) {
      return filteredWizards.indexOf(it) === i;
    });
    window.render(uniqueWizards);
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