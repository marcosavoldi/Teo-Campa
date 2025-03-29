document.addEventListener("DOMContentLoaded", function () {
  const openFormBtn = document.getElementById("open-form-btn");
  const formSection = document.getElementById("form-section");
  const form = formSection.querySelector("form");
  const overlay = document.getElementById("overlay");
  const thankYouMessage = document.getElementById("thank-you-message");
  const body = document.body;
  const closeFormBtn = document.getElementById("close-form-btn");
  const openLinksBtn = document.getElementById("open-links-btn");
  const videoModal = document.getElementById("video-modal");
  const closeVideoBtn = document.getElementById("close-video-btn");
  const logoImg = document.getElementById("logo-img");
  const logoModal = document.getElementById("logo-modal");
  const closeLogoModal = document.getElementById("close-logo-modal");

  // Evento click su X per chiudere il form
  closeFormBtn.addEventListener("click", function () {
    formSection.classList.add("hidden");
    overlay.classList.add("hidden");
    body.classList.remove("modal-open");
    form.reset();
    form.querySelectorAll(".error-message").forEach(el => el.remove());
  });

  // Mostra il form
  openFormBtn.addEventListener("click", function () {
    formSection.classList.remove("hidden");
    overlay.classList.remove("hidden");
    body.classList.add("modal-open");
  });

  // Mostra errore
  function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error-message")) {
      error = document.createElement("span");
      error.classList.add("error-message");
      input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
  }

  // Rimuove errore
  function clearError(input) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains("error-message")) {
      error.remove();
    }
  }

  // Validazione personalizzata
  function validateForm() {
    let valid = true;

    const nomeInput = form.querySelector("#nome");
    const emailInput = form.querySelector("#email");
    const altezzaInput = form.querySelector("#altezza");
    const pesoInput = form.querySelector("#peso");

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const altezza = altezzaInput.value.trim();
    const peso = pesoInput.value.trim();

    const nomeRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ'\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const numeroRegex = /^\d+(\.\d+)?$/;

    // Nome
    if (!nomeRegex.test(nome)) {
      showError(nomeInput, "Il nome può contenere solo lettere, spazi e apostrofi.");
      valid = false;
    } else {
      clearError(nomeInput);
    }

    // Email
    if (!emailRegex.test(email)) {
      showError(emailInput, "Inserisci un indirizzo email valido.");
      valid = false;
    } else {
      clearError(emailInput);
    }

    // Altezza
    if (!numeroRegex.test(altezza)) {
      showError(altezzaInput, "Inserisci un numero valido per l'altezza.");
      valid = false;
    } else {
      clearError(altezzaInput);
    }

    // Peso
    if (!numeroRegex.test(peso)) {
      showError(pesoInput, "Inserisci un numero valido per il peso.");
      valid = false;
    } else {
      clearError(pesoInput);
    }

    if (!valid) {
      formSection.scrollTo({ top: 0, behavior: 'smooth' });
      return false;
    }

    return true;
  }

  // Invio form a Formspree
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    })
      .then(response => {
        if (response.ok) {
          formSection.classList.add("hidden");
          overlay.classList.remove("hidden");
          thankYouMessage.classList.remove("hidden");

          setTimeout(() => {
            thankYouMessage.classList.add("hidden");
            overlay.classList.add("hidden");
            body.classList.remove("modal-open");
            form.reset();
          }, 5000);
        } else {
          alert("Errore durante l'invio. Riprova.");
        }
      })
      .catch(error => {
        console.error("Errore invio:", error);
        alert("Errore di rete. Controlla la connessione.");
      });
  });

  // Apertura modale video
  openLinksBtn.addEventListener("click", function () {
    videoModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    body.classList.add("modal-open");
  });

  closeVideoBtn.addEventListener("click", function () {
    videoModal.classList.add("hidden");
    overlay.classList.add("hidden");
    body.classList.remove("modal-open");
  });

  // Logo cliccabile per ingrandimento
  if (logoImg && logoModal) {
    logoImg.addEventListener("click", () => {
      logoModal.classList.remove("hidden");
      body.classList.add("modal-open");
    });

    closeLogoModal.addEventListener("click", () => {
      logoModal.classList.add("hidden");
      body.classList.remove("modal-open");
    });
  }
});