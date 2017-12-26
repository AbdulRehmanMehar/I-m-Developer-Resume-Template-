import React from 'react';

//importing Images
import p1img from '../assets/img/portfolio/cv.png';
import p2img from '../assets/img/portfolio/carefordcorp.png';

class Portfolio extends React.Component{
  render(){
    let p1 = { backgroundImage: 'url(' + p1img + ')', };
    let p2 = {backgroundImage:'url(' + p2img + ')',};
    return(
      <section id="portfolio">
        <div className="container">
          <h1>Portfolio</h1>
          <div className="row">

            <div className="col-md-6 col-xs-12 mt-4">
              <div className="portfolio-wrapper text-visible">
                <div className="portfolio-img" style={p1}></div>
                <div className="portfolio-text">
                  <h6>I'm Developer</h6>
                  <span>A Simple , Responsive &amp; Beautiful Resume in React-js</span><br/>
                  <a href="">View Here</a>
                </div>
              </div>
            </div>{/* Portfolio 1 Ends... */}
            
            <div className="col-md-6 col-xs-12 mt-4">
              <div className="portfolio-wrapper text-visible">
                <div className="portfolio-img" style={p2}></div>
                <div className="portfolio-text">
                  <h6>Carefordcorp</h6>
                  <span>A simple eCommerce Store with C.O.D in PHP</span><br />
                  <a href="https://carefordcorp.com" target="_blank" rel="noopener noreferrer">View Here</a>
                </div>
              </div>
            </div>{/* Portfolio 2 Ends... */}

          </div>{/* Row Ends... */}

          <h5 className="mt-4">View All ? <a href="">Click Here</a> </h5>

        </div>
      </section>
    )
  }
}
export default Portfolio;