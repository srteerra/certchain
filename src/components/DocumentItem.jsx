import { 
    Square3Stack3DIcon,
    ArrowUpOnSquareIcon,
    PencilIcon,
    TrashIcon
} from "@heroicons/react/24/outline";

const DocumentItem = (props) => {
    return (
        <div className="bg-slate-200 flex justify-between py-3 px-3 rounded-lg">
            <div className="flex gap-2 items-center">
                <div className="bg-slate-700 inline-block p-2 text-white rounded-lg">
                    <Square3Stack3DIcon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-2 text-slate-700">{props.title}</h3>
            </div>
            <ul className="flex gap-2 items-center text-white">
                <li className="bg-slate-700 p-2 rounded-lg hover:opacity-80 hover:cursor-pointer"><ArrowUpOnSquareIcon className="h-6 w-6"/></li>
                <li className="bg-slate-700 p-2 rounded-lg hover:opacity-80 hover:cursor-pointer"><PencilIcon className="h-6 w-6" /></li>
                <li className="bg-red-500 p-2 rounded-lg hover:opacity-80 hover:cursor-pointer"><TrashIcon className="h-6 w-6" /></li>
            </ul>
        </div>
    );
}

export {DocumentItem};