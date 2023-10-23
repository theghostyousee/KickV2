import React from 'react'
import './main.css'
import Arbitrum from './arb.svg'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './socials-discord.svg'
import Medium from './socials-medium.svg'



function main() {

    const openTwitter = () => {
        window.open("https://twitter.com/XMarioERC");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=This%20is%20my%20registration%20for%20%40XMarioERC%20airdrop%20%F0%9F%AA%99&")
    }
    const telegram = () => {
        window.open("https://t.me/XMarioERC")
    }

  return (
    <div className='wrap'>

        <div className='title'>
            <h1>$XMARIO IS <br/>COMING</h1>
        </div>

        <div className='paragraph'>
            <p>REGISTER FOR THE BIGGEST AIRDROP TOKEN NOW!</p>
        </div>

        <div className='buts'>
            <button onClick={tweet}>Proof of $MARIO</button>
            
        </div>

        <div className='little-title'>
            {/* <p>NETWORKS SUPPORTED</p> */}

        </div>


        <ul className='socials'>
            <li onClick={openTwitter}>
                <img src={Twitter}></img>
            </li>
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