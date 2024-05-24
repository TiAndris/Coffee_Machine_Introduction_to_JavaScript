// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
//const input = require('sync-input')
// Import sync-input for user input
const input = require('sync-input');

// Constants for base ingredients for one cup
let BASE_WATER = 400;
let BASE_MILK = 540;
let BASE_COFFEE_BEANS = 120;
let BASE_CUPS = 9;
let BASE_MONEY = 550;


// repeatedly programm flow
function coffeeMachine(){
    while (Input !== "exit"){
        Input()
    }
    console.log("exit")
}

function Input(){
    console.log("Write action (buy, fill, take, remaining, exit)): ")
    const action = input();

    if (action === "buy"){
        Buy()
    }
    if (action === "fill"){
        Fill()
    }
    if (action === "take"){
        Take()
    }
    if (action === "remaining"){
        MachineHas();
    }
    if (action === "exit"){
        return "exit";
    }
}


function MachineHas(){
    console.log()
    console.log("The coffee machine has:\n" +
        + BASE_WATER + " ml of water\n" +
        + BASE_MILK + " ml of milk\n" +
        + BASE_COFFEE_BEANS + " g of coffee beans\n" +
        + BASE_CUPS + " disposable cups\n" +
        "$" + BASE_MONEY + " of money")
    console.log()
}

function Fill(){
    console.log()
    function promptUser(message) {
        console.log(message);
        return parseInt(input());
    }

    BASE_WATER += promptUser("Write how many ml of water you want to add:");
    BASE_MILK += promptUser("Write how many ml of milk you want to add");
    BASE_COFFEE_BEANS += promptUser("Write how many grams of coffee beans you want to add");
    BASE_CUPS += promptUser('Write how many disposable cups you want to add: ');

    console.log()
}

function Take() {
    console.log()
    console.log("I gave you $" + BASE_MONEY)
    BASE_MONEY = 0;
    console.log()
}

function Buy() {
    console.log()
    console.log("What do you want to buy? espresso, latte, cappuccino:")
    const coffee = input();
    if (coffee === "espresso"){
        Expresso()
        if(checkResources()!== "I have enough resources, making you a coffee!"){
            checkResources();
            AddExpresso();
        } else {
            checkResources();
        }
    }
    if (coffee === "latte"){
        Latte()
        if(checkResources()!== "I have enough resources, making you a coffee!"){
            checkResources();
            AddLatte();
        } else {
            checkResources();
        }
    }
    if (coffee === "cappuccino"){
        Cappuccino()
        if(checkResources()!== "I have enough resources, making you a coffee!"){
            checkResources();
            AddCappuccino();
        } else {
            checkResources();
        }
    }
    console.log()
}

function checkResources(){
    if (BASE_WATER < 0){
        return "Sorry, not enough water!"
    }
    if (BASE_MILK < 0){
        return "Sorry, not enough milk!"
    }
    if (BASE_COFFEE_BEANS < 0){
        return "Sorry, not enough coffee beans!"
    }
    if (BASE_CUPS < 0){
        return "Sorry, not enough cups!"
    }
    return "I have enough resources, making you a coffee!"
}

function Expresso() {
    BASE_MONEY += 4;
    BASE_CUPS -= 1;
    BASE_MILK -= 0;
    BASE_WATER -= 250;
    BASE_COFFEE_BEANS -= 16;
}

function AddExpresso() {
    BASE_MONEY -= 4;
    BASE_CUPS += 1;
    BASE_MILK += 0;
    BASE_WATER += 250;
    BASE_COFFEE_BEANS += 16;
}

function Latte() {
    BASE_MONEY += 7;
    BASE_CUPS -= 1;
    BASE_MILK -= 75;
    BASE_WATER -= 350;
    BASE_COFFEE_BEANS -= 20;
}

function AddLatte() {
    BASE_MONEY -= 7;
    BASE_CUPS += 1;
    BASE_MILK += 75;
    BASE_WATER += 350;
    BASE_COFFEE_BEANS += 20;
}

function Cappuccino() {
    BASE_MONEY += 6;
    BASE_CUPS -= 1;
    BASE_MILK -= 100;
    BASE_WATER -= 200;
    BASE_COFFEE_BEANS -= 12;
}

function AddCappuccino() {
    BASE_MONEY -= 6;
    BASE_CUPS += 1;
    BASE_MILK += 100;
    BASE_WATER += 200;
    BASE_COFFEE_BEANS += 12;
}

coffeeMachine()

// Function to calculate the ingredients for a given number of cups
// Function to calculate the maximum number of cups that can be made with the provided ingredients
// function calculateMaxCups() {
//     const waterCups = Math.floor(waterInput / BASE_WATER);
//     const milkCups = Math.floor(milkInput / BASE_MILK);
//     const beanCups = Math.floor(beansInput / BASE_COFFEE_BEANS);
//     return Math.min(waterCups, milkCups, beanCups);
// }
//
// const maxCups = calculateMaxCups();
// // Log results based on the calculated ingredients
// function logResult() {
//     if (maxCups === cupsInput) {
//         console.log("Yes, I can make that amount of coffee");
//     } else if (maxCups > cupsInput) {
//         console.log(`Yes, I can make that amount of coffee (and even ${maxCups - cupsInput} more than that)`);
//     } else {
//         console.log(`No, I can make only ${maxCups} cups of coffee`);
//     }
// }
//
// logResult();


// // Display the required ingredients
// console.log(`For ${cupsInput} cups of coffee you will need:`);
// console.log(`${ingredients.water}ml of water`);
// console.log(`${ingredients.milk}ml of milk`);
// console.log(`${ingredients.coffeeBeans}g of coffee beans`);