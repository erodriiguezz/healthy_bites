var carbDiet = $(".goodCarbs");
var proDiet = $(".goodProtein");
var balDiet = $(".balanced");
var fatDiet = $(".goodFat");
var nutInfo = $(".nutValues");

$(".upperleft").on("click ", function() {
  carbDiet.animate({ height: "400px" });
  proDiet.animate({ height: "0px" });
  balDiet.animate({ height: "0px" });
  fatDiet.animate({ height: "0px" });

  $(".title").text("The Carb Way");
  $(".facts").text(
    "Proteins are essential nutrients for the human body. They are one of the building blocks of body tissue and can also serve as a fuel source."
  );
  $(".benefits").text("Health Impact");
  $(".dietbenefits").text("Energy  & Stamina ");
  $(".ouroptions").text("Our Recepies Selections");
  $(".typeone").text("High Carbs");
  $(".typetwo").text("Low Carbs");
});

$(".upperright").on("click ", function() {
  proDiet.animate({ height: "400px" });
  carbDiet.animate({ height: "0px" });

  balDiet.animate({ height: "0px" });
  fatDiet.animate({ height: "0px" });

  $(".title").text("Protein Based");
  $(".facts").text(
    "Proteins are essential nutrients for the human body. They are one of the building blocks of body tissue and can also serve as a fuel source."
  );
  $(".benefits").text("Health Impact");
  $(".dietbenefits").text("Build muscle mass and tissue");
  $(".ouroptions").text("Our Recepies Selections");
  $(".typeone").text("High Protein");
  $(".typetwo").text("Low Protein");
});

$(".leftdown").on("click ", function() {
  balDiet.animate({ height: "400px" });
  carbDiet.animate({ height: "0px" });
  proDiet.animate({ height: "0px" });
  fatDiet.animate({ height: "0px" });

  $(".title").text("Balanced Route");
  $(".facts").text(
    "A healthy diet is a diet that helps to maintain or improve overall health. Provides the body with essential nutrition: fluid, macronutrients, micronutrients, and adequate calories."
  );
  $(".benefits").text("Health Impact");
  $(".dietbenefits").text("Improve Health");
  $(".ouroptions").text("Our Recepies Selections");
  $(".typeone").text("Balanced Alternative");
});

$(".rightdown").on("click ", function() {
  fatDiet.animate({ height: "400px" });
  balDiet.animate({ height: "0px" });
  carbDiet.animate({ height: "0px" });
  proDiet.animate({ height: "0px" });

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
