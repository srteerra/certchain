import { HeaderLogged } from "../components/Header";
import { SideNav } from "../components/SideNav.jsx";

const AuthLayout = ({children}) => {
    return (
        <div className="h-screen">
            <HeaderLogged />
            <SideNav />
            {children}
        </div>
    );
}

export {AuthLayout};