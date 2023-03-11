import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

//Input Text without icon
function InputText({placeholder}){
    return(
        <input type="text" placeholder={placeholder} className="py-3 px-5 border-2 w-full border-black rounded-full" />
    );
}


//Input Search with icon
function InputSearch({placeholder}){
    return(
        <div className="py-3 px-5 border-2 border-black rounded-full sm:text-lg flex items-center gap-3 overflow-hidden ">
            <button><MagnifyingGlassIcon className="h-6 w-6"/></button>
            <input type="text" placeholder={placeholder} className="focus:outline-none w-full" />
        </div>
    );
}

export {InputText, InputSearch};