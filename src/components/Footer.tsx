import React from "react";
import { Icon } from '@iconify/react';
import '../App.css';

interface Props {
    link1: string,
    link2: string,
    link3: string,
}

const click1 = (
    event: React.MouseEvent<Element, MouseEvent>, 
    link: string, 
    text: string
    ) => {
    window.open(link)
    console.log(text)
}

const click2 = (
    event: React.MouseEvent<Element, MouseEvent>, 
    link: string, 
    text: string
    ) => {
    window.open(link)
    console.log(text)
}

const click3 = (
    event: React.MouseEvent<Element, MouseEvent>, 
    link: string, 
    text: string
    ) => {
    const emailAddress = 'example@example.com';
    window.location.href = `mailto:${emailAddress}`
    console.log(text)
}

export const Footer: React.FC<Props> = ( { link1, link2, link3 } ) => {

    return (
        <footer>
            <div className='center'>
                <Icon className='icon' 
                icon="ph:github-logo-thin" height="39" 
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                    click1(e, link1, 'clicked github')
                }}/>
                <Icon className='icon' 
                icon="ph:linkedin-logo-thin" height="42" 
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                    click2(e, link2, 'clicked linkedin')
                }}/>
                <Icon className='icon' 
                icon="ic:baseline-email" height="42" 
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                    click3(e, link3, 'clicked email')
                }}/>
            </div>
            <p>site by chavez</p>
        </footer>
    )
}