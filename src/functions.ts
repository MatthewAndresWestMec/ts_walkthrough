// function calculateTax(income:number, taxYear?:number): number{
// let x;
// // by adding a ? next to a parameter makes it optional parameter
// if(taxYear<2022) return income *1.2
//     return income * 1.3
// }

function calculateTax1(income:number, taxYear:number=2020): number{
    let x;
    // by adding a = [value] next to a parameter makes it default parameter
    if(taxYear<2022) return income *1.2
        return income * 1.3
    }


    function sumNum(input:number){
        return input
    }

    calculateTax1(10_000,2022)

// If you try to add another parameter you will see that it erros

// this doesnt matter in JS until runtime
// If you retun a type that is void you dont need a return statement