document.addEventListener("DOMContentLoaded", function () {
  const rotators = document.querySelectorAll(".rotator");

  rotators.forEach((rotator) => {
    const cases = rotator.querySelectorAll(".rotator__case");
    let currentIndex = 0;

    function switchCase() {
      cases[currentIndex].classList.remove("rotator__case_active");

      currentIndex = (currentIndex + 1) % cases.length;

      cases[currentIndex].classList.add("rotator__case_active");

      const nextCase = cases[currentIndex];
      const color = nextCase.getAttribute("data-color");
      if (color) {
        nextCase.style.color = color;
      }

      const speed = nextCase.getAttribute("data-speed") || 1000;
      setTimeout(switchCase, speed);
    }

    switchCase();
  });
});
