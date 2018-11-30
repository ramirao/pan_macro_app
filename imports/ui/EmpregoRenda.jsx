import React from 'react';
import Pea from './containers/empregoRenda/Pea';
import TxDesemprego from './containers/empregoRenda/TxDesemprego';
import Caged from './containers/empregoRenda/Caged';


function EmpregoRenda() {
    return (
  <div>
      <TxDesemprego/>
      <Pea />
      <Caged />
  </div>
      
);
};

export default EmpregoRenda;