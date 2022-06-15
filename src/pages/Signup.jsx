import { Link } from 'react-router-dom'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BiShow } from 'react-icons/bi'

function Signup() {
    return (
        <>
            <input type="checkbox" id="signup-modal" className="modal-toggle" />
            <div id='signup-modal' className="modal">
                <div className="w-full flex max-w-sm mx-auto bg-base-100 border border-primary">
                    <div className="relative px-6 py-8 md:px-8 w-full">
                        <div className='absolute top-2 right-2'>
                            <label for="signup-modal" className="btn btn-secondary btn-sm border-none">x</label>
                        </div>
                        <p className="text-xl text-center">Welcome to,</p>
                        <h2 className="mono tracking-tighter text-3xl font-semibold text-center mb-1">CRYPTY.</h2>
                        <Link to='/'><button className="flex w-full items-center justify-center mt-4 transition-colors duration-200 transform border border-primary hover:bg-primary hover:text-base-100">
                            <span className="w-5/6 px-4 py-3 font-bold text-center">Sign Up with Google</span>
                        </button></Link>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b border-primary opacity-50 lg:w-1/4"></span>

                            <p className="text-xs text-center uppercase mono">or sign up with email</p>

                            <span className="w-1/5 border-b border-primary opacity-50 lg:w-1/4"></span>
                        </div>
                        <div className="mt-4 relative">
                            <label className="block mb-1 text-xs" for="LoggingEmailAddress">Email Address</label>
                            <input id="LoggingEmailAddress" className="input input-bordered input-primary rounded-none w-full px-4 py-2 bg-base-200 border border-primary" type="email" />
                            <span className="absolute text-gray-500 pointer-events-none top-9 right-4">
                                <MdOutlineAlternateEmail />
                            </span>
                        </div>
                        <div className="mt-2 relative">
                            <div className="form-control">
                                <label className="block mb-1 text-xs" for="loggingPassword">Password</label>
                            </div>
                            <input id="" className="input input-bordered input-primary rounded-none w-full px-4 py-2 bg-base-200 border border-primary" type="password" />
                            <span className="absolute text-gray-500 pointer-events-none top-9 right-4">
                                <BiShow size={18} />
                            </span>
                            <label className="text-xs" for="loggingPassword">Strength:</label>
                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b border-primary opacity-50 lg:w-1/4"></span>
                                <p className="text-xs text-center uppercase mono">Acknowledge the formalities</p>
                                <span className="w-1/5 border-b border-primary opacity-50 lg:w-1/4"></span>
                            </div>
                            <div className="form-control mt-1 text-2xs">
                                <label className="label cursor-pointer pt-3">
                                    <span>I agree to Crypty's<a href='' className='font-bold pl-1 hover:underline'>Terms of Service & Privacy Policy</a></span>
                                    <input type="checkbox" className="flex checkbox checkbox-xs" />
                                </label>
                                <label className="label cursor-pointer pt-0">
                                    <span>I would like to sign up to the<a href='' className='font-bold pl-1 hover:underline'>Crypty Newsletter</a></span>
                                    <input type="checkbox" className="flex checkbox checkbox-xs" />
                                </label>
                            </div>
                        </div>
                        <div className="mt-5">
                            <Link to='/account'>
                                <label for='signup-modal'>
                                    <button className="w-full btn btn-primary mono">Sign Up!</button>
                                </label>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup