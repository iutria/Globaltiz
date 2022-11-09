
const urlWhatsapp = 'https://web.whatsapp.com/';
const urlFacebook = 'https://www.facebook.com/globaltiz';
const urlInstagram = 'https://www.instagram.com/globaltiz_it';

const paginas = `
<ul class="nav justify-content-end">
    <li class="nav-item" >
        <a class="nav-link" href="#que-hacemos">¿Que hacemos?</a> 
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#clientes">Clientes</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#contactanos">Contactanos</a>
    </li>
</ul>
`;

const redes = `
    <a href="${urlWhatsapp}" target="_blank"><i class="bi bi-whatsapp"></i></a>
    <a href="${urlFacebook}" target="_blank"><i class="bi bi-facebook"></i></a>
    <a href="${urlInstagram}" target="_blank"><i class="bi bi-instagram"></i></a>
`;

window.addEventListener("scroll",function(){
    
    document.querySelector('nav').style.background = window.pageYOffset >= 50 ? '#0577BE': 'transparent';
    
    // const red  = document.getElementById('redes');

    // if(window.pageYOffset>5800){
    //     red.style.right = '-100px'
    // }else{
    //     red.style.right = '0px';
    // }

    
})

/**
 * cargar el menu
 */
const offcanvasbody = document.querySelector('.offcanvas-body');
const menu = document.getElementById('menu');
offcanvasbody.innerHTML = paginas;
menu.innerHTML = paginas;


/**
 * cargar redes
 */
const redesVista = document.querySelector('.redes');
redesVista.innerHTML = redes;
