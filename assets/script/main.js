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
  //     var recepies = object.results;
  //     recepies.forEach(function(recepie) {
  //       var recepieId = recepie.id;

  //       getRecepieInformation(recepieId);
  //     })
  //   })
  // })


  // function getRecepieInformation(id) {
  //   $.ajax({
  //     url:
  //       "https://api.spoonacular.com/recipes/"+id+"/information?apiKey="+apiKey+"",
  //     method: "GET"
  //   }).then(function(object) {
  //     var recepieTitle = object.title;
  //     var recepieReadyTime = object.readyInMinutes;
  //     var recepieLink = object.sourceUrl;

  //     $(".recepies").append("<h1>"+recepieTitle+"</h1><h3>Ready in "+recepieReadyTime+" minutes.</h3><a href='"+recepieLink+"' target='_blank'>"+recepieLink+"</a>")
  //   });
  // }

  //Zomato
  var zomatoKey = "bc6a01f25d2bf75572f717781b034f8c";
  var getCity = "miami";

  $.ajax({
    url: "",
    method: "GET",
    headers: {
      "user-key": zomatoKey
    }
  }).then(function(zomato){

  });









  // $.ajax({
  //   url: "https://developers.zomato.com/api/v2.1/cities?user-key="+zomatoKey+"&q="+getCity,
  //   method: "GET",
  //   headers: {
  //     "user-key": zomatoKey
  //   }
  // }).then(function(city){
  //   console.log(city);
  //   var cities = city.location_suggestions;

  //   cities.forEach(function(location) {
  //     $(".choose-city")
  //       .append(
  //         $("<h3>"+location.name+"</h3>")
  //           .on('click', function() {
  //             var cityId = location.id;
  //             cuisineCity(cityId);
  //           })
  //       );
      
  //   });
  // });
  // function cuisineCity(cuisineList){
  //   $.ajax({
  //     url: "https://developers.zomato.com/api/v2.1/cuisines?user-key="+zomatoKey+"&city_id="+cuisineList,
  //     method: "GET",
  //     headers: {
  //       "user-key": zomatoKey
  //     }
  //   }).then(function(cuisines) {
  //     console.log(cuisines)
      
  //   });
  // };
});
