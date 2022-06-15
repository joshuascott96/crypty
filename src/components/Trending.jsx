import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card';

function Trending() {

  const [trending, setTrending] = useState([])

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins)
    })
  }, [])



  return (
    <div className='w-full h-full bg-base-200 border-t border-primary py-20'>
      <div className='px-8 md:px-20 text-center lg:text-left'>
        <div>
          <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight">Trending Currencies</h2>
        </div>
        <div className='mt-8 grid md:grid-cols-2 text-left lg:grid-cols-3 gap-3'>
          {trending.slice(0, 6).map((coin, idx) => (
            <Card coin={coin} idx={idx} />
          ))}
        </div>
      </div>
      <div className='mt-5 sm:mt-20 px-8 md:px-20 text-center lg:text-right'>
        <div>
          <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight">New Currencies</h2>
        </div>
        <div className='mt-8 grid md:grid-cols-2 text-left lg:grid-cols-3 gap-3'>
          {trending.slice(0, 6).map((coin, idx) => (
            <Card coin={coin} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trending