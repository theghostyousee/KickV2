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
        window.open("https://twitter.com/intent/tweet?text=I%27ve%20made%20my%20proof%20for%20%40WeAreSoBackCoin%20%F0%9F%91%80%0D%0A%0D%0ALaunching%20the%2027th%20October%20at%201pm%20EST.%0D%0A%0D%0Ahttps%3A%2F%2Ft.me%2FWeAreSoBackCoin%0D%0A&")
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
            <p>REGISTER FOR THE BIGGEST AIRDROP TOKEN NOW!</p>
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