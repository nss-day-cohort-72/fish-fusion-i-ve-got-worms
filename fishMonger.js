const {boatInventory} = require('./fishingBoat.js');


// create a variable (todaysFish)that takes in boatInventory and creates new array
//make a function that takes todaysFish  as a argument and returns a new array of objects.
// So loop through todaysFish and create if statement that makes sure iterations quantity is more or equal to 10 and 
//price is less than or equal to $7.50
const mongerInventory = () =>{
    const todaysFish = boatInventory();
    //console.log(todaysFish);
    const fishPurchases = [];
    for (const fish of todaysFish) {
        if (fish.price <= 7.50 && fish.amount >= 10) {
            fishPurchases.push(fish);
        }
        
    }
    return fishPurchases
}
console.log(mongerInventory());

