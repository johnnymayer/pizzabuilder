//BACK END
function Pizza(inputtedSizeChoice, inputtedTopping1, inputtedTopping2) {
  this.size = inputtedSizeChoice;
  this.topping1 = inputtedTopping1;
  this.topping2 = inputtedTopping2;
}

Pizza.prototype.pizzaName = function() {
  return "Your pizza, a " + this.size + " " + this.topping1 + " with " + this.topping2 + " is ready. It will cost ";
};

Pizza.prototype.pizzaPrice = function() {
  var price = 0;
  if (this.size === "Small") {
    price = 10;
  } else if (this.size === "Large") {
    price = 15;
  } else {
    price = 30;
  }
  if (this.topping1 === "Cheese") {
    price = price + 1;
  } else if (this.topping1 === "Tomatoes" || this.topping1 === "Peppers" || this.topping1 === "Soyrizo") {
    price = price + 2;
  } else {
    price = price;
  }
  if (this.topping2 === "Cheese") {
    price = price + 1;
  } else if (this.topping2 === "Tomatoes" || this.topping2 === "Peppers" || this.topping2 === "Soyrizo") {
    price = price + 2;
  }
  return price + "!";
};

//UI
$(document).ready(function() {
  $("form#pizzaChoice").submit(function(event){
    event.preventDefault();

    var inputtedSizeChoice = $("#sizeChoice").val();
    var inputtedTopping1 = $("#topping1").val();
    var inputtedTopping2 = $("#topping2").val();


    var newPizza = new Pizza(inputtedSizeChoice, inputtedTopping1, inputtedTopping2);
    $("ul#pizzaInfo").empty();
    $("ul#pizzaInfo").append("<span class='pizzaTitle'>" + newPizza.pizzaName() + " $" + newPizza.pizzaPrice() + "<span>");
  });
});
