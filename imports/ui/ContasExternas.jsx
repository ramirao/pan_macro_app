import React from 'react';
import TransacoesCorrentes from './containers/contasExternas/TransacoesCorrentes';
import Typography from '@material-ui/core/Typography';

function ContasExternas() {
    return (
  <div>
    <Typography variant="display2" gutterBottom>
        Contas Externas:
    </Typography>
      <TransacoesCorrentes />
  </div>
      
);
};

export default ContasExternas;