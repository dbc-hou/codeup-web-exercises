const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter(function(n) {
    return n % 2 === 0;
});
console.log(evens); // [2, 4, 6, 8, 10]

const incremented = numbers.map(function(n) {
    return n + 1;
});
console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers2.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);

const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];

const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 0);

console.log(sum);
console.log(totalSales);