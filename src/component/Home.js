import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, List, Typography } from 'antd';

const { Header, Content } = Layout;
const { Text } = Typography

class Home extends Component {
    render() {
        const {data=[]} = this.props;
        return (
            <div>
                <Header>
                    <Link to={'/todo'}>TODO</Link>
                </Header>
                <Content>
                    <List
                        size="large"
                        bordered
                        dataSource={data}
                        renderItem={item => {
                            const { name='', check='', time='' } = item
                            return (
                            <List.Item>
                                {check?<Text type="success" delete>{name}</Text>:<Text>{name}</Text>}
                                <span>{time}</span>
                            </List.Item>
                        )}}
                    />
                </Content>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.showList.data
})

export default connect(mapStateToProps, null)(Home)
