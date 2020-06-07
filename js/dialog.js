'use stricr';

(function() {
  var userDialog = document.querySelector('.setup');
  var setupWizardForm = document.querySelector('.setup-wizard-form');
  var dialogHandler = userDialog.querySelector('.upload');
  var coatChange = setupWizardForm.querySelector('.wizard-coat');
  var eyesChange = setupWizardForm.querySelector('.wizard-eyes');
  var fireballChange = setupWizardForm.querySelector('.setup-fireball-wrap');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  
  setupOpen.addEventListener('click', function() {
    userDialog.classList.remove('hidden');
  });
  setupClose.addEventListener('click', function() {
    userDialog.classList.add('hidden');
  });
  
  var onPopupEscPress = function(evt) {
    if (evt.keyCode=== ESC_KEYCODE) {
      closePopup();
    }
  };
  var openPopup = function(evt) {
    userDialog.classList.remove('hidden');
    coatChange.addEventListener('click', window.setup.onWizardCoatClick);
    eyesChange.addEventListener('click', window.setup.onWizardEyesClick);
    fireballChange.addEventListener('click', window.setup.onFireballClick);
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopup = function(evt) {
    userDialog.classList.add('hidden');
    userDialog.style.top = setupStartPosition.top;
    userDialog.style.left = setupStartPosition.left;
    document.addEventListener('keydown', onPopupEscPress);
  };
  setupOpen.addEventListener('click', function() {
    openPopup();
  }); 
  setupOpen.addEventListener('keydown', function(evt) {
    if (evt.keyCode=== ENTER_KEYCODE) {
      openPopup();
    }
  });
  setupClose.addEventListener('click', function() {
    closePopup();
  });
  setupClose.addEventListener('keydown', function(evt) {
    if(evt.keyCode=== ENTER_KEYCODE) {
      closePopup();
    }
  });

  var setupStartPosition = {
    top: userDialog.style.top,
    left: userDialog.style.left
  };
  dialogHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
     dragged = true;

  var shift = {
    x: startCoords.x - moveEvt.clientX,
    y: startCoords.y - moveEvt.clientY
  };
   startCoords = {
    x: moveEvt.clientX,
    y: moveEvt.clientY
  };

  userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
  userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

  if (dragged) {
    var onClickPreventDefault = function (evt) {
      evt.preventDefault();
      dialogHandler.removeEventListener('click', onClickPreventDefault)
    };
    dialogHandler.addEventListener('click', onClickPreventDefault);
  }
};
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  });
})();
