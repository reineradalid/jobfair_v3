import React, { Component } from 'react';


class CopyRight extends Component {
    render() { 
        return ( 
            <div style={{minHeight:"10vh"}}>
                <label>All right reserves © {(new Date().getFullYear())} </label>
            </div>
         );
    }
}
 
export default CopyRight;