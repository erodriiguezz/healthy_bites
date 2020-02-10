var carbDiet = $(".goodCarbs");
var proDiet = $(".goodProtein");
var balDiet = $(".balanced");
var fatDiet = $(".goodFat");
var nutInfo = $(".nutValues");

$(".upperleft").on("mouseenter ", function() {
  carbDiet.animate({ height: "300px" });
  proDiet.animate({ height: "0px" });
  balDiet.animate({ height: "0px" });
  fatDiet.animate({ height: "0px" });
  nutInfo.animate({ opacity: "1" });
});

$(".upperleft").on("click ", function() {
  carbDiet.animate({ height: "400px" });
});

$(".upperright").on("mouseenter ", function() {
  proDiet.animate({ height: "300px" });
  carbDiet.animate({ height: "0" });
  fatDiet.animate({ height: "0px" });
  balDiet.animate({ height: "0" });
  $(".title").replaceWith("<h4>Protein Based</h4>");
  $(".facts").replaceWith(
    "<p>Proteins are essential nutrients for the human body. They are one of the building blocks of body tissue and can also serve as a fuel source.</p>"
  );
  $(".dietbenefits").replaceWith("<h4>Build muscle mass and tissue</h4>");
  $(".typeone").replaceWith("<p>High Protein</p>");
  $(".typetwo").replaceWith("<p>Low Protein</p>");
});

$(".upperright").on("click ", function() {
  proDiet.animate({ height: "400px" });
});

$(".leftdown").on("mouseenter ", function() {
  proDiet.animate({ height: "0" });
  carbDiet.animate({ height: "0" });
  fatDiet.animate({ height: "0px" });
  balDiet.animate({ height: "300px" });
  $(".title").replaceWith("<h4>Balanced Route</h4>");
  $(".facts").replaceWith(
    "<p>A healthy diet is a diet that helps to maintain or improve overall health. Provides the body with essential nutrition: fluid, macronutrients, micronutrients, and adequate calories.</p>"
  );
  $(".dietbenefits").replaceWith("<h4>Improves Health</h4>");
  $(".typeone").replaceWith("<p>Balanced Alternatives</p>");
});

$(".leftdown").on("click ", function() {
  balDiet.animate({ height: "400px" });
});

$(".rightdown").on("mouseenter ", function() {
  proDiet.animate({ height: "0" });
  carbDiet.animate({ height: "0" });
  balDiet.animate({ height: "0px" });
  fatDiet.animate({ height: "300px" });
  $(".title").replaceWith("<h4>Fat Diet</h4>");
  $(".facts").replaceWith(
    "<p>Fats are one of the three main macronutrients, along with carbohydrates and proteins.</p>"
  );
  $(".dietbenefits").replaceWith("<h4>Gain or lose weight</h4>");
  $(".typeone").replaceWith("<p>High Fat</p>");
  $(".typetwo").replaceWith("<p>Low Fat</p>");
});

$(".rightdown").on("click ", function() {
  fatDiet.animate({ height: "400px" });
});
