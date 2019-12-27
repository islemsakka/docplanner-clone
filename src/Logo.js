import React, { Component } from 'react';



class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className='title'>
            <img src='https://www.docplanner.com/img/sygnet.png' alt='logo'/>
            <h1>Making the healthcare experience more human</h1>
            </div>
          );
    }
}
 
export default Logo;