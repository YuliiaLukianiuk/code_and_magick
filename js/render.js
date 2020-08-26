'use strict';
(function () {
  window.renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  
  var element = similarWizardTemplate.cloneNode(true);
  var wizardElement = element.querySelector('.wizard');
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

      element.querySelector('.setup-similar-label').textContent = wizard.names + '\n ' + wizard.surnames;

    return element;
  };
  //   // Module3-task1
  var setupSimilarWizards = document.querySelector('.setup-similar');
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }

    setupSimilarWizards.classList.remove('hidden');
  };
  
})();


// (function () {
//   var WIZARD_COAT = [
//     'rgb(146, 100, 161)',
//     'rgb(215, 210, 55)',
//     'rgb(241, 43, 107)',
//     'rgb(101, 137, 164)',
//     'rgb(0, 0, 0)',
//     'rgb(215, 210, 55)',
//     'rgb(56, 159, 117)',
//     'rgb(241, 43, 107)'];
//   var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
//     var wizards = [];
//   var coatColor;
//   var eyesColor;

// var getRank = function (wizard) {
//   var rank =0;
//   if (wizards.colorCoat === coatColor) {
//     rank += 2;
//   }
//   if (wizards.colorEyes === eyesColor) {
//     rank +=1;
//   }
//   return rank;
// }

// var namesComparator = function (left, right) {
//   if (left > right) {
//     return 1;
//   } else if (left < right) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// window.updateWizards = function () {
//   window.render(wizards.sort(function (left, right) {
//     var rankDiff = getRank(right) - getRank(left);
//     if (rankDiff === 0) {
//       rankDiff = namesComparator(left.name, right.name);
//     }
//     return rankDiff;
//   }));
// }
// window.wizard.OnEyesChange = function (color) {
//   eyesColor = color;
//   window.updateWizards();
// }
// window.wizard.OnCoatChange = function (color) {
//   coatColor = color;
//   window.updateWizards();
// };

//   // var updateWizards = function () {
//   //   var sameCoatAndEyesWizards = wizards.filter(function (it) {
//   //     return it.colorCoat === coatColor && it.colorEyes === eyesColor;
//   //   });
//   //   var sameCoatWizards = wizards.filter(function(it) {
//   //     return it.colorCoat === coatColor;
//   //   });
//   //   var sameEyesWizards = wizards.filter(function(it) {
//   //     return it.colorEyes === eyesColor;
//   //   });
//   //   var filterWizards = sameCoatAndEyesWizards;
//   //   filterWizards = filterWizards.concat(sameCoatWizards);
//   //   filterWizards = filterWizards.concat(sameEyesWizards);
//   //   filterWizards = filterWizards.concat(wizards);

//   //   var uniqueWizards = filterWizards.filter(function (it, i) {
//   //     return filterWizards.indexOf(it) === i;
//   //   });
//   //   window.render(uniqueWizards);
//   // }

//   window.render = function (wizard) {
//     var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector(".setup-similar-item");  
//     var wizardElement = similarWizardTemplate.cloneNode(true);
    
//     // var wizardtest = document.querySelector('.setup-wizard');
//     //имя мага
//     wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
// //цвет пальто мага
      
//     var wizardCoatColor =  wizardElement.querySelector('.wizard-coat');
//     wizardCoatColor.addEventListener('click', function() {
//       var newColor = window.utils.getRandomArrElement(WIZARD_COAT);
//     this.style.fill = newColor;
//     eyesColor = newColor;
//     window.updateWizards();
//     });
    
//     var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
//     wizardEyesElement.addEventListener('click', function() {
//       var newColor = window.utils.getRandomArrElement(WIZARD_EYES);
//     this.style.fill = newColor;
//     coatColor = newColor;
//     window.updateWizards();
//     });
//     wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
//     return wizardElement;
//   }

// })();
