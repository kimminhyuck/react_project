// funcA();
// //funcB();
// function funcA() {
//   console.log("func A")
// }
// let funcB = function () {
//   console.log("func B")
// }
// funcB()

// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }

// function repeatDouble(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log((idx + 1) * 2);
//   }
// }

// repeatDouble(5)

// function repeat(count, callBack) {
//   for (let idx = 0; idx < count; idx++) {
//     callBack(idx + 1);
//   }
// }
// function origin(count) {
//   console.log(count)
// }
// repeat(5, origin);
// function double(count) {
//   console.log(count * 2)
// }
// repeat(5, double);

// function foo() {
//   let a = 1;
// }

// console.log(a)//오류

// for (let i = 0; i < 10; i++) {
//   let a = 1;
// }
// //console.log(a)//오류
// console.g(i)//오류

// function foo() {
//   console.log("foo");
// }
// function bar() {
//   foo();
//   console.log("bar");
// }
// bar();

// function foo() {
//   console.log("foo");

//   function bar() {
//     console.log("bar");
//   }
// }

// bar();//오류

// if (true) {
//   var a = 1;
// }
// console.log(a);//오류 안남

// function foo() {
//   var a = 1;
// }
// console.log(a)//오류

// let person = {
//   name: "이정환",
//   age: 25,
//   age: 30
// }
// console.log(person)

// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true
// }
// console.log(person)
// const personName = person.name;
// const personAge = person["age"];
// console.log(personName)
// console.log(personAge)
// const personLikeCat = person['like cat'];
// console.log(personLikeCat)
// //console.log(person.'like cat')//불가능
// person.gender = "male";
// person["nickname"] = "winterlood";

// console.log(person)

// function addProperty(obj, key, value) {
//   obj[key] = value;
// }
// let obj = {};
// addProperty(obj, "a", 1)
// addProperty(obj, "b", 2)
// addProperty(obj, "c", 3)

// console.log(obj)

// let cat = {
//   name: "치삼이",
//   age: 4
// }
// delete cat.name;
// delete cat["age"];

// console.log(cat)

// const obj = {
//   a: 1,
//   b: "text"
// }

// obj.a = 2
// obj.c = undefined
// delete obj.b

// console.log(obj)

// obj = { e: 1, d: "cat" }//오류

// let obj = {
//   a: 1
// }
// console.log(obj.b)
// let isPropertyExist = obj.b !== undefined
// console.log(isPropertyExist)//false 출력

// obj = {
//   a: 1,
//   b: undefined
// }
// isPropertyExist = obj.b !== undefined
// console.log(isPropertyExist)//false 출력하지만 
// // 실제 b는 존재

// isPropertyExist = "b" in obj;
// console.log(isPropertyExist)//true
// // 프로퍼티 존재를 확인할 때는 in 연산자를 사용할 것

// let person = {
//   name: "이정환",
//   sayHi: function () {
//     console.log(this.name + "아, 안녕")
//   }
// }

// person.sayHi();

// let arr = [
//   1,
//   "1",
//   true,
//   null,
//   undefined,
//   () => { },
//   function () { },
//   [1, 2, 3],
//   { a: 1 }
// ]
// console.log(arr)

// let food = ['짜장면', '피자', '치킨']
// food[2] = '파스타'
// food[3] = '레몬'
// console.log(food)

// let arr = [undefined, null, 0n, 0, -0, NaN, "", '', ``]
// for (let obj of arr) {
//   if (!obj) console.log(obj, 'is falsy')
// }

// let varA;
// if (varA) {
//   console.log("값이 있음");
// } else {
//   console.log("값이 없음")
// }

// const num = -0;
// if (num) {
//   console.log("양수 또는 음수")
// } else {
//   console.log("0 또는 -0 또는 NaN")
// }

// function calcA() {
//   console.log("a")
//   return false;
// }
// function calcB() {
//   console.log("b")
//   return true;
// }
// console.log(calcA() && calcB())

// function calcA() {
//   console.log("a")
//   return undefined;
// }
// function calcB() {
//   console.log("b")
//   return true;
// }
// console.log(calcA() && calcB())

// function getName(person) {
//   // if (person !== undefined && person !== null) {
//   //   return person.name;
//   // } else {
//   //   return "매개변수가 객체가 아닙니다.";
//   // }
//   return person && person.name
// }
// //let person
// //let person = null
// let person = { name: "이정환" }
// let name = getName(person)
// console.log(name);

// function calcA() {
//   console.log("a")
//   return true
// }
// function calcB() {
//   console.log("b")
//   return false
// }
// console.log(calcA() || calcB)

// const varA = 0
// const varB = "이정환"

// const resultA = varA || varB
// const resultB = varA ?? varB

// console.log(resultA)
// console.log(resultB)

// const arr = [1, 2, 3];
// arr.push(4)
// console.log(arr)

// function myFunction() {
//   console.log("hi");
// }
// console.log(myFunction.name);

// let person = {
//   name: "이정환"
// }
// let man = person
// man.age = 25
// console.log(person)
// console.log(man)

// let numA = 1;
// let numB = 1;
// console.log(numA === numB);

// let person = {
//   name: "이정환"
// }
// let man = {
//   name: "이정환"
// }
// console.log(person === man)

// let arr1 = [1, 2, 3]
// let arr2 = [1, 2, 3]
// console.log(arr1 === arr2)

// let func1 = () => { console.log("func") }
// let func2 = () => { console.log("func") }
// console.log(func1 === func2)

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도"
// }
// const keyArr = Object.keys(person)
// //console.log(keyArr)
// for (let key of keyArr) {
//   //  console.log(key)
//   let value = person[key];
//   console.log(key, value);
// }

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도"
// }
// const valueArr = Object.values(person);
// for (let value of valueArr) {
//   console.log(value)
// }

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도"
// }
// for (let key in person) {
//   const value = person[key]
//   console.log(key, value)
// }

// let arr = [1, 2, 3]
// let [one, two, three] = arr
// console.log(one, two, three)

// let arr = [1, 2, 3]
// let [one, two] = arr
// console.log(one, two)

// let arr = [1, 2]
// let [one, two, three] = arr
// console.log(one, two, three)

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도"
// }
// //let { name: name, age: age, location: location } = person
// let { name, age, location } = person//위와 동등
// console.log(name, age, location)

// function func({ name, age, location }) {
//   console.log(name, age, location)
// }
// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도"
// }
// func(person)

// function func({ name, location }) {
//   console.log(name, location)
// }
// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도"
// }
// func(person)

function func({ name: n, age: a, location: l }) {
  console.log(n, a, l)
}
let person = {
  name: "이정환",
  age: 25,
  location: "경기도"
}
func(person)