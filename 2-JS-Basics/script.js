/*
let name = "John";
let lastName = "Smith";
let age = 26;
let fullAge = true;

console.log(`${name} ${lastName} is ${age} years old. ${fullAge}`);
*/









///////////////////////// OPEATORS /////////////////////////////////

/*
var now = 2016;
var birthYear = now - 26 ;

birthYear = now - 26 * 2;

console.log(birthYear);
*/




///////////////////////// IF ELSE STATEMENT /////////////////////////////////
/*
var name = "John";
var age = "26";
var isMarried = true;
*/

/*
if (isMarried === true ) {
    console.log(`${name} is ${age} years old and he is married`);
} else {
    console.log(`${name} is ${age} years old and he is single`);    
}
*/


/*
if (isMarried) {
    console.log(`${name} is ${age} years old and he is married`);
} 
*/


/*
isMarried ? console.log(`${name} is ${age} years old and he is married`) : console.log(`${name} is ${age} years old and he is single`);    


var num = 23 + "23";

console.log(num);

*/






///////////////////////// BOOLEAN LOGIC and SWITCH /////////////////////////////////

var age = 20;

if (age < 20) {
    console.log (`John is a teenager`);
} else if (age >= 20 && age < 30) {
    console.log (`John is a young man`);    
} else {
    console.log(`John is a man`);
}




var job = 'sport';

job = prompt('What does John do?');

switch (job) {
    case 'teacher':
        console.log(`John teaches kids.`);
        break;
    case 'driver':
        console.log(`John drives a cab`);
        break;
    case 'cop':
        console.log(`John helps fight crime.`);
        break;
    default:
        console.log('John does something else.');
}