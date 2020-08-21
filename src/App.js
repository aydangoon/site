import React from 'react';
import Navbar from './navbar/Navbar.js'
import Footer from './footer/Footer.js'
import Canvas from './canvas/Canvas.js'
import Home from './home/Home.js'
import WebProjects from './webprojects/WebProjects.js'
import OtherProjects from './otherprojects/OtherProjects.js'
import Videos from './videos/Videos.js'
import Contact from './contact/Contact.js'
import * as Colors from './utils/Colors.js'

import { Route, Redirect } from 'react-router-dom'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dark: false
        }
        this.setDark = this.setDark.bind(this)
    }
    render() {
        return (
            <div>
                <div className = 'container-fullwidth' id='all-content'>
                    <Navbar dark={this.state.dark} setDark={this.setDark} />
                    <Route path={['/home', '/']} exact>
                        <Canvas pageColor={Colors.LG_LAV}/>
                        <Home />
                    </Route>
                    <Route path='/web-projects'>
                        <Canvas pageColor={Colors.LG_GREEN}/>
                        <WebProjects />
                    </Route>
                    <Route path='/other-projects'>
                        <Canvas pageColor={Colors.LG_GREEN}/>
                        <OtherProjects />
                    </Route>
                    <Route path='/videos'>
                        <Canvas pageColor={Colors.LG_LAV}/>
                        <Videos />
                    </Route>
                    <Route path='/resume-and-contact'>
                        <Canvas pageColor={Colors.LG_LAV}/>
                        <Contact />
                    </Route>
                    <Route path='*'>
                        <Redirect to='/home' />
                    </Route>
                    <Footer />
                </div>
                <div id = 'modal'></div>
            </div>
        )
    }
    setDark() {
        let root = document.documentElement;
        const dark = this.state.dark
        root.style.setProperty('--bg-color', dark ? 'white' : '#404040')
        root.style.setProperty('--fg-color', dark ? 'black' : 'white')
        root.style.setProperty('--bg-2-reverse-color', dark ? '#404040' : 'white')
        root.style.setProperty('--footer-bg-color', dark ? 'black' : 'white')
        this.setState({dark: !dark})
    }
}
