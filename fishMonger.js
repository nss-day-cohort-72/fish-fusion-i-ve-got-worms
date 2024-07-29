const { boatInventory } = require('./fishingBoat.js');

//declaring mongerInventory function that takes in the maxPrice as an argument
const mongerInventory = (maxPrice) => {
    const todaysFish = boatInventory();
    //creating variable named fishPurchases and defining it as an empty array
    const fishPurchases = [];
    //iterating through all of the array of objects and returning everything that is less or equal in price than 7.50 and has an amount greater than or equal to 10
    for (const fish of todaysFish) {
        if (fish.price <= 7.50 && fish.amount >= 10) {
            fishPurchases.push(fish);
        }
        
    }
    
    //filter version of the above but allowing the chef to set a maximum price that will given later
    const chef = fishPurchases.filter(fish => fish.price <= maxPrice );

    return chef;
}

module.exports = { mongerInventory }