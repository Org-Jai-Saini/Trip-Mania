import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registerscreen() {
  const [user, setUser] = useState({})
  const navigate = useNavigate();

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  // user=
  // {
  //   name:"pankaj",
  //   "email":"pankaj@gmail.com",
  //   "password":"Pankaj123#",
  //   "cpassword":"Pankaj123#"
  // }

  const handleRegister = async () => {
    if (user.password === user.cpassword) {
      try {
        const res = await axios.post('http://localhost:1300/api/users/register', user);
        setUser({
          name: "",
          email: "",
          password: "",
          cpassword: ""
        })
        toast.success(res.data)
        // console.log('res is', res.data);
        navigate('/login')
      } catch (error) {
        toast.error(error);
      }
    }
    else {
      toast.error('Password does not matched');
    }
  }


  return (
    <>
      <Toaster />
      <div className='py-5 mt-2' style={{ display: 'block', margin: 'auto', width: '80%' }}>
        <div className="row shadow justify-content-center py-4" style={{ borderRadius: '5px' }} >
          <div className="col-md-7 p-4">
            <div>
              <h3>Welcome to <span>Registration page</span></h3>
              <input type="text" className='form-control my-3' name='name' placeholder='Enter your name' value={user.name} onChange={handleUser} />
              <input type="text" className='form-control my-3' name='email' placeholder='Enter your email' value={user.email} onChange={handleUser} />
              <input type="text" className='form-control my-3' name='password' placeholder='Enter your password' value={user.password} onChange={handleUser} />
              <input type="text" className='form-control my-3' name='cpassword' placeholder='Enter confirm password' value={user.cpassword} onChange={handleUser} />
              <button className='btn btn-sm btn-primary' onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registerscreen