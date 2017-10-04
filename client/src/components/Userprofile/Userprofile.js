import React from "react";
import Col from "../Col";
import Row from "../Row";
import Container from "../Container";
import "./Userprofile.css";

const Userprofile = props =>
 
    <Row>

           <div className="col-md-4">
          	<div className="biopic">
            <img src={props.image} alt="User pic"/>              </div>
             </div> 

             <div className="col-md-8">
          <Row>
                <div className="col-md-12">
                <div className="head">{props.name}</div>
         		<div className="activity">{props.activity}</div>
              	<div className="subhead">{props.zipcode}</div>
      			</div>
          </Row>
      			
      		<Row>		
      		<div className="col-md-12">
                      <div className="userbio"> 
                    {props.bio}
                      </div>
             </div>
            </Row>

    		 <button 
        	type="submit"
         	className="btn btn-default userbtn"
    	 	onClick={props.onclick}>send email</button>      
    </div> 

    </Row>;


export default Userprofile;

      <button onClick={this.sendemail}>send mail</button>
