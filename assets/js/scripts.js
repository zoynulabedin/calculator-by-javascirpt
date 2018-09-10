var valueOf7 = document.getElementById("number7");
var valueOf4 = document.getElementById("number4");
var valueOf8 = document.getElementById("number8");
var valueOf5 = document.getElementById("number5");
var valueOf9 = document.getElementById("number9");
var valueOf6 = document.getElementById("number6");
var valueOfMinus = document.getElementById("minus");
var valueOfIntu = document.getElementById("intu");
var valueOf3 = document.getElementById("number3");
var valueOf0 = document.getElementById("number0");
var valueOf2 = document.getElementById("number2");
var valueOfCan = document.getElementById("can");
var valueOf1 = document.getElementById("number1");
var valueOfevel = document.getElementById("eee");
var valueOfdive = document.getElementById("dive");
var valueOfplus = document.getElementById("plus");

valueOf7.onclick = function(){
    document.getElementById("display").value +=7;
}

valueOf4.onclick = function(){
    document.getElementById("display").value +=4;
}
valueOf8.onclick = function(){
    document.getElementById("display").value +=8;
}
number5.onclick = function(){
    document.getElementById("display").value +=5;
}
valueOf9.onclick = function(){
    document.getElementById("display").value +=9;
}
valueOf6.onclick = function(){
    document.getElementById("display").value +=6;
}
valueOfMinus.onclick = function(){
    document.getElementById("display").value +='-';
}
valueOfIntu.onclick = function(){
    document.getElementById("display").value +='*';
}
valueOf3.onclick = function(){
    document.getElementById("display").value +=3;
}
valueOf0.onclick = function(){
    document.getElementById("display").value +=0;
}
valueOf2.onclick = function(){
    document.getElementById("display").value +=2;
}
valueOfCan.onclick = function(){
    document.getElementById("display").value='';
}
valueOf1.onclick = function(){
    document.getElementById("display").value +=1;
}
valueOfevel.onclick = function(){
   
    document.getElementById("display").value=eval(document.getElementById("display").value)
    ;
}

valueOfdive.onclick = function(){
    document.getElementById("display").value +='/';
}
valueOfplus.onclick = function(){
    document.getElementById("display").value +='+';
}