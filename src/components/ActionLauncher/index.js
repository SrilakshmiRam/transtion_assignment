import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

import './index.css'

const ActionLauncher=()=>{
    return(
        <div className="actionlauncher-container">
            <h1 className="action-header">ActionLauncher</h1>
            <div className='input-search-container'>
               <CiSearch/>
               <input type="search" placeholder="Search actions..." 
               className="input-text" />
            </div>
            <ul className="actions">
               <li className="action-item">
                   <button className="button-text action-active">
                    <CiCirclePlus className="plus-icon" />
                    Add Action
                   </button>
               </li>
               <li className="action-item">
                   <button className="button-text">
                   Fee Reversal
                   </button>
               </li>
               <li className="action-item">
                   <button className="button-text">
                   Retail Onboarding
                   </button>
               </li>
               <li className="action-item">
                   <button className="button-text">
                   Address Update
                   </button>
               </li>
            </ul>
        </div>
    )
}


export default ActionLauncher