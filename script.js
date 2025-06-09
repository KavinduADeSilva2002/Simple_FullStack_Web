const authModal = document.querySelector('.auth-modal');
const loginBtnModal = document.querySelector('.login-btn-modal');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const closeBtnModal = document.querySelector('.close-btn-modal');
const profileBox = document.querySelector('.profile-box');
const avatarCircle = document.querySelector('.avatar-circle');
const alertBox = document.querySelector('.alert-box');


if(loginBtnModal)loginBtnModal.addEventListener('click', () => {
    authModal.classList.add('show');
});

closeBtnModal.addEventListener('click', () => {
    authModal.classList.remove('show', 'slide');
});

registerLink.addEventListener('click', () => {
    authModal.classList.add('slide');
});

loginLink.addEventListener('click', () => {
    authModal.classList.remove('slide');
});

if(avatarCircle)avatarCircle.addEventListener('click', () => {
    profileBox.classList.toggle('show');
});

if (alertBox) {
    // Force a reflow to ensure animation works
    alertBox.offsetHeight;
    
    // Show alert
    requestAnimationFrame(() => {
        alertBox.classList.add('show');
    });

    // Hide alert after 6 seconds
    setTimeout(() => {
        alertBox.classList.remove('show');
        setTimeout(() => alertBox.remove(), 300);
    }, 6000);
}

