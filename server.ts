const {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} = require('@solana/web3.js');

const main = async () => {
  const connection = new Connection(clusterApiUrl('devnet'));
  const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
  const balance = await connection.getBalance(address);
  const balanceInSol = balance / LAMPORTS_PER_SOL;

  console.log(
    `The balance of the account at ${address} is ${balanceInSol} lamports`
  );
  console.log(`✅ Finished!`);
};

main();
