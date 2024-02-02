/**
 * *try & catch
 */
// console.log('Before');
// for(let i = 0;i<5;i++){
//     console.log(i);
// }
// try{
//     console.log(i);
// }
// catch(err){
//     console.log(err.stack);
// }

// console.log(i);
// console.log('After');
// console.log('After After');


// let s = "aa"
// const solution = (S)=>{
//     const strArr = s.split('')
//     strArr.forEach(element => {
//         if(element !== "aa"){
//         console.log(false);
//         }
//     });
// }
// solution()


const solution = (S) => {
let lastA_index = S.lastIndexOf('a');
let firstB_index = S.indexOf('b');
if(firstB_index === -1 || lastA_index === -1 ||lastA_index <firstB_index){
    return true;
}
return false
}
 let result = solution("");
 console.log(result);



 /** fetch */

 fetch('https://jsonplaceholder.typicode.com/users?id=1')
 .then(res =>{
    return res.json();
 })
 .then(users =>{
    console.log(users);
 })

//  const render = (arr) => {
//     const html = arr.map((item) => {
//         return `<div>
//         ${item.name} ${item.email} ${item.username}
//         </div>`; 
//     });
//     document.getElementById('root').innerHTML = html.join("");
//  }


let newuser ={
name: "matan",
email: "blah@blah.blah",
username: "matane",
}
 /** POST */

 fetch("https://users-18kl.onrender.com/userjson", {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body:JSON.stringify(newuser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch((err)=>
    console.log(err))

    const render = (arr) => {
        const html = arr.map((item) => {
            return `<div>
            ${item.name} ${item.email} ${item.username}
            </div>`; 
        });
        document.getElementById('root').innerHTML = html.join("");
     }


    //  const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
    //  const options = {
    //      method: 'GET',
    //      headers: {
    //          'X-RapidAPI-Key': '1f68075d61msh6ee87b3ad1bf9b8p19489ajsn4e05d3ae9509',
    //          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //      }
    //  };
     
    //  try {
    //      const response = await fetch(url, options);
    //      const result = await response.text();
    //      console.log(result);
    //  } catch (error) {
    //      console.error(error);
    //  }

     /** async / Await ES8 */

const simplePromise = () =>{
        return new Promise((resolve, reject) => {
              resolve(1)
        })
     };

simplePromise().then((result) => console.log(result));

async function simpleSync() {
    return 11;
     }
console.log(simpleSync());
simpleSync()
.then((result) => console.log(result))
.catch((e) => console.log(e));



fetch("https://jsonplaceholder.typicode.com/users")
.then((result) => {
    return res.json();
})
.then((data)=> {
    render(data);
});



async function fetchData(){
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await result.json();
        console.log(data);
        render(data)
    }catch (error){
        console.log("error", error);
    }
}
fetchData()


const getX = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(5);
      }, 2000);
    });
  };
  
  const getY = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(6);
      }, 3000);
    });
  };

  async function getXY() {
    try {
        const x = await getX();
        const y = await getY();
        return x + y;
    }
    
}

// Example usage
getXY()
    .then(result => console.log("Sum:", result))
    .catch(error => console.error("Error:", error));