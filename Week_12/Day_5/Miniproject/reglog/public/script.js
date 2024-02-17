fetch('http://localhost:5001/users')


fetch("http://localhost:5001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstname, lastname, email, username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const html = data.map((item) => {
        return `<div style="display:inline-block;border:1px solid #000;text-align:center; margin:20px;padding:20px;">
              <h2>${item.firstname}</h2> 
              <h3>${item.username}</h3>
          </div>`;
      });
      document.getElementById("root").innerHTML = html.join("");
    })
    .catch((e) => {
      console.log(e);
    });
