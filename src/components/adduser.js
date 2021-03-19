import React from 'react'
import {Link} from 'react-router-dom'


const Adduser = () => {    
    return (
        <>


{/* Hello world */}



<div className="container">
    <h2>add user</h2>     
  <form>
  
  
  
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">name</label>
  
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">number</label>
      <input type="number" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
</>
    
    
    
    )
}
export default Adduser