import React from "react";


function Contact(){
    return ( 
    <>
    {/* <h1>contact</h1> */}
<div className="main-form">
    <div className="form">
      <form action="submited">
      <h3>Contact Me!</h3>
        <label >Name :</label>
       <input type="text" required / >
       <label >E-mail :</label>
         <input type="e-mail" required/>
         <label >Ph-Number:</label>
         <input type="number" required />
<label >Message</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
     <input className="btn-form" type="submit"/>
    </form>
  </div>
</div>
    </>)
}

export default Contact;