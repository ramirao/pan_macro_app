import React from 'react';
import Typography from '@material-ui/core/Typography';
import Ipca_ipca15 from './containers/precosInflacao/Ipca_ipca15';
import Igp from './containers/precosInflacao/Igp';


function PrecosInflacao() {
    return (
  <div>
      <Typography variant="display1" gutterBottom>
        Preços e Inflação
      </Typography>
      <Ipca_ipca15 />
      <Igp />
  </div>
      
);
};

export default PrecosInflacao;