import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout.jsx";
import { AuthLayout } from "../containers/AuthLayout.jsx";
import { AuthHome } from "../pages/AuthHome.jsx";
import { MyDocuments } from "../pages/MyDocuments.jsx";
import Home from "../pages/Home.jsx";
import Dashboard from "../pages/Dashboard";

const App = () => {
    let auth = false;
    if (auth) { 
        // Not authenticated
        return (
            <BrowserRouter>
                <Layout>
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
                <AuthLayout>
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