import { HeaderGuess, HeaderLogged } from "../components/Header";

const Layout = ({ children }) => {
    return (
        <div>
            <HeaderLogged />
            { children }
        </div>
    );
}

export default Layout;