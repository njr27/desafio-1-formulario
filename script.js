const $buttonEye1 = document.querySelector('.img-eye-1')
const $buttonEye2 = document.querySelector('.img-eye-2')

const $fieldName = document.querySelector('.name-input')
const $fieldEmail = document.querySelector('.email-input')
const $passwordField = document.querySelector('.password-input')
const $passwordFieldConfirm = document.querySelector('.confirm-password-input')


const $buttonRegister = document.querySelector('.register')



$buttonEye1.addEventListener('click', function (){
    const input = document.querySelector('#password-field')

    if (input.getAttribute('type') == 'password'){
        input.setAttribute('type', 'text')
        
    }else{
        input.setAttribute('type', 'password')
    }
})

$buttonEye2.addEventListener('click', function (){
    const input = document.querySelector('#confirm-password-field')

    if (input.getAttribute('type') == 'password'){
        input.setAttribute('type', 'text')
        
    }else{
        input.setAttribute('type', 'password')
    }
})


function verifyName(){
    

    console.log($fieldName.length)

    
    

}



$buttonRegister.addEventListener('click', function (){
    //event.preventDefault()
    verifyName()
})