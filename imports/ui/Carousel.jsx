import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Panorama Macroeconômico:',
    imgPath:
      'http://www.funprespjud.com.br/wp-content/uploads/bfi_thumb/Ministerio_PlanejamentoDesenvolvimento_Gestao_noticia-nz25obl27h12xz62f2s0l6stv27mnfjb68nx0q25o8.jpg',
  },
  {
    label: '- Expectativas de Mercado',
    imgPath:
      'http://focoamerica.com/wp-content/uploads/2017/10/mercado-1500x550.jpg',
  },
  {
    label: '- Emprego e Renda',
    imgPath:
      'https://oimparcial.com.br/media/2018/08/emprego.jpg',
  },
  {
    label: '- Preços e Inflação',
    imgPath:
      'https://abrilveja.files.wordpress.com/2017/05/compras-em-supermercado-economia-pib-20151126-0018.jpg?quality=70&strip=info&resize=680,453',
  },
  {
    label: '- Mercado Financeiro',
    imgPath:
      'https://i1.wp.com/oportaln10.com.br/wp-content/uploads/2017/07/bolsa-de-valores-mercado-financeiro-1.jpg?resize=768%2C432&ssl=1',
  },
  {
    label: '- Produção Industrial',
    imgPath:
      'http://www.energia.sp.gov.br/wp-content/uploads/2018/02/3_gm25-01-10.jpg',
  },
  {
    label: '- Comércio Exterior',
    imgPath:
      'https://industriahoje.com.br/wp-content/uploads/2016/02/Portos-Rumo-a-Santos-768x431.jpg',
  }
 ];

const styles = theme => ({
  root: {
    maxWidth: 1600,
    flexGrow: 1,
 },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 650,
    display: 'block',
    maxWidth: 1600,
    overflow: 'hidden',
    width: '100%',
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography variant="display1" gutterBottom>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);