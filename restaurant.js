const { mongerInventory } = require("./fishMonger.js");


//declaring the fishMenu variable and passing in the maxPricePerFish argument
const fishMenu = (maxPricePerFish) => {
  const itemForMenu = mongerInventory(maxPricePerFish);

  //iterating through the array of objects returned from the fishMonger.js and placing them in proper HTML format
  const menuItems = itemForMenu.map(fish => `
    <h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>
  `).join('');


  const menuHTML = `<h1>Menu</h1>\n<article class="menu">\n${menuItems}\n</article>`;
  return menuHTML;
};

module.exports = { fishMenu };
