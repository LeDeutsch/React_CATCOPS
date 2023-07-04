import './App.css';
import Read from './components/read';
import Update from './components/update';
import FormUser from './features/add/form';
import DashBoard from './features/add/dashboard';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid justify-content-center">
          <Link class="nav-link" to="/">Acceuil</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/dashboard">DashBoard</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/create">Create</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/read">Read</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main">
        <img src='/Images/CATCOPS.png' />
        <h2 className="main-header">CATCOPS</h2>
        <div className="Background-DB">
          <Route exact path='/dashboard' component={DashBoard} />
        </div>
        <div>
          <Route exact path='/create' component={FormUser} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
      </div>
    </Router>

  );
}

export default App;
