import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import moment from 'moment';
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
const { RangePicker } = DatePicker;

function Rooms(props) {
  const [fromdate, setFromdate] = useState()
  const [todate, setTodate] = useState()
  const [rooms, setRooms] = useState([]);

  const navigate = useNavigate();

  const fetchallrooms = async () => {
    try {
      const res = await axios.get('http://localhost:1300/api/rooms/getallrooms');
      console.log('data is', res.data);
      setRooms(res.data)
    } catch (error) {
      console.log('error is', error)
    }
  }


  function filterByDate(dates) {
    console.log('to date are', moment(dates[0])._i.format('YYYY-MM-DD'))
    console.log('from date are', moment(dates[1])._i.format('YYYY-MM-DD'))

    setFromdate(moment(dates[0])._i.format('YYYY-MM-DD'));
    setTodate(moment(dates[1])._i.format('YYYY-MM-DD'))

    // debugger;
    // const passFromDate = moment(dates[0])._i.format('DD-MM-YYYY')
    // const passToDate = moment(dates[1])._i.format('DD-MM-YYYY')

    // console.log('from date fr is', passFromDate)
    // console.log('to date to is', passToDate)


  }

  const handleLogout = () => {
    if (localStorage.getItem('currentuser')) {
      localStorage.removeItem('currentuser')
      navigate('/')

    }
  }

  useEffect(() => {
    fetchallrooms();
  }, [])


  return (
    <>
      <input type="button" className='btn btn-sm btn-primary d-block ms-auto mt-4 px-3 me-4' value="Logout" onClick={handleLogout} />
      <div className='container booking-area mt-5'>
        <form className="row">
          <div className="col-md-6">
            <RangePicker format="DD-MM-YYYY" className="range-btn" onChange={filterByDate} />
          </div>
          <div className="col-md-6">
            <button className="main-btn chk rounded-2 px-lg-3" draggable="false">Search Trips</button>
          </div>
        </form>
      </div>




      <section id="rooms" className="rooms_wrapper">
        <div className="section-title text-center mb-5">
          <h6>What I can do for you</h6>
          <h3>Our Favorite Trips</h3>
        </div>

        <div className="d-flex flex-wrap justify-content-between">
          {
            // rooms.map(roomName => <Card imgUrl={`./images/room/${roomName}`} />)
            rooms.length > 0 && rooms?.map((room, i) => <Card roomdata={room} key={i} fromdate={fromdate} todate={todate} />)
          }


          {/* 
          <Card imgUrl={'./images/room/room2.jpg'} />
          <Card imgUrl={'./images/room/room3.jpg'} />
          <Card imgUrl={'./images/room/room4.jpg'} />
          <Card imgUrl={'./images/room/room5.jpg'} />
          <Card imgUrl={'./images/room/room6.jpg'} />
          <Card imgUrl={'./images/room/room1.jpg'} />
           */}

        </div>

      </section >
    </>
  )
}

export default Rooms