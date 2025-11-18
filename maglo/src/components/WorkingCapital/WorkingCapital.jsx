import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Örnek veriler
const monthlyData = [
  { name: "Mayıs", value: 5000 },
  { name: "Haziran", value: 7000 },
  { name: "Temmuz", value: 6000 },
  { name: "Ağustos", value: 8000 },
  { name: "Eylül", value: 7500 },
  { name: "Ekim", value: 9000 },
];

// Arrow function ile daily data üretimi
const generateDailyData = (days = 30) =>
  Array.from({ length: days }, (_, i) => ({
    name: `Gün ${i + 1}`,
    value: Math.floor(Math.random() * 5000) + 5000,
  }));

const WorkingCapital = () => {
  const [view, setView] = useState("monthly"); // monthly veya daily

  const data = view === "monthly" ? monthlyData : generateDailyData();

  return (
    <div style={{ width: "100%", maxWidth: 700, margin: "0 auto", padding: "2rem" }}>
      <h2>Working Capital</h2>

      {/* Görünüm seçim butonları */}
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => setView("monthly")}
          style={{
            marginRight: "0.5rem",
            padding: "0.5rem 1rem",
            background: view === "monthly" ? "#8884d8" : "#eee",
            color: view === "monthly" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          6 Aylık
        </button>
        <button
          onClick={() => setView("daily")}
          style={{
            padding: "0.5rem 1rem",
            background: view === "daily" ? "#8884d8" : "#eee",
            color: view === "daily" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Günlük
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorkingCapital;