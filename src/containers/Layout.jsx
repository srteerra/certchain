import { HeaderGuess, HeaderLogged } from "../components/Header";

const Layout = ({ children, setAccount, setIsconnected }) => {
    return (
        <div className="h-screen">
            <HeaderGuess setAccount={setAccount} setIsconnected={setIsconnected} />
            { children }
        </div>
    );
}

export default Layout;