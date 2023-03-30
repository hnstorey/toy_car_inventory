import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LogInButton';
import LogoutButton from './LogOutButton';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <nav className="flex item-center justify-between flex-wrap bg-red-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to='/' className="font-semibold text-xl tracking-tight hover:italic">Vroom</Link>
        </div>
        <div className="block">
            <button 
                onClick={dropDown}
                className="flex items-center px-3 py-2 text-white 
                border rounded border-white hover:text-yellow-400 hover:border-yellow-400"
                >
                <i className ="fa-sharp fa-solid fa-bars"></i>
            </button>
        </div>
        { isVisible ? ( 
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <button className="p-3 m-5 bg-red-700 justify-center">
                        <div>
                            <Link to='/' onClick={ clicked } className="flex place-items-center mt-4 lg:inline-block lg-mt-0
                            text-white hover:italic mr-4">
                                Home
                            </Link>
                        </div>
                    </button>
                    <button className="p-3 m-5 bg-red-700 justify-center">
                        <div>
                            <Link to='/Dashboard' onClick={ clicked } className="flex place-items-center mt-4 lg:inline-block lg-mt-0
                            text-white hover:italic mr-4">
                                Dashboard
                            </Link>
                        </div>
                    </button>
                    {
                        !isAuthenticated ?
                    <LoginButton />
                    :
                    <LogoutButton />
                    }
                    </div>
            </div>
            ) : (
            <></>
        ) }
    </nav>
  )
}

export default Navbar
