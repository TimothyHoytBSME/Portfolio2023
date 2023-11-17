import CPanel from './Icons/cpanel.svg';
import Css3 from './Icons/css3.svg';
import Node from './Icons/node.svg';
import Html5 from './Icons/html5.svg';
import MySq from './Icons/mysql.svg';
import Pyth from './Icons/python.svg';
import Reac from './Icons/react.svg';
import Javascript from './Icons/javascript.svg';
import PlayC from './Icons/playcanvas.svg';

function Tech() {
    return(
        <div className="skills">
            {/* <div className="skills-title">Technologies</div> */}
            <div className="skills-icons">
            <a className="techicon-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                <img  className="techicon zoomonhover" src={Reac} alt="React" title="React"/>
            </a>
            <a className="techicon-link" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                <img  className="techicon zoomonhover" src={Javascript} alt="Javascript" title="Javascript"/>
            </a>
            <a className="techicon-link" href="https://www.w3.org/TR/2011/WD-html5-20110405/" target="_blank" rel="noopener noreferrer">
                <img  className="techicon zoomonhover" src={Html5} alt="HTML" title="HTML"/>
            </a>
            <a className="techicon-link" href="https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/" target="_blank" rel="noopener noreferrer">
                <img  className="techicon zoomonhover" src={Css3} alt="CSS" title="CSS"/>
            </a>
            <a className="techicon-link" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                <img  className="techicon zoomonhover" src={Node} alt="NodeJS" title="NodeJS"/>
            </a>
            <a className="techicon-link" href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                <img  className="techicon zoomonhover" src={Pyth} alt="Python" title="Python"/>
            </a>
            <a className="techicon-link" href="https://mysql.com/" target="_blank" rel="noopener noreferrer">
                <img  className="techicon zoomonhover" src={MySq} alt="MySQL" title="MySQL"/>
            </a>
            <a className="techicon-link" href="https://cpanel.net/" target="_blank" rel="noopener noreferrer">
                <img  className="techicon zoomonhover" src={CPanel} alt="CPanel" title="CPanel"/>
            </a>
            <a className="techicon-link" href="https://playcanvas.com/" target="_blank" rel="noopener noreferrer">
                <img  className="techicon zoomonhover" src={PlayC} alt="Playcanvas" title="Playcanvas"/>
            </a>

            </div>
        </div>
    )
}

export default Tech;