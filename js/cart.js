const products = [
    { id: '01', product: 'Guess Caliber', price: 675000 , image: 'images/reloj1-s.png','data-category': 'Caballero' },
    { id: '02', product:'Q&Q', price: 515000,  image: 'images/relojD1-s.png', 'data-category': 'Dama' },
    { id: '03', product: 'Orinet', price: 215000, image: 'images/reloj2-s.jpg', 'data-category': 'Caballero' },
    { id: '04', product: 'Loix', price: 109000, image: 'images/relojD2-s.png', 'data-category': 'Dama' },
    { id: '05', product: 'Basement',  price: 175000, image: 'images/reloj3-s.png','data-category': 'Caballero' },
    { id: '06', product: 'Yess', price: 150000, image: 'images/relojD3-s.png', 'data-category': 'Dama' },
    { id: '07', product: 'MVMT',  price: 543000,image: 'images/reloj4-s.png', 'data-category': 'Cabellero' },
    { id: '08', product: 'Casio', price: 457000, image: 'images/relojD4-s.png', 'data-category': 'Dama' },
    { id: '09', product: 'Fossil', price: 195000, image: 'images/reloj5-s.jpg',  'data-category': 'Caballero' },
    { id: '10', product: 'Fossil', price: 315000, image: 'images/relojD5-s.png', 'data-category': 'Dama' },
    { id: '11', product: 'Citizen',  price: 115000, image: 'images/reloj6-s.png', 'data-category': 'Caballero' },
    { id: '12', product: 'Q&Q', price: 815000, image: 'images/relojD6-s.png', 'data-category': 'Dama' },
    { id: '13', product: 'Citizen', price: 585000, image: 'images/reloj7-s.png', 'data-category': 'Caballero' },
    { id: '14', product:'Tommy Hilfiger', price: 195000, image: 'images/relojD7-s.png', 'data-category': 'Dama' },
    { id: '15', product: 'Guess Caliber', price: 149000, image: 'images/relojCambio-s.png', 'data-category': 'Caballero' },
    { id: '16', product: 'Yess', price: 135000, image: 'images/relojD8-s.png','data-category': 'Dama' },
    { id: '17', product: 'Citizen',  price: 194000, image: 'images/reloj9-s.png','data-category': 'Caballero' },
    { id: '18', product: 'Casio', price: 215000, image: 'images/relojD9-s.png','data-category': 'Dama' },
    { id: '19', product: 'Guess Caliber', price: 145000, image: 'images/reloj10-s.png', 'data-category': 'Caballero' },
    { id: '20', product: 'Guess' , price: 615000, image: 'images/relojD10-s.png', 'data-category': 'Dama' },
    { id: '21', product: 'Fossil', price: 713000, image: 'images/reloj11-s.png', 'data-category': 'Caballero' },
    { id: '22', product: 'Loix', price: 345000, image: 'images/relojD11-s.png', 'data-category': 'Dama' },
    { id: '23', product: 'Fossil', price: 785000, image: 'images/reloj12-s.png.png', 'data-category': 'Caballero' },
    { id: '24', product: 'Q&Q', price: 235000, image: 'images/relojD12-s.png', 'data-category': 'Dama' },
    { id: '25', product: 'Orinet', price: 187000, image: 'images/reloj13-s.png','data-category': 'Caballero' },
    { id: '26', product: 'Casio', price: 233000, image: 'images/relojD13-s.png', 'data-category': 'Dama' },
    { id: '27', product: 'Orinet', price: 765000, image: 'images/reloj14-s.png', "data-category": 'Caballero' },
    { id: '28', product: 'Tommy Hilfiger',  price: 785000, image: 'images/relojD14-s.png', 'data-category' : 'Dama' },
    { id: '29', product: 'Vizanti', price: 654000, image: 'images/reloj15-s.png', 'data-category': 'Caballero' },
    { id: '30', product: 'Tommy Hilfiger', price:187000, image: 'images/relojD15-s.png','data-category': 'Dama' },

];
function createCard(product) {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-category", product['data-category']);

    const box = document.createElement("div");
    box.className = "box";

    const cardImg = document.createElement("div");
    cardImg.className = "card-img";
    const img = document.createElement("img");
    img.className = "img3";
    img.src = product.image;
    img.alt = product.product;
    cardImg.appendChild(img);

    const cardInfo = document.createElement("div");
    cardInfo.className = "card-info";
    const title = document.createElement("p");
    title.className = "text-title";
    title.textContent = product.product;
    const description = document.createElement("p");
    description.className = "text-body";
    description.textContent = "Product description and details";
    cardInfo.appendChild(title);
    cardInfo.appendChild(description);

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";

    const cardd = document.createElement("div");
    cardd.className = "cardd";
    const price = document.createElement("span");
    price.className = "text-title";
    price.textContent = "$" + product.price + " COP";
    var cardButton = document.createElement("div");
    cardButton.className = "card-button";
    const button = document.createElement("button");
    button.setAttribute("onclick", "buy('" + product.id + "')");
    const imgButton = document.createElement("img");
    imgButton.className = "imgsize";
    imgButton.src = "image/carrito-de-compras.png";
    button.appendChild(imgButton);
    cardButton.appendChild(button);
    cardd.appendChild(price);
    cardd.appendChild(cardButton);

    const c = document.createElement("div");
    c.className = "c";
    const size = document.createElement("p");
    size.id = "size";
    size.textContent = "Disponible: ";
    const spanAvailable = document.createElement("span");
    spanAvailable.className = "available";
    spanAvailable.setAttribute("data-id", product.id);
    const sizeCategory = document.createElement("div");
    sizeCategory.className = "sizeCategory";
    sizeCategory.textContent = "Category: " + product['data-category'];
    size.appendChild(spanAvailable);
    c.appendChild(size);
    c.appendChild(sizeCategory);

    card.appendChild(box);
    box.appendChild(cardImg);
    box.appendChild(cardInfo);
    box.appendChild(cardFooter);
    cardFooter.appendChild(cardd);
    cardFooter.appendChild(document.createElement("br"));
    cardFooter.appendChild(document.createElement("br"));
    cardFooter.appendChild(c);

    return card;
}

function displayProducts(productArray) {
    const container = document.getElementById("products-container");

  
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    productArray.forEach(product => {
        const card = createCard(product);
        container.appendChild(card);
    });
}

function sortProducts(order) {
    const sortedProducts = products.slice().sort((a, b) => {
        return order === 'desc' ? b.price - a.price : a.price - b.price;
    });

    displayProducts(sortedProducts);
}



