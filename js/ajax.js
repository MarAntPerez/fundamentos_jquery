$(document).ready(function () {
  //   $("#resultado").load(
  //     "ajax_dos.html",
  //     function (testoRespuesta, textoEstado, xhr) {
  //       if (textoEstado == "sucess") {
  //         console.log("Carga correcta");
  //       } else if (textoEstado == "error") {
  //         console.log("Error en carga de archivo");
  //       }
  //     }
  //   );
  //   $.get("ajax_dos.html", function (datos) {
  //     $("#resultado").html(datos);
  //   });
  //   $.getJSON("../assets/tareas.json", function (datos) {
  //     $.each(datos, function (i, tarea) {
  //       $("ul#tareas").append("<li>" + tarea.title + "</li>");
  //     });
  //   });
  //   $.ajax({
  //     method: "GET",
  //     url: "https://jsonplaceholder.typicode.com/posts",
  //     dataType: "json",
  //   }).done(function (datos) {
  //     console.log(datos);
  //     $.map(datos, function (post, i) {
  //       $("#resultado").append(
  //         "<p>" +
  //           post.id +
  //           "</p>" +
  //           "<h3>" +
  //           post.title +
  //           "</h3>" +
  //           "<p>" +
  //           post.body +
  //           "</p>"
  //       );
  //     });
  //   });

  $("#postForm").submit(function (e) {
    e.preventDefault();

    var title = $("#title").val();
    var body = $("#body").val();
    var url = $(this).attr("action");

    $.post(url, { title: title, body: body }).done(function (datos) {
      console.log("Post guardado");
      console.log(datos);
    });
  });
});
