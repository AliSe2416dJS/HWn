'use strict';

function task6 (n, m) {
    let out;

    try {
        preValidate6(n, m);
        out = findSequence(n, m);
    } catch (err) {
        out = {
            status: 'failed', 
            reason: err.message
        };
    }

    return out;
}

function findSequence (n, m) {
	let firstElement = Math.ceil(Math.sqrt(m)),
	    sequence = String(firstElement) + ', ';
	    
	for (let i = 1; i < n; i++) {
		sequence += `${firstElement + i}, `;
	}
	
	return sequence.substring(0, sequence.length - 2);
}

function preValidate6 (n, m) {
    let inputIsInvalid = isNaN(context['min']) || isNaN(context['max']) ||
    		context['min'].toString().length !== 6 ||
    		context['max'].toString().length !== 6;

    if (inputIsInvalid) {
        throw new Error('Input is not valid');
    }
}