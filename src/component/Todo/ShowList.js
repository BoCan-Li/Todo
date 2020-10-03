import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Typography, Checkbox, Button } from 'antd';

const { Text } = Typography

export class ShowList extends Component {
    onChange = (index, e)=> {
        const objs = this.props.data[index] || {};
        objs.check = e.target.checked;
        this.props.change({
            index,
            objs
        })
    }

    delClick = (index)=>{
        this.props.del(index)
    }

    render() {
        const {data} = this.props;
        return (
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item, index) => {
                    const { name='', check=false, time='' } = item
                    return (
                    <List.Item key={index}>
                        <Checkbox checked={check} onChange={this.onChange.bind(this, index)}>是否完成</Checkbox>
                        {check ? <Text type="success" delete={true}>{name}</Text>:<Text>{name}</Text>}
                        <span>{time}</span>
                        <Button onClick={this.delClick.bind(this, index)}>删除</Button>
                    </List.Item>
                )}}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.showList.data
})

const mapDispatchToProps = (dispatch)=>({
    del: (reqInfo)=>dispatch({
        type: 'del',
        posts: reqInfo
    }),
    change: (reqInfo)=>dispatch({
        type: 'change',
        posts: reqInfo
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowList)
