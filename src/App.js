import Account from "./components/account";
import Dashboard from "./components/dashboard";


import Loginn from "./components/loginn";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Adduser from "./components/adduser";


import Navbar from "./components/navbar";



import Userlist from "./components/userlist";
import Rfooter from './components/rfooter' 
import About from "./components/about";




function App() {
  
  
  
  return (    
<div className="App">    
      
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" component={Dashboard} exact>  
      </Route>
     
      <Route path="/login" component={Loginn}>
      </Route>  
      
      <Route path="/adduser" component={Adduser}>
     
      </Route>   
      <Route path="/userlist" component={Userlist}>
      </Route>
      <Route path="/account" component={Account}>
      </Route>

      <Route path="/about" component={About}>
      </Route>
      <Route component={Error}>
   </Route>
    
    </Switch>

    <Rfooter />
     </BrowserRouter>
    </div>
  );
}
export default App;