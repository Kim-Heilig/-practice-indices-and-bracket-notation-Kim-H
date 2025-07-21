
// Using Arrays | Lesson 1 - Practice: Indices and Bracket Notation
// Instructions
// You are managing a library system where books and movies are stored in a 2D
// array, with each row representing a shelf, and each column representing an item
// on that shelf.
// Make sure to write the code for each task using only bracket notation.

// Task 1: Create a multi-dimensional array with nine books and/or movies of your
// choice.

console.log("Task 1 - Create a multi-dimensional array with movies books:");

let movieArray = [["The Green Mile", "Life is Beautiful", "Parasite"], ["Insideous", "Dead Poets Society", "The Shawshank Redemption"], ["Everything Everywhere All at Once", "Shutter Island", "The Grand Budapest Hotel"]];

console.log(movieArray);

// Task 2: Access and log all the elements in the array using bracket notation with
// numbers.
console.log("Task 2 - Log all the Elements in the array:");
console.log("1st Movie: ", movieArray[0][0]);
console.log("2nd Movie: ", movieArray[0][1]);
console.log("3rd Movie: ", movieArray[0][2]);
console.log("4th Movie: ", movieArray[1][0]);
console.log("5th Movie: ", movieArray[1][1]);
console.log("6th Movie: ", movieArray[1][2]);
console.log("7th Movie: ", movieArray[2][0]);
console.log("8th Movie: ", movieArray[2][1]);
console.log("9th Movie: ", movieArray[2][2]);

// Task 3: Access and log all the elements in the array using bracket notation with
// variables as indices. Use the variables row and item.
let row;
let item;


console.log("Task 3 - Log all the Elements in the with variables as indices:");

row = 0;
item = 0;

console.log("1st Movie: ", movieArray[row][item]);
row = 0;
item = 1;

console.log("2nd Movie: ", movieArray[row][item]);
row = 0;
item = 2;
console.log("3rd Movie: ", movieArray[row][item]);
row = 1;
item = 0;
console.log("4th Movie: ", movieArray[row][item]);
row = 1;
item = 1;
console.log("5th Movie: ", movieArray[row][item]);
row = 1;
item = 2;
console.log("6th Movie: ", movieArray[row][item]);
row = 2;
item = 0;
console.log("7th Movie: ", movieArray[row][item]);
row = 2;
item = 1;
console.log("8th Movie: ", movieArray[row][item]);
row = 2;
item = 2;
console.log("9th Movie: ", movieArray[row][item]);

// Task 4: Write a loop that prints all the items on the second shelf.

console.log("Task 4 - Log all the items on the second shelf using a loop:");


for (let i = 0; i <= 2; i ++){
  console.log(movieArray[1][i]);
}