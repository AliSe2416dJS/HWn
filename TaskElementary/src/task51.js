'use strict';

let context = {
        min: '100000', 
        max: '999999'
    };
    
let date1 = new Date();
console.log(task5(context));
let date2 = new Date();
console.log(date2.getSeconds() - date1.getSeconds());

function task5 (context) {
    let out;

    try {
        preValidate5(context);
        out = luckyTicketsBestMethod(context);
    } catch (err) {
        out = {
            status: 'failed', 
            reason: err.message
        };
    }

    return out;
}

function luckyTicketsBestMethod (context) {
    let min = context['min'],
        max = context['max'],
        complicatedMethod = 0,
        simpleMethod = 0,
        out = {};
        
    for (let ticket = min; ticket <= max; ticket++) {
        ticket = String(ticket);

        let ticketDigits = ticket.split(''),
            evenSum = 0,
            oddSum = 0;

        ticketDigits.forEach(function (digit, i) {
            if (digit % 2) {
                oddSum += +digit;
            } else {
                evenSum += +digit
            }
        });
        
        if (oddSum === evenSum) {
            complicatedMethod++;
        }

        if (+ticketDigits[0] + +ticketDigits[1] + +ticketDigits[2] === +ticketDigits[3] + +ticketDigits[4] + +ticketDigits[5]) {
            simpleMethod++;
        }
    }
    
    if (simpleMethod > complicatedMethod) {
        out['winner'] = 'simple method';
    } else if (simpleMethod < complicatedMethod) {
        out['winner'] = 'complicated method';
    } else {
        out['winner'] = 'equal';
    }
    
    out['simple'] = simpleMethod;
    out['complicated'] = complicatedMethod;

    return out;
}

function preValidate5 (context) {
    let inputIsInvalid = isNaN(context['min']) || isNaN(context['max']) ||
            context['min'].toString().length !== 6 ||
            context['max'].toString().length !== 6;

    if (inputIsInvalid) {
        throw new Error('Input is not valid');
    }
}