import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../Header/HeaderComponent";
import NameCoin from "./NameCoin/NameCoin";
import BuyCoin from "./BuyCoin/BuyCoin";
import InfoTable from "./InfoTable/InfoTable";
import Diagram from "./Diagram/Diagram";

const InfoCoin = () =>{
    const navigate = useNavigate();
    const handleComeBack = () =>{
        navigate('/')
    }
    return (
        <>
        <HeaderComponent />
        <NameCoin />
        <BuyCoin />
        <InfoTable />
        <Diagram />
        <button onClick={() => handleComeBack()}>come back</button>
        </>
    )
}
export default InfoCoin;