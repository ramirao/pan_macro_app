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



class DivLiqSetPubPIB extends React.Component {
    constructor(){
      super()
      this.state = {
          indicador:[ ]
      }

 }
componentDidMount(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4513/dados?formato=json', true)
    xhr.onload = function(e){
      if (xhr.readyState === 4 && xhr.status === 200){
          var resultado = (JSON.parse(xhr.response).slice(-120));
            for(var i = 0; i < resultado.length; i++){
            var obj = resultado[i];
            for(var prop in obj){
                if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
                    obj[prop] = +obj[prop];   
                }
            }
        }
        resultado.forEach(function (o) {
            Object.keys(o).forEach(function (k) {
                if (k !== 'data') {
                    o.DLSP = o[k];
                    delete o[k];
                }
            });
        });



          this.setState({ indicador: resultado
            
          })
        } else {
          console.error(xhr.statusText)
        }
      
    }.bind(this)
xhr.onerror = function(e){
      console.error(xhr.statusText)
    }
    xhr.send(null)
  }

render() {
    return (
       <div>
           <Typography variant="title" gutterBottom>
              Dívida Líquida do Setor Público (DLSP)
           </Typography>
            <ResponsiveContainer  width="99%" height={320}>
                <BarChart  data={this.state.indicador} > 
                            
                    <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                    <XAxis dataKey="data"/>
                    <YAxis  domain={[0,60]}/> 
                    
                    <Tooltip/>
                    <Legend />
                    <Bar type="monotone" dataKey="DLSP" fill="#66cd00" />
                </BarChart>
            </ResponsiveContainer>
       </div> 
          
    )};
};

export default DivLiqSetPubPIB;