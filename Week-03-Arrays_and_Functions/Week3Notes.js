 //Arrays; positions will start at position 0 - 1 i.e. line one = 0
//let customerNames = [];
//customerNames.push('Sam Smith');
//customerNames.push('Tommy Guns');

//for (let i = 0; i < customerNames.length; i++) {
//console.log(customerNames[i]);
//}

//Functions; modularized code so whole parts of code aren't constantly repeated
//function myFunction() {
//    for (let i = 0; i < 100; i++) {
//        console.log(i);
//    }
//}

//the function has to called like below in order to be used
//myFunction(); 

//the parameters are what are in the parenthesis, the code in the curly braces will run whenever the function is called
//function createFullName(firstName, lastName) {
//    console.log(firstName + ' ' + lastName);
//}
//these are called arguments
//createFullName('Tom', 'Sawyer');
//createFullName('Jane','Doe');

//return values cancel out functions

//let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
//let lengths = names.map(function(element) {
//    return element.length;
//});
//console.log(lengths);  

//let sum = lengths.reduce(function(accumulator, currentValue) {
//    return accumulator + currentValue; 
//}, 10);
//console.log(sum);

//names.forEach(function(element) {
  //  console.log(element);
//});

//let evens = names.filter(function(element){
  //  return element.length % 2 == 0;
//});
//console.log(evens);


//splice removes arguments from an array; the first position is where in the chain to start and the second position is how many arguments to remove
//let removedElement = names.splice(0,2);
//console.log(removedElement);

//Objects - has properties that tie with the variable
let dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Mulan',
    printDVDName : function() {
        console.log(dvdName);
    }
};

//dot notation
console.log(dvdPlayer.depth);
dvdPlayer.printDVDName