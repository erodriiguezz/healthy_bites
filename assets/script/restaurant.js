$(document).ready(function() {
  //Zomato
  var zomatoKey = "bc6a01f25d2bf75572f717781b034f8c";

  //Click submit to search for city
  $("#submitBtn").one("click", function() {
    var getCity = $("#inputCity").val();
    $.ajax({
      url:
        "https://developers.zomato.com/api/v2.1/cities?user-key=" +
        zomatoKey +
        "&q=" +
        getCity +
        "&count=1",
      method: "GET",
      headers: {
        "user-key": zomatoKey
      }
    }).then(function(city) {
      console.log(city);
      var cities = city.location_suggestions;

      cities.forEach(function(location) {
        $(".zomato").html(
          $("<h2 class='location-name'>" + location.name + "</h2>").on(
            "click",
            function() {
              var cityId = location.id;
              City(cityId);
            }
          )
        );
      });
    });
    function City(city) {
      var qZomato = "healthy";
      // 1 = delivery / 5 = Takeaway / 6 = Cafes / 7 = Daily menus / 8 = breakfast / 9 = lunch / 10 = dinner / 13 = Pocket Friendly Delivery
      var categoryZomato = ["1", "5", "6", "7", "8", "9", "10", "11", "13"];
      var sortZomato = ["rating", "cost", "real_distance"];

      $.ajax({
        url:
          "https://developers.zomato.com/api/v2.1/search?user-key=" +
          zomatoKey +
          "&entity_id=" +
          city +
          "&entity_type=city&q=" +
          qZomato +
          "&count=10&category=" +
          categoryZomato[8] +
          "&sort=" +
          sortZomato[0],
        method: "GET",
        headers: {
          "user-key": zomatoKey
        }
      }).then(function(zomato) {
        console.log(zomato);
        var rName = zomato.restaurants;
        rName.forEach(function(obj) {
          var name = obj.restaurant.name;
          var time = obj.restaurant.timings;
          var cuisines = obj.restaurant.cuisines;
          var rating = obj.restaurant.user_rating.aggregate_rating;
          var address = obj.restaurant.location.address;
          $(".zomato").append(
            "<div class='restaurant-list'><h4 class='rName'>" +
              name +
              "</h4><ul><li class='rList'>Rating: " +
              rating +
              "</li><li class='rList'>Business Hours: " +
              time +
              "</li><li class='rList'>Cuisines: " +
              cuisines +
              "</li><li class='rList'>Address: " +
              address +
              "</li></div>"
          );
        });
      });
    }
  });
});
