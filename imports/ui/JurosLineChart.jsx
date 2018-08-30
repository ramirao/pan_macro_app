import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import AreaChart from 'recharts/lib/chart/AreaChart';
import Area from 'recharts/lib/cartesian/Area';
import Brush from 'recharts/lib/cartesian/Brush';

const data = 
[{"dt":"jul/09","CDI":8.93,"Swap_DI_Pre_180":8.7,"Swap_DI_Pre_360":9.21},{"dt":"ago/09","CDI":8.62,"Swap_DI_Pre_180":8.72,"Swap_DI_Pre_360":9.2},
{"dt":"set/09","CDI":8.62,"Swap_DI_Pre_180":8.82,"Swap_DI_Pre_360":9.65},{"dt":"out/09","CDI":8.62,"Swap_DI_Pre_180":8.9,"Swap_DI_Pre_360":9.93},
{"dt":"nov/09","CDI":8.63,"Swap_DI_Pre_180":9.07,"Swap_DI_Pre_360":10.12},{"dt":"dez/09","CDI":8.61,"Swap_DI_Pre_180":9.21,"Swap_DI_Pre_360":10.46},
{"dt":"jan/10","CDI":8.62,"Swap_DI_Pre_180":9.38,"Swap_DI_Pre_360":10.46},{"dt":"fev/10","CDI":8.62,"Swap_DI_Pre_180":9.81,"Swap_DI_Pre_360":10.75},
{"dt":"mar/10","CDI":8.61,"Swap_DI_Pre_180":9.84,"Swap_DI_Pre_360":10.85},{"dt":"abr/10","CDI":8.7,"Swap_DI_Pre_180":10.77,"Swap_DI_Pre_360":11.66},
{"dt":"mai/10","CDI":9.38,"Swap_DI_Pre_180":10.86,"Swap_DI_Pre_360":11.54},{"dt":"jun/10","CDI":9.91,"Swap_DI_Pre_180":11.34,"Swap_DI_Pre_360":11.86},
{"dt":"jul/10","CDI":10.3,"Swap_DI_Pre_180":10.81,"Swap_DI_Pre_360":11.16},{"dt":"ago/10","CDI":10.64,"Swap_DI_Pre_180":10.77,"Swap_DI_Pre_360":11.1},
{"dt":"set/10","CDI":10.62,"Swap_DI_Pre_180":10.76,"Swap_DI_Pre_360":11.28},{"dt":"out/10","CDI":10.64,"Swap_DI_Pre_180":10.79,"Swap_DI_Pre_360":11.21},
{"dt":"nov/10","CDI":10.64,"Swap_DI_Pre_180":11.46,"Swap_DI_Pre_360":11.94},{"dt":"dez/10","CDI":10.64,"Swap_DI_Pre_180":11.6,"Swap_DI_Pre_360":12.03},
{"dt":"jan/11","CDI":10.83,"Swap_DI_Pre_180":12.03,"Swap_DI_Pre_360":12.44},{"dt":"fev/11","CDI":11.15,"Swap_DI_Pre_180":12.33,"Swap_DI_Pre_360":12.62},
{"dt":"mar/11","CDI":11.6,"Swap_DI_Pre_180":12.03,"Swap_DI_Pre_360":12.28},{"dt":"abr/11","CDI":11.72,"Swap_DI_Pre_180":12.24,"Swap_DI_Pre_360":12.52},
{"dt":"mai/11","CDI":11.89,"Swap_DI_Pre_180":12.32,"Swap_DI_Pre_360":12.45},{"dt":"jun/11","CDI":12.05,"Swap_DI_Pre_180":12.47,"Swap_DI_Pre_360":12.64},
{"dt":"jul/11","CDI":12.24,"Swap_DI_Pre_180":12.48,"Swap_DI_Pre_360":12.58},{"dt":"ago/11","CDI":12.4,"Swap_DI_Pre_180":11.67,"Swap_DI_Pre_360":11.22},
{"dt":"set/11","CDI":11.88,"Swap_DI_Pre_180":10.71,"Swap_DI_Pre_360":10.38},{"dt":"out/11","CDI":11.68,"Swap_DI_Pre_180":10.59,"Swap_DI_Pre_360":10.3},
{"dt":"nov/11","CDI":11.37,"Swap_DI_Pre_180":10.07,"Swap_DI_Pre_360":9.66},{"dt":"dez/11","CDI":10.87,"Swap_DI_Pre_180":10.16,"Swap_DI_Pre_360":10.04},
{"dt":"jan/12","CDI":10.62,"Swap_DI_Pre_180":9.67,"Swap_DI_Pre_360":9.55},{"dt":"fev/12","CDI":10.3,"Swap_DI_Pre_180":9.35,"Swap_DI_Pre_360":9.26},
{"dt":"mar/12","CDI":9.66,"Swap_DI_Pre_180":8.91,"Swap_DI_Pre_360":8.96},{"dt":"abr/12","CDI":9.19,"Swap_DI_Pre_180":8.32,"Swap_DI_Pre_360":8.33},
{"dt":"mai/12","CDI":8.72,"Swap_DI_Pre_180":7.94,"Swap_DI_Pre_360":7.93},{"dt":"jun/12","CDI":8.35,"Swap_DI_Pre_180":7.64,"Swap_DI_Pre_360":7.57},
{"dt":"jul/12","CDI":8.02,"Swap_DI_Pre_180":7.36,"Swap_DI_Pre_360":7.46},{"dt":"ago/12","CDI":7.78,"Swap_DI_Pre_180":7.27,"Swap_DI_Pre_360":7.49},
{"dt":"set/12","CDI":7.36,"Swap_DI_Pre_180":7.27,"Swap_DI_Pre_360":7.48},{"dt":"out/12","CDI":7.18,"Swap_DI_Pre_180":7.11,"Swap_DI_Pre_360":7.24},
{"dt":"nov/12","CDI":7.08,"Swap_DI_Pre_180":7.07,"Swap_DI_Pre_360":7.17},{"dt":"dez/12","CDI":6.94,"Swap_DI_Pre_180":7.09,"Swap_DI_Pre_360":7.14},
{"dt":"jan/13","CDI":6.93,"Swap_DI_Pre_180":7.08,"Swap_DI_Pre_360":7.26},{"dt":"fev/13","CDI":6.96,"Swap_DI_Pre_180":7.46,"Swap_DI_Pre_360":7.76},
{"dt":"mar/13","CDI":6.99,"Swap_DI_Pre_180":7.48,"Swap_DI_Pre_360":7.92},{"dt":"abr/13","CDI":7.1,"Swap_DI_Pre_180":7.82,"Swap_DI_Pre_360":8.01},
{"dt":"mai/13","CDI":7.25,"Swap_DI_Pre_180":8.36,"Swap_DI_Pre_360":8.67},{"dt":"jun/13","CDI":7.72,"Swap_DI_Pre_180":8.91,"Swap_DI_Pre_360":9.39},
{"dt":"jul/13","CDI":8.05,"Swap_DI_Pre_180":8.92,"Swap_DI_Pre_360":9.29},{"dt":"ago/13","CDI":8.27,"Swap_DI_Pre_180":9.57,"Swap_DI_Pre_360":10.19},
{"dt":"set/13","CDI":8.72,"Swap_DI_Pre_180":9.64,"Swap_DI_Pre_360":10.07},{"dt":"out/13","CDI":9.16,"Swap_DI_Pre_180":10.11,"Swap_DI_Pre_360":10.5},
{"dt":"nov/13","CDI":9.33,"Swap_DI_Pre_180":10.22,"Swap_DI_Pre_360":10.6},{"dt":"dez/13","CDI":9.78,"Swap_DI_Pre_180":10.28,"Swap_DI_Pre_360":10.57},
{"dt":"jan/14","CDI":10.05,"Swap_DI_Pre_180":11.22,"Swap_DI_Pre_360":11.77},{"dt":"fev/14","CDI":10.32,"Swap_DI_Pre_180":10.89,"Swap_DI_Pre_360":11.22},
{"dt":"mar/14","CDI":10.56,"Swap_DI_Pre_180":10.97,"Swap_DI_Pre_360":11.38},{"dt":"abr/14","CDI":10.77,"Swap_DI_Pre_180":10.95,"Swap_DI_Pre_360":11.33},
{"dt":"mai/14","CDI":10.8,"Swap_DI_Pre_180":10.84,"Swap_DI_Pre_360":11.1},{"dt":"jun/14","CDI":10.8,"Swap_DI_Pre_180":10.78,"Swap_DI_Pre_360":10.91},
{"dt":"jul/14","CDI":10.8,"Swap_DI_Pre_180":10.79,"Swap_DI_Pre_360":10.97},{"dt":"ago/14","CDI":10.82,"Swap_DI_Pre_180":10.87,"Swap_DI_Pre_360":11.09},
{"dt":"set/14","CDI":10.82,"Swap_DI_Pre_180":11.24,"Swap_DI_Pre_360":11.77},{"dt":"out/14","CDI":10.85,"Swap_DI_Pre_180":11.75,"Swap_DI_Pre_360":12.17},
{"dt":"nov/14","CDI":11.09,"Swap_DI_Pre_180":12.12,"Swap_DI_Pre_360":12.44},{"dt":"dez/14","CDI":11.51,"Swap_DI_Pre_180":12.6,"Swap_DI_Pre_360":12.96},
{"dt":"jan/15","CDI":11.74,"Swap_DI_Pre_180":12.6,"Swap_DI_Pre_360":12.75},{"dt":"fev/15","CDI":12.09,"Swap_DI_Pre_180":12.91,"Swap_DI_Pre_360":13.05},
{"dt":"mar/15","CDI":12.53,"Swap_DI_Pre_180":13.37,"Swap_DI_Pre_360":13.52},{"dt":"abr/15","CDI":12.63,"Swap_DI_Pre_180":13.6,"Swap_DI_Pre_360":13.67},
{"dt":"mai/15","CDI":13.13,"Swap_DI_Pre_180":13.83,"Swap_DI_Pre_360":13.76},{"dt":"jun/15","CDI":13.57,"Swap_DI_Pre_180":14.23,"Swap_DI_Pre_360":14.27},
{"dt":"jul/15","CDI":13.68,"Swap_DI_Pre_180":14.17,"Swap_DI_Pre_360":13.91},{"dt":"ago/15","CDI":14.13,"Swap_DI_Pre_180":14.35,"Swap_DI_Pre_360":14.38},
{"dt":"set/15","CDI":14.13,"Swap_DI_Pre_180":15.11,"Swap_DI_Pre_360":15.56},{"dt":"out/15","CDI":14.13,"Swap_DI_Pre_180":14.8,"Swap_DI_Pre_360":15.39},
{"dt":"nov/15","CDI":14.14,"Swap_DI_Pre_180":14.98,"Swap_DI_Pre_360":15.71},{"dt":"dez/15","CDI":14.14,"Swap_DI_Pre_180":15.18,"Swap_DI_Pre_360":15.86},
{"dt":"jan/16","CDI":14.14,"Swap_DI_Pre_180":14.38,"Swap_DI_Pre_360":14.57},{"dt":"fev/16","CDI":14.13,"Swap_DI_Pre_180":14.21,"Swap_DI_Pre_360":14.21},
{"dt":"mar/16","CDI":14.13,"Swap_DI_Pre_180":14.03,"Swap_DI_Pre_360":13.81},{"dt":"abr/16","CDI":14.13,"Swap_DI_Pre_180":13.85,"Swap_DI_Pre_360":13.22},
{"dt":"mai/16","CDI":14.13,"Swap_DI_Pre_180":13.8,"Swap_DI_Pre_360":13.18},{"dt":"jun/16","CDI":14.13,"Swap_DI_Pre_180":13.94,"Swap_DI_Pre_360":13.36},
{"dt":"jul/16","CDI":14.13,"Swap_DI_Pre_180":13.88,"Swap_DI_Pre_360":13.29},{"dt":"ago/16","CDI":14.13,"Swap_DI_Pre_180":13.86,"Swap_DI_Pre_360":13.12},
{"dt":"set/16","CDI":14.13,"Swap_DI_Pre_180":13.34,"Swap_DI_Pre_360":12.5},{"dt":"out/16","CDI":14.03,"Swap_DI_Pre_180":13.2,"Swap_DI_Pre_360":12.43},
{"dt":"nov/16","CDI":13.88,"Swap_DI_Pre_180":12.92,"Swap_DI_Pre_360":12.17},{"dt":"dez/16","CDI":13.63,"Swap_DI_Pre_180":12.45,"Swap_DI_Pre_360":11.56},
{"dt":"jan/17","CDI":13.15,"Swap_DI_Pre_180":11.65,"Swap_DI_Pre_360":10.83},{"dt":"fev/17","CDI":12.8,"Swap_DI_Pre_180":11,"Swap_DI_Pre_360":10.2},
{"dt":"mar/17","CDI":12.13,"Swap_DI_Pre_180":10.32,"Swap_DI_Pre_360":9.67},{"dt":"abr/17","CDI":11.57,"Swap_DI_Pre_180":9.75,"Swap_DI_Pre_360":9.3},
{"dt":"mai/17","CDI":11.13,"Swap_DI_Pre_180":9.39,"Swap_DI_Pre_360":9.15},{"dt":"jun/17","CDI":10.14,"Swap_DI_Pre_180":8.96,"Swap_DI_Pre_360":8.77},
{"dt":"jul/17","CDI":10,"Swap_DI_Pre_180":8.15,"Swap_DI_Pre_360":7.98},{"dt":"ago/17","CDI":9.14,"Swap_DI_Pre_180":7.63,"Swap_DI_Pre_360":7.57},
{"dt":"set/17","CDI":8.34,"Swap_DI_Pre_180":7.19,"Swap_DI_Pre_360":7.13},{"dt":"out/17","CDI":8,"Swap_DI_Pre_180":7,"Swap_DI_Pre_360":7.14},
{"dt":"nov/17","CDI":7.39,"Swap_DI_Pre_180":6.84,"Swap_DI_Pre_360":7.02},{"dt":"dez/17","CDI":6.99,"Swap_DI_Pre_180":6.67,"Swap_DI_Pre_360":6.86},
{"dt":"jan/18","CDI":6.89,"Swap_DI_Pre_180":6.62,"Swap_DI_Pre_360":6.89},{"dt":"fev/18","CDI":6.71,"Swap_DI_Pre_180":6.51,"Swap_DI_Pre_360":6.67},
{"dt":"mar/18","CDI":6.57,"Swap_DI_Pre_180":6.22,"Swap_DI_Pre_360":6.29},{"dt":"abr/18","CDI":6.39,"Swap_DI_Pre_180":6.22,"Swap_DI_Pre_360":6.38},
{"dt":"mai/18","CDI":6.39,"Swap_DI_Pre_180":6.73,"Swap_DI_Pre_360":7.22},{"dt":"jun/18","CDI":6.39,"Swap_DI_Pre_180":6.81,"Swap_DI_Pre_360":7.58},
{"dt":"jul/18","CDI":6.39,"Swap_DI_Pre_180":6.72,"Swap_DI_Pre_360":7.4},{"dt":"ago/18","CDI":null,"Swap_DI_Pre_180":null,"Swap_DI_Pre_360":null},
{"dt":"set/18","CDI":null,"Swap_DI_Pre_180":null,"Swap_DI_Pre_360":null},{"dt":"out/18","CDI":null,"Swap_DI_Pre_180":null,"Swap_DI_Pre_360":null},
{"dt":"nov/18","CDI":null,"Swap_DI_Pre_180":null,"Swap_DI_Pre_360":null},{"dt":"dez/18","CDI":null,"Swap_DI_Pre_180":null,"Swap_DI_Pre_360":null},
{"dt":"jan/19","CDI":null,"Swap_DI_Pre_180":null,"Swap_DI_Pre_360":null},{"dt":"fev/19","CDI":null,"Swap_DI_Pre_180":null,"Swap_DI_Pre_360":null},
{"dt":"mar/19","CDI":null,"Swap_DI_Pre_180":null,"Swap_DI_Pre_360":null}];

 function JurosLineChart() {
	  return (
        // 99% per https://github.com/recharts/recharts/issues/172
        <ResponsiveContainer width="99%" height={320}>
            <LineChart data={data}>
                <XAxis dataKey="dt" />
                <YAxis domain={[5,17]}/>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="CDI" stroke="#82ca9d" fill="#82ca9d" />
                <Line type="monotone" dataKey="Swap_DI_Pre_180" stroke="#8884d8" fill="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Swap_DI_Pre_360" stroke="#ffa500" fill="#ffa500"/>
               
            </LineChart>
        </ResponsiveContainer>
  );
};



export default JurosLineChart;