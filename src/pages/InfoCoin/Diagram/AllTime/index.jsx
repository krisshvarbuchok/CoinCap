import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  startOfMonth,
  subMonths,
  endOfToday,
  isWithinInterval,
} from "date-fns";
import {
  selectCoin,
  selectDiagram,
  selectTime,
} from "../../../../redux/selectors";

const AllTime = () => {
  const { statistic } = useSelector(selectDiagram);
  const { coin } = useSelector(selectCoin);
  const time = useSelector(selectTime);

  const startOfLastMonth = startOfMonth(subMonths(new Date(), 1)); // первое число прошлого месяца
  const end = endOfToday(); // сегодняшний день

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingRight: "20px",
      }}
    >
      <ResponsiveContainer width="95%" aspect={2}>
        <LineChart
          data={
            time
              ? statistic
              : statistic.filter((item) =>
                  isWithinInterval(new Date(item.date), {
                    start: startOfLastMonth,
                    end: end,
                  })
                )
          }
          margin={{ top: 50, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => {
              const [month, day] = date.split(" "); // Предполагается формат "Nov 1, 2023"
              return day === "1" ? month : ""; // Показывать метку только для первого числа месяца
            }}
          />
          <YAxis
            tickFormatter={(value) => `$${value}`}
            domain={[0, "auto"]}
            allowDataOverflow={true}
            tick={{
              fontSize: "clamp(10px, 1.5vw, 14px)", // Адаптивный размер шрифта
            }}
          />
          <Tooltip
            formatter={(value, name) => [`$${value}`, "Price"]}
            contentStyle={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}
          />
          <Legend
            wrapperStyle={{
              fontSize: "clamp(10px, 1.5vw, 14px)", // Адаптивный размер легенды
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            name={`${coin.name} Price`}
            stroke="#c92d82"
            dot={false} // Убирает точки на графике
            activeDot={{ r: 8 }}
          />
          <text
            x="50%"
            y="20"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "clamp(12px, 2vw, 18px)" }}
          >
            {time
              ? `${coin.name} цена за всё время`
              : `${coin.name} цена за прошедший и текущий месяцы`}
          </text>
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
export default AllTime;
