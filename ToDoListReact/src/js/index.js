import React from 'react';
import ReactDOM from 'react-dom';
import ToDoapp from './ToDoapp';

class Index extends React.Component {

    render() {
        return (
            < div>
                <ToDoapp/>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById('example'));
