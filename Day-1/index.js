const form = document.getElementById('loginForm').addEventListener('submit',function(event){
    event.preventDefault();

    const mail = document.getElementById('usermail').value;
    const password = document.getElementById('password').value;

    if (mail && password) {
        alert('login successful');
    } else {
        alert('Please fill the below fields');
    }
})