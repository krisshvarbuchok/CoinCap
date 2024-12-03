import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HeaderComponent from "../../components/Header";
import NameCoin from "./NameCoin";
import BuyCoin from "./BuyCoin";
import InfoTable from "./InfoTable";
import Diagram from "./Diagram";
import FooterComponent from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import ComeBack from "./ComeBack";
import BriefcaseModal from "../../components/BriefcaseModal";
import { selectCoin, selectIsOpenBriefcase } from "../../redux/selectors";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorComponent from "../../components/ErrorComponent";
import { removeInfoCoinFromComeBack } from "../../redux/slice/infoCoinSlice";
import { removeBuy } from "../../redux/slice/buyCoinSlice";

const InfoCoin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { coin, status } = useSelector(selectCoin);
  const isOpenBriefcase = useSelector(selectIsOpenBriefcase);

  const onBackButtonEvent = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(removeInfoCoinFromComeBack());
    dispatch(removeBuy());
  };
    
    useEffect(() => {window.addEventListener('popstate', onBackButtonEvent);
      return () => {
        window.removeEventListener('popstate', onBackButtonEvent);
    
    };}, [])

  useEffect(() => {
    if (status !== "loading" && Object.keys(coin).length === 0) {
      navigate("/");
    }
  }, [coin]);

  if(status === 'failed'){
    return <ErrorComponent />
  }


  return (
    <div className="container">
      <HeaderComponent />
      {isOpenBriefcase && <BriefcaseModal />}
      {status === "loading" ? (
        <Stack
          sx={{
            color: "grey.500",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="secondary" />
        </Stack>
      ) : (
        <>
          <NameCoin />
          <BuyCoin />
          <InfoTable />
          <Diagram />
          <ComeBack />
          <FooterComponent />
        </>
      )}
    </div>
  );
};
export default InfoCoin;
