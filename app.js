function displayNumberDetails() {
    var num = parseInt(prompt("Enter a positive integer: "));
  
    if (isNaN(num) || num <= 0) {
      document.write("Invalid input. Please enter a positive integer.");
      return;
    }
  
    var output = "<h3>Number: " + num + "</h3>";
    output += "<h3>Rounded value: " + Math.round(num) + "</h3>";
    output += "<h3>Floor value: " + Math.floor(num) + "</h3>";
    output += "<h3>Ceiling value: " + Math.ceil(num) + "</h3>";
  
    document.write(output);
  }
  
  displayNumberDetails();

  
  function displayNumberDetails() {
    var num = parseFloat(prompt("Enter a negative floating-point number: "));
  
    if (isNaN(num) || num >= 0) {
      document.write("Invalid input. Please enter a negative floating-point number.");
      return;
    }
  
    var output = "<h3>Number: " + num + "</h3>";
    output += "<h3>Rounded value: " + Math.round(num) + "</h3>";
    output += "<h3>Floor value: " + Math.floor(num) + "</h3>";
    output += "<h3>Ceiling value: " + Math.ceil(num) + "</h3>";
  
    document.write(output);
  }
  
  displayNumberDetails();
  
  function displayAbsoluteValue() {
    var num = parseFloat(prompt("Enter a number: "));
  
    var absoluteValue = Math.abs(num);
  
    document.write("The absolute value of " + num + " is " + absoluteValue);
  }
  
  displayAbsoluteValue();

  
  function rollDice() {
    var diceValue = Math.floor(Math.random() * 6) + 1;
  
    document.write("<h1>Dice Value: " + diceValue + "</h1>");
  }
  
  rollDice();
  function coinToss() {
    var coinValue = Math.random() < 0.9 ? "Heads" : "Tails";
  
    document.write("<h1>Coin Value: " + coinValue + "</h1>");
  }
  
  coinToss();
    

  function displayRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
  
    document.write("<h1>Random Number: " + randomNumber + "</h1>");
  }
  
  displayRandomNumber();
  

  function displayWeight() {
    var userInput = prompt("Enter your weight: ");
    var weight = parseFloat(userInput);
  
    if (isNaN(weight)) {
      var regex = /^(\d+(\.\d+)?)\s*(kgs?|kilograms?)$/i;
      var matches = userInput.match(regex);
  
      if (matches !== null) {
        weight = parseFloat(matches[1]);
      } else {
        document.write("Invalid input. Please enter a valid weight.");
        return;
      }
    }
  
    document.write("<h1>Your weight: " + weight + " kgs</h1>");
  }
  
  displayWeight();
  
  function guessNumberGame() {
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    var userInput = parseInt(prompt("Guess the secret number (between 1 and 10): "));
  
    if (isNaN(userInput) || userInput < 1 || userInput > 10) {
      document.write("Invalid input. Please enter a number between 1 and 10.");
      return;
    }
  
    if (userInput === secretNumber) {
      document.write("<h1>Congratulations! You guessed the secret number!</h1>");
    } else {
      document.write("<h1>Sorry, you didn't guess the secret number. Try again!</h1>");
    }
  }
  
  guessNumberGame();

  function displayCurrentDateTime() {
    var currentDateTime = new Date();
    var dateTimeString = currentDateTime.toLocaleString();
  
    document.write("<h1>Current Date and Time: " + dateTimeString + "</h1>");
  }
  
  displayCurrentDateTime();
  
  function alertCurrentMonth() {
    var months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    var currentMonthIndex = new Date().getMonth();
    var currentMonth = months[currentMonthIndex];
  
    alert("Current Month: " + currentMonth);
  }
  
  alertCurrentMonth();

  function alertCurrentDay() {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    var currentDayIndex = new Date().getDay();
    var currentDay = days[currentDayIndex];
  
    alert("First 3 letters of the current day: " + currentDay);
  }
  
  alertCurrentDay();

  function checkDayOfWeek() {
    var currentDayIndex = new Date().getDay();
  
    if (currentDayIndex === 0 || currentDayIndex === 6) {
      document.write("<h1>It's Fun day!</h1>");
    } else {
      document.write("<h1>It's not Fun day.</h1>");
    }
  }
  
  checkDayOfWeek();
  

  function checkMonthDay() {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
  
    if (currentDay < 16) {
      document.write("<h1>First fifteen days of the month</h1>");
    } else {
      document.write("<h1>Last days of the month</h1>");
    }
  }
  
  checkMonthDay();

  

  function calculateMinutesSinceEpoch() {
    var currentDate = new Date();
    var minutesSinceEpoch = Math.floor(currentDate.getTime() / (1000 * 60));
  
    var myVariable = minutesSinceEpoch;
  
    console.log("Minutes since midnight, Jan. 1, 1970:", myVariable);
  }
  
  calculateMinutesSinceEpoch();

  function checkTimeOfDay() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
  
    if (currentHour < 12) {
      alert("It's AM");
    } else {
      alert("It's PM");
    }
  }
  
  checkTimeOfDay();

  function getLastDayOfLastMonth() {
    var laterDate = new Date(2023, 12, 0);
  
    console.log("Last day of the last month of 2023:", laterDate);
  }
  
  getLastDayOfLastMonth();
  
  function calculateDaysSinceFirstRamadan() {
    var startDate = new Date(2023, 2, 23); // Month is zero-based, so 2 represents March
  
    var currentDate = new Date();
    var timeDiff = currentDate.getTime() - startDate.getTime();
    var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    alert("Number of days passed since 1st Ramadan: " + daysPassed);
  }
  
  calculateDaysSinceFirstRamadan();

  function calculateSecondsSinceReferenceDate() {
    var referenceDate = new Date(1970, 0, 1); 
  
    var beginningOf2023 = new Date(2023, 0, 1); 
  
    var timeDiff = beginningOf2023.getTime() - referenceDate.getTime();
    var secondsElapsed = Math.floor(timeDiff / 1000);
  
    document.write("<h1>Seconds elapsed since the reference date:</h1>");
    document.write("<p>" + secondsElapsed + " seconds</p>");
  }
  
  calculateSecondsSinceReferenceDate();
  

  function resetDateOneHourAhead() {
    var currentDate = new Date();
    var currentHours = currentDate.getHours();
    currentDate.setHours(currentHours + 1);
  
    document.write("<h1>Date Object (One Hour Ahead):</h1>");
    document.write("<p>" + currentDate + "</p>");
  }
  
  resetDateOneHourAhead();

  function resetDateToPast() {
    var currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 100);
  
    alert("Date reset to 100 years back: " + currentDate);
  }
  
  resetDateToPast();
  
  function calculateBirthYear() {
    var age = prompt("Please enter your age:");
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear - age;
  
    document.write("<h1>Your Birth Year:</h1>");
    document.write("<p>" + birthYear + "</p>");
  }
  
  calculateBirthYear();
  
function generateElectricBill() {
    var customerName = prompt("Enter customer name:");
    var currentMonth = prompt("Enter current month:");
  
  
    var numberOfUnits = parseFloat(prompt("Enter number of units:"));
    var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));

    var netAmountPayable = numberOfUnits * chargesPerUnit;
    var latePaymentSurcharge = 50.75;
    var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
  
    netAmountPayable = netAmountPayable.toFixed(2);
    latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
    grossAmountPayable = grossAmountPayable.toFixed(2);
  
    document.write("<h1>K-Electric Bill</h1>");
    document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
    document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
    document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
    document.write("<p><strong>Charges per Unit:</strong> PKR " + chargesPerUnit + "</p>");
    document.write("<p><strong>Net Amount Payable (within Due Date):</strong> PKR " + netAmountPayable + "</p>");
    document.write("<p><strong>Late Payment Surcharge:</strong> PKR " + latePaymentSurcharge + "</p>");
    document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> PKR " + grossAmountPayable + "</p>");
  }
  
  generateElectricBill();
  