const { boatInventory } = require('./fishingBoat.js');

const mongerInventory = (maxPrice) => {
    const todaysFish = boatInventory();
    const fishPurchases = [];

    for (const fish of todaysFish) {
        if (fish.price <= 7.50 && fish.amount >= 10) {
            fishPurchases.push(fish);
        }
        
    }
    
    const chef = fishPurchases.filter(fish => fish.price <= maxPrice );

    return chef;
}

let result = mongerInventory(8.00);
console.log(result);

