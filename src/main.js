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
        window.open("https://twitter.com/kickcoinarb");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=%24KICK%20is%20taking%20the%20W%20%F0%9F%9F%A2%0D%0A%0D%0AMake%20me%20rich%20with%20%40kickcoinarb%0D%0A")
    }
    const telegram = () => {
        window.open("https://t.me/KickArb")
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
            <li onClick={openTwitter}>
                <img src={Twitter}></img>
            </li>
            <li>
                <img src={Telegram} onClick={telegram}></img>
            </li>
            {/* <li>
                <img src={Discord}></img>
            </li> */}
        </ul>
    </div>
  )
}

export default main