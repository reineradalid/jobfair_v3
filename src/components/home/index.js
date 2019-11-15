import React, { Component } from 'react';
import Nav from '../common/nav/nav'
import Head from './header/index'
import Logos from './logoList'
import HowItWorks from './howitWorks'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Nav/>
                <Head/>
                <Logos/>
                <HowItWorks/>
            </div>
         );
    }
}
 
export default Home;