
var numberToRoman = function(number) {
  if(number >= 1000){
    return "M" + numberToRoman(number - 1000);
  }
  else if(number >= 900){
    return "CM" + numberToRoman(number - 900);
  }
  else if(number >= 500){
    return "D" + numberToRoman(number - 500);
  }
  else if(number >= 400){
    return "CD" + numberToRoman(number - 400);
  }
  else if(number >= 100){
    return "C" + numberToRoman(number - 100);
  }
  else if(number >= 90){
    return "XC" + numberToRoman(number - 90);
  }
  else if(number >= 50){
    return "L" + numberToRoman(number - 50);
  }
  else if(number >= 40){
    return "XL" + numberToRoman(number - 40);
  }
  else if(number >= 10){
    return "X" + numberToRoman(number - 10);
  }
  else if(number >= 5){
    return "V" + numberToRoman(number - 5);
  }
  else if(number >= 4){
    return "IV" + numberToRoman(number - 4);
  }
  else if(number >= 1){
    return "I" + numberToRoman(number - 1);
  }
  else {
    return "";
  }
}
//business Logic
// var romanConverter = function (number){
//   var romanList ={M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
//   var roman='';
//   for(i in romanList){
//     while(number >= romanList[i] ){
//       roman += i;
//       number -= romanList[i]
//     }
//
//   }
//   return roman;
// }

// User Interface Logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var result;
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    if(isNaN(numberInput)){
      result = "please enter a number";
    }else {
      result = numberToRoman(numberInput);
    }
    $("#result").removeClass('hide');
    $(".result").text(result);
    $("input#number").val(" ");
  });
});
