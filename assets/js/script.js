const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', () => { 
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.navLink').forEach( 
    n => n.addEventListener('click', () => { 
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
)


function showModal() { 
    const element = document.querySelector('.modal')
    element.classList.add('showModal')
}

function hideModal() { 
    const element = document.querySelector('.modal')
    element.classList.remove('showModal')
}

const btn = document.querySelector('.copy')
const textArea = document.querySelector('textarea')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    navigator.clipboard.writeText(textArea.value)
    alert('E-mail copiado para área de transferência!')

    hideModal()
})

//abrir pagina de projetos 
function openCorDePapel() { 
    window.location.href = 'cordepapel.html'
}

//abrir pagina de projetos 
function openCartafy() { 
    window.location.href = 'cartafy.html'
}