'use strict';

class PetShop {
    constructor () {
        let petList = [];

        petList.push(new Cat('Kitty', true, 'White', 500));
        petList.push(new Cat('Tom', false, 'Grey', 150));
        petList.push(new Cat('Barsik', false, 'Striped', 400));
        petList.push(new Cat('Murzik',true, 'Red', 600));
        petList.push(new Dog('Bingo', 'White', 400));
        petList.push(new Dog('Bob', 'Black', 300));
        petList.push(new Dog('Patrick', 'Red', 650));
        petList.push(new Hamster(false, 'White', 550));
        petList.push(new Hamster(true, 'Black', 160));
        petList.push(new Hamster(false, 'Spotted', 250));

        this.petList = petList;
    }

    getCats () {
        let catList = this.petList.filter((pet) => pet instanceof Cat);

        return catList;
    };

    getExpensivePets () {
        let expensivePetList = [],
            averagePrice = 0;
            

        this.petList.forEach((pet) => averagePrice += pet.price);
        averagePrice /= this.petList.length;
        expensivePetList = this.petList.filter((pet) => pet.price > averagePrice);
        console.log(averagePrice);

        return expensivePetList;
    };

    getWhiteAndFluffy () {
        let whiteAndFluffyList = [];

        whiteAndFluffyList = this.petList.filter((pet) => pet.color === 'White' || pet.isFluffy);
        console.log(whiteAndFluffyList);
        return whiteAndFluffyList;
    };
}

/*
function PetShop () {
    let petList = [];

    petList.push(new Cat('Kitty', true, 'white', 500));
    petList.push(new Cat('Tom', false, 'grey', 450));
    petList.push(new Cat('Barsik', false, 'striped', 400));
    petList.push(new Cat('Murzik',true, 'red', 600));
    petList.push(new Dog('Bingo', 'white', 400));
    petList.push(new Dog('Bob', 'black', 300));
    petList.push(new Dog('Patrick', red, 650));
    petList.push(new Hamster(true, 'white', 150));
    petList.push(new Hamster(true, 'black', 160));
    petList.push(new Hamster(false, 'spotted', 250));
    
    this. petList = petList;

    this.getCats = function () {
        let catList = this.petList.filter((pet) => pet instanceof Cat);

        return catList;
    };

    this.getExpensivePets = function () {
        let expensivePetList = [],
            averagePrice = 0;
            

        this.petList.forEach((pet) => averagePrice += pet.price);
        averagePrice /= petList.length;
        expensivePetList = this.petList.filter((pet) => pet.price > averagePrice);

        return expensivePetList;
    };

    this.getWhiteAndFluffy = function () {
        let whiteAndFluffyList = [];

        whiteAndFluffyList = this.petList.filter((pet) => pet.isFluffy === true || pet.color === 'white');

        return whiteAndFluffyList;
    };

    return this;
}*/