import { ConcordiumGRPCNodeClient, credentials } from '@concordium/web-sdk/nodejs';

export async function runGrpc() {
  console.log('=== gRPC ===');
  try {
    // Initialize the Node.js gRPC client.
    // We connect to a mainnet node provided by Myrmidon Staking.
    // Port 8443 is the port for secure gRPC connections.
    const client = new ConcordiumGRPCNodeClient(
      'ccdgrpci.myrmidonstaking.com',
      8443,
      credentials.createSsl(), // Establishes a secure connection (TLS/SSL).
      { timeout: 15000 },
    );

    // Health check
    const health = await client.healthCheck();
    console.log('Health check:', health);

    console.log('--------------------------------------------------------');

    // Blockchain parameters
    const blockChainParameters = await client.getBlockChainParameters();
    console.log('Blockchain parameters:');
    console.dir(blockChainParameters, { depth: null, colors: true });

    console.log('--------------------------------------------------------');

    // Consensus status
    const consensusStatus = await client.getConsensusStatus();
    console.log('Consensus status:');
    console.dir(consensusStatus, { depth: null, colors: true });
  } catch (err) {
    console.error('gRPC error:', err);
  }
}