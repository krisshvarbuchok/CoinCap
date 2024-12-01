import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HeaderComponent from "../../components/Header";
import NameCoin from "./NameCoin";
import BuyCoin from "./BuyCoin";
import InfoTable from "./InfoTable";
import Diagram from "./Diagram";
import FooterComponent from "../../components/Footer";
import { useSelector } from "react-redux";
import ComeBack from "./ComeBack";
import BriefcaseModal from "../../components/BriefcaseModal";
import { selectCoin, selectIsOpenBriefcase } from "../../redux/selectors";

const InfoCoin = () => {
    const navigate = useNavigate();
    const { coin, status } = useSelector(selectCoin);
    const isOpenBriefcase = useSelector(selectIsOpenBriefcase);

  
    useEffect(() => {
        if (status !== 'loading' && Object.keys(coin).length === 0) {
            navigate('/')
        }
    }, [coin])

    return (
        <div className="container">
            <HeaderComponent />
            {isOpenBriefcase && <BriefcaseModal />}
            {status === 'loading' ? <div>...loading</div> :
                <>
                    <NameCoin />
                    <BuyCoin />
                    <InfoTable />
                    <Diagram />
                    <ComeBack />
                    <FooterComponent />
                </>
            }
        </div>
    )
}
export default InfoCoin;