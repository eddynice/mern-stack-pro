import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './component/Navbar'
import ExerciseList from './component/ExerciseList';
import EditExercise from './component/EditExercise';
import CreateExercise from './component/CreateExercise';
import CreateUser from './component/CreateUser';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
    render() {
        return (
            <div>
              
               <Router>
               <Navbar/>
                <div className="container">
                   <Route path="/" exact component={ExerciseList}/>
                   <Route path="/edit/:id" component={EditExercise}/>
                   <Route path="/create" component={CreateExercise}/>
                   <Route path="/user" component={CreateUser}/>
                   </div>
               </Router>
               
               </div>
        
                       
                    
        )
    }
}

export default App
