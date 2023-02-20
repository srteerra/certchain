import logo from '.././assets/logos/side-nav-logo.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideNav = () => {
    return (
        <div className='flex sm:flex-col justify-between w-10/12 sm:w-full py-6 sm:py-14 text-2xl'>
            <div>
                <ul className='flex sm:flex-col gap-10 text-center text-white'>
                    <li><NavLink to="/"><img src={ logo } alt="logo" className='mx-auto' /></NavLink></li>
                    <li><NavLink to="/"><FontAwesomeIcon icon="fa-solid fa-house" /></NavLink></li>
                    <li><NavLink to="/documents"><FontAwesomeIcon icon="fa-solid fa-folder-open" /></NavLink></li>
                    <li><NavLink to=""><FontAwesomeIcon icon="fa-solid fa-building-columns" /></NavLink></li>
                </ul>
            </div>
            <div>
                <ul className='flex sm:flex-col gap-10 text-center text-white'>
                    <li><NavLink to=""><FontAwesomeIcon icon="fa-solid fa-paper-plane" /></NavLink></li>
                    <li><NavLink to=""><FontAwesomeIcon icon="fa-solid fa-gear"  /></NavLink></li>
                    <li><NavLink to=""><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket scale-Y-1" /></NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export {SideNav};