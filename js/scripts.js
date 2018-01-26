//BACK END
function Pizza(size, topping1, topping2) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
}

//UI
$(document).ready(function() {
  $("form#pizzaChoice").submit(function(event){
  event.preventDefault();
  var inputtedSizeChoice = $("input#sizeChoice").val();
  var inputtedTopping1 = $("input#topping1").val();
  var inputtedTopping2 = $("input#topping2").val();
  var pizzaResult = new Pizza (inputtedSizeChoice, inputtedTopping1, inputtedTopping2);
