'use strict';

document.addEventListener('DOMContentLoaded', init, false);

function init () {
    let //shop = new PetShop(),
        view = new PetShopView();

//    view.showPets('Cats', shop.cats);
//    view.showPets('Expensive pets', shop.expensivePets);
//    view.showPets('White or fluffy pets', shop.whiteOrFluffy);

    view.showPets('Cats', Shop1.getCats());
    view.showPets('Expensive pets', Shop1.getExpensivePets());
    view.showPets('White or fluffy pets', Shop1.getWhiteOrFluffy());   
}