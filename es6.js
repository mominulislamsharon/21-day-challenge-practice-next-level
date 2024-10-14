const numbers = [58, 35,62, 13];

const student = {
  name: 'Salib khan',
  age: 32,
  movies: ['toofan', 'dhakar king', 'rajkumar']
}

// 1. template string
const about = `my name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThere = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
}

// spread operator 
const newNumbers = [...numbers];
numbers.push(99);
numbers.push(89);
numbers.push(79);

console.log(numbers);
console.log(newNumbers);

// create a new array from older array and add an element
const currentNumbers = [...numbers, 55];

