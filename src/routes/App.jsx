import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout.jsx";
import { AuthLayout } from "../containers/AuthLayout.jsx";
import { AuthHome } from "../pages/AuthHome.jsx";
import Home from "../pages/Home.jsx";
import Dashboard from "../pages/Dashboard";
import UploadFile from "../pages/UploadFile.jsx";

const App = () => {
    let auth = true;
    if (auth) { // Not authenticated
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
    } else { // Authenticated
        return (
            <BrowserRouter>
                <AuthLayout>
                    <Routes>
                        <Route path="/" element={<AuthHome />} />
                        <Route path="*" element={<h1>404: Not Found</h1>} />
                    </Routes>
                </AuthLayout>
            </BrowserRouter>
        );
    }
}

export default App ;