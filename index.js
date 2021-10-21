// 1 - Push sans push
let fruits = ['Apple','Orange','Banana']
fruits = [...fruits, 'Raspberry']
console.log(fruits)

// 2- Unshift sans unshift
let fruits2 = ['Apple','Orange','Banana']
fruits2 = ['Raspberry', ...fruits2]
console.log(fruits2)

// 3 - Array concatenation