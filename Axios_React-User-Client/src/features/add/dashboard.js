import './dashboard.css'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DashBoard_User from './dashboard_user';
import DashBoard_Admin from './dashboard_admin';


function DashBoard(){
    return(
        <Router>
        <div className="container">
        <h1 className="title">DashBoard</h1>

        <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link_DB" to="/dashboard_user">DashBoard User</Link>
        <Route exact path='/dashboard_user' component={DashBoard_User} />
        </li>
        <li class="nav-item">
            <Link class="nav-link_DB" to="/dashboard_admin">DashBoard Admin</Link>
            <Route exact path='/dashboard_admin' component={DashBoard_Admin} />
        </li>
        </ul>
        </div>
        </Router>
    );
}
 
export default DashBoard;