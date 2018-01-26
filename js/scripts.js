//BACK END
function Pizza(size, topping1, topping2) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
}

Pizza.prototype.pizzaName = function() {
  return "Your pizza a: " + this.size + ", with " + this.topping1 + ", and " + this.topping2 + " is ready.";
};

var pricePizza = function(inputtedSizeChoice, inputtedTopping1, inputtedTopping2) {
  var price = 5;
  var priceToppings = 0;
  if (inputtedSizeChoice === "5") {
    priceToppings = priceToppings + 5;
  } else if (inputtedSizeChoice === "6") {
    priceToppings = priceToppings + 6;
  } else {
    priceToppings = priceToppings + 12;
  }
  if (inputtedTopping1 === "4") {
    priceToppings = priceToppings + 1;
  } else if (inputtedTopping1 === "5"){
    priceToppings = priceToppings + 2;
  } else {
    priceToppings = priceToppings + 6;
  }
  if (inputtedTopping2 === "4") {
    priceToppings = priceToppings + 1;
  } else if (inputtedTopping2 === "5"){
    priceToppings = priceToppings + 2;
  } else {
    priceToppings = priceToppings + 6;
  }
  return "It will cost $" + price + priceToppings;
};

//UI
$(document).ready(function() {
  $("form#pizzaChoice").submit(function(event) {
      event.preventDefault();
      var inputtedSizeChoice = $("input#sizeChoice").val();
      var inputtedTopping1 = $("input#topping1").val();
      var inputtedTopping2 = $("input#topping2").val();
      var newPizza = new Pizza(inputtedSizeChoice, inputtedTopping1, inputtedTopping2);
      $("ul#pizzaInfo").append("<span class='pizzaTitle'>" + newPizza.pizzaName() + "<span>");
    });
  });
