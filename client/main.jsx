import React from 'react';
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';


//import injectTapEventPlugin from 'react-tap-event-plugin';

import App from '../imports/ui/App';

//injectTapEventPlugin();

Meteor.startup(()=>{
    ReactDOM.render(<App />, document.getElementById("app"));
});