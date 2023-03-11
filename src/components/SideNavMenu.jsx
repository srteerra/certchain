import { Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { 
    PaperAirplaneIcon, 
    Cog6ToothIcon, 
    ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

const SideNavMenu = () => {
    return (
        <Slide direction="up" duration={500} className="w-2/4 absolute -top-56 right-0 p-5 min-[540px]:hidden text-white">
            <div>
                <ul className="flex flex-col items-end gap-5">
                    <li className="p-2 bg-primary inline-block rounded-full"><NavLink to="/l"><PaperAirplaneIcon className='h-8 w-8'/></NavLink></li>
                    <li className="p-2 bg-primary inline-block rounded-full"><NavLink to="/b"><Cog6ToothIcon className='h-8 w-8'/></NavLink></li>
                    <li className="p-2 bg-primary inline-block rounded-full"><NavLink to="#"><ArrowLeftOnRectangleIcon className='h-8 w-8'/></NavLink></li>
                </ul>
            </div>
        </Slide>
    );
}

export {SideNavMenu};