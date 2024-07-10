$(document).ready(function () {
  $("input").focus(function () {
    // alert("focus");
    // $(this).css("background", "red");
    // $(this).css("color", "white");
  });

  $("input").blur(function () {
    // $(this).css("background", "white");
  });

  $("input").keyup(function (e) {
    // console.log("keyup");
    // console.log(e.target.value);
  });

  $("select#genero").change(function (e) {
    // console.log("Cambiado");
    // console.log(e.target.value);
  });

  $("#formulario").submit(function (e) {
    e.preventDefault();

    var nombre = $("input#nombre").val();
    var email = $("input#email").val();
    var genero = $("select#genero").val();
    console.log(nombre);
    console.log(email);
    console.log(genero);
  });
});
