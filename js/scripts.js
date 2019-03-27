$(document).ready(function() {
  $("#survey").submit(function(event) {
    var nameInput=$("input#name").val();
    var favoriteFoodInput = $("#favoriteFood").val();
    var musicInput=$("input:radio[name=music]:checked").val();

    $(".name").append(nameInput);
    $(".favoriteFood").append(favoriteFoodInput);
    $(".music").append(musicInput);

    $("#surveyData").show();

    event.preventDefault();
  });
});
