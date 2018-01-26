//BACK END
function Pizza(size, topping1, topping2) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
}

Pizza.prototype.pizzaName = function() {
  return "Your pizza a: " + this.size + ", with " + this.topping1 + ", and " + this.topping2 + " is ready.";
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
  } else if (inputtedTopping1 === "Tomatoes" || "Peppers" || "Soyrizo") {
    price = price + 2;
  } else {
    price = price + 3;
  }
  if (inputtedTopping2 === "Cheese") {
    price = price + 1;
  } else if (inputtedTopping2 === "Tomatoes" || "Peppers" || "Soyrizo") {
    price = price + 2;
  } else {
    price = price + 3;
  }
  return price;
};

var determinePrice = function(pizzaPrice) {
 if (price <= 3) {
   $("#price10").text($("ul#pizzaInfo").append("<li><span class='price'>$10</span></li>"));
 } else if (price > 4 && price < 7 ) {
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
    $("ul#pizzaInfo").append("<span class='pizzaTitle'>" + newPizza.pizzaName() + "<span>");
    var price = pizzaPrice(inputtedSizeChoice, inputtedTopping1, inputtedTopping2);

    console.log(price);
    determinePrice(pizzaPrice);
  });
});
