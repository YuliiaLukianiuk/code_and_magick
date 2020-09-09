// (function () {
//   var colorCoat;
//   var colorEyes;
//   window.wizards = [];

//   var getRank = function (wizard) {
//     var rank = 0;
//     if (wizard.colorCoat === colorCoat) {
//       rank +=2;
//     }
//     if (wizard.colorEyes === colorEyes) {
//       rank +=1;
//     }
//     return rank;
//   }
//   window.updateWizards = function () {
//     window.render(window.wizards.slice().sort(function (left, right) {
//       var rankDiff = getRank(right) - getRank(left);
//       if (rankDiff === 0) {
//         rankDiff = window.wizards.indexOf(left) - window.wizards.indexOf(right); 
//       }
//       return rankDiff;
//     }));
//   }
//   window.wizard.onEyesChange = window.debounce(function (color) {
//     colorEyes = color;
//     window.updateWizards();
//   });
//   window.wizard.onCoatChange = window.debounce(function (color) {
//     colorCoat = color;
//     window.updateWizards();
//   });


//   var successHandler = function (data) {
//     window.wizards = data;
//     window.render(wizards);
// };

// var errorHandler = function (errorMessage) {
// var node = document.createElement('div');
//   node.style = 'z-index: 100; margin:0 auto; text-align: center; background-color: red;';
//   node.style.position = 'absolute';
//   node.style.left = 0;
//   node.style.right = 0;
//   node.style.fontSize = '30px';

//   node.textContent = errorMessage;
//   document.body.insertAdjacentElement('afterbegin', node);
// };
// var URL = 'https://javascript.pages.academy/code-and-magick/data';

// window.load(URL, successHandler, errorHandler);

// })();