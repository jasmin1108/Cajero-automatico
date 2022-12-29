const saludo = document.querySelector('#saludoUsuarios')
const modal =  document.querySelector('#modal')
const backdrop =  document.querySelector('#backdrop')
const modalSpan =  document.querySelector('#modal span')
const currentUser =  JSON.parse(window.sessionStorage.getItem('currentUser'))
const tituloModal = document.querySelector('#tituloModal')
const bodyModal = document.querySelector('#contenido')
const error = document.querySelector('#error')

// // construccion del formulario 

const input = document.createElement('input')
const submit = document.createElement('button')
const input2= document.createElement('input')
input.type='number'
input2.type= 'number'



// saludos del usuario registrado 
document.addEventListener('DOMContentLoaded', () => {

const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))
console.log (currentUser.nombre)
saludo.textContent = `Hola, ${currentUser.nombre}`
})

// modal saldo
const consultarSaldo = document.querySelector('#saldo')
consultarSaldo.addEventListener('click', () => {
    abrirModal()

    const {saldo} = JSON.parse(window.sessionStorage.getItem('currentUser'))
    bodyModal.textContent = `$ ${saldo}`
    tituloModal.textContent = 'Tu saldo es de:'

})

// Depositos
const buttonDepositos = document.querySelector('#depositar')
buttonDepositos.addEventListener('click', () => {
    abrirModal()

    const {depositar} = JSON.parse(window.sessionStorage.getItem('currentUser'))
    bodyModal.innerHTML = ""

    const fragmem = document.createDocumentFragment ()
    input.id = "nuevoDeposito"
    input.placeholder = "ingresa el valor a depositar" 
    submit.className= "button-submit"
    submit.id = "subButton"
    submit.textContent = 'Confirmar'

    fragmem.appendChild(input)
    fragmem.appendChild(submit)
    bodyModal.appendChild(fragmem)

    tituloModal.textContent = '¿cuanto quieres depositar?'
    
    const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))
    const saldoActual = Number(currentUser.saldo)

    const nuevoDeposito= document.querySelector('#nuevoDeposito')
    const subButton= document.querySelector('#subButton')
    subButton.addEventListener('click', () => {
        if (saldoActual + Number (nuevoDeposito.value) > 1000) {
            error.classList.remove('hidden')
            error.classList.add('alert-danger')
            error.textContent = 'El valor ingresado supera el limite de deposito de tu cuenta';
            return

        }else {
            error.classList.remove('hidden')
            error.classList.add('alert-info')
            error.textContent = 'El valor a sido agregado a su saldo'
            
            const updateCurrentUser = {
                ...currentUser,
                saldo: saldoActual + Number(nuevoDeposito.value),
            }
            window.sessionStorage.setItem('currentUser', JSON.stringify(updateCurrentUser))
            return
        }
    })
})

// retiro
const buttRetiro = document.querySelector('#retirar')
buttRetiro.addEventListener('click', () => {
    abrirModal()

    const {retirar} = JSON.parse(window.sessionStorage.getItem('currentUser'))
    bodyModal.innerHTML = ""  
    const fragment = document.createDocumentFragment ()
    input.id = "nuevoRetiro"
    input.placeholder = "Ingresa el valor que va ha retirar"   
    submit.className= "button-submit"
    submit.id = "buttonRetiro"
    submit.textContent = 'Confirmar'

    fragment.appendChild(input)
    fragment.appendChild(submit)
    bodyModal.appendChild(fragment)
    
    tituloModal.textContent = '¿cuanto quieres retirar?'

    const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))
    const retiroActual = Number(currentUser.saldo)

    const nuevoRetiro= document.querySelector('#nuevoRetiro')
    const buttonRetiro= document.querySelector('#buttonRetiro')
    buttonRetiro.addEventListener('click', () => {
        if (retiroActual - Number(nuevoRetiro.value) < 10) {
            error.classList.remove('hidden')
            error.classList.add('alert-danger')
            error.textContent = 'El valor ingresado de tu retiro supera el saldo minimo de tu cuenta';
            return


        }else {
            error.classList.remove('hidden')
            error.classList.add('alert-info')
            error.textContent = 'El valor ingresado a sido retirado satisfactoriamente'
            
            const updateCurrentUser = {
                ...currentUser,
                saldo: retiroActual - Number(nuevoRetiro.value),
            }
            window.sessionStorage.setItem('currentUser', JSON.stringify(updateCurrentUser))
        return
        }
        
        
    })
})

// // transferencia
// const buttTransferencia = document.querySelector('#transferencia')
// buttTransferencia.addEventListener('click',  () => {
//     abrirModal()

//     const {transferencia} = JSON.parse(window.sessionStorage.getItem('currentUser'))
//     bodyModal.innerHTML = ""

//     const fragmem = document.createDocumentFragment ()
//     // input3.id="buttCorreo"
//     // input3.placeholder="Ingresa el email de la cuenta a la cual vas a transferir"
//     // form.id="formulario"
//     input2.id = "buttCuenta"
//     input2.placeholder =  "Ingresa la cuenta a la cual vas a transferir"
//     input2.name ="cuentaInput"
//     input.id="buttMonto"
//     input.placeholder="Ingresa el valor que quieres transferir"
//     input.name="montoInput"
//     submit.className= "button-submit"
//     submit.id = "buttTransf"
//     submit.textContent = 'Confirmar'
    

//     fragmem.appendChild(input)
//     fragmem.appendChild(input2)
//     // fragmem.appendChild(form)
//     // fragmem.appendChild(input3)
//     fragmem.appendChild(submit)
//     bodyModal.appendChild(fragmem)
//     tituloModal.textContent = 'Transferencias'
    
//     const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))
//     const usersTransfer =JSON.parse(window.sessionStorage.getItem('Users'))
//     const saldotran = Number(currentUser.saldo)

//     const buttCuenta = document.querySelector('#buttCuenta')
//     const buttMonto = document.querySelector('#buttMonto')
//     // const buttCorreo = document.querySelector('#buttCorreo')
//     const buttTransf= document.querySelector('#buttTransf')

//     buttTransf.addEventListener('click', () => {
//     // aqui validad el formulario no este vacio 
    
//     const {cuentaInput, montoInput} =usersTransfer
//     console.log ({cuentaInput, montoInput})

//         if (cuentaInput === 0) {
//             error.classList.remove('hidden')
//             error.classList.add('alert-danger')
//             error.textContent = 'complete este campo, es obligatorio';
//             return
//         }
//         if (montoInput === 0){
//             error.classList.remove('hidden')
//             error.classList.add('alert-danger')
//             error.textContent= 'complete este campo, es obligatorio';
//             return
//         }
    
//         const userTransferencia = usersTransfer.find( ({cuenta}) => cuenta === Number(cuenta)) 
//         console.log(userTransferencia)

//         const newSaldo = saldotran - Number(buttMonto.value)
//         console.log(newSaldo)
//         if (newSaldo < 10 ) {
//             error.classList.remove('hidden')
//             error.classList.add('alert-danger')
//             error.textContent = 'El valor ingresado es inferior al limite permitido de tu cuenta';
//             return
//         }else {
//             error.classList.remove('hidden')
//             error.classList.add('alert-info')
//             error.textContent = 'Su transferencia ha sido exitosa'
            
//             const dateCurrentUsertrans = {
//                 ...currentUser,
//                 saldo: newSaldo,
                
//             }
            
//             window.sessionStorage.setItem('currentUser', JSON.stringify(dateCurrentUsertrans))
//         return
//         }
        
//     })
// })



const abrirModal = () => {
    modal.classList.remove('hidden')
    backdrop.classList.remove('hidden')
}

// const cerrarModal = () => {
//     modal.classList.remove('hidden')
//     backdrop.classList.remove('hidden')
//     error.classList.add('hidden')
// }

modalSpan.addEventListener('click', () =>  {
    modal.classList.add ('hidden')
    backdrop.classList.add('hidden')
    error.classList.add('hidden')
})

backdrop.addEventListener('click', () => {
    modal.classList.add('hidden')
    backdrop.classList.add('hidden')
    error.classList.add('hidden')
})

