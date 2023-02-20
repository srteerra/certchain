import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout.jsx";
import { AuthLayout } from "../containers/AuthLayout.jsx";
import { AuthHome } from "../pages/AuthHome.jsx";
import { MyDocuments } from "../pages/MyDocuments.jsx";
import Home from "../pages/Home.jsx";
import Dashboard from "../pages/Dashboard";

import { useState } from 'react';

const App = () => {
    let auth = true;

    let [account, setAccount] = useState(""); // State variable to set account/wallet.
    let [isconnected, setIsconnected] = useState(false); // State variable to set account/wallet.

    if (!isconnected) { 
        // Not authenticated
        return (
            <BrowserRouter>
                <Layout setAccount={setAccount} setIsconnected={setIsconnected}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="*" element={<h1>404: Not Found</h1>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        );
    } else { 
        // Authenticated
        return (
            <BrowserRouter>
                <AuthLayout account={account}>
                    <Routes>
                        <Route path="/" element={<AuthHome />} />
                        <Route path="/documents" element={<MyDocuments />} />
                        <Route path="*" element={<h1>404: Not Found</h1>} />
                    </Routes>
                </AuthLayout>
            </BrowserRouter>
        );
    }
}

export default App ;