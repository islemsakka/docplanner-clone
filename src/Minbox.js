import React, { Component } from 'react';
const logo=[{src:'https://www.docplanner.com/img/flag.png', alt:'log1',titre:'Leader in 10 countries',text:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},{src:'https://www.docplanner.com/img/patients.png', alt:'log3',titre:'30 million unique patients',text:'visit us every month'}]
const logo2=[{src:'https://www.docplanner.com/img/visits.png', alt:'log2',titre:'1.5 million appointments',text:'booked last month'},{src:'https://www.docplanner.com/img/doctors.png', alt:'log4',titre:'2 million active doctors',text:'trust in our solutions'}];
class Minbox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='style-min-box'>
         <div className='min1'>{logo.map((e,i)=><div className='style-min'><img  src={e.src} alt={e.alt}/> <h3>{e.titre}</h3><p className='tx'>{e.text}</p></div>) }</div>  
         <div className='min2'> {logo2.map((e,i)=><div className='style-min'><img src={e.src} alt={e.alt}/> <h3>{e.titre}</h3><p className='tx'>{e.text}</p></div>) } </div>
        </div>

         );
    }
}
 
export default Minbox;