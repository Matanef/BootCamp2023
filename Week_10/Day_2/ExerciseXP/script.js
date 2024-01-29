const compareToTen = (num) => {
    return new Promise((resolve, reject) => {
        if(num<=10){
            resolve (`${num} is lower or equal to 10`);
        }else {
            reject (`${num} is higher then 10`);
        }       
    });
}

compareToTen(11)
.then((result)=> {
    console.log("Fulfielld:", result);
})
.catch((error)=> {
    console.log("Rejected:", error);
})

const reultFunc = compareToTen(10);
console.log(reultFunc);

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//-----------------------------------------------------------
  const p = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('Success')
    },4000)

})

p
.then(result => {
    console.log(result);
})
.catch(error =>{
    console.log(error);
})

//-----------------------------------------------------------

const myValue = Promise.resolve(3);
myValue
.then(result => {
    console.log(result);
})

//dont understand the catch
.catch(error =>{
    console.log(error);
})

