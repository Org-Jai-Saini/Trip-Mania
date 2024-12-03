import React from 'react'

function About() {
  return (
    <>
      <section id="about" className="about_wrapper">
        <div className="container">
          <div className="row flex-lg-row flex-column-reverse ">
            <div className="col-lg-6 text-center text-lg-start">
              <h3>Welcome to <span>TripMania <br className="d-none d-lg-block" />
                the heaven</span> of your weekend</h3>

              <p>Welcome to TripMania, your ultimate travel companion for discovering breathtaking destinations around the world! Whether you're seeking serene beach getaways, bustling city breaks, adventurous outdoor expeditions, or cultural immersions, we've got you covered.</p>

              <a href="#" className="main-btn mt-4">Explore</a>
            </div>

            <div className="col-lg-6 mb-4 mb-lg-0 ps-lg-4 text-center">
              <img decoding="async" src="images/about-img.svg" className="img-fluid" alt="About Us" />
            </div>

          </div>
        </div>
      </section>    </>
  )
}

export default About