import { useSelector } from "react-redux";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import TableAllCoins from "./TableAllCoins";
import BriefcaseModal from "../../components/BriefcaseModal";

const MainPage = () => {
    const isOpenBriefcase = useSelector(state => state.isOpenBriefcase);

    return (
        <div className="container">
                <HeaderComponent />
                {isOpenBriefcase && <BriefcaseModal />}
                <TableAllCoins />
                <FooterComponent />
        </div>
    )
}
export default MainPage;