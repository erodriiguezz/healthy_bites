$(document).ready(function() {
  // //Spoonacular
  // var cuisineChoices = ["italian"];
  // var apiKey = "e81687065e9f4a2fbbd8244edf86bffd";
  // cuisineChoices.forEach(function(cuisine) {
  //   var queryURL = "https://api.spoonacular.com/recipes/search?apiKey="+apiKey+"&cuisine="+cuisine+"&number=5";
  //   $.ajax({
  //     url: queryURL,
  //     method: 'GET'
  //   }).then(function(object) {
  //     var recipes = object.results;
  //     recipes.forEach(function(recipe) {
  //       var recipeId = recipe.id;
  //       getRecipeInformation(recipeId);
  //     })
  //   })
  // })
  // function getRecipeInformation(id) {
  //   $.ajax({
  //     url:
  //       "https://api.spoonacular.com/recipes/"+id+"/information?apiKey="+apiKey+"",
  //     method: "GET"
  //   }).then(function(object) {
  //     var recipeTitle = object.title;
  //     var recipeReadyTime = object.readyInMinutes;
  //     var recipeLink = object.sourceUrl;
  //     $(".recipes").append("<h1>"+recipeTitle+"</h1><h3>Ready in "+recipeReadyTime+" minutes.</h3><a href='"+recipeLink+"' target='_blank'>"+recipeLink+"</a>")
  //   });
  // }
  //Moved Zomato code to another file B)
});
