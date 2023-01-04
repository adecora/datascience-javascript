/*
  An object in JavaScript is a collection of key-value pairs, and is equivalent in simple cases to what Python call
  a dictionary. It's common to visualize an object as a two-column table with keys in one column and the values in 
  another
  The keys must be string; the values can be anything 
*/

const creature = {
  'order': 'Primates',
  'family': 'Callitrichidae',
  'genus': 'Callithrix',
  'species': 'Jacchus'
};

console.log(`creature is ${creature}`);
console.log(`creature.genus is ${creature.genus}`);
for (let key in creature) {
  console.log(`creature[${key}] is ${creature[key]}`);
}

/*
  The type of an object is always object
  We can get the value associated with a key using object[key], if the key has a simple name, we can use object.key instead
  Square brackets can be used with variables for keys, but dotted notation cannot: i.e., 
    creature.genus is the same as creature['genus'], but the assigment g = 'genus' followed by creature.g does not work

  Because string keys are so common, and because programmers use simple names so often, JavaScript allows us to create
  objects without quoting the names of the keys

    const creature = {
      order : 'Primates',
      family: 'Callitrichidae',
      genus: 'Callithrix',
      species: 'Jacchus'
    }
*/

/*
  [object Object] is not particularly useful output when we want to see what an object contains.
  To get a more helpful string representation use JSON.stringify(objetc)
*/

console.log(JSON.stringify(creature));