// var numberToRoman = function(number) {
//   if(isNaN(number)){
//     return "please enter a number";
//   }
//   else if(number == 1){
//     return "I";
//   }
//   else if (number == 2) {
//       return
//   }
//
// }

//business Logic
var romanConverter = function (number){
  var romanList ={M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  var roman='';
  for(i in romanList){
    while(number >= romanList[i] ){
      roman += i;
      number -= romanList[i]
    }

  }
  return roman;
}

// User Interface Logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var result;
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    if(isNaN(numberInput)){
      result = "please enter a number";
    }else {
      result = romanConverter(numberInput);
    }
    $("#result").removeClass('hide');
    $(".result").text(result);
    $("input#number").val(" ");
  });
});
