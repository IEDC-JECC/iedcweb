import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner';
import "./home.css";
import IEdc from '../images/image-10.png';
import IEdc2 from '../images/image-11.png';

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
    </div>
  )
}

export default Home