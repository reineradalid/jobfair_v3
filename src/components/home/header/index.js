import React, { Component } from 'react'
import Counter from './counter/index'

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{
                    minHeight:"65vh", 
                    display:'flex', 
                    flexDirection:"column",
                    alignItems:"center", 
                    justifyContent:"center",
                     }}>
                <h1 style={{color:"#fff", fontSize:40}}>Online Jobfair</h1>
                <div style={{width:"100%"}}>
                <Counter/>
                </div>
            </div>
         );
    }
}
 
export default Head;
