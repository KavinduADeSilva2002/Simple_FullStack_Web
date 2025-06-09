const authModal = document.querySelector('.auth-modal');
const loginBtnModal = document.querySelector('.login-btn-modal');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const closeBtnModal = document.querySelector('.close-btn-modal');

loginBtnModal.addEventListener('click', () => {
    authModal.style.display = 'flex';
});

closeBtnModal.addEventListener('click', () => {
    authModal.style.display = 'none';
});

registerLink.addEventListener('click', () => {
    authModal.classList.add('slide');
});

loginLink.addEventListener('click', () => {
    authModal.classList.remove('slide');
});