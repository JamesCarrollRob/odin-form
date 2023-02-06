
const subtn = document.getElementById("submitBtn");
const email = document.getElementById("mail");
console.log("The file is linked");


let firstName = document.getElementById('first-name')
let lastName = document.getElementById('last-name')
// subtn.addEventListener('click', ()=> {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: firstName.innerText,
//     body: lastName.innerText,
    
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   })

 

  email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an email address!");
    } else {
      email.setCustomValidity("");
    }
  });
  