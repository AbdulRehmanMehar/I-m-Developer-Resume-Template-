import React from 'react';
import $ from 'jquery';

class Portfolio extends React.Component{
  render(){
    //For Styling Purposes
    $(document).ready(function(){
      $(function () {

        $('.field-control').each(function () {
          changeState($(this));
        });

        $('.field-control').on('focusout', function () {
          changeState($(this));
        });

        function changeState($fieldControl) {
          if ($fieldControl.val().length > 0) {
            $fieldControl.addClass('has-value');
          }
          else {
            $fieldControl.removeClass('has-value');
          }
        }
      });
    });
    return(
      <section id="contact">
        <h1>Contact</h1>
        <form action="#">
          <div className="inp-group">
            <input type="text" className="field-control" id="name" />
            <label>Name</label>
          </div>

          <div className="inp-group">
            <input type="email" className="field-control" id="email" />
            <label>Email</label>
          </div>

          <div className="inp-group">
            <textarea className="field-control" id="message"></textarea>
            <label>Message</label>
          </div>
          <button>Submit</button>
        </form>
      </section>
    )
  }
}
export default Portfolio;