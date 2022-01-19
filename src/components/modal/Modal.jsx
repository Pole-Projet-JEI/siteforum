import React from "react";
import "./modal.css";
import { useState } from "react";
import SocialMedia from "../socialmediaBox/SocialMedia";
import Close from "@mui/icons-material/Close";


function Modal() {
  
  const [modalState, setModalState] = useState(true);

  const toggleModalState = () => {
    setModalState(!modalState);
  }
  return (
    
    <div className={`modalBackground modalShowing-${modalState}`}>

        <div className="modalInner">

          <div className="modalImage">
            <img
              src="https://images.unsplash.com/photo-1586931775007-ad3c3913f216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
              alt="modal pic"
            />
          </div>

          <div className="content">
            

            <div className="intro">
              
              <div className="text">
         
                <div className="title_close">
                  <h2>fouleeen</h2>
                  <Close onClick={ toggleModalState } style={{color:"black",marginTop:"-45px",cursor:"pointer"}}/>
                </div>
                
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem possimus consequatur a tenetur quisquam placeat tempora fugiat facilis non explicabo.</p>
                
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