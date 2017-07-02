'use strict';

function PetShopView () {
    let container = document.querySelector('.PetShop');

    this.showCats = function (catList) {
        let listContainer = document.createElement('div'),
            listName = document.createElement('p'),
            ul = document.createElement('ul');

        catList.forEach((cat) => {
            let li = document.createElement('li');

            li.innerHTML = `${cat.color} cat ${cat.name}${(cat.isFluffy) ? ' (fluffy)' : ''}`;
            ul.appendChild(li);
        });

        listName.innerHTML = 'Cats';
        listName.classList.add('ListName');
        listContainer.classList.add('PetList');
        listContainer.appendChild(listName);
        listContainer.appendChild(ul);
        container.appendChild(listContainer);
    };

    this.showExpensivePets = function (expensivePetList) {
        let listContainer = document.createElement('div'),
            listName = document.createElement('p'),
            ul = document.createElement('ul');

        expensivePetList.forEach((pet) => {
            let li = document.createElement('li'),
                petType;

            if (pet instanceof Cat) {
                petType = 'cat';
            } else if (pet instanceof Dog) {
                petType = 'dog';
            } else {
                petType = 'hamster';
            }

            li.innerHTML = `${pet.color} ${petType} ${pet.name || ''}${(pet.isFluffy) ? ' (fluffy)' : ''}`;
            ul.appendChild(li);
        });

        listName.innerHTML = 'Expensive pets';
        listName.classList.add('ListName');
        listContainer.classList.add('PetList');
        listContainer.appendChild(listName);
        listContainer.appendChild(ul);
        container.appendChild(listContainer);
    };

    this.showWhiteAndFluffy = function (whiteAndFluffyList) {
        let listContainer = document.createElement('div'),
            listName = document.createElement('p'),
            ul = document.createElement('ul');

        whiteAndFluffyList.forEach((pet) => {
            let li = document.createElement('li'),
                petType;

            if (pet instanceof Cat) {
                petType = 'cat';
            } else if (pet instanceof Dog) {
                petType = 'dog';
            } else {
                petType = 'hamster';
            }

            li.innerHTML = `${pet.color} ${petType} ${pet.name || ''}${(pet.isFluffy) ? ' (fluffy)' : ''}`;
            ul.appendChild(li);
        });

        listName.innerHTML = 'White or fluffy pets';
        listName.classList.add('ListName');
        listContainer.classList.add('PetList');
        listContainer.appendChild(listName);
        listContainer.appendChild(ul);
        container.appendChild(listContainer);
    };

    function showPets (petList, listName) {
        let listContainer = document.createElement('div');

    }
}
