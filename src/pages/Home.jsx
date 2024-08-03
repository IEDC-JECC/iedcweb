import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner';
import "./home.css";
import IEdc from '../images/image-10.png';
import IEdc2 from '../images/image-11.png';
import {ArrowCircleRight} from '@phosphor-icons/react';
import Hacker from '../images/hack.png';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        {/* originalcodestarts here */}
        <div className="hmid">
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <img src={IEdc} alt="iedcc"/>
                <img src={IEdc2} alt="iedcc"/>
            </div>
            <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
                <p className='mmanj'>We</p>
                <p className='mneel'>IEDC</p>
                <p className='mmanj'>Team</p>
            </div>
            <p className='mdesc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
            </p>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <img src={IEdc2} alt="iedcc"/>
                <img src={IEdc} alt="iedcc"/>
                
            </div>
        </div>
        <div className="hcount">
            <div className="icount">
                <h3>+20</h3>
                <p>Executive members</p>
            </div>
            <div className="icount">
                <h3>+150</h3>
                <p>Student Members</p>
            </div>
            <div className="icount">
                <h3>+10</h3>
                <p>Ideative Events</p>
            </div>
        </div>
        <div className="memb">
        <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
                <p className='mmanj'>Our</p>
                <p className='mneel'>Membership</p>
            </div>
            <div className="joinb">
                <h2 className='fefe'>Free Forever</h2>
                <p>Experience a new academic year like never before!</p>
                <div style={{display:"inline-flex",gap:"100px",justifyContent:"space-between",alignItems:"center"}}>
                    <h2>Join</h2>
                    <a href='https://www.google.com' style={{textDecoration:"none"}}><ArrowCircleRight size={43} /></a>
            </div>
                
            </div>
        </div>
        <div className="incev">
        <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
                <p className='mmanj'>Incoming</p>
                <p className='mneel'>Events</p>
                </div>
                <div style={{display: "flex",
                            alignItems: "center",
                            gap: "40px",paddingLeft:"32px",paddingRight:"32px"}}>
                    <div className="evind">
                        <img src={Hacker}></img>
                        <div className="evind1">
                            <h2>Karthavya</h2>
                            <p>A hackathon conducting by students of JEC for making students empowered</p>
                            <p> and + 20 participating</p>
                            <p>Date and time</p>
                            <button>Get</button>
                        </div>
                    </div>
                    <div className="evind">
                        <img src={Hacker}></img>
                        <div className="evind1">
                            <h2>Karthavya</h2>
                            <p>A hackathon conducting by students of JEC for making students empowered</p>
                            <p> and + 20 participating</p>
                            <p>Date and time</p>
                            <button>Get</button>
                        </div>
                    </div>
                            </div>

            </div>
            <Footer></Footer>
        </div>
  )
}

export default Home