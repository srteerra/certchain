import { Zoom } from "react-awesome-reveal";
import { 
    ArrowUpOnSquareIcon,
    BuildingLibraryIcon,
    DocumentDuplicateIcon,
    Square3Stack3DIcon
} from '@heroicons/react/24/outline';

function CardUpload({title, subTitle}) {
    return(
    <Zoom className="flex items-end bg-yellow-200 rounded-3xl w-full h-full">
        <div className='flex justify-between w-10/12 mx-auto py-6'>
            <div className=''>
                <h2 className='font-bold'>{title}</h2>
                <p className=''>{subTitle}</p>
            </div>
            
            <div className='flex items-center'>
                <div className='bg-white rounded-xl p-3'>
                    <ArrowUpOnSquareIcon className='h-6 w-6'/>
                </div>
            </div>
        </div>
    </Zoom>
    );
}

function CardOrganization({title, subTitle}){
    return(
        <Zoom delay={100} className="flex items-end bg-orange-200 rounded-3xl w-full h-full">
            <div className='flex justify-between w-10/12 mx-auto py-6'>
                <div className=''>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='text-[10px]'>{subTitle}</p>
                </div>

                <div className='flex items-center'>
                    <div className='bg-white rounded-xl p-3'>
                        <BuildingLibraryIcon className='h-6 w-6'/>
                    </div>
                </div>
            </div>
        </Zoom>
    );
}

function CardDocuments({title, subTitle}){
    return(
        <Zoom delay={200} className="flex items-end bg-cyan-300 rounded-3xl w-full h-full">
            <div className='flex justify-between w-10/12 mx-auto py-6'>
                <div className=''>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='text-[10px]'>{subTitle}</p>
                </div>

                <div className='flex items-center'>
                    <div className='bg-white rounded-xl p-3'>
                        <DocumentDuplicateIcon className='h-6 w-6'/>
                    </div>
                </div>
            </div>
        </Zoom>
    );
}

function CardPlan({title, subTitle}){
    return(
        <Zoom delay={300} className="flex items-end bg-yellow-200 rounded-3xl w-full h-full">
            <div className='flex justify-between w-10/12 mx-auto py-6'>
                <div className=''>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='text-[10px]'>{subTitle}</p>
                    </div>

                    <div className='flex items-center'>
                    <div className='bg-white rounded-xl p-3'>
                        <Square3Stack3DIcon className='h-6 w-6'/>
                    </div>
                </div>
            </div>
    </Zoom>
    );

}

function DocumentCard({document}) {
    return(
        <div className='bg-slate-200 w-full h-full flex items-end'>
            <div className='text-start w-5/6 mx-auto'>
                <h1>{ document.title }</h1>
                <p>{ document.text }</p>
            </div>
        </div>
    )
}

export {
    CardUpload, 
    CardOrganization, 
    CardDocuments,
    CardPlan,
    DocumentCard
};
