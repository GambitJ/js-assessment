//#1
//Declare a variable called 'name' that has the value of your name.

var name = 'Joe Chan';

//#2
//create an if statement that checks to see if your name is equal to 'Ben'
//If yes, log 'yes'
//otherwise log 'no'
//note: use console.log to log the string

if (name === 'Ben') {
	  console.log ('yes');
}
 else { 
 	console.log ('no');
 }
 

//#3
//create an array called 'favoriteFoods'.
//fill it up with the names of several of your favorite foods

var favoriteFoods = ["Bubble Tea", "Pizza", "Fried Chicken", "Ramen Noodles"];

//#4
//use a for loop to log each food in the 'favoriteFoods' array


for (var i=0; i < favoriteFoods.length; i++) {
	console.log (i);

}


//#5
//create an object called 'favoriteMovie'.
//give 'favoriteMovie' a property called 'runtime' and set it equal to how long the movie is in minutes
//give 'favoriteMovie' a property called 'title' and set it equal to the title
//give 'favoriteMovie' a property called 'director' and set it equal to the director's name

var favoriteMovie = {
runtime: "114 minutes",
title: "The Brothers Bloom",
director: "Rian Johnson"
};

//#6
//create a function called 'sayHi'.
//'sayHi' should accept one argument called 'name'
//when 'sayHi' is invoked it should log the string 'Hello <name>!' where <name> is equal to the 'name' argument


function sayHi(name) {
  console.log("Hello " + name + "!");
}

sayHi("name");


//#7
//create an array called 'friends'
//create three objects that have information about your friends
//each object should have a 'name', 'age', and 'vocation' property with appropriate data
//put the three objects inside of the 'friends' array



function person(a, b, c) {
  this.name = a;
  this.age = b;
  this.vocation = c;
}

var dude1 = new person('Bob', 52, 'Astronaut');
var dude2 = new person('The Doctor', 9001, 'Timelord');
var dude3 = new person('Clara', 28, 'Teacher');

var friends = [dude1, dude2, dude3];




//#8
//use a for loop to iterate over the 'friends' array from problem #7
//inside the for loop print the string 'My friend <name> is <age> years old and does <vocation> for work.'


for (var i=0; i < friends.length; i++) {
	console.log ('My friend ' + friends[i]["name"]  + ' is ' + friends[i]["age"] + ' years old and does ' + friends[i]["vocation"] + ' for work.' );

}

//#9
//create a constructor called 'User' that can function as a class for creating new user objects
//'User' should take 'email', and 'password' as arguments 
//each instance of 'User' that is created should have a 'email', and 'password' property that is equal to the arguments passed to the constructor


function User(a, b) {
  this.email = a;
  this.password = b;
}

var client = new User('email@email.com', 'password123');

var client2 = new User('yahoohotmail@gmail.com', 'creativepassword789');

var client3 = new User('blahblah@snailmail.com', 'drowssaP');


// for fun points I added an array to push into and a loop to log it all.
var people = new Array();

people.push(client, client2, client3);


for (var i=0; i < people.length; i++) {

	console.log ('Email: ' + people[i]["email"]  + '\n ' + 'Password: ' + people[i]["password"]);

}




//#10
//create a function called 'nFactorial(num)'
//'nFactorial' should return the factorial of the 'num' argument
//note: the factorial of 5 is (5 * 4 * 3 * 2 * 1) ->  120
//try to solve this recursively

function nFactorial(num) {
if (num > 1){
return num * nFactorial(num - 1);
}
else {
return 1;
}}
console.log ("answer is "+nFactorial(5));