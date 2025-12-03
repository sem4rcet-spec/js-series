const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[2][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// ... spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({length : 4 , name: "hitesh" , age : 30})) // interesting
console.log(Array.from({length: 5}, (elem, index) => index + 1))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

/*

const obj = {length : 4 , name: "hitesh" , age : 30}

// Get all values from the object
console.log(Array.from(Object.values(obj)))
// Output: [ 4, 'hitesh', 30 ]

// Get all keys from the object
console.log(Array.from(Object.keys(obj)))
// Output: [ 'length', 'name', 'age' ]

// Get key-value pairs
console.log(Array.from(Object.entries(obj)))
// Output: [ [ 'length', 4 ], [ 'name', 'hitesh' ], [ 'age', 30 ] ]

*/