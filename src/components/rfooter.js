import React from 'react'
import {Link} from 'react-router-dom'



const Rfooter = () => {
    return (
       
       
        <div>




          <>
{/* Hello world */}
<div>
  {/*begin::Footer*/}
  <div className="footer py-4 d-flex flex-lg-column" style={{ left:0, bottom:0, width:'100%' }} id="kt_footer">
    {/*begin::Container*/}
    <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
      {/*begin::Copyright*/}
      <div className="text-dark order-2 order-md-1">
        <span className="text-muted fw-bold me-2">2021©</span>
        <a href="#" target="_blank" className="text-gray-800 text-hover-primary">applicatin</a>
      </div>
      {/*end::Copyright*/}
      {/*begin::Nav*/}
      <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
        <li className="menu-item">
          <Link to="/about" target="_blank" className="menu-link ps-0 pe-2">About</Link>
        </li>
        <li className="menu-item">
          <Link to="#" target="_blank" className="menu-link pe-0 pe-2">Contact</Link>
        </li>
      </ul>
      {/*end::Nav*/}
    </div>
    {/*end::Container*/}
  </div>
  {/*end::Footer*/}
</div>
</>  
        </div>
    )
}

export default Rfooter
