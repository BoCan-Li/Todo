import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Input, Button, Tabs} from 'antd';
import moment from 'moment'

const { Header, Content } = Layout;
const { TabPane } = Tabs;

const TabList = [
    {
        path: '/todo/list',
        name: '全部任务'
    },
    {
        path: '/todo/finish',
        name: '已完成'
    },
    {
        path: '/todo/unfinish',
        name: '待完成'
    }
]

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    tabChange = (key)=>{
        this.props.history.push(key)
    }

    saveData = (e)=>{
        const { inputValue } = this.state
        
        this.props.add({
            name: inputValue,
            check: false,
            time: moment().format('YYYY-MM-DD HH:mm:ss')
        })
        this.setState({
            inputValue: ''
        })
    }

    render() {
        const {routes, location: {pathname}} = this.props;
        const { inputValue } = this.state
        return (
            <div>
                <Header>
                    <Link to={'/'}>HOME</Link>
                    <Input 
                        size="large" 
                        value={inputValue} 
                        onChange={(e)=>(this.setState({ inputValue: e.target.value }))}
                        onPressEnter = {this.saveData}
                    />
                    <Button type="primary" onClick={this.saveData}>确定</Button>
                </Header>
                <Content>
                    <Tabs defaultActiveKey="/todo/list" activeKey={pathname} onChange={this.tabChange}>
                        {
                            routes.map(route=>{
                                const { path, component } = route
                                const { name='' } = TabList.find(item=>item.path === path) || {}
                                return (
                                <TabPane tab={name} key={path}>
                                    <Switch>
                                        <Route path={path} component={component} />
                                    </Switch>
                                </TabPane>
                            )})
                        }
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    showList: state.showList
})

const mapDispatchToProps = (dispatch)=>({
    add: (reqInfo)=>dispatch({
        type: 'add',
        posts: reqInfo
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
