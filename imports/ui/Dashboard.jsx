import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import  {mainListItems}  from './listItems';
import SecondaryListItems from './listItems';
//import JurosLineChart from './JurosLineChart';
//import PrecosLineChart from './PrecosLineChart';
//import RiscoLineChart  from './RiscoLineChart';
//import PibSetorBarChart from './PibSetorBarChart';
//import EmpregoChart from './EmpregoChart';
//import ContasChart from './ContasChart';
import Graficos from './Graficos';


const drawerWidth = 250;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
});

class Dashboard extends React.Component {
  state = {
    topico: {
      juros:0,
      atividade:0,
      emprego:0,
      precos:0,
      m_crédito:0,
      m_financeiro:0,
      com_exterior:0,
      contas_externas:0,
      contas_publicas:0,
      eco_internacional:0
    },
    open: true,
    showgrupo: false
    };   
  
  handleTopicoView = (type)=> {
    const oldTopico=this.state.topico[type];
    const updatedView=1;
    const updatedTopico={juros:0, atividade:0, emprego:0, precos:0, m_crédito:0, m_financeiro:0, com_exterior:0, contas_externas:0, contas_publicas:0, eco_internacional:0};
    updatedTopico[type]=updatedView;
    this.setState({topico: updatedTopico});
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  
  toggleGrupoHandler = () => {
    console.log("Click!!!")
     //this.setState({showgrupo: true});
  };

  
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap className={classes.title}>
                Seplan - Diretoria de Assuntos Macroeconômicos e Fiscais
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List><SecondaryListItems mostrarTopico={this.handleTopicoView} /></List>
          </Drawer>
          <main className={classes.content}>
           <div className={classes.appBarSpacer} />
            <Graficos topico={this.state.topico} />
            {/*<Typography variant="display1" gutterBottom>
              Juros: 
            </Typography>
            <Typography component="div" className={classes.chartContainer}>
              <JurosLineChart />
            </Typography>
            <Typography variant="display1" gutterBottom>
              Preços:
            </Typography>
            <div className={classes.chartContainer}>
              <PrecosLineChart/>
            </div>
            <Typography variant="display1" gutterBottom>
              Risco:
            </Typography>
            <div className={classes.chartContainer}>
              <RiscoLineChart />
            </div>
            <Typography variant="display1" gutterBottom>
              PIB Setorial:
            </Typography>
            <div className={classes.chartContainer}>
              <PibSetorBarChart />
            </div>
            <Typography variant="display1" gutterBottom>
              Emprego:
            </Typography>
            <div className={classes.chartContainer}>
              <EmpregoChart />
            </div>
            <Typography variant="display1" gutterBottom>
              Contas Públicas:
            </Typography>
            <div className={classes.chartContainer}>
              <ContasChart />
          
            </div>
           */}
           
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);