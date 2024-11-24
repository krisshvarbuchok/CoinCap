import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
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
    const {coin, status} = useSelector(state => state.coin);
    const dispatch = useDispatch();
    console.log(coin);
    useEffect(() => {
        if(status !== 'loading' && Object.keys(coin).length === 0){
            navigate('/')
        }
    }, [coin])
    
    const handleComeBack = () => {
        navigate('/');
        dispatch(removeInfoCoin());
    }
    return (
        <div className="container">
            <HeaderComponent />
            <NameCoin />
            <BuyCoin />
            <InfoTable />
            <Diagram />
            <button onClick={() => handleComeBack()}>come back</button>
            <FooterComponent />
        </div>
    )
}
export default InfoCoin;