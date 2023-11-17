import BZ1 from './Images/BZmobileV.webp';
import BZ2 from './Images/BZmobileH.webp';
import BZ3 from './Images/BZdesktop.webp';
import SW1 from './Images/SWmobileV.webp';
import SW2 from './Images/SWmobileH.webp';
import SW3 from './Images/SWdesktop.webp';
import SW4 from './Images/SWoptionsV.webp';
import CH1 from './Images/CHmobileV.webp';
import CH2 from './Images/CHmobileH.webp';
import CH3 from './Images/CHdesktop.webp';
import GITHUB from './Images/github.png';
import EXTERNAL from './Images/external.png';
import {useState} from 'react';

function Projects(){
    const [popVis, setPopVis] = useState(false);
    const [popImg, setPopImg] = useState('');

    function handlePopup(IMG){
      setPopImg(IMG);
      setPopVis(true);
    }

    return(
        <section className="projects">
            <div onClick={()=>{setPopVis(false)}} className='popup' style={popVis? {backgroundImage: `url(${popImg})`, visibility: 'visible'} : {}} />
            <div className="project">
              <div className="project-title noselect">
                <a className="project-link" href="https://bomb.zone/frothyjavacafe" target="_blank" rel="noopener noreferrer">
                    Frothy Java Cafe
                    <img className='external-link-img' src={EXTERNAL} alt='external link' title='Frothy Java Cafe' />
                </a>
                <a className="github-link" href="https://github.com/TimothyHoytBSME/coffeehouse" target="_blank" rel="noopener noreferrer">
                  <img className="github-img" src={GITHUB} alt="github" title="Github" />
                </a>
              </div>
              <br></br>
              <div className="project-description noselect">
                A sample site I designed and created using react. It features auto-scrolling, responsive layout, and image management.
              </div>
              <div className='project-images'>
                <img onClick={()=>{handlePopup(CH1)}} className="project-image zoomonhover" src={CH1} alt="mobile vertical" title="Mobile Vertical"/>
                <img onClick={()=>{handlePopup(CH2)}} className="project-image zoomonhover" src={CH2} alt="mobile horizontal" title="Mobile Horizontal"/>
                <img onClick={()=>{handlePopup(CH3)}} className="project-image zoomonhover" src={CH3} alt="desktop" title="Desktop"/>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="project">
              <div className="project-title noselect">
                <a className="project-link" href="https://bomb.zone/" target="_blank" rel="noopener noreferrer">
                    Bomb.Zone 
                    <img className='external-link-img' src={EXTERNAL} alt='external link' title='Frothy Java Cafe' />
                </a>
              </div>
              <br></br>
              <div className="project-description noselect">
                A mobile-friendly web app for launching mobile-friendly web apps. I designed and built the front end with React, and the backend API with Node Express. 
                This was my solo pilot project for web app development.(Currently not compatible with iOS Safari.)
              </div>
              <div className='project-images'>
                <img onClick={()=>{handlePopup(BZ1)}} className="project-image zoomonhover" src={BZ1} alt="mobile vertical" title="Mobile Vertical"/>
                <img onClick={()=>{handlePopup(BZ2)}} className="project-image zoomonhover" src={BZ2} alt="mobile horizontal" title="Mobile Horizontal"/>
                <img onClick={()=>{handlePopup(BZ3)}} className="project-image zoomonhover" src={BZ3} alt="desktop" title="Desktop"/>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="project">
              <div className="project-title noselect">
                <a className="project-link" href="https://playcanv.as/p/B2pvMi57/" target="_blank" rel="noopener noreferrer">
                    Swabble 
                    <img className='external-link-img' src={EXTERNAL} alt='external link' title='Frothy Java Cafe' />
                </a>
              </div>
              <br></br>
              <div className="project-description noselect">
                A word game I created in Playcanvas. Swap any two tiles to make and destroy words.
              </div>
              <div className='project-images'>
                <img onClick={()=>{handlePopup(SW1)}} className="project-image zoomonhover" src={SW1} alt="mobile vertical" title="Mobile Vertical"/>
                <img onClick={()=>{handlePopup(SW4)}} className="project-image zoomonhover" src={SW4} alt="mobile options" title="Mobile Options"/>
                <img onClick={()=>{handlePopup(SW2)}} className="project-image zoomonhover" src={SW2} alt="mobile horizontal" title="Mobile Horizontal"/>
                <img onClick={()=>{handlePopup(SW3)}} className="project-image zoomonhover" src={SW3} alt="desktop" title="Desktop"/>
              </div>
            </div>
        </section>
    )
}

export default Projects;