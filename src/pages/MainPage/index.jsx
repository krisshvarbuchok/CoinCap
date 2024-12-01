import { useSelector } from "react-redux";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import TableAllCoins from "./TableAllCoins";
import BriefcaseModal from "../../components/BriefcaseModal";
import { selectIsOpenBriefcase } from "../../redux/selectors";

const MainPage = () => {
  const isOpenBriefcase = useSelector(selectIsOpenBriefcase);

  return (
    <div className="container">
      <HeaderComponent />
      {isOpenBriefcase && <BriefcaseModal />}
      <TableAllCoins />
      <FooterComponent />
    </div>
  );
};
export default MainPage;
