require("dotenv").config();
const { JsonRpcProvider, Wallet, formatEther } = require("ethers");

// Configuración del proveedor (provider) de Sepolia
const provider = new JsonRpcProvider(process.env.SEPOLIA_URL);

// Crear un signer desde el private key y el provider
const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

async function main() {
  // 📌 Ahora obtenemos el balance desde el `provider`
  const balance = await provider.getBalance(wallet.address);
  console.log(`Dirección: ${wallet.address}`);
  console.log(`Balance: ${formatEther(balance)} ETH`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
