// Router.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';

const APP_NAME: string = "/Genk1-G0npe1.github.io/"; // リポジトリ名

const Router = () => {
    return (
        <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
            <Routes>
                <Route path={APP_NAME + '/'} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;