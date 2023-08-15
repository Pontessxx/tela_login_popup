const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const btnSubmit = document.querySelector('#submitRegister')
const btnSubmitLogin = document.querySelector('#submitLogin')

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    document.querySelectorAll('.wrapper').forEach(element => {
        element.classList.add('active-popup');
    });
});

iconClose.addEventListener('click', () => {
    document.querySelectorAll('.wrapper').forEach(element => {
        element.classList.remove('active-popup');
    });
});

//array
let listaDados = JSON.parse(localStorage.getItem('dados')) || [];

//construtor
function Campo(email,username){
    this.email = email;
    this.username = username;
}
btnSubmit.addEventListener('click',()=>{
    const inputEmail = document.getElementById('email-register').value
    const inputUser = document.getElementById('username').value
    let info = new Campo(inputEmail,inputUser)
    listaDados.push(info)
    localStorage.setItem('dados',JSON.stringify(listaDados))

})
btnSubmitLogin.addEventListener('click',(evento)=>{
    evento.preventDefault();
    const procuraUsuario = listaDados.find(user => user.email === loginEmail.value);
    if(procuraUsuario){
        alert(`Your username is: ${foundUser.username}`);
    } else {
        alert('Email not found. Please register.');
    }
    const loginEmail = document.getElementById('email');
    
})

