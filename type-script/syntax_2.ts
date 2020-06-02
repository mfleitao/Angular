// ANNOTATIONS
// --------------------------------------------------------------------------
// setting up the type of each attribute, it cannot be changed
var myCar : { 
    make: string;
    model: string;
    year: number;
    price: number;
};
myCar = {
    make: "Nissan",
    model: "Murano",
    year: 2019,
    price: 22350.97
};
// console.log(myCar);

// TYPE ASSERTION "CASTING"
// --------------------------------------------------------------------------
var code: any = 14236;
var empCodeByBrackets = <number> code;
var empCodeByAsKeyword = code as number;

// console.log(typeof(empCodeByBrackets)); // number
// console.log(typeof(empCodeByAsKeyword)); // number

// ARRAYS
// --------------------------------------------------------------------------
/**
 * Single-Dimensional
 */
// using brackets
let array1: number[] = [1,2,3,4,5];
// console.log("-> single : using brackets");
// array1.forEach((e) => console.log(e));

// using generics
let array2: Array<number> = [1,2,3,4,5]; 
// console.log("-> single : using generics");
// array2.forEach((e) => console.log(e));

/**
 * Multi-Dimensional
 */
// using brackets
let array3: number[][] = [[1,2,3,4,5], [6,7,8,9,0]]; 
// console.log("-> multi : using brackets");
// array3.forEach((row) => row.forEach((e) => console.log(e)));

// using generics
let array4: Array<Array<number>> = [[1,2,3,4,5], [6,7,8,9,0]]; 
// console.log("-> multi : using generics");
// array4.forEach((row) => row.forEach((e) => console.log(e)));

/**
 * Array Objects
 */
let arrObj1: string[] = new Array("Corolla", "Civic", "Rogue");
// for (let index in arrObj1) console.log(arrObj1[index]);

// UNION
// --------------------------------------------------------------------------
let person: number|string;
person = 33;
// console.log(person);
person = "Glacy";
// console.log(person);

// STRINGS
// --------------------------------------------------------------------------
/**
 * Multi-Line
 */
let multi = 'Hello, ' +
    'I ' +
    'would ' +
    'like ' +
    'to ' +
    'talk ' +
    'about ' +
    'TypeScript.';
    // console.log(multi);
    
/**
 * Variable Assignment
 */
type Vehicle = 'Compact'|'SUV'|'Sedan';
let myVehicle: Vehicle;
let isGood = () => { 
    if (myVehicle = 'SUV')
        return true;
    // else if (myVehicle = 'Economic') // <- Compilation Error
    //     return false; 
};
// console.log(isGood());

// MAPS
// --------------------------------------------------------------------------
let map = new Map();
map.set(1, 'Glacy');
map.set(2, 'Clara');
map.set(3, 'Heitor');
map.set(4, 'Teuso');
map.set(5, 'Matheus');

// map.forEach((v, k) => console.log('k:'+ k +' v:'+ v));

  
