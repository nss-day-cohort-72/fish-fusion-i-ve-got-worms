const { mongerInventory } = require("./fishMonger.js");

const fishMenu = (maxPricePerFish) => {
  const itemForMenu = mongerInventory(maxPricePerFish);

  const menuItems = itemForMenu.map(fish => `
    <h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>
  `).join('');


  const menuHTML = `<h1>Menu</h1>\n<article class="menu">\n${menuItems}\n</article>`;
  return menuHTML;
};

console.log(fishMenu(9.0));

module.exports = { fishMenu };
