import './dashboard_user.css'
import { Link } from 'react-router-dom';

function DashBoard_User(){
    return(
        <div className="container_user">
        <h1 className="title_user">DashBoard User</h1>
        <p className="description_user">Tableau de bord utilisateur.</p>

        <ul class="navbar-nav">
        <li class="nav-item">
            <Link class="nav-link_DBA" to="/dashboard_admin">DashBoard Admin</Link>
        </li>
        </ul>
        </div>
    );
}
 
export default DashBoard_User;