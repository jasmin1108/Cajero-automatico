const usuarioCajero=  [
    {
        nombre:"Jasmin Arroyo",
        email:"jasmina@gmail.com",
        cuenta: 1,
        clave:"7412",
        saldo:"500",
        log:[
            {
                fecha: new Date(),
                monto: 100,
                type: "depositar"
            },
            {
                fecha: new Date(),
                monto: 200,
                type: "retirar"
            },
            {
                fecha: new Date(),
                monto: 200,
                type: "transferencia"
        }
        ]
    }, 
    {
        nombre:"Juan Perez",
        email:"juanp54@gmail.com",
        clave:"8523",
        cuenta: 2,
        saldo:"320",
        log:[
            {
                fecha: new Date(),
                monto: 500,
                type: "depositar"
            },
            {
                fecha: new Date(),
                monto: 200,
                type: "retirar"
            },
            {
                fecha: new Date(),
                monto: 20,
                type: "transferencia"
            }
        ]
    },
    {
        nombre:"Carlos Gonzales",
        email:"carlos96@gmail.com",
        cuenta: 3,
        clave:"9632",
        saldo:"800",
        log:[
            {
                fecha: new Date(),
                monto: 500,
                type: "depositar"
                },
            {
                    fecha: new Date(),
                    monto: 200,
                    type: "retirar"
            },
            {
                fecha: new Date(),
                monto: 0,
                type: "transferencia"
            }

        ]
    }
]


const error = document.querySelector('#error-login')
const input = document.querySelector('input')
const form = document.querySelector('#login')

// input.addEventListener('focus', function() {
//     if (!error.classList.contains('hidden')){
//     error.classList.add("hidden");
//     form.reset();
//     }
// })

form.addEventListener('submit', function (e) {
// no me refresca la pagina 
e.preventDefault();

const data = new FormData (form)
    const {loginEmail,loginPassword} = Object.fromEntries(data)
    console.log ({loginEmail, loginPassword})

    if (loginEmail.length === 0) {
        error.classList.remove('hidden')
        error.classList.add('alert-danger')
        error.textContent= 'Debes escribir tu email es obligatorio';
        return
    } 
    if (loginPassword.length === 0){
        error.classList.remove('hidden')
        error.classList.add('alert-danger')
        error.textContent= 'se te olvido tu clave';
        return
    }

    
    const loginTotal = usuarioCajero.find(user => user.email === loginEmail && user.clave=== loginPassword)
    console.log (loginTotal)

    if ( loginTotal === undefined ) {
        error.classList.remove('hidden')
        error.classList.add('alert-danger')
        error.textContent= 'Error en los datos ingresados'
        return

    }  else {
        error.classList.remove('hidden')
        error.classList.add('alert-info')
        error.textContent = 'Bienvenido'
        window.sessionStorage.setItem('currentUser', JSON.stringify(loginTotal))
        window.sessionStorage.setItem('Users', JSON.stringify(usuarioCajero))
        window.location.href = '/index.html'
        }       
    })
    
