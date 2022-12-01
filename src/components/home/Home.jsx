import React from 'react'
import './Home.css'
import studentBosh from '../imgs/graduation-g0682985c1_1280.png'

export default function Home() {
  return (
    <div className='home-card'>
        <div className="home-about">
            <div className="img-bosh-card">
            <img src={studentBosh} alt="studentBosh" className='home-bosh'/>
            </div>
            <h1 className="home-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus facilis, voluptatibus quasi inventore quod placeat accusamus nihil doloremque expedita.
            </h1>
        </div>
    </div>
  )
}
