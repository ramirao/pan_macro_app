import React from 'react';
import TxCambioNom from './containers/comExterior/TxCambioNom';
import Typography from '@material-ui/core/Typography';

function ComExterior() {
    return (
  <div>
    <Typography variant="display2" gutterBottom>
     Comércio Exterior:
    </Typography>
      <TxCambioNom />
  </div>
      
);
};

export default ComExterior;