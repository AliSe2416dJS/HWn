'use strict';

function extend (Child, Parent) {
    var f = function () {};

    f.prototype = Parent.prototype;
    Child.prototype = new f();
}

var Pet = (function () {
    function Pet (color, price) {
        this.color = color;
        this.price = price;
    }

    Pet.prototype.isWhite = function () {
        return this.color === 'White';
    };

    Pet.prototype.isFluffy = function () {
        return undefined;
    }

    Pet.prototype.isWhiteOrFluffy = function () {
        return this.isWhite() || this.isFluffy()
    }

    return Pet;
})();

var Cat = (function () {
    function Cat (name, fluffy, color, price) {
        Pet.call(this, color, price);

        this.name = name;
        this.fluffy = fluffy;
    }

    extend(Cat, Pet);

    Cat.prototype.isFluffy = function () {
        return this.fluffy;
    }

    return Cat;
})();

var cat = new Cat('Kitty', true, 'red', 100);
console.log(cat);
console.log(cat.isWhiteOrFluffy());