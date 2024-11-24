import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../Header/HeaderComponent";
import NameCoin from "./NameCoin/NameCoin";
import BuyCoin from "./BuyCoin/BuyCoin";
import InfoTable from "./InfoTable/InfoTable";
import Diagram from "./Diagram/Diagram";
import FooterComponent from "../../Footer/FooterComponent";
import { useDispatch, useSelector } from "react-redux";
import { removeInfoCoin } from "../../../redux/slice/infoCoinSlice";

const InfoCoin = () => {
    const navigate = useNavigate();
    const {coin} = useSelector(state => state.coin);
    const dispatch = useDispatch();
    console.log(coin);
    
    const handleComeBack = () => {
        navigate('/');
        dispatch(removeInfoCoin());
    }
    return (
        <>
            <HeaderComponent />
            <NameCoin />
            <BuyCoin />
            <InfoTable />
            <Diagram />
            <button onClick={() => handleComeBack()}>come back</button>
            <FooterComponent />
        </>
    )
}
export default InfoCoin;