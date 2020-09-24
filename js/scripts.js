$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    const name = $("input#name").val();
    const development = $("input:radio[name=development]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    const build = $("input:radio[name=build]:checked").val();
    const work = $("input:radio[name=work]:checked").val();
    const helloworld = $("input:radio[name=helloworld]:checked").val();

    if (development === "backend" && color === "red" && build === "web" && work === "github" && helloworld === "rubee") {
      $("#csharp, #javascript, #python, #newbie").hide();
      $(".name").text(name);
      $("#ruby").show();
      $(".clickable").click(function() {
        $("#showing").toggle();
        $("#hidden").toggle();
      });
    } else if (development === "backend" && color === "purple" && build === "games" && work === "microsoft" && helloworld === "seesharp") {
      $("#ruby, #javascript, #python, #newbie").hide();
      $(".name").text(name);
      $("#csharp").show();
      $(".c-click").click(function() {
        $("#c-showing").toggle();
        $("#c-hidden").toggle();
      });
    } else if (development === "frontend" && color === "yellow" && build === "fun" && work === "netflix" && helloworld === "jscript") {
      $("#ruby, #csharp, #python, #newbie").hide();
      $(".name").text(name);
      $("#javascript").show();
      $(".j-click").click(function() {
        $("#j-showing").toggle();
        $("#j-hidden").toggle();
      });
    } else if (development === "backend" && color === "yellowblue" && build === "web" && work === "google" && helloworld === "snake") {
      $("#ruby, #csharp, #javascript, #newbie").hide();
      $(".name").text(name);
      $("#python").show();
      $(".p-click").click(function() {
        $("#p-showing").toggle();
        $("#p-hidden").toggle();
      });
    } else {
      $("#ruby, #csharp, #javascript, #python").hide();
      $(".name").text(name);
      $("#newbie").show();
      $(".h-click").click(function() {
        $("#h-showing").toggle();
        $("#h-hidden").toggle();
      });
    }
  });
});