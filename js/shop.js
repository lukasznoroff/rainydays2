const productsWrap = document.querySelector(".products-wrap");
const currentSex = getParameterByName("sex");

const produtsToShow = products.filter((product) => {
    return product.sex === currentSex;
})


for (let product of produtsToShow) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    
                        <a href="./single-product.html?id=${product.id}"><img src="${product.imageUrl}"alt="jacket"></a>
                        <h4 class="cards-headers-small">PRICE:${product.price}$</h4>
                        <a class="btn btn-jacket js-add-to-cart" data-product-id="${product.id}" href="/pages/cart.html">ADD TO CART</a>
    
    
                     `;

    productsWrap.appendChild(card);

    let title;

    if (currentSex === "male") {
        title = "Men"
    } else {
        title = "Women"
    }

    document.querySelector(".js-page-title").innerHTML = title;

}