function displayCart() {

    let cartTotal = 0;

    const itemsWrap = document.querySelector(".cart .items-wrap");

    if (!itemsWrap) {
        return
    }

    let cartObject = JSON.parse(localStorage.getItem("cart"));

    if (!cartObject) {

        itemsWrap.innerHTML = `<h3 class="empty">Cart is empty</h3>`;

    } else {

        for (let item of cartObject.items) {

            const productObject = products.find((product) => {
                
                return product.id === parseInt(item.productId);

            })

            if (!productObject) {
                continue;
            }
            const productTotal = item.quantity * productObject.price;
            cartTotal += productTotal;
            const itemBox = document.createElement("div");
            itemBox.classList.add("item-box");
            itemBox.innerHTML = ` 
                               
                                <img class="cart-product-image" src="${productObject.imageUrl}" alt="">
                                <p class="product-title cart-text">${productObject.title}</p>
                                <p class="quantity cart-text">${item.quantity}</p>
                                <p class="cart-product-price cart-text">${productObject.price}$</p>
                                <p class="cart-product-total cart-text">${productTotal}$</p>
                                <button class="btn-remove-cart js-remove-product" data-product-id="${productObject.id}">Remove</button>
                                 `;

            itemsWrap.appendChild(itemBox);
        }
    }
    document.querySelector(".js-total-cart").innerHTML = cartTotal+"$";
}

window.addEventListener("DOMContentLoaded", () => {
    displayCart();
})

