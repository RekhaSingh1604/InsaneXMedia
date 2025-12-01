import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  Bar,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

const generateRandomData = () => {
  return [
    { month: "Jan", sales: Math.floor(Math.random() * 5000) },
    { month: "Feb", sales: Math.floor(Math.random() * 5000) },
    { month: "Mar", sales: Math.floor(Math.random() * 5000) },
    { month: "Apr", sales: Math.floor(Math.random() * 5000) },
    { month: "May", sales: Math.floor(Math.random() * 5000) },
  ];
};

const generateRandomBarData = () => {
  return [
    { name: "Product A", qty: Math.floor(Math.random() * 20) },
    { name: "Product B", qty: Math.floor(Math.random() * 20) },
    { name: "Product C", qty: Math.floor(Math.random() * 20) },
    { name: "Product D", qty: Math.floor(Math.random() * 20) },
  ];
};

const generateRandomPieData = () => {
  const completed = Math.floor(Math.random() * 100);
  const pending = Math.floor(Math.random() * (100 - completed));
  const failed = 100 - completed - pending;
  return [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
    { name: "Failed", value: failed },
  ];
};

const LiveCharts = () => {
  const [activeChart, setActiveChart] = useState("line");
  const [lineData, setLineData] = useState(generateRandomData());
//   const [barData, setBarData] = useState(generateRandomBarData());
//   const [pieData, setPieData] = useState(generateRandomPieData());

  useEffect(() => {
    const interval = setInterval(() => {
      setLineData(generateRandomData());
    //   setBarData(generateRandomBarData());
    //   setPieData(generateRandomPieData());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Live React Charts Preview</h1>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        {/* <button onClick={() => setActiveChart("line")} style={{ margin: "5px" }}>
          Line Chart
        </button> */}
        {/* <button onClick={() => setActiveChart("bar")} style={{ margin: "5px" }}>
          Bar Chart
        </button>
        <button onClick={() => setActiveChart("pie")} style={{ margin: "5px" }}>
          Pie Chart
        </button> */}
      </div>

      <div style={{ width: "100%", height: 400 }}>
        {activeChart === "line" && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} animationDuration={1000} />
            </LineChart>
          </ResponsiveContainer>
        )}

        {/* {activeChart === "bar" && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="qty" fill="#82ca9d" animationDuration={1000} />
            </BarChart>
          </ResponsiveContainer>
        )} */}

        {/* {activeChart === "pie" && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                animationDuration={1000}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )} */}
      </div>
    </div>
  );
};

export default LiveCharts;
