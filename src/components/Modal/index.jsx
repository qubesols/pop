import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
//import Enquiry from "../enquiry";
//import booking from "../booking";
import { useState } from "react";
import insurance from "../images/shield_person.png"
import attractions from "../images/attractions.png"
import bed from "../images/bed.png"
import car from "../images/car_rental.png"
import itinerary from "../images/Itinerary creation 1.png"
import flight from "../images/airplanemode_active.png"
import hero from "../images/Rectangle 1.png"

const dropIn ={
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible:{
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit:{
        y: "100vh",
        opacity: 0,
    },
};

const Modal = ({handleClose}) =>{
    const [text, setText] = useState(() => {
        return(
            <div className="enquiry">
                <h1>Would you also like to book some of our other services?</h1>
            </div>
        )
    })

    const [deco, setDeco] = useState({display: "block"})


    const booking = () =>{
        return(
            <div className="bookings">
                <div className="item" onClick={() =>{
                    setText(() => {
                        return(
                            <div>
                                <h1>We Have Begun creating your well rounded itinerary</h1>
                                <div className="yes-no">
                                <button className="preview" onClick={() => {
                                    setText(() => {
                                        return(
                                            <div className="itener-con">
                                                <img src={itinerary} alt="icon"/>
                                <button className="ite-btn" onClick={() =>{
                    setText(booking)
                }}>Continue Planning</button>
                                            </div>
                                        )
                                    })
                                }}>Preview Itinerary</button>
                                <button onClick={() =>{
                    setText(booking)
                }}>Continue Planning</button>
                                </div>
                            </div>
                        )
                    })}}>
                     <img src={insurance} alt="icon"/>
                    <h2>Travel Insurance</h2>
                </div>
                <div className="item" onClick={() =>{
                    setText(() => {
                        return(
                            <div>
                                <h1>We Have Begun creating your well rounded itinerary</h1>
                                <div className="yes-no">
                                <button className="preview" onClick={() => {
                                    setText(() => {
                                        return(
                                            <div className="itener-con">
                                                <img src={itinerary} alt="icon"/>
                                <button className="ite-btn"onClick={() =>{
                    setText(booking)
                }}>Continue Planning</button>
                                            </div>
                                        )
                                    })
                                }}>Preview Itinerary</button>
                                <button onClick={() =>{
                    setText(booking)
                }}>Continue Planning</button>
                                </div>
                                
                            </div>
                        )
                    })}}>
                     <img src={bed} alt="icon"/>
                    <h2>Hotel</h2>
                </div>
                <div className="item" onClick={() =>{
                    setText(() => {
                        return(
                            <div>
                                <h1>We Have Begun creating your well rounded itinerary</h1>
                                <div className="yes-no">
                                <button className="preview" onClick={() => {
                                    setText(() => {
                                        return(
                                            <div className="itener-con">
                                                <img src={itinerary} alt="icon"/>
                                <button className="ite-btn" onClick={() =>{
                    setText(booking)
                }}>Continue Planning</button>
                                            </div>
                                        )
                                    })
                                }}>Preview Itinerary</button>
                                <button onClick={() =>{
                    setText(booking)
                }}>Continue Planning</button>
                                </div>
                                
                            </div>
                        )
                    })}}>
                     <img src={attractions} alt="icon"/>
                    <h2>Attractions</h2>
                </div>
                <div className="item" onClick={() =>{
                    setText(() => {
                        return(
                            <div>
                                <h1>We Have Begun creating your well rounded itinerary</h1>
                                <div className="yes-no">
                                <button className="preview" onClick={() => {
                                    setText(() => {
                                        return(
                                            <div className="itener-con">
                                                <img src={itinerary} alt="icon"/>
                                <button className="ite-btn" onClick={() =>{
                    setText(booking)
                }}>Continue Planning</button>
                                            </div>
                                        )
                                    })
                                }}>Preview Itinerary</button>
                                <button onClick={() =>{
                    setText(booking)
                }}>Continue Planning</button>
                                </div>
                                
                            </div>
                        )
                    })}}>
                     <img src={flight} alt="icon"/>
                    <h2>Flights</h2>
                </div>
                <div className="item" onClick={() =>{
                    setText(() => {
                        return(
                            <div>
                                <h1>We Have Begun creating your well rounded itinerary</h1>
                                <div className="yes-no">
                                <button className="preview" onClick={() => {
                                    setText(() => {
                                        return(
                                            <div className="itener-con">
                                                <img src={itinerary} alt="icon"/>
                                <button className="ite-btn" onClick={() =>{
                    setText(booking)
                }}>Continue Planning</button>
                                            </div>
                                        )
                                    })
                                }}>Preview Itinerary</button>
                                <button onClick={() =>{
                    setText(booking)
                }}>Continue Plannig</button>
                                </div>
                                
                            </div>
                        )
                    })}}>
                     <img src={car} alt="icon"/>
                    <h2>Car Rental</h2>
                </div>




                 
                
            </div>
        )
    }
    return(
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button className="xbtn" onClick={handleClose} style={{alignSelf: "end"}}>x</button>
                <div>
                    {text}
                    <div className="yes-no">
                        <button className="yes" style={deco} onClick={() =>{
                        setText(booking)
                        setDeco({display: "none"})
                        }}>Yes</button>
                        <button className="yes" style={deco} onClick={handleClose}>No</button>
                    </div>
                </div>
                
            </motion.div>

        </Backdrop>
    )
}

export default Modal;