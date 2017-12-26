import React from 'react';
import carefordcorp_ceo from '../assets/img/clients/carefordcorp.jpg';

class Portfolio extends React.Component{
  render(){
    //let linear_grad = 'linear - gradient(to bottom, rgba(' + 0 + ', ' + 0 + ', ' + 0 + ', ' + 0.2 + '), rgba(' + 0 + ', ' + 0 + ', ' + 0 + ', ' + 0.2 +'))';
    let carefordcorp = {backgroundImage: 'url(' + carefordcorp_ceo + ')'};
    return(
      <section id="testimonials">
        <h1>Testimonials</h1>
        <div id="testimonialsIndicators" className="testimonial carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#testimonialsIndicators" data-slide-to="0" className='active'></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item testimonial-item active">
              <div className="col-md-6 offset-md-3">
                <div className="testimonial-image" style={carefordcorp}></div>
                <div className="text-wrapper">
                  <h6>Mian Asif <small>CEO Carefordcorp</small></h6>
                  <p>I was looking for someone to build an eCommerce Store for my bussiness.Then I met Abdul Rehman.I hired him and asked him to build the website.He started working on it and built me an amazing eCommerce Store in 20 days.I really loved the website built by him.I also suggest others to hire him as a web developer.</p>
                  <p><a href="https://carefordcorp.com" target="_blank" rel="noopener noreferrer">Checkout the Website</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Portfolio;