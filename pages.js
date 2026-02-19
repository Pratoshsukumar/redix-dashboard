// pages.js - shared page behaviours (dropdown + navigation)

// User dropdown behaviour
const userBtn = document.getElementById("userBtn");
const userMenu = document.getElementById("userMenu");
const userDropdown = document.getElementById("userDropdown");

function openUserMenu() {
  userMenu?.classList.add("open");
  userBtn?.setAttribute("aria-expanded", "true");
}
function closeUserMenu() {
  userMenu?.classList.remove("open");
  userBtn?.setAttribute("aria-expanded", "false");
}
function toggleUserMenu() {
  const isOpen = userMenu?.classList.contains("open");
  if (isOpen) closeUserMenu();
  else openUserMenu();
}

userBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleUserMenu();
});

document.addEventListener("click", (e) => {
  if (!userDropdown) return;
  if (!userDropdown.contains(e.target)) closeUserMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeUserMenu();
});

// Menu actions
document.getElementById("editProfileBtn")?.addEventListener("click", () => {
  closeUserMenu();
  window.location.href = "./profile.html";
});

document.getElementById("retailModeBtn")?.addEventListener("click", () => {
  closeUserMenu();
  const current = localStorage.getItem("retailMode") === "true";
  localStorage.setItem("retailMode", (!current).toString());
  alert(`Retail Mode: ${!current ? "Activated" : "Deactivated"}`);
});

document.getElementById("logoutBtn")?.addEventListener("click", () => {
  closeUserMenu();
  sessionStorage.clear();
  localStorage.removeItem("authToken");
  window.location.href = "./login.html";
});
