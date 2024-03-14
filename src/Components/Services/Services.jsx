import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import './Services.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Services = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <div className='services p-5'>
        <div className='myServicesText pt-5'>
            <h3>MY <span>SERVICES</span></h3> <br />
            <hr />
        </div>
        <div className='container text-center mt-5' >
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                    <div className='border service p-4'>
                        <p className='serviceIcon'><span className='border p-2'><FontAwesomeIcon icon={faCode} /></span></p>
                        <h5 className='mt-4'>WED DEEVELOPMENT</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, odit minus voluptatibus ea nam repudiandae perspiciatis quaerat deserunt consequuntur quisquam libero necessitatibus </p>

                    </div>

                </div>
                <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                    <div className='border service p-4'>
                        <p className='serviceIcon'><span className='border p-2'><FontAwesomeIcon icon={faPhotoVideo} /></span></p>
                        <h5 className='mt-4'>WED DEEVELOPMENT</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, odit minus voluptatibus ea nam repudiandae perspiciatis quaerat deserunt consequuntur quisquam libero necessitatibus </p>

                    </div>

                </div>
                <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                    <div className='border service p-4'>
                        <p className='serviceIcon'><span className='border p-2'><FontAwesomeIcon icon={faPen} /></span></p>
                        <h5 className='mt-4'>WED DEEVELOPMENT</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, odit minus voluptatibus ea nam repudiandae perspiciatis quaerat deserunt consequuntur quisquam libero necessitatibus </p>

                    </div>

                </div>

            </div>

        </div>
 
    </div>
  )
}

export default Services