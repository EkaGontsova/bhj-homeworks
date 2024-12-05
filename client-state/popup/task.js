function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

function showModal() {
  const modal = document.getElementById("subscribe-modal");
  modal.classList.add("modal_active");
}

function closeModal() {
  const modal = document.getElementById("subscribe-modal");
  modal.classList.remove("modal_active");
  setCookie("modalClosed", "true", 365);
}

if (getCookie("modalClosed") !== "true") {
  showModal();
}

document.querySelector(".modal__close_times").onclick = closeModal;
