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
import Area from 'recharts/lib/cartesian/Area';
import ComposedChart from 'recharts/lib/chart/ComposedChart';



const data = 
[{"dt":"jul/14","Tx_Desemp":6.9,"Tx_Desemp_RMSP":11.3,"Empre_liq":813},{"dt":"ago/14","Tx_Desemp":6.9,"Tx_Desemp_RMSP":10.6,"Empre_liq":782},
{"dt":"set/14","Tx_Desemp":6.8,"Tx_Desemp_RMSP":10.1,"Empre_liq":693},{"dt":"out/14","Tx_Desemp":6.6,"Tx_Desemp_RMSP":9.8,"Empre_liq":545},
{"dt":"nov/14","Tx_Desemp":6.5,"Tx_Desemp_RMSP":9.9,"Empre_liq":495},{"dt":"dez/14","Tx_Desemp":6.5,"Tx_Desemp_RMSP":9.8,"Empre_liq":421},
{"dt":"jan/15","Tx_Desemp":6.8,"Tx_Desemp_RMSP":10.5,"Empre_liq":296},{"dt":"fev/15","Tx_Desemp":7.4,"Tx_Desemp_RMSP":11.4,"Empre_liq":7},
{"dt":"mar/15","Tx_Desemp":7.9,"Tx_Desemp_RMSP":12.4,"Empre_liq":8},{"dt":"abr/15","Tx_Desemp":8,"Tx_Desemp_RMSP":12.9,"Empre_liq":-209},
{"dt":"mai/15","Tx_Desemp":8.1,"Tx_Desemp_RMSP":13.2,"Empre_liq":-405},{"dt":"jun/15","Tx_Desemp":8.3,"Tx_Desemp_RMSP":13.7,"Empre_liq":-555},
{"dt":"jul/15","Tx_Desemp":8.6,"Tx_Desemp_RMSP":13.9,"Empre_liq":-735},{"dt":"ago/15","Tx_Desemp":8.7,"Tx_Desemp_RMSP":14.2,"Empre_liq":-943},
{"dt":"set/15","Tx_Desemp":8.9,"Tx_Desemp_RMSP":14.3,"Empre_liq":-1200},{"dt":"out/15","Tx_Desemp":8.9,"Tx_Desemp_RMSP":14.1,"Empre_liq":-1350},
{"dt":"nov/15","Tx_Desemp":9,"Tx_Desemp_RMSP":13.9,"Empre_liq":-1503},{"dt":"dez/15","Tx_Desemp":9,"Tx_Desemp_RMSP":14,"Empre_liq":-1535},
{"dt":"jan/16","Tx_Desemp":9.5,"Tx_Desemp_RMSP":14.7,"Empre_liq":-1565},{"dt":"fev/16","Tx_Desemp":10.2,"Tx_Desemp_RMSP":15.9,"Empre_liq":-1675},
{"dt":"mar/16","Tx_Desemp":10.9,"Tx_Desemp_RMSP":16.8,"Empre_liq":-1826},{"dt":"abr/16","Tx_Desemp":11.2,"Tx_Desemp_RMSP":17.6,"Empre_liq":-1797},
{"dt":"mai/16","Tx_Desemp":11.2,"Tx_Desemp_RMSP":17.6,"Empre_liq":-1754},{"dt":"jun/16","Tx_Desemp":11.3,"Tx_Desemp_RMSP":17.4,"Empre_liq":-1742},
{"dt":"jul/16","Tx_Desemp":11.6,"Tx_Desemp_RMSP":17.2,"Empre_liq":-1677},{"dt":"ago/16","Tx_Desemp":11.8,"Tx_Desemp_RMSP":17.5,"Empre_liq":-1622},
{"dt":"set/16","Tx_Desemp":11.8,"Tx_Desemp_RMSP":17.2,"Empre_liq":-1567},{"dt":"out/16","Tx_Desemp":11.8,"Tx_Desemp_RMSP":16.8,"Empre_liq":-1479},
{"dt":"nov/16","Tx_Desemp":11.9,"Tx_Desemp_RMSP":16.2,"Empre_liq":-1463},{"dt":"dez/16","Tx_Desemp":12,"Tx_Desemp_RMSP":17.1,"Empre_liq":-1327},
{"dt":"jan/17","Tx_Desemp":12.6,"Tx_Desemp_RMSP":17.9,"Empre_liq":-1265},{"dt":"fev/17","Tx_Desemp":13.2,"Tx_Desemp_RMSP":18.5,"Empre_liq":-1119},
{"dt":"mar/17","Tx_Desemp":13.7,"Tx_Desemp_RMSP":18.6,"Empre_liq":-1062},{"dt":"abr/17","Tx_Desemp":13.6,"Tx_Desemp_RMSP":18.8,"Empre_liq":-932},
{"dt":"mai/17","Tx_Desemp":13.3,"Tx_Desemp_RMSP":18.6,"Empre_liq":-821},{"dt":"jun/17","Tx_Desemp":13,"Tx_Desemp_RMSP":18.3,"Empre_liq":-716},
{"dt":"jul/17","Tx_Desemp":12.8,"Tx_Desemp_RMSP":17.9,"Empre_liq":-581},{"dt":"ago/17","Tx_Desemp":12.6,"Tx_Desemp_RMSP":17.8,"Empre_liq":-510},
{"dt":"set/17","Tx_Desemp":12.4,"Tx_Desemp_RMSP":17.9,"Empre_liq":-429},{"dt":"out/17","Tx_Desemp":12.2,"Tx_Desemp_RMSP":17.2,"Empre_liq":-264},
{"dt":"nov/17","Tx_Desemp":12,"Tx_Desemp_RMSP":16.9,"Empre_liq":-152},{"dt":"dez/17","Tx_Desemp":11.8,"Tx_Desemp_RMSP":16.2,"Empre_liq":-14},
{"dt":"jan/18","Tx_Desemp":12.2,"Tx_Desemp_RMSP":16.4,"Empre_liq":105},{"dt":"fev/18","Tx_Desemp":12.6,"Tx_Desemp_RMSP":16.9,"Empre_liq":127},
{"dt":"mar/18","Tx_Desemp":13.1,"Tx_Desemp_RMSP":17.5,"Empre_liq":257},{"dt":"abr/18","Tx_Desemp":12.9,"Tx_Desemp_RMSP":17.4,"Empre_liq":309},
{"dt":"mai/18","Tx_Desemp":12.7,"Tx_Desemp_RMSP":17,"Empre_liq":303},{"dt":"jun/18","Tx_Desemp":12.4,"Tx_Desemp_RMSP":null,"Empre_liq":290},
{"dt":"jul/18","Tx_Desemp":null,"Tx_Desemp_RMSP":null,"Empre_liq":286}];

 function EmpregoChart() {
	  return (
        // 99% per https://github.com/recharts/recharts/issues/172
        <ResponsiveContainer width="99%" height={320}>
           	<ComposedChart data={data} >
               <defs>
                    <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00cdcd" stopOpacity={0.8}/>
                    <stop offset="75%" stopColor="#00cdcd" stopOpacity={0.3}/>
                    </linearGradient>
                    <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                <XAxis dataKey="dt"/>
                <YAxis yAxisId="left" domain={[-20,20]} tickLine={false} axisLine={false}  /> 
                <YAxis yAxisId="right" domain={[-2000,2000]} orientation='right' tickLine={false} axisLine={false} />
                <Tooltip/>
                <Legend />
               
                <Area dataKey="Tx_Desemp" yAxisId ="left" fillOpacity={1} stroke="#82ca9d" fill="url(#colorArea)" />
                <Bar dataKey="Empre_liq" yAxisId ="right" barSize={20} fillOpacity={1} stroke="#00cdcd" fill="url(#colorBar)" />
                <Line dataKey="Tx_Desemp_RMSP" yAxisId ="left"  stroke="#ffa500" fill="#ffa500" />
            </ComposedChart>
        </ResponsiveContainer>
  );
};



export default EmpregoChart;