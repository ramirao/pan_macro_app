import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import ItemControl from './itemControl';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuários" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Relatórios" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Todos" />
    </ListItem>
  </div>
);
const controls = [
  {label:'Juros', type:'juros', primary:'Expectativas de Mercado'},
  {label:'Atividade', type:'atividade', primary:'Atividade Econômica'},
  {label:'Emprego', type:'emprego', primary:'Emprego e Renda'},
  {label:'Precos', type:'precos', primary:'Preços e Inflação'},
  {label:'M_credito', type:'m_credito', primary:'Mercado de Crédito'},
  {label:'M_financeiro', type:'m_financeiro', primary:'Mercado Financeiro'},
  {label:'Com_exterior', type:'com_exterior', primary:'Comércio Exterior'},
  {label:'Contas_externas', type:'contas_externas', primary:'Contas Externas'},
  {label:'Contas_publicas', type:'contas_publicas', primary:'Contas Públicas'},
  {label:'Eco_internacional', type:'eco_internacional', primary:'Economia Internacional'}
 ];


 const SecondaryListItems = (props) => (
  <div>
    <ListSubheader inset>Temas:</ListSubheader>
    {controls.map(ctrl => (
      <ItemControl
        key={ctrl.label}
        label={ctrl.label}
        primary={ctrl.primary}
        show={( )=> props.mostrarTopico(ctrl.type)} />
    ))}
  </div>
);

export default SecondaryListItems;