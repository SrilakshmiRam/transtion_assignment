import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { TiUserAddOutline } from "react-icons/ti";

import './index.css'


const AgentForm=()=>{
    return(
        <div className='agentdetails-conatiner'>
            <div className="profile-container">
               <h1 className="CB-header">CB</h1>
               <div className="name-location">
                  <h1 className="profile-name">Hannibal Smith <br/>
                  <span className="address">1 Market Street San Francisco, CA 94105</span></h1>
               </div>
            </div>
            <div className='customer-section-deatils'>
               <div className='sub-card'>
                <p className="customer-text">Customer ID</p>
                <p className="value-text">12345</p>
                <BsThreeDotsVertical />
               </div>
               <hr className="hr-rule" />
               <div className='sub-card'>
                <p className="customer-text">Email Address</p>
                <p className="value-text">rachel@sample.com</p>
                <BsThreeDotsVertical />
               </div>
               <hr className="hr-rule" />
               <div className='sub-card'>
                  <p className="customer-text">Phone Number</p>
                  <p className="value-text">8051298905</p>
                  <BsThreeDotsVertical />
               </div>
            </div>
            <button className="add-button-conatiner">
                  <CiCirclePlus className="add-icon"/>
                  <p>Add</p>
            </button>
            <div className='customer-section-deatils'>
               <div className='sub-card'>
                <p className="customer-text">Loyalty Tier</p>
                <p className="value-text">Silver</p>
                <BsThreeDotsVertical />
               </div>
               <hr className="hr-rule" />
               <div className='sub-card'>
                <p className="customer-text">Segment</p>
                <p className="value-text">Sleepy Customer</p>
                <BsThreeDotsVertical />
               </div>
            </div>
            <button className="add-button-conatiner">
                  <CiCirclePlus className="add-icon"/>
                  <p className="value-text">Add</p>
            </button>
            <div className='customer-section-deatils'>
               <div className='sub-card'>
                <p className="customer-text">Lifetime Value</p>
                <p className="value-text">$ 1M</p>
                <BsThreeDotsVertical />
               </div>
               <hr className="hr-rule" />
               <div className='sub-card'>
                <p className="customer-text">Propensity to Purchase</p>
                <p className="value-text">75%</p>
                <BsThreeDotsVertical />
               </div>
            </div>
            <button className="add-button-conatiner">
                  <CiCirclePlus className="add-icon"/>
                  <p className="value-text">Add</p>
            </button>
            <div className='customer-section-deatils'>
               <div className='sub-card'>
                <p className="customer-text">Engagement Score</p>
                <p className="value-text">80%</p>
                <BsThreeDotsVertical />
               </div>
            </div>
            <button className="add-button-conatiner">
                  <CiCirclePlus className="add-icon"/>
                  <p>Add</p>
            </button>
            <button className="agent-button">
                <TiUserAddOutline/>
                Assign other Agent</button>
            <button className="widget-button">Add New Widget</button>
        </div>
    )
}


export default AgentForm