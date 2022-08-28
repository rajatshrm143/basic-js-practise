//console.time('My code took');
//console.clear();
//console.log('sdvsdvdf');
//console.log(234 + 56);
//console.log(undefined);
//console.log([1, 2, 3, 3, 4, 5, 5, 6, 78]);
//console.log({ me: 'satisfied', family: 'happy', friends: 'mad' });
//console.table({ me: 'satisfied', family: 'happy', friends: 'mad' });
// //console.warn('This is a warning');
// //console.timeEnd('This code took');
// //console.error('This is an error');

var name = `vsdd"LKPOIHY^%T*&*(*(GYGHJ))`;
// console.log(name);

// Scope of Variables *** Very Important ***
let channel;
channel = 'Outer Value';

if (true) {
  var channel = 'Inner Value';
}
// console.log(channel);
// *** Very Important ***

var marks = 456.323;
// console.log(name, channel, marks);

// Rules for creating JS vars

const myname = 'Rajat';
// //console.log(myname);

const jjkl = 'svds';
// //console.log(jjkl);

const arr1 = [234, 09, 45, 23, 22, 523, 7];
arr1.push(12);
// //console.log(arr1);

// string functions
let html = '<h1>Hi ARK self rajat</h1>' + "<p>I'm an SE in Web dev.</p>";

// append in rear of the string
html = html.concat('sdvsdsdvdsv', ' dbdf', 'working in ARK');
// console.log(html);

// console.log(html.indexOf('ARK')); // 7

// console.log(html.indexOf('hhjh')); // -1

//console.log(html.lastIndexOf('ARK')); // 81

//console.log(html.charAt(5)); // i

//console.log(html.substring(5, 10)); //i ARK

// console.log(html.slice(0, -4)); // <h1>Hi ARK self rajat</h1><p>I'm an SE in Web dev.</p>sdvsdsdvdsv dbdfworking in

// breaks a string into an array
// console.log(html.split(' '));
/*
["<h1>Hi",
 "ARK",
  "self",
   "rajat</h1><p>I'm",
    "an", "SE", "in", "Web", "dev.</p>sdvsdsdvdsv", "dbdfworking", "in", "ARK"]
*/

//console.log(html.replace('Hi', 'Hello!'));
/*<h1>Hello! ARK self rajat</h1><p>I'm an SE in Web dev.</p>sdvsdsdvdsv dbdfworking in ARK
 */

// template literals
let fruit1 = '  "Orange"   ';
let fruit2 = 'Apple';
let myhtml = `Hello ${fruit1}
                <h1>You Like "${fruit2}" ?
                </h1>`;

// document.body.innerHTML = myhtml;

// Array & Objects
const mYmarks = [23, 54, 55, 86, 54, 343, 23];
const sports = ['volly', 'basket', 'cricket'];

const veggies = new Array(23, 57, 22, 'helllo');

//console.log(mYmarks[0]);
//console.log(sports[2]);
// console.log(veggies[3]);

// console.log(mYmarks.length);

let value = mYmarks.indexOf(55);
// //console.log(value); // 2

// Mutating arrays
mYmarks.push(78);
// console.log(mYmarks); // added in the end

mYmarks.pop();
// console.log(mYmarks); // remove from the end

// OBJ
let myobj = {
  name: 'rajat',
  job: 'good',
  isAct: true,
};

// console.log(myobj.name);

// window functions
let a = window;
// console.log(a);
// console.log(a.document);
// console.log(typeof a.document);
// console.log(a.innerHeight);
// console.log(a.scrollX);
// console.log(a.scrollY);
// console.log(a.history);

// Manipulating DOM
let b = document;
// console.log(b);
b = document.all;
// console.log(b);
b = document.body;
// console.log(b);
b = document.forms;
// console.log(b[0]);

// we can't get all the element directly by running loop on document
//So, we create an array 'from' document.all & try to run the loop
let s = document.all;
Array.from(s).forEach(function (element) {
  // console.log(element);
});

// get all the <a> tags from DOM
let links = document.links;
// console.log(links[0].href);

// select the element from ID DOM
let element = document.getElementById('container');
// console.log(element);

// get the className of that element
let elemClass = element.className;
// console.log(elemClass);

// get all the child element of the element
let elemNodes = element.childNodes;
// console.log(elemNodes);

// get all the parent element of the element
let elemParNodes = element.parentNode;
// console.log(elemParNodes);

// element.innerText = "My div";
// element.innerHTML = "<h1>My Div DOM </h1>";

// console.log(element.innerHTML);
// console.log(element.innerText);

// "querySelector" is used to select elements using CSS selectors
document.querySelector('#container').style.color = 'red';

// change color of 4th element using JS
document.querySelector('div:nth-child(3n)').style.color = 'blue';

// JS Events ********************
// Click event==
// //console.log('JS Events **********');
// //console.log('Click on Any Child');

document.getElementById('container').addEventListener('dblclick', function (e) {
  let tarEvnt = e.target;
  let tarEvnt1 = e.target.className;
  let tarEvnt2 = e.target.classList;
  let tarEvnt3 = e.target.id;
  let tarEvnt4 = e.target;
  // console.log('You have clicked Me!');
  // console.log(tarEvnt.innerHTML);
  // console.log(tarEvnt1);
  // console.log(tarEvnt2);
  // console.log(tarEvnt3);
  // console.log(tarEvnt4);
});

// local storage & session storage
// //console.log('LOCAL STORAGE **********')

// stores some data to the browser's localstorage
// does not get cleared when the browser closed
localStorage.setItem('Name', 'Rajat Sharma');
localStorage.setItem('Class', 'MCA');

// get the item from localstorage
// console.log(localStorage.Name);
// or
// console.log(localStorage.getItem('Class'));

// clears the entire local storage
// localStorage.clear();

// removes particular item from local storage
localStorage.removeItem('Name');

// we cannot store arrays in local storage
// so that we have to convert it to string
let arr = ['my', 'name', 'is', 'rajat'];
localStorage.setItem('intro', JSON.stringify(arr));

// to get that string as array (parse it)
let res = JSON.parse(localStorage.getItem('intro'));
// console.log(res);

// session storage
// gets cleared when the browser is closed
sessionStorage.setItem('Name', 'Rajat Sharma');
sessionStorage.setItem('Class', 'MCA');

// get the item from sessionstorage
// //console.log(sessionStorage.Name);
// or
// //console.log(sessionStorage.getItem('Class'));

sessionStorage.clear();

// Date functions
// //console.log('Date functions***********')
let today = new Date();
// //console.log(today);

// DD-MM-YYY
let otherdate = new Date('08-04-2014 04:032:33');
// //console.log(otherdate);

let otherdate1 = new Date('03/14/2014 04:032:33');
// //console.log('getDay ' + otherdate1.getDay());
// //console.log('getDate ' + otherdate1.getDate());

// //console.log('getMinutes ' + otherdate1.getMinutes());

// // //console.log('getMonth ' + otherdate1.getMonth());

// object oriented js
// //console.log('OOP in JS');
let car = {
  name: 'Maruti 800',
  rate: '4 lacks',
  run: function () {
    // //console.log('hi dude');
    return 'im true';
  },
};

// console.log(car);
// console.log(car.run());
//OP=> hi dude and im true

// //console.log(car.name); //OP=> Maruti 800

// constuctors
function myCar(arGname, arGspeed) {
  this.name = arGname;
  this.speed = arGspeed;
  this.run = function () {
    console.log(`${this.name} is running at ${this.speed}`);
  };
}
let carObj = new myCar('Nissan', 210);
// console.log(carObj.run());

carObj = new myCar('Skoda', 120);
// console.log(carObj1.run());

// object prototype
let obj = { name: 'rajat', addr: 'mzn' };

// constructor & inheritance
// //console.log('constructor & inheritance');

class Employee {
  constructor(name, div, exp) {
    this.name = name;
    this.div = div;
    this.exp = exp;
  }

  feature() {
    return `Hi I'm ${this.name} working in ${this.div} having ${this.exp} years of experience!`;
  }

  // 'static' function is accessable without creating any object of the class
  static salary(basic, da) {
    return (
      basic + da + ' Total Salary of ' + this.exp + ' is : ' + `${basic + da}`
    );
  }
}

new Employee('Rajat Sharma', 'IT', '4');
// console.log(objct.feature());

// static function access
// //console.log('static function access');
// console.log(Employee.salary(10000, 3000));

class Programmer extends Employee {
  constructor(name, div, exp, lang) {
    // 'super' will access parent class's constructor
    super(name, div, exp);

    // new var
    this.lang = lang;
  }

  workingLang() {
    if (this.lang == 'Java') {
      return 'true';
    } else if (this.lang == 'PHP') {
      return 'false';
    } else if (this.lang == 'C#') {
      return 'false';
    } else if (this.lang == '.Net') {
      return 'false';
    } else {
      return 'go to hell!';
    }
  }

  static getProfile() {
    return `Name: ${this.name}
            Exp:${this.exp}
            Lang:${this.lang}
            Div:${this.div}`;
  }
}

workObj = new Programmer('Rajat Sharma', 'Tech & IT', 2.5, 'PHP');

// console.log(workObj.workingLang());
// console.log(workObj);

// console.log(Programmer.getProfile());

// asynchronous approach
setTimeout(() => {
  for (var index = 0; index < 6; index++) {
    // console.log(index);
  }
}, 1000);

// OR
// in this while using 'var' gives '3 3 3' & 'let' gives '0 1 2'
for (var index = 0; index < 3; index++) {
  setTimeout(() => {
    // console.log(index);
  }, 0);
}

// console.log('done printing');

// ajax js

// instantiate an xhr obj
// //console.log('@@@@@@@ ajax js @@@@@@');
const xhr = new XMLHttpRequest();

// open the object
// GET------
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

// POST ------
// xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
// (method,path,async)

xhr.getResponseHeader('Content-type', 'application/json');

// when in progress
xhr.onprogress = function () {
  //// //console.log('loading.....');
};

//when response is ready
xhr.onload = function () {
  // // //console.log(a);
  if (this.status === 200) {
    //// //console.log(this.responseText);
  } else {
    // //console.log('Some error');
  }
};

xhr.onreadystatechange = function () {
  //// //console.log('XHR State is ', xhr.readyState);
};

// for post req
params = `{"name":"Rajat","salary":"30000","age":"26"}`;

// send the req
// xhr.send(params);
xhr.send();

// implementing callback functions
// VIDEO-37
// //console.log('callback functions@@@@@');

const studentsList = [
  { name: 'rajat', class: 'MCA', subject: 'CS' },
  { name: 'Hitesh', class: 'MTech', subject: 'Electronics' },
];

function pushStudents(student, callback) {
  studentsList.push(student);
  // //console.log("Student Pushed Now!");
  callback();
}

function showStudents() {
  let dom = '';
  studentsList.forEach(function (student) {
    dom += `<li>${student.name}</li>`;
  });
  document.getElementById('studentList').innerHTML = dom;
  // //console.log("Dom created")
}

let newStudent = { name: 'vivek' };
// send a function as a parameter while calling the function, it is a callback function
pushStudents(newStudent, showStudents);
showStudents();

// Promises in JS
// VIDEO - 39
// //console.log("Promises in JS@@@@@@@@@");
function doPromise() {
  return new Promise(function (resolve, reject) {
    const flag = false;
    if (flag) {
      // //console.log("Flag resolved!");
      resolve();
    } else {
      // //console.log("Flag rejected!");
      reject(' Rejected! Sorry bro!');
    }
  });
}

// it is a way of handling two aspects of any action/logic/API-response
// -Resolve ->.then()
// -Reject -> .catch(err)
// -Pending
doPromise()
  .then(function () {
    // //console.log("Rajat : resolved happened!")
  })
  .catch(function (err) {
    // //console.log("Rajat : Rejeted" + err);
  });

// Arrow functions
// VIDEO-41
// //console.log('Arrow functions@@@@@@');

// regular function
const greetEve = function () {
  return 'Good Evening!';
};
// console.log(greetEve());

// fat arrow function
const greetMorning = () => {
  return 'Good Morning!';
};
// console.log(greetMorning());

// for one liner [no body, no return keyword]
const greetAfterNoon = () => 'Good After Noon';

// console.log(greetAfterNoon());

// with single param [no need of braces & paranthesis]
const greetPerson = (name) => 'Hello!' + name;

// //console.log(greetPerson('Rajat'));

// with multi params
const greetHello = (name, time) => 'Good ' + time + name;

// console.log(greetHello('Rajat', 'Morning '));

// fetch API
// VIDEO-42
// fetch method we use to get data from an API
// //console.log("Fetch method@@@@@@@@");

function getData() {
  url = '/rajat.txt';

  fetch(url)
    .then((response) => {
      // console.log("Inside first then");

      return response.text();
    })
    .then((data) => {
      // // //console.log("Inside second then");
      // // //console.log(data);
    });
}

// //console.log("Before running function");
getData();
// //console.log("After running function");

// Async/Await
//VIDEO-43
// //console.log('Async/Await@@@@');

//console.log("first line");

// async returns a promise
async function myName() {
  // //console.log("second line");
  // await will wait for the response
  // then let it go further
  const get = await fetch('https://api.github.com/users');

  // //console.log("third line");
  const dataRes = await get.json();
  // //console.log("fourth line");
  return dataRes;
}

// //console.log("fifth line");
let rep = myName();
// //console.log("sixth line");
rep.then((data) => {
  // //console.log(data)
});
// //console.log("seventh line");

// Try Catch
// //console.log("Try Catch@@@@@@@@@@@@@@@@");
let ab = 'Rajat';

if (ab != undefined) {
  // //console.log("this is not undefined");
} else {
  // //console.log("this is undefined");
}

// to put a validation for err prone script
try {
  // //console.log("inside try block")
  errFunct(); // throw error
} catch (error) {
  // will work if "try" doesn't work out
  // //console.log("inside catch block");
  // //console.log(error);
  // //console.log(error.message);
  // //console.log(error.name);
} finally {
  // will work in try.catch conditions
  // //console.log("Finally came here eventually");
}

// regular expression functions
//  //console.log("regular expression functions@@@@@@");
let reg = /rajat/; // reg exp literal
reg = /rajat/g; // g means global
// reg = /rajat/i; // i means case insensitive

//  //console.log(reg);
//  //console.log(reg.source);

// functions to match expressions
let str = 'this is rajat and  my rajat';

// 1. exec() returns index / null
let result = reg.exec(str);
//  console.log(result);
result = reg.exec(str);
//  console.log(result);
result = reg.exec(str);
//  //console.log(result);

// 2. test() returns true/false
let result2 = reg.test(str);
//  //console.log("test() is : " + result2);

// 3. match() returns array / null
let result3 = str.match(reg);
//  //console.log('match() is : ');
//  //console.log(result3);

// 4. search() returns index / -1
let result4 = str.search(reg);
//  //console.log("search() is : " + result4);

// 5. replace() returns index / -1
let result5 = str.replace(reg, 'RAJAT');
//  //console.log("replace() is : " + result5);

// meta characters symbols
//  //console.log('Meta characters for regex@@@@@@@')
let regex = /rajat/;

// ^ means "carrot symbol" that machtes when string "starts with"
regex = /^raj/;

//"dollor symbol" that machtes when string "ends with"
regex = /jat$/;

//"dot symbol" that machtes when string "comes within" -> one char only
regex = /ra.at/;

//"dot symbol" that machtes when string "comes within" -> three char only
regex = /r...t/;

let strng = 'rajat is good enough for rajat and rajat is fair enough!';

let reslt = regex.exec(strng);
// //console.log(`Result from exec is`, reslt);

if (regex.test(strng)) {
  // //console.log(`${regex.source} found in ${strng}`);
} else {
  // //console.log(`${regex.source} not found in ${strng}`);
}

// Iterators in JS
//  //console.log('Iterators in JS@@@@@@');

function itratorFunc(params) {
  let index = 0;
  return {
    next: function () {
      if (index < params.length) {
        return {
          value: params[index++],
          done: false,
        };
      } else {
        return { done: true };
      }
    },
  };
}

const myarr = ['Apples', 'Grapes', 'Oranges', 'Guvava'];
//  //console.log('My array', myarr);

const itr = itratorFunc(myarr);
//  //console.log(itr.next());
// {value: "Apples", done: false}

//  //console.log(itr.next());
// {value: "Grapes", done: false}

//  //console.log(itr.next());
// {value: "Oranges", done: false}

//  //console.log(itr.next());
// {value: "Guvava", done: false}

//  //console.log(itr.next());
// {done: true}

// Generators in JS
//  //console.log('Generators in JS@@@@');

function* numGen() {
  let i = 0;
  // yield 1;
  // yield 2;
  // yield 3;
  // yield 4;
  // yield 5;

  while (true) {
    yield i++;
  }
}
const gen = numGen();
//console.log(gen.next());
// {value: 1, done: false}

//  //console.log(gen.next());
// {value: 2, done: false}

//  //console.log(gen.next());
//  //console.log(gen.next());
//  //console.log(gen.next());
//  //console.log(gen.next());

// for-in & for-of Loops
// VID-56
//console.log('for-in & for-of Loops@@@');
let arArr = ['Rajat', 'Manihs', 'Anup', 'suraj'];

// iterating an array
for (let index = 0; index < arArr.length; index++) {
  const element = arArr[index];
  //  //console.log(element);
}

let oBj = { name: 'rajat', lang: 'JS', qual: 'mca' };

// for (let ind = 0;
//     ind < Object.keys(oBj).length;
//     ind++) {
//     const elem =
//         oBj[Object.keys(oBj)[ind]];
//     //  //console.log(elem);

// }

// for-in loop // FOR OBJECTs
for (let key in oBj) {
  //  console.log(key);
}

// for-of loop // FOR ARRAYs
for (let name of arArr) {
  //  console.log(name);
}

// Maps in JS - entroduced in ES6 only
// VID-57
//  //console.log("Maps in JS@@@@@@@@@");

const mapMy = new Map();

const key1 = 'putStr',
  key2 = {},
  key3 = function () {};

// setting map value
mapMy.set(key1, 'this is my new string');
mapMy.set(key2, 'this is my obj ');
mapMy.set(key3, 'this is function');

//  //console.log(mapMy);

// getting values from Map
let getVal = mapMy.get(key1);
getVal = mapMy.get(key2);
getVal = mapMy.get(key3);
//  //console.log(getVal);

// run loop to get values
for (const key of mapMy.keys()) {
  //  //console.log('Keys: ', key);
}

for (const val of mapMy.values()) {
  //  //console.log('Values : ', val);
}

mapMy.forEach((value, key) => {
  //  //console.log('key is', key);
  //  //console.log('val is : ', value);
});

// converting map to array
let myArray = Array.from(mapMy);
//  //console.log('array of map is : ', myArray);

myArray = Array.from(mapMy.keys());
//  //console.log('array of keys is : ', myArray);

myArray = Array.from(mapMy.values());
//  //console.log('array of values is : ', myArray);

// Sets in JS
const setRs = new Set();

setRs.add('rajat');
setRs.add('rajat');
setRs.add('rajat');
setRs.add('true');
setRs.add('sharma');
setRs.add(232);
setRs.add(true);

// //console.log(setRs);
// don't take duplicate values

// //console.log('check- ', setRs.has('rajat'));
// //console.log('delete- ', setRs.delete('rajat'));

// Symbols - Premitive datatype
//console.log('Symbols - Premitive@@@');

const symb = Symbol('My symbol');
//console.log('Symbol is:', symb);
//console.log('type is:', typeof symb);
