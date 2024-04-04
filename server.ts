const { Connection, PublicKey, LAMPORTS_PER_SOL } = require('@solana/web3.js');

const main = async () => {
  // const suppliedPublicKeys = process.argv[2];
  // if (!suppliedPublicKeys) {
  //   throw new Error('Provide a public key to check the balance of!');
  // }

  const connection = new Connection(
    'https://api.devnet.solana.com',
    'confirmed'
  );
  const address = new PublicKey('3ci8RBupy8bQsRKZqLZJXkKsGL6xAoi7t7Q55GEihdCo');
  const balance = await connection.getBalance(address);
  const balanceInSol = balance / LAMPORTS_PER_SOL;

  console.log(
    `The balance of the account at ${address} is ${balanceInSol} SOL`
  );
  console.log(`✅ Finished!`);
};

main();
