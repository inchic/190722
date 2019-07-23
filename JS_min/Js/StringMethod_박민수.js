var sen = "Hi, my name is Sam!";
var a1 = sen.split(" ");
var a2 = sen.substring(4,19);
var a3 = a1[0]+sen.substring(14,19);
var number = sen.indexOf("name");
var a4 = sen.substring(number,number+4);
var number2 = sen.indexOf("Sam");
var a5 = sen.substring(number2,sen.length-1);

function test(){
    document.getElementById("a1").innerHTML = a1[0];
    document.getElementById("a2").innerHTML = a2;
    document.getElementById("a3").innerHTML = a3;
    document.getElementById("a4").innerHTML = a4;
    document.getElementById("a5").innerHTML = a5;

}