import React from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

const Staking = () => (
    <Layout>
        <div>
            <CustomBreadcrumb arr={['质押']}></CustomBreadcrumb>
        </div>
        <div className='base-style'>
            <h3>质押</h3>
        </div>
    </Layout>
)
export default Staking
