'use strict';

class Pet {
    constructor (color, price) {
        this._color = color;
        this._price = price;
    }

    get color () {
        return this._color;
    }

    get price () {
        return this._price;
    }

    isWhite () {
        return this._color === 'White';
    }

    isFluffy () {
        return undefined;
    }

    isWhiteOrFluffy () {
        return this.isWhite() || this.isFluffy();
    }

    isCat () {
        return false;
    }

    isDog () {
        return false;
    }

    isHamster () {
        return false;
    }
}