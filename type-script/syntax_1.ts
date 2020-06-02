// first program
function greeter(p: any) {
  return "Hello, "+ p;
}
let user = 'MyJenda';
//console.log(greeter(user));

// add numbers
function sum(a: any, b: any) {
  return a + b;
}
var result = sum('Hello', 15);
//console.log('Result is: '+ result);

// STRINGS 
// ------------------------------------------------------------------------------------------------
let employeeName: string = "Matheus";
let department: string = "IT";

// Before ES6
let out1: string = employeeName +" works as a Software Engineer in our "+ department +" department";
// console.log(out1);

// After ES6
let out2: string = `${employeeName} works as a Software Engineer in our ${department} department`;
// console.log(out2);

// VOID KEYWORD 
// ------------------------------------------------------------------------------------------------
// void in functions
function hello(): void {
  console.log("Just Hello, no return");
}
// void in attributes/vars
let temp: void = undefined;
// temp = null; // error
// temp = 1233; // error
// console.log(temp);

// ARRAYS 
// ------------------------------------------------------------------------------------------------
var arr1: number[] = [1, 2, 3, 4, 5];
var arr2: Array<number> = [1, 2, 3, 4, 5];

// touple
let tp: [string, number];
tp = ["one", 1];

// for (let i = 0; i < tp.length; i++)
//   console.log(tp[i]);

// INTERFACE 
// ------------------------------------------------------------------------------------------------
interface Calc {
  subtract(n1: number, n2: number): any;
}
// implementing
let Calculator: Calc = {
  subtract(n1: number, n2: number) {
    return n1 - n2;
  }
}
var out = Calculator.subtract(10, 4);
// console.log('subtraction result: '+ out);

// CLASSES 
// ------------------------------------------------------------------------------------------------
class Student {
  studentId: number;
  name: string;
  constructor(_studentId: number, _name: string) {
    this.studentId = _studentId;
    this.name = _name;
  }
  toString() {
    return this.studentId +' : '+ this.name;
  }
}

let std = new Student(3251, 'Glacy Maria da Silva Leitao');
// console.log(std.toString());

// ENUMS 
// ------------------------------------------------------------------------------------------------
enum Color {
  RED, GREEN, BLUE
}
let favoriteColor: Color = Color.BLUE;
// console.log(favoriteColor); // 2
// as an array index
// console.log(Color.RED);   // 0
// console.log(Color.GREEN); // 1
// console.log(Color.BLUE);  // 2

// GENERICS 
// ------------------------------------------------------------------------------------------------
function foo<T>(arg: T): T {
  return arg;
}
// console.log(foo<string>('Hello'));
// console.log(foo<number>(321322));

class MyGen<T> {
  arg: T;
  constructor(_arg: T) {
    this.arg = _arg;
  }
  display() {
    // console.log(this.arg);
  }
}

let g1 = new MyGen<string>('Glacy');
g1.display();
let g2 = new MyGen<number>(142536);
g2.display();

// DECORATORS 
// ------------------------------------------------------------------------------------------------
// function decor() {
  //   console.log("decor(): evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  //     console.log("decor(): called");
  //   }
  // }
  
  // class A {
    //   @decor() method() {}
    // }
    
    // VAR vs LET 
    // ------------------------------------------------------------------------------------------------
    var monetarySymbol = "$";
    function showMoney(amount: number) {
  var monetarySymbol = "€";
  console.log(monetarySymbol + amount);
} 
// showMoney(120);

function a(input: boolean) {
  let x = 100;
  if (input) {
    let y = x + 10;
    return y;
  }
  // return y; // <- error: 'y' does not exist here, only whithin 'if' scope
}
// a(true);

// HOISTING OF VAR 
// ------------------------------------------------------------------------------------------------
function get(x: any) {
  console.log(a); // printing x variable, value is undefined
  var a = x;
  console.log(a);
  // console.log(b);
  // let b = x + 2;
  // console.log(b);
}
// get(7);

// CONSTANTS 
// ------------------------------------------------------------------------------------------------
const SIZE = 15;
// console.log(SIZE);

//  TYPE OPERATORS
// ------------------------------------------------------------------------------------------------
let car = { 
  make: 'Honda', 
  model: 'Civic', 
  year: '2019' 
};

// in
console.log('make' in car); // true

// typeof
console.log(typeof car); // object
console.log(typeof car.make); // string

// instanceof
console.log(car instanceof Object); // true
let nm = [1, 2];
console.log(nm instanceof String); // false

// delete
delete car.year;
console.log(car);

