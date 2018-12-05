import React from 'react';
import DivBruGovGeralPIB from './containers/contasPublicas/DivBruGovGeralPIB';
import DivLiqSetPubPIB from './containers/contasPublicas/DivLiqSetPubPIB';
import ResultPrimNom from './containers/contasPublicas/ResultPrimNom';
import Typography from '@material-ui/core/Typography';

function ContasPub() {
    return (
  <div>
      <Typography variant="display2" gutterBottom>
        Contas Públicas:
      </Typography>
      <ResultPrimNom />
      <DivLiqSetPubPIB />
      <DivBruGovGeralPIB />
  </div>
      
);
};

export default ContasPub;