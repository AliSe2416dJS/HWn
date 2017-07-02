'use strict';

class PetShopView {

    showPets (listName, petList) {
        let container = document.querySelector('.PetShop'),
            template = `<div class="PetList">
                            <p class="ListName">${listName}</p>
                                <ul>`;

        petList.forEach((pet) => {
            let petType;

            if (pet instanceof Cat) {
                petType = 'cat';
            } else if (pet instanceof Dog) {
                petType = 'dog';
            } else {
                petType = 'hamster';
            }

            template += `<li>${pet.color} ${petType} ${pet.name || ''}${(pet.isFluffy) ? ' (fluffy)' : ''}</li>`;
        });

        template += `</ul></div>`;
        container.innerHTML += template;
    }
}


/* 

    this.showWhiteOrFluffy = function (whiteAndFluffyList) {
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
*/

