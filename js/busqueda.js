document.addEventListener('DOMContentLoaded', function () {
    displayProducts(products);

    const target = Array.from(document.querySelectorAll('.card'));
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        target.forEach(tarjeta => {
            const title = tarjeta.querySelector('.text-title').textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                tarjeta.style.display = 'block';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    });
});



// Encuentra el botón de agregar producto y el modal
const openModalButton = document.getElementById("open-modal");
const productModal = document.getElementById("product-modal");
const closeModalButton = document.getElementById("close-modal");
const createButton = document.getElementById("btn-new-create");

// Asocia eventos para mostrar y ocultar el modal
openModalButton.addEventListener("click", () => {
    productModal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
    productModal.style.display = "none";
});

// Cierra el modal si el usuario hace clic fuera de él
window.addEventListener("click", (event) => {
    if (event.target === productModal) {
        productModal.style.display = "none";
    }
});

// ... (código anterior)

createButton.addEventListener("click", () => {
    // Obtén los valores de los campos del modal
    const productName = document.getElementById("new-product").value;
    const productPrice = document.getElementById("new-price").value;
    const productDescription = document.getElementById("new-description").value;
    const productCategory = document.getElementById("new-category").value;
    const productImage = document.getElementById("new-image").value;

    // Crea un nuevo elemento de producto con la información ingresada
    const newProduct = document.createElement("div");
    newProduct.innerHTML = `
        <div style="border: 1px solid #ddd; padding: 10px; margin: 10px;">
            <h3>${productName}</h3>
            <p>${productDescription}</p>
            <p style="color: green;">Precio: ${productPrice}</p>
            <p>Categoría: ${productCategory}</p>
            <img src="${productImage}" alt="${productName}" width="100" style="border: 1px solid #ddd;">
        </div>
    `;

    // Agrega el nuevo producto al contenedor de productos (reemplaza 'products-container' con el ID de tu contenedor)
    const productsContainer = document.getElementById("products-container");
    productsContainer.appendChild(newProduct);

    // Cierra el modal después de agregar el producto
    productModal.style.display = "none";

    // Limpia los campos del modal para la próxima entrada
    document.getElementById("new-product").value = "";
    document.getElementById("new-price").value = "";
    document.getElementById("new-description").value = "";
    document.getElementById("new-category").value = "";
    document.getElementById("new-image").value = "";
});

// ... (código posterior)

