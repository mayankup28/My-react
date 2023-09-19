import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from "axios"




function Home() {
    let [coin, setCoin] = useState([])
    useEffect(() => {
        let fetchAllCoins = async () => {
            const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20");
            setCoin(data)
            console.log(data)
        }
        fetchAllCoins()
    }, [])
    return (
        <div>
            {
                coin.map((ele) => {
                    return <Product name={ele.name} symbol={ele.symbol} key={ele.id} />
                })
            }
        </div>
    )
}

export default Home