import React, { Component } from 'react';
class CopyRight extends Component {
    render() { 
        return ( 
            <div style={{minHeight:"5vh", display:'flex', alignItems:"center", justifyContent:"center",backgroundColor:'#000'}}>
                <label style={{color:"#fff"}}>All right reserves © {(new Date().getFullYear())}</label>
            </div>
         );
    }
}
export default CopyRight;