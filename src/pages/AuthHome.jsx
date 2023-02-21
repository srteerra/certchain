
import { TitleNav } from "../components/TitleNav.jsx";
import { CardUpload } from "../components/Cards.jsx";
import { CardOrganization } from "../components/Cards.jsx";
import { CardDocuments } from "../components/Cards.jsx";
import { CardPlan } from "../components/Cards.jsx";

const AuthHome = () => {
    return (
    <div className="h-5/6">
        <TitleNav title={"Home"}></TitleNav>
        <p className="px-20 py-5">See wath to do next</p>
        <div className="grid grid-cols-3">

            {/* container primary-cards */}
            <div className="grid grid-cols-12 gap-5 px-20 col-span-2  ">
                <div className="col-span-5 h-[150px]"><CardUpload title={"Upload"} subTitle={"a single file a group."}></CardUpload></div>
                <div className="col-span-7 h-[150px]"><CardOrganization title={"Esc. #2903"} subTitle={"your organization."}></CardOrganization></div>
                <div className="col-span-7 h-[150px]"><CardDocuments title={"My Documents"} subTitle={"see all your collections"}></CardDocuments></div>
                <div className="col-span-5 h-[150px]"><CardPlan title={"Plan"} subTitle={"billing,history"}></CardPlan></div>
            </div>
            {/* container secondary-cards */}
            <div className="col-span-1">

            </div>
        </div>
    </div>
    );
}

export {AuthHome};
