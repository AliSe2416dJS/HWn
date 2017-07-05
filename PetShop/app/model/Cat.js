'use strict';

class Cat extends Pet {
    constructor (name, isFluffy, color, price) {
        super(color, price);
        this.name = name;
        this.isFluffy = isFluffy;
    }
}