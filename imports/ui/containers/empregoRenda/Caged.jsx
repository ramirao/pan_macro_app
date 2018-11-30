import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import AreaChart from 'recharts/lib/chart/AreaChart';
import Area from 'recharts/lib/cartesian/Area';
import Typography from '@material-ui/core/Typography';



class Caged extends React.Component {
    constructor(){
      super()
      this.state = {
          indicador:[ ]
      }

 }
componentDidMount(){
  

    var xhr = new XMLHttpRequest()
    xhr.open("GET", 'http://ipeadata2-homologa.ipea.gov.br/api/v1/ValoresSerie(SERCODIGO=\'CAGED12_SALDO12\')', true)
    xhr.onload = function(e){
      if (xhr.readyState === 4 && xhr.status === 200){
        var resultado = (JSON.parse(xhr.response)).value;
        resultado.forEach(function (o) {
            Object.keys(o).forEach(function (k) {
                switch (k) {
                    case ('SERCODIGO'):
                    delete o[k];
                    break;
                    case ('VALDATA'):
                    o.date = o[k].slice(0,10);
                    delete o[k];
                    break;
                    case ('DIA'):
                    delete o[k];
                    break;
                    case ('MES'):
                    delete o[k];
                    break;
                    case ('ANO'):
                    delete o[k];
                    break; 
                    case ('VALVALOR'):
                    o.Emprego = o[k];
                    delete o[k];
                    break;
                    case ('NIVNOME'):
                    delete o[k];
                    break;
                    case ('TERCODIGO'):
                    delete o[k];
                    break;case ('TERNOME'):
                    delete o[k];
                    break;
                }
            });
        }); 


          resultado=resultado.slice(-60);
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
              Emprego Líquido 
           </Typography>
            <ResponsiveContainer  width="99%" height={320}>
        <AreaChart  data={this.state.indicador} > 
                <defs>
                <linearGradient id="colorEmp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff1493" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ff1493" stopOpacity={0}/>
                </linearGradient>
            </defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
                    <YAxis  domain={[-40000,100000]}/> 
                    <Tooltip/>
                    <Legend />
                    <Area type="monotone" dataKey="Emprego" stroke="#ff1493" fillOpacity={1} fill="url(#colorEmp)" />
                </AreaChart>
            </ResponsiveContainer>
       </div> 
          
    )};
};

export default Caged;