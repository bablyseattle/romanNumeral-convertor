var Converter = require('./../js/roman.js').converterModule

describe('Converter', function(){
  it('should test whether Convertor returns roman numeral', function() {
    var myConverter = new Converter("red")
    expect(myConverter.convertToRoman(50)).toEqual("L")
  });
  it("doesn't return anything for 0", function(){
    var myConverter = new Converter("blue")
    expect(myConverter.convertToRoman(0)).toEqual("")
  });
});
