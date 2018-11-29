import React from 'react';
import PropTypes from 'prop-types';
import PibSetorBarChart from './PibSetorBarChart';
import MerFinanceiro from './MerFinanceiro';
import PrecosLineChart from './PrecosLineChart';
import EmpregoRenda from './EmpregoRenda';
import IndexConfianca from './IndexConfianca';
import ContasExternas from './ContasExternas';
import MercadoCredito from './MercadoCredito';
import ComExterior from './ComExterior';


class Topicos extends React.Component {
  render () {
    let topico = null;
    switch(this.props.type) {
      case ('juros'):
        topico=<MerFinanceiro />;
      break;
      case ('atividade'):
        topico=<PibSetorBarChart />;
      break;
      case ('emprego'):
       topico=<EmpregoRenda />;
      break;
      case ('precos'):
        topico=<PrecosLineChart />;
      break; 
      case ('m_credito'):
        topico=<MercadoCredito />;
      break; 
      case ('m_financeiro'):
       topico=<MerFinanceiro />;
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