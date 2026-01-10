const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Demo products endpoint
app.get("/api/search", (req, res) => {
  const query = req.query.q || "";

  const products = [
    {
      name: "Wireless Earbuds",
      price: 139000,
      store: "Involve Asia",
      image: "https://via.placeholder.com/150",
      link: `https://involve.asia/?affiliate_id=${process.env.INVOLVE_ID}`
    },
    {
      name: "Wireless Earbuds",
      price: 149000,
      store: "Shopee",
      image: "https://via.placeholder.com/150",
      link: `https://shopee.co.id/?affiliate_id=${process.env.SHOPEE_ID}`
    },
    {
      name: "Wireless Earbuds",
      price: 159000,
      store: "Tokopedia",
      image: "https://via.placeholder.com/150",
      link: "https://tokopedia.com/?affiliate_id=YOUR_ID" // optional for now
    }
  ];

  // Filter products by search query
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // Sort by price (lowest first)
  filtered.sort((a, b) => a.price - b.price);

  res.json(filtered);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
