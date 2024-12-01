const itemsContainer = document.getElementById("items");
const loader = document.getElementById("loader");

async function loadCurrencyRates() {
  loader.classList.add("loader_active");

  try {
    const response = await fetch(
      "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
    );
    const data = await response.json();

    const valute = data.response.Valute;

    for (const key in valute) {
      const currency = valute[key];

      const item = document.createElement("div");
      item.className = "item";

      const code = document.createElement("div");
      code.className = "item__code";
      code.textContent = currency.CharCode;

      const value = document.createElement("div");
      value.className = "item__value";
      value.textContent = currency.Value.toFixed(2);

      const currencyLabel = document.createElement("div");
      currencyLabel.className = "item__currency";
      currencyLabel.textContent = "руб.";

      item.appendChild(code);
      item.appendChild(value);
      item.appendChild(currencyLabel);
      itemsContainer.appendChild(item);
    }
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  } finally {
    loader.classList.remove("loader_active");
  }
}

loadCurrencyRates();
