import React from 'react'
import { makeProjectCard } from '../utils/Projects.js'

const descs = {
    lithegl: 'The Lithe Graphing Library is an open source tool for all things graph theory related. You can easily create, customize and analyze ' +
            'graphs using a wide array of tools. LitheGL features 15+ different algorithms to run on your graph, and a command line to streamline the ' +
            'process of graph editting and creation.',
    onwo: 'One Night Werewolf Online is a real-time multiplayer card game. You can create private lobbies and play with up to 10 other players. ' +
            'I\'ve included 10+ unique roles and an array of customizable gameplay settings.',
    snakes: 'Snakes is a online multiplayer snake battle royale game. Simply create a lobby, ' +
            'invite your friends and get playing. Classic ' +
            'snake rules, but many players. Last snake standing wins!'
}

export default class WebProjects extends React.Component {
    render() {
        return (
            <div className = 'container p-4 shadow my-4 theme'>
                <h1> Web Projects </h1>
                <div> Web Development is currently what I enjoy most about coding. For me, its a medium to share my ideas
                    and projects with the world. It is a fast paced area where
                    new libraries and tools are always being made. I enjoy both front and back end development and
                    am currently working on my Bootstrap and MongoDB skills.
                </div>
                <div className = 'mt-4'>
                    <h2> What I'm Working on Now </h2>
                    <div className = 'row align-items-start'>
                        {makeProjectCard('lithegl.png', 'LitheGL', 'An open source graphing library.', 'https://aydangoon.github.io/Graph-Library/',
                        'current build', ['front end', 'react', 'graph theory', 'algorithms'], 'lgl', descs.lithegl)}
                        {makeProjectCard('werewolf.png', 'One Night Werewolf Online', 'The classic game moved online.', 'https://youtube.com/watch?v=NZQ9oyJ4FP8',
                        'demonstraction video', ['full stack', 'socket.io', 'express'], 'onwo', descs.onwo)}
                    </div>
                </div>
                <div className = 'mt-4'>
                    <h2> Past Projects </h2>
                    <div className = 'row align-items-start'>
                        {makeProjectCard('snake.png', 'Snakes', 'Online multiplayer snake battle royale.', 'http://aydangoon-snakes.glitch.me',
                        'current build', ['full stack', 'socket.io', 'express'], 'snakes', descs.snakes)}
                    </div>
                </div>
            </div>
        )
    }
}
/*

*/
