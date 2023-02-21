import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TitleNav = ({title}) => {
    return(
        <div className='h-25 flex flex-col sm:flex-row items-center justify-between px-20 '>

            <div className="flex items-center text-2xl gap-2">
                <FontAwesomeIcon icon="fa-regular fa-circle-left"/>
                <p>{title}</p>
            </div>

            <div className="flex items-center gap-5">
                <div className="py-2 px-3 border-2 border-black rounded-full sm:text-sm flex items-center gap-3 overflow-hidden">
                    <button><FontAwesomeIcon icon="fa-regular fa-magnifying-glass" /></button>
                    <input type="text" placeholder="Search by File ID..." className="focus:outline-none w-full" />
                </div>  
                <button className="flex items-center px-8 py-2 text-sm bg-primary text-white rounded-full hover:opacity-90 transition duration-200 ease-in-out">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                        <p>New file</p>
                    </div>
                </button>
            </div>

        </div>
    );
}

export {TitleNav};