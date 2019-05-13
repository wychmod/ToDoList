import React from 'react';

import ToDoList from './ToDoList';  //导入ToDoList模块
import ToDoForm from './ToDoForm'; //导入ToDoForm模块

export default class ToDoapp extends React.Component {
    constructor(props) {
        super(props);
        this.ids = 1;
        this.state = {
            todos: [],
            doneTodos: [],
            doneId: 0,
        };
        /*获取数据库数据*/
        fetch(
            'http://127.0.0.1:8000/tolist/'
        )
            .then(res => res.json())
            .then(data => {
                this.setState({
                    todos: data
                });
            })
            .catch(e => console.log('错误:', e))

        console.log(this.state.todos)

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.okItem = this.okItem.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.showDoneItem = this.showDoneItem.bind(this);
        this.showNoneItem = this.showNoneItem.bind(this);
        this.getJson = this.getJson.bind(this);
    }

    /*获取数据库数据*/
    getJson(){
        fetch(
            'http://127.0.0.1:8000/tolistp/'
        )
            .then(res => res.json())
            .then(data => {
                this.setState({
                    todos: data
                });
            })
            .catch(e => console.log('错误:', e))

        console.log("getJson");
    }


    /*对便签进行完成任务*/
    okItem(id) {
        this.state.todos.map(item => {
            if (item.id == id) {
                item.done = 1;
                fetch('http://127.0.0.1:8000/toupdate/'+id+'/', {
                    method: 'PUT',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({text: item.text,
                        time: (new Date()).toLocaleDateString(),
                        done: 1,
                        priority: item.priority,
                        endtime: item.endtime,
                        changeid: 0})
                }).then(function(response) {
                    console.log(response);
                });
            }
            return item;
        });
        location.reload([false])
    }

    /*判断下层的改变*/
    changeItem(id) {
        this.state.todos.map(item => {
            if (item.id == id) {
                item.changeid = 1;
            }
            return item;
        });
        this.setState({
            todos: this.state.todos
        });
    }

    /*更新数据库数据*/
    updateItem(id, txt) {
        this.state.todos.map(item => {
            if (item.id == id) {
                fetch('http://127.0.0.1:8000/toupdate/'+id+'/', {
                    method: 'PUT',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({text: txt,
                        time: (new Date()).toLocaleDateString(),
                        done: item.done,
                        priority: item.priority,
                        endtime: item.endtime,
                        changeid: 0})
                }).then(function(response) {
                    console.log(response);
                });
            }
            return item;
        });
        location.reload([false])
    }

    /*对数据库的便签进行删除*/
    deleteItem(id) {

        fetch('http://127.0.0.1:8000/todelete/'+id+'/', {
            method: 'DELETE',
        }).then(function(response) {
            console.log(response.body);
        });
        location.reload([false])

    }

    /*展示未完成内容*/
    showDoneItem() {
        let newtodos = this.state.todos.filter((item) => {
            return !(item.done == 1)
        });
        this.setState({
            doneTodos: this.state.todos,
            todos: newtodos,
            doneId: 1,
        });
    }

    /*展示全部内容*/
    showNoneItem() {
        this.setState({
            todos: this.state.doneTodos,
            doneId: 0,
        });
    }

    /*添加新的便签*/
    addItem(value, priority, endtime) {
        let postdata = JSON.stringify({text: value,
            time: (new Date()).toLocaleDateString(),
            done: 0,
            priority: priority,
            endtime: endtime,
            changeid: 0});

        console.log(postdata)

        fetch('http://127.0.0.1:8000/tocreate/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: postdata
        }).then(function(response) {
            console.log(response.body);
        });

        location.reload([false])

    }

    render() {
        return (

            <div className="container">
                <br/>
                <br/>
                <br/>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h1 className="text-center ">ToDo <small>高效率.慢生活</small></h1>
                        <hr/>
                    </div>
                    <div className="panel-body">
                        <ToDoForm addItem={this.addItem} showDoneItem={this.showDoneItem} doneId={this.state.doneId}
                                  showNoneItem={this.showNoneItem}/>
                        <ToDoList okItem={this.okItem} deleteItem={this.deleteItem} updateItem={this.updateItem}
                                  data={this.state.todos} changeItem={this.changeItem} getJson={this.getJson}/>
                    </div>
                </div>
            </div>
        );
    }
}