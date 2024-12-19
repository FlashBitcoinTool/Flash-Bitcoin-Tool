// script.js

// Elements
const activationStatus = document.getElementById("activation-status");
const createTransactionBtn = document.getElementById("create-transaction");
const fakeConfirm = document.getElementById("fake-confirm");
const randomAmountBtn = document.getElementById("random-amount");
const amountField = document.getElementById("amount");

// Generate Random Amount
randomAmountBtn.addEventListener("click", () => {
  const randomAmount = (Math.random() * 0.1).toFixed(4); // Generate a small random BTC amount
  amountField.value = randomAmount;
});

// Handle Activation Logic
createTransactionBtn.addEventListener("click", () => {
  const amount = parseFloat(amountField.value);

  if (amount >= 199) {
    activationStatus.textContent = "Active";
    activationStatus.style.color = "green";
  } else {
    alert("You must send at least $199 to activate!");
  }
});
