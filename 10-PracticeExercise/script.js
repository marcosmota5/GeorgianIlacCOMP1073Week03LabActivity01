// ### Step 1 ###

// Creates the array with grades
const grades = [85, 97, 44, 37, 76, 60];

// Logs the array
console.log(grades);

// Creates a variable that that will hold the sum of all grades
let sumOfGrades = 0;

// Iterates through each grade inside the grades array in order to get the sum
grades.forEach(grade => {
    sumOfGrades += grade;
});

// Get the average of grades by dividing the sum by the length of the array
let averageOfGrades = sumOfGrades / grades.length;

// Logs the average
console.log(averageOfGrades);

// ### Step 2 ###

// Creates the array with prices
const prices = [250, 645, 300, 900, 50];

// Logs the array
console.log(prices);

// Iterates through each price and change it to have a discount of 10%
for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * 0.9;
}

// Logs the again
console.log(prices);

// ### Step 3 ###

// Creates the array with companies
const companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Removes the first company
companies.shift();

// Replaces the "Uber" company with "Ola"
companies[companies.indexOf("Uber")] = "Ola";

// Add "Amazon" at the end
companies.push("Amazon");

// Logs the array
console.log(companies);