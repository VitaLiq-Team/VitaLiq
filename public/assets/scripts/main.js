

// main.js — Lógica Persona 2

const services = document.querySelectorAll(".service-card"); // cada card de servicio
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

document.addEventListener("DOMContentLoaded", () => {
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
});


