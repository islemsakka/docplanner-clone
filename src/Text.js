import React, { Component } from 'react';
class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
  
    render() {
        return (<div className='style-text'>
           {this.props.text.map((el,i)=> <p className='style-paragraphe'>{el.p}</p>)}
        </div>
        );
    }
}
export default Text;