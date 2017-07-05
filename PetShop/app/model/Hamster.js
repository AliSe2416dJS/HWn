'use strict';

class Hamster extends Pet {
    constructor (isFluffy, color, price) {
        super(color, price);
        this.isFluffy = isFluffy;
    }
}