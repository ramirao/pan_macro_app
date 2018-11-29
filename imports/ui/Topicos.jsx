import React from 'react';
import PropTypes from 'prop-types';
import PibSetorBarChart from './PibSetorBarChart';
import JurosLineChart from './JurosLineChart';
import RiscoLineChart from './RiscoLineChart';
import PrecosLineChart from './PrecosLineChart';
import EmpregoChart from './EmpregoChart';
import IndexConfianca from './IndexConfianca';
import ContasExternas from './ContasExternas';
import MercadoCredito from './MercadoCredito';
import ComExterior from './ComExterior';

class Topicos extends React.Component {
  render () {
    let topico = null;
    switch(this.props.type) {
      case ('juros'):
        topico=<JurosLineChart />;
      break;
      case ('atividade'):
        topico=<PibSetorBarChart />;
      break;
      case ('emprego'):
       topico=<EmpregoChart />;
      break;
      case ('precos'):
        topico=<PrecosLineChart />;
      break; 
      case ('m_credito'):
        topico=<MercadoCredito />;
      break; 
      case ('m_financeiro'):
       topico=<RiscoLineChart />;
      break;
      case ('com_exterior'):
        topico=<ComExterior />;
      break; 
      case ('contas_externas'):
        topico=<ContasExternas />;
      break; 
      case ('contas_publicas'):
       topico=<IndexConfianca />;
      break;
      case ('eco_internacional'):
        topico=<TransacoesCorrentes />;
      break; 
    default:
       topico=null;     
    }

    return topico;
  }

}

Topicos.propTypes = {
  type: PropTypes.string.isRequired
};

export default Topicos;