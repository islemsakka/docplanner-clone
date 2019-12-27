import React, { Component } from 'react';
//const colbox=[{couleur:'#00ccb1'},{couleur:'rgb(49, 131, 229)'}]
//const im=[{src:'https://www.docplanner.com/img/screen-marketplace@2x.png'},{src:'https://www.docplanner.com/img/screen-saas@2x.png'}]
//const h=[{for:'For patients',src:'https://www.docplanner.com/img/screen-marketplace@2x.png',tt:'Find a doctor, book a visit and solve any health-related doubt',sel:["argentina","australia","brezil"]},{for:'For doctors',src:'https://www.docplanner.com/img/screen-saas@2x.png',tt:'Save time managing visits and cut no-shows by half'}]
class Bigbox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    //colbox.map((e,i)=>e.couleur)
    render() {
        return (<div className='style-bigbox' >{this.props.contenu.map((el, i) => <div key={i} style={(i === 0) ? { backgroundColor: '#00ccb1' } : { backgroundColor: 'rgb(49, 131, 229)' }} className='style-big1'><span className='span'>{el.for}</span>
            <h2>{el.tt}</h2>
        {(i === 0) && (<select>{el.sel.map((t,x)=><option > {t}</option>)}</select>)}
            <img className='style-img' style={(i === 0) ? { marginLeft: '20%' } : { marginLeft:'50%' }} src={el.src} alt={el.alt} />
        </div>)}
        </div>


        );
    }
}

export default Bigbox;