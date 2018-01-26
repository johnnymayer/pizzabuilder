//BACK END
function Pizza(size, topping1, topping2) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
}

Pizza.prototype.pizzaName = function () {
  return "Your pizza: " + this.size + ", " + this.topping1 + ", " + this.topping2 + " is ready.";
};

var pricePizza = function(inputtedSizeChoice, inputtedTopping1, inputtedTopping2) {
  var price = 4.99;
  if (inputtedSizeChoice === "5") {
    price = price + 5;
  } else if (inputtedSizeChoice === "6") {
    price = price + 6;
  } else {
    price = price + 12;
  }
  if (inputtedTopping1 === "1") {
    price = price + 1;
  } else {
    price = price + 2;
  }
  if (inputtedTopping2 === "1") {
    price = price + 1;
  } else {
    price = price + 2;
  }
  return price;
};

//UI
$(document).ready(function() {
  $("form#pizzaChoice").submit(function(event) {
      event.preventDefault();
      var inputtedSizeChoice = $("input#sizeChoice").val();
      var inputtedTopping1 = $("input#topping1").val();
      var inputtedTopping2 = $("input#topping2").val();
      var newPizza = new Pizza(inputtedSizeChoice, inputtedTopping1, inputtedTopping2);
    });
  });
