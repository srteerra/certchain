import { HeaderGuess, HeaderLogged } from "../components/Header";

const Layout = ({ children, setAccount, setIsconnected, showPrivacy, setShowPrivacy }) => {
    return (
        <div className="h-screen">
            <HeaderGuess setAccount={setAccount} setIsconnected={setIsconnected} showPrivacy={showPrivacy} setShowPrivacy={setShowPrivacy} />
            { children }
        </div>
    );
}

export default Layout;