// script.js

document.addEventListener("DOMContentLoaded", function () {
    const openFormBtn = document.getElementById("open-form-btn");
    const formSection = document.getElementById("form-section");
    const form = formSection.querySelector("form");
    const overlay = document.getElementById("overlay");
    const thankYouMessage = document.getElementById("thank-you-message");
    const body = document.body;
  
    // Mostra il form
    openFormBtn.addEventListener("click", function () {
      formSection.classList.remove("hidden");
      overlay.classList.remove("hidden");
      body.classList.add("modal-open");
    });
  
    // Crea o aggiorna un messaggio di errore sotto un campo
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
  
      const nome = nomeInput.value.trim();
      const email = emailInput.value.trim();
      const altezza = altezzaInput.value.trim();
      const peso = pesoInput.value.trim();
  
      const nomeRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ'\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      const numeroRegex = /^\d+(\.\d+)?$/;
  
      // Nome
      if (!nomeRegex.test(nome)) {
        showError(nomeInput, "Inserisci un nome valido! (no caratteri speciali, no numeri!) ");
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
  
      return valid;
    }
  
    // Gestione invio
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      if (!validateForm()) return;
  
      formSection.classList.add("hidden");
      overlay.classList.remove("hidden");
      thankYouMessage.classList.remove("hidden");
  
      setTimeout(() => {
        thankYouMessage.classList.add("hidden");
        overlay.classList.add("hidden");
        body.classList.remove("modal-open");
        form.reset();
      }, 5000);
    });
  });
  