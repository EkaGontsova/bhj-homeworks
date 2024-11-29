document.addEventListener("DOMContentLoaded", () => {
  const cartProducts = document.querySelector(".cart__products");
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const decrementButton = product.querySelector(
      ".product__quantity-control_dec"
    );
    const incrementButton = product.querySelector(
      ".product__quantity-control_inc"
    );
    const quantityValue = product.querySelector(".product__quantity-value");
    const addButton = product.querySelector(".product__add");

    let quantity = parseInt(quantityValue.textContent);

    decrementButton.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityValue.textContent = quantity;
      }
    });

    incrementButton.addEventListener("click", () => {
      quantity++;
      quantityValue.textContent = quantity;
    });

    addButton.addEventListener("click", () => {
      const productId = product.dataset.id;
      const productImage = product.querySelector(".product__image").src;

      const existingCartProduct = cartProducts.querySelector(
        `.cart__product[data-id="${productId}"]`
      );

      if (existingCartProduct) {
        const existingCount = existingCartProduct.querySelector(
          ".cart__product-count"
        );
        existingCount.textContent =
          parseInt(existingCount.textContent) + quantity;
      } else {
        const cartProduct = document.createElement("div");
        cartProduct.className = "cart__product";
        cartProduct.dataset.id = productId;

        const count = document.createElement("div");
        count.className = "cart__product-count";
        count.textContent = quantity;

        const img = document.createElement("img");
        img.className = "cart__product-image";
        img.src = productImage;

        cartProduct.appendChild(count);
        cartProduct.appendChild(img);
        cartProducts.appendChild(cartProduct);
      }

      document.querySelector(".cart").style.display = "block";
    });
  });
});
