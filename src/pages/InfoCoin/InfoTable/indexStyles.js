export const styles = {
  container: {
    width: "90%",
    margin: "auto",
  },
  table: {
    width: "100%",
    "& .MuiTableCell-root": {
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
      },
    },
  },
  tableCell: {
    fontWeight: "bold",
  },
  text: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
    },
  },
  link: {
    display: "inline-block",
    whiteSpace: "nowrap", // Не допускаем перенос текста
    overflow: "hidden", // Скрываем текст, выходящий за границы
    textOverflow: "ellipsis", // Добавляем многоточие
    maxWidth: {
      xs: "100px", // Для маленьких экранов (мобильных устройств)
      sm: "150px", // Для средних экранов (планшеты)
      md: "200px", // Для больших экранов (ноутбуки и десктопы)
    },
  },
};
