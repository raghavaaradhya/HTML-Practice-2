const products = [
  { name: "Laptop", price: 55000, rating: 4.6, category: "Electronics" },
  { name: "Smartphone", price: 30000, rating: 4.4, category: "Electronics" },
  { name: "Headphones", price: 2000, rating: 4.1, category: "Electronics" },
  { name: "Smartwatch", price: 4500, rating: 4.3, category: "Electronics" },
  { name: "Bluetooth Speaker", price: 2500, rating: 4.0, category: "Electronics" },

  { name: "T-Shirt", price: 800, rating: 4.2, category: "Fashion" },
  { name: "Jeans", price: 1500, rating: 4.4, category: "Fashion" },
  { name: "Shoes", price: 2200, rating: 4.5, category: "Fashion" },
  { name: "Jacket", price: 3000, rating: 4.3, category: "Fashion" },
  { name: "Cap", price: 400, rating: 3.9, category: "Fashion" },

  { name: "Novel Book", price: 500, rating: 4.7, category: "Books" },
  { name: "Science Book", price: 700, rating: 4.5, category: "Books" },
  { name: "Comics", price: 300, rating: 4.0, category: "Books" },
  { name: "History Book", price: 650, rating: 4.2, category: "Books" },
  { name: "Dictionary", price: 900, rating: 4.3, category: "Books" },

  { name: "Sofa", price: 25000, rating: 4.1, category: "Home" },
  { name: "Chair", price: 4000, rating: 4.0, category: "Home" },
  { name: "Table Lamp", price: 1200, rating: 4.4, category: "Home" },
  { name: "Curtains", price: 1500, rating: 4.2, category: "Home" },
  { name: "Wall Clock", price: 900, rating: 4.3, category: "Home" }
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

/* ✅ Display Products */
function displayProducts(list) {
  productContainer.innerHTML = "";

  list.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p><b>Price:</b> ₹${product.price}</p>
      <p><b>Rating:</b> ⭐ ${product.rating}</p>
      <p><b>Category:</b> ${product.category}</p>
    `;

    productContainer.appendChild(card);
  });
}

/* ✅ Filter + Sort Function */
function updateProducts() {
  let filtered = [...products];

  // ✅ Filtering
  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  // ✅ Sorting
  const sortValue = sortOption.value;

  if (sortValue === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (sortValue === "nameAsc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortValue === "nameDesc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortValue === "ratingAsc") {
    filtered.sort((a, b) => a.rating - b.rating);
  }

  if (sortValue === "ratingDesc") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

/* ✅ Dropdown Events */
categoryFilter.addEventListener("change", updateProducts);
sortOption.addEventListener("change", updateProducts);

/* ✅ Initial Load */
displayProducts(products);
