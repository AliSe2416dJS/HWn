'use strict';

class PetShop {
    constructor () {
        this._petList = this._createPetList();
    }

    get cats () {
        let catList = this._petList.filter((pet) => pet.isCat());

        return catList;
    }

    get expensivePets () {
        let expensivePetList = [],
            averagePrice = 0;
            
        averagePrice = this._petList.reduce((sum, pet) => sum + pet.price, 0) / this._petList.length;
        expensivePetList = this._petList.filter((pet) => pet.price > averagePrice);
        console.log('Average price is', averagePrice);

        return expensivePetList;
    }

    get whiteOrFluffy () {
        let whiteAndFluffyList = [];

        whiteAndFluffyList = this._petList.filter((pet) => pet.isWhiteOrFluffy());

        return whiteAndFluffyList;
    }

    _createPetList () {
        let petList = [];

        petList.push(new Cat('Kitty', 8, 'White', 500));
        petList.push(new Cat('Tom', 2, 'Grey', 150));
        petList.push(new Cat('Barsik', 4, 'Striped', 400));
        petList.push(new Cat('Murzik', 7, 'Red', 600));
        petList.push(new Dog('Bingo', 'White', 400));
        petList.push(new Dog('Bob', 'Black', 300));
        petList.push(new Dog('Patrick', 'Red', 650));
        petList.push(new Hamster(2, 'White', 550));
        petList.push(new Hamster(6, 'Black', 160));
        petList.push(new Hamster(3, 'Spotted', 250));

        return petList;
    }
}


let shop1 = (function () {
    let petList = createPetList();
    
    function _getCats () {
        return petList.filter((pet) => pet.isCat()); // pet.isCat instead of (pet innstanceof Cat). Is it a better idea?
    }

    function _getExpensivePets () {
        let expensivePetList = [],
            averagePrice = 0;

        averagePrice = petList.reduce((sum, pet) => sum + pet.price, 0) / petList.length;
        expensivePetList = petList.filter((pet) => pet.price > averagePrice);
        console.log('Average price is', averagePrice);

        return expensivePetList;
    }

    function _getWhiteOrFluffy () {
        return petList.filter((pet) => pet.isWhiteOrFluffy());
    }

    function createPetList () {
        let petList = [];

        petList.push(new Cat('Kitty', 8, 'White', 500));
        petList.push(new Cat('Tom', 2, 'Grey', 150));
        petList.push(new Cat('Barsik', 4, 'Striped', 400));
        petList.push(new Cat('Murzik', 7, 'Red', 600));
        petList.push(new Dog('Bingo', 'White', 400));
        petList.push(new Dog('Bob', 'Black', 300));
        petList.push(new Dog('Patrick', 'Red', 650));
        petList.push(new Hamster(2, 'White', 550));
        petList.push(new Hamster(6, 'Black', 160));
        petList.push(new Hamster(3, 'Spotted', 250));

        return petList;
    }

    return {
        getCats: _getCats,
        getExpensivePets: _getExpensivePets,
        getWhiteOrFluffy: _getWhiteOrFluffy
    };
})();