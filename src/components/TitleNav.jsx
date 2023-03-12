import { 
    MagnifyingGlassIcon,
    ArrowLeftCircleIcon
} from '@heroicons/react/24/outline';
import { PlusCircleIcon } from '@heroicons/react/24/solid';


const TitleNav = ({title}) => {
    return(
        <div className='h-25 flex flex-col md:flex-row items-center justify-between px-5 sm:px-20'>

            {/* // * New file button appears when screen is md */}

            <div className="flex justify-center items-center text-2xl w-full sm:w-auto gap-3 my-5">
                <div className='flex items-center gap-2'>
                    <ArrowLeftCircleIcon className="h-8 w-8"/>
                    <h1 className='font-bold'>{title}</h1>
                </div>
                <div className='flex md:hidden'>
                    <button className="flex items-center px-8 py-2 text-sm bg-primary text-white rounded-full hover:opacity-90 transition duration-200 ease-in-out">
                        <div className="flex items-center gap-2">
                            <PlusCircleIcon className="h-5 w-5"/>
                            <p>New file</p>
                        </div>
                    </button>
                </div>
            </div>

            {/* // * New file button desappears when screen is md */}

            <div className="flex items-center gap-1 lg:gap-5">
                <div className="py-2 px-3 border-2 border-black rounded-full text-sm flex items-center gap-3 overflow-hidden">
                    <button><MagnifyingGlassIcon className="h-5 w-5"/></button>
                    <input type="text" placeholder="Search by File ID..." className="focus:outline-none w-1/2 md:w-full" />
                </div>  
                <button className="hidden md:flex items-center px-8 py-2 text-sm bg-primary text-white rounded-full hover:opacity-90 transition duration-200 ease-in-out">
                    <div className="flex items-center gap-2">
                        <PlusCircleIcon className="h-5 w-5"/>
                        <p>New file</p>
                    </div>
                </button>
            </div>

        </div>
    );
}

export {TitleNav};