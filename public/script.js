// Demo products
const products = [
  { name: "Wireless Earbuds", seller: "Shopee", price: "Rp139.000", rating: "4.5★", image: "https://via.placeholder.com/200x140", link: "#" },
  { name: "Smart Watch", seller: "Tokopedia", price: "Rp249.000", rating: "4.6★", image: "https://via.placeholder.com/200x140", link: "#" },
  { name: "Bluetooth Speaker", seller: "Involve Asia", price: "Rp199.000", rating: "4.3★", image: "https://via.placeholder.com/200x140", link: "#" },
  { name: "Gaming Mouse", seller: "Shopee", price: "Rp89.000", rating: "4.4★", image: "https://via.placeholder.com/200x140", link: "#" },
];

// Render products
const grid = document.getElementById("product-grid");
products.forEach(p => {
  grid.innerHTML += `
    <div class="product-card">
      <img src="${p.image}" />
      <div class="details">
        <h4>${p.name}</h4>
        <p>${p.seller}</p>
        <p class="price">${p.price}</p>
        <p class="rating">${p.rating}</p>
        <a href="${p.link}" target="_blank"><button>Buy Now</button></a>
      </div>
    </div>
  `;
});
