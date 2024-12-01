import numeral from "numeral";

const numeralFormat = (str) => {
  return `${numeral(parseFloat(str))
    .format("0.00a")
    .replace("k", " тыс")
    .replace("b", " млрд")
    .replace("m", " млн")
    .replace("t", " трлн")} $`;
};
export default numeralFormat;
