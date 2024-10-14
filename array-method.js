const products = [
  {name: 'laptop', price: 3220, brand: 'lenovo', color: 'silver'},
  {name: 'phone', price: 34444, brand: 'xioami', color: 'black'},
  {name: 'watch', price: 300, brand: 'casino', color: 'silver'},
  {name: 'airbad', price: 600, brand: 'mi ultra', color: 'nothing'},
  {name: 'bag', price: 5000, brand: 'briad', color: 'black'},
]

const brands = products.map(product => product.brand);
// console.log(brands);

const names = products.map(naming => naming.name);
// console.log(names)

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

products.forEach(product => {
  // console.log(product.brand)
})

//3.filter 
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p =>  p.name.includes('t'));
// console.log(specificName);

// find 
const special = products.find(p => p.name.includes('t'));
// console.log(special);

