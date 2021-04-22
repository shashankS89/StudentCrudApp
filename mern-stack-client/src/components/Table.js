import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    
    delete() {
        axios.delete('http://localhost:4000/todos/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))

            window.location.reload(false);
    }
  render() {
    return (
      
      <table className="table" style={{tableLayout:"fixed"}} >
      <thead>
      <tr>{this.props.obj.todo_description}</tr>
      <tr>{this.props.obj.todo_responsible}</tr>
      </thead>
      <tbody>
        <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary btn-sm">Edit</Link>
        </td> 
        <td>
          <button onClick={this.delete} className="btn btn-danger btn-sm">Delete</button>
        </td> 
      </tbody>
        
        </table>
        
    );
  }
}

export default TableRow;