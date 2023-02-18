import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

// imports
import Home from "./pages/Home";
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Page from "./pages/Page";
import Upload from "./pages/Upload";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="page" element={<Page/>}/>
                    <Route path="upload" element={<Upload/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
