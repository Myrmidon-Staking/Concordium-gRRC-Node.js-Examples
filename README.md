# Concordium-gRRC-Node.js-Examples
A quickstart repository for a simple Node.js project demonstrating examples for interacting with Concordium gRRC, provided by Myrmidon Staking to help developers get started quickly.

This repository contains example code demonstrating how to connect to the Concordium blockchain using the official JavaScript SDK/Web SDK. It covers both native gRPC client and the gRPC-Web client.

The examples connect to mainnet nodes provided by [Myrmidon Staking](https://myrmidonstaking.com).
For access to our Concordium gRPC service, please contact [support@myrmidonstaking.com](mailto:support@myrmidonstaking.com).

## Purpose

This is a quickstart project to show developers how to:

1.  Use `ConcordiumGRPCNodeClient` for backend/Node.js applications.
2.  Use `ConcordiumGRPCWebClient` for frontend/web applications.
3.  Perform basic queries against the chain (Health Check, Blockchain Parameters, Consensus Status).

## Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **npm**: Ensure you have npm installed.

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### 1. Run All Examples

Execute both native gRPC and gRPC-Web examples sequentially:

```bash
npm run dev
# OR
node app.js
```

### 2. Native gRPC Client Only

```bash
npm run grpc
# OR
node app.js --grpc
```

### 3. gRPC-Web Client Only

```bash
npm run grpc-web
# OR
node app.js --grpc-web
```

## Project Structure

- **`app.js`**: CLI entry point that parses arguments and runs the selected examples.
- **`grpc.js`**:
  - Demonstrates `ConcordiumGRPCNodeClient`.
  - Connects to `ccdgrpci.myrmidonstaking.com` on port `8443`.
  - Performs basic queries.
- **`grpcWeb.js`**:
  - Demonstrates `ConcordiumGRPCWebClient`.
  - Connects to `https://ccdgrpcwebi.myrmidonstaking.com` on port `443`.
  - Performs basic queries.