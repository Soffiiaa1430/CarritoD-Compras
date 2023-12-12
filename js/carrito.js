// Asegúrate de que la siguiente función esté en tu script.js
function buy(productId) {
    // Implementa la lógica de compra según tus necesidades
    // Por ejemplo, puedes agregar el producto al carrito y actualizar la UI
    // Aquí se muestra un ejemplo básico:
    
    const product = products.find(p => p.id === productId);
    
    if (product) {
        // Verifica si el producto ya está en el carrito
        const existingProduct = cart.find(item => item.id === productId);
        
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            // Si no está en el carrito, agrégalo
            cart.push({ ...product, quantity: 1 });
        }
        
        // Actualiza la UI del carrito
        updateCartUI();
    }
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("price-total");

    // Limpia el contenido actual del carrito
    while (cartItemsContainer.firstChild) {
        cartItemsContainer.removeChild(cartItemsContainer.firstChild);
    }

    let totalPrice = 0;

    // Recorre los elementos en el carrito
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        
        const itemName = document.createElement("p");
        itemName.textContent = `${item.product} x${item.quantity}`;
        cartItem.appendChild(itemName);

        const itemPrice = document.createElement("p");
        const totalItemPrice = item.price * item.quantity;
        itemPrice.textContent = `$${totalItemPrice} COP`;
        cartItem.appendChild(itemPrice);

        cartItemsContainer.appendChild(cartItem);

        totalPrice += totalItemPrice;
    });

    // Actualiza el total del precio en el carrito
    totalPriceElement.textContent = `$${totalPrice} COP`;
}


// Añade esto al final de tu script.js
document.getElementById("open-cart").addEventListener("click", function() {
    // Muestra el carrito cuando se hace clic en el botón
    document.querySelector(".cart-products").style.display = "block";
});

function closeCart() {
    // Cierra el carrito cuando se hace clic en el botón de cerrar
    document.querySelector(".cart-products").style.display = "none";
}
