import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout.jsx";
import Home from "../pages/Home.jsx";
import Dashboard from "../pages/Dashboard";
import Homelogged from "../pages/Home-logged.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Homelogged />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<h1>404: Not Found</h1>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App ;