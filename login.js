function login( ){

let user = document.getElementById('user')
let password = document.getElementById('password')

let listaUser  = []

let userValid = {
 user: '',
 password: '',
 name: '',
 email: ''  
}
listaUser = JSON.parse(localStorage.getItem('listaUser'))

listaUser.forEach((item) => {
    if (user.value == item.user && password.value == item.password) {
        userValid = {
            user: item.user,
            password: item.password,
            name: item.name,
            email: item.email
        }
    }
});
    if (user.value == userValid.user && password.value == userValid.password) {
        alert('Success')
    }else{
        let error = document.getElementById('erro')
        error.style.display='flex'
    }
}