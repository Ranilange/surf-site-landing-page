import React from 'react'
import "./Courses.css"

const Courses = () => {

    return (
        <>


            <div id='courses' className='courses-container'>
                <div className='courses-container-overlay'>
                </div>

                <div className='courses-card'>

                    <h1>Begginer</h1>
                    <div className='courses-detail'>

                        <div>
                            <h2>three times a week</h2>
                            <p>in this course we will learn the fundametals of surfing,<br></br>
                                the dangers in the sea <br />and get you as soon as posible to the next level</p>
                            <br /><br />
                            <button className='button2'>sign-up</button>
                        </div>
                    </div>
                </div>
                <div className='courses-card'>

                    <h1>Intermidate</h1>
                    <div className='courses-detail'>

                        <div>
                            <h2>twice a week</h2>
                            <p>in this course we will expand our horizons,<br></br>
                                advance a little in fragility and gain more  <br />
                                confidence and independence with the surfboard</p>
                            <br /><br />
                            <button className='button2'>sign-up</button>
                        </div>
                    </div>
                </div>
                <div className='courses-card'>

                    <h1>Advanced</h1>
                    <div className='courses-detail'>

                        <div>
                            <h2>once a week</h2>
                            <p>in this course we will learn the fundametals of surfing,<br></br>
                                the dangers in the sea <br />and get you as soon as posible to the next level</p>
                            <br /><br />
                            <button className='button2'>sign-up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses