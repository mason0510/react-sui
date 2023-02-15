import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, BackTop, message } from 'antd'
import routes from '@/routes'
import { menuToggleAction } from '@/store/actionCreators'
import echarts from 'echarts/lib/echarts'
import avatar from '@/assets/images/user.jpg'
import menu from './menu'
import '@/style/layout.scss'

import AppHeader from './AppHeader.jsx'
import AppAside from './AppAside.jsx'
import AppFooter from './AppFooter.jsx'

const { Content } = Layout

class DefaultLayout extends Component {
    state = {
        avatar,
        show: true,
        menu: []
    }

    isLogin = () => {
        if (!localStorage.getItem('user')) {
            //不管获取到用户或者没有获取到用户都要跳转到主页面
            this.props.history.push('/login')
            // this.props.history.push('/index')
        } else {
            this.setState({
                menu: this.getMenu(menu)
            })
        }
    }

    loginOut = () => {
        localStorage.clear()
        this.props.history.push('/login')
        message.success('登出成功!')
    }
    getMenu = menu => {
        let newMenu,
            auth = JSON.parse(localStorage.getItem('user')).auth
        if (!auth) {
            return menu
        } else {
            newMenu = menu.filter(res => res.auth && res.auth.indexOf(auth) !== -1)
            return newMenu
        }
    }

    componentDidMount() {
        this.isLogin()
    }

    componentDidUpdate() {
        let { pathname } = this.props.location
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        let { menuToggle } = this.props
        let { auth } = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''
        return (
            <Layout className='app'>
                <BackTop />
                <AppAside menuToggle={menuToggle} menu={this.state.menu} />
                <Layout style={{ marginLeft: menuToggle ? '80px' : '200px', minHeight: '100vh' }}>
                    <AppHeader handleSignAndExecuteTx={this.handleSignAndExecuteTx} />
                    <Content className='content'>
                        <Switch>
                            {routes.map(item => {
                                return (
                                    <Route
                                        key={item.path}
                                        path={item.path}
                                        exact={item.exact}
                                        render={props =>
                                            !auth ? (
                                                <item.component {...props} />
                                            ) : item.auth && item.auth.indexOf(auth) !== -1 ? (
                                                <item.component {...props} />
                                            ) : (
                                                // 这里也可以跳转到 403 页面
                                                <Redirect to='/404' {...props} />
                                            )
                                        }></Route>
                                )
                            })}
                            <Redirect to='/404' />
                        </Switch>
                    </Content>
                    <AppFooter />
                </Layout>
            </Layout>
        )
    }
}

const stateToProp = state => ({
    menuToggle: state.menuToggle
})

const dispatchToProp = dispatch => ({})

export default withRouter(connect(stateToProp, dispatchToProp)(DefaultLayout))
