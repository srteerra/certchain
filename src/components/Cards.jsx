import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardUpload({title, subTitle}) {
    return(
    <div className="flex items-end bg-yellow-200 rounded-3xl w-full h-full">
        <div className='flex justify-between w-10/12 mx-auto py-6'>
            <div className=''>
                <h2 className='font-bold'>{title}</h2>
                <p className=''>{subTitle}</p>
            </div>
            
            <div className='flex items-center'>
                <div className='bg-white rounded-xl p-3'>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
                </div>
            </div>
        </div>
    </div>
    );
}

function CardOrganization({title, subTitle}){
    return(
        <div className="flex items-end bg-orange-200 rounded-3xl w-full h-full">
            <div className='flex justify-between w-10/12 mx-auto py-6'>
                <div className=''>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='text-[10px]'>{subTitle}</p>
                </div>

                <div className='flex items-center'>
                    <div className='bg-white rounded-xl p-3'>
                        <FontAwesomeIcon icon="fa-solid fa-building-columns" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function CardDocuments({title, subTitle}){
    return(
        <div className="flex items-end bg-cyan-300 rounded-3xl w-full h-full">
            <div className='flex justify-between w-10/12 mx-auto py-6'>
                <div className=''>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='text-[10px]'>{subTitle}</p>
                </div>

                <div className='flex items-center'>
                    <div className='bg-white rounded-xl p-3'>
                        <FontAwesomeIcon icon="fa-solid fa-file" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function CardPlan({title, subTitle}){
    return(
        <div className="flex items-end bg-yellow-200 rounded-3xl w-full h-full">
            <div className='flex justify-between w-10/12 mx-auto py-6'>
                <div className=''>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='text-[10px]'>{subTitle}</p>
                    </div>

                    <div className='flex items-center'>
                    <div className='bg-white rounded-xl p-3'>
                        <FontAwesomeIcon icon="fa-solid fa-layer-group" />
                    </div>
                </div>
            </div>
    </div>
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
