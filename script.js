const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const btnSubmit = document.querySelector('#submitRegister');
const btnSubmitLogin = document.querySelector('#submitLogin');
const spanUser = document.querySelector('#username-aprov');
const Remember = document.querySelector('#Remember')
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
    // Hide the login form and show the "Aprovado" form
    document.querySelector('.form-box.register').style.display = 'none';
    document.querySelector('.form-box.LoginAprov').style.display = 'block';
    
    // Trigger the transition by adding the active-popup class
    wrapper.classList.add('active-popup');
    
    // Find the registered user's information
    const registeredUser = listaDados.find(user => user.email === inputEmail);
    spanUser.innerHTML = `${registeredUser.username}`;
})

btnSubmitLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const loginEmail = document.getElementById('email').value;
    const foundUser = listaDados.find(user => user.email === loginEmail);
    
    if (foundUser) {
          // Hide the login form and show the "Aprovado" form
          document.querySelector('.form-box.login').style.display = 'none';
          document.querySelector('.form-box.LoginAprov').style.display = 'block';
          
          // Trigger the transition by adding the active-popup class
          wrapper.classList.add('active-popup');
        // Update the span with the logged in username
        spanUser.innerHTML = `${foundUser.username}`;
    } else {
        alert('Email not found. Please register.');
    }
});


document.getElementById('changeAccount').addEventListener('click', () => {
    // Show the login form and hide the "Aprovado" form
    document.querySelector('.form-box.register').style.display = 'none';
    document.querySelector('.form-box.LoginAprov').style.display = 'none'; // Hide the "Aprovado" form
    document.querySelector('.form-box.login').style.display = 'block'; // Show the login form

    // Remove the active-popup class to exit the popup state
    wrapper.classList.remove('active-popup');
});