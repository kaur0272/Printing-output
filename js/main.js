/*global alert*/
//TASK 1
//declaring variables a, b, c

var output, a, b, c;
a = 3;
b = 5;
c;

output = "var a = 3;\n b = 5;\nvar c;\n-----------\n" +
        "a + b = " + (a + b) + "\n" +
        "a - b = " + (a - b) + "\n" +
        "a * b = " + (a * b) + "\n" +
        "a / b = " + (a / b) + "\n" + 
        "a % b = " + (a % b) + "\n" +
        "(a += b) : " + (a += b) + "\n" +
        "(a -= b) : " + (a -= b) + "\n" +
        "(a *= b) : " + (a *= b) + "\n" +
        "(a /= b) : " + (a /= b) + "\n" +
        "(a %= b) : " + (a %= b) + "\n" +
        "(a == b) : " + (a == b) + "\n" +
        "(a != b) : " + (a != b) + "\n" +
        "(a > b) : " + (a > b) + "\n" +
        "(a < b) : " + (a < b) + "\n" +
        "(!a && !c) : " + (!a && !c) + "\n" +
        "(!a || !c) : " + (!a || !c) + "\n"
   
    
alert(output);

//TASK 2

var first_name = "Ramandeep";
var last_name = "Kaur";
var email = "kaur0272@algonquinlive.com";

var output_1 = "My name is" + " " + first_name + " " + last_name + "." + "\n"+
                "You can contact me at" + " " + email + ".";
    

alert(output_1);

//task 3
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

let v = numbers[0];
let v2 = numbers[(numbers.length - 1)];
let sum = (v + v2);

if (sum % 2 === 0){
    alert (v + " + " + v2+ " = " + sum +"\n"+ " This is  an even Number");
} else {
    alert(v1 + " + " + v2 + " = " + sum +"\n" +" This is  an odd Number");
}
