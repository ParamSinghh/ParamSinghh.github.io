function toggleMenu(forceOpen) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (!menu || !icon) {
    return;
  }

  const shouldOpen =
    typeof forceOpen === "boolean" ? forceOpen : !menu.classList.contains("open");

  menu.classList.toggle("open", shouldOpen);
  icon.classList.toggle("open", shouldOpen);
  icon.setAttribute("aria-expanded", String(shouldOpen));
  icon.setAttribute("aria-label", shouldOpen ? "Close navigation menu" : "Open navigation menu");
}

document.addEventListener("click", (event) => {
  const menu = document.querySelector(".hamburger-menu");

  if (!menu || menu.contains(event.target)) {
    return;
  }

  toggleMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1200) {
    toggleMenu(false);
  }
});
