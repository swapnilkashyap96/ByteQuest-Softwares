import React from 'react'
import Button from '../Utilities/Button'
import Card from '../Utilities/Card'
import Header from './Header'

function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ backgroundColor: '#F8FDFF' }} >
        <div className="container">
          <div className="row justify-content-around align-items-center p-4">
            <div className="col-md-6">
              <div className="row ">

                <h6>Welcome To MediCare+ Clinic</h6>
              </div>



              <div className="row">
                <h1>Best Specialists</h1>
              </div>




              <div className="row">
                <p className='align-left'>
                  We are on the leading edge of cancer care. Providing the full continuum of concer treatments
                  and supportive care serives in a single convenient location.
                </p>
              </div>




              <div className="row">
                <div className="col-md-6">
                  <Button value="Make An Appointment" className=' rounded-5 btn btn-primary px-3 py-2' />
                </div>
                <div className="col-md-6">

                  <Button value="Department" style={{ display: 'inline-block', width: '200px', color: 'white' }} className='btn px-3 py-2 bg-danger  rounded-5' />
                </div>
              </div>
            </div>





            <div className="col-md-6">


              <Card para='With supporting text below as a natural lead-in to additional content.' title='' link='' style={{ display: 'inline-block', height: '400px', width: '400px ', backgroundColor: '#EBEEFF' }} className='card mx-auto' />

            </div>
          </div>

        </div>

      </div>

      <div className="container-fluid" style={{ backgroundColor: '#F8FDFF' }}>
        <div className="container mx-auto py-5">

          <div className="row py-5">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h1>Our Services</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mx-auto my-5">
                <p className='align-left'>
                  We Provide the most full medical services, so person could heave the oppurtunity to receive qualitative medicale help
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>



      <div className="container-fluid" style={{ backgroundColor: '#EEF3F5' }}>
        <div className="container mx-auto py-5">

          <div className="row py-5">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h1>We Have The Best Specialist</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mx-auto my-5">
                <p className='align-left'>
                  We have a wide experience in experience design and strategy, with locally-rooted knowledge.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home