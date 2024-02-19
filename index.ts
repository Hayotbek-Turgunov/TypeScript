
// // function pow(x: number, y: number): string {
// //   return `${x} ** ${y} = ${x ** y}`
// // }

// // console.log(pow(2, 3));


// // //Arrow functionlar haqida
// // const add = (x: number, y: number): number => x + y

// // function log(x: number): void {
// //   console.log(x);
// // }


// // function someFunc(s: string): never {
// //   throw new Error(s)
// // }


// // let c: (x: number, y: string) => string

// // // c = function (a: number, b: number): number {
// // //   return a + b
// // // }


// // c = function (a: number, b: string): string {
// //   return `${a} : ${b}`
// // }

// function overloadFunc(x: number, y: number): number
// function overloadFunc(x: string, y: number): string
// function overloadFunc(x: any, y: any): any {
//   if (typeof x === 'number' && typeof y === 'number') {
//     return x + y
//   } else {
//     return `${x} ${y} `
//   }
// }

// console.log(overloadFunc(5, 2));




// let a: any = 10
// let b: number = a


// let c: unknown = 20

// let e: number = <number>c
// let f: number = c as number
// console.log(f);


// //union type
// // let h: number | string = 10
// // console.log(h);

// // let s: 'SM' | "md" | "lg"


// // type Sizes = "SM" | "MD" | "LG" | boolean

// // let s2: Sizes = false
// // console.log(s2);


// type OBJ = { name: string } | { age: number }

// let obj: OBJ

// obj = { name: 'String' }
// obj = { age: 12 }
// obj = { name: 'str', age: 12 }


// type OBJ2 = { name: string } & { age: number }

// let obj2: OBJ2

// obj2 = { name: 'Hayotbek', age: 12 }


// type OBJ3 = { name: string } & { age?: number }
// let obj3: OBJ3 = { name: 'Hayotbek' }


// let f: { name: string, age: number } = { name: 'Salom hammaga', age: 12 }


let c: (x: number, y: string) => string

c = function (a: number, b: string): string {
  return `${a} ${b}`
}


function overloadFunc(x: number, y: number): string
function overloadFunc(x: string, y: number): string
function overloadFunc(x: any, y: any): any {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  } else {
    return `${x} ${y} `
  }
}

console.log(overloadFunc(5, 2));