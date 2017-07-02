'use strict';

document.addEventListener('DOMContentLoaded', init, false);

function init () {
    let shop = new PetShop(),
        view = new PetShopView();

    view.showCats(shop.getCats());
    view.showExpensivePets(shop.getExpensivePets());
    view.showWhiteAndFluffy(shop.getWhiteAndFluffy());
}