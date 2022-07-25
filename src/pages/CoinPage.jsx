import { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'
import axios from 'axios'
import MktAnalysis from '../components/MktAnalysis'
import { Sparklines } from 'react-sparklines'
import { SparklinesLine } from 'react-sparklines'
import { FaTwitter, FaReddit } from 'react-icons/fa'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { AiOutlineStar } from 'react-icons/ai'



function CoinPage() {

    const [coin, setCoin] = useState({})

    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true'

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoin(response.data)
        })
    }, [url])

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str
        }
    };

    return (
        <>
            <div className='bg-base-200 py-10 border-b border-primary h-72'>
                <div className='px-8 md:px-20 grid grid-cols-2 text-5xl md:text-6xl tracking-tight'>
                    <div>
                        <div className='flex items-center'>
                            <p className='bg-base-100 border border-primary px-3 py-1 text-sm mono uppercase'>Rank #{coin.market_cap_rank}</p>
                        </div>
                        <div className="flex font-extrabold mt-2 items-center">
                            <img src={coin.image?.small} alt='/' className='h-full mr-2' />
                            <p>{coin.name}</p>
                        </div>
                        <div className='hidden sm:flex mt-3'>
                            <p className='text-xs font-bold tracking-normal bg-base-100 py-1 px-2 border border-primary'><AiOutlineStar size={16} /></p>
                            <p className='ml-1 text-xs font-bold tracking-normal bg-base-100 py-1 px-2 border border-primary'>{coin.categories}</p>
                            <a href={coin.links?.homepage[0]} target="_blank" rel="noreferrer noopener">
                                <p className='ml-1 text-xs font-bold tracking-normal bg-base-100 py-1 px-2 border border-primary'>{coin.links?.homepage[0].slice(7)}</p>
                            </a>
                            <a href={coin.links?.subreddit_url} target="_blank" rel="noreferrer noopener">
                                <p className='ml-1 text-xs font-bold tracking-normal bg-base-100 py-1 px-2 border border-primary'><FaReddit size={16} /></p>
                            </a>
                            <a href={coin.links?.twitter_screen_name} target="_blank" rel="noreferrer noopener">
                                <p className='ml-1 text-xs font-bold tracking-normal bg-base-100 py-1 px-2 border border-primary'><FaTwitter size={16} /></p>
                            </a>
                        </div>
                    </div>
                    <div className="font-bold sans text-right text-5xl flex flex-col items-end">
                        <div className='text-2xl opacity-50'>{coin.symbol?.toUpperCase()}/USD</div>
                        <div className='mt-1'>${coin.market_data?.current_price.usd.toLocaleString()}</div>
                        {coin.market_data?.price_change_percentage_24h > 0 ? (
                            <div className='text-base bg-success text-base-200 px-3 py-1 uppercase mt-2 rounded tracking-wide'>{coin.market_data?.price_change_percentage_24h.toFixed(2)}% <TiArrowSortedUp className='inline' /></div>
                        ) : (
                            <div className='text-base bg-warning text-base-200 px-3 py-1 uppercase mt-2 rounded tracking-wide'>{coin.market_data?.price_change_percentage_24h.toFixed(2)}% <TiArrowSortedDown className='inline' /></div>
                        )}
                    </div>
                </div>
            </div>

            {/*Market Analysis */}
            <MktAnalysis coin={coin} />

            {/* Description + Chart */}
            <div className='px-8 md:px-20 my-10'>
                <p className='text-sm opacity-50'>{truncateString(coin.description?.en, 300)} <label for="read-more-modal" class="underline cursor-pointer">Read More</label></p>
                <div className='mt-14'>
                    <h2 className="text-center sm:text-right font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight">Currency Converter</h2>
                    <div className='grid grid-cols-2 mt-8 bg-base-200 border border-primary'>
                        <div className='border-r border-primary px-10 py-5'>
                            <div className='flex items-center space-x-3'>
                                <div className='avatar'>
                                    <div className='rounded-full w-8 h-8'>
                                        <img src={coin.image?.small} alt={coin.id} />
                                    </div>
                                </div>
                                <div>
                                    <div className='font-bold'>
                                        {coin.name}
                                    </div>
                                    <div className='text-2xs uppercase opacity-50'>
                                        {coin.symbol}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-10 py-5'>
                            <div className='flex items-center space-x-3'>
                                <div className='avatar'>
                                    <div className='rounded-full w-8 h-8'>
                                        <img src={coin.image?.small} alt={coin.id} />
                                    </div>
                                </div>
                                <div>
                                    <div className='font-bold'>
                                        United States Dollar
                                    </div>
                                    <div className='text-2xs uppercase opacity-50'>
                                        USD
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <h2 className="text-center sm:text-left font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight">Chart</h2>
                    <div className='mt-8'>
                        <Sparklines data={coin.market_data?.sparkline_7d.price} width={400}>
                            <SparklinesLine color='green' />
                        </Sparklines>
                    </div>
                </div>
            </div>

            {/* Description Modal */}
            <input type="checkbox" id="read-more-modal" class="modal-toggle" />
            <label for="read-more-modal" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <h2>About <span className='font-bold'>{coin.name}</span></h2>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(coin.description ? coin.description?.en : ''), }} class="text-xs pt-1"></p>
                </label>
            </label>
        </>
    )
}

export default CoinPage