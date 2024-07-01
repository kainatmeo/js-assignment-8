// ________________________________________Answer 01 ___________________________________________________

// let firstName = prompt("Please enter your first name:");
// let lastName = prompt("Please enter your last name:");

// let fullName= firstName + lastName;
// alert( "Assalam o Alikum " +fullName);

// ________________________________________Answer 02 ___________________________________________________

// // 
// var username = prompt("Enter your favourite mobile phone.");
// document.write("My favourite mobile phone is: " + username + "<br>");
// document.write("Length of string: " + username.length);




// ________________________________________Answer 03 ___________________________________________________

// var username = prompt("Enter your favourite mobile phone.");
//     var vowels = 'aeiouAEIOU';
//     var vowelCount = 0;

//     for (var i = 0; i < username.length; i++) {
//         if (vowels.indexOf(username[i]) !== -1) {
//             vowelCount++;
//         }
//     }

//     document.write("My favourite mobile phone is: " + username + "<br>");
//     document.write("Number of vowels: " + vowelCount + "<br>");
//     document.write("Length of string: " + username.length);

// ________________________________________Answer 04 ___________________________________________________

//   var text = " hellow world";
//   var segIndex = text.lastIndexOf("l");
//   document.write("last index of 'l' is :" + segIndex );


// ________________________________________Answer 05___________________________________________________

//  var coun = "pakistani";
//   var character = coun.charAt(5);
//   document.write( "string = "+ coun + "<br>");
//   document.write("Character at position 5 is = " + character);





// ________________________________________Answer 06 __________________________________________________

// ________________________________________Answer 07 ___________________________________________________
  // var country = "Hyderabad";
  // document.write(country.replace("Hyder" , "Isalm"));
// ________________________________________Answer 08 ___________________________________________________
// var message =  "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace("and" , "&"));

// ________________________________________Answer 09 ___________________________________________________

//  var number = "472"
//  document.write("Value " + number + "<br>");
//  document.write(" Type " + typeof number + "<br>");

//  var number1 = "472"
//  document.write("Value " + parseInt(number1) + "<br>");
//  document.write( " Type " + typeof number1);


// _______________________________________Answer 10 ___________________________________________________
//  var userinput= prompt("Enter your Name")
//  document.write("User input : " + userinput + "<br>" );
//  document.write("Upper Case : " + userinput.toUpperCase());

// ________________________________________Answer 11___________________________________________________



// var  userInput= prompt("Enter your course")
//  document.write("User input : " +  userInput  + "<br>" );
// var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
//  document.write(" Tittle Case : " + titleCase  );


// ________________________________________Answer 12 __________________________________________________

// let num = 35.36;
// let result = num.toString().replace('.', '');
// document.write( " Number :  " + num +" <br>");
// document.write(" result : " +result );
// _
// ________________________________________Answer 13 ___________________________________________________
// var username = prompt("Enter your name:");
// var charValue;
// for(var i=0; i<username.length; i++){
//     charValue=username[i].charCodeAt(0);
//     if(charValue === 33 || charValue === 44 || charValue === 46 || charValue === 48)
//         alert("Please enter a valid username")
// }




// ________________________________________Answer 14 ___________________________________________________
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search for:");
// userInput = userInput.toLowerCase();
// var found = false;


// for (var i = 0; i < A.length; i++) {
//          if (A[i].toLowerCase() === userInput) {
//          found = true;
//          break;
//                 }
//             }

//             if (found) {
//                 alert("Yes, '" + userInput + "' is found in the list.");
//             } else {
//                 alert("No, '" + userInput + "' is not found in the list.");
//             }





            // 16. Write a program to convert the following string to an
            // array using string split method.
            // var university = “University of Karachi”;
            // Display the elements of array in your browser.


//             var university = "University of Karachi";
//             var arrayUniversity = university.split(' ');

// document.write("Array Elements: " + arrayUniversity + "<br>")


// 17. Write a program to display the last character of a user
// input.
        
// var words = "Pakistan";
// var lastIndex = words.charAt(7)

// document.write("User input: " + words + "<br>" + "Last character of input: " + lastIndex)


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// var str = "The quick brown fox jumps over the lazy dog";

//             var searchTerm = "the";
//             var lowerCaseStr = str.toLowerCase();
//             var words = lowerCaseStr.split(' ');
//             var count = 0;

//             for (var i = 0; i < words.length; i++) {
//                 if (words[i] === searchTerm) {
//                     count++;
//                 }
//             }


            // document.getElementById("result").innerText = "Occurrences of '" + searchTerm + "': " + count;

            document.write("Text: " + str + "<br>" + "There are " + count + " occurences of word " + searchTerm) 
         