import React from 'react';
import TxCambioNom from './containers/comExterior/TxCambioNom';
import Typography from '@material-ui/core/Typography';
import Importacoes from './containers/comExterior/Importacoes';

function ComExterior() {
    return (
  <div>
    <Typography variant="display1" gutterBottom>
     Comércio Exterior
    </Typography>
      <TxCambioNom />
      <Importacoes/>
  </div>
      
);
};

export default ComExterior;