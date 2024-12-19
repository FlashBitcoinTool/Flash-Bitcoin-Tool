document.getElementById('transaction-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const btcAddress = document.getElementById('btc-address').value;
  const btcAmount = document.getElementById('btc-amount').value;
  
  if (btcAddress && btcAmount) {
    alert(`Transaction created:\nAddress: ${btcAddress}\nAmount: ${btcAmount} BTC`);
  } else {
    alert('Please fill in both fields.');
  }
});

document.getElementById('cta-button').addEventListener('click', function() {
  alert('Get Started with Flash Bitcoin Tool!');
});
