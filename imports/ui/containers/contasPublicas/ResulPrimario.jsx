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


class ResulPrimario extends React.Component {
    constructor(){
      super()
      this.state = {
          indicador:[ ]         
      };

 }
componentDidMount(){
    var apiRequest1 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.5783/dados?formato=json').then(function(response){ 
        return response.json()
        });
    var apiRequest2 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.5786/dados?formato=json').then(function(response){
        return response.json()
        });
    var apiRequest3 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.5789/dados?formato=json').then(function(response){
            return response.json()
            });
        var combinedData = {"apiRequest1":{},"apiRequest2":{},"apiRequest3":{}};
    
        Promise.all([apiRequest1,apiRequest2, apiRequest3]).then(values=>{
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
                    o.gov_central = -o[k];
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
                        o.esta_munic= -o[k];
                        delete o[k];
                    }
                });
            });
            var pg= values[2].slice(-100);
            for(var i = 0; i < pg.length; i++){
            var obj = pg[i];
            for(var prop in obj){
                if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
                    obj[prop] = +obj[prop];   
                }
            }
        }
            pg.forEach(function (o) {
                Object.keys(o).forEach(function (k) {
                    if (k !== 'data') {
                        o.estatais= -o[k];
                        delete o[k];
                    }
                });
            });
        var data = new Array(pf.length);
        for (let i=0; i<pf.length; i++) {
            data[i]=Object.assign(pf[i], pj[i],pg[i]);
          };
        
          this.setState({indicador: data});
        });

    
    
}
    
 render() {
	  return (
    <div>
        <Typography variant="title" gutterBottom>
              Resultado Primário do Setor Público Consolidado: 
        </Typography>
        <ResponsiveContainer width="99%" height={320}>
            <LineChart data={this.state.indicador}>
                <XAxis dataKey="data" />
                <YAxis yAxisId="left" domain={[-3.5,3.5]}/> 
                <YAxis yAxisId="right" domain={[-0.6,1]} orientation='right' tickLine={false} axisLine={false} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" yAxisId="left" dataKey="gov_central" stroke="#ee7ae9" fill="#ee7ae9" />
                <Line type="monotone" yAxisId="right" dataKey="esta_munic" stroke="#40e0d0" fill="#40e0d0" activeDot={{ r: 8 }} />
                <Line type="monotone" yAxisId="right" dataKey="estatais" stroke="#ffa500" fill="#ffa500"/>
               
            </LineChart>
        </ResponsiveContainer>
    </div>
        
  )};
      }


export default ResulPrimario;