let password = document.getElementById("password")
let passwordMsg = document.getElementById("passwordMsg")

let fst = document.getElementById("first")
let snd = document.getElementById("second")
let trd = document.getElementById("third")

let tick1 = document.getElementById('tick1')
let tick2 = document.getElementById('tick2')
let tick3 = document.getElementById('tick3')
let dot1 = document.getElementById('dot1')
let dot2 = document.getElementById('dot2')
let dot3 = document.getElementById('dot3')
let close1 = document.getElementById('close1')
let close2 = document.getElementById('close2')
let close3 = document.getElementById('close3')
let head = document.getElementById('head')

let btn = document.getElementById('btn')
let m1 = document.getElementById('m1')
let m2 = document.getElementById('m2')
let m3 = document.getElementById('m3')
let m4 = document.getElementById('m4')
let m5 = document.getElementById('m5')
let m6 = document.getElementById('m6')
let fName = document.getElementById('fName')
let lName = document.getElementById('lName')
let email = document.getElementById('email')
let option = document.getElementById('option')
let month = document.getElementById('month')
let date = document.getElementById('date')
let year = document.getElementById('year')
let check = document.getElementById('check')

let password_btn = document.getElementById('password_btn');
let showPasswordButton = document.querySelector('.showPassword');
let hidePasswordButton = document.querySelector('.hidePassword');


password.addEventListener('focus', function(){
    passwordMsg.style.display = 'block'
    passwordMsg.classList.add('show1')
    // password_btn.style.color = '#2980b9'
    password_btn.borderColor = '#3498db'
})

password.addEventListener('input', function(){
    let pwd = password.value;
    close1.style.zIndex = '10'
    close2.style.zIndex = '10'
    close3.style.zIndex = '10'
    dot1.style.zIndex = '-10'
    dot2.style.zIndex = '-10'
    dot3.style.zIndex = '-10'
    tick1.style.zIndex = '-10'
    tick2.style.zIndex = '-10'
    tick3.style.zIndex = '-10'
    head.style.color = 'red'
    password_btn.style.color = 'red'
    passwordMsg.style.borderColor = 'red'
    password.style.borderColor = 'red'

        // Regular expressions to check password criteria
    let uppercaseRegex = /[A-Z]/;
    let lowercaseRegex = /[a-z]/;
    let numberRegex = /[0-9]/;
    let symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;

        // Check each criteria
    let isUppercase = uppercaseRegex.test(pwd);
    let isLowercase = lowercaseRegex.test(pwd);
    let isNumber = numberRegex.test(pwd);
    let isSymbol = symbolRegex.test(pwd);
    

        // Check if all criteria are met

    if (isUppercase && isLowercase && (isNumber || isSymbol) && pwd.length>=6) {
        head.style.color = 'rgb(38, 255, 0)'
        passwordMsg.style.borderColor = 'rgb(38, 255, 0)'
        password_btn.style.color = 'rgb(38, 255, 0)'
        m3.style.display = 'block'
        m3.innerHTML = 'Password Accepted'
        m3.style.color = 'rgb(38, 255, 0)'
        tick1.style.zIndex = '10'
        dot1.style.zIndex = '-10'
        tick2.style.zIndex = '10'
        dot2.style.zIndex = '-10'
        tick3.style.zIndex = '10'
        dot3.style.zIndex = '-10'
        close1.style.zIndex = '-10'
        close2.style.zIndex = '-10'
        close3.style.zIndex = '-10'
        password.style.borderColor = 'rgb(38, 255, 0)'
    } 
    
    else{

        if (isUppercase && isLowercase) {
            tick1.style.zIndex = '10'
            dot1.style.zIndex = '-10'
            close1.style.zIndex = '-10'
            m3.style.display = 'none'
        }

        if (isNumber || isSymbol) {
            tick2.style.zIndex = '10'
            dot2.style.zIndex = '-10'
            close2.style.zIndex = '-10'
            m3.style.display = 'none'
        }

        if (pwd.length>=6) {
            tick3.style.zIndex = '10'
            dot3.style.zIndex = '-10'
            close3.style.zIndex = '-10'
            m3.style.display = 'none'
        }
    }

})

btn.addEventListener('click', function(){
    passwordMsg.style.display = 'none'

    let pwd = password.value;
    let uppercaseRegex = /[A-Z]/;
    let lowercaseRegex = /[a-z]/;
    let numberRegex = /[0-9]/;
    let symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    var emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

        // Check each criteria
    let isUppercase = uppercaseRegex.test(pwd);
    let isLowercase = lowercaseRegex.test(pwd);
    let isNumber = numberRegex.test(pwd);
    let isSymbol = symbolRegex.test(pwd);

    if(password.value === ''){
        m3.style.display = 'block'
    }else if (isUppercase && isLowercase && (isNumber || isSymbol) && pwd.length>=6) {
        m3.style.display = 'none'
    }
    else{
        m3.style.display = 'block'
        m3.innerHTML = 'Invalid Password'
        m3.style.color = 'red'
    }

    if(fName.value === '' || lName.value === ''){
        m1.style.display = 'block'
    }else{
        m1.style.display = 'none'
    }

    if(email.value === ''){
        m2.style.display = 'block'
    }else if (!emailPattern.test(email.value)) {
        m2.style.display = 'block'
        m2.innerHTML = "Please enter a valid email address."
        return false;
    }else{
        m2.style.display = 'none'
    }

    if(month.value === '' || date.value === '' || year.value === ''){
        m5.style.display = 'block'
    }else{
        m5.style.display = 'none'
    }

    if(option.value === ''){
        m4.style.display = 'block'
    }else{
        m4.style.display = 'none'
    }

    if (!check.checked) {
        m6.style.display = 'block'
        return;
    }else{
        m6.style.display = 'none'
    }

    if((fName.value != '' && lName.value != '') && email.value != '' && (month.value != '' && date.value != '' && year.value != '') && option.value != '' && (isUppercase && isLowercase && (isNumber || isSymbol) && pwd.length>=6)){
        alert(`Thanks for Login.`);
    }

})

document.addEventListener('DOMContentLoaded', function () {

    showPasswordButton.addEventListener('click', function () {
        password.type = 'text';
        showPasswordButton.style.display = 'none';
        hidePasswordButton.style.display = 'block';
    });

    hidePasswordButton.addEventListener('click', function () {
        password.type = 'password';
        showPasswordButton.style.display = 'block';
        hidePasswordButton.style.display = 'none';
    });
});