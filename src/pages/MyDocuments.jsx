import { TitleNav } from "../components/TitleNav";
import { DocumentCard } from "../components/Cards.jsx"

const MyDocuments = () => {
    const array = [
        {
            id: 1,
            title: "hello",
            text:"perro perro"
        },
        {
            id: 2,
            title: "hello",
            text:"perro perro"
        }
    ];
    
    const list = array.map((doc) => {
        <DocumentCard document={doc} key={doc.id} />
    });

    return (
        <div>
            <TitleNav title={"My Documents"}></TitleNav>
            <div className="grid grid-cols-6">
                { list }
            </div>
        </div>
    );
}

export { MyDocuments };