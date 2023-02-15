import React from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

const Bond = () => (
    <Layout>
        <div>
            <CustomBreadcrumb arr={['债券']}></CustomBreadcrumb>
        </div>
        <div className='base-style'>
            <h3>债券</h3>
        </div>
    </Layout>
)
export default Bond
