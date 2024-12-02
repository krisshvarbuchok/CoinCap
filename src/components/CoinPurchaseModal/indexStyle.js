export const styles = {
  dialog: {
    "& .MuiDialog-paper": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
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
  name: {
    color: "#c92d82",
    fontSize: {
      xs: "16px",
      sm: "18px",
      md: "20px",
    },
  },
  count: {
    textAlign: "center",
    marginBottom: 2,
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
    },
  },
  input: {
    "& .MuiInputBase-input": {
      textAlign: "center",
      paddingTop: "7px",
      paddingBottom: "7px",
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
      },
    },
  },
  actions: {
    justifyContent: "center",
  },
  button: {
    color: "#c92d82",
    borderColor: "#c92d82",
    marginBottom: "20px",
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
    },
  },
};
