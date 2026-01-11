// DEMO DATA (PHASE 2)

const ads = [
  {
    name: "Malaysia Airlines Promo",
    image: "https://via.placeholder.com/300x180",
    link: "#"
  },
  {
    name: "City Travel Deals",
    image: "https://via.placeholder.com/300x180",
    link: "#"
  }
];

const products = [
  {
    name: "Wireless Earbuds",
    price: "Rp139.000",
    image: "https://via.placeholder.com/300",
    link: "#"
  },
  {
    name: "Smart Watch",
    price: "Rp249.000",
    image: "https://via.placeholder.com/300",
    link: "#"
  },
  {
    name: "Bluetooth Speaker",
    price: "Rp199.000",
    image: "https://via.placeholder.com/300",
    link: "#"
  }
];

const suggestionsData = ["Earbuds", "Smart Watch", "Speaker", "Headphone", "Power Bank"];

// Render Ads
const adsContainer = document.getElementById("ads");
ads.forEach(ad => {
  adsContainer.innerHTML += `
    <div class="card ad">
      <img src="${ad.image}" />
      <p>${ad.name}</p>
      <a href="${ad.link}">View Ad</a>
    </div>
  `;
});

// Render Products
const productsContainer = document.getElementById("products");
products.forEach(product => {
  productsContainer.innerHTML += `
    <div class="card affiliate">
      <img src="${product.image}" />
      <h4>${product.name}</h4>
      <p>${product.price}</p>
      <a href="${product.link}">Check Deal</a>
    </div>
  `;
});

// Search Suggestions
function showSuggestions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const suggestionsBox = document.getElementById("suggestions");

  if (!input) {
    suggestionsBox.style.display = "none";
    return;
  }

  const filtered = suggestionsData.filter(item => item.toLowerCase().includes(input));

  suggestionsBox.innerHTML = filtered
    .map(item => `<div class="suggestion-item">${item}</div>`)
    .join("");

  suggestionsBox.style.display = filtered.length ? "block" : "none";
}
