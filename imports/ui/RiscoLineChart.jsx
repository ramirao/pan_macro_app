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
import Typography from '@material-ui/core/Typography';

const data = 
[{"dt":"jul/09","EMBI":284,"CDS_10":199.84},{"dt":"ago/09","EMBI":265,"CDS_10":154.45},{"dt":"set/09","EMBI":271,"CDS_10":167.64},
{"dt":"out/09","EMBI":234,"CDS_10":153.99},{"dt":"nov/09","EMBI":240,"CDS_10":163.65},{"dt":"dez/09","EMBI":231,"CDS_10":153.53},
{"dt":"jan/10","EMBI":192,"CDS_10":145.27},{"dt":"fev/10","EMBI":234,"CDS_10":167.33},{"dt":"mar/10","EMBI":215,"CDS_10":152.47},
{"dt":"abr/10","EMBI":185,"CDS_10":155.55},{"dt":"mai/10","EMBI":196,"CDS_10":147.5},{"dt":"jun/10","EMBI":235,"CDS_10":160.53},
{"dt":"jul/10","EMBI":248,"CDS_10":164.83},{"dt":"ago/10","EMBI":214,"CDS_10":142.03},{"dt":"set/10","EMBI":233,"CDS_10":155.65},
{"dt":"out/10","EMBI":206,"CDS_10":144.01},{"dt":"nov/10","EMBI":175,"CDS_10":127.53},{"dt":"dez/10","EMBI":198,"CDS_10":153.7},
{"dt":"jan/11","EMBI":189,"CDS_10":141.85},{"dt":"fev/11","EMBI":179,"CDS_10":151.42},{"dt":"mar/11","EMBI":177,"CDS_10":152.49},
{"dt":"abr/11","EMBI":173,"CDS_10":156.39},{"dt":"mai/11","EMBI":169,"CDS_10":150.01},{"dt":"jun/11","EMBI":175,"CDS_10":149.84},
{"dt":"jul/11","EMBI":154,"CDS_10":155.11},{"dt":"ago/11","EMBI":160,"CDS_10":151.31},{"dt":"set/11","EMBI":194,"CDS_10":180.83},
{"dt":"out/11","EMBI":274,"CDS_10":229.14},{"dt":"nov/11","EMBI":227,"CDS_10":168.33},{"dt":"dez/11","EMBI":224,"CDS_10":193.36},
{"dt":"jan/12","EMBI":208,"CDS_10":188.87},{"dt":"fev/12","EMBI":221,"CDS_10":172.27},{"dt":"mar/12","EMBI":194,"CDS_10":172.19},
{"dt":"abr/12","EMBI":176,"CDS_10":157.81},{"dt":"mai/12","EMBI":186,"CDS_10":159.31},{"dt":"jun/12","EMBI":243,"CDS_10":208.61},
{"dt":"jul/12","EMBI":213,"CDS_10":198.7},{"dt":"ago/12","EMBI":183,"CDS_10":174.65},{"dt":"set/12","EMBI":181,"CDS_10":173.13},
{"dt":"out/12","EMBI":166,"CDS_10":151.67},{"dt":"nov/12","EMBI":157,"CDS_10":152.17},{"dt":"dez/12","EMBI":153,"CDS_10":149.33},
{"dt":"jan/13","EMBI":142,"CDS_10":147.7},{"dt":"fev/13","EMBI":155,"CDS_10":155.09},{"dt":"mar/13","EMBI":178,"CDS_10":169.21},
{"dt":"abr/13","EMBI":189,"CDS_10":175.39},{"dt":"mai/13","EMBI":173,"CDS_10":152.78},{"dt":"jun/13","EMBI":206,"CDS_10":193.66},
{"dt":"jul/13","EMBI":237,"CDS_10":228.43},{"dt":"ago/13","EMBI":235,"CDS_10":230.16},{"dt":"set/13","EMBI":251,"CDS_10":251.16},
{"dt":"out/13","EMBI":236,"CDS_10":219.31},{"dt":"nov/13","EMBI":220,"CDS_10":215.65},{"dt":"dez/13","EMBI":247,"CDS_10":253.43},
{"dt":"jan/14","EMBI":224,"CDS_10":244.83},{"dt":"fev/14","EMBI":272,"CDS_10":262.2},{"dt":"mar/14","EMBI":245,"CDS_10":229.85},
{"dt":"abr/14","EMBI":228,"CDS_10":226.81},{"dt":"mai/14","EMBI":211,"CDS_10":203.92},{"dt":"jun/14","EMBI":208,"CDS_10":200},
{"dt":"jul/14","EMBI":208,"CDS_10":199.88},{"dt":"ago/14","EMBI":212,"CDS_10":214.18},{"dt":"set/14","EMBI":205,"CDS_10":189},
{"dt":"out/14","EMBI":239,"CDS_10":237.83},{"dt":"nov/14","EMBI":233,"CDS_10":215.5},{"dt":"dez/14","EMBI":238,"CDS_10":217.47},
{"dt":"jan/15","EMBI":259,"CDS_10":259.37},{"dt":"fev/15","EMBI":324,"CDS_10":281.75},{"dt":"mar/15","EMBI":322,"CDS_10":298.96},
{"dt":"abr/15","EMBI":322,"CDS_10":333.03},{"dt":"mai/15","EMBI":295,"CDS_10":288.51},{"dt":"jun/15","EMBI":294,"CDS_10":296.41},
{"dt":"jul/15","EMBI":304,"CDS_10":326.71},{"dt":"ago/15","EMBI":315,"CDS_10":355.68},{"dt":"set/15","EMBI":340,"CDS_10":411.02},
{"dt":"out/15","EMBI":442,"CDS_10":519.07},{"dt":"nov/15","EMBI":410,"CDS_10":480.93},{"dt":"dez/15","EMBI":432,"CDS_10":490.53},
{"dt":"jan/16","EMBI":523,"CDS_10":558.17},{"dt":"fev/16","EMBI":512,"CDS_10":532.81},{"dt":"mar/16","EMBI":502,"CDS_10":532.5},
{"dt":"abr/16","EMBI":409,"CDS_10":438.8},{"dt":"mai/16","EMBI":385,"CDS_10":410.4},{"dt":"jun/16","EMBI":403,"CDS_10":432.38},
{"dt":"jul/16","EMBI":350,"CDS_10":393.5},{"dt":"ago/16","EMBI":339,"CDS_10":370.09},{"dt":"set/16","EMBI":309,"CDS_10":338.94},
{"dt":"out/16","EMBI":319,"CDS_10":347.49},{"dt":"nov/16","EMBI":313,"CDS_10":346.92},{"dt":"dez/16","EMBI":337,"CDS_10":374.62},
{"dt":"jan/17","EMBI":328,"CDS_10":359.51},{"dt":"fev/17","EMBI":289,"CDS_10":343.34},{"dt":"mar/17","EMBI":286,"CDS_10":314.37},
{"dt":"abr/17","EMBI":270,"CDS_10":319.01},{"dt":"mai/17","EMBI":263,"CDS_10":310.1},{"dt":"jun/17","EMBI":284,"CDS_10":332.82},
{"dt":"jul/17","EMBI":289,"CDS_10":346.19},{"dt":"ago/17","EMBI":267,"CDS_10":321.64},{"dt":"set/17","EMBI":272,"CDS_10":311.65},
{"dt":"out/17","EMBI":247,"CDS_10":305.69},{"dt":"nov/17","EMBI":243,"CDS_10":277.56},{"dt":"dez/17","EMBI":241,"CDS_10":272.4},
{"dt":"jan/18","EMBI":240,"CDS_10":259.48},{"dt":"fev/18","EMBI":229,"CDS_10":239.35},{"dt":"mar/18","EMBI":238,"CDS_10":263.59},
{"dt":"abr/18","EMBI":246,"CDS_10":268},{"dt":"mai/18","EMBI":null,"CDS_10":null},{"dt":"jun/18","EMBI":null,"CDS_10":null},
{"dt":"jul/18","EMBI":null,"CDS_10":null},{"dt":"ago/18","EMBI":null,"CDS_10":null},{"dt":"set/18","EMBI":null,"CDS_10":null},
{"dt":"out/18","EMBI":null,"CDS_10":null},{"dt":"nov/18","EMBI":null,"CDS_10":null},{"dt":"dez/18","EMBI":null,"CDS_10":null},
{"dt":"jan/19","EMBI":null,"CDS_10":null},{"dt":"fev/19","EMBI":null,"CDS_10":null},{"dt":"mar/19","EMBI":null,"CDS_10":null}];

 function RiscoLineChart() {
	  return (
        
    <div>
        <Typography variant="display1" gutterBottom>
              Risco País: 
        </Typography>
        <ResponsiveContainer width="99%" height={320}>
            <LineChart data={data}>
                <XAxis dataKey="dt" />
                <YAxis domain={[100,600]}/>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="EMBI" stroke="#ff3e96" fill="#ff3e96"/>
                <Line type="monotone" dataKey="CDS_10" stroke="#00868b" fill='#00868b'  activeDot={{ r: 8 }} />
                <Brush />
            </LineChart>
        </ResponsiveContainer>
  </div>
        
  );
};



export default RiscoLineChart;