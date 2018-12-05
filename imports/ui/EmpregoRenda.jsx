import React from 'react';
import Pea from './containers/empregoRenda/Pea';
import TxDesemprego from './containers/empregoRenda/TxDesemprego';
import Caged from './containers/empregoRenda/Caged';
import Typography from '@material-ui/core/Typography';


function EmpregoRenda() {
    return (
  <div>
      <Typography variant="display2" gutterBottom>
        Emprego e Renda:
     </Typography>
      <TxDesemprego/>
      <Pea />
      <Caged />
  </div>
      
);
};

export default EmpregoRenda;