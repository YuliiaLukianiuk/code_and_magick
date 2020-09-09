'use strict';

(function () {
  var wizards = [];
  var coatColor;
  var eyesColor;
  
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
  var namesComparator = function (leftName, rightName) {
    if (leftName > rightName) {
      return 1;
    } else if (leftName < rightName) {
      return -1;
    } else {
      return 0;
    }
  };
  var wizardsComparator = function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    return rankDiff === 0 ? namesComparator(left.name, right.name) : rankDiff;
  };

  var updateFilter = function () {
    window.render(wizards.sort(wizardsComparator));
  };
  window.wizard.onEyesChange = function (color) {
    eyesColor = color;
    updateFilter();
    };
  window.wizard.onCoatChange = function (color) {
    coatColor = color;
    updateFilter();
  };
})();