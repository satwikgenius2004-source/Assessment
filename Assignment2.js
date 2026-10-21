const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter bill amount: $", function (billInput) {
    rl.question("Enter tip percentage: ", function (tipInput) {

        //  Convert string inputs into numbers
        const billAmount = Number(billInput);
        const tipPercentage = Number(tipInput);

        //  Calculate the tip
        const tip = billAmount * tipPercentage / 100;

        // Calculate total using an assignment operator
        let totalAmount = billAmount;
        totalAmount += tip;

        //  Display the result
        console.log("\n--- Bill Summary ---");
        console.log(`Subtotal: $${billAmount}`);
        console.log(`Tip Percentage: ${tipPercentage}%`);
        console.log(`Calculated Tip: $${tip}`);
        console.log(`Total Amount to Pay: $${totalAmount}`);

        rl.close();
    });
});