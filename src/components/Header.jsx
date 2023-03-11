// images
import logo from '.././assets/logos/logo-light.png';
const profile = 'https://cdn-icons-png.flaticon.com/128/666/666201.png';
const menu = 'https://cdn-icons-png.flaticon.com/512/4254/4254068.png';
import { UserIcon } from '@heroicons/react/24/solid';
// require("dotenv").config();
import Web3 from 'web3';
import { abi, networks } from "../../build/contracts/Certchain.json";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const certchain = new web3.eth.Contract(abi, networks[0]);

// Button
import { PrimaryButton_md_fill } from './PrimaryButton';

function HeaderGuess({ setAccount, setIsconnected}) {

    const handleConnectWallet = async () => {
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);
        setIsconnected(true);
    }

    // Header as a guess user
    return (
        <header className='h-28 flex items-center'>
            <nav className='flex justify-between px-6 w-11/12 mx-auto'>
                <img src={ logo } alt="logo" className='w-[200px]' />
                <div className="items-center hidden lg:flex">
                    <ul className='flex items-center gap-5 text-black font-bold'>
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

// Header as a logged user
function HeaderLogged({account}) {
    return (
        <header className='h-28 flex items-center font-bold'>
            <nav className='flex justify-between px-6 w-11/12 mx-auto'>
                <div className='flex items-center'>
                    <p>👋 Welcome, { 'user'}!</p>
                </div>
                <div>
                    <div className='flex gap-5 items-center'>
                        <div className='hidden min-[500px]:flex items-center gap-2'>
                            <div className='w-[10px] h-[10px] rounded-full bg-informative'></div>
                            <p>{ "user"}</p>
                        </div>
                        <UserIcon className='h-12 w-12' />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export {HeaderGuess, HeaderLogged};
