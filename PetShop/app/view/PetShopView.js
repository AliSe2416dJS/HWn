'use strict';

class PetShopView {

    showPets (listName, petList) {
        let container = document.querySelector('.PetShop'),
            div = document.createElement('div'),
            liList = ``,
            tpl =``;

        petList.forEach((pet) => {
            let petType;

            if (pet.isCat()) {
                petType = 'cat';
            } else if (pet.isDog()) {
                petType = 'dog';
            } else {
                petType = 'hamster';
            }

            liList += `<li>
                            ${pet.color} ${petType} ${pet.name || ''}
                            ${pet.isFluffy()? ' (fluffy)': ''}
                        </li>`;
        });

        tpl = template._generatePetList(liList, listName);
        div.classList.add('PetList');
        div.innerHTML = tpl;
        container.appendChild(div);
    }
}