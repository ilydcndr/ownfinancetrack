import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const FinanceChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const { user } = useAuth();
  const userInfo = user.financialWorkingCapital

  return (
    <div className="p-3 rounded bg-white">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="m-0 fw-semibold graph-title">Working Capital</h5>
        <div className="d-flex align-items-center">
          <div>
            <span className="me-3" style={{ fontSize: "12px" }}>
              <span className="me-1" style={{ color: "#29A073", fontSize: "16px" }}>●</span> Income
            </span>
            <span style={{ fontSize: "12px" }}>
              <span className="me-1" style={{ color: "#C8EE44", fontSize: "16px" }}>●</span> Expense
            </span>
          </div>
          <div>
            <select
              className="form-select w-auto border-0"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(Number(e.target.value))}
              style={{ color: "#1B212D", fontSize: "12px" }}
            >
              <option value={0}>Last 7 Days</option>
              <option value={1}>Last 6 Months</option>
            </select>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={userInfo[selectedPeriod].data}>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#929EAE", fontSize: 12, fontWeight: 400 }}
            padding={{ left: 30, right: 30 }} />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#929EAE", fontSize: 12, fontWeight: 400 }}
            padding={{ top: 30, bottom: 30 }} domain={[0, 10000]}
            tickFormatter={(value) => {
              if (value === 0) return "0";
              return `${value / 1000}K`;
            }}
            ticks={[0, 3000, 5000, 7000, 10000]} />

          <Tooltip
            formatter={(value) => `$${value}`}
            contentStyle={{ fontSize: "12px" }}
            itemStyle={{ fontSize: "12px" }}
            labelStyle={{ fontSize: "12px" }}
            cursor={false} />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#29A073"
            strokeWidth={1.5}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#C8EE44"
            strokeWidth={1.5}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;

