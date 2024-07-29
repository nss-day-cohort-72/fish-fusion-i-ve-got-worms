const {mongerInventory} = require('./fishMonger.js');

// create function fishMenu that takes the argument of maximum price then 
//create variable itemForMenu that calls the function mongerInventory with maximum price argument.
const fishMenu = (maxPrice) => {
    const itemForMenu = mongerInventory(maxPrice);
    let menuHTML= `<h1>Menu</h1>\n<article class="menu">\n`;


    
    for (const fish of itemForMenu) {
        menuHTML += `   <h2> ${fish.species}</h2> \n`;
        menuHTML += `   <section class="menu__item">${fish.species} Soup</section>\n`;
        menuHTML += `   <section class="menu__item">${fish.species} Sandwich</section>\n`;
        menuHTML += `   <section class="menu__item">Grilled ${fish.species}</section>\n`;


        
    }
    menuHTML += `</article>`;
    return menuHTML;


}
console.log(fishMenu(5.00));
