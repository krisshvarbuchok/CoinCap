import { useSelector } from "react-redux";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AllTime = () => {
    const { statistic } = useSelector(state => state.diagram);
    const { coin } = useSelector(state => state.coin);
    console.log(statistic);


    return (
        <ResponsiveContainer width="80%" height={400}>
            <LineChart data={statistic} margin={{ top: 50, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis
                    dataKey="date"
                    tickFormatter={(date) => {
                        const [month, day] = date.split(" "); // Предполагается формат "Nov 1, 2023"
                        return day === "1" ? month : ""; // Показывать метку только для первого числа месяца
                    }}
                />
                <YAxis
                    // label={{ value: "Price (USD)", angle: -90, position: "insideLeft" }}
                    tickFormatter={value => `$${value}`}
                />
                <Tooltip formatter={(value, name) => [`$${value}`, "Price"]} />
                <Legend />
                <Line type="monotone" dataKey="price" name={`${coin.name} Price`} stroke="#c92d82"
                    dot={false}  // Убирает точки на графике
                    activeDot={{ r: 8 }} />
                <text x={320} y={20} textAnchor="middle" dominantBaseline="middle" fontSize={18}>
                    {coin.name} Price Over Time
                </text>
            </LineChart>
        </ResponsiveContainer>
    )
}
export default AllTime;