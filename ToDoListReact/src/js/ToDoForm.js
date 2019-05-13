import React from 'react';

export default class ToDoForm extends React.Component {


    tijiao(event) {
        event.preventDefault();
    }

    /*添加新便签*/
    add(event) {

        if (event.type == "keyup" && event.keyCode != 13) {
            return false;
        }

        let txt = this.refs.txt.value;
        let priority = this.refs.priority.value;
        let time = this.refs.time.value;
        console.log(priority)
        console.log(time)
        if (txt == "") return false;
        this.props.addItem(txt, priority, time);
        this.refs.txt.value = "";
        this.refs.time.value = "";
    }

    /*显示未完成*/
    showdone(event) {
        this.props.showDoneItem();
    }

    /*显示全部*/
    noneshowdone(event) {
        this.props.showNoneItem();
    }

    render() {
        const styleDate = {
            time: {
                marginTop: "3px"
            }
        };

        let doneId = this.props.doneId;
        let doneButton;
        if (doneId == 1) {
            doneButton = (
                <button type="button" className="btn btn-danger" onClick={this.noneshowdone.bind(this)}>显示全部</button>)
        }else {
            doneButton = (
                <button type="button" className="btn btn-danger" onClick={this.showdone.bind(this)}>显示未完成</button>)
        }


        return (
            <form className="form-horizontal" onSubmit={this.tijiao.bind(this)}>
                <div className="form-group">
                    <div className="col-sm-5">
                        <input ref="txt" type="text" className="form-control" onKeyUp={this.add.bind(this)}
                               id="exampleInputName2" placeholder="请输入内容"/>
                    </div>
                    <div className="col-sm-2">
                        <select className="form-control" ref="priority">
                            <option value="1">优先级:普通</option>
                            <option value="2">优先级:重要</option>
                            <option value="3">优先级:紧急</option>
                        </select>
                    </div>
                    <div className="col-sm-3">
                        截止时间:<input type="date" ref="time" style={styleDate.time}/>
                    </div>
                    <div className="col-sm-2">
                        <button type="button" className="btn btn-primary" onClick={this.add.bind(this)}>添加</button>
                        &nbsp;
                        {doneButton}
                    </div>
                </div>
            </form>
        );
    }
}