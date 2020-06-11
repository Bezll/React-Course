// Object Destructuring

const person = {
  name: 'Andrew',
  age: 28,
  location: {
    city: 'Philadelphia',
    temp: 30
  }
};

const { name, age } = person;
console.log(`${name} is ${age}`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self Published' } = book.publisher; // : (rename) = (default)
console.log(publisherName)

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '£2', '£2.50', '£2.75'];
const [coffeeHot, small, medium, large] = item;
console.log(`A medium ${coffeeHot} costs ${medium}`);