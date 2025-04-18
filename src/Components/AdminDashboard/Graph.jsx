// import React, { useEffect } from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5xy from "@amcharts/amcharts5/xy";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// const Graph = () => {
//   useEffect(() => {
//     const root = am5.Root.new("chartdiv");
//     root.setThemes([am5themes_Animated.new(root)]);

//     const chart = root.container.children.push(
//       am5xy.XYChart.new(root, {
//         panX: false,
//         panY: false,
//         wheelX: "none",
//         wheelY: "none",
//         pinchZoomX: false,
//         paddingLeft: 0,           
//         paddingRight: 0,
//       })
//     );

//     const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
//     cursor.lineY.set("visible", false);

//     const xRenderer = am5xy.AxisRendererX.new(root, {
//       minGridDistance: 30,
//       minorGridEnabled: true,
//     });

//     xRenderer.labels.template.setAll({
//       rotation: -45,
//       centerY: am5.p50,
//       centerX: am5.p100,
//       paddingRight: 15,
//     });

//     const xAxis = chart.xAxes.push(
//       am5xy.CategoryAxis.new(root, {
//         categoryField: "day",
//         renderer: xRenderer,
//         tooltip: am5.Tooltip.new(root, {}),
//       })
//     );

//     const yAxis = chart.yAxes.push(
//       am5xy.ValueAxis.new(root, {
//         renderer: am5xy.AxisRendererY.new(root, {
//           strokeOpacity: 0.1,
//         }),
//       })
//     );

//     const series = chart.series.push(
//       am5xy.ColumnSeries.new(root, {
//         name: "Revenue",
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: "revenue",
//         categoryXField: "day",
//         tooltip: am5.Tooltip.new(root, {
//           labelText: "${valueY}",
//         }),
//       })
//     );

//     // Oval shape top & bottom + thin bar
//     series.columns.template.setAll({
//       cornerRadiusTL: 30,
//       cornerRadiusTR: 30,
//       cornerRadiusBL: 30,
//       cornerRadiusBR: 30,
//       strokeOpacity: 0,
//       width: am5.percent(15), // Smaller width
//     });

//     // Corrected gradient
//     series.columns.template.events.on("draw", (ev) => {
//       const column = ev.target;

//       // Ensure the gradient is applied correctly
//       const gradient = am5.LinearGradient.new(root, {
//         stops: [
//           { color: am5.color("#3b82f6") }, // Tailwind Blue-500
//           { color: am5.color("#10b981") }, // Tailwind Green-500
//         ],
//         rotation: 10, // vertical (top to bottom)
//       });

//       // Set the fillGradient to apply the gradient to the column
//       column.set("fillGradient", gradient);
//     });

//     const data = [
//       { day: "Mon", revenue: 1200 },
//       { day: "Tue", revenue: 1500 },
//       { day: "Wed", revenue: 1800 },
//       { day: "Thu", revenue: 1300 },
//       { day: "Fri", revenue: 2000 },
//       { day: "Sat", revenue: 1700 },
//       { day: "Sun", revenue: 900 },
//     ];

//     xAxis.data.setAll(data);
//     series.data.setAll(data);

//     series.appear(1000);
//     chart.appear(1000, 100);

//     return () => root.dispose();
//   }, []);

//   return (
//     <div
//       id="chartdiv"
//       className="w-[100%] h-[100%] mx-auto"
//     />
//   );
// };

// import React, { useEffect } from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5xy from "@amcharts/amcharts5/xy";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// const Graph = () => {
//   useEffect(() => {
//     const root = am5.Root.new("chartdiv");

//     // Optionally apply theme (can be commented out to prevent color interference)
//     root.setThemes([am5themes_Animated.new(root)]);

//     const chart = root.container.children.push(
//       am5xy.XYChart.new(root, {
//         panX: false,
//         panY: false,
//         wheelX: "none",
//         wheelY: "none",
//         pinchZoomX: false,
//         paddingLeft: 0,
//         paddingRight: 0,
//       })
//     );

//     // Prevent amCharts from auto-coloring
//     chart.get("colors").set("step", 0);

//     const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
//     cursor.lineY.set("visible", false);

//     const xRenderer = am5xy.AxisRendererX.new(root, {
//       minGridDistance: 30,
//       minorGridEnabled: true,
//     });

//     xRenderer.labels.template.setAll({
//       rotation: -45,
//       centerY: am5.p50,
//       centerX: am5.p100,
//       paddingRight: 15,
//     });

//     const xAxis = chart.xAxes.push(
//       am5xy.CategoryAxis.new(root, {
//         categoryField: "day",
//         renderer: xRenderer,
//         tooltip: am5.Tooltip.new(root, {}),
//       })
//     );

//     const yAxis = chart.yAxes.push(
//       am5xy.ValueAxis.new(root, {
//         renderer: am5xy.AxisRendererY.new(root, {
//           strokeOpacity: 0.1,
//         }),
//       })
//     );

//     const series = chart.series.push(
//       am5xy.ColumnSeries.new(root, {
//         name: "Revenue",
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: "revenue",
//         categoryXField: "day",
//         tooltip: am5.Tooltip.new(root, {
//           labelText: "${valueY}",
//         }),
//       })
//     );

//     // Rounded columns
//     series.columns.template.setAll({
//       cornerRadiusTL: 30,
//       cornerRadiusTR: 30,
//       cornerRadiusBL: 30,
//       cornerRadiusBR: 30,
//       strokeOpacity: 0,
//       width: am5.percent(15),
//     });

//     // Apply gradient fill for each bar
//     series.columns.template.adapters.add("fill", (fill, target) => {
//       return am5.LinearGradient.new(root, {
//         rotation: 270, // Gradient from top to bottom
//         stops: [
//           { color: am5.color(0x10b981), offset: 0 }, // Green bottom
//           { color: am5.color(0x3b82f6), offset: 1 }, // Blue top
//         ],
//       });
//     });

//     // Data for the graph
//     const data = [
//       { day: "Mon", revenue: 1200 },
//       { day: "Tue", revenue: 1500 },
//       { day: "Wed", revenue: 1800 },
//       { day: "Thu", revenue: 1300 },
//       { day: "Fri", revenue: 2000 },
//       { day: "Sat", revenue: 1700 },
//       { day: "Sun", revenue: 900 },
//     ];

//     xAxis.data.setAll(data);
//     series.data.setAll(data);

//     series.appear(1000);
//     chart.appear(1000, 100);

//     return () => root.dispose();
//   }, []);

//   return (
//     <div id="chartdiv" className="w-full h-[400px] mx-auto" />
//   );
// };

// export default Graph;

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { day: "Mon", revenue: 1200 },
  { day: "Tue", revenue: 1500 },
  { day: "Wed", revenue: 1800 },
  { day: "Thu", revenue: 1300 },
  { day: "Fri", revenue: 2000 },
  { day: "Sat", revenue: 1700 },
  { day: "Sun", revenue: 1900 },
];

const Graph = () => {
  const [barSize, setBarSize] = useState(15); 

  useEffect(() => {
    const updateBarSize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setBarSize(10); 
      } else if (width >= 1024) {
        setBarSize(15); 
      } else {
        setBarSize(15); 
      }
    };

    updateBarSize(); // run on mount
    window.addEventListener("resize", updateBarSize); 

    return () => window.removeEventListener("resize", updateBarSize);
  }, []);

  return (
    <div className="w-full h-[250px] md:h-[100%] lg:h-[400px] shadow-sm shadow-gray-300 rounded-2xl p-2 lg:p-5">
      <p className="font-bold p-1 text-sm md:text-lg lg:text-xl">
        Revenue trend
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 10, left: 0, bottom: 40 }}
          className="text-xs md:text-lg lg:text-lg"
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="1%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="99%" stopColor="#22bb88" stopOpacity={1.9} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="5 4" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar
            dataKey="revenue"
            fill="url(#barGradient)"
            radius={[18, 12, 10, 10]}
            barSize={barSize}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
