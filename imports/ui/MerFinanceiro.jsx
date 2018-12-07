import React from 'react';
import JurosLineChart from './containers/merFinanceiro/JurosLineChart';
import RiscoLineChart from './containers/merFinanceiro/RiscoLineChart';
import Typography from '@material-ui/core/Typography';


function MerFinanceiro() {
    return (
  <div>
      <Typography variant="display1" gutterBottom>
        Mercado Financeiro
      </Typography>
      <JurosLineChart />
      <RiscoLineChart />
  </div>
      
);
};

export default MerFinanceiro;