# Wormhole Connect Demo

## Introduction

This repository demonstrates the integration of Wormhole Connect in a React app for bridging tokens between the Sui and Fuji (Avalanche Testnet) networks. Using the `@wormhole-foundation/wormhole-connect` package, developers can easily embed a user interface for cross-chain token transfers with minimal configuration.

## Features

 - **Cross-Chain Bridge** - enables token transfers between Sui and Fuji (Avalanche Testnet)
 - **Customizable UI** - displays a demo interface for token bridging with customizable UI options

## Prerequisites

 - [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your system
 - TypeScript installed globally: `npm install -g typescript`
 - A funded wallet with [Testnet tokens](https://faucets.chain.link/) for deployment and transfers

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/wormhole-foundation/demo-basic-connect.git
cd demo-basic-connect
```

2. Install the dependencies:

```bash
npm install
```

3. Start the application:

```bash
npm start
```

The app should now be running on http://localhost:3000.

## Code Overview

The main application logic is in `App.tsx`, configuring and rendering the `WormholeConnect` component. This component is imported from `@wormhole-foundation/wormhole-connect` and initialized with a basic configuration for the Testnet network, connecting Sui and Avalanche.

## Resources

For more information on configuring Wormhole Connect, refer to the [Wormhole Documentation](https://wormhole.com/docs/build/applications/connect/configuration/), which provides detailed guidance on advanced configurations and supported features.
