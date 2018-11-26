import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
//import ReferenceLine 'recharts/lib/cartesian/ReferenceLine';
import Brush from 'recharts/lib/cartesian/Brush';
import Typography from '@material-ui/core/Typography';

const data = 
[{"dt":"III - 2011","Agro":4.23,"Ind":5.03,"Ser":4.28},{"dt":"IV - 2011","Agro":5.64,"Ind":4.11,"Ser":3.46},{"dt":"I - 2012","Agro":0.8,"Ind":3.33,"Ser":2.84},
{"dt":"II - 2012","Agro":0.56,"Ind":1.23,"Ser":2.37},{"dt":"III - 2012","Agro":-0.08,"Ind":0.1,"Ser":2.49},{"dt":"IV - 2012","Agro":-3.08,"Ind":-0.72,"Ser":2.9},
{"dt":"I - 2013","Agro":5.57,"Ind":-1.61,"Ser":3.05},{"dt":"II - 2013","Agro":8.44,"Ind":0.26,"Ser":3.22},{"dt":"III - 2013","Agro":6.35,"Ind":1.13,"Ser":3.08},
{"dt":"IV - 2013","Agro":8.36,"Ind":2.17,"Ser":2.75},{"dt":"I - 2014","Agro":4.76,"Ind":3.45,"Ser":2.75},{"dt":"II - 2014","Agro":2.09,"Ind":1.44,"Ser":2.14},
{"dt":"III - 2014","Agro":3.06,"Ind":-0.25,"Ser":1.54},{"dt":"IV - 2014","Agro":2.79,"Ind":-1.51,"Ser":0.99},{"dt":"I - 2015","Agro":2.84,"Ind":-3.41,"Ser":0.03},
{"dt":"II - 2015","Agro":3.97,"Ind":-3.73,"Ser":-0.66},{"dt":"III - 2015","Agro":3.68,"Ind":-4.3,"Ser":-1.61},{"dt":"IV - 2015","Agro":3.31,"Ind":-5.76,"Ser":-2.74},
{"dt":"I - 2016","Agro":-0.79,"Ind":-6.4,"Ser":-3.32},{"dt":"II - 2016","Agro":-3.07,"Ind":-6.03,"Ser":-3.43},{"dt":"III - 2016","Agro":-3.9,"Ind":-5.29,"Ser":-3.1},
{"dt":"IV - 2016","Agro":-4.31,"Ind":-3.96,"Ser":-2.6},{"dt":"I - 2017","Agro":3.11,"Ind":-2.53,"Ser":-2.12},{"dt":"II - 2017","Agro":8.4,"Ind":-2.2,"Ser":-1.53},
{"dt":"III - 2017","Agro":11.55,"Ind":-1.38,"Ser":-0.76},{"dt":"IV - 2017","Agro":13,"Ind":0.02,"Ser":0.26},{"dt":"I - 2018","Agro":6.13,"Ind":0.64,"Ser":1.03},
{"dt":"II - 2018*","Agro":null,"Ind":null,"Ser":null},{"dt":"III - 2018*","Agro":null,"Ind":null,"Ser":null}];

 function PibSetorBarChart() {
	  return (
    <div>
        <Typography variant="display1" gutterBottom>
              PIB por setor: 
        </Typography>
        <ResponsiveContainer width="99%" height={320}>
           	<BarChart data={data} >
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                <XAxis dataKey="dt"/>
                <YAxis domain={[-7,14]}/>
                <Tooltip/>
                <Legend />
               
                <Bar dataKey="Agro" fill="#ff4040" />
                <Bar dataKey="Ind" fill="#8a2be2" />
                <Bar dataKey="Ser" fill="#458b00" />
            </BarChart>
        </ResponsiveContainer>
    </div>
        
  );
};



export default PibSetorBarChart;