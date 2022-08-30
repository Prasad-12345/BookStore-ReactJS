import React from "react";
import "./mainPage.css";
import image from "../images/2766594.png";
import { useState } from "react";
import Signup from "../signUp/signUp";
import SignUp from "../signUp/signUp";
import Login from "../login/login";
function MainPage() {
  const [listenToClick, setListenToClick] = useState(true);
  const listenToLogin = () => {
    setListenToClick(false);
  };

  const listenToSignup = () => {
    setListenToClick(true);
  };
  return (
    <div className="parentContainer">
      <div className="mainContainer2">
        <div className="leftSide">
          <div className="mainImage">
            <img src={image} alt="" className="image" />
            <div className="rightText">Online Book Shopping</div>
          </div>
        </div>
        <div className="rightSide">
          <div className="topBtn">
            <div className="login" onClick={listenToLogin} style={{fontWeight:700}}>
              LOGIN
            </div>
            <div className="signUp" onClick={listenToSignup} style={{fontWeight:700}}>
              SIGNUP
            </div>
          </div>
          <div className="components">
            <div className="comp">{listenToClick ? <SignUp /> : <Login />}</div>
          </div>
        </div>
      </div>
    </div>
    // <div className="parentContainer">
    //   <div className="mainContainer">
    //         <div className="leftSide">
    //             <div className="mainImage">
    //                 <img src={image} alt="" className="image" />
    //                 <h3>Online Book Shopping</h3>
    //             </div>
    //         </div>
    //         <div className="rightSide">
    //             <div className="topBtn">
    //                 <div className="login" onClick={listenToLogin}>
    //                 LOGIN
    //                 </div>
    //                 <div className="signUp" onClick={listenToSignup}>
    //                 SIGNUP
    //                 </div>
    //             </div>
    //             <div className="components">
    //                 {listenToClick ? <SignUp /> : <Login />}
    //             </div>
    //         </div>
    //   </div>
    // </div>
  );
}

export default MainPage;
