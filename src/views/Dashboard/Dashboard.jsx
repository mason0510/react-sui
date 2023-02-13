import React from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

const Dashboard = () => (
    <Layout>
        <div>
            <CustomBreadcrumb arr={['仪表盘']}></CustomBreadcrumb>
            <h1>关于suiWallet钱包 bashboard</h1>
            <h3>连接钱包</h3>
        </div>
        <div className='base-style'>
            <h3>关于作者</h3>
            <Divider />
            <p>这个人很懒，什么都没有留下……</p>
        </div>
    </Layout>
)
export default Dashboard
