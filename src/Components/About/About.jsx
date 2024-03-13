import React from 'react'
import  ivie from '../../../public/Images/ivie.png'
import './About.css'

const About = () => {
  return (
    <div className='w-100 about'>
        <div className='row'>
            <div className='col-12 md-6 col-lg-6 aboutImagePart'>
                <img src={ivie} alt="ivie" />
            </div>
            <div className='col-12 md-6 col-lg-6 aboutTextPart'>
                <div>
                    <h3>Hello, I Am Mafiele Ivie Celestina</h3>
                    <p> A creative junior front-end developer passionate about crafting visually stunning and user-friendly websites. Proficient in HTML, CSS, and JavaScript, I specialize in bringing innovative and responsive web solutions to life. My journey began with a love for creating seamless user experiences, leading me to refine my skills through hands-on projects and continuous learning. Experienced in building cross-browser compatible websites, I excel in using modern front-end frameworks like React.js to enhance interactivity and streamline development processes. Eager to contribute my skills to a dynamic team, I thrive in collaborative environments and am committed to ongoing professional growth. Let's connect and build something amazing together</p>
                    <table>
                        <tr>
                            <td className='pe-5'>Name</td>
                            <td>: Mafiele Ivie</td>
                        </tr>
                        <tr>
                            <td className='pe-5'>Address</td>
                            <td>: Lagos Nigeria</td>
                        </tr>
                        <tr>
                            <td className='pe-5'>Phone number</td>
                            <td>: +2348133869906</td>
                        </tr>
                        <tr>
                            <td className='pe-5'>Email</td>
                            <td>: ivie.omofoma@gmail.com</td>
                        </tr>

                    </table>
                    <button className='btn'>DownLoad CV</button>
                </div>

            </div>

        </div>

    </div>
  )
}

export default About