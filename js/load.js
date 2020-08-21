'use strict';
(function () {
  var URL = 'https://javascript.pages.academy/code-and-magick/data';

  window.load = function (onSuccess, onError) {

    // url = url || URL;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'mc');
    });
    xhr.timeout = 1000;//10s
    xhr.open('GET', URL);
    xhr.send();
  };
})();