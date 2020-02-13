$(document).ready(function() {
  $.ajax({
    url: "",
    method: "GET"
  }).then(function(object) {
    console.log(object);
  });
});
