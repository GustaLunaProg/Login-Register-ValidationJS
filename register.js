const inputPicker = document.querySelectorAll("input");

const registerButton= document.getElementById('register')
const errorButton = document.getElementById('errorButton')

const erro = document.getElementById("erro");
const success = document.getElementById("success");

let user = document.getElementById("user");
let password = document.getElementById("password");
let passwordConfirm = document.getElementById("passwordConfirm");
let email = document.getElementById("email");
let name = document.getElementById("name");

let emailVerificarion = false;

const emailChecker = () => {
  if (/[@]/.test(email.value)) {
    emailVerificarion = true;
  } else {
    emailVerificarion = false;
  }
};

const errorAlert = () => {
  erro.style.display = "flex";
  success.style.display = "none";
  user.style.color = "red";
  password.style.color = "red";
  passwordConfirm.style.color = "red";
  email.style.color = "red";
  name.style.color = "red";

};

const successAlert = () => {
  success.style.display = "flex";
  erro.style.display = "none";
  user.style.color = "green";
  password.style.color = "green";
  passwordConfirm.style.color = "green";
  email.style.color = "green";
  name.style.color = "green";
};

function cadastrar() {
  emailChecker();
  if (user.value.length <= 2) {
    errorAlert();
  } else if (/[^a-zA-Z0-9\-\/]/.test(user.value)) {
    errorAlert();
  } else if (emailVerificarion != true) {
    errorAlert();
  } else if (password.value.length <= 5) {
    errorAlert();
  } else if (password.value != passwordConfirm.value) {
    errorAlert();
  } else {
    successAlert();
    let  listaUser  = JSON.parse(localStorage.getItem('listaUser') || '[]')
    listaUser.push(
      {
        user: user.value,
        password: password.value,
        email: email.value,
        name: name.value
        
      }
    )
    localStorage.setItem('listaUser',JSON.stringify(listaUser))
    setTimeout(()=>{
      window.location.href = 'login.html'
    },1000)
  }
}
