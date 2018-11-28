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
import Typography from '@material-ui/core/Typography';



class CreLivDir extends React.Component {
    constructor(){
      super()
      this.state = {
          indicador:[ ]         
      };

 }
componentDidMount(){
    var apiRequest1 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.20628/dados?formato=json').then(function(response){ 
        return response.json()
        });
    var apiRequest2 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.20625/dados?formato=json').then(function(response){
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
                    o.c_dir = o[k];
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
                    o.c_liv = o[k];
                    delete o[k];
                }
            });
        });
        var data = new Array(pf.length);
        for (let i=0; i<pf.length; i++) {
            data[i]=Object.assign(pf[i], pj[i]);
          };
          console.log(data);
          this.setState({indicador: data});
        });

    
    
}
    
render() {
    return (
       <div>
          <Typography variant="display1" gutterBottom>
              Novas Concessões de Crédito Livre - PF e PJ: 
        </Typography>
        <ResponsiveContainer width="99%" height={320}>
            <BarChart data={this.state.indicador}>
               
                <XAxis dataKey="data" />
                <YAxis  domain={[0,60]}/>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar  dataKey="c_liv" stackId ="a"  fill="#FF0000" />
                <Bar  dataKey="c_dir" stackId ="a"  fill="#00bfff" />
              
            </BarChart>
        </ResponsiveContainer>
       </div> 
          
    )};
};

export default CreLivDir;