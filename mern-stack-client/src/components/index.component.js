import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './Table';



export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/todos/')
        .then(response => {
            this.setState({todos: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <TableRow obj={currentTodo} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Student Notes</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
          )
    }
}