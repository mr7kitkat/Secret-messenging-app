const form = document.querySelector('#create-message .form');
const userInput = form.querySelector('input');
const link = document.querySelector('.show-link');
const linkInput = link.querySelector('input');
const createMsgContatior = document.querySelector('#create-message');
const showMsgContainor = document.querySelector('#show-message');
const heading = showMsgContainor.querySelector('h1');


const HashPart = window.location.hash.replace('#','');
if (HashPart) {
    createMsgContatior.classList.add('hide');
    showMsgContainor.classList.remove('hide');
    heading.innerHTML = `${atob(HashPart)}`;
}


form.addEventListener('submit', event => {
    event.preventDefault();
    const encryptedMsg = btoa(userInput.value)
    linkInput.value = `${window.location}#${encryptedMsg}`; 
    link.classList.remove('hide');
    form.classList.add('hide');

    linkInput.select();
})