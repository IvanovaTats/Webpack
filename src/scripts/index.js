import $ from 'jquery';
let form = document.getElementById('user-form');

form.addEventListener("submit", event => {
    
    let user = form.elements['user'];
    let avatarFile = form.elements['avatar-file'];
    let userError = document.getElementById('user-error') ;

    if(user.value.length < 5){
        userError.textContent = 'Invalid entry';
        userError.style.color = 'red';
        user.style.borderColor = 'red';
        user.focus();        
    }

    let posting ={
        user: user.value,
        avatarFile: avatarFile.value
    };

    let promise = $.post(
        "http://5bdd8d3033f2d100131fc4b2.mockapi.io/users", posting
    );
    promise.then(
        data => console.log('success: ', data),
        error => console.log('error: ', error)
    );

    event.preventDefault();

});