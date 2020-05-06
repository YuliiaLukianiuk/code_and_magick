'use strict'
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 230;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 20;
var FONT_GAP = 10;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 30;
var maxHeight = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 0; i<arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP,'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y,'#fff');

var colorCloud = ['green', 'orange', 'yellow'];
var maxTime = getMaxElement(times);
  for (var i =0; i < players.length; i++) {
  if (players[i] === 'Вы') {
    ctx.fillStyle = "red";
  }else{
    ctx.fillStyle = colorCloud[i];
  };
    ctx.beginPath();
    ctx.moveTo(CLOUD_X + GAP + (TEXT_WIDTH + BAR_HEIGHT)*i, CLOUD_HEIGHT);
    ctx.lineTo(CLOUD_X + TEXT_WIDTH + FONT_GAP + (TEXT_WIDTH + BAR_HEIGHT)*i, CLOUD_HEIGHT);
    ctx.lineTo(CLOUD_X + TEXT_WIDTH + FONT_GAP + (TEXT_WIDTH + BAR_HEIGHT)*i, ((CLOUD_X + BAR_HEIGHT * 2 + TEXT_WIDTH) * times[i]) / maxTime);
    ctx.lineTo(CLOUD_X + GAP + (TEXT_WIDTH + BAR_HEIGHT)*i, ((CLOUD_X + BAR_HEIGHT * 2 + TEXT_WIDTH) * times[i]) / maxTime);
    ctx.lineTo(CLOUD_X + GAP + (TEXT_WIDTH + BAR_HEIGHT)*i, CLOUD_HEIGHT);
    ctx.fill();
    ctx.fillStyle = "#000";
    ctx.fillText(players[i], CLOUD_X + GAP + (TEXT_WIDTH + BAR_HEIGHT)*i, CLOUD_HEIGHT + GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (TEXT_WIDTH + BAR_HEIGHT)*i, ((CLOUD_X + BAR_HEIGHT * 2 + GAP *2) * times[i]) / maxTime);
    ctx.fillText("Ура вы победили!", CLOUD_X + FONT_GAP, TEXT_WIDTH + BAR_HEIGHT);
    ctx.fillText("Список результатов:", CLOUD_X + FONT_GAP, CLOUD_X);
  }
};



































