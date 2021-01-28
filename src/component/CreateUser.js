import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:''
        }
    }
    onChangeusername=(e)=>{
        this.setState({
           username: e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const user={
            username:this.state.username
        }
        console.log(user);
        axios.post('http://localhost:5000/user/add',user)
        .then(res =>console.log(res.data));
        this.setState({
            username:''
        })
    }

    render() {
        return (
            <div>
              <h3>Create New Users</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Username</label>
                      <input type="text" required 
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeusername} />
                      </div>
                      <div className="form-group">
                          <input type="submit" value="Create user"className="btn btn-primary" />
                      </div>
                      
                      </form>  
            </div>
            
        )
    }
}
