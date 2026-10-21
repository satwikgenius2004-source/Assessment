console.log("-- Multiplication Table of 5 --");

//  for loop
for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


console.log("\n-- First number > 10 divisible by 6 --");

//  while loop with break
let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log("Found:", num);
        break;
    }
    num++;
}


console.log("\n-- do...while with continue --");

//  Skip numbers using continue
let i = 0;

do {
    i++;

    if (i === 3) {
        continue;
    }

    console.log(i);

} while (i < 5);