import React from 'react'
import './css/Background.css'
import backgroundImg from '../images/BB-bw.png'

const Background = () => {
    return (
        <>
          <div className="backgroundImg">
            <img className="Logo" src={backgroundImg} alt=""></img>
          </div>
        </>
    )
}

export default Background
