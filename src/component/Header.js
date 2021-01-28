import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            searchVisible:false,
            searchText: ''
 
        }
    }

    showSearch(){
        this.setState({
            searchVisible: !this.state.searchVisible
        })
    }
    
    render() {
        const {searchVisible} = this.state;
        let searchInputClasses=["searchInput"];
        //if(this.state.searchVisible){
            if(searchVisible){
            searchInputClasses.push("active");
        }
        return (
            <div className="header"> 
            <div className="icon">
                <div className="fa-dashboard">
                    <div className="fa-dashcube">
                        <div className="circle">  </div>
                </div>
                <span className="tittle">Today</span>

                <input type="text" className={searchInputClasses.join(``)} placeholder="search"/>
            <div onClick={this.showSearch.bind(this)} className="fa fa-search icon"></div>
            </div>
                </div>
            </div>
        )
    }
}
