import { HeaderGuess, HeaderLogged } from "../components/Header";

const Layout = ({ children }) => {
    return (
        <div className="h-screen">
            <HeaderGuess />
            { children }
        </div>
    );
}

export default Layout;