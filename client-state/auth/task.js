document.addEventListener("DOMContentLoaded", () => {
  const signinForm = document.getElementById("signin__form");
  const welcomeBlock = document.getElementById("welcome");
  const userIdSpan = document.getElementById("user_id");
  const signinBlock = document.getElementById("signin");

  const userId = localStorage.getItem("user_id");
  if (userId) {
    showWelcome(userId);
  }

  signinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(signinForm);

    fetch(signinForm.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("user_id", data.user_id);
          showWelcome(data.user_id);
        } else {
          alert("Неверный логин/пароль");
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  });

  function showWelcome(userId) {
    userIdSpan.textContent = userId;
    signinBlock.classList.remove("signin_active");
    welcomeBlock.classList.add("welcome_active");
  }
});
