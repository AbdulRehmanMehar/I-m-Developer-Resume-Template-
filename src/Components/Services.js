import React from 'react';

class Services extends React.Component{
  render(){
    return(
        <section id="services">
            <div className="container">
                <h1>Services</h1>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="services">
                            <div className="service-wrap">    
                                <i className="fa fa-desktop"></i>
                                <h3>Creative &amp; Responsive</h3>
                                <p>I'll design you Creative &amp; Responsive website.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="services">
                            <div className="service-wrap">
                                <i className="fa fa-newspaper-o"></i>                        
                                <h3>Blog or SPA</h3>
                                <p>I'll develop you blog or Single Page App.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="services">
                            <div className="service-wrap">
                                <i className="fa fa-shopping-cart"></i>                            
                                <h3>eCommerce</h3>
                                <p>Need eCommerce Store ? I'll build it!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="services">
                            <div className="service-wrap">
                                <i className="fa fa-life-ring"></i>
                                <h3>Support</h3>
                                <p>Having Problems with website or Need Update ? I'll fix it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
export default Services;