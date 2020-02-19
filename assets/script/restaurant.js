$(document).ready(function() {
  //Zomato
  var zomatoKey = "bc6a01f25d2bf75572f717781b034f8c";

  //Click submit to search for city
  $("#submitBtn").on("click", function() {
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
      var cities = city.location_suggestions;

      cities.forEach(function(location) {
        $(".zomato").html(
          $(
            "<h5 class='choose-location'>Click on your location</h5><br><h2 class='location-name'>" +
              location.name +
              "</h2>"
          ).on("click", function() {
            var cityId = location.id;
            City(cityId);
          })
        );
      });
    });
    function City(city) {
      // 1 = delivery / 5 = Takeaway / 6 = Cafes / 7 = Daily menus / 8 = breakfast / 9 = lunch / 10 = dinner / 13 = Pocket Friendly Delivery
      var categoryZomato = ["1", "5", "6", "7", "8", "9", "10", "11", "13"];
      var sortZomato = ["rating", "cost", "real_distance"];

      $(".zomato").html(
        "<div class='dietTypes'><h4>Choose a diet type</h4><div class='inputDiets'>" +
          "<label for='vegan'>Vegan<input class='querySearch' id='vegan' type='radio' name='diet' value='vegan' /></label>" +
          "<label for='vegetarian'>Vegetarian<input class='querySearch' id='vegetarian' type='radio' name='diet' value='Vegetarian' /></label> " +
          "<label for='glutenFree'>Gluten Free<input class='querySearch' id='glutenFree' type='radio' name='diet' value='gluten-free' /></label> " +
          "<label for='alcoholFree'>Alcohol Free<input class='querySearch' id='alcoholFree' type='radio' name='diet' value='alcohol-free' /></label> " +
          "<label for='dairyFree'>Dairy Free<input class='querySearch' id='dairyFree' type='radio' name='diet' value='dairy-free' /></label><br>" +
          "<button type='submit' class='btn btn-dark' id='querySubmit'>Submit</button><button type='submit' class='btn btn-dark' id='startOver'>Start Over</button></div></div><div class='restaurants'></div>"
      );
      $("#startOver").on("click", function() {
        location.reload(true);
      });
      $("#querySubmit").on("click", function() {
        var qZomato = $("input:checked").val();
        $(".restaurants").empty();

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
            var url = obj.restaurant.url;
            $(".restaurants").append(
              "<div class='restaurant-list'><a href='" +
                url +
                "' target='_blank' alt='Review page'><h4 class='rName'>" +
                name +
                "</h4></a><ul><li class='rList'>Rating: " +
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
      });
    }
  });
});
