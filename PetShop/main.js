'use strict';

document.addEventListener('DOMContentLoaded', init, false);

function init () {
    let shop = new PetShop(),
        view = new PetShopView();

    view.showPets('Cats', shop.cats);
    view.showPets('Expensive pets', shop.expensivePets);
    view.showPets('White or fluffy pets', shop.whiteOrFluffy);
}