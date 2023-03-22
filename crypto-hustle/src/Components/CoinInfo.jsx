import React, { useEffect, useState } from "react";
import axios from 'axios'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({ image, name, symbol }) => {
    const [price, setPrice] = useState(null);

    useEffect(() => {

        const getCoinPrice = async () => {
            const response = await axios.get(
                `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&${API_KEY}`
            );
            const json = await response.data;
            setPrice(json);
        };
    
        getCoinPrice().catch(console.error);
    
    }, [symbol]);
    
    return (
        <div>
          {price ? (
            <li className="main-list" key={symbol}>
            <img
                className="icons"
                src={`https://www.cryptocompare.com${image}`}
                alt={`Small icon for ${name} crypto coin`}
            />
            {name} <span className="tab"></span> ${price.USD} USD
            </li>
          ) : 
          null
          }
        </div>
    );
  
};

export default CoinInfo;
