//https://jsonplaceholder.typicode.com/users

// const asyncname = async () =>{
// try {
//     const apiResp = await fetch('https://jsonplaceholder.typicode.com/userfs')
//     console.log(apiResp);
//     if(apiResp.ok){
//         const data = await apiResp.json();
//         console.log(data);
//     }
// }
// catch(err){
//     console.log('message: ' + err);
// }
// }


fetch('https://jsonplaceholder.typicode.com/users')
.then((apiResp)=> apiResp.json())
.then((data)=> {
    console.log(data);
})
.catch(err => console.log(err))