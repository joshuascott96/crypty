import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'

function UserNavbar() {

    const { logout } = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-secondary mr-2">
                    <AiOutlineUser size={20} />
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content border-[1px] border-primary mt-3 mr-2 p-2 shadow bg-base-100 rounded-none w-52">
                    <Link to='/account'><li className='dropdown-list'>Portfolio</li></Link>
                    <li className='dropdown-list' onClick={handleLogout}>Logout</li>
                </ul>
            </div>
            <div className='indicator'>
                <span class="indicator-item badge badge-secondary px-2">2</span>
                <button className='btn btn-md btn-secondary mono normal-case text-xs'><MdOutlineNotificationsNone size={20} /></button>
            </div>
        </>
    )
}

export default UserNavbar