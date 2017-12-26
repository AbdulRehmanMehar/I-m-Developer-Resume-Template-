import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


//Assets
import registerServiceWorker from './registerServiceWorker';
import './assets/css/index.css';
import './assets/css/animate.min.css';
import './assets/js/script.js';

class Main extends React.Component{
  render() {
    return(
      <div>
        <Header />
        <Navbar />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));



registerServiceWorker();
