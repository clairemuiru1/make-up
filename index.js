document.addEventListener('DOMContentLoaded', function () {
// fetch itemd from DOM
fetch("http://localhost:3000/makeup_products")
.then(response => response.json()
.then((makeup_products)=>{
    makeup_products.forEach(makeup_product => {
        const makeup_productContainer= document.createElement("div");
        makeup_productContainer.classList.add("makeup_product.pieces");
        makeup_productContainer.innerHTML = `
        <h2>${makeup_product.name}</h2>
        <img src="${makeup_product.image}alt=${makeup_product.name}
        <p class="hd">Brand:${makeup_product.brand}</p>
        <p class="hd">Category:${makeup_product.category}</p>
        <p class="hd">Shade:${makeup_product.shade}</p>
        <p class="hd">Price:${makeup_product.price}</p>
        <p class="hd">Available-Pieces:${makeup_product.availabilty}
        <p class="hd">Ratings:${makeup_product.ratings}`;

        document.getElementById("container").appendChild(makeup_productContainer);
    });
})
)
});