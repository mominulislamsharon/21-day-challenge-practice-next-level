// how to declar a variable using let and const 
const fathersName = "Malek";
let season = 'rainy';
season = 'winter';

// 2.condition
// 6 basic conditons: >, <, ===, !==, <=, >=
// multiple conditons: && , || 

if(fathersName === 'malek'){

}
else if(fathersName === 'Malek'){

}
else{

}

// 3. array declare 
//  index 
// length, push 
const numbers = [45, 35,62, 66];
numbers[0] = 56;

// 4. for loop 
for (let i = 0; i < numbers.length; i++){
  const number = numbers[i];
  console.log(number);

}

// 5. function 
function multiple(num1, num2){
  const result = num1 * num2;
  return result;
}

// 6. object 
// 3 ways to access property by name 
const student = {
  name: 'mominul islam sharon',
  age: 18, 
  movies: ['toofan', 'rajkumar']
}

const myVariable = 'age';

console.log(student.age);
console.log(student['age']);
console.log(student[myVariable]);