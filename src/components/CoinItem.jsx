import { AiOutlineStar } from 'react-icons/ai'
import { Sparklines } from 'react-sparklines'
import { SparklinesLine } from 'react-sparklines'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

function CoinItem({coin}) {

  return (
    <tr className="h-[70px] bg-base-200 border-b border-base-300 hover:bg-gray-50 last-of-type:border-primary">
        <td className="sans pl-6">
            <AiOutlineStar className='hover:text-primary duration-200'/>   
        </td>
        <td className="sans pr-2">
           {coin.market_cap_rank}
        </td>
        <td className="font-medium whitespace-nowrap">
            <div className='flex items-center space-x-3'>
                <div className='avatar'>
                    <div className='rounded-full w-8 h-8'>
                        <img src={coin.image} alt={coin.id} />
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
        </td>
        <td className="sans">
            ${coin.current_price.toLocaleString()}
        </td>
        <td className="hidden md:table-cell sans">
            {coin.price_change_percentage_24h > 0 ? (
                <p className='text-success'>{coin.price_change_percentage_24h.toFixed(2)}% <TiArrowSortedUp className='inline' /></p>
            ) : (
                <p className='text-warning'>{coin.price_change_percentage_24h.toFixed(2)}% <TiArrowSortedDown className='inline' /></p>
            )}
        </td>
        <td className="hidden md:table-cell sans">
            {coin.ath_change_percentage > -25 ? (
                <p>{coin.ath_change_percentage.toFixed(2)}%</p>
            ) : (
                <p className='text-warning'>{coin.ath_change_percentage.toFixed(2)}%</p>
            )}
        </td>
        <td className="sans">
            ${coin.market_cap.toLocaleString()}
        </td>
        <td className="hidden sm:table-cell sans pr-1">
            <Sparklines data={coin.sparkline_in_7d.price}>
                <SparklinesLine color='green' />
            </Sparklines>
        </td>
    </tr>
  )
}

export default CoinItem