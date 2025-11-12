document.addEventListener('DOMContentLoaded', function() {

    // Manejo del formulario de registro
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evitar recarga de página

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();

            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }

            // Aquí se puede agregar lógica de envío real (AJAX, etc.)
            alert(`Account creation started for:\nName: ${name}\nEmail: ${email}`);

            // Limpiar formulario después del envío
            signupForm.reset();
        });
    }

    // Scroll suave al hacer clic en la flecha
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // Scroll suave para enlaces de navegación
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación de las tarjetas de servicio
    const services = document.querySelectorAll(".service-card");
    services.forEach(service => {
        service.addEventListener("mouseenter", () => {
            service.style.transform = "scale(1.05)";
            service.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
        });
        service.addEventListener("mouseleave", () => {
            service.style.transform = "scale(1)";
            service.style.boxShadow = "none";
        });
    });

    // Sección de reseñas
    const reviews = [
        {
            rating: 4,
            text: "Doctor Chat makes it so easy to get quick medical advice. I love how the AI understands my symptoms and gives me accurate guidance instantly!",
            image: "images/per3.jpg",
            name: "Maria Perez",
        },
        {
            rating: 5,
            text: "IA Doc is a great tool for checking my health data. It feels like having a personal digital doctor that explains everything in simple terms.",
            image: "images/per1.jpeg",
            name: "Luis Rodriguez",
        },
        {
            rating: 4,
            text: "Pill Snap is a life-saver! I just take a photo of my prescription, and it tells me everything about the medicine. Super useful and fast!",
            image: "images/per2.jpg",
            name: "Marco Leguia",
        },
    ];

    const container = document.getElementById("reviews-container");
    if (container) {
        reviews.forEach((review) => {
            const card = document.createElement("div");
            card.classList.add("review-card");

            const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

            card.innerHTML = `
                <div class="stars">${stars}</div>
                <p class="review-text">${review.text}</p>
                <div class="reviewer">
                    <img src="${review.image}" alt="${review.name}">
                    <span>${review.name}</span>
                </div>
            `;

            container.appendChild(card);
        });
    }

}); // ← ESTA es la única llave de cierre principal


