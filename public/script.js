async function searchProducts() {
  const query = document.getElementById("searchInput").value;
  const res = await fetch("/api/search?q=" + query); // <-- important
  const products = await res.json();

  const results = document.getElementById("results");
  results.innerHTML = "";

  if (products.length === 0) {
    results.innerHTML = "<p>No products found.</p>";
    return;
  }

  products.forEach(p => {
    results.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>Price: Rp ${p.price}</p>
        <p>Store: ${p.store}</p>
        <a href="${p.link}" target="_blank">
          <button>Buy Now</button>
        </a>
      </div>
    `;
  });
}
