import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Icon, Layout, Avatar, Badge, Button } from 'antd'
import { ConnectButton, useWallet } from '@suiet/wallet-kit'

const { Header } = Layout

const AppHeader = props => {
    let { menuClick, menuToggle, handleClick, handleSignAndExecuteTx } = props
    return (
        <Header className='header'>
            <ConnectButton onClick={handleSignAndExecuteTx} />
            <div className='left'>
                <Icon
                    style={{ fontSize: '0rem' }}
                    onClick={menuClick}
                    type={menuToggle ? 'menu-unfold' : 'menu-fold'}
                />
            </div>
            <div className='right'>
                <div className='mr15'>
                    <Button type='primary'>ConnectSui</Button>
                </div>
                <div className='mr15'>
                    <Button type='primary' onClick={handleClick}>
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
    loginOut: PropTypes.func,
    handleSignAndExecuteTx: PropTypes.func
}

export default React.memo(AppHeader)
