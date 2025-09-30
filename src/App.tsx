import './App.css';
import WormholeConnect, {
	type config,
	WormholeConnectTheme,
} from '@wormhole-foundation/wormhole-connect';

function App() {
	const config: config.WormholeConnectConfig = {
		// Define the network
		network: 'Testnet',

		// Define the chains
		chains: ['Sui', 'Avalanche'],

		// rpcs: {
		// 	Solana: 'https://mainnet.helius-rpc.com/?api-key=KEY'
		// },
		// UI configuration
		ui: {
			title: 'SUI Connect Demo',
		},
	};

	const theme: WormholeConnectTheme = {
		mode: 'dark',
		primary: '#78c4b6',
	};

	return <WormholeConnect config={config} theme={theme} />;
}

export default App;