//input
import { InputText, InputSearch } from "../components/Input.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <div className="h-3/5 flex justify-center items-center">
            <div className="p-5 w-1/2 text-center">
                <p className="text-5xl font-bold my-12 text-black w-1/2 mx-auto">Authenticate with Blockchain</p>
                <div className="my-5 w-4/5 mx-auto">
                    <InputSearch placeholder="Search by the file ID..." />
                </div>

                <p className="text-lg w-2/3 mx-auto">Grow your business validating your documents with us and make more value for your clients.</p>
            </div>
        </div>
    );
}

export default Home;