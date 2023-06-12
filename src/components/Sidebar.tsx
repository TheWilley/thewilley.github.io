import { IconDefinition, faBlog, faHammer, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Sidebar() {
    function SidebarItem(props: {link_to: string, icon: IconDefinition, text: string}) {
        return (
            <Link to={props.link_to}> <li className='text-gray-400 p-1 pl-0 m-1 rounded-lg text-xl hover:bg-gray-700 hover:text-white transition'> <span className='inline-flex'> <FontAwesomeIcon icon={props.icon} className='ml-2' /> <span className='pl-2 hidden group-hover:block'>{props.text}</span></span> </li></Link>
        )
    }

    return (
        <nav className='h-screen bg-neutral-950 text-gray-500 fixed group w-16 ease-out transition-all duration-150 hover:w-48 overflow-hidden z-10'>
            <ul className='p-1 ml-1'>
                <SidebarItem link_to='/' icon={faHouse} text='Home' />
                <SidebarItem link_to='/blog' icon={faBlog} text='Blog' />
                <SidebarItem link_to='/projects' icon={faHammer} text='Projects' />
            </ul>
        </nav>
    )
}

export default Sidebar