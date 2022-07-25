const btnSignIn= document.querySelector('.sign-in-btn');
const btnSignUp = document.querySelector('.sign-up-btn'); 
const signUp = document.querySelector('.sign-up');
const signIn  = document.querySelector('.sign-in');

document.addEventListener('click', element => {
    if (element.target === btnSignIn || element.target === btnSignUp) {
        signIn.classList.toggle('active');
        signUp.classList.toggle('active')
    }
});