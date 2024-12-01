import React, { useState } from "react";

import { CiCircleRemove } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";


import "./index.css";

const ChatWindow = () => {
  return(
    <div>
      <ul className="tabs-container">
        <li className="li-item tab-active">Conversion</li>
        <li className="li-item">Address Update <CiCircleRemove/> </li>
        <li className="li-item">Fee Reversal <CiCircleRemove/> </li>
        <li className="li-item">Reta</li>
        <li className="li-item escalate">Escalate</li>
      </ul>
      <div className="box">
      <ul className="tabs">
        <li className="list-item tab-active"><button className="button-tabs">Conversion</button></li>
        <li className="list-item"><button className="button-tabs">Attachment</button></li>
      </ul>
      <div className="text-container">
        <h1 className="CB-header">CB</h1>
        <div className="text-profile-status">
        <div className="name-search-updated">
          <h1 className="profile-name">Rachel Adams<br/><span className="address">9:08 PM.Received By WhatsApp </span></h1>
          <BsThreeDots/>
        </div>
        <p className="chat">Lorem ipsum dolor sit amet consectetur. 
          Et tincidunt odio vivamus ac aliquam. 
          Placerat maecenas quis ut elementum praesent imperdiet. 
          Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. 
          Molestie nam morbi id arcu volutpat arcu.</p>
        </div>
      </div>
      <div className="checkbox-containers">
        <div className="checkbox-input">
          <input type="checkbox" checked />
          <label>SMS</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" />
          <label>Whatsapp</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" checked />
          <label>Email</label>
        </div>
      </div>
      <div className="type-conatiner">
              <input type="test" placeholder="Type a message..." className="input-send" />
              <button className="send-button"><IoSend/></button>
           </div>
      </div>
    </div>
  )
};

export default ChatWindow;





