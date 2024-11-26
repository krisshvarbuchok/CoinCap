import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from './index.module.css';
import numeral from "numeral";
import { Box, Paper, Skeleton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from '@mui/icons-material/Add';
import { fetchGetMoreInfo, setIsComeBackFalse } from "../../../redux/slice/infoCoinSlice";
import { fetchGetStatistic } from "../../../redux/slice/diagramSlice";
import { setIsOpenCoinPurchase } from "../../../redux/slice/isOpenCoinPurchaseModalSlice";
import CoinPurchaseModal from "../../../components/CoinPurchaseModal";
import { useEffect, useState } from "react";




const TableAllCoins = () => {
    const { data, statusData } = useSelector(state => state.list);
    console.log(statusData);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    console.log('loading', loading);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, isComeBack } = useSelector(state => state.coin);

    const isOpenCoinPurchase = useSelector(state => state.isOpenCoinPurchase);
    //console.log(isOpenCoinPurchase);
    // const LoadingSkeleton = () => (
    //     <Box sx={{ width: '100%' }}>
    //         {[...Array(10)].map((_, index) => (
    //             <Skeleton key={index} variant="rectangular" sx={{ my: 4, mx: 1 }} />
    //         ))}
    //     </Box>
    // );


    const columns = [
        { field: 'rank', headerName: '№', width: 50, sortable: false, disableColumnMenu: true, description: 'Rank is in ascending order - this number is directly associated with the marketcap whereas the highest marketcap receives rank 1.' },
        { field: 'symbol', headerName: '', width: 70, sortable: false, disableColumnMenu: true, cellClassName: `${styles.symbolStyle}` },
        {
            field: 'name',
            headerName: 'Name',
            disableColumnMenu: true,
            width: 170,
            cellClassName: `${styles.nameStyle}`,
            renderCell: (params) => (
                <div
                    onClick={() => getMoreInfo(params.row.id)}
                    style={{
                        cursor: 'pointer',
                        padding: 0,
                        margin: 0,

                    }}
                >
                    {params.value}
                </div>
            ),
        },
        {
            field: 'vwap24Hr',
            headerName: 'VWAP (24Hr)',
            description: 'Volume Weighted Average Price in the last 24 hours.',
            width: 170,
            align: 'center',
            valueGetter: (value) => `${parseFloat(value).toFixed(2)} $`,
        },
        {
            field: 'changePercent24Hr',
            headerName: 'Change (24Hr)',
            description: 'The direction and value change in the last 24 hours.',
            width: 170,
            cellClassName: (params) => {
                if (parseFloat(params.value) > 0) {
                    return `${styles.positiveChange}`;
                } else if (parseFloat(params.value) < 0) {
                    return `${styles.negativeChange}`;
                } else {
                    return `${styles.neutralChange}`;
                }
            },
            align: 'center',
            valueGetter: (value) => `${parseFloat(value).toFixed(2)} $`,
        },
        {
            field: 'marketCapUsd',
            headerName: 'Market Cap',
            description: 'Available supply for trading x price.',
            width: 150,
            align: 'center',
            valueGetter: (value) => {
                const parsedValue = parseFloat(value);
                let str = '';
                if (isNaN(parsedValue)) return str;
                else str = `${numeral(parsedValue).format('0.0a')} $`;

                let newStr = str.replace('k', ' тыс')
                    .replace('b', ' млрд')
                    .replace('m', ' млн')
                    .replace('t', ' трлн')
                return newStr;
            },
        },
        {
            field: 'priceUsd',
            headerName: 'Price',
            // type: 'number',
            width: 140,
            align: 'center',
            description: 'Volume-weighted price based on real-time market data, translated to USD.',
            cellClassName: `${styles.priceStyle}`,
            valueGetter: (value) => `${parseFloat(value).toFixed(2)} $`,
        },
        {
            field: 'addIcon',
            headerName: '',
            width: 45,
            sortable: false,
            align: 'center',
            disableColumnMenu: true, // This will disable the column menu
            renderCell: (params) => <AddIcon onClick={() => handleAddClick(params.row.id)} style={{ color: '#c92d82', cursor: 'pointer', paddingTop: '10px' }} />,
        },
    ];
    const paginationModel = { page: 0, pageSize: 10 };

    const handleAddClick = (id) => {
        dispatch(setIsComeBackFalse())
        dispatch(fetchGetMoreInfo(id));
        console.log('click', id);
        // if (status === 'successed') {
        //     console.log('click', id);
        //     dispatch(setIsOpenCoinPurchase(!isOpenCoinPurchase));
        // }
    }
    useEffect(() => {
        if (status === 'successed' && isComeBack === false) {
            dispatch(setIsOpenCoinPurchase(!isOpenCoinPurchase));
        }
    }, [status])

    useEffect(() => {
        if (statusData === 'loading') {
            setLoading(true);

        } else {
            setLoading(false);
            setPosts(data)
        }
    }, [statusData, data]);

    const getMoreInfo = (id) => {
        //console.log('info', id);
        dispatch(fetchGetMoreInfo(id));
        dispatch(fetchGetStatistic(id));
        navigate('/infoCoin');
    }

    return (
        <Box sx={{ mt: 3, border: 0, display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <CoinPurchaseModal />
            <Paper sx={{
                height: '100%', width: '100%', boxShadow: 'none',

            }}>
                <DataGrid
                    rows={posts} // Передаем пустые строки во время загрузки
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[10, 20]}
                    // rowsPerPageOptionsSkeleton
                    // disableSelectionOnClick
                    // disableColumnMenu
                    //disableColumnSelector
                    // components={{
                    //     LoadingOverlay: LoadingSkeleton
                    // }}
                    loading={loading}
                    checkboxSelection={false}
                    sx={{
                        border: 1,
                        minHeight: 600,
                        borderColor: '#c92d82',
                        '& .MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 'bold',
                            fontSize: '1rem',
                        },
                    }}
                />
            </Paper>
        </Box>
    )
}
export default TableAllCoins;