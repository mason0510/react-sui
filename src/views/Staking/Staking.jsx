import React from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

const Staking = () => (
    <Layout>
        <div>
            <CustomBreadcrumb arr={['关于']}></CustomBreadcrumb>
            <h1>关于suiWallet钱包</h1>
            <h3>连接钱包</h3>
        </div>
        <div className='base-style'>
            <h3>关于作者</h3>
            <Divider />
            <p>这个人很懒，什么都没有留下……</p>
        </div>
    </Layout>
)
export default Staking
