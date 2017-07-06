'use strict';

class Cat extends Pet {
    constructor (name, fluffy, color, price) {
        super(color, price);

        this._name = name;
        this._fluffy = fluffy;
    }

    get name () {
        return this._name;
    }

    isFluffy () {
        return this._fluffy;
    }

    isCat () {
        return true;
    }

    toJSON () {
        return {
            name: this._name,
            fluffy: this._fluffy,
            color:this._color,
            price: this._price
        }
    }
}