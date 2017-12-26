import React from 'react';

class Skills extends React.Component{
  render(){
    let fend = { width: 90 + '%' };
    let lamp = { width: 80 + '%' };
    let mern = { width: 60 + '%' };
    let seowp = { width: 45 + '%' };
    let gdps = { width: 30 + '%' };

    return(
      <section id="skills">
        <h1>My Professional Skills</h1>
        <div className="container">

          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={fend}></div>
            <span className="progress-type">FRONT-END (HTML,SCSS,ES6)</span>
            <span className="progress-completed">90%</span>
          </div>

          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={lamp}></div>
            <span className="progress-type">BACK-END (LAMP)</span>
            <span className="progress-completed">80%</span>
          </div>

          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={mern}></div>
            <span className="progress-type">BACK-END (MERN)</span>
            <span className="progress-completed">60%</span>
          </div>

          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={seowp}></div>
            <span className="progress-type">Seo & Wordpress</span>
            <span className="progress-completed">45%</span>
          </div>

          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={gdps}></div>
            <span className="progress-type">Graphic Design</span>
            <span className="progress-completed">30%</span>
          </div>

        </div>
      </section>
    )
  }
}

export default Skills;