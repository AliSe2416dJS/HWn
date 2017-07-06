'use strict';

let template = (function () {
    function _generatePetList (htmlFragment, listName) {
        let html = `<p class="ListName">${listName}</p>
                    <ul> 
                        ${htmlFragment}
                    </ul>`;

        return html;
    }

    return {
        _generatePetList: _generatePetList
    }
})();
