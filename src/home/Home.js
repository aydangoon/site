import React from 'react'
import './Home.scss'

export default class Home extends React.Component {
    render() {
        return (
            <div className='container shadow my-4 theme'>
                <div className = 'row px-4 pt-4'>
                    <h1> Home </h1>
                </div>
                <div className = 'row'>
                    <div className = 'col-8 p-4'>
                        <h2>About Me</h2>
                        <div className = 'mt-2'>
                            Hi! My name is Aydan Gooneratne and I am a rising sophomore at the
                            University of Pennsylvania majoring in Computer Science with a
                            possible minor in Economics.
                        </div>
                        <div className = 'mt-2'>
                            I've always been captivated by the ability of computers to translate ideas into something
                            real through programming. It's what drew me to Computer Science in the beginning, and has kept me
                            engaged and excited since. Coding is my hobby and my area of study, and I am always eager
                            to learn and improve my programming abilities.
                        </div>
                    </div>
                    <div className = 'col-4 p-4'>
                        <img src={require('../assets/me.jpg')} alt='' width={200} className = 'rounded shadow img-fluid' />
                    </div>
                </div>
                <div className = 'row'>
                    <div className = 'col-8 p-4'>
                        <h2>My Niche</h2>
                        <div className = 'mt-2'>
                            I like many different areas of programming, but my current favorite is definitely web development.
                            I'm interested in full stack but I especially enjoy back end development. My favorite tools and libraries to work with
                            are <a href='https://reactjs.org'>React</a>, <a href='https://getbootstrap.com'>Bootstrap</a>, <a href='https://nodejs.org'>Nodejs</a>,
                            and <a href='https://expressjs.com'>Express</a>.
                        </div>
                        <div className = 'mt-2'>
                            Outside of web development, I really like algorithms and low level scripting. Algorithmic problem solving lets out the math nerd
                            within me, and gives me a chance to practice my Python and Java skills. What I enjoy about low level scripting is the minimal abstraction.
                            It's nice to work with the computer on very direct level.
                        </div>
                    </div>
                    <div className = 'col-4 p-4'>
                        <img src={require('../assets/fullstack.png')} alt='' width={200} className = 'rounded img-fluid' />
                    </div>
                </div>
                <div className = 'row'>
                    <div className = 'col-8 p-4'>
                        <h2>Other Things</h2>
                        <h4> STEM </h4>
                        <div>
                            My interest in STEM extends in many
                            directions, such as physics, math and evolutionary biology. In high school I was on the Science
                            Olympiad team (Fermi Questions was the jam!) where I competed in a variety of science and math
                            events such as Circuit Lab, Sounds of Music and Fermi Questions.
                        </div>
                        <h4> Music </h4>
                        <div>
                            I play upright bass, electric bass, guitar, and I am currently the bassist for the Mask and Wig club here
                            at Penn. I have a very... ...diverse taste in music, and my favorite genres are electric, prog metal, and jazz.
                        </div>
                    </div>
                    <div className = 'col-4 p-4'>
                        <img src={require('../assets/music.jpg')} alt='' width={200} className = 'rounded shadow img-fluid' />
                    </div>
                </div>
                <div className = 'row'>
                    <div className = 'col-8 p-4'>
                        <h4> Background </h4>
                        <div>
                            I'm half Swiss, am fluent in Swissgerman, and am in the process of learning High German. My dad's family is from Sri Lanka,
                            and I've been fortunate to have visited both Switzerland and Sri Lanka. Given my multicultural background, I'm very open to
                            working and studying abroad, and would especially be eager to do so in Austria, Germany, or Switzerland.
                        </div>
                    </div>
                    <div className = 'col-4 p-4'>
                        <img src={require('../assets/ascher.jpg')} alt='' width={200} className = 'rounded shadow img-fluid' />
                        <div> Ascher Mt., photo from a hike </div>
                    </div>
                </div>
            </div>
        )
    }
}
