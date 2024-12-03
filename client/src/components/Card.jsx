import React from 'react'
import { Link } from 'react-router-dom'

function Card({ roomdata, id, fromdate, todate }) {
  // console.log('props is', props)

  return (
    <>
      <div className="card my-2" style={{ width: '25rem' }}>
        <img src={roomdata?.imageurls} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{roomdata.type}</h5>
          <p className="card-text">{roomdata.description}</p>
          <h5 className="mb-4 fst-italic">₹ {roomdata.rentperday}
            <span className="fw-light text-decoration-line-through ms-2"> ₹ {[roomdata.rentperday * 2]}</span>
            <span className="text-success"> 50% off</span>
          </h5>
          {
            (fromdate && todate) && (
              <Link to={`booking/${roomdata._id}/${fromdate}/${todate}`}>
                <button className='btn btn-sm btn-warning text-white w-50 d-block ms-auto'>Book Now</button>
              </Link>

            )
          }

        </div>
      </div>



    </>
  )
}

export default Card