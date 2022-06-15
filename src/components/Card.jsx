import { BiArrowToRight } from 'react-icons/bi'

function Card({ coin, idx }) {
    return (
        <div key={idx} className='flex justify-between border border-primary bg-base-200'>
            <div className='grid grid-cols-8'>
                <div className='col-span-2 bg-base-100'>
                    <img src={coin.item.small} className='mx-auto my-3 rounded-full' alt={coin.id} />
                </div>
                <div className='col-span-4 bg-base-300 pl-4 py-3 border-l border-primary'>
                    <p className='font-bold'>
                        {coin.item.name}
                    </p>
                    <p className='text-xs text-left uppercase opacity-50'>
                        {coin.item.symbol}
                    </p>
                    <div className=' flex items-center mt-3'>
                        <p className='sans text-xs text-left'>
                            {coin.item.price_btc.toFixed(7)}
                        </p>
                        <img
                            className='w-4 ml-2'
                            src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                            alt='/'
                        />
                    </div>
                    <p className='text-xs text-left opacity-60 pt-2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi autem laboriosam vel voluptates suscipit praesentium beatae corporis provident ab eligendi.
                    </p>
                </div>
                <div className='col-span-2 bg-base-300 pb-2 pt-1 pr-2 grid content-between justify-items-end'>
                    <div className=''>
                        <span className="badge bg-primary text-base-100 text-2xs rounded-none border-primary sans font-bold">{idx + 1}</span>
                    </div>
                    <div className=''>
                        <button className='btn btn-sm btn-secondary text-xs flex'><BiArrowToRight size={15} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card