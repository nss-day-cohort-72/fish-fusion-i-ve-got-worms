const { boatInventory } = require('./fishingBoat.js');

//declaring mongerInventory function that takes in the maxPrice as an argument
// const mongerInventory = (maxPrice) => {
//     const todaysFish = boatInventory();
//     //creating variable named fishPurchases and defining it as an empty array
//     const fishPurchases = [];
//     //iterating through all of the array of objects and returning everything that is less or equal in price than 7.50 and has an amount greater than or equal to 10
//     for (const fish of todaysFish) {
//         if (fish.price <= 7.50 && fish.amount >= 10) {
//             fishPurchases.push(fish);
//         }
        
//     }
    
//     //filter version of the above but allowing the chef to set a maximum price that will given later
//     const chef = fishPurchases.filter(fish => fish.price <= maxPrice );

//     return chef;
// }

//declaring mongerInventory function that takes in the maxPrice as an argument
const mongerInventory = (maxPrice) => {
    const todaysFish = boatInventory();
    //declaring chef variable as an empty array
    const chef = [];

    for (const fish of todaysFish) {
        if (fish.price <= 7.50 && fish.amount >= 10 && fish.price <= maxPrice) {
            //This is if the chef buys %50 of the inventory
            fish.amount = Math.floor(fish.amount / 2);
            //pushing the final result to the chef array
            chef.push(fish);
        }
    }
    //returning the chef array
    return chef;
};

module.exports = { mongerInventory }