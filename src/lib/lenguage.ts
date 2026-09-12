export function updateLanguageDOM() {
  if (typeof document === 'undefined') return;
  const isEnglish = localStorage.getItem("isEnglish") === "true";
  document.documentElement.lang = isEnglish ? "en" : "es";
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.classList.toggle(
      "hidden",
      el.getAttribute("data-lang") !== (isEnglish ? "en" : "es")
    );
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener("astro:page-load", updateLanguageDOM);
  updateLanguageDOM();
}