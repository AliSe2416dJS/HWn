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

    get cats () {
        let catList = this.petList.filter((pet) => pet instanceof Cat);

        return catList;
    }

    get expensivePets () {
        let expensivePetList = [],
            averagePrice = 0;
            
        this.petList.forEach((pet) => averagePrice += pet.price);
        averagePrice /= this.petList.length;
        expensivePetList = this.petList.filter((pet) => pet.price > averagePrice);
        console.log('Average price is', averagePrice);

        return expensivePetList;
    }

    get whiteOrFluffy () {
        let whiteAndFluffyList = [];

        whiteAndFluffyList = this.petList.filter((pet) => pet.color === 'White' || pet.isFluffy);

        return whiteAndFluffyList;
    }
}