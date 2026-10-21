console.log("-- Function Architecture and Scope --");

//  Standard function with default parameters
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

console.log(
    "Standard Function Area (Default 5x4):",
    rectangleArea()
);


// Arrow function with parameters
const calculateArea = (length = 5, width = 4) => {
    return length * width;
};

console.log(
    "Arrow Function Area (Custom 10x3):",
    calculateArea(10, 3)
);


// Block scope demonstration
{
    let blockVar = "I am inside the block";
    console.log(blockVar);
}

// Accessing blockVar outside its block
try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)");
}