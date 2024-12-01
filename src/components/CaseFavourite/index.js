import { TiPinOutline } from "react-icons/ti";
import { CiImageOn } from "react-icons/ci";

import './index.css'

const CaseFavourite=()=>{
    return(
        <div className="favourite-container">
            <div className="pin-text">
                <TiPinOutline className="pin-icon"/>
                <h1 className="favourite-text">Case Favorite</h1>
            </div>
            <p className="fav-text">Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
            <div className="image-photo">
                <CiImageOn className="image-icon"/>
                <p className="photo-text">Photo</p>
            </div>
            <p className="fav-text">Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
        </div>
    )
}

export default CaseFavourite