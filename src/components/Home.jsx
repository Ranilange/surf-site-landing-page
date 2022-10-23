import React from 'react'
import { useState } from 'react'
import "./Home.css"
const Home = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className='home-page-container'>

            <h1 className='home-page-title'>

                <span className='title-second-color'> "You can't </span>stop the waves,
                but you can <span className='title-second-color'>learn to surf"</span>
            </h1>
            <div>
                <img className="home-page-logo"
                    alt="logo"
                    src="http://localhost:3000/static/media/SurfOn-logos-removebg-preview.eefc1d479983e75bbe14.png" />
                <h3 className='contact-title'>contact us and <span className='title-second-color'>we will call you back</span> </h3>
                <button className="button1" onClick={() => setModal(!modal)} >contact us</button>
            </div>

            {/* button modal */}
            {modal && (
                <div onClick={() => setModal(false)} className='model-overlay'>
                    <div className='modal-content'>
                        <input type="email" placeholder='email' />
                        <input type="text" placeholder='phone-number' />
                        <input type="text" placeholder='name' />
                        <button onClick={() => setModal(false)} className="button1">send</button>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Home