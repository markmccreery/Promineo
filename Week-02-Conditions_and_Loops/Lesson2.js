//for loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('whatever is after the loop');

//i++ is an incremental that increases the value by 1 for every run

for (let i=0; i < 20; i++) {
    if (i % 2 == 0)
    console.log(i);
}

let names = ['Sam', 'Tom', 'Hillary'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
//while loops
let a = 110;

while(a < 10) {
    console.log(a);
    a++;
}
//do while loops
do {
    console.log(a);
} while (a < 10);

for (i in names) {
    console.log(names[i]);
}

for (name of names) {
    console.log(name);
}



