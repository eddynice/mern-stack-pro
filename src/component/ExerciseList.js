import React, { Component } from 'react'
import Exercise from './Exercise';
import axios from 'axios';

export default class ExerciseList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            exercise:[]
             
        }
        this.deleteExercise = this.deleteExercise.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercise/')
        .then(response =>{
            this.setState({
                exercise:response.data
                
            })
           
         })
         
            .catch((error)=>{
                console.log(error);
            
        })
    }
    deleteExercise(id){
        axios.delete('http://localhost:5000/exercise/'+id)
        .then(res=> console.log(res.data));
        this.setState({
            exercise:this.state.exercise.filter(el=>el._id !==id)
        })
    }
    exercisList(){
        return this.state.exercise.map(currentexercise=>{
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>

        })
       
    }
    
    render() {
        return (
            <div>
              <h2>Logged Exercise</h2>
              <table className="table">
                  <thead className="thead-light">
                      <tr>
                          <th>Username</th>
                          <th>Descrition</th>
                          <th>Duration</th>
                          <th>Date</th>
                          <th>Actionf</th>
                          </tr></thead>
                          <tbody>
                             
                             {this.exercisList()} 
                            
                              </tbody></table>
            </div>
        )
    }
}
