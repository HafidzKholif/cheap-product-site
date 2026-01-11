// Fake suggestions (BLUE)
const suggestions = ["wireless earbuds", "gaming mouse", "smart watch", "headphones", "keyboard"];

// Render suggestions
const suggestionBox = document.getElementById("suggestions");
suggestions.forEach(s => {
  const div = document.createElement("div");
  div.className = "suggestion-item";
  div.innerText = s;
  div.onclick = () => {
    document.getElementById("searchInput").value = s;
    searchProducts();
  };
  suggestionBox.appendChild(div);
});

async function searchProducts() {
  const query = document.getElementById("searchInput").value;
  const res = await fetch("/api/search?q=" + query);
  const products = await res.json();

  const results = document.getElementById("results");
  const ads = document.getElementById("ads");

  results.innerHTML = "";
  ads.innerHTML = "";

  if (products.length === 0) {
    results.innerHTML = "<p>No products found.</p>";
    return;
  }

  // First product = Sponsored Ad (YELLOW)
  const ad = products[0];
  ads.innerHTML = `
    <div class="card">
      <img src="${ad.image}" />
      <h3>${ad.name}</h3>
      <p><strong>Rp ${ad.price}</strong></p>
      <p>${ad.store}</p>
      <a href="${ad.link}" target="_blank"><button>Buy Now</button></a>
    </div>
  `;

  // Rest = Affiliate Products (GREEN)
  products.slice(1).forEach(p => {
    results.innerHTML += `
      <div class="card">
        <img src="${p.image}" />
        <h3>${p.name}</h3>
        <p><strong>Rp ${p.price}</strong></p>
        <p>${p.store}</p>
        <a href="${p.link}" target="_blank"><button>Buy Now</button></a>
      </div>
    `;
  });
}
