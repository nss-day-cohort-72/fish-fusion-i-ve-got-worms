const { boatInventory } = require('./fishingBoat.js');

const mongerInventory = (maxPrice) => {
    const todaysFish = boatInventory();
    const fishPurchases = [];

    for (const fish of todaysFish) {
        if (fish.price <= 7.50 && fish.amount >= 10) {
            fishPurchases.push({
                species: fish.species,
                price: fish.price,
                amount: 10 // Buy exactly 10 of each qualifying fish
            });
        }
    }

    // Apply the chef's budget constraint
    const chef = fishPurchases.filter(fish => fish.price <= maxPrice);
    return chef;
};

//Chef price to input
let result = mongerInventory(4.00)
console.log (result)

module.exports = { mongerInventory };
