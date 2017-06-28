'use strict';

// Input for Task1 - Chess board 
let width = 5,
    height = 4,
    character = '*';

// Input for Task2 - Envelope analysis
let envelope1 = {a: 3, b: 8},
    envelope2 = {a: 9, b: 6.5};

// Input for Task3 - Triangles sorting
let triangleList = [{
            vertices: 'ABC',
            a: 10.1,
            b: 20,
            c: 22
        },{
            vertices: 'DEF',
            a: 1,
            b: 2.8,
            c: 2
        },{
            vertices: 'GHI',
            a: 110,
            b: 200,
            c: 122.36
        }];

// Input for Task4 - Palindrome
let number = '789737983463';

// Input for Task5 - Lucky tickets
let context = {
        min: '000000', 
        max: '999999'
    };

// Input for Task6 - Number sequence
let rowLength = 5,
    minSquare = 0;

// Input for Task7 - Fibonacci numbers
let context1 = {min: 1, max: 100},
    context2 = {length: 3};

output();

function output () {
    console.log('Task1. Chess board ');
    console.log(task1(width, height, character));
    console.log('');

    console.log('Task2. Envelope analysis');
    console.log(`The smaller envelope is ${task2(envelope1, envelope2)}`);
    
    console.log('');
    console.log('Task3. Triangles sorting');
    console.log(task3(triangleList));

    console.log('');    
    console.log('Task4. Palindrome');
    console.log(task4(number));
    
    console.log('');
    console.log('Task5. Lucky tickets');
    let date1 = new Date();
    console.log(task5(context));
    let date2 = new Date();
    console.log(`Time of execution: ${date2.getSeconds() - date1.getSeconds()}`);
    
    console.log('');
    console.log('Task6. Number sequence');
    console.log(task6(rowLength, minSquare));
    
    console.log('');
    console.log('Task7. Fibonacci numbers');
    console.log(task7(context1));
    console.log(task7(context2));
}