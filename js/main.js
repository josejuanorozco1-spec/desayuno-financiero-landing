// Desayuno Financiero — JS base (V1 scaffold)
// Sin lógica de conversión definitiva todavía (eso depende de cómo
// decidan que funcione el CTA de reservación: WhatsApp directo, form, etc.)

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // TODO: cuando se defina el mecanismo de reservación
  // (link de WhatsApp precargado / formulario / calendario),
  // agregar aquí el manejo correspondiente del CTA (#reservar).
});
