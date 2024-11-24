import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/index";
import InfoCoin from "../pages/InfoCoin/index";
const RouterComponent = () => {

    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/infoCoin' element={<InfoCoin />} />
        </Routes>
    )
}
export default RouterComponent;