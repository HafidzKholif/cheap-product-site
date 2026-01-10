const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Search products (demo data)
app.get("/api/search", async (req, res) => {
  const query = req.query.q || "";

  const products = [
    { name: "Wireless Earbuds", price: 149000, store: "Shopee", image: "https://via.placeholder.com/150", link: "https://shopee.co.id/?affiliate_id=YOUR_ID" },
    { name: "Wireless Earbuds", price: 159000, store: "Tokopedia", image: "https://via.placeholder.com/150", link: "https://tokopedia.com/?affiliate_id=YOUR_ID" },
    { name: "Wireless Earbuds", price: 139000, store: "Involve Asia", image: "https://via.placeholder.com/150", link: "https://involve.asia/?affiliate_id=YOUR_ID" }
  ];

  const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  filtered.sort((a, b) => a.price - b.price);
  res.json(filtered);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
