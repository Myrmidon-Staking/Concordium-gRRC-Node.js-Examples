import { ConcordiumGRPCWebClient } from '@concordium/web-sdk';

export async function runGrpcWeb() {
  console.log('=== gRPC‑Web ===');
  try {
    // Initialize the gRPC-Web client.
    // We connect to a mainnet node provided by Myrmidon Staking.
    // Port 443 is the port for secure gRPC connections.
    const webClient = new ConcordiumGRPCWebClient('https://ccdgrpcwebi.myrmidonstaking.com', 443, { timeout: 15000 });

    // Health check
    const health = await webClient.healthCheck();
    console.log('Web health check:', health);

    console.log('--------------------------------------------------------');

    // Blockchain parameters
    const blockChainParameters = await webClient.getBlockChainParameters();
    console.log('Blockchain parameters:');
    console.dir(blockChainParameters, { depth: null, colors: true });

    console.log('--------------------------------------------------------');

    // Consensus status
    const consensusStatus = await webClient.getConsensusStatus();
    console.log('Consensus status:');
    console.dir(consensusStatus, { depth: null, colors: true });
  } catch (err) {
    console.error('gRPC‑Web error:', err);
  }
}