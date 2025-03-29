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
  const privacyLink = document.getElementById("open-privacy-link");
  const privacyModal = document.getElementById("privacy-info");
  const closePrivacy = document.getElementById("close-privacy");

  // Apri il form
  openFormBtn.addEventListener("click", function () {
    formSection.classList.remove("hidden");
    overlay.classList.remove("hidden");
    body.classList.add("modal-open");
  });

  // Chiudi il form
  closeFormBtn.addEventListener("click", function () {
    formSection.classList.add("hidden");
    overlay.classList.add("hidden");
    body.classList.remove("modal-open");
    form.reset();
    form.querySelectorAll(".error-message").forEach(el => el.remove());
  });

  // Mostra popup privacy
  privacyLink.addEventListener("click", function (e) {
    e.preventDefault();
    privacyModal.classList.remove("hidden");
  });

  // Chiudi popup privacy
  closePrivacy.addEventListener("click", function () {
    privacyModal.classList.add("hidden");
  });

  // Validazione
  function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error-message")) {
      error = document.createElement("span");
      error.classList.add("error-message");
      input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
  }

  function clearError(input) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains("error-message")) {
      error.remove();
    }
  }

  function validateForm() {
    let valid = true;

    const nomeInput = form.querySelector("#nome");
    const emailInput = form.querySelector("#email");
    const altezzaInput = form.querySelector("#altezza");
    const pesoInput = form.querySelector("#peso");
    const privacyCheckbox = form.querySelector("#privacy");

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const altezza = altezzaInput.value.trim();
    const peso = pesoInput.value.trim();

    const nomeRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ'\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const numeroRegex = /^\d+(\.\d+)?$/;

    if (!nomeRegex.test(nome)) {
      showError(nomeInput, "Il nome può contenere solo lettere, spazi e apostrofi.");
      valid = false;
    } else {
      clearError(nomeInput);
    }

    if (!emailRegex.test(email)) {
      showError(emailInput, "Inserisci un indirizzo email valido.");
      valid = false;
    } else {
      clearError(emailInput);
    }

    if (!numeroRegex.test(altezza)) {
      showError(altezzaInput, "Inserisci un numero valido per l'altezza.");
      valid = false;
    } else {
      clearError(altezzaInput);
    }

    if (!numeroRegex.test(peso)) {
      showError(pesoInput, "Inserisci un numero valido per il peso.");
      valid = false;
    } else {
      clearError(pesoInput);
    }

    if (!privacyCheckbox.checked) {
      alert("Devi accettare l'informativa sulla privacy.");
      valid = false;
    }

    return valid;
  }

  // Invia il form
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
          thankYouMessage.classList.remove("hidden");
          overlay.classList.remove("hidden");

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

  // Apri video
  openLinksBtn.addEventListener("click", function () {
    videoModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    body.classList.add("modal-open");
  });

  // Chiudi video
  closeVideoBtn.addEventListener("click", function () {
    videoModal.classList.add("hidden");
    overlay.classList.add("hidden");
    body.classList.remove("modal-open");
  });

  // Logo ingrandito
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