import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import Typography from '@material-ui/core/Typography';



class TxCambioNom extends React.Component {
    constructor(){
      super()
      this.state = {
          indicador:[ ]
      }

 }
componentDidMount(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados?formato=json', true)
    xhr.onload = function(e){
      if (xhr.readyState === 4 && xhr.status === 200){
          var resultado = (JSON.parse(xhr.response).slice(-160));
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
                    o.dolar = o[k];
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
           <Typography variant="display1" gutterBottom>
              Taxa de Câmbio Nominal Diária R$/US$: 
           </Typography>
            <ResponsiveContainer  width="99%" height={320}>
                <LineChart  data={this.state.indicador} >   
                    <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                    <XAxis dataKey="data"/>
                    <YAxis  domain={[3.3,4.3]}/> 
                    
                    <Tooltip/>
                    <Legend />
                    <Line dataKey="dolar" stroke="#82ca9d"  activeDot={{r: 8}}/>
                </LineChart>
            </ResponsiveContainer>
       </div> 
          
    )};
};

export default TxCambioNom;