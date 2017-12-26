import React from 'react';
import profile from '../assets/img/profile.jpg';

class Header extends React.Component{
  render(){
    let profileimg = {backgroundImage:'url('+ profile +')'};
    return(
      <header id="head" className="background">
        
        <div className='background' style={profileimg}></div>
        <h1><span className="typewrite" data-period="2000" data-type='["My name is Abdul Rehman", "I am Web Developer" , "I have 2 year experience in Coding"]'></span></h1>
        <h3><a href="https://docs.google.com/document/d/1KztupWjRjBw5G9NZk0JStQiqVzdZKyJtw1k-EtAI09Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV</a> | 
        <a href="https://docs.google.com/document/export?format=docx&id=1KztupWjRjBw5G9NZk0JStQiqVzdZKyJtw1k-EtAI09Q&token=AC4w5VhUJgZGOYDjsneVS9Afc61IxjokXA%3A1513775694232&includes_info_params=true" target="_blank" rel="noopener noreferrer">Download CV</a></h3>
        <a href="#about"><span className="arrow-down"></span></a>
      </header>
    )
  };
}
export default Header;