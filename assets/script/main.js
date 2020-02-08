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
  var getCity = "chicago";

  $.ajax({
    url: "https://developers.zomato.com/api/v2.1/cities?user-key="+zomatoKey+"&q="+getCity+"&count=1",
    method: "GET",
    headers: {
      "user-key": zomatoKey
    }
  }).then(function(city){
    console.log(city);
    var cities = city.location_suggestions;

    cities.forEach(function(location) {
      $(".choose-city")
        .html(
          $("<h2 class='location-name'>"+location.name+"</h2>")
            .on('click', function() {
              var cityId = location.id;
              City(cityId);
            })
        );
      
    });
  });
  function City(city){
    var qZomato = "healthy";
    // 1 = delivery / 5 = Takeaway / 6 = Cafes / 7 = Daily menus / 8 = breakfast / 9 = lunch / 10 = dinner / 13 = Pocket Friendly Delivery
    var categoryZomato = ["1", "5", "6", "7", "8", "9", "10", "11", "13"];
    var sortZomato = ["rating", "cost", "real_distance"];

    $.ajax({
      url: "https://developers.zomato.com/api/v2.1/search?user-key="+zomatoKey+"&entity_id="+city+"&entity_type=city&q="+qZomato+"&count=20&category="+categoryZomato[8]+"&sort="+sortZomato[0],
      method: "GET",
      headers: {
        "user-key": zomatoKey
      }
    }).then(function(zomato){
      console.log(zomato);
      var rName = zomato.restaurants
      rName.forEach(function(obj){
        var name = obj.restaurant.name;
        var time = obj.restaurant.timings;
        var cuisines = obj.restaurant.cuisines
        var address = obj.restaurant.location.address;
        $(".choose-city").append("<ul><h4>"+name+"</h4><li>Business Hours: "+time+"</li><li>Cuisines: "+cuisines+"</li><li>Address: "+address);
      });
    });
    };
});
