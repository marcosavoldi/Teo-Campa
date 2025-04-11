document.addEventListener("DOMContentLoaded", function () {
  // Elementi comuni
  const openFormBtn = document.getElementById("open-form-btn");
  const formSection = document.getElementById("form-section");
  const form = formSection.querySelector("form");
  const overlay = document.getElementById("overlay");
  const thankYouMessage = document.getElementById("thank-you-message");
  const body = document.body;
  const closeFormBtn = document.getElementById("close-form-btn");
  const openLinksBtn = document.getElementById("open-links-btn");

  // Elementi per il form MailerLite
  const mlFormSection = document.getElementById("ml-form-section");
  const mlForm = mlFormSection.querySelector("form");
  const closeMlFormBtn = document.getElementById("close-ml-form-btn");

  // Elementi per il logo
  const logoImg = document.getElementById("logo-img");
  const logoModal = document.getElementById("logo-modal");
  const closeLogoModal = document.getElementById("close-logo-modal");

  // Elementi per la privacy: associamo l'evento a tutti i link con classe "open-privacy-link"
  const privacyLinks = document.querySelectorAll(".open-privacy-link");
  const privacyModal = document.getElementById("privacy-info");
  const closePrivacy = document.getElementById("close-privacy");

  // ---- Apertura del form Formspree ----
  openFormBtn.addEventListener("click", function () {
    formSection.classList.remove("hidden");
    overlay.classList.remove("hidden");
    body.classList.add("modal-open");
  });

  // ---- Chiusura del form Formspree ----
  closeFormBtn.addEventListener("click", function () {
    formSection.classList.add("hidden");
    overlay.classList.add("hidden");
    body.classList.remove("modal-open");
    form.reset();
    form.querySelectorAll(".error-message").forEach(el => el.remove());
  });

  // ---- Apertura popup privacy per tutti i link con classe "open-privacy-link" ----
  privacyLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      privacyModal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      body.classList.add("modal-open");
    });
  });

  // ---- Chiusura popup privacy ----
  closePrivacy.addEventListener("click", function () {
    privacyModal.classList.add("hidden");
    overlay.classList.add("hidden");
    body.classList.remove("modal-open");
  });

  // ---- Funzioni di validazione comuni ----
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

  // ---- Validazione del form Formspree ----
  function validateForm() {
    let valid = true;
    const nomeInput = form.querySelector("#nome");
    const emailInput = form.querySelector("#email");
    const altezzaInput = form.querySelector("#altezza");
    const pesoInput = form.querySelector("#peso");
    // Considera il contenitore della checkbox: se non esiste, usa il parent dell'input checkbox
    const privacyCheckbox = form.querySelector("#privacy");
    const checkboxContainer = form.querySelector(".checkbox-container") || privacyCheckbox.parentNode;

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

    // Gestione della checkbox privacy
    const oldError = checkboxContainer.querySelector(".error-message");
    if (oldError) oldError.remove();

    if (!privacyCheckbox.checked) {
      const error = document.createElement("span");
      error.classList.add("error-message");
      error.textContent = "Accetta le condizioni per proseguire";
      checkboxContainer.appendChild(error);
      valid = false;
    }

    return valid;
  }

  // ---- Gestione submit del form Formspree ----
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateForm()) {
      const firstError = form.querySelector(".error-message");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
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

  // ---- Validazione del form MailerLite ----
  function validateMlForm() {
    let valid = true;
    // Seleziona i campi: nome, cognome ed email
    const nameInput = mlForm.querySelector("input[name='fields[nome]']");
    const surnameInput = mlForm.querySelector("input[name='fields[cognome]']");
    const emailInput = mlForm.querySelector("input[name='fields[email]']");
    const privacyCheckbox = mlForm.querySelector("input[type='checkbox'][name='privacy']");

    const nameValue = nameInput.value.trim();
    const surnameValue = surnameInput.value.trim();
    const emailValue = emailInput.value.trim();

    const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ'\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!nameRegex.test(nameValue)) {
      showError(nameInput, "Il nome può contenere solo lettere, spazi e apostrofi.");
      valid = false;
    } else {
      clearError(nameInput);
    }

    if (!nameRegex.test(surnameValue)) {
      showError(surnameInput, "Il cognome può contenere solo lettere, spazi e apostrofi.");
      valid = false;
    } else {
      clearError(surnameInput);
    }

    if (!emailRegex.test(emailValue)) {
      showError(emailInput, "Inserisci un indirizzo email valido.");
      valid = false;
    } else {
      clearError(emailInput);
    }

    // Gestione della checkbox: usa il parent (in questo caso il label)
    const checkboxContainer = privacyCheckbox.parentNode;
    const oldError = checkboxContainer.querySelector(".error-message");
    if (oldError) oldError.remove();
    
    if (!privacyCheckbox.checked) {
      const error = document.createElement("span");
      error.classList.add("error-message");
      error.textContent = "Accetta le condizioni per proseguire";
      checkboxContainer.appendChild(error);
      valid = false;
    }
    return valid;
  }

  // ---- Gestione submit del form MailerLite via AJAX ----
  mlForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (!validateMlForm()) {
      const firstError = mlForm.querySelector(".error-message");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    const mlFormData = new FormData(mlForm);
    fetch(mlForm.action, {
      method: "POST",
      body: mlFormData,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          mlFormSection.classList.add("hidden");
          // Modifichiamo temporaneamente il contenuto del modale di ringraziamento per MailerLite
          thankYouMessage.innerHTML = `<p>Grazie per esserti iscritto! Controlla la tua email, riceverai a breve il link per il download gratuito dei video.</p>`;
          thankYouMessage.classList.remove("hidden");
          overlay.classList.remove("hidden");
          body.classList.add("modal-open");

          setTimeout(() => {
            thankYouMessage.classList.add("hidden");
            overlay.classList.add("hidden");
            body.classList.remove("modal-open");
            mlForm.reset();
            // Ripristina il contenuto originario del messaggio di ringraziamento
            thankYouMessage.innerHTML = `<p>
              Ottimo lavoro!<br>
              Hai fatto il primo passo, grazie.<br>
              Ora dacci il tempo di capire come aiutarti.<br>
              Ti contatteremo a breve.
            </p>`;
          }, 5000);
        } else {
          alert("Errore: " + JSON.stringify(result.errors));
        }
      })
      .catch(error => {
        console.error("Errore invio:", error);
        alert("Errore di rete. Controlla la connessione.");
      });
  });

  // ---- Apertura del form MailerLite al click su "SCARICA I VIDEO" ----
  openLinksBtn.addEventListener("click", function () {
    if (mlFormSection) {
      mlFormSection.classList.remove("hidden");
      overlay.classList.remove("hidden");
      body.classList.add("modal-open");
    } else {
      console.error("mlFormSection non trovato. Verifica il markup HTML.");
    }
  });

  // ---- Chiusura del form MailerLite ----
  if (closeMlFormBtn) {
    closeMlFormBtn.addEventListener("click", function () {
      mlFormSection.classList.add("hidden");
      overlay.classList.add("hidden");
      body.classList.remove("modal-open");
    });
  }

  // ---- Gestione del modal per l'ingrandimento del logo ----
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