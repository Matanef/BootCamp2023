// let a = 10
// let b = "Hi"
// let c = a

// c= [1,2] //0x01
// let d = [1,2] //0x02

// c= [1,2] //0x01
// console.log(`c == ${c}`);
// add(c, 3)
// console.log(`c == ${c}`);

// let d = c //0x01


// console.log(`c == d ${c == d}`);
// console.log(`b = ${b}`);
// console.log(`c = ${c}`);
// console.log(`d = ${d}`);

// function add(array, element){
//     element = element+2
//     array.push(element)
// }




let a = 5;
let b = a;
b++;

let obj = {
    a: 'a',
    b:'b',
    c: {
        deep: 'try and copy me'
    }
};
// let obj2 = obj
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha ';
console.log('obj clone and clone2 are shallow cloning meaning only first level');
console.log(obj);
console.log(clone);
console.log(clone2);
console.log('this is deep cloning so the deep object is not changed');
console.log(superClone);

// let c = [1,2,3,4,5];
// let d = c;
// //Clone array
// let d2 = [].concat(c);
// console.log(c);
// console.log(d);
// console.log('Clone');
// console.log(d2);
// d.push(187628761)
// console.log(c);
// console.log(d);
// console.log('the clone object is not affected');
// console.log(d2);
// d2.push(187628762222222)
// console.log(c);
// console.log(d);
// console.log(d2);


// let obj1= {
//     name: 'Yao', 
//     password: '123'
// }
// let obj2 = obj1;
// console.log(`obj2 and obj1 Before updateing password`);
// console.log(obj1);
// console.log(obj2);

// obj2.password = 'easypeasy'
// console.log(`obj2 and obj1 After updateing password`);
// console.log(obj1);
// console.log(obj2);
