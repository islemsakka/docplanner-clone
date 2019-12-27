import React, { Component } from 'react';

const nav = [{ val: 'About us', href: '#' }, { val: 'Career', href: '#' }, {
    val: 'Departement', href: '#', sublist: ['Marketing & PR',

        'Customer,Success & Sales', 'IT, Product,Design & UX', ' Finance & Administration', 'HR & more']
}]
const img = { src: 'https://www.docplanner.com/img/logo-default-group-en.svg?v=1', alt: 'docplanner' }
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover:false
        }
    }
 dropdown=()=>{
     this.setState ({
       hover:!this.state.hover
       })
 }   
    render() {
        return (<div className='nv'>
            <ul className='container'>
                <img className='stye-image' src={img.src} alt={img.alt} />
                <div className='menu'>{nav.map((el, i) =><li key={i}><a  onMouseOver={el.val==='Departement'&& this.dropdown} href={el.href}>{el.val}</a>
                    <ul className={(this.state.hover && el.val==='Departement')?'display':'hidd'} onMouseLeave={this.state.hover&&(()=>{this.setState({hover:!this.state.hover})})} >
                        {el.sublist && el.sublist.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                </li> )}</div>

            </ul>

        </div>
        );
    }
}

export default Navbar;