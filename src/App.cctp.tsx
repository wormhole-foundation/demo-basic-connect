import "./App.css";
import WormholeConnect, {
  type config,
  WormholeConnectTheme,
} from "@wormhole-foundation/wormhole-connect";
import {
  cctpExecutorRoute,
  cctpV2FastExecutorRoute,
  cctpV2StandardExecutorRoute,
} from "@wormhole-foundation/wormhole-connect/executor";

function App() {
  const config: config.WormholeConnectConfig = {
    // Define the network
    network: "Mainnet",
    routes: [
      cctpExecutorRoute(),
      cctpV2FastExecutorRoute(),
      cctpV2StandardExecutorRoute(),
    ],

    // Define the chains
    chains: ["Solana", "Sonic"],
    ui: {
      title: "CCTP Connect Demo",
    },
  };

  const theme: WormholeConnectTheme = {
    mode: "dark",
    primary: "#78c4b6",
  };

  return <WormholeConnect config={config} theme={theme} />;
}

export default App;