import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BiShow } from 'react-icons/bi'


function Loginmodal() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { signIn } = UserAuth()
    const navigate = useNavigate()

    const handleModal = () => {
        let modal = document.getElementById('login-modal');
        modal.classList.toggle('modal-toggle');
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try { 
            await signIn(email, password)
            handleModal()
            navigate('/account')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }
    return (
        <>
            <input type="checkbox" id="login-modal" className="modal-toggle hidden" />
            <div className="modal">
                <div className="w-full flex max-w-sm mx-auto bg-base-100 border border-primary">
                    <div className="relative px-6 py-8 md:px-8 w-full">
                        <div className='absolute top-2 right-2'>
                            <label htmlFor="login-modal" className="btn btn-secondary btn-sm border-none">x</label>
                        </div>
                        <h2 className="mono tracking-tighter text-3xl font-semibold text-center">CRYPTY</h2>
                        <p className="text-xl text-center">Welcome back!</p>
                        <Link to='/'><button className="flex w-full items-center justify-center mt-4 transition-colors duration-200 transform border border-primary hover:bg-primary hover:text-base-100">
                            <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                        </button></Link>

                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b border-primary opacity-50 lg:w-1/4"></span>
                            <p className="text-xs text-center uppercase mono">or login with email</p>
                            <span className="w-1/5 border-b border-primary opacity-50 lg:w-1/4"></span>
                        </div>
                        {error ? 
                            <div className="alert alert-warning mt-3 text-sm">
                                <div>
                                    <p>{error}</p> 
                                </div>
                            </div>
                        : null}
                        <form onSubmit={handleSubmit}>
                            <div className="relative mt-4">
                                <label className="block mb-1 text-xs" htmlFor="LoggingEmailAddress">Email Address</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-bordered input-primary rounded-none w-full px-4 py-2 bg-base-200 border border-primary" 
                                    type="email" 
                                    placeholder='Email Address' 
                                    autoComplete='email'
                                />
                                <span className="absolute text-gray-500 pointer-events-none top-9 right-4"><MdOutlineAlternateEmail /></span>
                            </div>
                            <div className="relative mt-4">
                                <div className="flex justify-between">
                                    <label className="block mb-1 text-xs" htmlFor="loggingPassword">Password</label>
                                    <a href="/" className="text-xs hover:underline">Forget Password?</a>
                                </div>
                                <input 
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input input-bordered rounded-none input-primary w-full px-4 py-2 bg-base-200 border border-primary" 
                                    type="password" 
                                    placeholder='Password' 
                                    autoComplete='password'
                                />
                                <span className="absolute text-gray-500 pointer-events-none top-9 right-4">
                                    <BiShow size={18} />
                                </span>
                                <div className="form-control mt-1">
                                    <label className="label cursor-pointer">
                                        <span className="label-text text-xs">Remember me</span>
                                        <input type="checkbox" className="toggle toggle-sm toggle-primary" />
                                    </label>
                                </div>
                            </div>
                            <div className="mt-5">
                                <label htmlFor='login-modal'>
                                    <button className="w-full btn btn-primary mono">Login</button>
                                </label>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/3 border-b border-primary opacity-50 md:w-1/4"></span>
                                <label htmlFor='signup-modal' onClick={handleModal} className="text-xs uppercase mono hover:underline cursor-pointer">or sign up</label>
                                <span className="w-1/3 border-b border-primary opacity-50 md:w-1/4"></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginmodal