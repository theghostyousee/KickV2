import React, { useState, useEffect } from 'react';
import './main.css'
import Arbitrum from './tasd.png'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './dext.png'
import ETH from './eths.png'
import Burn from './n.png'
import axios from 'axios';



function main() {

    const openTwitter = () => {
        window.open("https://twitter.com/kickcoinarb");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=Are%20you%20retarded%3F%0D%0A%0D%0AMake%20me%20rich%20with%20%40CycleSolana&")
    }
    const telegram = () => {
        window.open("https://t.me/SuperCycleSolana")
    }

  return (
    <div className='wrap'>

        <div className='title'>
            <h1> SUPERCYCLE IS <br/>COMING</h1>
        </div>

        <div className='paragraph'>
            <p>Did you believe in the supercycle? Are you retarded?</p>
        </div>

        <div className='buts'>
            <button onClick={tweet}>Proof of $KICK</button>

        </div>

        <div className='little-title'>
            <p></p>
            <div className='picture'>
                <img src={Arbitrum} onClick={telegram}></img>
            </div>
        </div>

        <ul className='socials'>
            {/* <li>
                <img src={Telegram} onClick={telegram}></img>
            </li> */}
            {/* <li>
                <img src={Discord}></img>
            </li> */}
        </ul>
    </div>
  )
}

export default main