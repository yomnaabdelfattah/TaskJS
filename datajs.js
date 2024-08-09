function sum(){
    var number1, number2, summ;

    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;

    
    summ = Number(number1) + Number(number2);

    
    document.getElementById("result").innerHTML = "The result is: " + summ;
}

function sub(){
    var number1, number2, sub;

    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;

    
    sub = number1 - number2;

    
    document.getElementById("result").innerHTML = "The result is: " + sub;
}

function mul(){
    var number1, number2, mul;

    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;

    
    mul = number1 * number2;

    
    document.getElementById("result").innerHTML = "The result is: " + mul;
}