'use strict';

(function() {
  window.utils = {
     getRandomArrElement: function (arr) {
      var rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    },
    // Счетчик
   getIterator: function (array) {
    var count = 1;
    return function () {
      if (count >= array.length) {
        count = 0;
      }
      return array[count++];
    };
  },
    // Функция, возвращающая новый массив из старого в случайном порядке
    shuffleArray: function (array) {
      var mixedArray = array.slice();
      for (var i = mixedArray.length - 1; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var tempValue = mixedArray[i];
        mixedArray[i] = mixedArray[randomIndex];
        mixedArray[randomIndex] = tempValue;
      }
      return mixedArray;
    }
  
  };
})();
