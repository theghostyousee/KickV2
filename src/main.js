import React from 'react'
import './main.css'
import Arbitrum from './arb.svg'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './socials-discord.svg'
import Medium from './socials-medium.svg'



function main() {

    const openTwitter = () => {
        window.open("https://twitter.com/WeAreSoBackCoin");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=I%27ve%20made%20my%20proof%20for%20%40WeAreSoBackCoin%20%F0%9F%91%80%0D%0A%0D%0A%24WSFB%20Contract%3A%200xa7da32c43ad9cbaa492b6cb0717e9b3b1b944acd%0D%0A%0D%0A%F0%9F%8D%BE%20Launching%20TODAY%20at%201pm%20EST.%0D%0A%0D%0Ahttps%3A%2F%2Ft.me%2FWeAreSoBackCoin&")
    }
    const telegram = () => {
        window.open("https://t.me/XMarioERC")
    }

  return (
    <div className='wrap'>

        <div className='title'>
            <h1>WE ARE SO <br/>FUCKING BACK</h1>
        </div>

        <div className='paragraph'>
            <p>Only Contract: 0xa7da32c43ad9cbaa492b6cb0717e9b3b1b944acd</p>
        </div>

        <div className='buts'>
            <button onClick={tweet}>WE ARE SO BACK</button>
            
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