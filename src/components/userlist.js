import React from 'react'
const Userlist = () => {
   
   
    return (
        <div className="container">
        <>
{/* Hello world */}

<h2>user list</h2>



<>
{/* Hello world */}
<div className="input-group">
  <div className="form-outline">
    <input type="search" id="form1" className="form-control" />
    <label className="form-label" htmlFor="form1">Search</label>
  </div>
  <button type="button" className="btn btn-sm btn-primary">
    <i className="fas fa-search" />
  </button>
</div>
</>
<table className="table table-striped gy-7 gs-7">
  <thead>
    <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start date</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td>$320,800</td>
      <td><button className="btn btn-secondary btn-sm">add user</button> </td>
      <td><button className="btn btn-secondary btn-sm">delete user</button> </td>
    </tr>
    <tr>
      <td>Garrett Winters</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>63</td>
      <td>2011/07/25</td>
      <td>$170,750</td>
      
      <td><button className="btn btn-secondary btn-sm">add user</button> </td>
      <td><button className="btn btn-secondary btn-sm">delete user</button> </td>
    </tr>
    <tr>
      <td>Garrett Winters</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>63</td>
      <td>2011/07/25</td>
      <td>$170,750</td>

      <td><button className="btn btn-secondary btn-sm">add user</button> </td>
      <td><button className="btn btn-secondary btn-sm">delete user</button> </td>
    </tr>
    <tr>
      <td>Garrett Winters</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>63</td>
      <td>2011/07/25</td>
      <td>$170,750</td>

      <td><button className="btn btn-secondary btn-sm">add user</button> </td>
      <td><button className="btn btn-secondary btn-sm">delete user</button> </td>
    </tr> <tr>
      <td>Garrett Winters</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>63</td>
      <td>2011/07/25</td>
      <td>$170,750</td>
      <td><button className="btn btn-secondary btn-sm">add user</button> </td>
      <td><button className="btn btn-secondary btn-sm">delete user</button> </td>
    </tr>
  </tbody>
</table>



<ul class="pagination">
    <li class="page-item previous disabled"><a href="#" class="page-link"><i class="previous"></i></a></li>
    <li class="page-item "><a href="#" class="page-link">1</a></li>
    <li class="page-item active"><a href="#" class="page-link">2</a></li>
    <li class="page-item "><a href="#" class="page-link">3</a></li>
    <li class="page-item "><a href="#" class="page-link">4</a></li>
    <li class="page-item "><a href="#" class="page-link">5</a></li>
    <li class="page-item "><a href="#" class="page-link">6</a></li>
    <li class="page-item next"><a href="#"  class="page-link"><i class="next"></i></a></li>
</ul>
</>

        </div>
   
   
   
 
   

   )
}
export default Userlist