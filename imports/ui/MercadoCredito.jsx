import React from 'react';
import ConCredLiv from './containers/merCredito/ConCredLiv';
import CompRenda from './containers/merCredito/CompRenda';
import CreLivDir from './containers/merCredito/CreLivDir';
import Typography from '@material-ui/core/Typography';

function MercadoCredito() {
    return (
  <div>
      <Typography variant="display2" gutterBottom>
        Mercado de Crédito:
      </Typography>
      <CreLivDir />
      <ConCredLiv />
      <CompRenda />
  </div>
      
);
};

export default MercadoCredito;