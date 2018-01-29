//BACK END
function Pizza(inputtedSizeChoice, inputtedTopping1, inputtedTopping2) {
  this.size = inputtedSizeChoice;
  this.topping1 = inputtedTopping1;
  this.topping2 = inputtedTopping2;
}

Pizza.prototype.pizzaName = function() {
  return "Your pizza : " + this.size + ", with " + this.topping1 + ", and " + this.topping2 + " is ready.";
};

var pizzaPrice = function(inputtedSizeChoice, inputtedTopping1, inputtedTopping2) {
  var price = 0;
  if (inputtedSizeChoice === "Small") {
    price = price + 1;
  } else if (inputtedSizeChoice === "Large") {
    price = price + 2;
  } else {
    price = price + 3;
  }
  if (inputtedTopping1 === "Cheese") {
    price = price + 1;
  } else if (inputtedTopping1 === "Tomatoes" || inputtedTopping1 === "Peppers" || inputtedTopping1 === "Soyrizo") {
    price = price + 2;
  } else {
    price = price + 3;
  }
  if (inputtedTopping2 === "Cheese") {
    price = price + 1;
  } else if (inputtedTopping1 === "Tomatoes" || inputtedTopping1 === "Peppers" || inputtedTopping1 === "Soyrizo") {
    price = price + 2;
  } else {
    price = price + 3;
  }
  return price;
};

var determinePrice = function(price) {
 if (price <= 4) {
   $("#price10").text($("ul#pizzaInfo").append("<li><span class='price'>$10</span></li>"));
 } else if (price > 5 && price < 6 ) {
   $("#price20").text($("ul#pizzaInfo").append("<li><span class='price'>$20</span></li>"));
 } else {
   $("#price30").text($("ul#pizzaInfo").append("<li><span class='price'>$50</span></li>"));
 }
};

//UI
$(document).ready(function() {
  $("form#pizzaChoice").submit(function(event){
    event.preventDefault();

    var inputtedSizeChoice = $("#sizeChoice").val();
    var inputtedTopping1 = $("#topping1").val();
    var inputtedTopping2 = $("#topping2").val();

    var newPizza = new Pizza(inputtedSizeChoice, inputtedTopping1, inputtedTopping2);

    var pizzaInfo = "Your pizza a: " + this.size + ", with " + this.topping1 + ", and " + this.topping2 + " is ready.";

    var priceDetail = pizzaPrice(inputtedSizeChoice, inputtedTopping1, inputtedTopping2);

    $("ul#pizzaInfo").append("<span class='pizzaTitle'>" + newPizza.pizzaName() + "<span>");
    determinePrice(pizzaPrice);
  });
});
