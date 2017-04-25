$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").append("<li>Hello!</li>");
    $("ul#webpage").append("<li>Why hello there!</li>");
    $("li").last().addClass("green");
    $('li').click(function() {
      $(this).remove();
    });

  });


  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $('li').click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $('li').click(function() {
      $(this).remove();
    });
  });
});
