const div = document.getElementById('root');
const adduser = ()=> {
  const form = document.getElementById('form');


  form.addEventListener('submit', function(event){
      event.preventDefault();
      const first_name = document.getElementById('firstName').value
      const last_name = document.getElementById('lastName').value
      const email = document.getElementById('email').value
      const username = document.getElementById('username').value
      const password = document.getElementById('password').value

      appendToDom(first_name, username);

      const formData = {
          first_name,
          last_name,
          email,
          username,
          password
      };

    console.log({
      first_name,
      last_name,
      email,
      username,
      password
  });

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
          return res.json(`Welcome ${first_name}, your username is ${username}`)
      })
      .then((data) => {
          console.log('success', data);
      })
      .catch(err =>{
          console.log('error' , err );
      });

  });
};

function appendToDom(first_name, username) {
  const welcomePhrase = document.createElement("p");

  welcomePhrase.setAttribute("style", " font-size:14px; border: 1px solid black; text-align: left; padding: 6px;");
  welcomePhrase.innerHTML = `Welcome ${first_name}, your username is ${username}`;
  div.append(welcomePhrase);
  console.log(first_name);
}

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


