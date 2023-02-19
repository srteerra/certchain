//input
import { InputSearch } from "../components/Input.jsx";

//Animated icons
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <div className="h-5/6 w-full">
            <div className="h-4/5 flex text-black justify-center flex-col items-center ">
                <div className="p-5 w-full md:w-1/2 text-center">
                    <p className="text-4xl md:text-5xl font-bold my-12 w-full lg:w-1/2 mx-auto">Authenticate with Blockchain</p>
                    <div className="my-5 w-full sm:w-11/12 md:w-4/5 mx-auto">
                        <InputSearch placeholder="Search by the file ID..." />
                    </div>

                    <p className="text-lg w-11/12 sm:w-2/3 mx-auto">Grow your business validating your documents with us and make more value for your clients.</p>
                </div>
            </div>

            {/* Animated icons */}
            <Footer />
        </div>
    );
}

export default Home;