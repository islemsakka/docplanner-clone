import React, { Component } from 'react';
import Minbox from './Minbox.js';
const txt='The world`s biggest healthcare platform'
const para='We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.'

class Greenbox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='green'>
           <div><h1>{txt}</h1>
            <p>{para}</p>
            <img className='style-logo-green'src='https://www.docplanner.com/img/logo.png' alt='logo'></img></div>
            <div><Minbox/> </div>
        </div> );
    }
}
 
export default Greenbox;