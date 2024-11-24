import { Route, Routes } from "react-router-dom";
import MainPage from "../components/Pages/MainPage/MainPage";
import InfoCoin from "../components/Pages/InfoCoin/InfoCoin";

const RouterComponent = () => {

    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/infoCoin' element={<InfoCoin />} />
        </Routes>
    )
}
export default RouterComponent;