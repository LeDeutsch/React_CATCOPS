import './dashboard_admin.css'
import { Link } from 'react-router-dom';

function DashBoard_Admin(){
    return(
        <div className="container_admin">
        <h1 className="title_admin">DashBoard Admin</h1>
        <p className="description_admin">Tableau de bord admninistrateur.</p>

        <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link_DBU" to="/dashboard_user">DashBoard User</Link>
        </li>
        </ul>
        </div>
    );
}
 
export default DashBoard_Admin;