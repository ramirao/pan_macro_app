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



class ConCredLiv extends React.Component {
    constructor(){
      super()
      this.state = {
          indicador:[ ]         
      };

 }
componentDidMount(){
    var apiRequest1 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.20633/dados?formato=json').then(function(response){ 
        return response.json()
        });
    var apiRequest2 = fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.20632/dados?formato=json').then(function(response){
        return response.json()
        });
        var combinedData = {"apiRequest1":{},"apiRequest2":{}};
    
        Promise.all([apiRequest1,apiRequest2]).then(values=>{
          var pf= values[0].slice(-70);
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
                    o.c_pf = o[k];
                    delete o[k];
                }
            });
        });

            var pj= values[1].slice(-70);
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
                    o.c_pj = o[k];
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
              Novas Concessões de Crédito Livre - PF e PJ: 
        </Typography>
        <ResponsiveContainer width="99%" height={320}>
            <LineChart data={this.state.indicador}>
               
                <XAxis dataKey="data" />
                <YAxis domain={[80000,20000]}/>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="c_pf" stroke="#82ca9d" fill="#82ca9d" />
                <Line type="monotone" dataKey="c_pj" stroke="#8884d8" fill="#8884d8" activeDot={{ r: 8 }} />
               {/* <Line type="monotone" dataKey="Swap_DI_Pre_360" stroke="#ffa500" fill="#ffa500"/>
    */}
            </LineChart>
        </ResponsiveContainer>
       </div> 
          
    )};
};

export default ConCredLiv;