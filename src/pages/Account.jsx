import { UserAuth } from '../context/AuthContext'
import { FiSettings } from 'react-icons/fi'

function Account() {

  const { user } = UserAuth()

  return (
    <>
      <div className='bg-base-200 px-8 md:px-20 py-10 border-b border-primary'>
        <div className='text-center lg:text-left'>
          <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight">My Portfolio</h2>
        </div>
        <div className="pt-3 text-sm text-center lg:text-left">
          <p>Hello <span className='font-bold'>{user.email}</span>! welcome to your portfolio! Here you can track your saved coins and manage your holdings.</p>
        </div>
        <div className='navbar px-0 mt-10'>
          <div className='flex navbar-start'>
            <button className='btn btn-md btn-secondary mono normal-case text-xs mr-2'>Create Portfolio</button>
            <button className='btn btn-md btn-secondary mono normal-case text-xs mr-2'>Alerts</button>
          </div>
          <div className='flex navbar-end'>
            <button className='btn btn-md btn-secondary mono normal-case text-xs'><FiSettings size={20} /></button>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 gap-10 md:px-10 lg:px-20 py-10'>
        <div className='relative overflow-x-auto'>
          <div className='text-center lg:text-left'>
            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight pb-6">Holdings</h2>
          </div>
          <table className="w-full text-sm text-left text-primary">
            <thead className="text-xs text-primary uppercase border-b border-primary h-[50px]">
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Price
                </th>
                <th className="hidden md:table-cell">
                  Buy Price
                </th>
                <th className="hidden md:table-cell">
                  Amount
                </th>
                <th>
                  % Return
                </th>
                <th className="hidden sm:table-cell">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[70px] hover:bg-gray-50 last-of-type:border-primary">
                <td className="font-medium whitespace-nowrap">
                  <div className='flex items-center space-x-3'>
                    <div className='avatar'>
                      <div className='rounded-full w-8 h-8'>
                        img
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>
                        name
                      </div>
                      <div className='text-2xs uppercase opacity-50'>
                        ticker
                      </div>
                    </div>
                  </div>
                </td>
                <td className="sans">
                  price
                </td>
                <td className="hidden md:table-cell sans">
                  purchase
                </td>
                <td className="hidden md:table-cell sans">
                  holdings
                </td>
                <td className="sans">
                  return
                </td>
                <td className="hidden sm:table-cell sans pr-1">
                  actions
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='relative overflow-x-auto'>
          <div className='text-center lg:text-right'>
            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight pb-6">Watch List</h2>
          </div>
          <table className="w-full text-sm text-left text-primary">
            <thead className="text-xs text-primary uppercase border-b border-primary h-[50px]">
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Price
                </th>
                <th className="hidden md:table-cell">
                  Market Cap
                </th>
                <th className="hidden md:table-cell">
                  24Hr %
                </th>
                <th>
                  ATH %
                </th>
                <th className="hidden sm:table-cell">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[70px]  hover:bg-gray-50 last-of-type:border-primary">
                <td className="font-medium whitespace-nowrap">
                  <div className='flex items-center space-x-3'>
                    <div className='avatar'>
                      <div className='rounded-full w-8 h-8'>
                        img
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>
                        name
                      </div>
                      <div className='text-2xs uppercase opacity-50'>
                        ticker
                      </div>
                    </div>
                  </div>
                </td>
                <td className="sans">
                  price
                </td>
                <td className="hidden md:table-cell sans">
                  purchase
                </td>
                <td className="hidden md:table-cell sans">
                  holdings
                </td>
                <td className="sans">
                  return
                </td>
                <td className="hidden sm:table-cell sans pr-1">
                  actions
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='py-10'>

      </div>
    </>
  )
}

export default Account