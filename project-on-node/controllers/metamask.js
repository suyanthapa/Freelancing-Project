import Web3 from "web3";

// Use Sepolia network URL with your Alchemy API key or MetaMask
const web3 = new Web3("https://sepolia.eth.gateway.alchemy.com/v2/o6_OysbmQ_KLiLVR2BFkRJQrWsPPi3td");

// Example contract ABI (If you are using a contract to manage transactions)
const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "MoneySent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "sendMoney",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const contractAddress = "0xA196690ff961CBB0a8202Ce84895850dfF9c5201";

// Set up your contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

const metamaskController = {
  // Function to initiate payment
  async initiatePayment(req, res) {
    try {
      const { recipient, amount } = req.body; // recipient and amount from client

      // Convert amount to Wei
      const amountInWei = web3.utils.toWei(amount, 'ether');

      // Ensure user has connected via MetaMask (this part might be handled by frontend)
      if (!recipient || !amount) {
        return res.status(400).json({ error: "Missing recipient or amount" });
      }
      
      // In a real scenario, the sender address would come from the user's wallet (e.g., MetaMask)
      const accounts = await web3.eth.getAccounts();
      const senderAddress = accounts[1]; // dynamically retrieve the sender's wallet address

      if (!senderAddress) {
        return res.status(400).json({ error: "Sender address is required" });
      }

      // Estimate gas (optional but recommended)
      const gasEstimate = await web3.eth.estimateGas({
        from: senderAddress,
        to: recipient,
        value: amountInWei,
      });

      // Send the transaction
      const transaction = await web3.eth.sendTransaction({
        from: senderAddress,
        to: recipient,
        value: amountInWei,
        gas: gasEstimate, // Add gas estimation
      });
			
      console.log("Transaction successful: ", transaction);
      res.status(200).json({ message: "Payment successful", transaction });
    } catch (error) {
      console.error("Error initiating payment: ", error);
      res.status(500).json({ error: "Failed to initiate payment." });
    }
  },
};

export default metamaskController;


