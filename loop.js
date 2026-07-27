//Print "Hi John" 5 Times Using for Loop
for (let i = 1; i <= 5; i++) {
    console.log("Hi John");
}

//Print 0 to 10 Using while Loop
let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

//Find the Square Numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

//Print Only Even Numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Find the Sum of Numbers from 0 to 100
let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
}

console.log("The sum of all numbers is", sum);

//Find Odd Numbers Between Two Numbers m and n
let m = 10;
let n = 30;

for (let i = m; i <= n; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//Create an Array of Four Favourite Fruits and Print It
let fruits = ["Apple", "Mango", "Orange", "Grapes"];

console.log(fruits);

//learn javascript
let str = "learn JavaScript";

for (let i = 0; i < str.length; i++) {
    console.log(str[i] + ",");
}

//Print the Triangle
for (let i = 1; i <= 6; i++) {
    console.log("#".repeat(i));
}

//pet program
for (let i = 1; i <= 45; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("PuppyPet");
    } else if (i % 3 === 0) {
        console.log("Puppy");
    } else if (i % 5 === 0) {
        console.log("Pet");
    } else {
        console.log(i);
    }
}
