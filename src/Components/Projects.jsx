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

import ME1 from './Images/MEmobileV.webp';
import ME2 from './Images/MEmobileH.webp';
import ME3 from './Images/MEdesktop.webp';

import RB1 from './Images/RBmobileV1.webp';
import RB2 from './Images/RBmobileV2.webp';
import RB3 from './Images/RBmobileV3.webp';
import RB4 from './Images/RBmobileH1.webp';
import RB5 from './Images/RBmobileH2.webp';
import RB6 from './Images/RBdesktop.webp';

import SWA1 from './Images/SWAmobileV.webp';
import SWA2 from './Images/SWAmobileH.webp';
import SWA3 from './Images/SWAdesktop.webp';

import LD1 from './Images/LDmobileV.webp';
import LD2 from './Images/LDmobileH.webp';
import LD3 from './Images/LDdesktop.webp';

import CV1 from './Images/CVmobileH.webp';
import CV2 from './Images/CVdesktop.webp';

import DV1 from './Images/DVmobileV.webp';
import DV2 from './Images/DVmobileH.webp';
import DV3 from './Images/DVdesktop.webp';

import DU1 from './Images/DUmobileV.webp';
import DU2 from './Images/DUmobileH.webp';
import DU3 from './Images/DUdesktop.webp';

import ML1 from './Images/MLmobileV.webp';
import ML2 from './Images/MLmobileH.webp';
import ML3 from './Images/MLdesktop.webp';

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
            <div onClick={()=>{setPopVis(false)}} className='popup' style={popVis? {backgroundImage: `url(${popImg})`, visibility: 'visible'} : {}} >
              <div className='clicktoexit'>Click to Exit</div>
            </div>
            <h2 className='projectstext'>Web Projects</h2>

            <div className="project">
              <div className="project-title noselect">
                <a className="project-link" href="https://runebattle.com" target="_blank" rel="noopener noreferrer">
                    RuneBattle.com 
                    <img className='external-link-img' src={EXTERNAL} alt='external link' title='RuneBattle.com' />
                </a>
              </div>
              <br></br>
              <div className="project-description noselect">
                A free, turn-based, cross-compatible, web-game based around magical runes. Vanilla HTML, JavaScript, and CSS using Firebase backend.
              </div>
              <div className='project-images'>
                <img onClick={()=>{handlePopup(RB1)}} className="project-image zoomonhover" src={RB1} alt="mobile vertical 1" title="Mobile Vertical 1"/>
                <img onClick={()=>{handlePopup(RB2)}} className="project-image zoomonhover" src={RB2} alt="mobile vertical 2" title="Mobile Vertical 2"/>
                <img onClick={()=>{handlePopup(RB3)}} className="project-image zoomonhover" src={RB3} alt="mobile vertical 3" title="Mobile Vertical 3"/>
                <img onClick={()=>{handlePopup(RB4)}} className="project-image zoomonhover" src={RB4} alt="mobile horizontal 1" title="Mobile Horizontal 1"/>
                <img onClick={()=>{handlePopup(RB5)}} className="project-image zoomonhover" src={RB5} alt="mobile horizontal 2" title="Mobile Horizontal 2"/>
                <img onClick={()=>{handlePopup(RB6)}} className="project-image zoomonhover" src={RB6} alt="desktop" title="Desktop"/>
              </div>
            </div>
            <br></br>
            <br></br>

            <div className="project">
              <div className="project-title noselect">
                <a className="project-link" href="https://mccarthyelectricinc.com/dev" target="_blank" rel="noopener noreferrer">
                    Mccarthyelectricinc.com 
                    <img className='external-link-img' src={EXTERNAL} alt='external link' title='McCarthy Electric Inc.' />
                </a>
                <a className="github-link" href="https://github.com/TimothyHoytBSME/McCarthyElectricSite" target="_blank" rel="noopener noreferrer">
                  <img className="github-img" src={GITHUB} alt="github" title="Github" />
                </a>
              </div>
              <br></br>
              <div className="project-description noselect">
                A fully responsive, SEO-ready website for a local electrical company. Vanilla HTML, JavaScript, and CSS served with NodeJS Express. Solo project contracted by owner.
              </div>
              <div className='project-images'>
                <img onClick={()=>{handlePopup(ME1)}} className="project-image zoomonhover" src={ME1} alt="mobile vertical" title="Mobile Vertical"/>
                <img onClick={()=>{handlePopup(ME2)}} className="project-image zoomonhover" src={ME2} alt="mobile horizontal" title="Mobile Horizontal"/>
                <img onClick={()=>{handlePopup(ME3)}} className="project-image zoomonhover" src={ME3} alt="desktop" title="Desktop"/>
              </div>
            </div>
            <br></br>
            <br></br>
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
                A sample solo webapp project, designed and built using React. It features auto-scrolling, responsive layout, and image management.
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
                This was my solo pilot project for web app development.
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
            <br></br>
            <br></br>
            <div className="project">
              <div className="project-title noselect">
                <a className="project-link" href="https://bomb.zone/swatch" target="_blank" rel="noopener noreferrer">
                    Swatch 
                    <img className='external-link-img' src={EXTERNAL} alt='external link' title='Swatch' />
                </a>
              </div>
              <br></br>
              <div className="project-description noselect">
                A game where you combine colors to achieve a target color. Solo HTML5 canvas project.
              </div>
              <div className='project-images'>
                <img onClick={()=>{handlePopup(SWA1)}} className="project-image zoomonhover" src={SWA1} alt="mobile vertical" title="Mobile Vertical"/>
                <img onClick={()=>{handlePopup(SWA2)}} className="project-image zoomonhover" src={SWA2} alt="mobile horizontal" title="Mobile Horizontal"/>
                <img onClick={()=>{handlePopup(SWA3)}} className="project-image zoomonhover" src={SWA3} alt="mobile desktop" title="Mobile Desktop"/>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="project">
              <div className="project-title noselect">
                <a className="project-link" href="https://bomb.zone/mathlink" target="_blank" rel="noopener noreferrer">
                    Mathlink 
                    <img className='external-link-img' src={EXTERNAL} alt='external link' title='Mathlink' />
                </a>
                <a className="github-link" href="https://github.com/TimothyHoytBSME/math-game" target="_blank" rel="noopener noreferrer">
                  <img className="github-img" src={GITHUB} alt="github" title="Github" />
                </a>
              </div>
              <br></br>
              <div className="project-description noselect">
                A game where you link numbers and operators to yield target value. Solo HTML5 canvas project.
              </div>
              <div className='project-images'>
                <img onClick={()=>{handlePopup(ML1)}} className="project-image zoomonhover" src={ML1} alt="mobile vertical" title="Mobile Vertical"/>
                <img onClick={()=>{handlePopup(ML2)}} className="project-image zoomonhover" src={ML2} alt="mobile horizontal" title="Mobile Horizontal"/>
                <img onClick={()=>{handlePopup(ML3)}} className="project-image zoomonhover" src={ML3} alt="mobile desktop" title="Mobile Desktop"/>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="project">
              <div className="project-title noselect">
                <a className="project-link" href="https://bomb.zone/laserdefense" target="_blank" rel="noopener noreferrer">
                    Laser Defense 
                    <img className='external-link-img' src={EXTERNAL} alt='external link' title='Laser Defense' />
                </a>
                <a className="github-link" href="https://github.com/TimothyHoytBSME/laser-defense" target="_blank" rel="noopener noreferrer">
                  <img className="github-img" src={GITHUB} alt="github" title="Github" />
                </a>
              </div>
              <br></br>
              <div className="project-description noselect">
                An iteration on the classic tower defense game. Solo HTML5 canvas project.
              </div>
              <div className='project-images'>
                <img onClick={()=>{handlePopup(LD1)}} className="project-image zoomonhover" src={LD1} alt="mobile vertical" title="Mobile Vertical"/>
                <img onClick={()=>{handlePopup(LD2)}} className="project-image zoomonhover" src={LD2} alt="mobile horizontal" title="Mobile Horizontal"/>
                <img onClick={()=>{handlePopup(LD3)}} className="project-image zoomonhover" src={LD3} alt="mobile desktop" title="Mobile Desktop"/>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="project">
              <div className="project-title noselect">
                <a className="project-link" href="https://bomb.zone/divolve" target="_blank" rel="noopener noreferrer">
                    Divolve 
                    <img className='external-link-img' src={EXTERNAL} alt='external link' title='Divolve' />
                </a>
                <a className="github-link" href="https://github.com/TimothyHoytBSME/evolve" target="_blank" rel="noopener noreferrer">
                  <img className="github-img" src={GITHUB} alt="github" title="Github" />
                </a>
              </div>
              <br></br>
              <div className="project-description noselect">
                An evolution simulator using HTML elements as creatures with mutating traits. Solo HTML5 project.
              </div>
              <div className='project-images'>
                <img onClick={()=>{handlePopup(DV1)}} className="project-image zoomonhover" src={DV1} alt="mobile vertical" title="Mobile Vertical"/>
                <img onClick={()=>{handlePopup(DV2)}} className="project-image zoomonhover" src={DV2} alt="mobile horizontal" title="Mobile Horizontal"/>
                <img onClick={()=>{handlePopup(DV3)}} className="project-image zoomonhover" src={DV3} alt="mobile desktop" title="Mobile Desktop"/>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="project">
              <div className="project-title noselect">
                <a className="project-link" href="https://bomb.zone/doubleup" target="_blank" rel="noopener noreferrer">
                    Double Up
                    <img className='external-link-img' src={EXTERNAL} alt='external link' title='Double Up' />
                </a>
                <a className="github-link" href="https://github.com/TimothyHoytBSME/double-up" target="_blank" rel="noopener noreferrer">
                  <img className="github-img" src={GITHUB} alt="github" title="Github" />
                </a>
              </div>
              <br></br>
              <div className="project-description noselect">
                A game of doubling tile values as high as possible. Solo HTML5 canvas project.
              </div>
              <div className='project-images'>
                <img onClick={()=>{handlePopup(DU1)}} className="project-image zoomonhover" src={DU1} alt="mobile vertical" title="Mobile Vertical"/>
                <img onClick={()=>{handlePopup(DU2)}} className="project-image zoomonhover" src={DU2} alt="mobile horizontal" title="Mobile Horizontal"/>
                <img onClick={()=>{handlePopup(DU3)}} className="project-image zoomonhover" src={DU3} alt="mobile desktop" title="Mobile Desktop"/>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="project">
              <div className="project-title noselect">
                <a className="project-link" href="https://bomb.zone/creavolve" target="_blank" rel="noopener noreferrer">
                    Creavolve
                    <img className='external-link-img' src={EXTERNAL} alt='external link' title='Creavolve' />
                </a>
              </div>
              <br></br>
              <div className="project-description noselect">
                An on-going physics-based evolution simulator, to eventually be similar to the Evolution game on Android. Solo HTML5 canvas project.
              </div>
              <div className='project-images'>
                <img onClick={()=>{handlePopup(CV1)}} className="project-image zoomonhover" src={CV1} alt="mobile vertical" title="Mobile Vertical"/>
                <img onClick={()=>{handlePopup(CV2)}} className="project-image zoomonhover" src={CV2} alt="mobile horizontal" title="Mobile Horizontal"/>
              </div>
            </div>
        </section>
    )
}

export default Projects;