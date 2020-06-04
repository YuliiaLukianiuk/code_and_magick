'use strict';

(function() {
  window.utils = {
     getRandomArrElement: function (arr) {
      var rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    }
  };
})();
