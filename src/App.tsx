import './App.css';
import WormholeConnect, {
	type config,
	WormholeConnectTheme,
	cctpExecutorRoute as getCctpExecutorRoute,
	cctpV2FastExecutorRoute as getCctpV2FastExecutorRoute,
	cctpV2StandardExecutorRoute as getCctpV2StandardExecutorRoute,
} from '@wormhole-foundation/wormhole-connect';

function App() {
	const config: config.WormholeConnectConfig = {
		// Define the network
		network: 'Mainnet',
		routes: [
			getCctpExecutorRoute,
			getCctpV2FastExecutorRoute,
			getCctpV2StandardExecutorRoute
		],

		// Define the chains
		chains: ['Sui', 'Sonic'],
		ui: {
			title: 'SUI Connect TS Demo',
		},
	};

	const theme: WormholeConnectTheme = {
		mode: 'dark',
		primary: '#78c4b6',
	};

	return <WormholeConnect config={config} theme={theme} />;
}

export default App;
