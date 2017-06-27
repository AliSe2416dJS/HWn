'use strict';

function task7 (context) {
    let out, date1, date2;

    date1 = new Date();

    try {
        preValidate7(context);
        out = findfibonacciList(toMinMax(context));
    } catch (err) {
        out = {
            status: 'failed',
            reason: err.message
        };
    }
   
    date2 = new Date();
    console.log(`Time of execution: ${date2.getMilliseconds() - date1.getMilliseconds()}`);
    
    return out;
}

function findfibonacciList (context) {
    let fibonacciList = [],
        min, max,
        a, b, c;

    min = context.min;
    max = context.max;
    a = 0;
    b = 1;
    c = a + b;

    while (c <= max) {
        if (c >= min) {
            fibonacciList.push(c);
        }

        a = b;
        b = c;
        c = a + b;
    }

    return fibonacciList;
}


function toMinMax (context) {
    let min, max;

    if (context['min'] && context['max']) {
        min = context['min'];
        max = context['max'];
    } else if (context['length']) {
        min = '1';
        max = '9';

        for (let i = 2; i <= context['length']; i++) {
            min += '0';
            max += '9';
        }
    }

    return {
        min: Number(min),
        max: Number(max)
    };
}

function preValidate7 (context) {
    let length = context['length'],
        min = context['min'],
        max = context['max'],
        inputIsValid;

    inputIsValid = ((typeof min === 'number' && typeof max === 'number') || 
            typeof length === 'number') && ((min < max) || length > 0);

    if (!inputIsValid) {
        throw new Error('Input is not valid');
    }
}