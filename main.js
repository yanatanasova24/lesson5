// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let square = (a, b)=> a * b;

console.log(square(3, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circleArea = (r)=> r*r*Math.PI;

console.log(circleArea(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinderArea = (h, r)=>{
    let circle = r*r*Math.PI;
    let side = 2*Math.PI*r*h;
    return 2 * circle + side;
}

console.log(cylinderArea(5, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

let logArray =(arr)=>{
    for(let item of arr){
        console.log(item);
    }
}

logArray([3, 'ergr', 6, 10]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createP = (...rest)=>{
    for(let text of rest){
        document.write(`<p>${text}</p>`);
    }
}

createP('Lorem ipsum', '7493');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createList = (text)=>{
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}

createList('Lorem ipsum');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createList2 = (text, number)=>{
    document.write('<ul>');
        for(let i = 0; i < number; i++){
            document.write(`<li>${text}</li>`);
        }
    document.write('</ul>');
}

createList2('Lorem ipsum', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createList3 = (...rest)=>{
    document.write('<ul>');
    for(let item of rest){
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

createList3('uohhjkl', 3, 67, 'iphj');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
]

let showUsers = (users)=>{
    for(let user of users){
        document.write('<div>');
        for(let key in user){
            document.write(`<p>${user[key]}</p>`);
        }
        document.write('<hr></div>');
    }
}

showUsers(users);

// - створити функцію яка повертає найменьше число з масиву

let smallestNum = (arr)=>{
    let smallest = arr[0];
    for (let i=0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(smallestNum([56, 3, 7, 2, 5]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sumOfArray = (arr)=>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumOfArray([2, 5, 3, 19]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2)=>{
    let saveArg = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = saveArg;
    return arr;
}

console.log(swap([3, 5, 6, 7], 1, 3));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchangeCurrency = (sumUAH, currencyValues, exchangeCurrency)=>{
    let exchangeCurrencyValue = 0;
    for(let currencyItem of currencyValues){
        if(currencyItem.currency === exchangeCurrency){
            exchangeCurrencyValue = currencyItem.value;
        }
    }
    return sumUAH/exchangeCurrencyValue;
}

console.log(exchangeCurrency(20000,
    [{currency:'USD',value:40},
        {currency:'EUR',value:42}],
    'USD'));
