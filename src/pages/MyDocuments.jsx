import { TitleNav } from "../components/TitleNav";
import { DocumentCard, AddDocument } from "../components/Cards.jsx"

const MyDocuments = () => {
    return (
        <div>
            <TitleNav title={"My Documents"}></TitleNav>
            <div className="mt-5 grid grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-5 px-5 sm:px-20">
                <AddDocument />
                <DocumentCard title={"GEN 2021"} />
                <DocumentCard title={"GEN 2022"} />
                {/* { documentList } */}
            </div>
        </div>
    );
}

export { MyDocuments };