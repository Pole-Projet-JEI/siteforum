import React from "react";
import "./modal.css";
import { useState } from "react";
import SocialMedia from "../socialmediaBox/SocialMedia";
import Close from "@mui/icons-material/Close";
import speaker from './speaker1.png';

function Modal(props) {
  
  const [modalState, setModalState] = useState(true);

  const toggleModalState = () => {
    setModalState(false);
    document.body.style='overflow:auto;';
  }
  
  return (
    
    <div className={`modalBackground modalShowing-${modalState}`}>

        <div className="modalInner">

          <div className="modalImage">
            <img
              src={speaker}
              alt="modal pic"
            />
          </div>

          <div className="content">
            

            <div className="intro">
              
              <div className="text">
         
                <div className="title_close">
                  <h2>{props.name}</h2>
                  <Close onClick={ toggleModalState } style={{color:"black",marginTop:"-45px",cursor:"pointer"}}/>
                </div>
                
                <p>{props.description}</p>
                
              </div>

            </div>
            <div className="socials">
              <SocialMedia color="#00C1C1" size="40px" />
              
            </div>

          </div>
        </div>
      </div>
  );
}

export default Modal;