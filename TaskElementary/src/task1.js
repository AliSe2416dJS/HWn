'use strict';

function task1 (width, height, character) {
    let out;

    try {
        preValidate1(width, height, character);
        out = createChessBoard(width, height, character);
    } catch (err) {
        out = {status: 'failed', reason: err.message};
    }

    return out;
}

function createChessBoard (width, height, character) {
    let board = '';
    
    for (let i = 1; i <= height; i++) {
        board += '|';

    	for (let j = 1; j <= width; j++) {
    	    if (i % 2) {
    	        board += character + ' ';
            } else {
            	board += ' ' + character;
            }
        }
        
        board += '|\n';
    }
    
    return board;
}

function preValidate1 (width, height, character) {
    let inputIsInvalid = isNaN(width) || isNaN(height) ||
            typeof character !== 'string' || 
            width < 0 || height < 0;

    if (inputIsInvalid) {
        throw new Error('Width and height must be a number greater than 0, character must be string');
    }
}