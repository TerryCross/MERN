

import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa';   /// font awesome

function Login() {
    const [formData, setFormData] = useState({
        email: '', password: ''
    })
    function onChange(e) {
        setFormData( (prevStateObj) => ({
            ...prevStateObj,
            [e.target.name]: e.target.value
        }))
    }

    function onSubmit(e) {
        e.preventDefault();
    }

    const {email, password } = formData

    return (
        <>
          <section className="heading">
            <h1>
              <FaSignInAlt /> Login
            </h1>
            <p>Please sign in</p>
          </section>
          <section>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <div className="form-group">
                  <input
                      className="form-control"
                      id="email" name="email"
                      type="email" value={email}
                      placeholder="Enter your email"
                      onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                      className="form-control"
                      id="password"
                      type="password"
                      value={password}
                      placeholder="Enter your password"
                      onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <button type="" className="btn btn-block">
                  Submit
                </button>
              </div>
              
            </form>     
          </section>
        </>
    );
}

export default Login;
