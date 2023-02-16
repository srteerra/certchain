import { HeaderGuess, HeaderLogged } from "../components/Header";

const Layout = ({ children }) => {
    return (
        <div>
            <HeaderGuess />
            { children }
        </div>
    );
}

export default Layout;