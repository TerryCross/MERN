

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'  // Can only have Routes within Routes tag.
import Header from './components/header.js'
import Dashboard from './pages/dashboard.js'
import Login from './pages/login.js'
import Register from './pages/register.js'

function App() {
    return (
        <>
          <Router>
            <div className="container">
              <Header />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </Routes>
            </div>
          </Router>
        </>
    );
}

export default App;



