import React, { Component } from 'react';
import Nav from '../common/nav/nav'
import Head from './header/index'
import Logos from './logoList'
import HowItWorks from './howitWorks'
import Footer from '../common/footer/index'
class Home extends Component {
    render() { 
        return ( 
            <div>
                <Nav/>
                <Head/>
                <Logos/>
                <HowItWorks/>
                <Footer/>
            </div>
         );
    }
}
 
export default Home;