export function initNavigation() {
  const nav = document.querySelector("[data-nav]");
  const toggle = nav?.querySelector("[data-nav-toggle]");
  const list = nav?.querySelector("#nav-list");
  if (!nav || !toggle || !list) return;
  nav.classList.add("nav--collapsible");
  toggle.hidden = false;

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => setOpen(!isOpen()));
  list.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia("(min-width: 48rem)").addEventListener("change", () => setOpen(false));
}
