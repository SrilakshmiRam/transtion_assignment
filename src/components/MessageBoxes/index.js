import { FaRegComments } from "react-icons/fa";

import './index.css'

const MessageBoxes=()=>{
    return(
        <div className='cbs-list'>
        <div className="chatbox">
          <p className="cb-text">CB</p>
          <p className="cb-name">Cheyenne Bergson</p>
        </div>
        <div className="chatbox">
          <p className="cb-text">CB</p>
          <p className="cb-name">Jonathan Higgins</p>
        </div>
        <div className="chatbox">
        <p className="cb-text">CB</p>
        <p className="cb-name">Capt. Trunk</p>
      </div>
      <div className="chatbox">
        <p className="cb-text">CB</p>
        <p className="cb-name">Hannibal Smi..</p>
      </div>
      <div className="chatbox">
        <p className="cb-text">CB</p>
        <p className="cb-name">Capt. Trunk</p>
      </div>
      <div className="chatbox">
        <p className="cb-text">CB</p>
        <p className="cb-name">Hannibal Smi.. <span className='count'>2</span></p>
      </div>
      <div className="chatbox-active">
        <FaRegComments className="messaging"/>
        <p className="text-white">Messaging</p>
      </div>
    </div>
    )
}

export default MessageBoxes