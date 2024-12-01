import { SlEnvolope } from "react-icons/sl";
import { FiCopy } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

import './index.css'

const GreetingTemplate=()=>{
    return(
        <div className='template-container'>
            <div className='template-header'>
                <h1 className="templte-title">Ask Catura</h1>
                <div className="dropdown-container">
                    <SlEnvolope />
                    <select className="dropdown">
                        <option selected>Watsapp</option>
                    </select>
                </div>
                <div className="dropdown-container">
                    <SlEnvolope />
                    <select className="dropdown">
                        <option selected>Greetings</option>
                    </select>
                </div>
            </div>
            <div class="container">
                <p class="blurred-text">Lorem ipsum dolor sit amet consectetur. Et tincidunt
                Lorem ipsum dolor sit amet consectetur. Et tincidunt,Lorem ipsum dolor sit amet consectetur. Et tincidunt
                Lorem ipsum dolor sit amet consectetur. Et tincidunt.Lorem ipsum dolor sit amet consectetur. Et tincidunt.
                Lorem ipsum dolor sit amet consectetur.
                </p>
           <div class="overlay-text">
            <h1 className="greeting-title">Golden Template</h1>
            <div className="copy-preview-container">
                <button className="icons-container button-text">
                <FiCopy className="copy-icon" />
                <p>Copy to send</p>
                </button>
                <button className="icons-container button-text">
                    <FiEye className="eye-icon" />
                    <p>Preview</p>
               </button>
            </div>
           </div>
           <div className="type-conatiner">
              <input type="test" placeholder="Type a message..." className="input-send" />
              <button className="send-button"><IoSend/></button>
           </div>
        </div>
        </div>
    )
}


export default GreetingTemplate