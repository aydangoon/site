import React from 'react'
import { makeVideoCard } from '../utils/Projects.js'

export default class Videos extends React.Component {
    render() {
        return (
            <div className = 'container p-4 shadow my-4 theme'>
                <h1> Videos </h1>
                <div> I can make videos! (kinda)</div>
                <div className = 'row align-items-start'>
                    {makeVideoCard('NZQ9oyJ4FP8', 'One Night Werewolf Demo', 'A demonstration of my One Night Werewolf web app.')}
                    {makeVideoCard('CC0YnfoMziY', 'Batesian Mimicry Part 1', 'I learned manim and got to pretend I was 3Blue1Brown!')}
                </div>
            </div>
        )
    }
}
