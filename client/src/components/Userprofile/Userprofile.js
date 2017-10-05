import React from "react";
import Col from "../Col";
import Row from "../Row";
import Container from "../Container";
import "./Userprofile.css";

const Userprofile = props =>
 
 <div className="userprofilecont">
    <Row>
           <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          	<div className="biopic">
            <img className="userpictures" src={props.image} alt="User pic"/>              </div>
             </div> 

             <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <Row>
                <div className="col-md-12">
                <div className="userhead">{props.name}</div>
         		<div className="useractivity">{props.activity}</div>
              	<div className="usersubhead">{props.zipcode}</div>
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
    </Row>
    <hr />
    <Row>
      <div className="">
        <button className="btn gobackbtn">
          <a href="/" className="gobacktag">Go Back</a>
        </button>
      </div>    
    </Row>
</div>;


export default Userprofile;

      <button onClick={this.sendemail}>send mail</button>
