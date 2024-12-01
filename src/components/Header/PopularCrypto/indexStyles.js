export const styles = {
    title: {
        mb: 1,
        color: 'black',
        fontSize: {
            xs: '12px',
            sm: '14px',
            md: '16px',
        },
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            height: '1px',
            backgroundColor: '#c92d82',
        },
    },
    itemBox: {
        textAlign: 'left',
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: {
            xs: '12px',
            sm: '14px',
            md: '16px',
        },
    },
    price: {
        color: 'black',
        fontSize: {
            xs: '12px',
            sm: '14px',
            md: '16px',
        },
    },
    skeletonStack: {
        width: 50,
    },
    skeleton: {
        fontSize: {
            xs: '12px',
            sm: '14px',
            md: '16px',
        },
    },
    skeletonSmall: {
        fontSize: {
            xs: '10px',
            sm: '12px',
            md: '14px',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
    },
};
