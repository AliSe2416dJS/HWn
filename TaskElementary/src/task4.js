'use strict';

function task4 (number) {
    let out;

    try {
        preValidate4(number);
        out = findPalindrome(number);
    } catch (err) {
        out = {
            status: 'failed', 
            reason: err.message
        };
    }

    return out;
}

function findPalindrome (number) {
    let digitList = number.split(''),
        palindrome = '',
        center, radius;

    digitList = addDelimiter(digitList);  // [1, 2, 3] => [|, 1, |, 2, |, 3, |]
    center = findLongestPalindromeParameters(digitList).center;
    radius = findLongestPalindromeParameters(digitList).radius;
    palindrome = (radius > 1) ? extractPalindrome(digitList, center, radius) : '0';  // max['length'] > 3, because |5| is not palindrome 

    return palindrome;
}

function findLongestPalindromeParameters (digitList) {
    let palindromeLengthList = [],  // temporary digitList for getting length of longest palindrome at every point
        maxLength; 

    for (let i = 0; i < digitList.length; i++) {
        let isPalindromeExtensible,
            left = i, 
            right = i;

        isPalindromeExtensible = (left, right) => left >= 0 && right < digitList.length && 
            digitList[left - 1] === digitList[right + 1];

        while (isPalindromeExtensible(left, right)) {
            left--;
            right++;
        }

        palindromeLengthList.push(right - left + 1);
    }

    maxLength = Math.max(...palindromeLengthList);

    return {
        center: palindromeLengthList.indexOf(maxLength), 
        radius: (maxLength - 1) / 2
    };
}

function extractPalindrome (digitList, center, radius) {
    let palindrome = [],
        palindromeString = '';

    digitList.forEach((digit, i) => {
        if (i >= center - radius && i <= center + radius) {
            palindrome.push(digit);
        }
    });

    palindrome = removeDelimiter(palindrome);
    palindromeString = palindrome.join('');        

    return palindromeString;
}

function addDelimiter (digitList) {
    let newDigitList = [];

    digitList.forEach((item, i) => {
        newDigitList.push('|');
        newDigitList.push(item);
    });

    newDigitList.push('|');

    return newDigitList;
}

function removeDelimiter (digitList) {
    let newDigitList = [];

    for (let i = 1; i < digitList.length; i += 2) {
        newDigitList.push(digitList[i]);
    }

    return newDigitList;
}

function preValidate4 (number) {
    let numberIsInvalid = (typeof number !== 'string') || isNaN(number) || +number < 0;

    if (numberIsInvalid) {
        throw new Error('number is not valid');
    }
}