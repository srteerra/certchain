import { Zoom } from "react-awesome-reveal";
import { 
    ArrowUpOnSquareIcon,
    BuildingLibraryIcon,
    DocumentDuplicateIcon,
    Square3Stack3DIcon,
    Cog6ToothIcon,
    DocumentIcon
} from '@heroicons/react/24/outline';
import { PrimaryButton_md_fill } from "../components/PrimaryButton.jsx";

function CardUpload({title, subTitle}) {
    return(
    <Zoom className="flex items-end bg-yellow-200 rounded-3xl w-full h-full hover:opacity-80 hover:cursor-pointer">
        <div className='flex justify-between w-10/12 mx-auto py-6'>
            <div className=''>
                <h2 className='font-bold'>{title}</h2>
                <p>{subTitle}</p>
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
        <Zoom delay={100} className="flex items-end bg-orange-200 rounded-3xl w-full h-full hover:opacity-80 hover:cursor-pointer">
            <div className='flex justify-between w-10/12 mx-auto py-6'>
                <div className=''>
                    <h2 className='font-bold'>{title}</h2>
                    <p>{subTitle}</p>
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
        <Zoom delay={200} className="flex items-end bg-cyan-300 rounded-3xl w-full h-full hover:opacity-80 hover:cursor-pointer">
            <div className='flex justify-between w-10/12 mx-auto py-6'>
                <div className=''>
                    <h2 className='font-bold'>{title}</h2>
                    <p>{subTitle}</p>
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
        <Zoom delay={300} className="flex items-end bg-yellow-200 rounded-3xl w-full h-full hover:opacity-80 hover:cursor-pointer">
            <div className='flex justify-between w-10/12 mx-auto py-6'>
                <div className=''>
                    <h2 className='font-bold'>{title}</h2>
                    <p>{subTitle}</p>
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
        <div className='bg-slate-200 w-full h-full flex items-end hover:opacity-80 hover:cursor-pointer'>
            <div className='text-start w-5/6 mx-auto'>
                <h1>{ document.title }</h1>
                <p>{ document.text }</p>
            </div>
        </div>
    )
}

function DarkCardUpload (){
    return(
        <div className="overflow-hidden bg-black max-[400px]:w-full w-4/5 sm:w-full lg:w-2/3 mx-auto  rounded-[50px] p-10 text-white relative">
            <div className="absolute">
                <h2 className="font-bold my-2">Upload your <br /> first file</h2>
                <p>On Certchain</p>
                <div className="my-5">
                    <PrimaryButton_md_fill text="Learn how" />
                </div>
            </div>
            <DocumentIcon className="h-52 w-52 rotate-[20deg] translate-x-full translate-y-24"/>
        </div>
    )
}

function DarkCardConfig (){
    return(
        <div className="overflow-hidden bg-black max-[400px]:w-full w-4/5 sm:w-full lg:w-2/3 mx-auto rounded-[50px] p-10 text-white relative">
            <div className="absolute">
                <h2 className="font-bold my-2">Configure your  <br /> profile</h2>
                <p>On Certchain</p>
                <div className="my-5">
                    <PrimaryButton_md_fill text="Learn how" />
                </div>
            </div>
            <Cog6ToothIcon className="h-52 w-52 translate-x-full translate-y-24"/>
        </div>
    )
}


export {
    CardUpload, 
    CardOrganization, 
    CardDocuments,
    CardPlan,
    DocumentCard,
    DarkCardUpload,
    DarkCardConfig
};
