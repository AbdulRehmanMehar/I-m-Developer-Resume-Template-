import React from 'react';
import $ from 'jquery';



class Navbar extends React.Component{
  render(){
    
    $(document).ready(function () {
      //Smooth Scroll
      $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        let target = this.hash;
        let $target = $(target);
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
          window.location.hash = target;
        });
      });

      //Dynamically Adding STICKY-TOP
      let menu = $('#mynav');
      let origOffsetY = menu.offset().top;
      function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
          $('#mynav').addClass('sticky-top');
        } else {
          $('#mynav').removeClass('sticky-top');
        }
      }
      document.onscroll = scroll;
    });


    

    return(
      <nav className="navbar navbar-expand-lg navbar-dark" id="mynav">
        <div className='container-fluid'>
          <a className="navbar-brand" href="#head">I'm Developer</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


export default Navbar;