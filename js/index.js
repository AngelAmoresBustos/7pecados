
const pecadosData = [
    {
        sin: "ira",
        nombre: "Ira",
        descripcion: "Emoción natural de defensa, activando la amígdala. A menudo, más sobre interpretación que hechos.",
        sombra: "Una 'alarma' que te grita una verdad que callas.",
        pregunta: "¿Sientes que la ira es una señal de algo que necesitas expresar o cambiar? ¿Estás dispuesto/a a traducir esa energía?",
        virtudNombre: "Verdad y Expresión",
        virtudDetalle: "Al traducir tu ira, hallarás tu 'verdad' y la capacidad de expresar tu voz con autenticidad."
    },
    {
        sin: "gula",
        nombre: "Gula",
        descripcion: "Vinculada a la regulación del apetito y el sistema de recompensa. Puede ser un hábito o evasión emocional.",
        sombra: "A veces, esconde un 'hambre de sentido' o conexión.",
        pregunta: "¿Reconoces si tu 'hambre' va más allá de lo físico, buscando un sentido más profundo? ¿Listo/a para nutrir tu alma?",
        virtudNombre: "Sentido y Nutrición Interior",
        virtudDetalle: "Más allá del plato lleno, trabajar la gula puede nutrir tu alma con 'sentido' y conexión verdadera."
    },
    {
        sin: "avaricia",
        nombre: "Avaricia",
        descripcion: "Conectada al sistema de recompensa, donde el dinero estimula placer. La acumulación puede ser adictiva.",
        sombra: "Frecuentemente surge del 'miedo a perder' o de sentir 'no soy suficiente'.",
        pregunta: "¿Sientes que tu valor está ligado a lo que posees? ¿Estás dispuesto/a a enfrentar el miedo a la carencia?",
        virtudNombre: "Confianza y Suficiencia",
        virtudDetalle: "No eres lo que tienes. Enfrenta este miedo y cultiva la 'confianza' en tu propio valor intrínseco."
    },
    {
        sin: "lujuria",
        nombre: "Lujuria",
        descripcion: "Relacionada con sistemas hormonales y deseo sexual, con función evolutiva. Energía vital.",
        sombra: "Es vista como 'energía creativa reprimida'.",
        pregunta: "¿Sientes una poderosa energía interna que busca expresión? ¿Estás listo/a para canalizarla creativamente?",
        virtudNombre: "Creatividad y Propósito",
        virtudDetalle: "Si la callas, te quema; si la elevas, 'enciende el alma'. ¡Se transforma en 'creatividad', arte, amor, propósito!"
    },
    {
        sin: "pereza",
        nombre: "Pereza",
        descripcion: "Inclinación natural del cerebro a ahorrar energía, especialmente ante esfuerzo mental.",
        sombra: "A menudo es 'resistencia al cambio' motivada por el miedo, llevando a postergar.",
        pregunta: "¿Identificas una resistencia interna ante nuevos desafíos o cambios? ¿Te atreves a dar el primer paso?",
        virtudNombre: "Valentía y Movimiento",
        virtudDetalle: "El secreto es dar solo el primer paso, porque el 'movimiento sana' y despierta la 'valentía'."
    },
    {
        sin: "envidia",
        nombre: "Envidia",
        descripcion: "Ligada a la comparación social, con raíces evolutivas en la pertenencia grupal.",
        sombra: "Puede ser una 'brújula' que te muestra lo que deseas.",
        pregunta: "¿Sientes que la envidia te señala algo que anhelas profundamente? ¿Estás dispuesto/a a usarla como guía?",
        virtudNombre: "Inspiración y Sueños Propios",
        virtudDetalle: "¡Estúdiala y te señalará tu próximo paso! Enfrenta la envidia y podrás abrazar tus propios 'sueños'."
    },
    {
        sin: "soberbia",
        nombre: "Soberbia",
        descripcion: "Arrogancia y vanidad, a menudo una 'máscara de grandeza' para la inseguridad.",
        sombra: "Nace de la duda de si ya eres suficiente.",
        pregunta: "¿Sientes la necesidad de demostrar constantemente tu valía? ¿Estás listo/a para aceptar que ya eres suficiente?",
        virtudNombre: "Seguridad Interna y Humildad",
        virtudDetalle: "La humildad es aceptar que no necesitas demostrar nada; ¡ya eres suficiente! Gana 'seguridad' interna."
    }
];


document.addEventListener('DOMContentLoaded', () => {
            const cardsContainer = document.getElementById('cardsContainer');

            pecadosData.forEach(data => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.dataset.sin = data.sin; // Para aplicar estilos específicos

                const cardInner = document.createElement('div');
                cardInner.classList.add('card-inner');

                // Card Front
                const cardFront = document.createElement('div');
                cardFront.classList.add('card-front');
                cardFront.innerHTML = `
                    <h2>${data.nombre}</h2>
                    <p>${data.descripcion}</p>
                    <p class="shadow-insight"><em>${data.sombra}</em></p>
                    <p><small>(Haz clic para reflexionar)</small></p>
                `;

                // Card Back
                const cardBack = document.createElement('div');
                cardBack.classList.add('card-back');
                cardBack.innerHTML = `
                    <h3>Virtud Oculta:</h3>
                    <h2>${data.virtudNombre}</h2>
                    <p class="virtue-detail">${data.virtudDetalle}</p>
                `;

                cardInner.appendChild(cardFront);
                cardInner.appendChild(cardBack);
                card.appendChild(cardInner);
                cardsContainer.appendChild(card);

                card.addEventListener('click', () => {
                    if (!card.classList.contains('flipped')) {
                        // La "pregunta" ahora es un confirm. Si el usuario acepta, la tarjeta gira.
                        const quiereExplorar = confirm(`Reflexión sobre la ${data.nombre}:\n\n${data.pregunta}\n\n¿Quieres descubrir su virtud oculta?`);
                        if (quiereExplorar) {
                            card.classList.add('flipped');
                        }
                    } else {
                        // Opcional: permitir que se voltee de nuevo al hacer clic en la parte posterior
                        card.classList.remove('flipped');
                    }
                });
            });
});



// para contraer y expandir las preguntas frecuentes - efecto acordeon
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const answer = item.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});


// para mostrar y ocultar los blogs
function showBlog(blogNumber) {
    for (let index = 1; index < 3; index++) {
        const blogPost = document.getElementById(`blog-post-${index}`);
        blogPost.style.display = 'none';
    }

    const blogPost = document.getElementById(`blog-post-${blogNumber}`);
    if (blogPost) {
        blogPost.style.display = 'block';
        scrollToSection(blogPost,{ offset: 80 });
    }
}


function hideBlog(blogNumber) {
    const blogPost = document.getElementById(`blog-post-${blogNumber}`);
    if (blogPost) {
        blogPost.style.display = 'none';
        scrollToSection("blog",{ offset: 80 });
    }
}


function scrollToSection(sectionName, options = {}) {
    // Valores predeterminados para las opciones
    const defaultOptions = {
        selectorType: 'id',      // Por defecto busca por ID
        dataAttribute: 'section', // Atributo data por defecto
        offset: 0,               // Sin desplazamiento por defecto
        behavior: 'smooth'       // Scroll suave por defecto
    };
    
    // Combinar opciones predeterminadas con las proporcionadas
    const settings = {...defaultOptions, ...options};
    
    // Crear el selector adecuado según el tipo
    let selector;
    switch (settings.selectorType.toLowerCase()) {
        case 'class':
        selector = `.${sectionName}`;
        break;
        case 'data':
        selector = `[data-${settings.dataAttribute}="${sectionName}"]`;
        break;
        case 'id':
        default:
        selector = `#${sectionName}`;
        break;
    }
    
    // Buscar el elemento en el DOM
    const section = document.querySelector(selector);
    
    // Si no se encuentra el elemento, mostrar un error y retornar falso
    if (!section) {
        console.error(`La sección "${sectionName}" no fue encontrada con el selector "${selector}"`);
        return false;
    }
    
    // Calcular la posición de la sección
    const sectionPosition = section.getBoundingClientRect().top;
    const offsetPosition = sectionPosition + window.pageYOffset - settings.offset;
    
    // Realizar el scroll
    window.scrollTo({
        top: offsetPosition,
        behavior: settings.behavior
    });    
    return true;
}

