import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import Typography from '@material-ui/core/Typography';

const data = 
[{"dt":"jul/09","IPCA_12_meses":4.5,"INPC_12_meses":4.57,"IGP_DI_12_meses":-1.01},{"dt":"ago/09","IPCA_12_meses":4.36,"INPC_12_meses":4.44,"IGP_DI_12_meses":-0.54},
{"dt":"set/09","IPCA_12_meses":4.34,"INPC_12_meses":4.45,"IGP_DI_12_meses":-0.65},{"dt":"out/09","IPCA_12_meses":4.17,"INPC_12_meses":4.18,"IGP_DI_12_meses":-1.76},
{"dt":"nov/09","IPCA_12_meses":4.22,"INPC_12_meses":4.17,"IGP_DI_12_meses":-1.76},{"dt":"dez/09","IPCA_12_meses":4.31,"INPC_12_meses":4.11,"IGP_DI_12_meses":-1.44},
{"dt":"jan/10","IPCA_12_meses":4.59,"INPC_12_meses":4.36,"IGP_DI_12_meses":-0.45},{"dt":"fev/10","IPCA_12_meses":4.83,"INPC_12_meses":4.77,"IGP_DI_12_meses":0.77},
{"dt":"mar/10","IPCA_12_meses":5.17,"INPC_12_meses":5.3,"IGP_DI_12_meses":2.26},{"dt":"abr/10","IPCA_12_meses":5.26,"INPC_12_meses":5.49,"IGP_DI_12_meses":2.95},
{"dt":"mai/10","IPCA_12_meses":5.22,"INPC_12_meses":5.31,"IGP_DI_12_meses":4.38},{"dt":"jun/10","IPCA_12_meses":4.84,"INPC_12_meses":4.76,"IGP_DI_12_meses":5.07},
{"dt":"jul/10","IPCA_12_meses":4.6,"INPC_12_meses":4.44,"IGP_DI_12_meses":5.98},{"dt":"ago/10","IPCA_12_meses":4.49,"INPC_12_meses":4.29,"IGP_DI_12_meses":7.05},
{"dt":"set/10","IPCA_12_meses":4.7,"INPC_12_meses":4.68,"IGP_DI_12_meses":7.96},{"dt":"out/10","IPCA_12_meses":5.2,"INPC_12_meses":5.39,"IGP_DI_12_meses":9.12},
{"dt":"nov/10","IPCA_12_meses":5.64,"INPC_12_meses":6.08,"IGP_DI_12_meses":10.76},{"dt":"dez/10","IPCA_12_meses":5.91,"INPC_12_meses":6.47,"IGP_DI_12_meses":11.31},
{"dt":"jan/11","IPCA_12_meses":5.99,"INPC_12_meses":6.53,"IGP_DI_12_meses":11.27},{"dt":"fev/11","IPCA_12_meses":6.01,"INPC_12_meses":6.36,"IGP_DI_12_meses":11.13},
{"dt":"mar/11","IPCA_12_meses":6.3,"INPC_12_meses":6.31,"IGP_DI_12_meses":11.11},{"dt":"abr/11","IPCA_12_meses":6.51,"INPC_12_meses":6.3,"IGP_DI_12_meses":10.86},
{"dt":"mai/11","IPCA_12_meses":6.55,"INPC_12_meses":6.44,"IGP_DI_12_meses":9.16},{"dt":"jun/11","IPCA_12_meses":6.71,"INPC_12_meses":6.8,"IGP_DI_12_meses":8.65},
{"dt":"jul/11","IPCA_12_meses":6.87,"INPC_12_meses":6.87,"IGP_DI_12_meses":8.36},{"dt":"ago/11","IPCA_12_meses":7.23,"INPC_12_meses":7.39,"IGP_DI_12_meses":7.83},
{"dt":"set/11","IPCA_12_meses":7.31,"INPC_12_meses":7.3,"IGP_DI_12_meses":7.46},{"dt":"out/11","IPCA_12_meses":6.97,"INPC_12_meses":6.66,"IGP_DI_12_meses":6.79},
{"dt":"nov/11","IPCA_12_meses":6.64,"INPC_12_meses":6.17,"IGP_DI_12_meses":5.58},{"dt":"dez/11","IPCA_12_meses":6.5,"INPC_12_meses":6.08,"IGP_DI_12_meses":5.01},
{"dt":"jan/12","IPCA_12_meses":6.22,"INPC_12_meses":5.63,"IGP_DI_12_meses":4.31},{"dt":"fev/12","IPCA_12_meses":5.85,"INPC_12_meses":5.47,"IGP_DI_12_meses":3.39},
{"dt":"mar/12","IPCA_12_meses":5.24,"INPC_12_meses":4.97,"IGP_DI_12_meses":3.33},{"dt":"abr/12","IPCA_12_meses":5.1,"INPC_12_meses":4.88,"IGP_DI_12_meses":3.87},
{"dt":"mai/12","IPCA_12_meses":4.99,"INPC_12_meses":4.86,"IGP_DI_12_meses":4.8},{"dt":"jun/12","IPCA_12_meses":4.92,"INPC_12_meses":4.91,"IGP_DI_12_meses":5.66},
{"dt":"jul/12","IPCA_12_meses":5.2,"INPC_12_meses":5.36,"IGP_DI_12_meses":7.32},{"dt":"ago/12","IPCA_12_meses":5.24,"INPC_12_meses":5.39,"IGP_DI_12_meses":8.05},
{"dt":"set/12","IPCA_12_meses":5.28,"INPC_12_meses":5.58,"IGP_DI_12_meses":8.19},{"dt":"out/12","IPCA_12_meses":5.45,"INPC_12_meses":5.99,"IGP_DI_12_meses":7.42},
{"dt":"nov/12","IPCA_12_meses":5.53,"INPC_12_meses":5.96,"IGP_DI_12_meses":7.23},{"dt":"dez/12","IPCA_12_meses":5.84,"INPC_12_meses":6.2,"IGP_DI_12_meses":8.11},
{"dt":"jan/13","IPCA_12_meses":6.15,"INPC_12_meses":6.63,"IGP_DI_12_meses":8.12},{"dt":"fev/13","IPCA_12_meses":6.31,"INPC_12_meses":6.77,"IGP_DI_12_meses":8.26},
{"dt":"mar/13","IPCA_12_meses":6.59,"INPC_12_meses":7.22,"IGP_DI_12_meses":7.99},{"dt":"abr/13","IPCA_12_meses":6.49,"INPC_12_meses":7.16,"IGP_DI_12_meses":6.84},
{"dt":"mai/13","IPCA_12_meses":6.5,"INPC_12_meses":6.95,"IGP_DI_12_meses":6.21},{"dt":"jun/13","IPCA_12_meses":6.7,"INPC_12_meses":6.97,"IGP_DI_12_meses":6.29},
{"dt":"jul/13","IPCA_12_meses":6.27,"INPC_12_meses":6.38,"IGP_DI_12_meses":4.84},{"dt":"ago/13","IPCA_12_meses":6.09,"INPC_12_meses":6.07,"IGP_DI_12_meses":3.98},
{"dt":"set/13","IPCA_12_meses":5.86,"INPC_12_meses":5.69,"IGP_DI_12_meses":4.48},{"dt":"out/13","IPCA_12_meses":5.84,"INPC_12_meses":5.58,"IGP_DI_12_meses":5.46},
{"dt":"nov/13","IPCA_12_meses":5.77,"INPC_12_meses":5.58,"IGP_DI_12_meses":5.5},{"dt":"dez/13","IPCA_12_meses":5.91,"INPC_12_meses":5.56,"IGP_DI_12_meses":5.53},
{"dt":"jan/14","IPCA_12_meses":5.59,"INPC_12_meses":5.26,"IGP_DI_12_meses":5.62},{"dt":"fev/14","IPCA_12_meses":5.68,"INPC_12_meses":5.38,"IGP_DI_12_meses":6.31},
{"dt":"mar/14","IPCA_12_meses":6.15,"INPC_12_meses":5.62,"IGP_DI_12_meses":7.55},{"dt":"abr/14","IPCA_12_meses":6.28,"INPC_12_meses":5.81,"IGP_DI_12_meses":8.1},
{"dt":"mai/14","IPCA_12_meses":6.38,"INPC_12_meses":6.08,"IGP_DI_12_meses":7.27},{"dt":"jun/14","IPCA_12_meses":6.52,"INPC_12_meses":6.06,"IGP_DI_12_meses":5.79},
{"dt":"jul/14","IPCA_12_meses":6.5,"INPC_12_meses":6.33,"IGP_DI_12_meses":5.06},{"dt":"ago/14","IPCA_12_meses":6.51,"INPC_12_meses":6.35,"IGP_DI_12_meses":4.64},
{"dt":"set/14","IPCA_12_meses":6.75,"INPC_12_meses":6.59,"IGP_DI_12_meses":3.26},{"dt":"out/14","IPCA_12_meses":6.59,"INPC_12_meses":6.34,"IGP_DI_12_meses":3.22},
{"dt":"nov/14","IPCA_12_meses":6.56,"INPC_12_meses":6.33,"IGP_DI_12_meses":4.1},{"dt":"dez/14","IPCA_12_meses":6.41,"INPC_12_meses":6.23,"IGP_DI_12_meses":3.78},
{"dt":"jan/15","IPCA_12_meses":7.14,"INPC_12_meses":7.13,"IGP_DI_12_meses":4.06},{"dt":"fev/15","IPCA_12_meses":7.7,"INPC_12_meses":7.68,"IGP_DI_12_meses":3.73},
{"dt":"mar/15","IPCA_12_meses":8.13,"INPC_12_meses":8.42,"IGP_DI_12_meses":3.45},{"dt":"abr/15","IPCA_12_meses":8.17,"INPC_12_meses":8.34,"IGP_DI_12_meses":3.94},
{"dt":"mai/15","IPCA_12_meses":8.47,"INPC_12_meses":8.76,"IGP_DI_12_meses":4.82},{"dt":"jun/15","IPCA_12_meses":8.89,"INPC_12_meses":9.31,"IGP_DI_12_meses":6.21},
{"dt":"jul/15","IPCA_12_meses":9.56,"INPC_12_meses":9.81,"IGP_DI_12_meses":7.41},{"dt":"ago/15","IPCA_12_meses":9.53,"INPC_12_meses":9.88,"IGP_DI_12_meses":7.78},
{"dt":"set/15","IPCA_12_meses":9.49,"INPC_12_meses":9.9,"IGP_DI_12_meses":9.29},{"dt":"out/15","IPCA_12_meses":9.93,"INPC_12_meses":10.33,"IGP_DI_12_meses":10.56},
{"dt":"nov/15","IPCA_12_meses":10.48,"INPC_12_meses":10.97,"IGP_DI_12_meses":10.61},{"dt":"dez/15","IPCA_12_meses":10.67,"INPC_12_meses":11.28,"IGP_DI_12_meses":10.68},
{"dt":"jan/16","IPCA_12_meses":10.71,"INPC_12_meses":11.31,"IGP_DI_12_meses":11.62},{"dt":"fev/16","IPCA_12_meses":10.36,"INPC_12_meses":11.08,"IGP_DI_12_meses":11.91},
{"dt":"mar/16","IPCA_12_meses":9.39,"INPC_12_meses":9.91,"IGP_DI_12_meses":11.05},{"dt":"abr/16","IPCA_12_meses":9.28,"INPC_12_meses":9.83,"IGP_DI_12_meses":10.43},
{"dt":"mai/16","IPCA_12_meses":9.32,"INPC_12_meses":9.82,"IGP_DI_12_meses":11.24},{"dt":"jun/16","IPCA_12_meses":8.84,"INPC_12_meses":9.49,"IGP_DI_12_meses":12.29},
{"dt":"jul/16","IPCA_12_meses":8.74,"INPC_12_meses":9.56,"IGP_DI_12_meses":11.2},{"dt":"ago/16","IPCA_12_meses":8.97,"INPC_12_meses":9.62,"IGP_DI_12_meses":11.24},
{"dt":"set/16","IPCA_12_meses":8.48,"INPC_12_meses":9.15,"IGP_DI_12_meses":9.71},{"dt":"out/16","IPCA_12_meses":7.87,"INPC_12_meses":8.5,"IGP_DI_12_meses":7.96},
{"dt":"nov/16","IPCA_12_meses":6.99,"INPC_12_meses":7.39,"IGP_DI_12_meses":6.74},{"dt":"dez/16","IPCA_12_meses":6.29,"INPC_12_meses":6.58,"IGP_DI_12_meses":7.15},
{"dt":"jan/17","IPCA_12_meses":5.35,"INPC_12_meses":5.44,"IGP_DI_12_meses":5.99},{"dt":"fev/17","IPCA_12_meses":4.76,"INPC_12_meses":4.69,"IGP_DI_12_meses":5.22},
{"dt":"mar/17","IPCA_12_meses":4.57,"INPC_12_meses":4.57,"IGP_DI_12_meses":4.38},{"dt":"abr/17","IPCA_12_meses":4.08,"INPC_12_meses":3.99,"IGP_DI_12_meses":2.71},
{"dt":"mai/17","IPCA_12_meses":3.6,"INPC_12_meses":3.35,"IGP_DI_12_meses":1.05},{"dt":"jun/17","IPCA_12_meses":3,"INPC_12_meses":2.56,"IGP_DI_12_meses":-1.53},
{"dt":"jul/17","IPCA_12_meses":2.71,"INPC_12_meses":2.08,"IGP_DI_12_meses":-1.44},{"dt":"ago/17","IPCA_12_meses":2.46,"INPC_12_meses":1.73,"IGP_DI_12_meses":-1.63},
{"dt":"set/17","IPCA_12_meses":2.54,"INPC_12_meses":1.63,"IGP_DI_12_meses":-1.05},{"dt":"out/17","IPCA_12_meses":2.7,"INPC_12_meses":1.83,"IGP_DI_12_meses":-1.08},
{"dt":"nov/17","IPCA_12_meses":2.8,"INPC_12_meses":1.94,"IGP_DI_12_meses":-0.33},{"dt":"dez/17","IPCA_12_meses":2.95,"INPC_12_meses":2.07,"IGP_DI_12_meses":-0.42},
{"dt":"jan/18","IPCA_12_meses":2.86,"INPC_12_meses":1.87,"IGP_DI_12_meses":-0.27},{"dt":"fev/18","IPCA_12_meses":2.84,"INPC_12_meses":1.81,"IGP_DI_12_meses":-0.18},
{"dt":"mar/18","IPCA_12_meses":2.68,"INPC_12_meses":1.56,"IGP_DI_12_meses":0.76},{"dt":"abr/18","IPCA_12_meses":2.76,"INPC_12_meses":1.69,"IGP_DI_12_meses":2.97},
{"dt":"mai/18","IPCA_12_meses":2.85,"INPC_12_meses":1.76,"IGP_DI_12_meses":5.2},{"dt":"jun/18","IPCA_12_meses":4.39,"INPC_12_meses":3.53,"IGP_DI_12_meses":7.79},
{"dt":"jul/18","IPCA_12_meses":4.48,"INPC_12_meses":3.61,"IGP_DI_12_meses":8.59},{"dt":"ago/18","IPCA_12_meses":4.34,"INPC_12_meses":3.78,"IGP_DI_12_meses":8.76},
{"dt":"set/18","IPCA_12_meses":4.4,"INPC_12_meses":4.07,"IGP_DI_12_meses":8.52},{"dt":"out/18","IPCA_12_meses":4.27,"INPC_12_meses":4.04,"IGP_DI_12_meses":8.84},
{"dt":"nov/18","IPCA_12_meses":4.29,"INPC_12_meses":4.21,"IGP_DI_12_meses":8.41},{"dt":"dez/18","IPCA_12_meses":4.19,"INPC_12_meses":4.25,"IGP_DI_12_meses":8},
{"dt":"jan/19","IPCA_12_meses":0,"INPC_12_meses":0,"IGP_DI_12_meses":0},{"dt":"fev/19","IPCA_12_meses":0,"INPC_12_meses":0,"IGP_DI_12_meses":0},
{"dt":"mar/19","IPCA_12_meses":0,"INPC_12_meses":0,"IGP_DI_12_meses":0}];

 function PrecosLineChart() {
	  return (
     <div>
        <Typography variant="title" gutterBottom>
              Inflação: 
        </Typography>
        <ResponsiveContainer width="99%" height={320}>
            <LineChart data={data}>
                <XAxis dataKey="dt" />
                <YAxis domain={[-2,11]}/>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="IPCA_12_meses" stroke="#FF0000" fill="#FF0000" />
                <Line type="monotone" dataKey="INPC_12_meses" stroke="#00bfff" fill="#00bfff" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="IGP_DI_12_meses" stroke="#a2cd5a" fill="#a2cd5a"/>
            </LineChart>
        </ResponsiveContainer>
     </div>   
        
  );
};

export default PrecosLineChart;