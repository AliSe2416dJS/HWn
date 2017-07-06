'use strict';

class Dog extends Pet {
    constructor (name, color, price) {
        super(color, price);
        
        this._name = name;
    }

    get name () {
        return this._name;
    }

    isDog () {
        return true;
    }
}