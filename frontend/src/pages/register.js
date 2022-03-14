

import {useState, useEffect} from 'react'

import {FaUser} from 'react-icons/fa';   /// font awesome

function Register() {
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', password2: ''
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

    const {name, email, password, password2} = formData

    return (
        <>
          <section className="heading">
            <h1>
              <FaUser /> Register
            </h1>
            <p>Please create account</p>
          </section>
          <section>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                    className="form-control"
                    id="name" name="name"
                    type="text" value={name}
                    placeholder="Enter your name"
                    onChange={onChange}
                />
              </div>
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
              <div className="form-group">
                <input
                     className="form-control"
                    id="password2" password="password2"
                    type="password" value={password2}
                    placeholder="Confirm your password"
                    onChange={onChange}
                />
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

export default Register;
