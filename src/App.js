import React,{Component} from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Logo from './Logo.js';
import Text from './Text.js';
import Bigbox from './Bigbox.js';
import Glogo from './Glogo.js';
import Greenbox from './Greenbox.js';
import Texte from './Texte.js';
import Boxcountry from './Boxcountry.js';
import Footer from './Footer';

const h=[{for:'For patients',src:'https://www.docplanner.com/img/screen-marketplace@2x.png',alt:'picture1',tt:'Find a doctor, book a visit and solve any health-related doubt',sel:["Choose country","argentina","australia","brezil"]},{for:'For doctors',src:'https://www.docplanner.com/img/screen-saas@2x.png',alt:'picture2',tt:'Save time managing visits and cut no-shows by half'}]
const txt=[{p:"We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."},{p:"We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    return (<div className="App">
    <Navbar />;
    <Logo />;
    <Text text={txt}/>
    <Bigbox contenu={h} coul={this.colbox}/>
    <Glogo />
    <Greenbox />
    <Texte/>
    <Boxcountry/>
    <Footer/>
   </div>  
   );
  }
}
 


export default App;
