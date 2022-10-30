/* 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array. 
Print the result to the console. */
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

function myFunction() {
    let difference = (ages[ages.length - 1] - ages[0]);
return difference;
}
console.log(myFunction());

/*b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths). */
ages.push(21);
console.log(myFunction());

/*c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console. */
let total = 0;
ages.forEach(function(number) {
    total += number;
});
let averageAge = (total/ages.length);
console.log(averageAge);
    
    
/* 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. */

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

/* a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console. */

let length = names.map(function(element){
    return element.length;
});
let sum = length.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})
console.log(sum/names.length);

/* b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console. */
let listOfNames = names.join("," + " ");

console.log(String (listOfNames));

/* 3.	How do you access the last element of any array? 
This can be accessed by counting how many elements are in the array starting with 0 and calling it through the use of the array name and brackets.
i.e. names[5] would be used to access 'Bob.  You can also utilize something like array[array.length - 1] to also access it.
*/
/*4.	How do you access the first element of any array?
The first element in an array can be accessed by referencing the array and brackets with 0 within the brackets. 
ages[0] would access the number 3 for example. */
/*5.	Create a new array called nameLengths.
Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. */

let nameLengths = names.map(function(element){
    return element.length;
})
/* 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. */
let sumOfNameLengths = nameLengths.reduce(function(accumulator, currentValue){
    return accumulator += currentValue;
})
console.log(sumOfNameLengths);
/*7.	Write a function that takes two parameters, word and n, 
as arguments and returns the word concatenated to itself n number of times. */

function combine(word, n){
    return word.repeat(n);
}
console.log(combine('Hello', 3))
/* 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name 
(the full name should be the first and the last name separated by a space). */

function createFullName(firstName, lastName){
    return (firstName + " " + lastName);
}
console.log(createFullName('Anna', 'Kendrick'));
 /* 9.	Write a function that takes an array of numbers 
 and returns true if the sum of all the numbers in the array is greater than 100. */
 function over100(array){
    if (array.reduce(function(accumulator, currentValue){
        return accumulator += currentValue;}) > 100){
            return true;
        } else {
            return "the sum of the array was less than or equal to 100.";
        }
 }
 console.log(over100([19,72,44,1,100]));
 console.log(over100([88,11,0]));
/* 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array. */
function avgAry(array){
    return (array.reduce(function(accumulator, currentValue){
        return accumulator += currentValue;})/array.length);
}
console.log(avgAry([9,8,7,6,5]));
console.log(avgAry([11,22,33,44,55]));
/* 11.	Write a function that takes two arrays of numbers and returns true 
if the average of the elements in the first array is greater than the average of the elements in the second array. */
function isGreater(array1, array2){
    let sumOfArray1 = array1.reduce(function(accumulator, currentValue){
        return accumulator += currentValue;
    });
    let sumOfArray2 = array2.reduce(function(accumulator,currentValue){
        return accumulator += currentValue;
    });
    if ((sumOfArray1/array1.length) > (sumOfArray2/array2.length)){
        return true;
    } else {
        return "the average of Array1 is not greater than the average of Array2."
    }
    }
    console.log(isGreater([5,6,7,8,9],[5,4,3,2,1]));
    console.log(isGreater([1,1,1,1,1],[5,4,3,2,1]));
/* 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside = true && moneyInPocket >= 10.50) {
        return true;
    } else (isHotOutside != true || moneyInPocket < 10.50); {
        return "I'm not going to buy a drink.";}
    }

console.log(willBuyDrink(true, 11.50));
console.log(willBuyDrink(false, 11.50));
console.log(willBuyDrink(true, 9.50));
/* 13.	Create a function of your own that solves a problem.
 In comments, write what the function does and why you created it. */

 /*I created this function that once it counts up to a certain integer, the speaker 
 will proclaim "ready or not, here I come!".  I was trying to think of a fun exercise to try and I thought this would be cute.
*/

function hideAndSeek(number){
    for (let i = number; i <= 20; i++){
        console.log(i + "...")}
return (" ready or not, here I come!");
    }
console.log(hideAndSeek(0));
console.log(hideAndSeek(10));
console.log(hideAndSeek(20));
