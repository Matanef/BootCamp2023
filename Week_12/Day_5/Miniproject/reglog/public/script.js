
const adduser = ()=> {
  const form = document.getElementById('form');

  form.addEventListener('submit', function(event){
      event.preventDefault();
      const first_name = document.getElementById('firstName').value
      const last_name = document.getElementById('lastName').value
      const email = document.getElementById('email').value
      const username = document.getElementById('username').value
      const password = document.getElementById('password').value

      const formData = {
          first_name,
          last_name,
          email,
          username,
          password
      };

    console.log(formData);

      fetch("http://localhost:5001/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      })
      .then(res => {
          if (!res.ok) {
            throw new Error('failed to register user')
          }
          return res.json()
      })
      .then((data) => {
          console.log('success', data);
      })
      .catch(err =>{
          console.log('error' , err );
      });

  });
};

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


