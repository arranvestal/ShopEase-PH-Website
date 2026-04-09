const searchInput = document.getElementById("searchInput");
const items = document.querySelectorAll(".item");
const searchBtn = document.querySelector(".btn");

function searchItems() {
  const filter = searchInput.value.toLowerCase().trim();

  if (filter === "") {
  
    items.forEach(item => item.style.display = "block");
  } else {

    items.forEach(item => {
      const text = item.querySelector("p").textContent.toLowerCase();
      item.style.display = text.includes(filter) ? "block" : "none";
    });
  }
}

searchBtn.addEventListener("click", searchItems);

searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    searchItems();
  }
});

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() === "") {
    items.forEach(item => item.style.display = "block");
  }
});

const cartItems = document.getElementById("cartItems");
const addButtons = document.querySelectorAll(".buy-btn");
const cartBox = document.getElementById("cartBox");
const closeCartBtn = document.getElementById("closeCartBtn");

const cartBtn = document.createElement("button");
cartBtn.textContent = "🛒";
cartBtn.classList.add("cart-btn");
document.body.appendChild(cartBtn);

let cart = [];

addButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const itemName = items[index].querySelector("p").textContent;
    cart.push(itemName);
    updateCartUI();
    showToast(`${itemName} added to cart!`);
  });
});

function updateCartUI() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<li>No items in cart</li>";
  } else {
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      cartItems.appendChild(li);
    });
  }
}

cartBtn.addEventListener("click", () => {
  updateCartUI();
  cartBox.style.display = "block";
});

closeCartBtn.addEventListener("click", () => {
  cartBox.style.display = "none";
});

function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.background = "linear-gradient(90deg, #ff7b00, #ffb347)";
  toast.style.color = "white";
  toast.style.padding = "15px 20px";
  toast.style.borderRadius = "8px";
  toast.style.fontWeight = "bold";
  toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  toast.style.zIndex = "9999";
  toast.style.opacity = "1";
  toast.style.transition = "opacity 0.5s ease";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 1500);
}

 window.addEventListener('scroll', function() {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });