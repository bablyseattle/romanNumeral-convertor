function Converter(skinName){
  this.skin = skinName;
}


Converter.prototype.convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';
  for(var i = 0; i < decimalValue.length; i++){
    while (num >= decimalValue[i]) {
       romanized = romanized + romanNumeral[i];
       num = num - decimalValue[i];
    }
  }
  return romanized;
};
exports.converterModule = Converter;
