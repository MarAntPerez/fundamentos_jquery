$(document).ready(function () {
  $(":button").click(function () {
    var tamanio = $(this).val();
    var valorActual = parseInt($("p").css("font-size"));

    if (tamanio == "Pequenia") {
      valorActual = valorActual - 2;
    } else if (tamanio == "Grande") {
      valorActual = valorActual + 2;
    }

    $("p").css("font-size", valorActual + "px");
  });
});
