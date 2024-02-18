fetch('http://localhost:5001/users')


const form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const first_name = document.getElementById('firstname').value
    const last_name = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    fetch("http://localhost:5001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ first_name, last_name, email, username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
})

})

// fetch("http://localhost:5001/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ first_name, last_name, email, username, password }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       const html = data.map((item) => {
//         return `<div style="display:inline-block;border:1px solid #000;text-align:center; margin:20px;padding:20px;">
//               <h2>${item.firstname}</h2> 
//               <h3>${item.username}</h3>
//           </div>`;
//       });
//       document.getElementById("root").innerHTML = html.join("");
//     })
//     .catch((e) => {
//       console.log(e);
//     });


