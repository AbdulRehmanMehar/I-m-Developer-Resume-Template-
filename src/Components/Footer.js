import React from 'react';

class Footer extends React.Component{
  render(){
    return(
      <footer className="footer bg-dark">
        <div className="container">
          <ul className="icons list-unstyled">
            <li><a href="https://twitter.com/wdeveloper6925" className="icon circle fa fa-twitter" target="_blank" rel="noopener noreferrer"><span className="sr-only">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/webdeveloper6925" className="icon circle fa fa-facebook" target="_blank" rel="noopener noreferrer"><span className="sr-only">Facebook</span></a></li>
            <li><a href="https://plus.google.com/107837326600812690960" className="icon circle fa fa-google-plus" target="_blank" rel="noopener noreferrer"><span className="sr-only">Google +</span></a></li>
            <li><a href="https://www.instagram.com/webdeveloper6925/" className="icon circle fa fa-instagram" target="_blank" rel="noopener noreferrer"><span className="sr-only">Instagram</span></a></li>
            <li><a href="https://codepen.io/abdul_rehman/" className="icon circle fa fa-codepen" target="_blank" rel="noopener noreferrer"><span className="sr-only">Codepen</span></a></li>
          </ul>
          <h4>&copy; 2017 . All rights reserved.</h4>
        </div>
      </footer>
    )
  }
}

export default Footer;