import React from 'react'
import './main.css'
import Arbitrum from './arb.svg'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './socials-discord.svg'
import Medium from './socials-medium.svg'
import ETH from "./media/eth.png"



function main() {

    const openTwitter = () => {
        window.open("https://twitter.com/ComputerLeaks");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=Your%20DATA%20has%20been%20leaked%20by%20%40ComputerLeaks%0D%0A%0D%0A%3C%20HELP%20US%20RECOVER%20%3E%20")
    }
    const telegram = () => {
        window.open("https://t.me/ComputerLeaks")
    }

  return (
    <div className='wrap'>

        <div className='title'>
            <h1>COMPUTER LEAKS</h1>
        </div>

 

        <div className='buts'>
            <button onClick={tweet}>WE HAVE LEAKED</button>
            
        </div>

        <div className='title'>

        </div>
        {/* <div className='little-title'>
            <p>NETWORKS SUPPORTED</p>
            <div className='picture'>
                <img src={ETH}></img>
            </div>
        </div> */}

        <ul className='socials'>
            {/* <li onClick={openTwitter}>
                <img src={Twitter}></img>
            </li> */}
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