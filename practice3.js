
// //Завдання 2
const users = [
  { name: "Оля", age: 17 },
  { name: "Ігор", age: 22 },
  { name: "Марія", age: 19 },
  { name: "Сергій", age: 15 }
];

const filtered = users.filter(user => user.age > 18);

const filteredSorted = [...filtered].sort((a, b) => a.age - b.age);

console.log("Відфільтровані користувачі старше 18:", filtered);
console.log("Відфільтровані та відсортовані за віком:", filteredSorted);
   

//Завдання 1
const numbers = [12, 5, 8, 20, 7, 15];

const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const min = Math.min(...numbers);
const max = Math.max(...numbers);

numbers.sort((a, b) => a - b);

console.log("Масив:", numbers);
console.log("Середнє арифметичне:", average);
console.log("Мінімальне значення:", min);
console.log("Максимальне значення:", max);
console.log("Відсортований масив:", numbers);

//Завдання 5
const namesArray = ["Оля", "Ігор", "Марія", "Сергій"];

const namesObject = namesArray.reduce((obj, name) => {
  obj[name] = name.length;
  return obj;
}, {});

console.log("Об'єкт імен та їх довжини:", namesObject);



