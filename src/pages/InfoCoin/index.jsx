import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import HeaderComponent from "../../components/Header";
import NameCoin from "./NameCoin";
import BuyCoin from "./BuyCoin";
import InfoTable from "./InfoTable";
import Diagram from "./Diagram";
import FooterComponent from "../../components/Footer";
import { useSelector } from "react-redux";
import ComeBack from "./ComeBack";

const InfoCoin = () => {
    const navigate = useNavigate();
    const {coin, status} = useSelector(state => state.coin);
   
   
    useEffect(() => {
        if(status !== 'loading' && Object.keys(coin).length === 0){
            navigate('/')
        }
    }, [coin])
    
    return (
        <div className="container">
            <HeaderComponent />
            <NameCoin />
            <BuyCoin />
            <InfoTable />
            <Diagram />
            <ComeBack />
            <FooterComponent />
        </div>
    )
}
export default InfoCoin;