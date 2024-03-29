import React from "react";
import { Icon } from '@iconify/react';
import Player from 'react-player';


interface Props {
    name: string,
    link1: string,
}

const click1 = (
    event: React.MouseEvent<Element, MouseEvent>, 
    link: string, 
    text: string
    ) => {
    window.open(link)
    console.log(text)
}

export const Project2: React.FC<Props> = ( { name, link1 } ) => {

    return (
        <div>
            <h5>{ name }</h5>
            <div className='player--wrap'>
            <Player 
            height='100%'
            width='100%'
            className='react--player' url="https://youtu.be/uLj4l2Um1Hc?si=o33kkR8xBb5Je9VA" />
            </div>
            <ul data-type='circle'>
                <li>a gunz the duel remake</li>
                <li>
                    players can perform two combo moves.  
                    players can pick up health and armor.  
                    players can run on walls and dash.
                </li>
            </ul>
            <small><p className='center--text'>tech:  lua, rojo, vs code, git, github, figma, bing image generator</p></small>
            <div className='icon--container'>
            
            <Icon className='icon' icon="uit:github-alt" height="22" 
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                    click1(e, link1, 'clicked git')}} />
            </div>
        </div>
    )
}