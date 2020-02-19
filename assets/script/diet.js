var carbDiet = $(".goodCarbs");
var proDiet = $(".goodProtein");
var balDiet = $(".balanced");
var fatDiet = $(".goodFat");
var nutInfo = $(".nutValues");

$(".title").on("mouseenter", function() {
  $(".title").text("Becoming Healthier is your Choice");
});

$(".upperleft").on("click ", function() {
  carbDiet.animate({ width: "200px" });
  proDiet.animate({ width: "0px" });
  balDiet.animate({ width: "0px" });
  fatDiet.animate({ width: "0px" });

  $(".title").text("The Carb Way");
  $(".facts").text(
    " Carbs are the sugars, starches and fibers found in fruits, grains, vegetables and dairy."
  );
  $(".benefits").text("Health Impact");
  $(".dietbenefits").text("Energy  & Stamina ");
});

$(".upperleft").on("mouseenter", function() {
  $(".upperleft").attr("src", "./assets/images/1.png");
});
$(".upperleft").on("mouseleave", function() {
  $(".upperleft").attr("src", "./assets/images/UL.png");
});

$(".upperright").on("click ", function() {
  proDiet.animate({ width: "200px" });
  carbDiet.animate({ width: "0px" });

  balDiet.animate({ width: "0px" });
  fatDiet.animate({ width: "0px" });

  $(".title").text("Protein Based");
  $(".facts").text(
    "Proteins are one of the building blocks of body tissue and can also serve as a fuel source."
  );
  $(".benefits").text("Health Impact");
  $(".dietbenefits").text("Build muscle mass and tissue");
});

$(".upperright").on("mouseenter", function() {
  $(".upperright").attr("src", "./assets/images/2.png");
});
$(".upperright").on("mouseleave", function() {
  $(".upperright").attr("src", "./assets/images/ur.png");
});

$(".leftdown").on("click ", function() {
  balDiet.animate({ width: "200px" });
  carbDiet.animate({ width: "0px" });
  proDiet.animate({ width: "0px" });
  fatDiet.animate({ width: "0px" });

  $(".title").text("Balanced Route");
  $(".facts").text(
    "Provides the essential nutrition for a healthy nutritional equilibrium."
  );
  $(".benefits").text("Health Impact");
  $(".dietbenefits").text("Improve Health");
});

$(".leftdown").on("mouseenter", function() {
  $(".leftdown").attr("src", "./assets/images/3.png");
});
$(".leftdown").on("mouseleave", function() {
  $(".leftdown").attr("src", "./assets/images/BL.png");
});

$(".rightdown").on("click ", function() {
  fatDiet.animate({ width: "200px" });
  balDiet.animate({ width: "0px" });
  carbDiet.animate({ width: "0px" });
  proDiet.animate({ width: "0px" });

  $(".title").text("The Fat Tactic");
  $(".facts").text(
    "Fats are one of the three main macronutrients, along with carbohydrates and proteins."
  );
  $(".benefits").text("Health Impact");
  $(".dietbenefits").text("Gain or lose weight");
});

$(".rightdown").on("mouseenter", function() {
  $(".rightdown").attr("src", "./assets/images/4.png");
});

$(".rightdown").on("mouseleave", function() {
  $(".rightdown").attr("src", "./assets/images/BR.png");
});
