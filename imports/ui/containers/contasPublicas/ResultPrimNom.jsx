import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
import Typography from '@material-ui/core/Typography';

class ResultPrimNom extends React.Component {
    constructor(){
      super()
      this.state = {
          indicador:[ ]         
      };

 }
componentDidMount(){
    var apiRequest1 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.5793/dados?formato=json').then(function(response){ 
        return response.json()
        });
    var apiRequest2 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.5727/dados?formato=json').then(function(response){
        return response.json()
        });
        var combinedData = {"apiRequest1":{},"apiRequest2":{}};
    
        Promise.all([apiRequest1,apiRequest2]).then(values=>{
          var pf= values[0].slice(-120);
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
                    o.res_prim = -o[k];
                    delete o[k];
                }
            });
        });

            var pj= values[1].slice(-120);
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
                    o.res_nom = -o[k];
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
        <Typography variant="display1" gutterBottom>
              Resultado Pimário e Nominal do Setor Público Consolidado
        </Typography>
        <ResponsiveContainer width="99%" height={320}>
           	<BarChart data={this.state.indicador} >
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                <XAxis dataKey="data"/>
                <YAxis domain={[-12,4]}/>
                <Tooltip/>
                <Legend />
               
                <Bar dataKey="res_prim" fill="#6495ed" />
                <Bar dataKey="res_nom" fill="#ff4040" />
            </BarChart>
        </ResponsiveContainer>
    </div>
        
  )};

};


export default ResultPrimNom;