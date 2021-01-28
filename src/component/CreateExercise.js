import React, { Component } from 'react';
import axios from 'axios';

//import datepicker from 'datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
    constructor(props) {
        super(props)
        this.onChangeusername = this.onChangeusername.bind(this)
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangeduration = this.onChangeduration.bind(this);
        
        this.onChangedate = this.onChangedate.bind(this)
    
        this.state = {
             username: '',
             description: '',
             duration:'',
             date: new Date(),
             users:[]
        }
        
        this.onSubmit= this.onSubmit.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:5000/user/')
        .then(response=> console.log(response.data))
        .then(response=>{
            if(response.data.length > 0){
                this.setState({
                    users:response.data.map(user=>user.username), 
                    username:response.data[0].username 
                })
            }
        }) 
            
    }
    onChangeusername(e){
        this.setState({
           username: e.target.value
        })
    }
    onChangedescription(e){
        this.setState({
           description:e.target.value
        })
    }
    onChangeduration(e){
        this.setState({
            duration: e.target.value
        })
    }
    onChangedate(e){
        this.setState({
            date: e.target.value
        })
    }
   
   onSubmit(e){
       e.preventDefault();
      // e.persist()

       const exercise ={
           username:this.state.username,
           description:this.state.description,
           duration:this.state.duration,
           date:this.state.date
        
        }
        console.log(exercise);
        axios.post('http://localhost:5000/exercise/add', exercise)
        .then(response => console.log(response.data));
        window.location='/';
}



    render() { 
        return (
            <div>

                <h1>Create new Exercise </h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>username</label>
                        
                        <select  required className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeusername}>
                            {
                                this.state.users.map(function(user){
                                    return <option key={user}
                                     value={user}
                                       className="form-control">
                                           {user} 
                                           </option>;
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>description</label>
                        <input type="text" 
                        value={this.state.description} required
                         className="form-control"
                          onChange={this.onChangedescription}/>
                    </div>

                    <div className="form-group">
                        <label>Duration</label>
                        <input type="number" value={this.state.duration}
                         required className="form-control"
                          onChange={this.onChangeduration}/>
                   
                       
                       </div> 

                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" select={this.state.date} required
                         className="form-control"
                          onChange={this.onChangedate}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" 
                        value="Create Exercise" 
                        className="btn btn-primary"/>
                    </div>


                </form>
                
            </div>
        )
    }
}
