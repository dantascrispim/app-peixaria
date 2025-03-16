
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  currentSlide = (n + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

// Inicializar carrossel automático
let slideInterval = setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

// Eventos para os dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(slideInterval);
    showSlide(index);

    // Reiniciar carrossel automático
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  });
});

// Filtro de categorias da galeria
const categoriasBtns = document.querySelectorAll(".categoria-btn");
const galeriaItems = document.querySelectorAll(".galeria-item");

categoriasBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remover classe ativa dos botões
    categoriasBtns.forEach((b) => b.classList.remove("active"));

    // Adicionar classe ativa ao botão clicado
    btn.classList.add("active");

    const categoria = btn.getAttribute("data-categoria");

    // Filtrar itens da galeria
    galeriaItems.forEach((item) => {
      if (
        categoria === "todos" ||
        item.getAttribute("data-categoria") === categoria
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Modal da galeria
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-image");
const modalClose = document.querySelector(".modal-close");

galeriaItems.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.add("active");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// Envio de mensagem ao contato discado nos campos...

function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefoneDestino = "5588994075586";

  // Formata a mensagem incluindo todos os dados do formulário
  const text = `Olá, me chamo ${nome}, Meu E-mail: ${email}, Meu Telefone: ${telefone}
    Assunto: ${mensagem}`;

  const msgFormatada = encodeURIComponent(text);

  const whatsappLink = `https://wa.me/${telefoneDestino}?text=${msgFormatada}`;

  window.open(whatsappLink, "_blank");
}
