import React from "react";
import { Project1 } from './Project1'
import { Project2 } from './Project2'
import { Project3 } from "./Project3";

export const Body: React.FC = () => {
    
    return (
        <div className='body--container' >
            <div className='project--divs'>
                <Project1 link1='https://github1s.com/spumdonut/takedeer' name='takedeer'/>
            </div>

            <div className='project--divs'>
                <Project2 link1='https://github.com/smellycyborg/wall-run-handle/blob/main/wallRunHandler.lua' name='slash shot'/>
            </div>

            <div className='project--divs'>
                <Project3 link1='https://github.com/smellycyborg/trade-inventory-service/blob/main/InventoryService.lua' name='sumo ball'/>
            </div>
        </div>
    )
}