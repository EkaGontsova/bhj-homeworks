document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  document.body.appendChild(tooltip);

  document.querySelectorAll(".has-tooltip").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const tooltipText = element.getAttribute("title");
      tooltip.textContent = tooltipText;
      tooltip.classList.add("tooltip_active");

      const rect = element.getBoundingClientRect();
      tooltip.style.left = `${rect.left + window.scrollX}px`;
      tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("has-tooltip")) {
      tooltip.classList.remove("tooltip_active");
    }
  });
});
