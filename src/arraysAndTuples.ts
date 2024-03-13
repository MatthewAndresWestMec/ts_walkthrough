// let numbers =[1,2,'2']//js arr are dynamic
// // what if you pass the arr to a func expecting only numbers



// let numbers: number[] = [1,2,3]; //num arr

// numbers.forEach((n=>n.))

// Tuples: When working with values using different types.

let user: [number,string,boolean] = [1,'egg',false,]
// w/o push boolean it works, but no value is added
user.push(999,'dog',1000,'egg2')

// ready only errors for adding push or changing index elements
console.log(user)

// Enum
enum Size{Small ='s', Medium ='m', Large = 'l'}
