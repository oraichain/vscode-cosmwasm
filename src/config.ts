import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfoWithExplorer } from './stores/chain';

export const EmbedChainInfos: ChainInfoWithExplorer[] = [
    {
        rpc: 'https://rpc-osmosis.keplr.app',
        rest: 'https://lcd-osmosis.keplr.app',
        chainId: 'osmosis-1',
        chainName: 'Osmosis',
        stakeCurrency: {
            coinDenom: 'OSMO',
            coinMinimalDenom: 'uosmo',
            coinDecimals: 6,
            coinGeckoId: 'osmosis',
            coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
        },
        bip44: {
            coinType: 118,
        },
        bech32Config: Bech32Address.defaultBech32Config('osmo'),
        currencies: [
            {
                coinDenom: 'OSMO',
                coinMinimalDenom: 'uosmo',
                coinDecimals: 6,
                coinGeckoId: 'osmosis',
                coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
            },
            {
                coinDenom: 'ION',
                coinMinimalDenom: 'uion',
                coinDecimals: 6,
                coinGeckoId: 'ion',
                coinImageUrl: window.location.origin + '/public/assets/tokens/ion.png',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'OSMO',
                coinMinimalDenom: 'uosmo',
                coinDecimals: 6,
                coinGeckoId: 'osmosis',
                coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
            },
        ],
        features: ['stargate', 'ibc-transfer'],
        explorerUrlToTx: 'https://www.mintscan.io/osmosis/txs/{txHash}',
    },
    {
        rpc: 'https://rpc-cosmoshub.keplr.app',
        rest: 'https://lcd-cosmoshub.keplr.app',
        chainId: 'cosmoshub-4',
        chainName: 'Cosmos Hub',
        stakeCurrency: {
            coinDenom: 'ATOM',
            coinMinimalDenom: 'uatom',
            coinDecimals: 6,
            coinGeckoId: 'cosmos',
            coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
        },
        bip44: {
            coinType: 118,
        },
        bech32Config: Bech32Address.defaultBech32Config('cosmos'),
        currencies: [
            {
                coinDenom: 'ATOM',
                coinMinimalDenom: 'uatom',
                coinDecimals: 6,
                coinGeckoId: 'cosmos',
                coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'ATOM',
                coinMinimalDenom: 'uatom',
                coinDecimals: 6,
                coinGeckoId: 'cosmos',
                coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
            },
        ],
        coinType: 118,
        features: ['stargate', 'ibc-transfer'],
        explorerUrlToTx: 'https://www.mintscan.io/cosmos/txs/{txHash}',
    },
    {
        rpc: 'https://rpc-akash.keplr.app',
        rest: 'https://lcd-akash.keplr.app',
        chainId: 'akashnet-2',
        chainName: 'Akash',
        stakeCurrency: {
            coinDenom: 'AKT',
            coinMinimalDenom: 'uakt',
            coinDecimals: 6,
            coinGeckoId: 'akash-network',
            coinImageUrl: window.location.origin + '/public/assets/tokens/akt.svg',
        },
        bip44: {
            coinType: 118,
        },
        bech32Config: Bech32Address.defaultBech32Config('akash'),
        currencies: [
            {
                coinDenom: 'AKT',
                coinMinimalDenom: 'uakt',
                coinDecimals: 6,
                coinGeckoId: 'akash-network',
                coinImageUrl: window.location.origin + '/public/assets/tokens/akt.svg',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'AKT',
                coinMinimalDenom: 'uakt',
                coinDecimals: 6,
                coinGeckoId: 'akash-network',
                coinImageUrl: window.location.origin + '/public/assets/tokens/akt.svg',
            },
        ],
        coinType: 118,
        features: ['stargate', 'ibc-transfer'],
        explorerUrlToTx: 'https://www.mintscan.io/akash/txs/{txHash}',
    },
    {
        rpc: 'https://rpc-regen.keplr.app',
        rest: 'https://lcd-regen.keplr.app',
        chainId: 'regen-1',
        chainName: 'Regen Network',
        stakeCurrency: {
            coinDenom: 'REGEN',
            coinMinimalDenom: 'uregen',
            coinDecimals: 6,
            coinImageUrl: window.location.origin + '/public/assets/tokens/regen.png',
            coinGeckoId: 'regen',
        },
        bip44: { coinType: 118 },
        bech32Config: Bech32Address.defaultBech32Config('regen'),
        currencies: [
            {
                coinDenom: 'REGEN',
                coinMinimalDenom: 'uregen',
                coinDecimals: 6,
                coinImageUrl: window.location.origin + '/public/assets/tokens/regen.png',
                coinGeckoId: 'regen',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'REGEN',
                coinMinimalDenom: 'uregen',
                coinDecimals: 6,
                coinImageUrl: window.location.origin + '/public/assets/tokens/regen.png',
                coinGeckoId: 'regen',
            },
        ],
        features: ['stargate', 'ibc-transfer'],
        explorerUrlToTx: 'https://regen.aneka.io/txs/{txHash}',
    },
    {
        rpc: 'https://rpc-sentinel.keplr.app',
        rest: 'https://lcd-sentinel.keplr.app',
        chainId: 'sentinelhub-2',
        chainName: 'Sentinel',
        stakeCurrency: {
            coinDenom: 'DVPN',
            coinMinimalDenom: 'udvpn',
            coinDecimals: 6,
            coinGeckoId: 'sentinel',
            coinImageUrl: window.location.origin + '/public/assets/tokens/dvpn.png',
        },
        bip44: { coinType: 118 },
        bech32Config: Bech32Address.defaultBech32Config('sent'),
        currencies: [
            {
                coinDenom: 'DVPN',
                coinMinimalDenom: 'udvpn',
                coinDecimals: 6,
                coinGeckoId: 'sentinel',
                coinImageUrl: window.location.origin + '/public/assets/tokens/dvpn.png',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'DVPN',
                coinMinimalDenom: 'udvpn',
                coinDecimals: 6,
                coinGeckoId: 'sentinel',
                coinImageUrl: window.location.origin + '/public/assets/tokens/dvpn.png',
            },
        ],
        explorerUrlToTx: 'https://www.mintscan.io/sentinel/txs/{txHash}',
        features: ['stargate', 'ibc-transfer'],
    },
    {
        rpc: 'https://rpc-persistence.keplr.app',
        rest: 'https://lcd-persistence.keplr.app',
        chainId: 'core-1',
        chainName: 'Persistence',
        stakeCurrency: {
            coinDenom: 'XPRT',
            coinMinimalDenom: 'uxprt',
            coinDecimals: 6,
            coinGeckoId: 'persistence',
            coinImageUrl: window.location.origin + '/public/assets/tokens/xprt.png',
        },
        bip44: {
            coinType: 750,
        },
        bech32Config: Bech32Address.defaultBech32Config('persistence'),
        currencies: [
            {
                coinDenom: 'XPRT',
                coinMinimalDenom: 'uxprt',
                coinDecimals: 6,
                coinGeckoId: 'persistence',
                coinImageUrl: window.location.origin + '/public/assets/tokens/xprt.png',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'XPRT',
                coinMinimalDenom: 'uxprt',
                coinDecimals: 6,
                coinGeckoId: 'persistence',
                coinImageUrl: window.location.origin + '/public/assets/tokens/xprt.png',
            },
        ],
        features: ['stargate', 'ibc-transfer'],
        explorerUrlToTx: 'https://www.mintscan.io/persistence/txs/{txHash}',
    },
    {
        rpc: 'https://rpc-iris.keplr.app',
        rest: 'https://lcd-iris.keplr.app',
        chainId: 'irishub-1',
        chainName: 'IRISnet',
        stakeCurrency: {
            coinDenom: 'IRIS',
            coinMinimalDenom: 'uiris',
            coinDecimals: 6,
            coinGeckoId: 'iris-network',
            coinImageUrl: window.location.origin + '/public/assets/tokens/iris.svg',
        },
        bip44: {
            coinType: 118,
        },
        bech32Config: Bech32Address.defaultBech32Config('iaa'),
        currencies: [
            {
                coinDenom: 'IRIS',
                coinMinimalDenom: 'uiris',
                coinDecimals: 6,
                coinGeckoId: 'iris-network',
                coinImageUrl: window.location.origin + '/public/assets/tokens/iris.svg',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'IRIS',
                coinMinimalDenom: 'uiris',
                coinDecimals: 6,
                coinGeckoId: 'iris-network',
                coinImageUrl: window.location.origin + '/public/assets/tokens/iris.svg',
            },
        ],
        features: ['stargate', 'ibc-transfer'],
        explorerUrlToTx: 'https://www.mintscan.io/iris/txs/{txHash}',
    },
    {
        rpc: 'https://rpc-crypto-org.keplr.app/',
        rest: 'https://lcd-crypto-org.keplr.app/',
        chainId: 'crypto-org-chain-mainnet-1',
        chainName: 'Crypto.org',
        stakeCurrency: {
            coinDenom: 'CRO',
            coinMinimalDenom: 'basecro',
            coinDecimals: 8,
            coinGeckoId: 'crypto-com-chain',
            coinImageUrl: window.location.origin + '/public/assets/tokens/cro.png',
        },
        bip44: {
            coinType: 394,
        },
        bech32Config: Bech32Address.defaultBech32Config('cro'),
        currencies: [
            {
                coinDenom: 'CRO',
                coinMinimalDenom: 'basecro',
                coinDecimals: 8,
                coinGeckoId: 'crypto-com-chain',
                coinImageUrl: window.location.origin + '/public/assets/tokens/cro.png',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'CRO',
                coinMinimalDenom: 'basecro',
                coinDecimals: 8,
                coinGeckoId: 'crypto-com-chain',
                coinImageUrl: window.location.origin + '/public/assets/tokens/cro.png',
            },
        ],
        features: ['stargate', 'ibc-transfer'],
        explorerUrlToTx: 'https://www.mintscan.io/crypto-org/txs/{txHash}',
    },
    {
        rpc: 'https://rpc-iov.keplr.app',
        rest: 'https://lcd-iov.keplr.app',
        chainId: 'iov-mainnet-ibc',
        chainName: 'Starname',
        stakeCurrency: {
            coinDenom: 'IOV',
            coinMinimalDenom: 'uiov',
            coinDecimals: 6,
            coinGeckoId: 'starname',
            coinImageUrl: window.location.origin + '/public/assets/tokens/iov.png',
        },
        bip44: {
            coinType: 234,
        },
        bech32Config: Bech32Address.defaultBech32Config('star'),
        currencies: [
            {
                coinDenom: 'IOV',
                coinMinimalDenom: 'uiov',
                coinDecimals: 6,
                coinGeckoId: 'starname',
                coinImageUrl: window.location.origin + '/public/assets/tokens/iov.png',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'IOV',
                coinMinimalDenom: 'uiov',
                coinDecimals: 6,
                coinGeckoId: 'starname',
                coinImageUrl: window.location.origin + '/public/assets/tokens/iov.png',
            },
        ],
        features: ['stargate', 'ibc-transfer'],
        explorerUrlToTx: 'https://www.mintscan.io/starname/txs/{txHash}',
    },
    {
        rpc: 'https://rpc-emoney.keplr.app',
        rest: 'https://lcd-emoney.keplr.app',
        chainId: 'emoney-3',
        chainName: 'e-Money',
        stakeCurrency: {
            coinDenom: 'NGM',
            coinMinimalDenom: 'ungm',
            coinDecimals: 6,
            coinGeckoId: 'e-money',
            coinImageUrl: window.location.origin + '/public/assets/tokens/ngm.png',
        },
        bip44: {
            coinType: 118,
        },
        bech32Config: Bech32Address.defaultBech32Config('emoney'),
        currencies: [
            {
                coinDenom: 'NGM',
                coinMinimalDenom: 'ungm',
                coinDecimals: 6,
                coinGeckoId: 'e-money',
                coinImageUrl: window.location.origin + '/public/assets/tokens/ngm.png',
            },
            {
                coinDenom: 'EEUR',
                coinMinimalDenom: 'eeur',
                coinDecimals: 6,
                coinGeckoId: 'e-money-eur',
                coinImageUrl: window.location.origin + '/public/assets/tokens/ngm.png',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'NGM',
                coinMinimalDenom: 'ungm',
                coinDecimals: 6,
                coinGeckoId: 'e-money',
                coinImageUrl: window.location.origin + '/public/assets/tokens/ngm.png',
            },
        ],
        gasPriceStep: {
            low: 1,
            average: 1,
            high: 1,
        },
        features: ['stargate', 'ibc-transfer'],
        explorerUrlToTx: 'https://emoney.bigdipper.live/transactions/${txHash}',
    },
    {
        rpc: 'https://rpc.orai.io',
        rest: 'https://lcd.orai.io',
        chainId: 'Oraichain',
        chainName: 'Oraichain',
        stakeCurrency: {
            coinDenom: 'ORAI',
            coinMinimalDenom: 'orai',
            coinDecimals: 6,
            coinGeckoId: 'oraichain-token',
            coinImageUrl: window.location.origin + '/public/assets/tokens/orai.png',
        },
        walletUrl: 'https://api.wallet.orai.io',
        bip44: {
            coinType: 118,
        },
        bech32Config: Bech32Address.defaultBech32Config('orai'),
        currencies: [
            {
                coinDenom: 'ORAI',
                coinMinimalDenom: 'orai',
                coinDecimals: 6,
                coinGeckoId: 'oraichain-token',
                coinImageUrl: window.location.origin + '/public/assets/tokens/orai.png',
            },
            {
                coinDenom: 'ORAI',
                coinMinimalDenom: 'orai',
                coinDecimals: 6,
                coinGeckoId: 'oraichain-token',
                coinImageUrl: window.location.origin + '/public/assets/tokens/orai.png',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'ORAI',
                coinMinimalDenom: 'orai',
                coinDecimals: 6,
                coinGeckoId: 'oraichain-token',
                coinImageUrl: window.location.origin + '/public/assets/tokens/orai.png',
            },
        ],
        gasPriceStep: {
            low: 0,
            average: 0.0025,
            high: 0.004,
        },
        features: ['stargate', 'ibc-transfer', 'cosmwasm'],
        explorerUrlToTx: 'https://scan.orai.io/txs/${txHash}',
    },
    {
        rpc: 'https://testnet-rpc.orai.io',
        rest: 'https://testnet-lcd.orai.io',
        chainId: 'Oraichain-testnet',
        chainName: 'Oraichain-testnet',
        stakeCurrency: {
            coinDenom: 'ORAI',
            coinMinimalDenom: 'orai',
            coinDecimals: 6,
            coinGeckoId: 'oraichain-token',
            coinImageUrl: window.location.origin + '/public/assets/tokens/orai.png',
        },
        bip44: {
            coinType: 118,
        },
        bech32Config: Bech32Address.defaultBech32Config('orai'),
        currencies: [
            {
                coinDenom: 'ORAI',
                coinMinimalDenom: 'orai',
                coinDecimals: 6,
                coinGeckoId: 'oraichain-token',
                coinImageUrl: window.location.origin + '/public/assets/tokens/orai.png',
            },
            {
                coinDenom: 'ORAI',
                coinMinimalDenom: 'orai',
                coinDecimals: 6,
                coinGeckoId: 'oraichain-token',
                coinImageUrl: window.location.origin + '/public/assets/tokens/orai.png',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'ORAI',
                coinMinimalDenom: 'orai',
                coinDecimals: 6,
                coinGeckoId: 'oraichain-token',
                coinImageUrl: window.location.origin + '/public/assets/tokens/orai.png',
            },
        ],
        gasPriceStep: {
            low: 0,
            average: 0.0025,
            high: 0.004,
        },
        features: ['stargate', 'ibc-transfer', 'cosmwasm'],
        explorerUrlToTx: 'https://testnet.scan.orai.io/txs/${txHash}',
    },
];