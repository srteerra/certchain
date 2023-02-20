
import { InputSearch } from "../components/Input.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TitleNav = ({title}) => {
    return(
<div className='h-25 flex items-center'>
            <nav className='flex justify-between px-8 '>
            <div className="items-center hidden lg:flex gap-2">
                <button href="/"><FontAwesomeIcon icon="fa-solid fa-circle-left" className="w-5 h-5"/></button>
                <h1>{title}</h1>
            </div>
            
            <div>

            </div>
            </nav>
        </div>
    );
}

export {TitleNav};