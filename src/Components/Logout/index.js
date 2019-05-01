import React from "react";
import { message} from 'antd';
import fire from "../../config/firebaseConfig";
import { white } from "ansi-colors";

const logoutHandler = props => {
  fire
    .auth()
    .signOut()
    .then(() => {
      console.log('Sign-out successful.') 
        setTimeout(()=>{
        message.success('Sign-out successfully !');
        props.getPropsHistory.push("/login");
      },2000);      
        })
    .catch(error => {
      console.log('An error happened.') 
    });

};

const Logout = props => (
  <div>
    <a onClick={() => logoutHandler(props)} style={{ fontSize: '1.2vw',color:'white'}}>Sign Out</a>
  </div>
);

export default Logout;
