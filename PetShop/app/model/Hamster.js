'use strict';

class Hamster extends Pet {
    constructor (fluffy, color, price) {
        super(color, price);
        
        this._fluffy = fluffy;
    }

    isFluffy () {
        return this._fluffy > 3;
    }

    isHamster () {
        return true;
    }
}