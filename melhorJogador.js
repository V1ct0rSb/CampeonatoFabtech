var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };
  window.onload = function () {
    var max = -219.99078369140625;
    forEach(document.querySelectorAll(".progress"), function (index, value) {
      percent = value.getAttribute("data-progress");
      value
        .querySelector(".fill")
        .setAttribute(
          "style",
          "stroke-dashoffset: " + ((100 - percent) / 100) * max
        );
      value.querySelector(".value").innerHTML = percent + "%";
    });
  };