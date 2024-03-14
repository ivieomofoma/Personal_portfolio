import React from 'react'
import Typewriter from 'typewriter-effect'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import  ivie from '../../../public/Images/ivie.png'
import './Home.css'

const Home = () => {
  return (
    <div className='w-100 home'>
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-12 col-md-6 col-lg-6 homeTextPart text-white'>
                    <div>
                    <h3 className='welcome'>WELCOME</h3>
                    <h1>
                        <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            strings: ["I AM A FRONT-END DEVELOPER"]
                        }}
                        />
                    </h1>
                    <p>I'm a Front-End developer. My experpertise is to create a the user interface of a website.</p>
                    <div className='icons'>
                        <a href="https://github.com/ivieomofoma"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/ivie-omofoma/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                        <a href="+2348133869906"><FontAwesomeIcon className='icon' icon={faWhatsapp} /></a>
                    </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6homeImagePart '>
                    <img src={ivie} alt="IVIE" />
                </div>
            </div>

        </div>
    </div>
  )
}


export default Home