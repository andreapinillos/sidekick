import React from "react";
import Col from "../Col";
import "./EmailBtn.css"; 


// Using the datalist element we can create autofill suggestions based on the props.breeds array
const EmailBtn = props =>

<div className="container">
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Email me</button>
  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <Col size="md-6">
      <div classNmae="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" id="exampleModalLabel">Mailer</h2>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">

            <div className="form-group">
            <input
            type="text" id="to" placeholder="Enter E-mail ID where you want to send"
            />
          </div>
          <textarea
          id="content" 
          rows="5" 
          cols="40" 
          placeholder="Write what you want to send"
          /><br/>

          <button id="send_email" type="button" className="btn btn-primary">Send Email</button>
          <span id="message"/>


          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </Col>
  </div>
</div>
                







export default EmailBtn;
