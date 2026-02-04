import { runGrpc } from './grpc.js';
import { runGrpcWeb } from './grpcWeb.js';

async function main() {
  const args = process.argv.slice(2);
  const grpcExample = args.includes('--grpc') || args.length === 0;
  const grpcWebExample = args.includes('--grpc-web') || args.length === 0;

  console.log('Starting gRPC examples with arguments:', args);
  console.log('--------------------------------------------------------');

  if (grpcExample) {
    // Run the Node gRPC test
    await runGrpc();
    console.log();
    console.log('--------------------------------------------------------');
  }

  if (grpcWebExample) {
    // Run the gRPC-Web test
    await runGrpcWeb();
    console.log();
    console.log('--------------------------------------------------------');
  }
}

main()
  .then(() => {
    console.log('Done');
  })
  .catch((err) => {
    console.error('Unexpected error in main:', err);
  });