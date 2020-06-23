                /////////////////////////////////Chapter 21-25///////////////////////////
//Q1:  Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name. 

// var fname=prompt("Enter Your Firstname");
// var lname=prompt("Enter Your Lastname");
// var fullname=fname+" "+lname;
// alert("Hello"+" "+fullname);

//Q2:Write a program to take a user input about his favorite mobile phone model. Find 
//and display the length of user input in your browser 

// var mobile=prompt("Enter your Favourite Mobile Phone Model");
// var length=mobile.length;
// document.write("My Favourite phone is :"+" "+mobile+" "+"and the "+" "+"Total length of your input is:"+" "+length);

//Q3: Write a program to find the index of letter “n” in the word “Pakistani” 
//and display the result in your browser . 

// var index="Pakistani";
// var search=index.indexOf("n");
// document.write("String:"+index+" "+" "+"<br>"+" Index of n is"+" "+search);

//Q4:Write a program to find the last index of letter “l” in the word 
//“Hello World” and display the result in your browser. 

// var index="Hello World";
// var search=index.lastIndexOf("l");
// document.write("String:"+index+" "+" "+"<br>"+" Last Index of l is"+" "+search);

//Q5:. Write a program to find the character at 3rd index in the word “Pakistani” 
//and display the result in your browser

// var index="Pakistani";
// var extract=index.slice(3,4);
// document.write("String:"+index+" "+" "+"<br>"+" Character in index 3 is"+" "+extract);
// }

//Q6:. Repeat Q1 using string concat() method

// var fname=prompt("Enter Your Firstname");
// var lname=prompt("Enter Your Lastname");
// var fullname=fname.concat(lname);
// alert(fullname);

//Q7  Write a program to replace the “Hyder” to “Islam” in 
//the word “Hyderabad” and display the result in your browser

// var text="hyderabad"
// for (var i = 0; i < text.length; i++)
//  {   if (text.slice(i, i + 9) === "hyderabad")
//   {     
//     document.write("Text before Replacement is"+" "+text+"<br>"+"Text After Replacement is"+" "+text.slice(0, 0) + "Islamabad" + text.slice(i + 9));

//      } 
//      }

// 8. Write a program to replace all occurrences of “and” in the string with “&” 
// and display the result in your browser. var message = “Ali and Sami are best friends.
//  They play cricket and football together.”; 



// var message = "Ali and Sami are best friends They play cricket and football together";

// for (var i = 0; i < message.length; i++)
//  {   if (message.slice(i, i + 3) === "and" )
//   {     
//     document.write("before Replacement:"+" "+message+"<br>"+" After Replacement :"+" "+message.slice(0, 3) + " "+"&" +
//      message.slice(i + 3));

//      } 
//      }

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 

// var string="472";
// document.write("value:"+" "+string+"<br>"+"Type:"+" "+"String"+"<br>");
// var num=parseInt(string);
// document.write("value:"+" "+string+"<br>"+"Type:"+" "+num +" "+"Is number");

//10. Write a program that takes user input. Convert and show the input in capital letters. 

// var input=prompt("Enter value");

// alert(input.toUpperCase());

//11.Write a program that takes user input. Convert and show the input in title case. 

// var input=prompt("Enter value").split(' ');
// for (var i = 0; i < input.length; i++) {
//   input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1); 
// alert("Titecase:"+" "+input);
//               }

//12.Write a program that converts the variable num to string. var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser. 

// var num=35.36;
// var num2=35.36;
// var integer=Math.floor(num);
// var integer2=Math.ceil(num2);
// var string1=integer.toString();
// var string2=integer2.toString();
// var fstring=string1.concat(string2)
// document.write(fstring);

//13.Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !], 
// prompt the user to enter a valid username. For character codes of [@ . 

// var username=prompt("Enter username");
// if(username==="@"&& username==="." && username===","&& username==="!"){
//   alert("Welcom"+username)

// }
// else
// {
//   alert("Please enter valid username")
//}

//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. After searching,
//  prompt the user whether the given item is found in the list or not. 
//  Note: Perform case insensitive search. Whether the user enters cookie, Cookie, 
//  COOKIE or coOkIE, program should inform about its availability. Example: 

// var bakery=prompt("Enter Your item:");
// bakery=bakery.toLowerCase();

// var arr=["cake","apple pie","cookie","chips","patties"];
// for(i=0;i<arr.length;i++){
//   if(bakery==arr[i]){
//     alert(bakery+" "+" "+"is found in our bakery at postion:"+" "+index);
//   }

//   else{
//     alert("not found")
//   }
// }


// 15.Write a program to take password as an input from user. 
// The password must qualify these requirements:
//  a. It should contain alphabets and numbers
//   b. It should not start with a number
//    c. It must at least 6 characters long If the password does not meet above requirements, 
//    prompt the user to enter a valid password. For character codes 
// of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 

// function CheckPassword() 
// { 
// var format=  /^(?=.*[0-9])[a-zA-Z0-9]{6}$/;
// var pass=prompt("Enter password");
// if(pass.match(format)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }
// } 
// alert(CheckPassword())

//16. Write a program to convert the following string to an array using string split method. 
//var university = “University of Karachi”; Display the elements of array in your browser. 

// var university="university of Karachi".split(' ')
// document.write(university);

//17. Write a program to display the last character of a user input. 

// var index=prompt("Enter Character");
// var search=index.lastIndexOf(index);
// document.write("String:"+index+" "+" "+"<br>"+" Last char of " +search+" is"+" "+search);


////////////////////////////////CHAPTER 26---30//////////////////////////////////////////////

// 1. Write a program that takes a positive integer from user 
// & display the following in your browser.
//  a. number 
//  b. round off value of the number 
//  c. floor value of the number
//   d. ceil value of the number  

// var integer=prompt("Enter Number ");
// alert(integer+"\n"+Math.round(integer)+"\n"+Math.floor(integer)+"\n"+Math.ceil(integer));


//2.Write a program that takes a negative floating point number from user
//  & display the following in your browser. 
//  a. number
//   b. round off value of the number 
//   c. floor value of the number
//    d. ceil value of the number 

// var integer=prompt("Enter Negative Number ");
//  alert(integer+"\n"+Math.round(integer)+"\n"+Math.floor(integer)+"\n"+Math.ceil(integer));

// 3. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 

// var num=prompt("Enter number to find absolute value of it");
// alert("The absoute value of "+num+" "+" is"+" "+Math.abs(num))

//4. Write a program that simulates a dice using random() method of JS Math class.
// Display the value of dice in your browser.: 

// var dice=Math.random()*6;

//   var b=Math.floor(dice);
//   var c=b+1;
//   document.write("Random Dice value: "+c);

//5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your browser

// var coin=Math.random() *2;
//    var b=Math.floor(coin);
//    var c=b+1;
// if(c===2){
//     document.write("2"+"<br>"+"Random coin value: Heads "); 
// }
// else   
// {
//   document.write("1"+"<br>"+"Random coin value: Tails ");
// }  

//6. Write a program that shows a random number between 1 and 100 in your browser. 

// var number=Math.random()*100;
// var b=Math.floor(number);
// var c=b+1;
// document.write(c);

//7. Write a program that asks the user about his weight. 
//Parse the user input and display his weight in your browser. Possible user inputs can be: 
//a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms 

// var weight=prompt("Enter Your Weight");
// parseInt(weight);
// alert(weight);

//8. Write a program that stores a random secret number from 1 to 10 in a variable. 
//Ask the user to input a number between 1 and 10.If the user input equals the secret number, congratulate the user.

// var num=10;
// var input=+prompt("Enter secret no")
// if(input===num){
//   alert("Congrats You have found the number");
// }
// else{
//   alert("try again")
// }
///////////////////////////////////Chapter 31-34/////////////////////////////////////////////////

//1. Write a program that displays current date and time in your browser. 

// var today= new Date();
// alert(today);

//2. Write a program that alerts the current month in words. For example December.
// var month=new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December"; 

// var today=new Date();
// var m=month[today.getMonth()];
// alert(m)

//3. Write a program that alerts the first 3 letters of the current day, 
//for example if today is Sunday then alert will show Sun.

// var days=["sun","mon","tue","wed","thu","fri","sat"];
// var today=new Date();
// var d=days[today.getDay()];
// alert("Today is"+" "+d);

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 

// var days=["sun","mon","tue","wed","thu","fri","sat"];
// var today=new Date();
// var d=days[today.getDay()];
// if(d=="sat"||d=="sun"){
//   alert("Today is"+" "+d+" "+"Its a Fun day");
// }
// else{
//   alert("Its working day")
// }

// 5. Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16th of the month else shows “Last days of the month”

// var today=new Date();
// var get=today.getDate();
// if(get<16){
//   alert("First fifteen days of the month")
// }
// else{
//   alert("Last Sixteen days of Month")
// }

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and 
// assigns it to a variable that hasn't been declared beforehand. Use any variable
//  you like to represent the Date object. 

// var old_date=new Date();

// var milisec=old_date.getTime();
// var today=new Date();
// var minutes=1000*60;
// var t=today.getTime();
// var m=Math.round(t/minutes);


//  alert(today+"\n"+"Milisec from jan 1, 1970 is"+" "+milisec+"\n"+"minutes from jan 1,1970 is "+" "+m);



 //7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

//  var today=new Date();
//  var get=today.getHours();
//  if(get==0){
//    alert("Its midnight")
//  }
//  else if(get==12){
//    alert("Its"+" "+get+"Am")
//  }
//  else if(get==23){
//   alert("Its"+" "+get+"Pm")
//  }

// 8. Write a program that creates a Date object for the last day of 
// the last month of 2020 and assigns it to variable named laterDate. 

// var laterDate=new Date();
// var lastDay =  
// new Date(laterDate.getFullYear(), laterDate.getMonth() - 1, 31)
// alert(lastDay)

//9. Create a date object of the starting date of this Ramadan and alert the 
//number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// var oneday=24 * 60 * 60 * 1000;
// var date=new Date();
// var startDate=new Date(date.getFullYear(), date.getMonth()-1, -6); 
// //var get=startDate.getDate();
// var today=new Date();
// var get= Math.round(Math.abs((date - startDate) / oneday));
// alert(get+" "+" Days have passed since 24 April 2020");

//10. Write a program that displays in your browser the seconds that elapsed
// between the reference date and the beginning of 2015. 

// var date=new Date();
// var t1 = new Date(date.getFullYear()-5,date.getMonth()+6,5 );
// var t2 = new Date();
// var dif = t1.getTime() - t2.getTime();

// var Seconds =Math.round( dif / 1000);
// var res = Math.abs(Seconds);
// alert(res+" "+" seconds is passed since Dec 5 2015");

//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour
// ahead and finally display the date object in your browser. 

// var current=new Date();
// var get=current.getHours();
// alert("Current Date is:"+current+" "+get+"\n");
// current.setHours(current.getHours()-1);
// alert("Last 1 hour go Date was:"+current)

//12.Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back? 

// var current=new Date();
// alert(current+"\n")
// var d = new Date();
// d.setFullYear(d.getFullYear()-100, d.getMonth() );
// alert("100 year back it was"+" "+d);

//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 

// var age=new Date(prompt("Enter Your DOB","nov 29,1998"));
// var current=new Date();
// var cal_age=current.getFullYear()-age.getFullYear();
// var year=age.getFullYear();
// alert("Your age is:"+" "+cal_age +" "+"Your birth year is"+" "+year)

//14.Write a program to generate your K-Electric bill in your browser. All the amounts should be 
//rounded off to 2 decimal places.Display the following fields: 

// var name=prompt("Enter Customer Name");
// var month=new Date();
// var m=month.getMonth();
// var unit=prompt("Enter No of Unit");
// var charges_p_u=prompt("Enter charges per unit");
// var late_pay=350
//  var net_amount_with_due=unit*charges_p_u;
//  var gross_a_p=net_amount_with_due+late_pay;

//  alert("Customer Name:"+" "+name+"\n"+
//  "Month:"+" "+m+"\n"+ "Numbers of unit:"+" "+unit+"\n"+ "Charges per unit:"+" "+charges_p_u+"\n"+ 
//  "Net amount Payable:"+" "+net_amount_with_due+"\n"+ "Late payment surcharge:"+" "+late_pay+"\n"+ 
//  "Gross amount Payable:"+" "+gross_a_p+"\n"
//  )

///////////////////////////////////////////chapter 35-38///////////////////////////////////////////

//1. Write a function that displays current date & time in your browser. 
// function new_d(){
// var current=new Date();
// return current
// }
// alert(new_d());

//2. Write a function that takes first & last name and then it greets the user using his full name. 

//  function greeting(greet){
//    var fname=prompt("Enter firstname")
//    var lname=prompt("Enter lastname")
//    return "Hello"+" "+fname.concat(" "+lname);
//  }
//  alert(greeting());

//3.. Write a function that adds two numbers (input by user) and returns the sum of two numbers

// function sum(){
//   var num1=+prompt("Enter num 1")
//   var num2=+prompt("Enter num 2");
//      var add= num1+num2;
//      return add
// }
//  console.log(sum())

//4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation.
// Return and show the desired result in your browser

// function cal(){
//   var n1=+prompt("Enter first num")
//   var n2=+prompt("Enter sec num");
//   var op=prompt("Enter desired opertaion")
//   if (op=="+"){
// return n1+n2
//   }
//   else if(op=="-"){
//     return n1-n2
//   }
//   else if(op=="*"){
//     return n1*n2
//   }
//   else if(op=="/"){
//     return n1/n2
//   }
//   else if(op=="%"){
//     return n1%n2
//   }
//   else{
//     return "Wrong operation"
//   }
// }
// alert(cal());

//5. Write a function that squares its argument. 

// function square(a){
//   return a*a
// }
// alert(square(6));

//6. Write a function that computes factorial of a number
// function fact(a,b,c,d,e){
//   return a*b*c*d*e 
// }
// alert(fact(5,4,3,2,1));

//7. Write a function that take start and end number as inputs & display counting in your browser. 

//  function counting(){
//    var start=+prompt("Enter starting value");
//    var end=+prompt("Enter Ending vaue");
//    for(var i=start;i<=end;i++){
//     console.log(i)
//    }
//  }
// counting();

//8. Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse() Inner function: calculateSquare()

// function hypotenuse(){
//  var per=+prompt("Enter perpendicular");
//  var base=+prompt("Enter base ");
//   var b=Math.pow(base,2);
//   var p=Math.pow(per,2)
//   var hypo=b+p

//     return hypo;
// }

//   function calsq(hypo){
//     return Math.sqrt(hypo);

//   }



//   console.log(hypotenuse()+"\n");
// console.log(calsq(hypo))

//9. Write a function that calculates the area of a rectangle.    
//   A = width * height     Pass width and height in following manner: 
// i. Arguments as value ii. Arguments as variables 

//By values
// function area(width,height){
//   return width*height
// }
// alert(area( "Area of rectangle is "+"  "+5,6.7));

//By variable
// function area(){
//   var v1=+prompt("Enter width");
//   var v2 =+prompt("Enter Height");
//  return v1*v2
// }
// alert(area());

//10. Write a JavaScript function that checks whether a passed string is palindrome or not?  
//  A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam. 

// function palindrome(str) {
//     var regex = /[\W_]/g;
//     var string = str.toLowerCase().replace(regex , '');
//     var reverseStr = string.split('').reverse().join(''); 
//     if(reverseStr === string){
//         return true;
//     }
//     else{
//         return false
//     }
//   }
//   alert(palindrome("racecar")+" "+" given word is a palindrome word")

//11. Write a JavaScript function that accepts a string as a parameter and 
//converts the first letter of each word of the string in upper case.  EXAMPLE STRING :
 //'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 

//  function first_letter(){
//    var str="the quick brown fox".split(' ');
//    alert("String:"+" "+str+"\n");
//    for (var i = 0; i < str.length; i++) {
//        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//      alert("Expected Output:"+" "+str);
//                   }
//  }
//  first_letter();

//12. Write a JavaScript function that accepts a string as a parameter and 
//find the longest word within the string.  EXAMPLE STRING : 'Web Development Tutorial'  
//EXPECTED OUTPUT : 'Development'


//  function str(string){
//   var mess="Web Development Tutorial"
//   var get=mess.slice(3,15)
//   return get
// }
// console.log(str("Web Development Tutorial"));

//13. Write a JavaScript function that accepts two arguments, a string and a 
//letter and the function will count the number of 
//occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'  

// function char_count(string, letter) 
// {
//  var letter_Count = 0;
//  for (var index = 0; index < string.length; index++) 
//  {
//     if (string.charAt(index) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('JSResourceS.com', 'o')+" "+"Character occurs 2 times");

//14. The Geometrizer 

// function calcCircum(radius){
//     const pi=3.142;
//     var circumference=2*pi*radius
//     return circumference

// }
// console.log("The value of circumference of the circle is:"+" "+calcCircum(5)+"\n");
// function calcArea(radius){
//     const pi=3.142;
//     var area=pi*radius*radius;
//     return area
// }
// console.log("The value of area of the circle is:"+" "+calcArea(5));

