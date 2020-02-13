$(document).ready(function() {
  var queryURL =
    "https://api.edamam.com/api/nutrition-data?app_id=007bb6b0&app_key=b566599d5cf04d16d9d444bef870794f&ingr=tomato";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(object) {
    console.log(object);
  });
});
