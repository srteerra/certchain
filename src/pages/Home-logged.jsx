//input
import { InputSearch } from "../components/Input.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Homelogged = () =>{
    return (
        <div className='h-25 flex items-center'>
            <nav className='flex justify-between px-8 '>
            <div className="items-center hidden lg:flex gap-2">
                <a href="/"><FontAwesomeIcon icon="fa-solid fa-circle-left" className="w-5 h-5"/></a>
                <h1>Home</h1>
            </div>
            
            <div>

            </div>
            </nav>
        </div>
    );
}

export default Homelogged;