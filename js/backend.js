'use strict';
(function () {
  var URL = 'https://javascript.pages.academy/code-and-magick';
  //объект с данными, которые необходимо отправить, фун-ю обратного вызова, которая будет вызываться, когда данные отправленны успешно
  window.upload = function(data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });
    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
