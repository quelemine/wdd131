document.getElementById("lastModified").textContent = document.lastModified;
// Product Array
// const products = [
//   { id: "p1", name: "Smart Thermostat" },
//   { id: "p2", name: "Wireless Headphones" },
//   { id: "p3", name: "Gaming Laptop" },
//   { id: "p4", name: "4K Monitor" }
// ];
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Populate select menu
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product");

  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;   // value = id
      option.textContent = product.name; // display = name
      productSelect.appendChild(option);
    });
  }

  // Review counter logic (on review.html)
  const reviewCountDisplay = document.getElementById("reviewCount");

  if (reviewCountDisplay) {
    let count = localStorage.getItem("reviewCount");

    if (!count) {
      count = 0;
    }

    count++;
    localStorage.setItem("reviewCount", count);

    reviewCountDisplay.textContent = `Total Reviews Submitted: ${count}`;
  }
});