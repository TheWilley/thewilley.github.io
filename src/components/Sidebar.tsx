import { faBars, faClock, faHammer, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react'

function Sidebar() {
    const [sidebarActive, setSidebarActive] = useState(false)

    const renderItems = () => {
        return (
            <>
                <li>
                    <NavLink to="/projects" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-500" : "hover:text-blue-500 transition"
                    }> <FontAwesomeIcon icon={faHammer} onClick={() => setSidebarActive(false)} /> </NavLink>
                </li>
                <li>
                    <NavLink to="/timeline" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-500" : "hover:text-blue-500 transition"
                    }> <FontAwesomeIcon icon={faClock} onClick={() => setSidebarActive(false)} /> </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-500" : "hover:text-blue-500 transition"
                    }> <FontAwesomeIcon icon={faInfoCircle} onClick={() => setSidebarActive(false)} /> </NavLink>
                </li>
            </>
        )
    }

    const renderCollapsedSidebar = () => {
        return (
            <>
                <FontAwesomeIcon icon={faBars} className='absolute right-8 top-6 text-2xl cursor-pointer hover:opacity-70 sm:hidden block' onClick={() => setSidebarActive(true)} />
                <div className={`fixed w-screen h-screen z-10 bg-black opacity-40 sm:hidden block ${!sidebarActive && 'hidden'}`} onClick={() => setSidebarActive(false)} />
                <div className={`fixed right-0 bg-blue-200  dark:bg-neutral-900 h-screen z-10 text-center text-2xl border-left block sm:hidden transition-all overflow-hidden ease-in-out duration-300 ${sidebarActive ? 'w-32' : 'w-0'}`}>
                    <ul className='[&>*]:p-2'>
                        {renderItems()}
                    </ul>
                </div>
            </>
        )
    }

    // Renders sidebar
    const renderSidebar = () => {
        return (
            <>
                {renderCollapsedSidebar()}
                <div className='text-left sm:text-center p-3 sm:text-5xl md:text-7xl text-3xl'>
                    <Link to='/' className='mt-2 font-mono hover:text-blue-500 transition'>TheWilley</Link>
                </div>
                <div className='sm:flex justify-center hidden'>
                    <div className='rounded w-fit text-xl md:text-3xl border border-4 overflow-hidden p-1'>
                        <ul className='flex justify-center [&>*]:p-2'>
                            {renderItems()}
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    return (
        <nav className='z-10 dark:text-white mb-3'>
            <ul>
                {renderSidebar()}
            </ul>
        </nav>
    )
}

export default Sidebar