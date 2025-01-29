import { Router } from "express";
import metamaskController from "../controllers/metamask.js";
import { restrictToLoggedinUserOnly } from "../middlewares/auth.js";
import userAuthController from "../controllers/userAuth.js";

const paymentRouter = Router();

paymentRouter.get("/payment", restrictToLoggedinUserOnly, userAuthController.paymentPage);

// This is the endpoint to log the payment transaction
paymentRouter.post("/payment", restrictToLoggedinUserOnly, async (req, res) => {
  try {
    const { recipient, amount, transactionHash } = req.body;

    // Log the received data for debugging
    console.log('Received payment data:', { recipient, amount, transactionHash });

    // Save the transaction or handle the payment
    // Example: await savePaymentTransaction(recipient, amount, transactionHash);

    res.status(200).json({ message: "Transaction logged successfully!" });
  } catch (error) {
    console.error("Error logging transaction", error);
    res.status(500).json({ error: "Failed to log the transaction." });
  }
});


export default paymentRouter;
