import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Dashboard from './Dashboard';

const theme = createMuiTheme({
    palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
    },
  });

export default class App extends React.Component { 
  
    render() {
       
        return (
              <MuiThemeProvider theme={theme}>
                   <Dashboard/>
              </MuiThemeProvider>
                        
        )
    }
};