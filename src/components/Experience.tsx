import React from "react";
import gamefamLogo from './gamefamLogo.jpg';
import dubitLogo from './dubitLogo.jpg';
import kartaLogo from './kartaLogo.png';
import unicorncreakLogo from './unicorncreakLogo.png';

export const Experience: React.FC = () => {
    const imageStyle = {
        height: '100px',
        margin: '10px'
      };

      const divStyle = {
        width: 'fit-contnet',
        
      }
    
    return (
        <div>
            <div className='experience--title'>
                <b>Commercial Experience</b>
            </div>

            <div className='experience--container'>
                <div className='experience--divs'><img src={gamefamLogo} alt="Gamefam Logo" style={imageStyle} /></div>
                <div className='experience--divs'><img src={dubitLogo} alt="Dubit Games Logo" style={imageStyle} /></div>
                <div className='experience--divs'><img src={kartaLogo} alt="Karta Creative Logo" style={imageStyle} /></div>
                <div className='experience--divs'><img src={unicorncreakLogo} alt="unicorn creak. Logo" style={imageStyle} /></div>
            </div>
        </div>
    )
}