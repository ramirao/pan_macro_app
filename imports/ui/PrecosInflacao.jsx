import React from 'react';
import Ipca_ipca15 from './containers/precosInflacao/Ipca_ipca15';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function PrecosInflacao() {
    return (
  <div>
      <Paper>
       <Typography variant="display1" gutterBottom>
           Preços e Inflação:
        </Typography>
      </Paper>
      <Ipca_ipca15 />
  </div>
      
);
};

export default PrecosInflacao;