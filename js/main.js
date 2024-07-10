$(document).ready(function () {
  // Selector por etiqueta
  $("p").css("color", "blue");
  $("p").css("font-size", "24px");

  // Selector por clase
  $(".mi-clase").html("Texto cambiado");

  // Selector por id
  $("#mi-id").css("font-weight", "bold");

  // Selector de descendencia
  $("ul li").css("list-style", "none");

  // Selector de descendencia especifico
  $("#contenedor span").css("border", "1px solid red");

  // Selector de primer elemento
  $("ul li:first").css("background-color", "#eee");

  // Selector de ultimo elemento
  $("ul li:last").css("background-color", "#ccc");

  // Selector elmento par o impar
  $("tr:even").css("background-color", "#f0f0f0");
  $("tr:odd").css("background-color", "#e0e0e0");
});
