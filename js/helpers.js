function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&'); var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url); if (!results) return null; if (!results[2]) return ''; return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function getCartTotalItems() {

    let cartObject = JSON.parse(localStorage.getItem("cart"));

    if (!cartObject) {
        return 0;
    }

    let total = 0;

    for (let item of cartObject.items) {
        const ammout = item.quantity;
        total += ammout;

    }

    return total;
}


function getCartObject() {

    return JSON.parse(localStorage.getItem("cart"));
}

function updateMiniCart(){
    
    const miniCartContent = document.querySelector(".mini-cart-content");
    const cartObject = getCartObject();

    if (!cartObject) {
        miniCartContent.innerHTML = `<h3 class="empty">Cart is empty</h3>`;
        return;
    }

    for(let item of cartObject.items){

        const productObject = products.find((product)=>{
            return product.id === parseInt(item.productId);

        })
    }
}