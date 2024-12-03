import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
import Rooms from './Rooms';
const { RangePicker } = DatePicker;


function Carousal() {
  return (
    <>
      <section id="home" className="banner_wrapper p-0">
        <div id='carouselExampleInterval' className="swiper carousel slide" data-bs-ride="carousel">

          <div className="swiper-wrapper carousel-inner">

            <div className="carousel-item active" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/zero.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to TripMania</h1>
                  <p>Discover Your Next Adventure with us!</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/one.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to TripMania</h1>
                  <p>Discover Your Next Adventure with us!</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/two.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to TripMania</h1>
                  <p>Discover Your Next Adventure with us!</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/three.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to TripMania</h1>
                  <p>Discover Your Next Adventure with us!</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/four.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to TripMania</h1>
                  <p>Discover Your Next Adventure with us!</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/five.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to TripMania</h1>
                  <p>Discover Your Next Adventure with us!</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/six.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to TripMania</h1>
                  <p>Discover Your Next Adventure with us!</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/seven.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to TripMania</h1>
                  <p>Discover Your Next Adventure with us!</p>
                </div>
              </div>
            </div>

          </div>

        </div>
        {
          // <div className="container booking-area" >
          //   <form className="row">

          //     <div className="col-lg mb-3 mb-lg-0">
          //       <input type="date" className="form-control" placeholder="Start Date" />
          //     </div>

          //     <div className="col-lg mb-3 mb-lg-0">
          //       <input type="date" className="form-control" placeholder="Date" />
          //     </div>
          //     <div className="col-lg mb-3 mb-lg-0">
          //       <select className="form-select">
          //         <option selected>Adults</option>
          //         <option value="1">1</option>
          //         <option value="2">2</option>
          //         <option value="3">3</option>
          //         <option value="4">4</option>
          //         <option value="5">5</option>
          //         <option value="6">6</option>
          //       </select>
          //     </div>
          //     <div className="col-lg mb-3 mb-lg-0">
          //       <select className="form-select">
          //         <option selected>Kids</option>
          //         <option value="1">1</option>
          //         <option value="2">2</option>
          //         <option value="3">3</option>
          //         <option value="4">4</option>
          //         <option value="5">5</option>
          //         <option value="6">6</option>
          //       </select>
          //     </div>
          //     <div className="col-lg mb-3 mb-lg-0">
          //       <button type="submit" className="main-btn chk rounded-2 px-lg-3">Check Availability</button>
          //     </div>
          //   </form>
          // </div >
        }
      </section>
    </>
  )
}

export default Carousal