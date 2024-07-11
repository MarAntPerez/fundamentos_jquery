$(document).ready(function () {
  $("#btnFadeOut").click(function () {
    $("#caja").fadeOut(2000, function () {
      $("#btnFadeOut").text("Trabajo Terminado");
    });
  });

  $("#btnFadeIn").click(function () {
    $("#caja").fadeIn(2000);
  });

  $("#btnFadeToggle").click(function () {
    $("#caja").fadeToggle(2000);
  });

  $("#btnSlideDown").click(function () {
    $("#caja").slideDown(2000);
  });

  $("#btnSlideUp").click(function () {
    $("#caja").slideUp(2000);
  });

  $("#btnSlideToggle").click(function () {
    $("#caja").slideToggle(2000);
  });

  $("#btnStop").click(function () {
    $("#caja").stop(2000);
  });

  // Mover
  $("#moverDerecha").click(function () {
    $("#caja2").animate({
      left: 500,
      heigth: "300px",
      width: "300px",
      opacity: "0.5",
    });
  });

  $("#moverIzquierda").click(function () {
    $("#caja2").animate({
      left: 0,
      heigth: "100px",
      width: "100px",
      opacity: "1",
    });
  });

  $("#moverAlrededor").click(function () {
    var caja2 = $("caja2");
    caja2.animate({
      left: 300,
    });

    caja2.animate({
      top: 300,
    });

    caja2.animate({
      left: 0,
      top: 300,
    });

    caja2.animate({
      left: 0,
      top: 0,
    });
  });
});
