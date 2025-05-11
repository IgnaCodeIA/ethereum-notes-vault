# 📝 Project Overview

Ethereum Notes Vault is a decentralized application (dApp) built on the Ethereum blockchain that allows users to securely store and retrieve personal notes. This project leverages Solidity for the smart contract, Hardhat for development and deployment, and React with TailwindCSS for the frontend.

# 🏗️ Project Structure

```

ethereum-notes-vault/
├── contracts
│   └── NotesVault.sol            # Solidity smart contract
│
├── scripts
│   ├── deploy.js                 # Script to deploy the contract
│   └── interact.js               # Script to interact with the contract
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── NoteForm.js        # Form to add notes
│   │   │   └── NoteList.js        # List of stored notes
│   │   │
│   │   ├── services
│   │   │   └── contract.js        # Contract interaction logic
│   │   │
│   │   ├── abi
│   │   │   └── NotesVault.json    # ABI file of the smart contract
│   │   │
│   │   └── App.js                 # Main React component
│   │
│   └── public
│
├── hardhat.config.js             # Hardhat configuration
├── .env                          # Environment variables
├── checkBalance.js               # Script to check ETH balance
└── package.json
```

# 🚀 Technologies Used

*   **Solidity:** Smart contract development
*   **Hardhat:** Local Ethereum development environment
*   **Ethers.js:** Blockchain interaction in frontend
*   **React:** Frontend framework
*   **TailwindCSS:** Styling
*   **Infura:** Node provider for Sepolia Testnet
*   **Metamask:** Wallet integration

# 🛠️ Setup and Installation

## Prerequisites
*   Node.js (v18+)
*   npm
*   Hardhat
*   Metamask (browser extension)
*   Infura account for Sepolia endpoint

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/ethereum-notes-vault.git
    cd ethereum-notes-vault
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file:**
    ```plaintext
    SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
    PRIVATE_KEY=0xYOUR_PRIVATE_KEY
    ```
4.  **Compile the contract:**
    ```bash
    npx hardhat compile
    ```
5.  **Deploy the contract (Sepolia):**
    ```bash
    npx hardhat run scripts/deploy.js --network sepolia
    ```
6.  **Update contract address:**
    Once deployed, update the contract address in `frontend/src/services/contract.js`:
    ```javascript
    const CONTRACT_ADDRESS = "0xYourDeployedContractAddress";
    ```

# 🧩 Running the Frontend

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install frontend dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    ```
4.  **Open in browser:**
    Visit `http://localhost:3000` to use the application.

# 🌐 How to Use

1.  **Connect Wallet:** Make sure Metamask is connected to the Sepolia Testnet.
2.  **Add a Note:** Enter your note and click "Add".
3.  **View Notes:** Your saved notes will be listed below the input field.

# 📝 Project Files Explained

## Smart Contract (`contracts/NotesVault.sol`)
Manages storing and retrieving user notes on the Ethereum blockchain.

## Scripts
*   `deploy.js`: Deploys the contract to Sepolia.
*   `interact.js`: (Planned) Script for interacting with the deployed contract.

## Frontend
*   `App.js`: Main application logic.
*   `NoteForm.js`: Form for adding notes.
*   `NoteList.js`: Displays the list of notes.
*   `contract.js`: Handles interactions with the smart contract.

# ✅ Testing

## Check ETH Balance
```bash
node checkBalance.js
```
# Run test
To run the tests (planned):
```bash
npx hardhat test
```
## 📝 Troubleshooting
**Common Issues**

Insufficient Funds Error:
Make sure your Sepolia wallet has enough ETH.
Use the Sepolia faucet to obtain test ETH.
Invalid Contract Address:
Verify that the contract address in contract.js matches the one from deployment.
Metamask Connection Issues:
Make sure Metamask is connected to Sepolia Testnet.

## 📄 License
MIT License
