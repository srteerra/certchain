import logo from '.././assets/logos/side-nav-logo.png';
import { NavLink } from 'react-router-dom';
import { SideNavMenu } from './SideNavMenu.jsx';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import { 
    HomeIcon,
    FolderOpenIcon,
    BuildingLibraryIcon, 
    PaperAirplaneIcon, 
    Cog6ToothIcon, 
    ArrowLeftOnRectangleIcon,
    Bars3Icon 
} from '@heroicons/react/24/outline';


const SideNav = () => {
    const [menu, setMenu] = useState(true);

    const handleClick = () => {
        setMenu(!menu);
    }
    // Active class for nav links
    const linkClass = ({ isActive }) => (isActive ? "opacity-100" : 'opacity-50');

    const reload = () => {
        window.location.reload()
    }

    return ( 
        <nav className='flex z-10 sm:flex-col max-[540px]:justify-center justify-between text-white max-[540px]:w-full w-10/12 sm:w-full py-6 sm:py-14 text-2xl relative'>
            <div>
                <Fade duration={500} direction='left' cascade>
                    <ul className='flex items-center sm:flex-col gap-10 '>
                        <li><NavLink to="/"><img src={ logo } alt="logo" className='mx-auto min-w-[40px]' /></NavLink></li>
                        <li><NavLink className={linkClass} to="/"><HomeIcon className='h-8 w-8' /></NavLink></li>
                        <li><NavLink className={linkClass} to="/documents"><FolderOpenIcon className='h-8 w-8'/></NavLink></li>
                        <li><NavLink className={linkClass} to="/d"><BuildingLibraryIcon className='h-8 w-8'/></NavLink></li>
                        <li onClick={() => handleClick()}><Bars3Icon className='h-8 w-8 min-[540px]:hidden hover:cursor-pointer' /></li>
                    </ul>
                </Fade>
            </div>
            <div className='flex items-center sm:justify-center'>
                <Fade direction='left' cascade>
                    <ul className='max-[540px]:hidden flex sm:flex-col gap-10'>
                        <li><NavLink className={linkClass} to="/l"><PaperAirplaneIcon className='h-8 w-8'/></NavLink></li>
                        <li><NavLink className={linkClass} to="/b"><Cog6ToothIcon className='h-8 w-8'/></NavLink></li>
                        <li onClick={reload}><NavLink to="#"><ArrowLeftOnRectangleIcon className='h-8 w-8'/></NavLink></li>
                    </ul>
                </Fade>
            </div>
            { menu ? <SideNavMenu /> : null }
        </nav>
    );
}

export {SideNav};