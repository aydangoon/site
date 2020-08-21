import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import './Navbar.scss'

export default class Navbar extends React.Component {
    render() {
        return (
                <nav className = 'navbar navbar-expand-sm shadow theme'>
                    <h1 className = 'navbar-brand'>Aydan's Site</h1>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsedBar" aria-controls="collapsedBar" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={require('../assets/hamburger.png')} width={25}/>
                    </button>
                    <div className = 'collapse navbar-collapse' id = 'collapsedBar'>
                        <ul className="navbar-nav">
                            <li className="navbar-text">
                                <NavLink className="nav-link text-lg-green" to="/web-projects"
                                    activeClassName='active'>Web Projects</NavLink>
                            </li>
                            <li className="navbar-text">
                                <NavLink className="nav-link text-lg-green" to="/other-projects"
                                    activeClassName='active'>Other Projects</NavLink>
                            </li>
                            <li className="navbar-text">
                                <NavLink className="nav-link text-lg-lav" to="/videos"
                                activeClassName='active'>Videos</NavLink>
                            </li>
                            <li className="navbar-text">
                                <NavLink className="nav-link text-lg-lav" to="/resume-and-contact"
                                activeClassName='active'>Resume and Contact</NavLink>
                            </li>
                            <li className="navbar-text">
                                <NavLink className="nav-link text-lg-lav" to="/home"
                                activeClassName='active'>Home</NavLink>
                            </li>
                        </ul>
                    </div>
                    <button type = 'button' className = 'btn nav-item navbar-right reverse-bg-theme mr-2' onClick={this.props.setDark}>
                        {modeIcon(this.props.dark)}
                    </button>
                    <div className = 'nav-item navbar-right dropdown'>
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        quick links
                    </button>
                        <div className="dropdown-menu theme" aria-labelledby="dropdownMenuButton">
                            <div className = 'dropdown-item'>
                                <a href='https://www.github.com/aydangoon' target='_blank'>
                                    <img className='icon' src={require('../assets/git.png')} alt=''/>
                                </a>
                            </div>
                            <div className = 'dropdown-item'>
                                <a href='https://www.linkedin.com/in/aydan-gooneratne-118b49178/' target='_blank'>
                                    <img className='icon' src={require('../assets/lin.png')} alt=''/>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}

function modeIcon(dark) {
    const moon = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-moon" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
        </svg>
    )
    const sun = (<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-brightness-high" fill="black" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>)
    return dark ? sun : moon;

}
