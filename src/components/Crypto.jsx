import { useState } from 'react'
import { BiSearch, BiTrendingUp } from 'react-icons/bi'
import { TiArrowSortedUp } from 'react-icons/ti'
import { AiFillStar, AiOutlineExclamationCircle } from 'react-icons/ai'
import { HiInformationCircle } from 'react-icons/hi'
import CoinItem from './CoinItem'

function Crypto({ coins }) {

    const [searchText, setSearchText] = useState('')

    return (
        <>
            <div className='text-center lg:text-right mt-20'>
                <h2 className="px-8 md:px-20 font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight">Cryptocurrency Market</h2>
            </div>
            <div className="relative overflow-x-auto lg:px-20">
                <div className='navbar px-0 pt-8'>
                    <div className='hidden sm:flex navbar-start'>
                        <div class="dropdown mono text-xs dropdown-hover">
                            <label tabindex="0" class="btn btn-sm btn-secondary normal-case text-xs mr-1">Blockchain</label>
                            <ul tabindex="0" class="dropdown-content menu mt-1 p-1 bg-base-100 border border-primary w-52">
                                <li><a>Ethereum</a></li>
                                <li><a>Binance Smart Chain</a></li>
                                <li><a>Solana</a></li>
                            </ul>
                        </div>
                        <button className='btn btn-sm btn-secondary mono normal-case text-xs mr-1'>Top Gainers</button>
                        <button className='btn btn-sm btn-secondary mono normal-case text-xs mr-1'>Top Losers</button>
                    </div>
                    <div className="flex mx-auto sm:navbar-end">
                        <label for="table-search" className="sr-only">Search</label>
                        <div className="relative flex w-full sm:w-auto">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <BiSearch size={20} />
                            </div>
                            <input onChange={(e) => setSearchText(e.target.value)} type="text" id="table-search" className="bg-base-200 input input-bordered input-primary text-gray-900 text-sm block w-80 pl-10 p-[0.8rem] rounded-none" placeholder="Search for items" />
                        </div>
                    </div>
                </div>
                <table className="w-full text-sm mt-2 text-left text-primary bg-base-200 border-t lg:border border-primary">
                    <thead className="text-xs text-primary uppercase border-b border-primary h-[50px]">
                        <tr>
                            <th scope="col" className='pl-6'>
                                <AiFillStar />
                            </th>
                            <th>
                                #
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Price
                            </th>
                            <th className="hidden md:table-cell">
                                24Hr %
                            </th>
                            <th className="hidden md:table-cell leading-[0rem]">
                                ATH %
                                <div className="tooltip tooltip-bottom" data-tip="Percentage loss from Cryptocurrency All-Time-High price">
                                    <HiInformationCircle size={18} className='mb-[2px] ml-1 inline opacity-30' />
                                </div>
                            </th>
                            <th className='leading-[0rem]'>
                                Market Cap
                                <div className="tooltip tooltip-bottom" data-tip="Market Capitalisation is the total market value of a cryptocurrencies circulating supply.">
                                    <HiInformationCircle size={18} className='mb-[2px] ml-1 inline opacity-30' />
                                </div>
                            </th>
                            <th className="w-[200px] hidden sm:table-cell">
                                Graph
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.filter((value) => {
                            if (searchText === '') {
                                return value
                            } else if (
                                value.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                            ) {
                                return value
                            }
                        })
                            .map((coin) => (
                                <CoinItem key={coin.id} coin={coin} />
                            ))}
                    </tbody>
                </table>
                <div class="btn-group justify-center lg:justify-end mt-4 mb-10">
                    <button class="btn btn-secondary">1</button>
                    <button class="btn">2</button>
                    <button class="btn">3</button>
                    <button class="btn">4</button>
                </div>
            </div>
        </>
    )
}

export default Crypto