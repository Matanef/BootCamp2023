// function getX(){
//     setTimeout(()=>{
//         return 5    
//     },1000)
    
// }
// function getY(){
//     return 6;
// }

// function getXY() {
//     let x = getX();
//     console.log('x=>',x);
//     let y = getY();
//     console.log('y=>', y);
//     console.log(x+y);
// }

// getXY()

// console.log('before');
// setTimeout(()=> {
//     getXY();
// },1000)
// getXY()
// console.log('after');

// CallBack

// function myCallBack(){
//     console.log('CallBack Executed');
// }

// function exeCallBack(func){
//     func();
// }

// exeCallBack(myCallBack);

// function getX(callback){
//     console.log(callback);
//     setTimeout(()=> {
//         callback(5);
// },1);
// }

// function getY(callback){
//     console.log(callback);
//     callback(6);
// }

// function getXY(){
//     getX((x)=>{
//         getY((y)=>{
//             console.log(y+x);
//         })
//     })

// }
// getXY();

/** Promise 
 * Pending
 * fulfiled -> Resolve
 * fulfield -> Reject
*/
//  new Promise((resolve, reject) =>{
//     ///...
//  })


// const p = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve(5)
//     },5000)

// })

// console.log(p);
// console.log('before');
// // function main(){
// //     try {
// //         h;
// //     } catch (error) {
// //         console.log(error.message);
// //     }
// //     return 6;
// // }
// // main()
// console.log('after');

// function x(){
//     console.log(e.messagem, 'x functiuon line 90');
// }



// const p = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         reject(5)
//     },5000)

// })

// console.log(p);

// p.then((response) => {
//     console.log(response);
// })

// .catch(err => {
//     console.log('err=>',err);
// })

// const flip = ()=>{
//     const coin = Math.floor(Math.random()*3);
//     return coin < 2 ? (coin === 0? 'head': 'tail'): 'side';
// };

// const flipCoin = new Promise((resolve, reject) => {
//    setTimeout(() => {
//         const flipResult = flip();
//         if(flipResult=== 'head' || flipResult === 'tail'){
//             resolve(flipResult)
//         }else{
//             reject(flipResult)
//         }
//    }, 2000); 
// })

// flipCoin.then(result => {
//     console.log(result);
// })
// .catch(e =>{
//     console.log('Coin on the side');
// })

// function getX(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(5)
//         },2000);
//     })

    
// }
// function getY(){
//     return 6;
// }

// function getXY() {
//     let x = getX();
//     console.log('x=>',x);
//     x.then(numx =>{
//         console.log(numx);
//     let y = getY();
//     console.log('y=>', y);
//     console.log(numx+y);
//     })
//     // let y = getY();
//     // console.log('y=>', y);
//     // console.log(x+y);
// }

// getXY()


/**
 * 1. simulateAsyncOperation function return a Promise with data as
 * Array of objects from server as json
  const arr = [
         { username: "aaa", email: "aaa@gmail.com" },
         { username: "bbb", email: "bbb@gmail.com" },
         { username: "ccc", email: "ccc@gmail.com" },
       ];
 * Simulate successful completion after 2 seconds
 * 2. Call this function and log the data as an Array datatype
 * 3. Simulate an error
 * 4. return to step 2, and create render function that will display the users on the page*/


// const prom = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve(5)
//     },5000)

// })

// console.log(prom);
// console.log('before');
// // function main(){
// //     try {
// //         h;
// //     } catch (error) {
// //         console.log(error.message);
// //     }
// //     return 6;
// // }
// // main()
// console.log('after');


// const simulateAsyncOperation  = () =>{
//     const arr = [
//         { username: "aaa", email: "aaa@gmail.com" },
//         { username: "bbb", email: "bbb@gmail.com" },
//         { username: "ccc", email: "ccc@gmail.com" },
//       ];
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(JSON.stringify(arr))
//             // reject(new Error("server is down"))
//         }, 3000);
//       })
// }


//   simulateAsyncOperation().then((response) => {
//     render(JSON.parse(response));
// })

// .catch(err => {
//     console.log('err=>',err);
// })

// const render = (arr) =>{
//     const html = arr.map((item) =>{
//         return `<div>${item.username} ${item.email}</div>`;
//     });
//     document.getElementById('root').innerHTML = html.join("");
// };



// const p = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         reject('John')
//     },1000)

// })


// p.then((response) => {
//     return response + "@gmail.com";
// })
// .then(ret =>{
//     return ret + ' this is my email.'
// })
// .then(ret =>{
//     console.log(ret);
// })

// .catch(err => {
//     console.log('err=>',err);
// })

/** Promises Static method
 * Promise.all([..])
 * Promise.allSetteled([..])
 * Promise.any([..])
 */

const promise1 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('Promise 1')
    },6000)

})

const promise2 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        reject('Promise 2')
    },2000)

})

const promise3 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('Promise 3')
    },3000)

})

Promise.any([promise1, promise2, promise3])
.then((result) => {
    console.log(result);
})