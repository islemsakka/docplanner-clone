import React, { Component } from 'react';
const pays=[{src:'https://www.docplanner.com/images/warsaw.png',alt:'warsaw'},{src:'https://www.docplanner.com/images/barcelona.png',alt:'barcelona'},{src:'https://www.docplanner.com/images/istanbul.png',alt:'istanbul'},
{src:'https://www.docplanner.com/images/rome.png',alt:'roma'},{src:'https://www.docplanner.com/images/mexico-city.png',alt:'mexico'},{src:'https://www.docplanner.com/images/curitiba.png',alt:'curtuba'}]
class Boxcountry extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            style:{boxShadow:'0px 0px 0px'}
         }
    }
    
    render() { 
        return (<div className='img-country'>
            {pays.map((e,i)=><div className='box-img' ><img style={{borderRadius:'10px'}}src={e.src} alt={e.alt}/><div className='bout-titl'><h4>{e.alt}</h4><button>See openings</button></div></div>)}
        </div>  );
    }
}
 
export default Boxcountry;
