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
                    backgroundColor:"blue",
                    display:'flex', 
                    flexDirection:"column",
                    alignItems:"center", 
                    justifyContent:"center",
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    backgroundImage:`linear-gradient(rgba(	0, 0, 165,0.3), rgba(	0, 0, 165,0.3)),url(https://i0.wp.com/arielle.com.au/wp-content/uploads/2017/09/guide-to-finding-meaningful-work.jpg)`}}>
                <h1 style={{color:"#fff", fontSize:40}}>Online Jobfair</h1>
                <div style={{width:"100%"}}>
                <Counter/>
                </div>
            </div>
         );
    }
}
 
export default Head;