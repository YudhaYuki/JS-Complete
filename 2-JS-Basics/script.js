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
/*
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
*/








///////////////////////// CHALLANGE I /////////////////////////////////
/*
var martinHeight = 180;
var marryHeight = 170;
var sarahHeight = 175;

var martinAge = 25;
var marryAge = 30;
var sarahAge = 35

var martinScore = martinHeight + martinAge * 5;
var marryScore = marryHeight + marryAge * 5;
var sarahScore = sarahHeight + sarahAge * 5;

if (martinScore > marryScore && martinScore > sarahScore) {
    console.log(`Martin wins the game with score ${martinScore}`)
} else if (marryScore > martinScore && marryScore > sarahScore) {
    console.log(`Marry wins the game with score ${marryScore}`);
} else if (sarahScore > martinScore && sarahScore > marryScore) {
    console.log(`Sarah wins the game with score ${sarahScore}`);
} else if (marryScore === martinScore === sarahScore) {
    console.log('The game is draw');
} else {
    console.log(`No body wins the game`);
}

*/






///////////////////////// FUNCTIONS /////////////////////////////////

function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);


function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(`${name} will be retired in ${retirement} years.`);        
    } else {
        console.log (`${name} is already retired`);
    }
}

yearsUntilRetirement('Yudha', 1991);
yearsUntilRetirement('John', 1969);
yearsUntilRetirement('Marry', 1948);