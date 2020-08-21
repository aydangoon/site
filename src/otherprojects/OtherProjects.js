import React from 'react'
import { makeProjectCard } from '../utils/Projects.js'

const descs = {
    bms: 'A simulation of how Batesian Mimicry naturally arises in a population ' +
    'through the mechanism of natural selection. A carnivorous species and a herbivorous species ' +
    'populate the 3D environment complete with natural obstacles and vegetation. ' +
    'both adapt to get the advantage on the other. ',
    hol: 'Originally my high school senior project, this game has lived on! I am currently ' +
    'developing it with a team of talented artists, musicians and programmers through Penn\'s UPGRADE ' +
    'Game Development Club.',
    threedb: 'A simulation of 3D flock behavior modeled in Unity. To improve from the 2D version ' +
    'I added better collision detection and avoidance so the boids can navigate an environment ' +
    'filled with obstacles.',
    twodb: 'Using the 3 main principles of Reynolds paper—cohesion, alignment, and separation—' +
    'I was able to get a rather satisfying 2D flock simulation. I added random obstacles so ' +
    'the boids are forced break and alter flock shape.',
    bcg: 'A pretty small but fun physics simulator. You can make a solar system, have a ball bounce around another ball ' +
    'until it runs out of energy, or whatever else you\'ve ever wanted to do with gravity and collisions. I liked this '+
    'project because the results of the applied physics and linear algebra were so satisfying to watch. '
}

export default class OtherProjects extends React.Component {
    render() {
        return (
            <div className = 'container p-4 shadow my-4 theme'>
                <h1> Other Projects </h1>
                <div> Here are some of my other and/or older projects.</div>
                <div className = 'row align-items-start'>
                    {makeProjectCard('batesian.png', 'Batesian Mimicry Simulator', 'Simulating Evolution in Unity.', 'https://youtube.com/watch?v=CC0YnfoMziY',
                    'demonstration video', ['Unity', 'C#', '3d', 'evolution'], 'bms', descs.bms)}
                    {makeProjectCard('2dboids.png', '2d Boids', 'a 2d Boids simulation based on the paper by C. W. Reynolds.', 'https://github.com/aydangoon/2D-Boids',
                    'see code', ['Unity', 'C#', '2d', 'natural simulation'], 'twodb', descs.twodb)}
                    {makeProjectCard('HOL.png', 'Heros of Light', 'RPG adventure game.', 'https://www.youtube.com/watch?v=xXho-VsHf_U',
                    'see gameplay trailer', ['Unity', 'C#', '2d', 'game development', 'music'], 'hol', descs.hol)}
                    {makeProjectCard('3dboids.gif', '3d Boids', 'a 3d Boids simulation based on the paper by C. W. Reynolds.', 'https://github.com/aydangoon/3D-Boids',
                    'see code', ['Unity', 'C#', '3d', 'natural simulation'], 'threedb', descs.threedb)}
                    {makeProjectCard('gravity.png', 'Ball Collision and Gravity', 'A physics simulator for gravity and elastic collisions.', 'https://github.com/aydangoon/2D-Ball-Gravity-and-Collision',
                    'see code', ['python', 'pygame', 'physics'], 'bcg', descs.bcg)}
                </div>
            </div>
        )
    }
}
