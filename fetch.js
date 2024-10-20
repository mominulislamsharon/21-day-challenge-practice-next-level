// 1. JSON, stringfy, parse

const student = {
  name: 'Sali  Khan',
  age:32,
  movies: ['king khan', 'Dhakar king']
}

const studentJSON  = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch
fetch('url')
.then(res => res.json())
.then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);


// for 
const numbers = [83,24,93,23, 42,63];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);


