// Question# 01
var now = new Date();
document.write(now);

// Question# 2
var months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];
var now= new Date();
var month= now.getMonth();
var nameOfMonth= months[month];
document.write("<br>Current Month: ", nameOfMonth);

// Question# 3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
document.write("<br>"+"Today is: " + nameOfToday );

// Question# 4
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];

if(nameOfToday==='Sat' || nameOfToday==='Sun'){
    alert("Yeahhhhh!!! Today is A fun day");
}
else{
    alert("Weekdays are the hectec days");
}

// Question# 5
var now = new Date();
var currentDate = now.getDate();

if(currentDate< 16){
    document.write("<br>First fifteen days of the month");
}
else{
    document.write("<br>Last Days of the month");
}

// Question# 6
var now = new Date();
var millisecondsSinceEpoch = now.getTime();
minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));
document.write("<br>Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch + "<br>");
document.write("Milliseconds since midnight, Jan. 1, 1970: " + millisecondsSinceEpoch);

// Question# 7
var now= new Date();
var time= now.getHours();

if(time< 12){
    alert("It's AM");
}
else{
    alert("It's PM")
}

// Question# 8
var laterDate= new Date(2020, 11, 31);
document.write("<br>Later Date: ", laterDate);

// Question# 9
var ramadanStart = new Date(2015, 5, 18); 
var currentDate = new Date();
var timeDifference = currentDate - ramadanStart;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
document.write("<br>Number of days passed since 1st Ramadan (June 18, 2015): " + daysPassed);

// Question# 10
var referenceDate = new Date();
var startOf2015 = new Date(2015, 0, 1); // January is month 0 (0-indexed)
var timeDifference = referenceDate - startOf2015;
var secondsElapsed = Math.floor(timeDifference / 1000);
document.write("<br>Seconds elapsed between the beginning of 2015 and the reference date: " + secondsElapsed);

// Question# 11
var currentDate = new Date();
var currentHours = currentDate.getHours();
document.write("<br>Current date: " + currentDate.toString());
currentDate.setHours(currentHours - 1);
document.write("<br>1 hour ago, it was: " + currentDate.toString());

// Question# 12
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
document.write("<br>Current date: " + currentDate.toString());
currentDate.setFullYear(currentYear - 100);
document.write("<br>100  year ago, it was: " + currentDate.toString());

// Question# 13
var age = parseInt(prompt("Please enter your age:"));
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("<br>You were born in the year: " + birthYear);

// Question# 14
var customerName = "Fatima Khalid Siddqui"; 
var currentMonth = new Date().toLocaleString('default', { month: 'long' }); 
var numberOfUnits = 350; 
var chargesPerUnit = 12.50; 
var latePaymentSurcharge = 150.00; 
var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
document.write("<h2>K-Electric Bill</h2>");
document.write("<p><b>Customer Name:</b> " + customerName + "</p>");
document.write("<p><b>Current Month:</b> " + currentMonth + "</p>");
document.write("<p><b>Number of Units:</b> " + numberOfUnits + "</p>");
document.write("<p><b>Charges per Unit:</b> PKR" + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p><b>Net Amount Payable (within Due Date):</b> PKR" + netAmountPayable + "</p>");
document.write("<p><b>Late Payment Surcharge:</b> PKR" + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p><b>Gross Amount Payable (after Due Date):</b> PKR" + grossAmountPayable + "</p>");


document.write("<br>------------------------------------------------------------------------------------<br>")


