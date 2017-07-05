'use strict';

class Pet {
    constructor (color, price) {
        this.color = color;
        this.price = price;
    }

    get isWhite () {
        return this.color === 'White';
    }
}