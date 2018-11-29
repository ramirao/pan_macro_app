import React from 'react';
import JurosLineChart from './containers/merFinanceiro/JurosLineChart';
import RiscoLineChart from './containers/merFinanceiro/RiscoLineChart';


function MerFinanceiro() {
    return (
  <div>
      <JurosLineChart />
      <RiscoLineChart />
  </div>
      
);
};

export default MerFinanceiro;