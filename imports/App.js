import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import React from 'react';
import { render } from 'react-dom';

import ViewModel from 'viewmodel-react';


import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



App({
  render(){
   <div> 
	   <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
	   			
	   				<Header/>
	   				
	   			
	   	</MuiThemeProvider>
	   	
	    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		
					<Body/>
		
		</MuiThemeProvider>
	   	
	   
    </div>
  }
});