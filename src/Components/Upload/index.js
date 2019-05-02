import React from 'react';
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate, message, Checkbox,
    Row, Col,
  } from 'antd';
  import fire from "../../config/firebaseConfig"
 

  const fileName = (e) =>{
    var storageRef = fire.storage().ref(); 
 
  var fileRef = storageRef.child('files/text_'+ Math.random().toString().substring(2, 6) +'.txt');
  // var file = new File([e.target.value],'image.txt', {
  //   type: "text/plain",
  // });
  var file = e.target.files[0];
  
  return new Promise((resolve, reject) => {
    fileRef.put(file)
    .then(function(snapshot) {
        console.log('Uploaded a blob or file!', snapshot);
        fileRef.getDownloadURL().then(function(url) {
            console.log('URL *****', url)
            resolve(url);
          }).catch(function(error) {
            // Handle any errors
          });
    }).catch((e) => {
        console.log('bhai kuch masla hai', e)
    });
})

  }
    

  
  
  
  class UploadButton extends React.Component {
    onChange = (info) => fileName(info)
        
    render() {
      
      return (
       
             
                 <span style={{color:"rgba(255, 255, 255, 0.65)"}} >

                  <input type='file' id='myFile' onChange={(e)=>fileName(e)} />
                  <span onClick={(e)=>console.log(e)}>Click to upload</span>
                 </span>
                
               
            
      );
    }
  }
  export default UploadButton;