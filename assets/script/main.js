// user input
// 1. cuisine
// 2. diet
// 3. intolerances
// 4. excludeIngredients

$(document).ready(function() {
  var apiKey = "8557eea839474a91b42ffff0d93d21d0";

  // default user input values
  var cuisine = "";
  var diet = "";
  var intolerances = "";
  var exclude = "";

  // update default user input values
  $(".cuisine").click(function() {
    cuisine = $(this).text();
    $(this).addClass("clicked");
    $(this)
      .siblings()
      .removeClass("clicked");
    $(this)
      .parent()
      .parent()
      .addClass("clicked");
  });

  $(".diet").click(function() {
    diet = $(this).text();
    $(this).addClass("clicked");
    $(this)
      .siblings()
      .removeClass("clicked");
    $(this)
      .parent()
      .parent()
      .addClass("clicked");
  });

  $(".intolerance").click(function() {
    intolerances = $(this).text();
    $(this).addClass("clicked");
    $(this)
      .siblings()
      .removeClass("clicked");
    $(this)
      .parent()
      .parent()
      .addClass("clicked");
  });

  // on search button click search recepies
  $(".submit").click(function() {
    $("#msform").hide(); // hide questionaire

    // spoonacular api url
    var queryURL =
      "https://api.spoonacular.com/recipes/search?apiKey=" +
      apiKey +
      "&cuisine=" +
      cuisine +
      "&diet=" +
      diet +
      "&intolerances=" +
      intolerances +
      "&number=5";
    // &excludeIngredients="+exclude+"

    if (cuisine && diet && intolerances) {
      $(".recipes").html(""); // erase all previous results

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(object) {
        var recipeList = object.results;

        recipeList.forEach(function(recipe, i) {
          var recipeId = recipe.id;

          getRecipeInformation(recipeId);
        });
      });
    } else {
      alert("Fill all inputs");
    }
  });

  function getRecipeInformation(id) {
    $.ajax({
      url:
        "https://api.spoonacular.com/recipes/" +
        id +
        "/information?apiKey=" +
        apiKey +
        "",
      method: "GET"
    }).then(function(object) {
      var recipeTitle = object.title;
      var recipeReadyTime = object.readyInMinutes;
      var recipeLink = object.sourceUrl;
      var recipeImage = object.image;

      var parent =
        '<div class="row align-items-center"><div class="col-lg-5 col-xl-4"><div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4"><img class="img-fluid" src=' +
        recipeImage +
        ' alt="Sample image"></div></div><div class="col-lg-7 col-xl-8"><h4 class= "mb-3" id="recipe-title" style="text-transform:capitalize;">' +
        recipeTitle +
        '</h4><p class="time-ready">Ready in ' +
        recipeReadyTime +
        "min</p><a target='_blank' href=" +
        recipeLink +
        ' class="btn btn-amber">Read more</a></div></div><hr class="my-5"></hr>';

      $(".recipes").append(parent);
    });
  }
});
