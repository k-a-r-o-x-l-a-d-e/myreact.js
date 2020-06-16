import React, { useState } from 'react';

function Footer(){

  const [percentage, setPercentage] = useState(0);

  const footerStyle={
    // position: "fixed",
    bottom: "0",
    height: "3em",
    border: "1px solid",
    width:" 100%",
    display: "flex",
    justifyContent:"center",
  }
   
    var getPercentage=()=>{
      fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=alice&sname=john`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "b8c9e70753msh5918b828c8a46b1p13241ajsn6701be1cb400"
      }
      })
      .then(response => response.json())
      .then(response => {
        this.setPercentage(response.percentage)
      })
      .catch(err => {
        console.log(err);
      });

    }
    

    return(
      <footer style={footerStyle}>
       {getPercentage}
         <button onClick={() => setPercentage(getPercentage)}>
         <p>You clicked {percentage} times</p>
         </button>
       
      
      </footer>
     
    )
}
export default Footer