// images
import logo from '.././assets/logos/logo-light.png';
const profile = 'https://cdn-icons-png.flaticon.com/128/666/666201.png';
const menu = 'https://cdn-icons-png.flaticon.com/512/4254/4254068.png';

// Button
import { PrimaryButton_md_fill } from './PrimaryButton';

function HeaderGuess() {

    function handleConnectWallet() {
        console.log('Connect wallet');
    }

    return (
        <header className='h-28 flex items-center'>
            <nav className='flex justify-between px-6 w-11/12 mx-auto'>
                <img src={ logo } alt="logo" className='w-[200px]' />
                <div className="items-center hidden lg:flex">
                    <ul className='flex items-center gap-5 text-primary font-bold'>
                        {[
                            ['Home', '/'],
                            ['What\'s Certchain?', '/'],
                            ['Pricing', '/'],
                            ['Learn', '/'],
                        ].map(([text, href]) => (
                            <li key={text} className='flex items-center hover:cursor-pointer hover:text-slate-400 transition'><a href={href}>{text}</a></li>
                        ))}
                        <li className='hover:cursor-pointer'><PrimaryButton_md_fill text={"Connect wallet"} event={handleConnectWallet} /></li>
                    </ul>
                </div>
                <div className='lg:hidden hover:cursor-pointer flex items-center'>
                    <img className='w-[40px]' src={menu} alt="menu" />
                </div>
            </nav>
        </header>
    );
}

function HeaderLogged({userName}) {
    return (
        <header className='h-28 flex items-center font-bold'>
            <nav className='flex justify-between px-6 w-11/12 mx-auto'>
                <div className='flex items-center'>
                    <p>👋 Welcome, {userName || 'user'}!</p>
                </div>
                <div>
                    <div className='flex gap-5 items-center'>
                        <div className='w-[10px] h-[10px] rounded-full bg-informative'></div>
                        <p>{userName || "user"}</p>
                        <img className='w-[50px]' src={profile} alt="profile" />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export {HeaderGuess, HeaderLogged};
