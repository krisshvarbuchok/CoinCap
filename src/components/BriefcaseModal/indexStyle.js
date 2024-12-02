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
    minHeight: "150px",
    "& .MuiTableCell-root": {
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
      },
      padding: "8px",
    },
    "& .MuiTableRow-root": {
      height: "50px",
    },
  },
  table: {
    width: "80%",
    marginBottom: "20px",
    height: "30px",
  },
  cell: {
    fontWeight: "bold",
  },
  total: {
    width: "100%",
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
