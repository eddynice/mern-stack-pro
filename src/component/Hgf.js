import React, { Component } from 'react';
import Content from './component/Content';

export default class Container extends Component {
    constructor(props) {
        super(props)
    
        this.state ={
            refreshing:false,
            
        }

    }

    refresh(){
        this.setState({
            refreshing:true
        })
    }
    onComponent(){
        this.setState({
            refreshing:false
        })
    }
    render() {
        const {refreshing} = this.state
        return (
            <div>
                <Content 
                oncomponetRefresh={this.oncomponetRefresh.bind(this.state)}
                requestRefresh={refreshing}
                fetchData={fetchEvents} />

                <button onClick={this.refresh}></button>
                
            </div>
        )
    }
}
