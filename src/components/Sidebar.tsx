import { faBlog, faHammer, faHouse, faBars } from '@fortawesome/free-solid-svg-icons'
import { Sidebar as SidebarPro, Menu, MenuItem, MenuItemStyles } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Sidebar() {
    const [toggled, setToggled] = useState(false)
    const [broken, setBroken] = useState(false)
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (prefersDark) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, []);

    // Themes
    const themes = {
        light: {
            sidebar: {
                backgroundColor: '#ffffff',
                color: '#607489',
            },
            menu: {
                menuContent: '#fbfcfd',
                icon: '#0098e5',
                hover: {
                    backgroundColor: '#c5e4ff',
                    color: '*',
                },
                disabled: {
                    color: '#9fb6cf',
                },
            },
        },
        dark: {
            sidebar: {
                backgroundColor: '#111111',
                color: '#ffffff',
            },
            menu: {
                menuContent: '#082440',
                icon: '#59d0ff',
                hover: {
                    backgroundColor: '#faf7f7',
                    color: 'black',
                },
                disabled: {
                    color: '#3e5e7e',
                },
            },
        },
    };

    // Menuy items
    const menuItemsStyles: MenuItemStyles = {
        button: {
            '&:hover': {
                backgroundColor: themes[theme].menu.hover.backgroundColor,
                color: themes[theme].menu.hover.color,
            },
        }
    }

    // Renders sidebar
    const renderSidebar = () => {
        return (
            <>
                <div className='fixed h-full z-10'>
                    {broken && <button onClick={() => { setToggled(!toggled) }}> <FontAwesomeIcon className='p-3 text-2xl hover:opacity-100 opacity-60 rounded-br-full rounded-tr-full mt-1 drop-shadow-md bg-white dark:bg-neutral-800 dark:text-white' icon={faBars} /> </button>}
                    <SidebarPro
                        backgroundColor={themes[theme].sidebar.backgroundColor}
                        className='h-full'
                        toggled={toggled}
                        onBackdropClick={() => setToggled(false)}
                        onBreakPoint={setBroken}
                        breakPoint='sm'
                        width='200px'
                        rootStyles={{
                            color: themes[theme].sidebar.color,

                        }}>
                        <Menu menuItemStyles={menuItemsStyles}>
                            <MenuItem onClick={() => { setToggled(false) }} component={<Link to="/" />} icon={<FontAwesomeIcon icon={faHouse} className='ml-2' />}> Home </MenuItem>
                            <MenuItem onClick={() => { setToggled(false) }} component={<Link to="/blog" />} icon={<FontAwesomeIcon icon={faBlog} className='ml-2' />}> Blog </MenuItem>
                            <MenuItem onClick={() => { setToggled(false) }} component={<Link to="/projects" />} icon={<FontAwesomeIcon icon={faHammer} className='ml-2' />}> projects </MenuItem>
                        </Menu>
                    </SidebarPro>
                </div>
            </>
        )
    }

    return (
        <nav className='z-10'>
            <ul>
                {renderSidebar()}
            </ul>
        </nav>
    )
}

export default Sidebar