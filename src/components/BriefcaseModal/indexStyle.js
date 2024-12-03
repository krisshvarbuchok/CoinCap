export const styles = {
  dialog: {
    "& .MuiDialog-paper": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0px 0px 10px #c92d82",
      position: "relative",
    },
  },
  icon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  title: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    gap: "10px",
    fontSize: {
      xs: "16px",
      sm: "18px",
      md: "20px",
    },
  },
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "70vh",
    
    "& .MuiTableCell-root": {
      padding: "8px",
    },
    "& .MuiTableRow-root": {
      height: "50px",
    },
  },
  table: {
    width: "100%",
    marginBottom: "20px",
    height: "30px",
    "& .MuiTableCell-root": {
        fontSize: {
          xs: "12px", // Меньше текст на маленьких экранах
          sm: "14px",
          md: "16px",
        },
        padding: {
          xs: "4px", // Уменьшенные отступы на мобильных
          sm: "8px",
          md: "16px",
        },
      },
  },
  cell: {
    fontWeight: "bold",
  },
  total: {
    // width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    mt: 2,
    mb: 2,
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "18px",
    },
  },
  sum: {
    fontWeight: "bold",
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "18px",
    },
  },
};
