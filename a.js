// Código JavaScript para agregar efectos de movimiento
const menuItems = document.querySelectorAll(".menu ul li");

menuItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
});

//boton de busqueda
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const productResults = document.querySelector(".product-list");

  // Simulamos una lista de productos
  const products = [
    { id: 1, name: "Producto 1", description: "Descripción del producto 1..." },
    { id: 2, name: "Producto 2", description: "Descripción del producto 2..." },
    // Agrega más productos aquí
  ];

  // Agrega un evento de clic al botón de búsqueda
  searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Filtra los productos que coinciden con el término de búsqueda
    const filteredProducts = products.filter(function (product) {
      return product.name.toLowerCase().includes(searchTerm);
    });

    // Muestra los resultados en la página
    displaySearchResults(filteredProducts);
  });

  // Función para mostrar los resultados de búsqueda en la página
  function displaySearchResults(results) {
    productResults.innerHTML = "";

    if (results.length === 0) {
      productResults.innerHTML = "<p>No se encontraron resultados.</p>";
    } else {
      results.forEach(function (product) {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
                  <h2>${product.name}</h2>
                  <p>${product.description}</p>
              `;
        productResults.appendChild(productElement);
      });
    }
  }
});
