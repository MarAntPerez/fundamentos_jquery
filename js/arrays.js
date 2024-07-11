$(document).ready(function () {
  var miArray = ["Jose", "Gloria", "Juan", "Raquel"];

  $.each(miArray, function (i, val) {
    $("#usuarios").append("<li>" + val + "</li>");
  });

  var nuevoArray = $("ul#lista li").toArray();

  $.each(nuevoArray, function (i, val) {
    console.log(val);
  });
});
