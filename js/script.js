

// Javascript

function showDate(){
    document.getElementById('sd').innerHTML = Date();
}

function showText(){
    document.getElementById('st').innerHTML = "Hello world";
}

function changeText(){
    document.getElementById('ct').innerHTML = "I Am Changed";
}

//js2
function bulbOn(){
    document.getElementById('img').src = "images/on.gif";
}

function bulbOff(){
    document.getElementById('img').src = "images/off.gif";
}
//js3
function changeColor(){
    document.getElementById('cc').style.color = "red";
}

//js4
function showTest(){
    document.getElementById('sohi').style.display = "block";
}
function hideText(){
    document.getElementById('sohi').style.display = "none";
}
//js5
function hrNumber(){
    var data = document.getElementsByTagName('hr');
    alert(data.length);
}
//js6
function cName(){
    document.getElementsByClassName('h4')[3].innerHTML = "Hellow World";
}
// js7

function varoutput(){
    var varOutput = "Welcome";
    document.getElementById('ot').innerHTML=varOutput;
}
//js 8
var number1 = 5;
var number2 = 4;

 var result = number1 + number2;
 
function aOp(){
    document.getElementById('re').innerHTML = result;}

    // Note- var ar alternative let diye likhle let number1, number2, result;
    // js 9
    function windowPrint(){
    window.print();
}
//js10
function windowAlert(){
    window.alert(5 + 6);
}
//js11
function changeBackground(){
    document.getElementById('dd').style.background= "red";
    document.getElementById('ee').style.background= "green";
    document.getElementById('ff').style.background= "yellow";
}