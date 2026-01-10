async function searchProducts() {
  const query = document.getElementById("searchInput").value;

  const response = await fetch(`http://localhost:3000/api/search?q=${query}`);
  const data = await response.json();

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (data.length === 0) {
    resultsDiv.innerHTML = "<p>No products found.</p>";
    return;
  }

  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" />
      <h3>${product.name}</h3>
      <p><strong>Rp ${product.price.toLocaleString()}</strong></p>
      <p>${product.store}</p>
      <a href="${product.link}" target="_blank">Buy Now</a>
    `;

    resultsDiv.appendChild(card);
  });
}
