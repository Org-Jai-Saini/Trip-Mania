import React, { useEffect } from 'react'
import Carousal from './Carousal'
import Card from './Card'
import About from './About';
import { useNavigate } from 'react-router-dom';

function Home() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // console.log("useEffect called at home page")
  //   // localStorage.getItem('currentuser') && navigate('/rooms')
  //   localStorage.getItem('currentuser') ? (window.location.href = '/rooms') : (window.location.href = '/login')
  // }, [])

  return (
    <>
      {/* {
        (!localStorage.getItem('currentuser')) ? navigate('/') : null
      } */}
      <Carousal />
    </>
  )
}

export default Home