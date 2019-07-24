// Lesson 2 - Template Literals
let word1 = 'Iwona';
let word2 = 'Szerszen';

const fullNameES5 = 'ES5: ' + ' ' + word1 + ' ' + word2;
console.log(fullNameES5);

const fullNameES6 = `ES6: ${word1} ${word2}`;
console.log(fullNameES6);

let exampleES5 = 'Hello \n' + 'World!'; 
console.log(exampleES5);

let exampleES6 = `${word1}
${word2}`;
console.log(exampleES6);


// Lesson 3 - Destructuring Objects
const personalInformation = {
	firstName: 'Iwona',
	lastName: 'Szerszen',
	city: 'Krakow',
	voivodeship: 'Malopolska',
	zipCode: '30-392'
};

const {firstName, lastName} = personalInformation;
console.log(`${firstName} ${lastName}`);


// Lesson 4 - Destructuring Arrays
let [firstArrayName, middleArrayName] = ['Iwona', 'Anna', 'Beata'];
console.log(middleArrayName);

middleArrayName = 'Ewa';
console.log(middleArrayName);


// Lesson 5 - Object Literal
function addressMarker(city, state) {

	const newAddress = {city, state};

	/*
	is the same as
	const newAddress = {
		city: city,
		state: state
	};
	*/

	console.log(newAddress);
}

addressMarker('Austin', 'Texas');


// Lesson 6 - Object Literal (Challenge)
function addressMarkerMix(address) {

	const {city, state} = address;

	/*
	const newAddress = {
		city: address.city,
		state: address.state,
		country: 'United States'
	};
	*/

	const newAddress = {
		city, 
		state, 
		country: 'United States'
	};

	console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMarkerMix({city: 'Austin', state: 'Texas'});


// Lesson 7 For of Loop
let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
	total +=income;
}

console.log(total);


let fullName = 'Iwona Joanna Szerszen';
let fullNameCharArray = [];

for (const char of fullName) {
	fullNameCharArray.push(char);
}

console.log(fullNameCharArray);


// Lesson 9 Spread Operator
let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1]


console.log(example2);


// Lesson 10 Rest Operator
function add(...nums) {

	console.log(nums);
}

add(4, 5, 8, 12);
