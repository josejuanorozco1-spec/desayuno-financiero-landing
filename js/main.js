// Desayuno Financiero — V1
// Tracking preparado SIN proveedor conectado todavía (no hay Pixel/Analytics
// autorizado para este proyecto). Cada evento se empuja a window.dataLayer y,
// si algún día se carga Meta Pixel (fbq) o GA4 (gtag), también se les envía.
// No se envía información personal: solo nombre del evento, botón y UTMs.
//
// Eventos:
//   landing_view          — se cargó la landing
//   whatsapp_click_hero   — clic en el botón del hero
//   whatsapp_click_final  — clic en el botón final
//   whatsapp_click        — total de clics hacia WhatsApp (se dispara en ambos)

(function () {
  "use strict";

  var UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

  function utms() {
    var out = {};
    try {
      var params = new URLSearchParams(window.location.search);
      UTM_KEYS.forEach(function (k) {
        var v = params.get(k);
        if (v) out[k] = v.slice(0, 100);
      });
    } catch (e) { /* navegador viejo: sin UTMs */ }
    return out;
  }

  function track(name, extra) {
    var data = Object.assign({ event: name }, utms(), extra || {});

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);

    // Meta Pixel — solo si existe (no se carga ningún pixel aquí).
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", name, data);
      if (name === "whatsapp_click") window.fbq("track", "Contact");
    }

    // GA4 — solo si existe.
    if (typeof window.gtag === "function") {
      window.gtag("event", name, data);
    }
  }

  track("landing_view");

  document.querySelectorAll("[data-track]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var name = btn.getAttribute("data-track");
      track(name);
      track("whatsapp_click", { cta: name === "whatsapp_click_hero" ? "hero" : "final" });
    });
  });

  // Espacios para fotos reales: ocultos en producción, visibles con ?fotos=1
  if (/[?&]fotos=1\b/.test(window.location.search)) {
    document.querySelectorAll("[data-photo-slot]").forEach(function (el) {
      el.hidden = false;
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
