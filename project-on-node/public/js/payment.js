
 document.getElementById('payment-form').addEventListener('submit', async function (event) {
event.preventDefault();

const recipient = document.getElementById('recipient').value;
const amount = document.getElementById('amount').value;
const hiredId = document.getElementById('hiredId').value; //********************************* */
const payButton = document.getElementById('pay-button');

if (window.ethereum) {
  const web3 = new Web3(window.ethereum);
  try {
    // Request MetaMask account access
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    const senderAddress = accounts[0];

    // Set the amount to 0.01 ETH (0.01 Sepolia ETH)
    const amountInWei = web3.utils.toWei(amount || '0.01', 'ether');  // default to 0.01 ETH if empty

    // Disable the button to prevent multiple clicks
    payButton.disabled = true;
    payButton.textContent = "Processing...";

    // Estimate the gas
    const gasEstimate = await web3.eth.estimateGas({
      from: senderAddress,
      to: recipient,
      value: amountInWei,
    });

    console.log('Estimated Gas:', gasEstimate);

    // Get the current gas price
    const gasPrice = await web3.eth.getGasPrice();
    console.log('Gas Price:', gasPrice);

    // Send the transaction using MetaMask
    const transaction = await web3.eth.sendTransaction({
      from: senderAddress,
      to: recipient,
      value: amountInWei,
      gas: gasEstimate,  // Dynamic gas estimation
      gasPrice: gasPrice, // Dynamic gas price
    });

    console.log("Transaction successful: ", transaction);

    // Send the transaction details to the backend for logging or processing
    fetch("/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recipient: recipient,
        amount: amount,
        transactionHash: transaction.transactionHash,
        hiredId: hiredId 
        
      })
    });

    alert('Payment successful!');
    payButton.textContent = "Paid!";
  } catch (err) {
    console.error('Payment error:', err);
    alert(`Payment failed! Error: ${err.message}`);
    payButton.disabled = false;
    payButton.textContent = "Try Again";
  }
} else {
  alert('Please install MetaMask!');
}
});