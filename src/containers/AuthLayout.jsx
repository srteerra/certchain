import { HeaderLogged } from "../components/Header";
import { SideNav } from "../components/SideNav.jsx";

const AuthLayout = ({children, account}) => {
    return (
        <div className="h-screen bg-primary flex flex-col sm:flex-row">
            <div className="w-full sm:w-[100px] sm:max-w-[100px] order-last sm:order-first flex justify-center sm:py-10">
                <SideNav />
            </div>
            <div className="w-full h-screen bg-white rounded-b-[40px] sm:rounded-br-none sm:rounded-l-[40px] p-2">
                <HeaderLogged account={account} />
                {children}
            </div>
        </div>
    );
}

export {AuthLayout};