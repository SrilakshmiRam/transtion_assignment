import { LuUsers } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";
import { AiOutlineFileSearch } from "react-icons/ai";
import { LuNetwork } from "react-icons/lu";
import { RiFileCheckLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { FaWrench } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { GoGift } from "react-icons/go"; 

import './index.css'

const Sidebar = () => {
    return (
      <div className="sidebar">
        <img src='https://res.cloudinary.com/ddiyemmt3/image/upload/v1733019335/riskhawk-logo_1_l65kjc.png'
      alt="logo" className="image-logo" />
        <ul className='categories-list'>
          <li className="icon-container text">
              <AiOutlineFileSearch className='icon' /> 
              Internal Audit</li>
          <li className="icon-container text">
          <RiFileCheckLine className='icon' /> 
               UAT Testing</li>
          <li className="icon-container text"><FaLink className="icon" /> Intract</li>
          <li className="icon-container text active-text"><LuUsers className='active-icon icon' />
                Queue</li>
          <li className="icon-container text"><LuNetwork className='icon' /> 
               WorkFlow</li>
          <li className="icon-container text"><img src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733033243/user_flyvrt.png"
               alt="icon" className='icon' /> 
                Admin</li>
          <li className="icon-container text"><FiBox className='icon' />
                Asset</li>
          <li className="icon-container text"><img src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733033618/users_g7xosh.png"
               alt="icon" className='icon' />
                Parent</li>
          <li className="icon-container text"> <p className='circle'>1</p> Option One</li>
          <li className="icon-container text"><p className='circle'>2</p> Option Two</li>
          <li className="icon-container text"><FaWrench className='icon' />
                All Accessories</li>
          <li className="icon-container text">
              <AiOutlineFileSearch className='icon' /> 
              Internal Audit</li>
          <li className="icon-container text"><GiStarsStack className='icon' />
                Decorating</li>
          <li className="icon-container text"><GoGift className='icon' />
                Presenting</li>
        
        </ul>
      </div>
    );
  };


  export default Sidebar