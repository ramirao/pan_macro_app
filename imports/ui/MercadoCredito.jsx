import React from 'react';
import Typography from '@material-ui/core/Typography';
import ConCredLiv from './containers/merCredito/ConCredLiv';
import CompRenda from './containers/merCredito/CompRenda';
import CreLivDir from './containers/merCredito/CreLivDir';
import EndFamilias from './containers/merCredito/EndFamilias';
import PfTotalSpread from './containers/merCredito/PfTotalSpread';
import PfSpread from './containers/merCredito/PfSpread';
import PjSpread from './containers/merCredito/PjSpread';

function MercadoCredito() {
    return (
  <div>
      <Typography variant="display1" gutterBottom>
        Mercado de Crédito
      </Typography>
      <CreLivDir />
      <ConCredLiv />
      <CompRenda />
      <EndFamilias />
      <PfTotalSpread />
      <PfSpread />
      <PjSpread />
  </div>
      
);
};

export default MercadoCredito;