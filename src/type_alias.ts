// type_alias

// Enforces types. Any not declared in this objects cannot be made in new objects.
type Employee = {
    readonly id:number,
    name:string,
    nickname?:string,//optional
    retire:(date:Date)=>void,
    } 
    
    
let person:Employee= {id:1,name:'Bernard',retire:(date:Date)=>console.log(date),}
    