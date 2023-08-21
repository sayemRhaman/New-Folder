

document.getElementById('btnSubmit').addEventListener('click', function(){
    const emailFild = document.getElementById('userEmail');
    const email = emailFild.value;


    const passwordFild = document.getElementById('userPassword');
    const password = passwordFild.value;

    if (email === 'Sohagimim37@gmail.com' && password === 'SayemRhaman') {
        window.location.href = 'inside.html';
    }
    else if(password !== 'SayemRhaman') {
       alert ('wrong password');
    }
    else{
        alert('invaled user');
    }

})