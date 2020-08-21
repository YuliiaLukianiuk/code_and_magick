// 'use strict';
// (function () {
//   var wizard = {
//     onEyesChange: function (color) {
//       return color;
//     },
//     onCoatChange: function (color) {
//       return color;
//     }
//   };
//   var wizardElement = document.querySelector('.setup-wizard');
//   var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
//   var wizardCoatColors = [
//   'rgb(146, 100, 161)',
//     'rgb(215, 210, 55)',
//     'rgb(241, 43, 107)',
//     'rgb(101, 137, 164)',
//     'rgb(0, 0, 0)',
//     'rgb(215, 210, 55)',
//     'rgb(56, 159, 117)',
//     'rgb(241, 43, 107)'
// ];
// wizardCoatElement.addEventListener('click', function () {
//   var newColor = getRandomElement(wizardCoatColors);
//   wizardCoatElement.style.fill = newColor;
//   wizard.onCoatChange(newColor);
// });

// var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
// var wizardEyesColors = [

//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'lightblue',
//   'blue',
//   'purple'
// ];
// wizardEyesElement.addEventListener('click', function () {
//   var newColor = getRandomElement(wizardEyesColors);
//   wizardEyesElement.style.fill = newColor;
//   wizard.onEyesChange(newColor);
// });
// window.wizard = wizard;
// })();
// // var coatColor;
// // var eyesColor;
// // var wizards = [];

// // var getRung = function (wizard) {
// //   var rung = 0;
// //   if (wizard.colorCoat === coatColor) {
// //     rung += 2;
// //   }
// //   if (wizard.colorEyes === eyesColor) {
// //     rung +=1;
// //   }
// //   return rung;
// // }

// // var namesComparator = function (left, right) {
// //   if (left > right) {
// //     return 1;
// //   } else if (left < right) {
// //     return -1;
// //   } else {
// //     return 0;
// //     }
// //   };
 
// // var updateWizards = function () {
// //   window.render(wizards.slice().sort(function (left, right) {
// //     var rungDiff = getRung(right) - getRung(left);
// //     if (rungDiff === 0) {
// //       rungDiff = wizards.indexOf(left) - wizards.indexOf(right);
// //     }
// //     return rungDiff;
// //   }));
// //   }

//   // var lastTimeout;
//   // window.wizard.onEyesChange = function (color) {
//   //   eyesColor = color;
//   //   if(lastTimeout) {
//   //     window.clearTimeout(lastTimeout)
//   //   }
//   //   lastTimeout = window.setTimeout(function () {
//   //     updateWizards();
//   //   }, 300);
//   // }
// //   window.wizard.onCoatChange = function (color) {
// //     coatColor = color;
// //     if (lastTimeout) {
// //       window.clearTimeout(lastTimeout);
// //     }
// //     lastTimeout = window.setTimeout(function () {
// //       updateWizards();
// //     }, 300);  
// //   }
// // var filteredWizards = sameCoatAndEyesWizards;
// //     filteredWizards = filteredWizards.concat(sameCoatWizards);
// //     filteredWizards = filteredWizards.concat(sameEyesWizard);
// //     filteredWizards = filteredWizards.concat(wizards);

// // var uniqueWizards = filteredWizards.filter(function(it, i) {
// //     return filteredWizards.indexOf(it) === i;
// //   });
// //   window.render(uniqueWizards);
// // })

// // var wizardElement = document.querySelector('.setup-wizard');
// // var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
// // wizardCoatElement.addEventListener('click', function () {
// //   var newColor = window.utils(COAT_COLORS);
// //   this.style.fill = newColor;
// //   coatColor = newColor;
// //   updateWizards();
// // });

// // var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
// // wizardEyesElement.addEventListener('click', function () {
// //   var newColor = window.utils(EYES_COLORS);
// //   this.style.fill = newColor;
// //   eyesColor = newColor;
// //   updateWizards();

// // });
// // window.wizard = wizard;

// // })();