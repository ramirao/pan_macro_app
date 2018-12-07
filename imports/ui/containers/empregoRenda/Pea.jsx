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



class Pea extends React.Component {
    constructor(){
      super()
      this.state = {
          indicador:[ ]
      }

 }
componentDidMount(){
    var apiRequest1 = fetch('http://ipeadata2-homologa.ipea.gov.br/api/v1/ValoresSerie(SERCODIGO=\'PNADC12_PO12\')').then(function(response){ 
        return response.json()
        });
    var apiRequest2 = fetch('http://ipeadata2-homologa.ipea.gov.br/api/v1/ValoresSerie(SERCODIGO=\'PNADC12_FT12\')').then(function(response){
        return response.json()
        });
        var combinedData = {"apiRequest1":{},"apiRequest2":{}};
    
        Promise.all([apiRequest1,apiRequest2]).then(values=>{
          var pf= values[0].value;
          
         
        pf.forEach(function (o) {
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
                    o.poc = o[k];
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

            var pj= values[1].value;
           
        pj.forEach(function (o) {
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
                    o.pea = o[k];
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
        var data = new Array(pf.length);
        for (let i=0; i<pf.length; i++) {
            data[i]=Object.assign(pf[i], pj[i]);
          };
        
          this.setState({indicador: data});
        });

    /*var xhr = new XMLHttpRequest()
    xhr.open("GET", 'http://ipeadata2-homologa.ipea.gov.br/api/v1/ValoresSerie(SERCODIGO=\'PNADC12_PO12\')', true)
    xhr.onload = function(e){
      if (xhr.readyState === 4 && xhr.status === 200){
          var resultado = (JSON.parse(xhr.response)).value;
          /* for(var i = 0; i < resultado.length; i++){
            var obj = resultado[i];
            for(var prop in obj){
                if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
                    obj[prop] = +obj[prop];   
                }
            }
        }
        //http://ipeadata2-homologa.ipea.gov.br/api/v1/ValoresSerie(SERCODIGO='PNADC12_FT12')
        resultado.forEach(function (o) {
            Object.keys(o).forEach(function (k) {
                if (k == 'VALDATA' ) {
                    o.date = o[k].slice(0,10);
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
    */
  }

render() {
    return (
       <div>
           <Typography variant="title" gutterBottom>
              Emprego: Evolução da População Ocupada e da PEA 
           </Typography>
            <ResponsiveContainer  width="99%" height={320}>
                <LineChart  data={this.state.indicador} >   
                    <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
                    <YAxis yAxisId="left" domain={[86000,94000]}/> 
                    <YAxis yAxisId="right" domain={[96000,105000]} orientation='right' tickLine={false} axisLine={false} />
                    <Tooltip/>
                    <Legend />
                    <Line dataKey="poc"  yAxisId ="left" stroke='#ffb90f' />
                    <Line dataKey="pea"  yAxisId ="right" stroke="#bf3eff"  activeDot={{r: 8}}/>
                </LineChart>
            </ResponsiveContainer>
       </div> 
          
    )};
};

export default Pea;