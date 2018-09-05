function type1() {
  deletezero();
  hideR();
  $('#numbers').append('1');
}
function type2() {
  deletezero();
  hideR();
  $('#numbers').append('2');
}
function type3() {
  deletezero();
  hideR();
  $('#numbers').append('3');
}
function type4() {
  deletezero();
  hideR();
  $('#numbers').append('4');
}
function type5() {
  deletezero();
  hideR();
  $('#numbers').append('5');
}
function type6() {
  deletezero();
  hideR();
  $('#numbers').append('6');
}
function type7() {
  deletezero();
  hideR();
  $('#numbers').append('7');
}
function type8() {
  deletezero();
  hideR();
  $('#numbers').append('8');
}
function type9() {
  deletezero();
  hideR();
  $('#numbers').append('9');
}
function type0() {
  hideR();
  $('#numbers').append('0');
}
function plus() {
  hidesymbols();
  $('#numbers').append('+');
  limitOper();
}
function less() {
  hidesymbols();
  $('#numbers').append('-');
}
function times() {
  hidesymbols();
  $('#numbers').append('*');
  limitOper();
}
function divided() {
   hidesymbols();
  $('#numbers').append('/');
  limitOper();
}
function typedot() {
  $('#numbers').append('.');
  limitDot();
  limitOper();
}
function ac() {
  hideR();
  $('#numbers').empty();
  $('#numbers').append('0');
}
function ce ()
{
    hideR();
    $('#numbers').text(function (_,txt) {
    return txt.slice(0, -1);
});
  var lastcha = $('#numbers').text();
  if (lastcha.length === 0) {
    $('#numbers').append('0');
  }
}

function calculate(){
  var result1 = $('#numbers').html();
  var invalid = result1.split("");
  function calc(fn) {
  return new Function('return ' + fn)();
}

var result =  calc(result1);
  
  $('#numbers').empty();
  $('#result').removeClass( "displayR" );
  $('#numbers').addClass( "displayR" );
  $('#result').append(result);
}

function deletezero (){
  var zero = $('#numbers').text();
  if (zero.length === 1 && zero.charCodeAt(0)  === 48){
    $('#numbers').empty();
  }
  if (zero.length >= 17) {
    $("#numbers").html('<p>Digit Limit Met<p>');
  }
}

function hideR () {
  $('#result').addClass( "displayR" );
  $('#numbers').removeClass( "displayR" );
  $('#result').empty();
}

function hidesymbols () {
  var symbols = $('#numbers').text();
  if (symbols.length === 1 && symbols.charCodeAt(0)  === 48){
    return "/*+-.".indexOf(String.fromCharCode(e.which)) < 0;
  }
}
function limitOper() {
  var digits = $('#numbers').html();
  var redig = /([*-.'/'])\1{1,}/;
  if (redig.exec(digits)){
    $('#numbers').text(function (_,txt) {
    return txt.slice(0, -1);
});}}


function limitDot() {
  var dot = $('#numbers').html();
  var redot = /^(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[-+/*%]|$))+$/;
  if  (!redot.exec(dot)){
    $('#numbers').text(function (_,txt) {
    return txt.slice(0, -1);
});
}}
