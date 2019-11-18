import React, { Component } from 'react'
import Counter from './counter/index'
import {Input} from 'antd'

const { Search } = Input;
class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{
                    minHeight:"75vh", 
                    display:'flex', 
                    flexDirection:"column",
                    alignItems:"center", 
                    justifyContent:"center",
                    paddingTop:"25vh",
                     }}>
                <h1 style={{color:"#fff", fontSize:40}}>Online Jobfair</h1>
                <div style={{padding:10, backgroundColor:"#f26725", borderRadius:5}}>
                <Search
                    size="large"
                    placeholder="Search (e.g job title,description,company name,location)"
                    onSearch={value => console.log(value)}
                    style={{ width: 500 }}
                    />
                </div>
                <div style={{width:"100%"}}>
                <Counter/>
                </div>
            </div>
         );
    }
}
 
export default Head;
