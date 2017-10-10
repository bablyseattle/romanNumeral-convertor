(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
}
exports.converterModule = Converter;

},{}],2:[function(require,module,exports){
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

},{"./../js/roman.js":1}]},{},[2]);
