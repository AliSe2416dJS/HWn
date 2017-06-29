'use strict';

function task2 (envelope1, envelope2) {
	let out;

	try {
		preValidate2(envelope1, envelope2);
		out = findSmallerEnvelope(envelope1, envelope2);
	} catch (err) {
		out = {status: 'failed', reason: err.message};
	}

	return out;
}

function findSmallerEnvelope (envelope1, envelope2) {
	let envelope1IsSmaller = firstIsSmaller(envelope1, envelope2),
		envelope2IsSmaller = firstIsSmaller(envelope2, envelope1),
		smallerEnvelope = 0;
	
	if (envelope1IsSmaller) {
		smallerEnvelope = 1;
	}  

	if (envelope2IsSmaller) {
		smallerEnvelope = 2;
	} 
	
	return smallerEnvelope;
}

function firstIsSmaller(envelope1, envelope2) {
	let firstIsSmaller = (envelope1.a < envelope2.a && envelope1.b < envelope2.b) ||
			(envelope1.a < envelope2.b && envelope1.b < envelope2.a);

	return firstIsSmaller;
}

function preValidate2 (envelope1, envelope2) {
    let inputIsInvalid = !envelope1 || !envelope2 ||
            isNaN(envelope1.a) || isNaN(envelope1.b) ||
            isNaN(envelope2.a) || isNaN(envelope2.b) ||
            envelope1.a <= 0 || envelope1.b <= 0 ||
            envelope2.a <= 0 || envelope2.b <= 0;

    if (inputIsInvalid) {
        throw new Error('Input is not valid');
    }
}