module.exports = function forceCanvasResizeSafariMobile (canvasEl) {
  var width = canvasEl.style.width;
  var height = canvasEl.style.height;
  // Taken from webvr-polyfill (https://github.com/borismus/webvr-polyfill/blob/85f657cd502ec9417bf26b87c3cb2afa6a70e079/src/util.js#L200)
  // iOS only workaround for https://bugs.webkit.org/show_bug.cgi?id=152556
  // By changing the size 1 pixel and restoring the previous value
  // we trigger a size recalculation cycle.
  var widthUnit = width.replace(/^[0-9]+/, '');
  var heightUnit = height.replace(/^[0-9]+/, '');
  canvasEl.style.width = (parseInt(width, 10) + 1) + widthUnit;
  canvasEl.style.height = (parseInt(height, 10) + 1) + heightUnit;
  setTimeout(function () {
    canvasEl.style.width = '';
    canvasEl.style.height = '';
  }, 200);
};
