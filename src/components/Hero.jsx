import { BiFolderPlus, BiLineChart } from 'react-icons/bi'
import Heroimg from './Heroimg'

function Hero() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col justify-center mx-auto lg:flex-row lg:justify-between border-b-[1px] border-primary">
                <div className=" px-8 md:px-20 flex flex-col justify-center p-6 my-8 text-center lg:max-w-3xl lg:text-left">
                    <h1 className="text-5xl font-extrabold sm:text-6xl tracking-tight">Smarter Portfolio Tracking</h1>
                    <p className="my-6 text-md sm:mb-12">We aim to take the stress out of checking your assets multiple times a day by putting your portfolio on autopilot and alerting your attention, only when its needed.
                    </p>
                    <div className="flex flex-col mono space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button className='btn btn-primary'>Create a Portfolio<span className='pl-3'><BiFolderPlus size={18} /></span></button>
                        <button className='btn btn-secondary px-10'>Price Check<span className='pl-3'><BiLineChart size={18} /></span></button>
                    </div>

                    <div className="stats bg-base-200 border-primary border rounded-none mt-10">
                        <div className="stat text-center">
                            <div className="stat-desc">Tracking Over</div>
                            <div className="stat-value">1,000+</div>
                            <div className="stat-desc">Cryptocurrencies</div>
                        </div>
                        <div className="stat text-center">
                            <div className="stat-desc">Watching</div>
                            <div className="stat-value">150+</div>
                            <div className="stat-desc">NFT Projects</div>
                        </div>
                        <div className="stat text-center">
                            <div className="stat-desc">Over</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">New Users</div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex items-center bg-base-300 w-full lg:w-[40%] justify-center lg:border-l-[1px] border-primary">
                    <Heroimg />
                </div>
            </div>
        </div>
    )
}

export default Hero