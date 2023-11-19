import React from 'react'
import './main.css'
import Arbitrum from './arb.svg'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './socials-discord.svg'
import ETH from './eths.png'
import Burn from './n.png'



function main() {

    const openTwitter = () => {
        window.open("https://twitter.com/ninjaladyeth");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=I%20am%20burning%20my%20identity%20for%20%40ninjaladyeth%20&")
    }
    const telegram = () => {
        window.open("https://t.me/ReBurnEth")
    }

  return (
    <div className='wrap'>

        <div className='title'>
            <h1>BURN THIS SH*T</h1>
        </div>

        <div className='paragraph'>
            <p>Join the $BURN industry launching soon on Ethereum</p>
        </div>

        <div className='buts'>
            <button onClick={tweet}>Proof of $BURN</button>
            
        </div>

        <div className='little-title'>
    
            <div className='picture'>
                <img src={ETH}></img>
            </div>
        </div>

        <ul className='socials'>
            {/* <li onClick={openTwitter}>
                <img src={Twitter}></img>
            </li> */}
            <li onClick={telegram}>
                <img src={Telegram} ></img>
            </li>
            {/* <li>
                <img src={Discord}></img>
            </li> */}
        </ul>
    </div>
  )
}

export default main