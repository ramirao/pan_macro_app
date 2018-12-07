import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import Typography from '@material-ui/core/Typography';


class Igp extends React.Component {
    constructor(){
      super()
      this.state = {
          indicador:[ ]         
      };

 }
componentDidMount(){
    var apiRequest1 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.7447/dados?formato=json').then(function(response){ 
        return response.json()
        });
    var apiRequest2 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.189/dados?formato=json').then(function(response){
        return response.json()
        });
    var apiRequest3 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.190/dados?formato=json').then(function(response){
            return response.json()
            });
        var combinedData = {"apiRequest1":{},"apiRequest2":{},"apiRequest3":{}};
    
        Promise.all([apiRequest1,apiRequest2, apiRequest3]).then(values=>{
          var pf= values[0].slice(-18);
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
                    o.igp_10 = o[k];
                    delete o[k];
                }
            });
        });

            var pj= values[1].slice(-18);
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
                        o.igp_m= o[k];
                        delete o[k];
                    }
                });
            });
            var pg= values[2].slice(-18);
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
                        o.igp_di= o[k];
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
              Índice Geral de Preços - séries encadeadas: 
        </Typography>
        <ResponsiveContainer width="99%" height={320}>
           	<BarChart data={this.state.indicador} >
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                <XAxis dataKey="data"/>
                <YAxis domain={[-1.5,2.2]}/>
                <Tooltip/>
                <Legend />
               
                <Bar dataKey="igp_10" fill="#ff4040" />
                <Bar dataKey="igp_m" fill="#8a2be2" />
                <Bar dataKey="igp_di" fill="#458b00" />
            </BarChart>
        </ResponsiveContainer>
    </div>
        
  )};
      }


export default Igp;