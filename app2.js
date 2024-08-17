// Question# 1
function currentDate() {
    var now = new Date();
    document.write(now);
}

currentDate();

// Question# 2
function greet(first_name, second_name){
    var full_name= first_name+ " "+ second_name;
    alert("Hello! "+full_name);
}

greet("Fatima", "Khalid");

// Question# 3
function sum() {
    var num1 = parseFloat(prompt("Enter first number: "));
    var num2 = parseFloat(prompt("Enter second number: "));
    var sum = num1 + num2;
    document.write("<br>The sum of " + num1 + " and " + num2 + " is " + sum);
}
sum();

// Question# 4
function calculator(){
    var a= parseInt(prompt("Enter First Number:"));
    var b= parseInt(prompt("Enter Second Number:"));
    var c= prompt("Enter operator(+, - , * , /):");
    var result;
    switch (c) {
        case "+":
            result= a+b;
            break;
        case "-":
            result= a-b;
            break;
        case "*":
            result= a*b;
            break;
        case "/":
            result= a/b;
            break;
        default:
            alert("Invalid Operator>>");
            break;      
    }
    alert("Result: "+result);
}

calculator();

// Question# 5
function square(a){
    return a*a;
}
document.write("<br>Square of The given Parameter: "+square(6));

// Question# 6
function factorial(n){
    if (n===0){
        return 1;
    }
    return n* factorial(n-1);
}

document.write("<br>Factorial of a given number is: ", factorial(5));

// Question# 7

function counting(){
    var start= parseInt(prompt("Write starting number: "));
    var end= parseInt(prompt("Write ending number: "));

    for (var i= start; i<=end; i++){
        document.write(i+"<br>");
    }
}

counting();

// Question# 8
function calculateHypotenuse() {
    function calculateSquare(x) {
        return x * x;
    }
    var base = parseFloat(prompt("Enter the base of the triangle:"));
    var perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
    document.write("<br>The hypotenuse of the triangle is: " + Math.floor(hypotenuse));
}

calculateHypotenuse();

// Question# 9
function areaOfRec(width, height){
    return width*height;
}

document.write("<br>Area of a Rectangle>> ", areaOfRec(10, 20));

// Question# 10
function isPlaindrome(str){
    var reversed = str.split('').reverse().join('');
    if(str=== reversed){
        alert("The string is Palindrome>>")
    }
    else{
        alert("The string is not Palindrome>>")
    }
}

isPlaindrome("madam");

// Question# 11
function capital(str){
    var arr= str.split(' ');
    for(var i =0; i<arr.length; i++){
        arr[i]= arr[i].charAt(0).toUpperCase()+ arr[i].slice(1);
    }
    return arr.join(' ');
}

document.write("<br>The string: the quick brown fox<br>After title case: ", capital("the quick brown fox"));

// Question# 12
function longest_word(str){
    var arr= str.split(' ');
    var longest= '';
    for(var i=0; i< arr.length; i++){
        if(arr[i].length > longest.length){
            longest= arr[i];
        }
    }
    return longest;
}
document.write("<br>EXAMPLE STRING : Web Development Tutorial<br>EXPECTED OUTPUT: ", longest_word("Web Development Tutorial"));

// Question# 13
function occurance(str, letter){
    var count= 0;
    for(var i=0; i<str.length; i++){
        if(str[i]=== letter){
            count++;
        }
    }
    return count;
}

document.write("<br>EXAMPLE STRING : JSResourceS.com<br>OCCURANCE Of O: ", occurance("JSResourceS.com", "o"));

// Question# 14
function calccircum(radius){
    return 2*3.142*radius;
}
function calcArea(radius){
    return 3.142*radius*radius;
}
document.write("<br>The circumference of a circle is>>",calccircum(8));
document.write("<br>The AREA of a circle is>>",calcArea(8));

