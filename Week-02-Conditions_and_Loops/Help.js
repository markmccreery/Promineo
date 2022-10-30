/*function createFullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
*/

const fullName = (firstName,lastName) => firstName + " " + lastName;
console.log(fullName('Amy', 'Smith'));

  

/*function doubleNumber(number) {
    return number * 2;
  }
*/
const timesTwo = (number) => (number * 2); 
console.log(timesTwo(6));
console.log(timesTwo(84));

  /*function getEvenNumbers(array) {
    let evenNumbers = [];
    for (let i of array) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  } */

  /*const onlyEven = (array) => {
    let evenNumbers = [];
    for (let i of array) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    } return evenNumbers;
  }
console.log(onlyEven([2,3,4,6,8,9])); */

/*The product owner on your development team believes they've seen a pattern as to which customers 
purchase the most socks. To verify, you've been asked to write a function that processes an array of customer objects 
and return a new array that contains only customers that match ANY of the following criteria:*/

/*name starts with a 'C' (upper or lowercase)
address contains no undefined fields
the city is Peoria and the state is AZ
membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too
The array of customer objects will have the following schema:*/

/*const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    {
        name: 'Ashley',
        address: {
            street: '1832 Jamison Way',
            city: 'Peoria',
            zip: '85383',
            state: 'AZ'
        },
        membershipLevel: "SILVER",
        age: 25
    },
    {
        name: 'Chris',
        address: {
            street: 
            city: 'Las Vegas',
            zip: '89108',
            state: 'NV'
        },
        membershipLevel: "PLATINUM",
        age: 28
    }
];
*/
/* Note: The solution to this problem does not require the use of callbacks. 
You will also need to use dot notation to access the properties. For example, customers[0].name would return "Sam". */

const mostSocks = (array) => {
    let customerList = [];
    for (let i = 0; i < array.length; i++){
    if (array[i].name.charAt(0) == 'c' || array[i].name.charAt(0) == 'C'){
        customerList.push(array[i]);
    } else if (array[i].address.street == !undefined && array[i].address.city == !undefined && array[i].address.zip == !undefined && array[i].address.state == !undefined){
         customerList.push(array[i]);
    } else if (array[i].address.city === "Peoria" && array[i].address.state === "AZ"){
         customerList.push(array[i]);
    } else if (array[i].membershipLevel == "GOLD" || array[i].membershipLevel == "PLATINUM"){
        customerList.push(array[i]);
    } else if (array[i].membershipLevel == "SILVER" && array[i].age < 29){
         customerList.push(array[i]);
    }
} return console.log(customerList);
}
mostSocks([{
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    {
        name: 'Ashley',
        address: {
            street: '1832 Jamison Way',
            city: 'Peoria',
            zip: '85383',
            state: 'AZ'
        },
        membershipLevel: "SILVER",
        age: 25
    },
    {
        name: 'Chris',
        address: {
            street: ' ',
            city: 'Las Vegas',
            zip: '89108',
            state: 'NV'
        },
        membershipLevel: "PLATINUM",
        age: 28
    }]
)

;

