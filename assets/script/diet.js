var carbDiet = $(".goodCarbs");
var proDiet = $(".goodProtein");
var balDiet = $(".balanced");
var fatDiet = $(".goodFat");
var nutInfo = $(".nutValues");

$(".upperleft").on("click ", function() {
  carbDiet.animate({ width: "300px" });
  proDiet.animate({ width: "0px" });
  balDiet.animate({ width: "0px" });
  fatDiet.animate({ width: "0px" });

  $(".title").text("The Carb Way");
  $(".facts").text(
    " Carbs are the sugars, starches and fibers found in fruits, grains, vegetables and dairy."
  );
  $(".benefits").text("Health Impact");
  $(".dietbenefits").text("Energy  & Stamina ");
  $(".ouroptions").text("Our Recepies Selections");
  $(".typeone").text("High Carbs");
  $(".typetwo").text("Low Carbs");
});

$(".upperleft").on("mouseenter", function() {
  $(".upperleft").attr("src", "./assets/images/1.png");
});
$(".upperleft").on("mouseleave", function() {
  $(".upperleft").attr("src", "./assets/images/UL.png");
});

$(".upperright").on("click ", function() {
  proDiet.animate({ width: "300px" });
  carbDiet.animate({ width: "0px" });

  balDiet.animate({ width: "0px" });
  fatDiet.animate({ width: "0px" });

  $(".title").text("Protein Based");
  $(".facts").text(
    "Proteins are one of the building blocks of body tissue and can also serve as a fuel source."
  );
  $(".benefits").text("Health Impact");
  $(".dietbenefits").text("Build muscle mass and tissue");
  $(".ouroptions").text("Our Recepies Selections");
  $(".typeone").text("High Protein");
  $(".typetwo").text("Low Protein");
});

$(".upperright").on("mouseenter", function() {
  $(".upperright").attr("src", "./assets/images/2.png");
});
$(".upperright").on("mouseleave", function() {
  $(".upperright").attr("src", "./assets/images/ur.png");
});

$(".leftdown").on("click ", function() {
  balDiet.animate({ width: "300px" });
  carbDiet.animate({ width: "0px" });
  proDiet.animate({ width: "0px" });
  fatDiet.animate({ width: "0px" });

  $(".title").text("Balanced Route");
  $(".facts").text(
    "Provides the essential nutrition for a healthy nutritional equilibrium."
  );
  $(".benefits").text("Health Impact");
  $(".dietbenefits").text("Improve Health");
  $(".ouroptions").text("Our Recepies Selections");
  $(".typeone").text("Balanced Alternative");
});

$(".leftdown").on("mouseenter", function() {
  $(".leftdown").attr("src", "./assets/images/3.png");
});
$(".leftdown").on("mouseleave", function() {
  $(".leftdown").attr("src", "./assets/images/BL.png");
});

$(".rightdown").on("click ", function() {
  fatDiet.animate({ width: "300px" });
  balDiet.animate({ width: "0px" });
  carbDiet.animate({ width: "0px" });
  proDiet.animate({ width: "0px" });

  $(".title").text("Fat Diet");
  $(".facts").text(
    "Fats are one of the three main macronutrients, along with carbohydrates and proteins."
  );
  $(".benefits").text("Health Impact");
  $(".dietbenefits").text("Gain or lose weight");
  $(".ouroptions").text("Our Recepies Selections");
  $(".typeone").text("High Fat");
  $(".typetwo").text("Low Fat");
});

$(".rightdown").on("mouseenter", function() {
  $(".rightdown").attr("src", "./assets/images/4.png");
});

$(".rightdown").on("mouseleave", function() {
  $(".rightdown").attr("src", "./assets/images/BR.png");
});
