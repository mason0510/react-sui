import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Layout, Button } from 'antd'

const { Header } = Layout

//点击了当前事件
const handleClick = (params, e) => {
    console.log(params)
    console.log(e)
}

const AppHeader = props => {
    let { menuClick, menuToggle } = props
    return (
        <Header className='header'>
            <div className='right'>
                <div className='mr15'>
                    <Button type='primary' onClick={params => handleClick(params)}>
                        ConnectSui
                    </Button>
                </div>
                <div className='mr15'>
                    <Button type='primary' onClick={params => handleClick(params)}>
                        DisConnectSui
                    </Button>
                </div>
            </div>
        </Header>
    )
}

AppHeader.propTypes = {
    menuClick: PropTypes.func,
    avatar: PropTypes.string,
    menuToggle: PropTypes.bool,
    loginOut: PropTypes.func
}

export default React.memo(AppHeader)
