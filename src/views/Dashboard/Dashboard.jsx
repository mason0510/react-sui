// import React from 'react'
// import { Layout, Divider,Button } from 'antd'
// import CustomBreadcrumb from '@/components/CustomBreadcrumb'
// import {
//     ConnectButton,
//     WalletProvider,
//     useWallet,
// } from '@suiet/wallet-kit';
// const wallet = useWallet()
// const printAccountInfo=()=>{
//     if (!wallet.connected) return
//     console.log(wallet.account?.address)
//     console.log(wallet.account?.publicKey)
// }
//
// const handleSignAndExecuteTx= async ()=> {
//     if (!wallet.connected) return
//     try {
//         const resData = await wallet.signAndExecuteTransaction({
//             transaction: {
//                 kind: 'moveCall',
//                 data: {
//                     packageObjectId: '0x2',
//                     module: 'devnet_nft',
//                     function: 'mint',
//                     typeArguments: [],
//                     arguments: [
//                         'name',
//                         'capy',
//                         'https://cdn.britannica.com/94/194294-138-B2CF7780/overview-capybara.jpg?w=800&h=450&c=crop',
//                     ],
//                     gasBudget: 10000,
//                 }
//             }
//         });
//         console.log('nft minted successfully!', resData);
//         alert('congrats, a cute capybara comes to you!')
//     } catch (e) {
//         console.error('nft mint failed', e);
//     }
// }
//
// const Dashboard = () => (
//     <Layout>
//         <head>
//             <ConnectButton>Connect Wallet</ConnectButton>
//         </head>
//         <div>
//             <Button onClick={printAccountInfo}></Button>
//         </div>
//     </Layout>
// )
//
// export {
//     Dashboard
// }

import React, { Component } from 'react'
import { Layout, Divider, Button } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { ConnectButton, WalletProvider, useWallet } from '@suiet/wallet-kit'
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <div>
                    <h1>hello</h1>
                </div>
            </Layout>
        )
    }
}
export default Dashboard
