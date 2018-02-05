/*global alert*/
//TASK 1
//declaring variables a, b, c
alert("test");

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
        "(a += b):" + (a += b) + "\n" +
        "(a -= b):" + (a -= b) + "\n" +
        "(a *= b):" + (a *= b) + "\n" +
        "(a /= b):" + (a /= b) + "\n" +
        "(a %= b):" + (a %= b) + "\n" +
        "(a == b):" + (a == b) + "\n" +
        "(a != b):" + (a != b) + "\n" +
        "(a > b):" + (a > b) + "\n" +
        "(a < b):" + (a < b) + "\n" +
        "(!a && !c):" + (!a && !c) + "\n" +
        "(!a || !c):" + (!a || !c) + "\n"
   
    
alert(output);

//TASK 2

var first_name = "Ramandeep";
var last_name = "Kaur";
var email = "kaur0272@algonquinlive.com";

var output_1 = "My name is" + " " + first_name + " " + last_name + "." + "\n"+
                "You can contact me at" + " " + email + ".";
    

alert(output_1);