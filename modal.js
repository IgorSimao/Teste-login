const button = document.getElementById("openModal")


const modalWrapper = document.querySelector('.modal-wrapper')

button.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){
    const isEsckey = event.key ==='Escape'

    if(isEsckey){
        modalWrapper.classList.add('invisible')
    }
})


const user = document.getElementById("user")
user.onkeyup = function teste (event) {
    const username = (event.currentTarget.value)
    console.log('user:', username)
    if(username == 'igor'){
        console.log('Usuario correto!')
    }
    
    else {
        console.log('Usuário incorreto, tente novamente!')
    }

}


const pass = document.getElementById('pass')
pass.onkeyup = function(event) {
    const password = (event.currentTarget.value)
    console.log('Senha:', password)
    
}

//if(username == "igor" && password == "nico"){
   // console.log("Credenciais corretas!")

//}