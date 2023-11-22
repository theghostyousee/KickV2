import React, { useState, useEffect } from 'react';
import './main.css'
import Arbitrum from './arb.svg'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './dext.png'
import ETH from './eths.png'
import Burn from './n.png'
import axios from 'axios';




function Temp() {

    const openTwitter = () => {
        window.open("https://twitter.com/ninjaladyeth");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=I%20am%20burning%20my%20identity%20for%20%40ninjaladyeth%20&")
    }
    const telegram = () => {
        window.open("https://t.me/ReBurnEth")
    }

    const dextools = () => {
        window.open("https://www.dextools.io/app/en/ether/pair-explorer/")
    }

    const [ethBalance, setEthBalance] = useState('Loading...');

    
    useEffect(() => {
        const fetchEthBalance = async () => {
            const apiKey = '5GDNPU26GA86ERHIKCZ6H52MKGKUCZE4Q3';
            const walletAddress = '0x62b988CcDb154F366Cd9E2cba3E9B9136a5aF4E5';
            const url = `https://api.etherscan.io/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${apiKey}`;

            try {
                const response = await axios.get(url);
                const balanceInWei = response.data.result;
                const balanceInEth = balanceInWei / 1e18;
                setEthBalance(balanceInEth.toFixed(4)); 
            } catch (error) {
                console.error('Error fetching ETH balance:', error);
                setEthBalance('Failed to load');
            }
        };

        fetchEthBalance();
    }, []);

    

  return (
    <div className='wrap'>
        
        <div className='title'>
            <h1>BUYBACK WALLET</h1>
            <p>contract: 0xB4A5CD27B1364f01be93819Cdd9Ea2ffA529A61C</p>
        </div>

        <div className='paragraph'>
            {/* <h2>ETH Balance: {ethBalance} ETH</h2> */}
        </div>

        <div className='buts'>
            <button onClick={tweet}> {ethBalance} ETH</button>
            <button onClick={tweet}> NAN $BURN</button>
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
            <li onClick={telegram}>
                <img src={Telegram} ></img>
            </li>
            <li onClick={dextools}>
                <img src={Discord}></img>
            </li>
        </ul>
    </div>
  )
}

export default Temp