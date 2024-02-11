const peopleArrayWithObjects = [
    {
        id: 1,
        name: "Alice",
        age: 28,
        email: "alice@example.com",
        country: "USA",
        hobbies: ["Reading", "Hiking", "Photography", "Swimming"]
    },
    {
        id: 2,
        name: "Bob",
        age: 35,
        email: "bob@example.com",
        country: "Canada",
        hobbies: ["Cooking", "Playing guitar", "Gardening", "Traveling"]
    },
    {
        id: 3,
        name: "Charlie",
        age: 22,
        email: "charlie@example.com",
        country: "UK",
        hobbies: ["Painting", "Skiing", "Music", "Cycling"]
    },
    {
        id: 4,
        name: "David",
        age: 40,
        email: "david@example.com",
        country: "Australia",
        hobbies: ["Swimming", "Fishing", "Reading"]
    },
    {
        id: 5,
        name: "Eva",
        age: 32,
        email: "eva@example.com",
        country: "Germany",
        hobbies: ["Skiing", "Playing Guitar", "Photography", "Cooking"]
    }
]


//! 1.

/* console.log the array */
console.log(peopleArrayWithObjects)

//! 1.1:

/* create variables for firstPerson (first person object in the array) and lastPerson (last person object in the array) for peopleArrayWithObjects: */
const firstPerson = peopleArrayWithObjects[0];
const lastPerson = peopleArrayWithObjects[peopleArrayWithObjects.length - 1];
//! 1.2

/* console.log all the objects of the first and last persons using Object.entries. Expected output: 
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
*/
console.log(Object.entries(firstPerson));
console.log(Object.entries(lastPerson));

//! 1.3
/* console.log the hobbies of the first person using Object.entries (tip: this is unnecessary code, but do it just to see the difference with what needs to be done later). Expected output is to be an array with 4 elements */
//console.log(Object.entries.hobbies(firstPerson)) wrong way 
console.log(Object.entries(firstPerson.hobbies));
//! 1.4

/* Use .map instead of Object.entries to achieve the same result in the console as in 1.2: */
const firstPersonEntries = Object.keys(firstPerson).map(key => [key, firstPerson[key]]);
console.log(firstPersonEntries)

const lastPersonEntries = Object.keys(lastPerson).map(key => [key, lastPerson[key]]);
console.log(lastPersonEntries)
//! 1.5.

/* Use .filter and .includes to find out which hobbies are common between firstPerson and lastPerson. Expected output is an array with common hobbies */
const fisrtPersonHobbies = firstPerson.hobbies;
const lastPersonHobbies = lastPerson.hobbies;

const commonHobbies = fisrtPersonHobbies.filter(hobbi => lastPersonHobbies.includes(hobbi))

console.log(commonHobbies)
//! 1.6.

/* Use .map to display all the persons with their information on their page with the DOM. It should also show what hobbies they have in common. Choose whether to use createElement or innerHTML. (Great if you do it both ways, comment out the unused code. Remember to use defer if the script tag is in the head!) */
const container = document.getElementById("div-container")

peopleArrayWithObjects.forEach(person => {
    const wrapperDiv = document.createElement("div");

    wrapperDiv.innerHTML = `
    <h2>${person.name}</h2>
    <p>${person.age}</p>
    <p>${person.email}</p>
    <p>${person.country}</p>
    <p>${person.hobbies.join(", ")}</p>
    `;

    const commonHobbiesTwo = person.hobbies.filter(hobby => firstPerson.hobbies.includes(hobby));

    const commonHobbiesP = document.createElement("p");
    commonHobbiesP.textContent = `Common Hobbies: ${commonHobbiesTwo.join(", ")}`;

    wrapperDiv.appendChild(commonHobbiesP);
    container.appendChild(wrapperDiv);
});

//! 1.7

/* Use .filter to find all persons who have the same hobby as firstPerson. Display this with the DOM */
const divContainer = document.getElementById("container");
 const commonHobby = firstPerson.hobbies[0];
 //får bare opp ein av personene som har  felles hobby, usikker på hvorfor  .hobbies[0,1,2,3,4] virket ikke heller men kan få opp Eva invfo hivis heg skifteer ut 0 med 2 men da forsvinner David
 const personWithCommonHobby = peopleArrayWithObjects.filter(person => person.hobbies.includes(commonHobby));

 personWithCommonHobby.forEach(person => {
    const personDiv = document.createElement("div");

    personDiv.innerHTML = `
    <h2>${person.name}</h2>
    <p>${person.age}</p>
    <p>${person.email}</p>
    <p>${person.country}</p>
    <p>${person.hobbies.join(", ")}</p>
    `;
    
    divContainer.appendChild(personDiv);
 });
//! 2

/* Generate a random array with 10 random numbers between 1 and 100. console.log the array. */
 function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 
 //randomNumber()
 const array = [];
 for (let i = 0; i<10; i++){
     array.push(randomNumber(1,100));
    }
    console.log(array)
    document.getElementById('originalArray').textContent = "Original Array: " + array.join(', ');
//! 2.1

/* Separate odd and even numbers in the array you created in task 2 into two new arrays. console.log the new arrays. */
const oddNumber = [];
const evenNumber = [];

array.forEach(number => {
    if (number % 2 === 0) {
        evenNumber.push(number);
    } else {
        oddNumber.push(number);
    }
});

console.log(oddNumber);
console.log(evenNumber);
document.getElementById('oddNumbers').textContent = "Odd Numbers: " + oddNumber.join(', ');
document.getElementById('evenNumbers').textContent = "Even Numbers: " + evenNumber.join(', ');


//! 2.2

/* Write a function that finds the largest number in the different arrays. Use a parameter so that the same function can be used on both arrays. Tips: Math.max() */

function largestNumber(oddNumber, evenNumber) {
    if (array.length === 0) {
        return "Empty array";
    }
    return Math.max(...array);
}

document.getElementById('largestOdd').textContent = "Largest Odd Number: " + largestNumber(oddNumbers);
document.getElementById('largestEven').textContent = "Largest Even Number: " + largestNumber(evenNumbers);

//! 2.3.

/* Write a function that adds up all the numbers in the different arrays. So the sum of odd numbers in one result and the sum of even numbers in another result. Use a parameter in the function so that the same function can be used on both arrays. console.log the results. */

function sumNumbers(oddNumber, evenNumber) {
    return array.reduce((acc, curr) => acc + curr, 0);
}
document.getElementById('sumOdd').textContent = "Sum of Odd Numbers: " + sumNumbers(oddNumbers);
document.getElementById('sumEven').textContent = "Sum of Even Numbers: " + sumNumbers(evenNumbers);
//! 2.4
function compareSums(array1, array2) {
    const sum1 = sumNumbers(array1);
    const sum2 = sumNumbers(array2);
    if (sum1 > sum2) {
        return "Odd Numbers have a larger sum.";
    } else if (sum1 < sum2) {
        return "Even Numbers have a larger sum.";
    } else {
        return "Both arrays have equal sums.";
    }
}
document.getElementById('comparison').textContent = compareSums(oddNumbers, evenNumbers);

/* Create a function that adds up the numbers in different arrays. Use 2 parameters to be able to use 2 different arrays (the odds and evens arrays you created earlier). Write an if-else statement that console logs which of the two arrays has the largest sum. Remember an else statement that says if both are equal (very unlikely) */

//! 2.5:

/* Display the results from all steps in task 2 (2, 2.1, 2.2, 2.3, 2.4) with DOM in a good way */
