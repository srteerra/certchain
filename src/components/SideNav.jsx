import logo from '.././assets/logos/side-nav-logo.png';
const menu = 'https://cdn-icons-png.flaticon.com/512/4254/4254068.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideNav = () => {
    // Active class for nav links
        const linkClass = ({ isActive }) => (isActive ? "opacity-100 translate-y-6" : 'opacity-50');
    return (
        <nav className='flex sm:flex-col max-[540px]:justify-center justify-between text-white max-[540px]:w-full w-10/12 sm:w-full py-6 sm:py-14 text-2xl'>
            <div>
                <ul className='flex items-center sm:flex-col gap-10 '>
                    <li><NavLink to="/"><img src={ logo } alt="logo" className='mx-auto min-w-[40px]' /></NavLink></li>
                    <li><NavLink className={linkClass} to="/"><FontAwesomeIcon icon="fa-solid fa-house" /></NavLink></li>
                    <li><NavLink className={linkClass} to="/documents"><FontAwesomeIcon icon="fa-solid fa-folder-open" /></NavLink></li>
                    <li><NavLink className={linkClass} to="/d"><FontAwesomeIcon icon="fa-solid fa-building-columns" /></NavLink></li>
                    <FontAwesomeIcon icon="fa-solid fa-bars" className="min-[540px]:hidden" />
                </ul>
            </div>
            <div className='flex items-center sm:justify-center'>
                <ul className='max-[540px]:hidden flex sm:flex-col gap-10'>
                    <li><NavLink className={linkClass} to="/l"><FontAwesomeIcon icon="fa-solid fa-paper-plane" /></NavLink></li>
                    <li><NavLink className={linkClass} to="/b"><FontAwesomeIcon icon="fa-solid fa-gear"  /></NavLink></li>
                    <li><NavLink to="#"><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" /></NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export {SideNav};