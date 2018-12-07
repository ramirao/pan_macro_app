import React from 'react';
import DivBruGovGeralPIB from './containers/contasPublicas/DivBruGovGeralPIB';
import DivLiqSetPubPIB from './containers/contasPublicas/DivLiqSetPubPIB';
import ResultPrimNom from './containers/contasPublicas/ResultPrimNom';
import ResulPrimario from './containers/contasPublicas/ResulPrimario';
import Typography from '@material-ui/core/Typography';

function ContasPub() {
    return (
  <div>
      <Typography variant="display1" gutterBottom>
        Contas Públicas
      </Typography>
      <ResulPrimario />
      <ResultPrimNom />
      <DivLiqSetPubPIB />
      <DivBruGovGeralPIB />
  </div>
      
);
};

export default ContasPub;