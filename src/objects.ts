// let employee = {id:1}
// employee.name = 'John' works only in js

// You must scope your objects full properties during its creation.

let employee:{
readonly id:number,
name:string,
nickname?:string,//optional
retire:(date:Date)=>void
// you could make name but have default value
} = {id:1,name:'Bernard',retire:(date:Date)=>console.log(date)}

// Set or change name
employee.name = 'John' 