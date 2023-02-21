import { NavLink } from 'react-router-dom';
const HiddenMenu = () => {
    return (
        <div>
            <ul className='flex items-center gap-5 text-black font-bold'>
                {[
                    ['Home', '/'],
                    ['What\'s Certchain?', '/'],
                    ['Pricing', '/'],
                    ['Learn', '/'],
                ].map(([text, href]) => (
                    <li key={text} className='flex items-center hover:cursor-pointer hover:text-slate-400 transition'><NavLink to={href}>{text}</NavLink></li>
                ))}
            </ul>
        </div>
    );
}

export default HiddenMenu;