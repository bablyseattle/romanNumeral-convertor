var Converter = require('./../js/roman.js').converterModule

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var result;
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    var myConverter = new Converter("red");
    if(isNaN(numberInput)){
      result = "please enter a number";
    }else {
      result = myConverter.convertToRoman(numberInput);
    }
    $("#result").removeClass('hide');
    $(".result").text(result);
    $("input#number").val(" ");
  });
});
