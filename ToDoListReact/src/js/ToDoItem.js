import React from 'react';

export default class ToDoItem extends React.Component {

    /*删除按钮*/
    delete() {
        this.props.deleteItem(this.props.data.id);
    }

    /*完成按钮*/
    complete() {
        this.props.okItem(this.props.data.id);
    }

    /*编辑按钮*/
    change() {
        this.props.changeItem(this.props.data.id);
    }

    /*编辑完成按钮*/
    update() {
        let txt = this.refs.txt.value;
        this.props.updateItem(this.props.data.id, txt);
    }

    render() {

        let {text, time, priority, endtime, done, id, changeid} = this.props.data;
        let priorityMessage;
        let txtMessage = (<td>{text}</td>)
        let buttonMessage = (<td>
            <a className="btn btn-primary" onClick={this.delete.bind(this)}>
                <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
                删除</a>
            <a className="btn btn-success" onClick={this.complete.bind(this)}>
                <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                完成
            </a>
            <a className="btn btn-danger" onClick={this.change.bind(this)}>
                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                编辑</a>
        </td>)
        if (changeid == 1) {
            buttonMessage = (<td><a className="btn btn-danger" onClick={this.update.bind(this)}>
                <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                编辑完成
            </a></td>)
            txtMessage = (<td><input ref='txt' type='text' className='form-control' placeholder='请输入内容'/></td>)
        }

        /*将priority转化为汉字*/
        if (priority == 1) {
            priorityMessage = (<td>普通</td>)
        }
        if (priority == 2) {
            priorityMessage = (<td>重要</td>)
        }
        if (priority == 3) {
            priorityMessage = (<td>紧急</td>)
        }
        return (
            <tr>
                {txtMessage}
                <td>{time}</td>
                <td>{endtime}</td>
                {priorityMessage}
                <td>{done == 0 ? "未完成" : "完成"}</td>
                {buttonMessage}
            </tr>
        );
    }
}
