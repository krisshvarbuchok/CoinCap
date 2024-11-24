import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import HeaderComponent from "../../components/Header";
import NameCoin from "./NameCoin";
import BuyCoin from "./BuyCoin";
import InfoTable from "./InfoTable";
import Diagram from "./Diagram";
import FooterComponent from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeInfoCoin } from "../../redux/slice/infoCoinSlice";

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