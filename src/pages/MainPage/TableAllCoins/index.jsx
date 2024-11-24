import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from './index.module.css';
import numeral from "numeral";
import { Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from '@mui/icons-material/Add';
import { fetchGetMoreInfo } from "../../../redux/slice/infoCoinSlice";
import { fetchGetStatistic } from "../../../redux/slice/diagramSlice";

const TableAllCoins = () => {
    const { data } = useSelector(state => state.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        console.log('click', id);

    }
    const getMoreInfo = (id) => {
        console.log('info', id);
        dispatch(fetchGetMoreInfo(id));
        dispatch(fetchGetStatistic(id));
        navigate('/infoCoin');
    }

    return (
        <Box sx={{ mt: 3, border: 0, display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <Paper sx={{
                height: '90%', width: '100%', boxShadow: 'none',

            }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[10, 20]}
                    checkboxSelection={false}
                    sx={
                        {
                            border: 1,
                            borderColor: '#c92d82',

                            '& .MuiDataGrid-columnHeaderTitle': {
                                fontWeight: 'bold', // Жирный шрифт
                                fontSize: '1rem',
                                '& .MuiTableCell-root': {
                                    fontSize: {
                                        xs: '12px', // Для текста в ячейках
                                        sm: '14px',
                                        md: '16px',
                                    },
                                }
                            },
                        }
                    }
                />
            </Paper>
        </Box>
    )
}
export default TableAllCoins;