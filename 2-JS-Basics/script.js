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

/*
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
*/









///////////////////////// EXPRESSION AND STATMENT /////////////////////////////////


function someFun(par) {
    // code
}

var someFunc = function(par) {
    // code
}

// Expression
3 + 4 ;
var x = 3


// statments
if (x === 5) {
    // do soemthing
}











///////////////////////// ARRAY /////////////////////////////////

/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);

names[1] = 'Ben';
console.log(names);
*/

/*
var john = ['John', 'Smith', 1990, 'programer', false];

john.push('blue');
john.unshift('Mr');
john.pop();
john.shift();

console.log(john);

// alert(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher');
}
*/








///////////////////////// OBJECTS /////////////////////////////////

/*
// 1st way creating an object
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'Programmer';

console.log(john);



// 2nd way of creating an object
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/






///////////////////////// OBJECTS and METHOD /////////////////////////////////

// Version I
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge : function() {
        return 2016 - this.yearOfBirth;
    }
};


// console.log(john.family[2]);
// console.log(john.calculateAge(1970));

// console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

*/

/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge : function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);



var mike = {
    yearOfBirth: 1950,
    calculateAge : function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/







///////////////////////// LOOPS /////////////////////////////////
/*
for ( var i = 0; i < 10; i++) {
    console.log(i);
}


var names = ['John', 'Jane', 'Marry', 'Mark', 'Bob'];
*/

/*
for (var i = 0; i < 5; i++) {
    console.log(names[i]);
}
*/


// FOR LOOP
/*
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
*/

// WHILE LOOP
/*
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}
*/

/*
for (var i = 1; i <= names.length; i++) {
    console.log(names[i]);

    if (i === 3) {
        break;
    }
}


for (var i = 1; i <= names.length; i++) {
    if (i === 3) {
        continue;
    }
    
    console.log(names[i]);
}
*/







///////////////////////// CHALLANGE II /////////////////////////////////


function printFullAge(years) {
    var ages = [];    
    var fullAges = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
    }
    
    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log(`Person ${(i + 1)} is ${ages[i]} years old, and is of a full age.`);
            fullAges.push(true);
        } else {
            console.log(`Person ${(i + 1)} is ${ages[i]} years old, and is NOT of a full age.`);  
            fullAges.push(false);      
        }
    }

    return fullAges;
}

years = [1982, 1984, 1986, 1991, 2006];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
