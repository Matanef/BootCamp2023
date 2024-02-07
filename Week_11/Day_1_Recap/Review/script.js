// const sayHey = () =>{
//     console.log("hey");
// }
// sayHey()

// /**
//  * fecth(URL, { })
//  */

// // const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
// // const URL = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${API_KEY}&q=`

// const url = 'https://free-phone-number-lookup-and-validation-api1.p.rapidapi.com/json?number=';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1f68075d61msh6ee87b3ad1bf9b8p19489ajsn4e05d3ae9509',
// 		'X-RapidAPI-Host': 'free-phone-number-lookup-and-validation-api1.p.rapidapi.com'
// 	}
// };

// const search4Images = ()=> {
//     const category = document.getElementById('input').value;
//     fetch(url+category,options) 
//         .then((res)=> {
//         return res.json(); // text(), json() depends on the server
//     })
//         .then((resdata)=> {
//             console.log(resdata);
//     })
//         .catch(error => {
//             console.log('error=>',error.message);
//         });
// }
// const render = (arr) =>{
//     const html = arr.map(item=>{
//         return `<div>
//         <img src=${item.images.fixed_width_small_still.url}/>
//         </div>`
//     })
// };


/** fetch with POST method 
 * 
*/

// function addUser(e){
//     e.preventDefault();
//     const name = e.target.elements[0].value;
//     const username = e.target.elements[1].value;
//     const email = e.target.elements[2].value;

    const URL = 'https://users-18kl.onrender.com/userjson';

//     fetch(URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': "application/json",
//         },
//         body: JSON.stringify({name, username, email}),
//     })
//     .then((res) => res.json())
//     .then((users) => {
//         console.log(users);
//     });
// }

// /** Async function */

// async function x() {
//     return 1
// }

// const y = async function(){
//     return 2
// }

// const z = async () =>{
//     throw new Error (5) //Reject
//     return 3 //Resolve
// }
// //return a promise
// // console.log(x());
// // console.log(y());
// // z()
// // .then(res=>{ //await
// //     console.log(res);
// // })
// // .catch(e=>{
// //     console.log(e.message);
// // })
// async function getZ() {
//     try {
//         const res = await z()
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// // getZ()

// const getTheSum = (a,b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a+b)
//         }, 5000);
//     })
// }


// const calculateSum = async (x,y)=>{
//     try {
//         const res = await getTheSum(x,y)
//         console.log(res);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// calculateSum(2,3)

// const url = 'https://jsonplaceholder.typicode.com/users'

// const fetchJason =  async() => {
// try {
//     const res = await fetch(url);
//     const data = await res.json()
//     console.log(data);
// } catch (error) {
//     console.log(error);
    
// }
// }
// fetchJason()
// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }
//     return response.json(); 
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Fetch error:', error);

// });

// const reolveJson = async ()=>{
//     try {
//         const res = await fetchJason()
//         console.log(res);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// reolveJson()


// /**CallBack Function */

// function exec(func,param){
//     return func(param);
// }
// function x(){
//     console.log('hello');
// }
// // exec(x)

// function getName(param){
//     return param + ` this is my name`
// }
// let res = getName('dan')
// console.log(res);

// let res2 = exec(getName, 'aaa')
// console.log(res2);



let user = {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
        city: 'TLV'
    }
  };

  const {address:{city}} = user
  console.log(city);
// let id = user.id
// let name = user["name"]

// console.log();
// console.log();

// const {username, id, email,name} =user;
// console.log(username, id, email,name);

// let arr = [4,6,2];
// const [a,b,c] =arr
// console.log(a,b,c);

