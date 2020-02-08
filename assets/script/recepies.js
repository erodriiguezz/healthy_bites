$(document).ready(function() {

  var cuisineChoices = ["italian"];

  var apiKey = "8544414fb5dc4affa404017b0544e7f8";

  cuisineChoices.forEach(function(cuisine) {
    var queryURL = "https://api.spoonacular.com/recipes/search?apiKey="+apiKey+"&cuisine="+cuisine+"&number=5";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(object) {
      var recepies = object.results;
      recepies.forEach(function(recipe) {
        var recepieId = recipe.id;
        console.log(recipe);

        getRecepieInformation(recepieId);
      })
    })
  })


  function getRecepieInformation(id) {
    $.ajax({
      url:
        "https://api.spoonacular.com/recipes/"+id+"/information?apiKey="+apiKey+"",
      method: "GET"
    }).then(function(object) {
      var recepieTitle = object.title;
      var recepieReadyTime = object.readyInMinutes;
      var recepieLink = object.sourceUrl;

      $(".recepies").append("<h1>"+recepieTitle+"</h1><h3>Ready in "+recepieReadyTime+" minutes.</h3><a href='"+recepieLink+"' target='_blank'>"+recepieLink+"</a>")
    });
  }
});
