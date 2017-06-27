'use strict';

function task5 (context) {
    let out;

    try {
        preValidate5(context);
        out = luckyTickets(context);
    } catch (err) {
        out = {
            status: 'failed', 
            reason: err.message
        };
    }

    return out;
}

function luckyTickets (context) {
    let min = Number(context.min),
        max = Number(context.max),
        complicatedCounter = 0,
        simpleCounter = 0,
        winner = 'dead heat';

    for (let ticket = min; ticket <= max; ticket++) {
        countSimple(ticket);
        countComplicated(ticket);
    }

    if (simpleCounter < complicatedCounter) {
        winner = 'complicated method';
    } else if (simpleCounter > complicatedCounter) {
        winner = 'simple method';
    }

    return {
        winner: winner,
        simpleMethod: simpleCounter,
        complicatedMethod: complicatedCounter
    };

    function countSimple (ticket) {
        let ticketDigitList = toDigitList(ticket),
            sum123, sum456;

        sum123 = ticketDigitList[0] + ticketDigitList[1] + ticketDigitList[2];
        sum456 = ticketDigitList[3] + ticketDigitList[4] + ticketDigitList[5];

        if (sum123 === sum456) {
            simpleCounter++;
        }
    }

    function countComplicated (ticket) {
        let ticketDigitList = toDigitList(ticket),
            sumEven = 0, 
            sumOdd = 0;

        ticketDigitList.forEach(digit => {
            sumOdd += (digit % 2) ? digit : 0;
            sumEven += !(digit % 2) ? digit : 0;

           /* if (digit % 2) {
                sumOdd += digit;
            } else {
                sumEven += digit;
            }*/
        });

        if (sumEven === sumOdd) {
            complicatedCounter++;
        }
    }

    function toDigitList (ticket) {  // 5698 => [0, 0, 5, 6, 9, 8] 
        let ticketStr,
            ticketArr = [],
            digitList = [],
            digitListNum = [],
            numberOfZeros;

        ticketStr = ticket.toString();
        ticketArr = ticketStr.split('');
        numberOfZeros = 6 - ticketStr.length;

        for (let i = 0; i < numberOfZeros; i++) {
            digitList.push(0);
        }

        digitList = digitList.concat(ticketArr);
        digitListNum = digitList.map(digit => parseInt(digit));

        return digitListNum;
    }
}

function preValidate5 (context) {
    let inputIsValid = context.min && context.max &&
            typeof context.min === 'string' &&
            typeof context.max === 'string' &&
            !isNaN(context.min) && !isNaN(context.max) &&
            context.min.length === 6 &&context.max.length === 6;

    if (!inputIsValid) {
        throw new Error('Input is not valid');
    }
}