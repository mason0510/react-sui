import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { WalletProvider, Chain, SuiDevnetChain } from '@suiet/wallet-kit'
import store from './store'
import { Provider } from 'react-redux'

const SupportedChains: Chain[] = [SuiDevnetChain]
const SupportedWallets: string[] = ['suiet']
const autoConnect = true

createRoot(document.getElementById('root')).render(
    <WalletProvider chains={SupportedChains} defaultWallets={SupportedWallets}>
        <Provider store={store}>
            <App />
        </Provider>
    </WalletProvider>
)
