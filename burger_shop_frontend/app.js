// const menuItems = [
//   { id: 1, name: "Classic Burger(Large)", price: 750.00 },
//   { id: 2, name: "Classic Burger(Regular)", price: 1500.00 },
//   { id: 3, name: "Turkey Burger", price: 1600.00 },
//   { id: 4, name: "Chicken Burger(Large)", price: 1400.00 },
//   { id: 5, name: "Chicken Burger(Regular)", price: 800.00 },
//   { id: 6, name: "Cheese Burger(Large)", price: 1000.00 },
//   { id: 7, name: "Cheese Burger(Regular)", price: 600.00 },
//   { id: 8, name: "Bacon Burger", price: 650.00 },
//   { id: 9, name: "Shawarma Burger", price: 800.00 },
//   { id: 10, name: "Olive Burger", price: 1800.00 },
//   { id: 11, name: "Double Cheese Burger", price: 1250.00 },
//   { id: 12, name: "Crispy Chicken Burger(Regular)", price: 1200.00 },
//   { id: 13, name: "Crispy Chicken Burger(Large)", price: 1600.00 },
//   { id: 14, name: "Paneer Burger", price: 900.00 },
//   { id: 15, name: "Crispy Chicken Submarine(Large)", price: 2000.00 },
//   { id: 16, name: "Crispy Chicken Submarine(Regular)", price: 1500.00 },
//   { id: 17, name: "Chicken Submarine(Large)", price: 1800.00 },
//   { id: 18, name: "Chicken Submarine(Regular)", price: 1400.00 },
//   { id: 19, name: "Grinder Submarine", price: 2300.00 },
//   { id: 20, name: "Cheese Submarine", price: 2200.00 },
//   { id: 21, name: "Double Cheese Chicken Submarine", price: 1900.00 },
//   { id: 22, name: "Special Horgie Submarine ", price: 2800.00 },
//   { id: 23, name: "MOS Special Submarine ", price: 3000.00 },
//   { id: 24, name: "Steak Fries (Large) ", price: 1200.00 },
//   { id: 25, name: "Steak Fries (Medium)", price: 600.00 },
//   { id: 26, name: "French Fries (Large)", price: 800.00 },
//   { id: 27, name: "French Fries (Medium)", price: 650.00 },
//   { id: 28, name: "French Fries (Small)", price: 450.00 },
//   { id: 29, name: "Sweet Potato Fries (Large)", price: 600.00 },
//   { id: 30, name: "Chicken n Cheese Pasta", price: 1600.00 },
//   { id: 31, name: "Chicken Penne Pasta", price: 1700.00 },
//   { id: 32, name: "Ground Turkey Pasta Bake", price: 2900.00 },
//   { id: 33, name: "Creamy Shrimp Pasta", price: 1600.00 },
//   { id: 34, name: "Lemon Butter Pasta", price: 1950.00 },
//   { id: 35, name: "Tagliatelle Pasta ", price: 2400.00 },
//   { id: 36, name: "Baked Ravioli", price: 2000.00 },
//   { id: 37, name: "Fried Chicken (Small)", price: 1200.00 },
//   { id: 38, name: "Fried Chicken (Regular)", price: 2300.00 },
//   { id: 39, name: "Fried Chicken (Large)", price: 3100.00 },
//   { id: 40, name: "Hot Wings (Large) ", price: 2400.00 },
//   { id: 41, name: "Devilled Chicken (Large) ", price: 900.00 },
//   { id: 42, name: "BBQ Chicken (Regular) ", price: 2100.00 },
//   { id: 43, name: "Pepsi (330ml)", price: 990.00 },
//   { id: 44, name: "Coca-Cola (330ml) ", price: 1230.00 },
//   { id: 45, name: "Sprite (330ml) ", price: 1500.00 },
//   { id: 46, name: "Mirinda (330ml) ", price: 850.00 }
  
// ];




// // Populate the item dropdown
// const itemDropdown = document.getElementById("item");
// menuItems.forEach(item => {
//   const option = document.createElement("option");
//   option.value = item.id;
//   option.textContent = item.name;
//   itemDropdown.appendChild(option);
// });

// // Cart functionality
// let cart = [];
// const cartItems = document.getElementById("cart-items");
// const totalPrice = document.getElementById("total-price");

// document.getElementById("add-to-cart").addEventListener("click", () => {
//   const selectedOptions = Array.from(itemDropdown.selectedOptions); // Get selected items
//   const quantity = parseInt(document.getElementById("quantity").value);

//   selectedOptions.forEach(option => {
//     const selectedItemId = parseInt(option.value);
//     const item = menuItems.find(i => i.id === selectedItemId);
    
//     // Check if item already exists in cart
//     const existingCartItem = cart.find(cartItem => cartItem.id === item.id);
//     if (existingCartItem) {
//       existingCartItem.quantity += quantity; // Update quantity if already in cart
//     } else {
//       const cartItem = { ...item, quantity };
//       cart.push(cartItem); // Add new item to cart
//     }
//   });

//   updateCart();
// });

// function updateCart() {
//   cartItems.innerHTML = "";
//   let total = 0;

//   cart.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} x ${item.quantity} - Rs.${(item.price * item.quantity).toFixed(2)}`;
//     cartItems.appendChild(li);
//     total += item.price * item.quantity;
//   });

//   totalPrice.textContent = `Total: Rs.${total.toFixed(2)}`;
// }

// // Checkout
// document.getElementById("checkout").addEventListener("click", () => {
//   if (cart.length > 0) {
//     const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
//     // Save total to localStorage
//     localStorage.setItem("totalAmount", total.toFixed(2));

//     // Redirect to payment page
//     window.location.href = "payment.html";
//   } else {
//     alert("Your cart is empty. Please add items before checking out.");
//   }
// });



// // Cancel order functionality
// document.getElementById('cancel-btn').addEventListener('click', () => {
//   const orderStatus = document.getElementById('order-status');
//   const messageDiv = document.getElementById('message');

//   if (cart.length > 0) {
//     // Clear the cart
//     cart = [];
//     updateCart(); // Update the cart display

//     // Update order status
//     orderStatus.textContent = 'Cancelled';
//     orderStatus.style.color = 'red';

//     // Display success message
//     messageDiv.textContent = 'Order cancelled successfully!';
//     messageDiv.style.color = 'green';
//   } else {
//     // No items to cancel
//     messageDiv.textContent = 'No items in the cart to cancel.';
//     messageDiv.style.color = 'red'; messageDiv.style.backgroundColor='#fff';
    
//   }
// });


//       let totalAmount = 0;
    
//       // Function to dynamically update the total
//       function addToCart(itemPrice) {
//         totalAmount += itemPrice;
//         document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
//       }
    
//       function goToPayment() {
//         // Save the total to localStorage
//         localStorage.setItem("totalAmount", totalAmount);
//         // Redirect to payment page
//         window.location.href = "payment.html";
//       }
 







    
const itemDropdown = document.getElementById("item");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const addToCartBtn = document.getElementById("add-to-cart");
const checkoutBtn = document.getElementById("checkout");
const cancelBtn = document.getElementById("cancel-btn");
const quantityInput = document.getElementById("quantity");
const orderStatus = document.getElementById('order-status');

let menuItems = [];
let cart = [];


async function init() {
  try {
    
    itemDropdown.disabled = true;
    itemDropdown.innerHTML = '<option value="">Loading menu...</option>';
    
    const response = await fetch("http://localhost:8080/menu_items/get-all");
    if (!response.ok) throw new Error('Failed to load menu');
    
    menuItems = await response.json();
    populateItemDropdown();
  } catch (error) {
    console.error("Error:", error);
    itemDropdown.innerHTML = '<option value="">Error loading menu</option>';
    alert("Failed to load menu. Please try again later.");
  } finally {
    itemDropdown.disabled = false;
  }
}

function populateItemDropdown() {
  itemDropdown.innerHTML = '<option value="" disabled selected>Select an item</option>';
  
  menuItems.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = `${item.name} - Rs.${item.price.toFixed(2)}`;
    itemDropdown.appendChild(option);
  });
}


function addToCart() {
  const selectedOptions = Array.from(itemDropdown.selectedOptions);
  const quantity = parseInt(quantityInput.value) || 1;

  if (!selectedOptions.length) {
    alert("Please select at least one item");
    return;
  }

  selectedOptions.forEach(option => {
    const itemId = parseInt(option.value);
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...item, quantity });
    }
  });

  updateCart();
  quantityInput.value = ""; 
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<li>Your cart is empty</li>";
  } else {
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      const itemTotal = item.price * item.quantity;
      
      li.innerHTML = `
        ${item.name} x ${item.quantity} - Rs.${itemTotal.toFixed(2)}
        <button class="remove-btn" data-index="${index}">×</button>
      `;
      cartItems.appendChild(li);
      total += itemTotal;
    });

    
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        cart.splice(parseInt(e.target.dataset.index), 1);
        updateCart();
      });
    });
  }

  totalPrice.textContent = `Total: Rs.${total.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  localStorage.setItem("totalAmount", total.toFixed(2));
  localStorage.setItem("cartItems", JSON.stringify(cart));
  window.location.href = "payment.html";
}

function cancelOrder() {

  if (cart.length === 0) {
    showMessage("No items to cancel", "red");
    return;
  }

  cart = [];
  updateCart();
  showMessage("Order cancelled successfully", "green");
 
//  Update order status
    orderStatus.textContent = 'Cancelled';
    orderStatus.style.color = 'red';
}



function showMessage(text, color) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = text;
  messageDiv.style.color = color;
  
  setTimeout(() => {
    messageDiv.textContent = "";
  }, 3000);
}






addToCartBtn.addEventListener("click", addToCart);
checkoutBtn.addEventListener("click", checkout);
cancelBtn.addEventListener("click", cancelOrder);


init();