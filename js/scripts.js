$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    event.preventDefault();

    const name = $("input#name").val();
    const development = parseInt($("input:radio[name=development]:checked").val());
    const color = parseInt($("input:radio[name=color]:checked").val());
    const build = parseInt($("input:radio[name=build]:checked").val());
    const work = parseInt($("input:radio[name=work]:checked").val());
    const music = parseInt($("input:radio[name=music]:checked").val());
    const food = parseInt($("input:radio[name=food]:checked").val());
    const film = parseInt($("input:radio[name=film]:checked").val());
    const activity = parseInt($("input:radio[name=activity]:checked").val());
    const location = parseInt($("input:radio[name=location]:checked").val());
    const why = parseInt($("input:radio[name=why]:checked").val());
    const result =  development + color + build + work + music + food + film + activity + location + why;

    if (result >= 300) {
      $("#csharp").show();
      $("#ruby, #javascript, #python, #newbie").hide();
      $(".name").text(name);
      $(".c-click").click(function () {
        $("#c-showing").slideToggle();
      });
    } else if (result >= 200) {
      $("#ruby").show();
      $("#csharp, #javascript, #python, #newbie").hide();
      $(".name").text(name);
      $(".clickable").click(function () {
        $("#showing").slideToggle();
      });
    } else if (result >= 100) {
      $("#python").show();
      $("#ruby, #csharp, #javascript, #newbie").hide();
      $(".name").text(name);
      $(".p-click").click(function () {
        $("#p-showing").slideToggle();
      });
    } else if (result >= 35) {
      $("#javascript").show();
      $("#ruby, #csharp, #python, #newbie").hide();
      $(".name").text(name);
      $(".j-click").click(function () {
        $("#j-showing").slideToggle();
      });
    } else {
      $("#newbie").show();
      $("#ruby, #csharp, #javascript, #python").hide();
      $(".name").text(name);
      $(".h-click").click(function () {
        $("#h-showing").slideToggle();
      });
    }
  });
});
