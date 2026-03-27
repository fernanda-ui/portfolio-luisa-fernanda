let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("sqlserver");
        habilidades[4].classList.add("excel");
        habilidades[5].classList.add("analitico");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Efecto máquina de escribir para la viñeta de bienvenida
function efectoMaquinaEscribir() {
    const texto = "Hola, bienvenida/o a mi hoja de vida. Te invito a conocer un poco más sobre mí y lo que puedo aportar";
    const elemento = document.getElementById("texto-maquina");
    const vineta = document.querySelector(".vineta-bienvenida");
    let indice = 0;
    
    if (!elemento || !vineta) return;
    
    // Mostrar la viñeta
    vineta.style.opacity = "1";
    vineta.classList.remove("fade-out");
    vineta.classList.add("typing");
    elemento.textContent = "";
    
    // Efecto de escritura
    const intervalo = setInterval(() => {
        if (indice < texto.length) {
            elemento.textContent += texto.charAt(indice);
            indice++;
        } else {
            clearInterval(intervalo);
            vineta.classList.remove("typing");
            
            // Esperar 3 segundos después de escribir, luego desvanecer
            setTimeout(() => {
                vineta.classList.add("fade-out");
                
                // Reiniciar después de 5 segundos
                setTimeout(() => {
                    efectoMaquinaEscribir();
                }, 5000);
            }, 3000);
        }
    }, 50); // Velocidad de escritura
}

// Iniciar el efecto cuando cargue la página
window.addEventListener('load', () => {
    setTimeout(() => {
        efectoMaquinaEscribir();
    }, 1000); // Esperar 1 segundo después de cargar la página
}); 

// MODAL PORTFOLIO
const proyectos = {
    1: {
        titulo: "ALIRA",
        imagen: "img/alira.png",
        descripcion: "Es un asistente virtual basado en inteligencia artificial orientado a mejorar la interacción entre el usuario y el computador mediante comandos de voz. Enfoque en IA emocional, concebida para acompañar al usuario, comprender su estado emocional y ofrecer una experiencia similar a la de un asistente psicológico digital. Proyecto que gano en el tercer seminario de Inmersion de la ciencia, la tecnologia y la Innovacion en Mompox",
        link: "https://www.facebook.com/share/p/1FRZDZm5Y9/?mibextid=wwXIfr"
    },
    2: {
        titulo: "IRIS",
        imagen: "img/iris-flotante.png",
        descripcion: "Es un asistente virtual basado en inteligencia artificial, diseñado exclusivamente para computadoras, que optimiza la interacción del usuario mediante comandos de voz. - Facilita las tareas diarias. - Cuenta con un personaje animado que permanece visible en la pantalla, brindando atención continua 24/7 y respuesta tanto por voz como texto. - Iris se encuentra actualmente en proceso de desarrollo, con funcionalidades en constante evolución y mejora. El proyecto no está finalizado, ya que continúa en fase de implementación, pruebas y optimización, incorporando progresivamente nuevas capacidades de inteligencia artificial, automatización y personalización de la experiencia del usuario.",
        link: "https://drive.google.com/file/d/1bxqUGAHgkICyMDVpu2LNZ4A3OukrLvPS/view?usp=sharing"
    }
};

function abrirModal(id) {
    const proyecto = proyectos[id];
    if (!proyecto) return;
    
    document.getElementById('modalTitulo').textContent = proyecto.titulo;
    document.getElementById('modalImg').src = proyecto.imagen;
    document.getElementById('modalDescripcion').textContent = proyecto.descripcion;
    
    const tecnologiasDiv = document.getElementById('modalTecnologias');
    if (proyecto.tecnologias && proyecto.tecnologias.length > 0) {
        tecnologiasDiv.innerHTML = proyecto.tecnologias.map(tech => 
            `<span>${tech}</span>`
        ).join('');
    } else {
        tecnologiasDiv.innerHTML = '';
    }
    
    const linkBtn = document.getElementById('modalLink');
    linkBtn.href = proyecto.link;
    
    document.getElementById('modalPortfolio').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Evitar scroll
}

function cerrarModal() {
    document.getElementById('modalPortfolio').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('modalPortfolio');
    if (event.target === modal) {
        cerrarModal();
    }
} 