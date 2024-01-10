const user = document.querySelector('#username');
const pass = document.querySelector('#password');
const btn = document.querySelector('#login-button');
const userLengthErr = document.querySelector('.length-error');
const form = document.querySelector('.login-form');

btn.addEventListener('click', function(e) {
    e.preventDefault(); 
    if(plugIn() === false){
        console.log(false);
        return userLengthErr.classList.remove('clear'); 
    } else {
        console.log(true);
        userLengthErr.classList.add('clear');
        return form.reset();
    }
});

const currentUsername = () => {
    return user.value; 
}

function plugIn() {
    const thisName = currentUsername();
    return checkingUsername(thisName);
}

function checkingUsername(username){
    // const username = user.value;
    console.log(username);
    if(username.length < 8){
        console.log("testing user-length...");
        return false; 
    } 
    return true; 
}

