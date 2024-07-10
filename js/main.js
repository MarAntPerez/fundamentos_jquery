$(document).ready(function () {
  //   // Selector por etiqueta
  //   $("p").css("color", "blue");
  //   $("p").css("font-size", "24px");
  //   // Selector por clase
  //   $(".mi-clase").html("Texto cambiado");
  //   // Selector por id
  //   $("#mi-id").css("font-weight", "bold");
  //   // Selector de descendencia
  //   $("ul li").css("list-style", "none");
  //   // Selector de descendencia especifico
  //   $("#contenedor span").css("border", "1px solid red");
  //   // Selector de primer elemento
  //   $("ul li:first").css("background-color", "#eee");
  //   // Selector de ultimo elemento
  //   $("ul li:last").css("background-color", "#ccc");
  //   // Selector elmento par o impar
  //   $("tr:even").css("background-color", "#f0f0f0");
  //   $("tr:odd").css("background-color", "#e0e0e0");

  ////////////////////////////////////////////////////
  // Eventos de Mouse
  // Evento click
  //   $("#btn-1").click(function () {
  //     alert("Boton clickeado!!!");
  //   });

  //   $("#btn-2").on("click", function () {
  //     alert("Boton clickeado!!");
  //   });

  //   $("#btn-1").click(function () {
  //     $(".para-1").hide();
  //   });

  //   $("#btn-2").click(function () {
  //     $(".para-1").show();
  //   });

  //   $("#btn-1").click(function () {
  //     $(".para-1").toggle();
  //   });

  //   $("#btn-1").on("mouseenter", function () {
  //     $(".para-1").toggle();
  //   });

  //   $("#btn-1").on("mouseleave", function () {
  //     $(".para-1").toggle();
  //   });

  //   $("#btn-1").hover(function () {
  //     $(".para-1").toggle();
  //   });

  //   $("#btn-1").dblclick(function () {
  //     $(".para-1").toggle();
  //   });

  //   $("#btn-1").mousemove(function () {
  //     $(".para-1").toggle();
  //   });

  //   $("#btn-1").mousedown(function () {
  //     $(".para-1").toggle();
  //   });

  //   $("#btn-1").mouseup(function () {
  //     $(".para-1").toggle();
  //   });

  //   $("#btn-1").click(function (event) {
  //     // console.log(event.currentTarget.id);
  //     // console.log(event.currentTarget.innerHTML);
  //     // console.log(event.currentTarget.outerHTML);
  //     // console.log(event.currentTarget.className);
  //     // alert(event.currentTarget.id);
  //     console.log("Coordenadas Y: " + event.clientY + " X: " + event.clientX);
  //   });

  $(document).click(function (event) {
    console.log("Coordenadas X: " + event.clientX + " Y: " + event.clientY);
  });
});
