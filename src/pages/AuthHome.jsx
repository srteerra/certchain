import { TitleNav } from "../components/TitleNav.jsx";
import { 
    CardUpload, 
    CardDocuments, 
    CardOrganization, 
    CardPlan,  
    DarkCardUpload,
    DarkCardConfig
} from "../components/Cards.jsx";

const AuthHome = () => {
    return (
    <div className="h-5/6">
        <TitleNav title={"Home"}></TitleNav>
        <p className="px-20 py-5">See wath to do next</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:h-4/6">

            {/* container primary-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 px-20 col-span-2 ">
                <div className="sm:col-span-6 md:col-span-5"><CardUpload title={"Upload"} subTitle={"a single file a group."}></CardUpload></div>
                <div className="sm:col-span-6 md:col-span-7"><CardOrganization title={"Esc. #2903"} subTitle={"your organization."}></CardOrganization></div>
                <div className="sm:col-span-6 md:col-span-7"><CardDocuments title={"My Documents"} subTitle={"see all your collections"}></CardDocuments></div>
                <div className="sm:col-span-6 md:col-span-5"><CardPlan title={"Plan"} subTitle={"billing,history"}></CardPlan></div>
            </div>
            {/* container secondary-cards */} 
            <div className="col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 my-20 sm:my-10 lg:my-0 px-10 lg:px-0 gap-5">
                <DarkCardUpload />
                <DarkCardConfig />
            </div>
        </div>
    </div>
    );
}

export {AuthHome};
