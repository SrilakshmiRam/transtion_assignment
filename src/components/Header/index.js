import { AiOutlineHome } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

import './index.css'

const Header = () => {
    return (
      <div className="header">
        <h1 className='header-title'>Chat / Feed chat</h1>
        <AiOutlineHome className="home" />
        <p className="name-text">Process Owner HOD</p>
        <div className="admin-profile">
            <span className="admin">Admin</span>
            <p className="name">Palak Bansal</p>
            <img src='https://res.cloudinary.com/ddiyemmt3/image/upload/v1733036413/Ellipse_3855_swlzxg.png'
            alt="avatar" className="avatar" />
        </div>
        <CiSettings/>
        <div className="logout-container">
            <IoIosLogOut/>
            <span className="logout">Logout</span> 
        </div>
      </div>
    );
  };


  export default Header