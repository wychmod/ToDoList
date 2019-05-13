import React from 'react';

import ToDoItem from './ToDoItem';  //导入ToDoItem模块
export default class ToDoList extends React.Component {

    sort() {
        this.props.getJson();
    }

    render() {
        let mystyle={
            textDecoration:'none',color:'#000000'
        }

        let todos = this.props.data;

        let todoItems = todos.map(item => {
            return <ToDoItem okItem={this.props.okItem} deleteItem={this.props.deleteItem}
                             updateItem={this.props.updateItem} changeItem={this.props.changeItem} key={item.id}
                             data={item}/>
        });

        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>内容</th>
                    <th>时间</th>
                    <th>截止时间</th>
                    <th><a style={mystyle} onClick={this.sort.bind(this)}>优先级</a></th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {todoItems}
                </tbody>
            </table>
        );
    }
}