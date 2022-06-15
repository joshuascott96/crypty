import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { FaInstagram, FaTwitter, FaBars } from 'react-icons/fa'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="sticky top-0 z-50 border-b border-primary mono px-8 uppercase md:px-20 py-6 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost rounded-none lg:hidden">
                        <FaBars />
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content border-[1px] border-primary mt-3 p-2 shadow bg-base-100 rounded-none w-52">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/'><li><a>Crypto</a></li></Link>
                        <Link to='/'><li><a>NFT</a></li></Link>
                        <Link to='/'><li><a>Contact</a></li></Link>
                    </ul>
                </div>
                <Link to='/'><h1 className='pl-4 lg:pl-0 logo-nav'>Crypty.</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/'><li><a>Home</a></li></Link>
                    <Link to='/'><li><a>Crypto</a></li></Link>
                    <Link to='/'><li><a>NFT</a></li></Link>
                    <Link to='/'><li><a>Contact</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/'><button className='hidden sm:flex px-4'><FaInstagram /></button></Link>
                <Link to='/'><button className='hidden sm:flex pr-8'><FaTwitter /></button></Link>
                <label for='signup-modal' className="btn modal-button btn-primary mr-3">Sign Up</label>
                <label for='login-modal' className="btn modal-button btn-secondary"><AiOutlineUser size={20} /></label>
            </div>
        </div>
    )
}

export default Navbar