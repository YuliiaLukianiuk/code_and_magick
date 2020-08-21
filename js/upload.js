(function () {
  
  window.userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.upload(new FormData(form), function (response) {
      userDialog.classList.add('hidden');
    })
  });
  })();