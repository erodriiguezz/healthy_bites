var search = "";
var apiKey = "941ba2d36d5029ddabc2f06718bb1611";
var apiId = "8caae292";

$.ajax({
  url:
    "https://api.edamam.com/search?q=" +
    search +
    "&app_id=" +
    apiId +
    "&app_key=" +
    apiKey,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

