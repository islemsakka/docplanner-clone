import React, { Component } from 'react';
const lo=['ZnanyLeakarz','Doctoralia','MioDottore','DoctorTakvimi','ZnamiLeaker']
const tst='We are a global company with local culture'
const doclo={src:'https://www.docplanner.com/img/sygnet.png',alt:'pic'}
const ref=['https://www.znanylekarz.pl/?_ga=2.111778244.1391326249.1577358843-334193317.1575386113','https://www.doctoralia.es/','https://www.miodottore.it/?_ga=2.187913064.1391326249.1577358843-334193317.1575386113','https://www.doktortakvimi.com/?_ga=2.187913064.1391326249.1577358843-334193317.1575386113','https://www.znamylekar.cz/']

class Glogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hover:false,
           style:{color:'#8a8a74'},
         }
    }
    Mousein=(event)=>{
        var el = event.target
        el.style.color='#00bfa5'
  
    }
  Mouseout = (event) => {
        var el = event.target
        el.style.color = '#8a8a74'
        }
   render() { 
        return (<div className='globlogo'>
            <h3 className='tst'>{tst}</h3>
<div className='menu-logo'>{lo.map((e,i)=><div className='style-globlog' ><img className='doclo' src={doclo.src} alt={doclo.alt}/><a href={ref[i]} key={i} style={this.state.style}  onMouseOver={this.Mousein} onMouseLeave={this.Mouseout} >{e}</a></div>)}</div>
        </div>  );
    }
}
 
export default Glogo ;