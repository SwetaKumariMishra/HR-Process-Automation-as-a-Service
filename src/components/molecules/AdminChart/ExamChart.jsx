import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    Appear: 500,
    Clear: 444
  },
  {
    name: "Fab",
    Appear: 34,
    Clear: 20
  },
  {
    name: "Mar",
    Appear: 100,
    Clear: 67
  },
  {
    name: "April",
    Appear: 80,
    Clear: 78
  },
  {
    name: "May",
    Appear: 67,
    Clear: 56
  },
  {
    name: "Jun",
    Appear: 87,
    Clear: 76
  },
  {
    name: "July",
    Appear: 200,
    Clear: 150
  },
  {
    name: "Aug",
    Appear: 300,
    Clear: 250
  },
  {
    name: "Sep",
    Appear: 130,
    Clear: 100
  },
  {
    name: "Oct",
    Appear: 356,
    Clear: 280
  },
  {
    name: "Nav",
    Appear: 400,
    Clear: 400
  },
  {
    name: "Dec",
    Appear: 356,
    Clear:200
  }
]

const ExamChart = () => {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
        <strong className="text-gray-700 font-medium">Exams</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Appear" fill="#0ea5e9" />
            <Bar dataKey="Clear" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExamChart;
