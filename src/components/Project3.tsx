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

export const Project3: React.FC<Props> = ( { name, link1 } ) => {

    return (
        <div>
            <h5>{ name }</h5>
            <div className='player--wrap'>
            <Player 
            height='100%'
            width='100%'
            className='react--player' url="https://youtu.be/W2xJ5Z2ya7U" />
            </div>
            <ul data-type='circle'>
                <li>inspired by blade ball, genji ball, and doom sumo</li>
                <li>
                    players can block a movement ball and use abilities.
                    players can spin crates and get quests.
                    players can equip different swords.
                </li>
            </ul>
            <small><p className='center--text'>tech:  lua, knit, roact, wally, rojo, vs code, git, github, figma, bing image generator</p></small>
            <div className='icon--container'>
            
            <Icon className='icon' icon="uit:github-alt" height="22" 
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                    click1(e, link1, 'clicked git')}} />
            </div>
        </div>
    )
}