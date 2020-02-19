$(document).ready(function() {
  var highPro = [
    "beef",
    "nuts",
    "fish",
    "tofu",
    "eggs",
    "grains",
    "chicken",
    "shrimp",
    "milk"
  ];

  $(highPro.slice(0, 5)).each(function(i, item) {
    $("#lcdiet").on("click", function() {
      var search = item;
      var apiKey = "941ba2d36d5029ddabc2f06718bb1611";
      var apiId = "8caae292";

      $("#list").empty();

      $.ajax({
        url:
          "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" +
          search +
          "&from=0&to=3&app_id=" +
          apiId +
          "&app_key=" +
          apiKey,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        /*console.log(response);
           $("#results").text(response.hits[0].recipe.url);
           $("img").attr("src", response.hits[1].recipe.image);
           console.log(response.hits[0].recipe.label);
           console.log(response.hits[0].recipe.ingredients);
           console.log(response.hits[0].recipe.dietLabels);
           console.log(response.hits[0].recipe.url);
           console.log(response.hits[0]);
           console.log(response.hits);*/

        var fra = response.hits;

        $(fra).each(function(i, item) {
          var t = item.recipe.image;

          $("#list").append(
            "<div class='col-4' style='display:inline-block;'><a target='_blank' href='" +
              item.recipe.url +
              "'><h5>" +
              item.recipe.label +
              "</h5></a><img src='" +
              t +
              "'style='width: 180px'><h6>" +
              item.recipe.healthLabels[0] +
              "</h6></div> "
          );
        });
      });
    });
  });
});
