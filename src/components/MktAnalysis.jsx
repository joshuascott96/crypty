import { HiInformationCircle } from 'react-icons/hi'

function MktAnalysis({ coin }) {
    return (
        <div className='-mt-20 px-8 md:px-12'>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 bg-base-100 border border-primary'>
                <div className='py-4 pl-4 border-r border-base-300'>
                    <p className='text-sm opacity-50 tracking-tighter'>Market Cap <HiInformationCircle className='inline ml-1 opacity-50' /></p>
                    <p className='text-xl font-bold sans tracking-tighter'>${coin.market_data?.market_cap.usd.toLocaleString()}</p>
                    <p className='text-sm opacity-50 tracking-tighter mt-5'>Fully Diluted <HiInformationCircle className='inline ml-1 opacity-50' /></p>
                    <p className='text-xl font-bold sans tracking-tighter pt-1'>${coin.market_data?.fully_diluted_valuation.usd.toLocaleString()}</p>
                </div>
                <div className='py-4 pl-4 border-r border-base-300'>
                    <p className='text-sm opacity-50 tracking-tighter'>Max Supply <HiInformationCircle className='inline ml-1 opacity-50' /></p>
                    <p className='text-xl font-bold sans tracking-tighter'>{coin.market_data?.max_supply.toLocaleString()}</p>
                    <p className='text-sm opacity-50 tracking-tighter mt-5'>Circulating Supply <HiInformationCircle className='inline ml-1 opacity-50' /></p>
                    <p className='text-xl font-bold sans tracking-tighter'>{coin.market_data?.circulating_supply.toLocaleString()}</p>
                </div>
                <div className='py-4 pl-4 border-r border-base-300'>
                    <p className='text-sm opacity-50 tracking-tighter'>Daily High</p>
                    <p className='text-xl font-bold sans tracking-tighter'>${coin.market_data?.high_24h.usd.toLocaleString()}</p>
                    <p className='text-sm opacity-50 tracking-tighter mt-5'>Daily Low</p>
                    <p className='text-xl font-bold sans tracking-tighter'>${coin.market_data?.low_24h.usd.toLocaleString()}</p>
                </div>
                <div className='py-4 pl-4'>
                    <p className='text-sm opacity-50 tracking-tighter'>Buy Sentiment <HiInformationCircle className='inline ml-1 opacity-50' /></p>
                    <p className='text-xl font-bold sans tracking-tighter'>{coin.sentiment_votes_up_percentage}%</p>
                    <p className='text-sm opacity-50 tracking-tighter mt-5'>Sell Sentiment <HiInformationCircle className='inline ml-1 opacity-50' /></p>
                    <p className='text-xl font-bold sans tracking-tighter'>{coin.sentiment_votes_down_percentage}%</p>
                </div>
            </div>
        </div>
    )
}

export default MktAnalysis