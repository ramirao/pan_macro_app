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
import AreaChart from 'recharts/lib/chart/AreaChart';
import Area from 'recharts/lib/cartesian/Area';


class EndFamilias extends React.Component {
    constructor(){
      super()
      this.state = {
          indicador:[ ]         
      };

 }
componentDidMount(){
    var apiRequest1 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.20400/dados?formato=json').then(function(response){ 
        return response.json()
        });
    var apiRequest2 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.19882/dados?formato=json').then(function(response){
        return response.json()
        });
        var combinedData = {"apiRequest1":{},"apiRequest2":{}};
    
        Promise.all([apiRequest1,apiRequest2]).then(values=>{
          var pf= values[0].slice(-100);
          for(var i = 0; i < pf.length; i++){
            var obj = pf[i];
            for(var prop in obj){
                if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
                    obj[prop] = +obj[prop];   
                }
            }
        }
         
        pf.forEach(function (o) {
            Object.keys(o).forEach(function (k) {
                if (k !== 'data') {
                    o.cred = o[k];
                    delete o[k];
                }
            });
        });

            var pj= values[1].slice(-100);
            for(var i = 0; i < pf.length; i++){
            var obj = pj[i];
            for(var prop in obj){
                if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
                    obj[prop] = +obj[prop];   
                }
            }
        }
        pj.forEach(function (o) {
            Object.keys(o).forEach(function (k) {
                if (k !== 'data') {
                    o.Total = o[k];
                    delete o[k];
                }
            });
        });
        var data = new Array(pf.length);
        for (let i=0; i<pf.length; i++) {
            data[i]=Object.assign(pf[i], pj[i]);
          };
        
          this.setState({indicador: data});
        });

    
    
}
    
render() {
    return (
       <div>
          <Typography variant="title" gutterBottom>
              Endividamento das Famílias: 
        </Typography>
        <ResponsiveContainer width="99%" height={320}>
            <AreaChart data={this.state.indicador}>
            <defs>
                <linearGradient id="colorCCred" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffc125" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ffc125" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorCHab" x1="0" y1="0" x2="1" y2="1">
                <stop offset="5%" stopColor="#00bfff" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#00bfff" stopOpacity={0}/>
                </linearGradient>
            </defs>
                <XAxis dataKey="data" />
                <YAxis yAxisId="left" domain={[15,22]}/>
                <YAxis yAxisId="right" domain={[5,12]} orientation='right' tickLine={false} axisLine={false} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="cred" yAxisId ="left" stroke="#ffc125" fillOpacity={1} fill="url(#colorCCred)" />
                <Area type="monotone" dataKey="Total" yAxisId ="right" stroke="#00bfff" fillOpacity={1} fill="url(#colorCHab)"/>
            </AreaChart>
        </ResponsiveContainer>
       </div> 
          
    )};
};

export default EndFamilias;